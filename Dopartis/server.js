// server.js — Dopartis Backend
// Node.js + Express — API-Football v3 (api-sports.io)

require("dotenv").config();
const express   = require("express");
const axios     = require("axios");
const cors      = require("cors");
const NodeCache = require("node-cache");
const path      = require("path");

const app  = express();
const PORT = process.env.PORT || 3000;

// ─── CACHE ───────────────────────────────────────────────────────
const cache = new NodeCache({ stdTTL: 60 });

// ─── MIDDLEWARES ─────────────────────────────────────────────────
app.use(cors());
app.use(express.json());
// ── STATIC FILES ─────────────────────────────────────────────────
app.use(express.static(path.join(__dirname, "public")));

// ── DYNAMIC ROUTES ───────────────────────────────────────────────
// /partido/equipo1-vs-equipo2?id=XXXX → serve index.html
// The frontend JS reads the ?id= param and auto-opens the modal
app.get("/partido/:slug", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Named page routes → serve corresponding HTML
app.get("/tablas",       (req, res) => res.sendFile(path.join(__dirname, "public", "tablas.html")));
app.get("/campeones",    (req, res) => res.sendFile(path.join(__dirname, "public", "campeones.html")));
app.get("/estadisticas", (req, res) => res.sendFile(path.join(__dirname, "public", "estadisticas.html")));
app.get("/equipos",      (req, res) => res.sendFile(path.join(__dirname, "public", "equipos.html")));
app.use(express.static(path.join(__dirname)));

// ─── API CONFIG ──────────────────────────────────────────────────
const API_KEY  = process.env.APIFOOTBALL_KEY;
const API_BASE = "https://v3.football.api-sports.io";

const apiHeaders = {
  "x-apisports-key": API_KEY,
};

// ─── RATE LIMIT QUEUE ────────────────────────────────────────────
// Plan gratuito: 10 requests/minuto → 1 cada 6.5 segundos
// Ajustá QUEUE_DELAY si tenés un plan de mayor límite
const QUEUE_DELAY = 6500;
const apiQueue = [];
let apiQueueRunning = false;

function enqueueApiCall(fn) {
  return new Promise((resolve, reject) => {
    apiQueue.push({ fn, resolve, reject });
    if (!apiQueueRunning) processQueue();
  });
}

async function callWithRetry(fn, retries = 2, delay = 8000) {
  for (let i = 0; i <= retries; i++) {
    try {
      return await fn();
    } catch(e) {
      if (e.response?.status === 429 && i < retries) {
        console.log(`[RETRY ${i+1}] 429 recibido, esperando ${delay}ms...`);
        await new Promise(r => setTimeout(r, delay));
      } else {
        throw e;
      }
    }
  }
}

async function processQueue() {
  if (apiQueue.length === 0) { apiQueueRunning = false; return; }
  apiQueueRunning = true;
  const { fn, resolve, reject } = apiQueue.shift();
  try { resolve(await callWithRetry(fn)); } catch(e) { reject(e); }
  setTimeout(processQueue, QUEUE_DELAY);
}

// ─── HELPER: fetch con caché ──────────────────────────────────────
async function fetchAPI(endpoint, params = {}, ttl = 60) {
  const cacheKey = endpoint + JSON.stringify(params);
  const cached = cache.get(cacheKey);
  if (cached) {
    console.log(`[CACHE HIT] ${endpoint}`);
    return cached;
  }

  const data = await enqueueApiCall(async () => {
    const url = `${API_BASE}${endpoint}`;
    console.log(`[API CALL] ${url}`, params);
    const response = await axios.get(url, {
      headers: apiHeaders,
      params,
      timeout: 15000,
    });
    return response.data;
  });

  cache.set(cacheKey, data, ttl);
  return data;
}

// ─── ERROR HANDLER ────────────────────────────────────────────────
function handleError(res, error) {
  console.error("[ERROR]", error.message);
  if (error.response) {
    return res.status(error.response.status).json({
      error: "Error de la API externa",
      status: error.response.status,
      detail: error.response.data,
    });
  }
  res.status(500).json({ error: "Error interno", detail: error.message });
}

// ═══════════════════════════════════════════════════════════════════
// ENDPOINTS
// ═══════════════════════════════════════════════════════════════════

// ── HEALTH ────────────────────────────────────────────────────────
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    server: "Dopartis Backend v3 (API-Football)",
    timestamp: new Date().toISOString(),
    cache_keys: cache.keys().length,
    queue_length: apiQueue.length,
  });
});

// ── PARTIDOS EN VIVO ──────────────────────────────────────────────
app.get("/api/live", async (req, res) => {
  try {
    const data = await fetchAPI("/fixtures", { live: "all" }, 30);
    res.json(data);
  } catch(e) { handleError(res, e); }
});

// ── PARTIDOS POR FECHA ────────────────────────────────────────────
// ?date=YYYY-MM-DD
app.get("/api/matches/by-date", async (req, res) => {
  try {
    const { date } = req.query;
    if (!date) return res.status(400).json({ error: "Se requiere ?date=YYYY-MM-DD" });
    const data = await fetchAPI("/fixtures", { date, timezone: "America/Argentina/Buenos_Aires" }, 120);
    res.json(data);
  } catch(e) { handleError(res, e); }
});

// ── PARTIDOS POR LIGA Y FECHA ─────────────────────────────────────
// ?date=YYYY-MM-DD&leagueid=39&season=2025
app.get("/api/matches/by-date-league", async (req, res) => {
  try {
    const { date, leagueid, season } = req.query;
    if (!date || !leagueid) return res.status(400).json({ error: "Se requiere ?date y ?leagueid" });
    const s = season || new Date().getFullYear();
    const data = await fetchAPI("/fixtures", { date, league: leagueid, season: s, timezone: "America/Argentina/Buenos_Aires" }, 120);
    res.json(data);
  } catch(e) { handleError(res, e); }
});

// ── PARTIDOS EN VIVO POR LIGA ─────────────────────────────────────
// ?leagueid=39
app.get("/api/matches/live-by-league", async (req, res) => {
  try {
    const { leagueid } = req.query;
    if (!leagueid) return res.status(400).json({ error: "Se requiere ?leagueid" });
    const data = await fetchAPI("/fixtures", { live: leagueid }, 30);
    res.json(data);
  } catch(e) { handleError(res, e); }
});

// ── DETALLE DE PARTIDO ────────────────────────────────────────────
// ?fixtureid=1234
app.get("/api/match/detail", async (req, res) => {
  try {
    const { fixtureid } = req.query;
    if (!fixtureid) return res.status(400).json({ error: "Se requiere ?fixtureid" });
    const data = await fetchAPI("/fixtures", { id: fixtureid }, 30);
    res.json(data);
  } catch(e) { handleError(res, e); }
});

// ── ESTADÍSTICAS DE PARTIDO ───────────────────────────────────────
app.get("/api/match/stats", async (req, res) => {
  try {
    const { fixtureid } = req.query;
    if (!fixtureid) return res.status(400).json({ error: "Se requiere ?fixtureid" });
    const data = await fetchAPI("/fixtures/statistics", { fixture: fixtureid }, 60);
    res.json(data);
  } catch(e) { handleError(res, e); }
});

// ── EVENTOS DE PARTIDO (goles, tarjetas, subs) ────────────────────
app.get("/api/match/events", async (req, res) => {
  try {
    const { fixtureid } = req.query;
    if (!fixtureid) return res.status(400).json({ error: "Se requiere ?fixtureid" });
    const data = await fetchAPI("/fixtures/events", { fixture: fixtureid }, 30);
    res.json(data);
  } catch(e) { handleError(res, e); }
});

// ── ALINEACIONES ──────────────────────────────────────────────────
app.get("/api/match/lineups", async (req, res) => {
  try {
    const { fixtureid } = req.query;
    if (!fixtureid) return res.status(400).json({ error: "Se requiere ?fixtureid" });
    const data = await fetchAPI("/fixtures/lineups", { fixture: fixtureid }, 300);
    res.json(data);
  } catch(e) { handleError(res, e); }
});

// ── HEAD TO HEAD ──────────────────────────────────────────────────
// ?h2h=team1-team2
app.get("/api/match/h2h", async (req, res) => {
  try {
    const { h2h } = req.query;
    if (!h2h) return res.status(400).json({ error: "Se requiere ?h2h=teamId1-teamId2" });
    const data = await fetchAPI("/fixtures/headtohead", { h2h }, 3600);
    res.json(data);
  } catch(e) { handleError(res, e); }
});

// ── JORNADAS DE UNA LIGA ─────────────────────────────────────────
// ?leagueid=39&season=2024
app.get("/api/rounds", async (req, res) => {
  try {
    const { leagueid, season } = req.query;
    if (!leagueid || !season) return res.status(400).json({ error: "Se requiere ?leagueid y ?season" });
    const data = await fetchAPI("/fixtures/rounds", { league: leagueid, season, current: false }, 3600);
    res.json(data);
  } catch(e) { handleError(res, e); }
});

// ── PARTIDOS POR JORNADA ──────────────────────────────────────────
// ?leagueid=39&season=2024&round=Regular+Season+-+28
app.get("/api/matches/by-round", async (req, res) => {
  try {
    const { leagueid, season, round } = req.query;
    if (!leagueid || !season || !round) return res.status(400).json({ error: "Se requiere ?leagueid, ?season y ?round" });
    const data = await fetchAPI("/fixtures", { league: leagueid, season, round, timezone: "America/Argentina/Buenos_Aires" }, 300);
    res.json(data);
  } catch(e) { handleError(res, e); }
});

// ── TABLA DE POSICIONES ───────────────────────────────────────────
// ?leagueid=39&season=2025
app.get("/api/standings", async (req, res) => {
  try {
    const { leagueid, season } = req.query;
    if (!leagueid) return res.status(400).json({ error: "Se requiere ?leagueid" });
    const s = season || new Date().getFullYear();
    const data = await fetchAPI("/standings", { league: leagueid, season: s }, 300);
    res.json(data);
  } catch(e) { handleError(res, e); }
});

// ── GOLEADORES ────────────────────────────────────────────────────
// ?leagueid=39&season=2025
app.get("/api/top-scorers", async (req, res) => {
  try {
    const { leagueid, season } = req.query;
    if (!leagueid) return res.status(400).json({ error: "Se requiere ?leagueid" });
    const s = season || new Date().getFullYear();
    const data = await fetchAPI("/players/topscorers", { league: leagueid, season: s }, 300);
    res.json(data);
  } catch(e) { handleError(res, e); }
});

// ── ASISTIDORES ───────────────────────────────────────────────────
app.get("/api/top-assists", async (req, res) => {
  try {
    const { leagueid, season } = req.query;
    if (!leagueid) return res.status(400).json({ error: "Se requiere ?leagueid" });
    const s = season || new Date().getFullYear();
    const data = await fetchAPI("/players/topassists", { league: leagueid, season: s }, 300);
    res.json(data);
  } catch(e) { handleError(res, e); }
});

// ── TARJETAS AMARILLAS ────────────────────────────────────────────
// API-Football v3: /players/topyellowcards returns top 20 by yellow cards
app.get("/api/top-yellowcards", async (req, res) => {
  try {
    const { leagueid, season } = req.query;
    if (!leagueid) return res.status(400).json({ error: "Se requiere ?leagueid" });
    const s = season || new Date().getFullYear();
    // Try dedicated endpoint first, fall back to topscorers sorted by yellows
    let data;
    try {
      data = await fetchAPI("/players/topyellowcards", { league: leagueid, season: s }, 300);
    } catch(_) { data = null; }
    if (!data?.response?.length) {
      data = await fetchAPI("/players/topscorers", { league: leagueid, season: s }, 300);
      data = { ...data, response: (data?.response ?? [])
        .filter(p => (p.statistics?.[0]?.cards?.yellow ?? 0) > 0)
        .sort((a,b) => (b.statistics?.[0]?.cards?.yellow ?? 0) - (a.statistics?.[0]?.cards?.yellow ?? 0))
      };
    }
    res.json(data);
  } catch(e) { handleError(res, e); }
});

// ── TARJETAS ROJAS ────────────────────────────────────────────────
app.get("/api/top-redcards", async (req, res) => {
  try {
    const { leagueid, season } = req.query;
    if (!leagueid) return res.status(400).json({ error: "Se requiere ?leagueid" });
    const s = season || new Date().getFullYear();
    let data;
    try {
      data = await fetchAPI("/players/topredcards", { league: leagueid, season: s }, 300);
    } catch(_) { data = null; }
    if (!data?.response?.length) {
      data = await fetchAPI("/players/topscorers", { league: leagueid, season: s }, 300);
      data = { ...data, response: (data?.response ?? [])
        .filter(p => (p.statistics?.[0]?.cards?.red ?? 0) > 0)
        .sort((a,b) => (b.statistics?.[0]?.cards?.red ?? 0) - (a.statistics?.[0]?.cards?.red ?? 0))
      };
    }
    res.json(data);
  } catch(e) { handleError(res, e); }
});



// ── LIGAS ─────────────────────────────────────────────────────────
app.get("/api/leagues", async (req, res) => {
  try {
    const { country } = req.query;
    const params = country ? { country } : { current: "true" };
    const data = await fetchAPI("/leagues", params, 3600);
    res.json(data);
  } catch(e) { handleError(res, e); }
});

// ── HISTORIAL DE CAMPEONES POR LIGA ──────────────────────────────
// ?leagueid=39
// Obtiene las temporadas disponibles y por cada una busca el campeón
// (rank 1 en standings). Resultado cacheado 24h.
app.get("/api/champions", async (req, res) => {
  try {
    const { leagueid } = req.query;
    if (!leagueid) return res.status(400).json({ error: "Se requiere ?leagueid" });

    // 1. Get available seasons for this league
    const leagueData = await fetchAPI("/leagues", { id: leagueid }, 86400);
    const seasons = (leagueData?.response?.[0]?.seasons ?? [])
      .map(s => s.year)
      .filter(y => y >= 2010 && y <= 2025)
      .sort((a, b) => b - a); // newest first

    if (!seasons.length) return res.json({ response: [] });

    // 2. For each season fetch standings rank 1 (with longer cache)
    const results = [];
    for (const year of seasons) {
      try {
        const sd = await fetchAPI("/standings", { league: leagueid, season: year }, 86400);
        const groups = sd?.response?.[0]?.league?.standings ?? [];
        const allTeams = groups.flat();
        const champ = allTeams.find(t => (t.rank ?? t.rankPoints) === 1) ?? allTeams[0];
        if (champ?.team?.name) {
          results.push({
            year,
            winner: {
              id:   champ.team.id,
              name: champ.team.name,
              logo: champ.team.logo,
            }
          });
        }
      } catch(_) { /* skip seasons with no data */ }
    }

    res.json({ response: results });
  } catch(e) { handleError(res, e); }
});

// ── LIGAS DE UN PAÍS ──────────────────────────────────────────────
app.get("/api/leagues-by-country", async (req, res) => {
  try {
    const { country } = req.query;
    if (!country) return res.status(400).json({ error: "Se requiere ?country" });
    const data = await fetchAPI("/leagues", { country }, 86400);
    res.json(data);
  } catch(e) { handleError(res, e); }
});

// ── DEBUG — ver respuesta cruda de standings ─────────────────────
// Uso: /api/debug/standings?leagueid=128&season=2025
app.get("/api/debug/standings", async (req, res) => {
  try {
    const { leagueid, season } = req.query;
    const data = await fetchAPI("/standings", { league: leagueid, season }, 10);
    // Devuelve la estructura completa sin procesar
    res.json({
      results: data?.results,
      errors: data?.errors,
      response_length: data?.response?.length,
      first_item_keys: data?.response?.[0] ? Object.keys(data.response[0]) : [],
      league_info: data?.response?.[0]?.league ? {
        id: data.response[0].league.id,
        name: data.response[0].league.name,
        season: data.response[0].league.season,
        standings_groups: data.response[0].league.standings?.length,
        first_group_length: data.response[0].league.standings?.[0]?.length,
      } : null,
      raw_errors: data?.errors,
    });
  } catch(e) { handleError(res, e); }
});

// ── EQUIPOS ───────────────────────────────────────────────────────
app.get("/api/teams", async (req, res) => {
  try {
    const { leagueid, season } = req.query;
    if (!leagueid) return res.status(400).json({ error: "Se requiere ?leagueid" });
    const s = season || new Date().getFullYear();
    const data = await fetchAPI("/teams", { league: leagueid, season: s }, 3600);
    res.json(data);
  } catch(e) { handleError(res, e); }
});

// ── TROFEOS POR EQUIPO ────────────────────────────────────────────
// ?teamid=33
app.get("/api/trophies", async (req, res) => {
  try {
    const { teamid } = req.query;
    if (!teamid) return res.status(400).json({ error: "Se requiere ?teamid" });
    const data = await fetchAPI("/trophies", { team: teamid }, 86400);
    res.json(data);
  } catch(e) { handleError(res, e); }
});

// ── BÚSQUEDA ──────────────────────────────────────────────────────
app.get("/api/search", async (req, res) => {
  try {
    const { q } = req.query;
    if (!q) return res.status(400).json({ error: "Se requiere ?q=termino" });
    const data = await fetchAPI("/teams", { search: q }, 300);
    res.json(data);
  } catch(e) { handleError(res, e); }
});

// ── TEMPORADAS DISPONIBLES ────────────────────────────────────────
app.get("/api/seasons", async (req, res) => {
  try {
    const data = await fetchAPI("/leagues/seasons", {}, 86400);
    res.json(data);
  } catch(e) { handleError(res, e); }
});

// ─── START ────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`
╔══════════════════════════════════════════╗
║   🟢 DOPARTIS BACKEND v3                 ║
║   http://localhost:${PORT}                  ║
║   API: api-football (api-sports.io)      ║
║   Rate limit: 1 req cada ${QUEUE_DELAY}ms       ║
╚══════════════════════════════════════════╝
  `);
});