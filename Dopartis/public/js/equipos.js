// ═══════════════════════════════════════════════════════════════════
// EQUIPOS — títulos manuales
// Para actualizar títulos: buscar el ID del equipo en API-Football
// y editar el objeto TEAM_TROPHIES abajo.
// Formato: teamId: { l: ligasNacionales, c: copasNacionales, i: titulosInternacionales }
// ═══════════════════════════════════════════════════════════════════
const TEAM_TROPHIES = {
  // ── PREMIER LEAGUE ──────────────────────────────────────────────
  33:  { l:20, c:13, i:3  }, // Manchester United
  40:  { l:9,  c:8,  i:2  }, // Liverpool (actualizado 2025)
  50:  { l:10, c:8,  i:8  }, // Manchester City
  42:  { l:7,  c:8,  i:2  }, // Arsenal
  49:  { l:6,  c:8,  i:2  }, // Chelsea
  66:  { l:1,  c:3,  i:1  }, // Aston Villa
  47:  { l:1,  c:8,  i:3  }, // Tottenham
  34:  { l:4,  c:3,  i:1  }, // Newcastle
  35:  { l:0,  c:1,  i:0  }, // Bournemouth
  36:  { l:0,  c:0,  i:0  }, // Fulham
  39:  { l:0,  c:0,  i:0  }, // Wolves
  41:  { l:0,  c:0,  i:0  }, // Southampton
  45:  { l:0,  c:0,  i:0  }, // Everton
  46:  { l:1,  c:1,  i:0  }, // Leicester
  48:  { l:0,  c:0,  i:0  }, // West Ham
  51:  { l:0,  c:0,  i:0  }, // Brighton
  52:  { l:0,  c:0,  i:0  }, // Crystal Palace
  55:  { l:0,  c:0,  i:0  }, // Brentford
  57:  { l:0,  c:0,  i:0  }, // Ipswich
  65:  { l:0,  c:0,  i:0  }, // Nottm Forest
  // ── LALIGA ──────────────────────────────────────────────────────
  541: { l:35, c:20, i:15 }, // Real Madrid
  529: { l:27, c:31, i:5  }, // Barcelona
  530: { l:11, c:10, i:3  }, // Atletico Madrid
  548: { l:1,  c:6,  i:1  }, // Sevilla
  533: { l:1,  c:1,  i:0  }, // Villarreal
  536: { l:0,  c:3,  i:0  }, // Betis
  531: { l:1,  c:1,  i:0  }, // Athletic Club
  538: { l:0,  c:0,  i:0  }, // Celta Vigo
  532: { l:0,  c:0,  i:0  }, // Valencia
  534: { l:0,  c:0,  i:0  }, // Las Palmas
  540: { l:0,  c:0,  i:0  }, // Espanyol
  543: { l:0,  c:0,  i:0  }, // Real Sociedad
  546: { l:0,  c:0,  i:0  }, // Girona
  547: { l:0,  c:0,  i:0  }, // Getafe
  553: { l:0,  c:0,  i:0  }, // Alaves
  559: { l:0,  c:0,  i:0  }, // Mallorca
  569: { l:0,  c:0,  i:0  }, // Osasuna
  727: { l:0,  c:0,  i:0  }, // Rayo Vallecano
  798: { l:0,  c:0,  i:0  }, // Leganes
  // ── SERIE A ─────────────────────────────────────────────────────
  496: { l:19, c:9,  i:3  }, // Juventus
  489: { l:19, c:8,  i:7  }, // Inter
  497: { l:18, c:6,  i:7  }, // AC Milan
  499: { l:7,  c:7,  i:6  }, // Lazio (Roma)
  492: { l:3,  c:4,  i:1  }, // Napoli
  502: { l:2,  c:3,  i:2  }, // Fiorentina
  487: { l:7,  c:5,  i:0  }, // Roma
  488: { l:4,  c:5,  i:0  }, // Atalanta
  500: { l:2,  c:1,  i:0  }, // Bologna
  503: { l:1,  c:1,  i:0  }, // Torino
  505: { l:0,  c:0,  i:0  }, // Lecce
  506: { l:0,  c:0,  i:0  }, // Hellas Verona
  511: { l:0,  c:0,  i:0  }, // Udinese
  512: { l:0,  c:0,  i:0  }, // Como
  514: { l:0,  c:0,  i:0  }, // Empoli
  517: { l:0,  c:0,  i:0  }, // Venezia
  523: { l:0,  c:0,  i:0  }, // Monza
  // ── BUNDESLIGA ──────────────────────────────────────────────────
  157: { l:33, c:20, i:6  }, // Bayern Munich
  165: { l:1,  c:3,  i:1  }, // Borussia Dortmund
  168: { l:5,  c:2,  i:0  }, // Bayer Leverkusen (1er título 2024)
  163: { l:5,  c:4,  i:2  }, // Borussia Mönchengladbach
  169: { l:2,  c:2,  i:3  }, // Eintracht Frankfurt
  173: { l:3,  c:2,  i:0  }, // RB Leipzig
  161: { l:2,  c:0,  i:0  }, // VfB Stuttgart
  160: { l:2,  c:3,  i:0  }, // SC Freiburg
  162: { l:3,  c:4,  i:1  }, // Werder Bremen
  164: { l:2,  c:1,  i:0  }, // Hamburger SV
  167: { l:0,  c:1,  i:0  }, // Wolfsburg
  170: { l:0,  c:0,  i:0  }, // Augsburg
  172: { l:1,  c:0,  i:0  }, // Union Berlin
  174: { l:0,  c:0,  i:0  }, // FC Heidenheim
  175: { l:0,  c:0,  i:0  }, // Mainz
  176: { l:0,  c:0,  i:0  }, // Holstein Kiel
  // ── LIGUE 1 ─────────────────────────────────────────────────────
  85:  { l:10, c:14, i:0  }, // Paris Saint-Germain
  80:  { l:10, c:11, i:1  }, // Lyon
  81:  { l:9,  c:10, i:1  }, // Marseille
  82:  { l:8,  c:4,  i:0  }, // Lille
  83:  { l:4,  c:6,  i:0  }, // Nice
  84:  { l:1,  c:4,  i:0  }, // Montpellier
  79:  { l:0,  c:1,  i:0  }, // Toulouse
  91:  { l:0,  c:0,  i:0  }, // Reims
  93:  { l:0,  c:0,  i:0  }, // Nantes
  94:  { l:0,  c:0,  i:0  }, // Rennes
  95:  { l:0,  c:0,  i:0  }, // Strasbourg
  97:  { l:0,  c:0,  i:0  }, // Monaco
  // ── LIGA ARGENTINA ──────────────────────────────────────────────
  442: { l:36, c:17, i:3  }, // River Plate
  435: { l:35, c:18, i:6  }, // Boca Juniors
  440: { l:18, c:11, i:3  }, // Racing Club
  436: { l:16, c:12, i:2  }, // Independiente
  444: { l:13, c:7,  i:2  }, // San Lorenzo
  433: { l:10, c:7,  i:1  }, // Estudiantes
  439: { l:9,  c:5,  i:0  }, // Huracán
  437: { l:7,  c:4,  i:0  }, // Rosario Central
  438: { l:7,  c:5,  i:1  }, // Vélez Sársfield
  443: { l:5,  c:4,  i:0  }, // Lanús
  445: { l:4,  c:3,  i:0  }, // Argentinos Juniors
  // ── COPA LIBERTADORES / SUDAMERICANA ────────────────────────────
  // (equipos ya incluidos arriba en sus ligas nacionales)
};

let activeTeamsLeague = localStorage.getItem("dopartis-league-equipos") || "epl";

// IDs de competencias internacionales (sin equipos fijos por liga)
const INTL_IDS = new Set(["lib","sula","ucl","uel","uecl"]);

function buildTeamsLeagueTabs() {
  const containerId = "teams-league-tabs";
  const wrap = document.getElementById(containerId);
  wrap.innerHTML = "";
  wrap.className = "league-selector";

  const list = LEAGUES.filter(l => l.lid && !INTL_IDS.has(l.id));
  const activeL = list.find(l => l.id === activeTeamsLeague) || list[0];

  const toggle = document.createElement("div");
  toggle.className = "league-selector-toggle";
  toggle.innerHTML = `<span>Liga:</span><span class="sel-active-label" id="${containerId}-label">${activeL.flag?`<img src="${activeL.flag}" style="width:16px;height:16px;object-fit:contain;vertical-align:middle;border-radius:2px;"> `:""} ${activeL.name}</span><span class="sel-arrow">▼</span>`;

  const panel = document.createElement("div");
  panel.className = "league-selector-panel";

  const GROUPS_EQ = [
    { continent:"América", ids:["arg","bra","uru","chi","col","per","ecu","par","mex","usa"] },
    { continent:"Europa",  ids:["epl","esp","ita","ger","fra","por","ned"] },
    { continent:"Asia / Medio Oriente", ids:["sau"] },
  ];

  GROUPS_EQ.forEach(group => {
    const ids = group.ids.filter(id => list.some(l => l.id === id));
    if (!ids.length) return;
    const section = document.createElement("div");
    section.className = "lsel-continent";
    section.innerHTML = `<div class="lsel-continent-title">${group.continent}</div>`;
    const row = document.createElement("div");
    row.className = "lsel-group";
    ids.forEach(id => {
      const l = list.find(x => x.id === id);
      if (!l) return;
      const btn = document.createElement("button");
      btn.className = "ltab" + (l.id === activeTeamsLeague ? " active" : "");
      btn.dataset.id = l.id;
      const iconSrc = l.flag || l.logo;
      const iconEl = iconSrc ? `<img src="${iconSrc}" style="width:18px;height:18px;object-fit:contain;border-radius:2px;flex-shrink:0;" onerror="this.style.display='none'">` : "";
      btn.innerHTML = `${iconEl}<span>${l.name}</span>`;
      btn.onclick = () => {
        panel.querySelectorAll(".ltab").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        document.getElementById(`${containerId}-label`).innerHTML = (iconSrc?`<img src="${iconSrc}" style="width:16px;height:16px;object-fit:contain;vertical-align:middle;border-radius:2px;"> `:"") + l.name;
        panel.classList.remove("open"); toggle.classList.remove("open");
        activeTeamsLeague = l.id;
        localStorage.setItem("dopartis-league-equipos", l.id);
        if (l.lid) loadTeamsFull(l.lid);
      };
      row.appendChild(btn);
    });
    section.appendChild(row);
    panel.appendChild(section);
  });

  toggle.onclick = e => { e.stopPropagation(); panel.classList.toggle("open"); toggle.classList.toggle("open"); };
  document.addEventListener("click", () => { panel.classList.remove("open"); toggle.classList.remove("open"); });

  wrap.appendChild(toggle);
  wrap.appendChild(panel);
}

function loadTeamsView() {
  buildTeamsLeagueTabs();
  const lc = LEAGUES.find(l => l.id === activeTeamsLeague);
  if (lc?.lid) loadTeamsFull(lc.lid);
}

async function loadTeamsFull(lid) {
  lid = parseInt(lid);
  const cont = document.getElementById("teams-container");
  cont.innerHTML = loader();
  try {
    const data = await apiFetch(`/api/teams?leagueid=${lid}&season=${seasonFor(lid)}`);
    const teams = (data?.response ?? [])
      .map(t => ({ id: t.team.id, name: t.team.name, logo: t.team.logo }))
      .sort((a, b) => a.name.localeCompare(b.name));
    if (!teams.length) {
      cont.innerHTML = `<div class="empty-state"><div class="big">🏟️</div><p>Sin equipos para esta liga.</p></div>`;
      return;
    }
    const rows = teams.map(t => {
      const tr = TEAM_TROPHIES[t.id] ?? { l:0, c:0, i:0 };
      const total = tr.l + tr.c + tr.i;
      const logoEl = `<div style="width:44px;height:44px;flex-shrink:0;display:flex;align-items:center;justify-content:center;"><img src="${t.logo}" style="width:100%;height:100%;object-fit:contain;" onerror="this.style.display='none'"></div>`;
      const numStyle = `font-family:'Barlow Condensed',sans-serif;font-weight:900;font-size:28px;line-height:1;text-align:center;`;
      return `<tr class="team-table-row" onclick="openTeam(${t.id},'${t.name.replace(/'/g,"\\'")}')">
        <td style="text-align:left;min-width:200px;">
          <div style="display:flex;align-items:center;gap:12px;">${logoEl}<span style="font-size:17px;font-weight:600;">${t.name}</span></div>
        </td>
        <td style="${numStyle}color:var(--accent);">${tr.l}</td>
        <td style="${numStyle}color:var(--accent);">${tr.c}</td>
        <td style="${numStyle}color:var(--accent2);">${tr.i}</td>
        <td style="${numStyle}color:var(--text);">${total}</td>
      </tr>`;
    }).join("");

    cont.innerHTML = `
      <div style="background:var(--card);border:1px solid var(--border);border-radius:var(--radius);overflow:auto;">
        <table class="standings-full" style="table-layout:fixed;width:100%;">
          <colgroup>
            <col style="width:45%;">
            <col style="width:14%;">
            <col style="width:14%;">
            <col style="width:14%;">
            <col style="width:13%;">
          </colgroup>
          <thead><tr>
            <th style="text-align:left;">Club</th>
            <th style="text-align:center;">Ligas Nac.</th>
            <th style="text-align:center;">Copas Nac.</th>
            <th style="text-align:center;">Internac.</th>
            <th style="text-align:center;">Total</th>
          </tr></thead>
          <tbody>${rows}</tbody>
        </table>
      </div>`;
  } catch(e) {
    cont.innerHTML = errorBox(e.message);
  }
}



// ═══════════════════════════════════════════════════════════════════
// INIT — Equipos
// ═══════════════════════════════════════════════════════════════════
document.addEventListener("DOMContentLoaded", () => {
  loadTeamsView();
  loadSidebarStandings(document.getElementById("sb-standings-sel").value);
});

function refreshCurrentView() {
  loadTeamsView();
  loadSidebarStandings(document.getElementById("sb-standings-sel").value);
}
// ═══════════════════════════════════════════════════════════════════
// TEAM MODAL
// ═══════════════════════════════════════════════════════════════════
let teamModalTab = "principal";
let _teamCache   = {};
let _currentTeamId = null;

function slugifyTeam(name) {
  return (name ?? "").toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function openTeam(teamId, teamName) {
  _currentTeamId = teamId;
  teamModalTab = "principal";
  document.getElementById("team-modal").classList.add("open");
  document.body.style.overflow = "hidden";
  const slug = slugifyTeam(teamName);
  history.pushState({ teamId, slug }, "", `/equipo/${slug}?id=${teamId}`);
  loadTeamModalData(teamId);
}

function closeTeamModal() {
  document.getElementById("team-modal").classList.remove("open");
  document.body.style.overflow = "";
  _currentTeamId = null;
  history.pushState({}, "", "/equipos.html");
}

function closeTeamModalOnOverlay(e) {
  if (e.target === document.getElementById("team-modal")) closeTeamModal();
}

document.addEventListener("keydown", e => {
  if (e.key === "Escape" && document.getElementById("team-modal")?.classList.contains("open")) closeTeamModal();
});

window.addEventListener("popstate", e => {
  if (e.state?.teamId) {
    openTeam(e.state.teamId, "");
  } else {
    const modal = document.getElementById("team-modal");
    if (modal?.classList.contains("open")) {
      modal.classList.remove("open");
      document.body.style.overflow = "";
      _currentTeamId = null;
    }
  }
});

// Check URL on load
(function checkDirectTeamURL() {
  if (!window.location.pathname.startsWith("/equipo/")) return;
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"));
  if (!id) return;
  window.addEventListener("DOMContentLoaded", () => openTeam(id, ""));
})();

async function loadTeamModalData(teamId) {
  const box = document.getElementById("team-modal-content");
  box.innerHTML = `<div class="modal-loader"><div class="spinner"></div><span>Cargando equipo...</span></div>`;

  try {
    const season = new Date().getFullYear();
    const [infoRes, squadRes, playersRes] = await Promise.allSettled([
      apiFetch(`/api/team/info?teamid=${teamId}`),
      apiFetch(`/api/team/squad?teamid=${teamId}`),
      apiFetch(`/api/team/players?teamid=${teamId}&season=${season}`),
    ]);
    const info    = infoRes.status    === "fulfilled" ? infoRes.value    : null;
    const squad   = squadRes.status   === "fulfilled" ? squadRes.value   : null;
    const players = playersRes.status === "fulfilled" ? playersRes.value : null;

    const teamInfo  = info?.response?.[0] ?? null;
    const squadData = squad?.response?.[0]?.players ?? [];
    // Build a map of player id → contract/nationality from /players endpoint
    const playerDetails = {};
    (players?.response ?? []).forEach(p => {
      if (p.player?.id) playerDetails[p.player.id] = p;
    });

    _teamCache[teamId] = { teamInfo, squadData, playerDetails };
    renderTeamModal(teamId, teamInfo, squadData);
  } catch(e) {
    box.innerHTML = `<div class="modal-error">Error al cargar el equipo: ${e.message}</div>`;
  }
}

function renderTeamModal(teamId, teamInfo, squadData) {
  const name   = teamInfo?.team?.name   ?? "Equipo";
  const logo   = teamInfo?.team?.logo   ?? null;
  const box    = document.getElementById("team-modal-content");

  const tabs = ["principal","plantel","partidos","títulos","historial"];
  box.innerHTML = `
    <div class="modal-header" style="position:relative;">
      <div style="grid-column:1/-1;display:flex;flex-direction:column;align-items:center;gap:10px;padding:4px 0 8px;">
        ${logo ? `<img src="${logo}" style="width:72px;height:72px;object-fit:contain;" onerror="this.style.display='none'">` : ""}
        <div style="font-family:'Barlow Condensed',sans-serif;font-weight:900;font-size:26px;letter-spacing:1px;text-align:center;">${name}</div>
      </div>
      <button class="modal-close" onclick="closeTeamModal()">✕</button>
    </div>
    <div class="modal-tabs" id="team-modal-tabs">
      ${tabs.map(t => `<button class="modal-tab ${t === teamModalTab ? "active" : ""}" onclick="switchTeamTab('${t}',${teamId})">${t.charAt(0).toUpperCase()+t.slice(1)}</button>`).join("")}
    </div>
    <div class="modal-body" id="team-modal-body">
      ${renderTeamTab(teamModalTab, teamId, teamInfo, squadData)}
    </div>
  `;
}

function switchTeamTab(tab, teamId) {
  teamModalTab = tab;
  document.querySelectorAll("#team-modal-tabs .modal-tab").forEach(b =>
    b.classList.toggle("active", b.textContent.toLowerCase() === tab)
  );
  const body = document.getElementById("team-modal-body");
  const cached = _teamCache[teamId];
  if (!cached) return;

  if (tab === "partidos" || tab === "títulos") {
    body.innerHTML = `<div class="modal-loader"><div class="spinner"></div><span>Cargando...</span></div>`;
    renderTeamTabAsync(tab, teamId, cached.teamInfo, cached.squadData).then(html => {
      if (body) body.innerHTML = html;
    });
  } else {
    body.innerHTML = renderTeamTab(tab, teamId, cached.teamInfo, cached.squadData);
  }
}

function renderTeamTab(tab, teamId, teamInfo, squadData) {
  if (tab === "principal")  return renderTeamPrincipal(teamInfo, teamId);
  if (tab === "plantel")    return renderTeamSquad(squadData, _teamCache[teamId]?.playerDetails ?? {});
  if (tab === "historial")  return renderTeamHistorial(teamId);
  // async tabs get placeholder
  return `<div class="modal-loader"><div class="spinner"></div><span>Cargando...</span></div>`;
}

async function renderTeamTabAsync(tab, teamId, teamInfo, squadData) {
  if (tab === "partidos") return await renderTeamFixtures(teamId);
  if (tab === "títulos")  return await renderTeamTrophies(teamId);
  return "";
}

// On tab click for async tabs, trigger immediately
function switchTeamTab(tab, teamId) {
  teamModalTab = tab;
  document.querySelectorAll("#team-modal-tabs .modal-tab").forEach(b =>
    b.classList.toggle("active", b.textContent.toLowerCase() === tab)
  );
  const body = document.getElementById("team-modal-body");
  const cached = _teamCache[teamId];
  if (!cached) return;

  const syncTabs = ["principal","plantel","historial"];
  if (syncTabs.includes(tab)) {
    body.innerHTML = renderTeamTab(tab, teamId, cached.teamInfo, cached.squadData);
  } else {
    body.innerHTML = `<div class="modal-loader"><div class="spinner"></div><span>Cargando...</span></div>`;
    (async () => {
      const html = await renderTeamTabAsync(tab, teamId, cached.teamInfo, cached.squadData);
      const b2 = document.getElementById("team-modal-body");
      if (b2) b2.innerHTML = html;
    })();
  }
}

// ── TAB: PRINCIPAL ────────────────────────────────────────────────
// ── Apodos manuales (la API no los provee) ────────────────────────
const TEAM_NICKNAMES = {
  // Premier League
  33:"Red Devils", 40:"The Reds", 50:"Citizens", 42:"Gunners", 49:"Blues",
  66:"Villans", 47:"Spurs", 34:"Magpies", 35:"Cherries", 36:"Cottagers",
  45:"Toffees", 46:"Foxes", 48:"Hammers", 51:"Seagulls", 52:"Eagles",
  65:"Tricky Trees",
  // LaLiga
  541:"Los Blancos", 529:"Blaugranas", 530:"Colchoneros", 548:"Nervionenses",
  533:"El Submarino Amarillo", 536:"Béticos", 531:"Athletic", 532:"Che",
  543:"La Real",
  // Serie A
  496:"La Vecchia Signora", 489:"La Beneamata", 497:"Rossoneri",
  499:"Biancocelesti", 492:"Partenopei", 487:"Giallorossi", 488:"La Dea",
  // Bundesliga
  157:"Bayern", 165:"BVB", 168:"Werkself", 169:"Adler",
  // Ligue 1
  85:"Les Parisiens", 80:"Les Gones", 81:"Les Phocéens", 82:"Les Dogues",
  97:"Les Monégasques",
  // Argentina
  442:"El Millonario", 435:"El Xeneize", 440:"La Academia",
  436:"El Rojo", 444:"El Ciclón", 433:"El Pincha",
  439:"El Globo", 437:"El Canalla", 438:"El Fortín",
};

function renderTeamPrincipal(teamInfo, teamId) {
  if (!teamInfo) return `<div class="modal-error">Sin datos del equipo.</div>`;
  const t   = teamInfo.team;
  const v   = teamInfo.venue;
  const founded = t?.founded ?? "–";
  const nickname = TEAM_NICKNAMES[teamId] ?? TEAM_NICKNAMES[t?.id] ?? t?.name ?? "–";
  const venueName   = v?.name   ?? "–";
  const venueAddr   = v?.address ?? "–";
  const venueCity   = v?.city   ?? "–";
  const venueImg    = v?.image  ?? null;
  const venueCapacity = v?.capacity ? `${v.capacity.toLocaleString()} espectadores` : "–";

  return `
    <div class="info-grid" style="gap:14px;">
      <div class="info-card">
        <div class="info-card-title">Apodo</div>
        <div class="info-card-val">${nickname}</div>
      </div>
      <div class="info-card">
        <div class="info-card-title">Año de Fundación</div>
        <div class="info-card-val accent">${founded}</div>
      </div>
      <div class="info-card" style="grid-column:1/-1;">
        <div class="info-card-title">Estadio</div>
        <div class="info-card-val" style="font-size:20px;margin-bottom:4px;">${venueName}</div>
        <div style="font-size:14px;color:var(--light);margin-bottom:2px;">📍 ${venueAddr}, ${venueCity}</div>
        <div style="font-size:14px;color:var(--text);opacity:.8;">👥 ${venueCapacity}</div>
        ${venueImg ? `<img src="${venueImg}" style="width:100%;border-radius:8px;margin-top:12px;object-fit:cover;max-height:200px;" onerror="this.style.display='none'">` : ""}
      </div>
    </div>
  `;
}

// ── TAB: PLANTEL ──────────────────────────────────────────────────
function renderTeamSquad(players, playerDetails) {
  if (!players || !players.length) return `<div class="modal-error">Sin datos del plantel.</div>`;

  const posOrder = { Goalkeeper:0, Defender:1, Midfielder:2, Attacker:3 };
  const posLabel = { Goalkeeper:"Arqueros", Defender:"Defensores", Midfielder:"Mediocampistas", Attacker:"Delanteros" };
  const sorted = [...players].sort((a,b) => (posOrder[a.position]??9) - (posOrder[b.position]??9));
  const groups = {};
  sorted.forEach(p => {
    const pos = p.position ?? "Other";
    if (!groups[pos]) groups[pos] = [];
    groups[pos].push(p);
  });

  let html = `<div style="display:flex;flex-direction:column;gap:18px;">`;
  Object.entries(groups).forEach(([pos, list]) => {
    html += `<div>
      <div style="font-family:'Barlow Condensed',sans-serif;font-weight:800;font-size:14px;letter-spacing:1px;text-transform:uppercase;color:var(--accent2);padding:6px 0 8px;border-bottom:1px solid var(--border);margin-bottom:8px;">${posLabel[pos] ?? pos}</div>
      <div style="display:flex;flex-direction:column;gap:2px;">`;
    list.forEach(p => {
      const det  = playerDetails[p.id] ?? null;
      const nat  = det?.player?.nationality ?? p.nationality ?? null;
      const age  = det?.player?.age ?? p.age ?? null;
      const height = det?.player?.height ?? p.height ?? null;
      const contractEnd = det?.statistics?.[0]?.games?.contract?.end ?? null;
      const num  = p.number ? `<span style="font-family:'Barlow Condensed',sans-serif;font-weight:800;font-size:16px;color:var(--light);width:24px;text-align:center;flex-shrink:0;">${p.number}</span>` : `<span style="width:24px;flex-shrink:0;"></span>`;
      const photo = p.photo ? `<img src="${p.photo}" style="width:32px;height:32px;border-radius:50%;object-fit:cover;flex-shrink:0;" onerror="this.style.display='none'">` : "";
      const subInfo = [
        nat ? `<span style="font-size:12px;color:var(--muted);">${nat}</span>` : "",
        contractEnd ? `<span style="font-size:11px;color:var(--muted);">Contrato: hasta ${contractEnd}</span>` : "",
      ].filter(Boolean).join(" · ");
      html += `<div style="display:flex;align-items:center;gap:8px;padding:7px 4px;border-bottom:1px solid rgba(46,51,71,.4);">
        ${num}${photo}
        <div style="flex:1;min-width:0;">
          <div style="font-size:15px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${p.name ?? "–"}</div>
          ${subInfo ? `<div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:1px;">${subInfo}</div>` : ""}
        </div>
        <div style="text-align:right;flex-shrink:0;">
          ${age ? `<div style="font-size:13px;color:var(--light);">${age} años</div>` : ""}
          ${height ? `<div style="font-size:12px;color:var(--muted);">${height}</div>` : ""}
        </div>
      </div>`;
    });
    html += `</div></div>`;
  });
  html += `</div>`;
  return html;
}

// ── TAB: PARTIDOS ─────────────────────────────────────────────────
async function renderTeamFixtures(teamId) {
  try {
    const season = new Date().getFullYear();
    const [lastRes, nextRes] = await Promise.allSettled([
      apiFetch(`/api/team/fixtures?teamid=${teamId}&season=${season}&last=15`),
      apiFetch(`/api/team/fixtures?teamid=${teamId}&season=${season}&next=10`),
    ]);
    const lastMatches = (lastRes.status === "fulfilled" ? lastRes.value?.response ?? [] : []).reverse();
    const nextMatches = nextRes.status === "fulfilled" ? nextRes.value?.response ?? [] : [];

    const matchRow = (m, isPast) => {
      const home   = m.teams?.home?.name ?? "";
      const away   = m.teams?.away?.name ?? "";
      const hg     = m.goals?.home;
      const ag     = m.goals?.away;
      const date   = m.fixture?.date ? new Date(m.fixture.date) : null;
      const dateStr = date ? date.toLocaleDateString("es-AR", {day:"2-digit",month:"2-digit",year:"numeric",timeZone:"America/Argentina/Buenos_Aires"}) : "–";
      const timeStr = date ? date.toLocaleTimeString("es-AR",{hour:"2-digit",minute:"2-digit",timeZone:"America/Argentina/Buenos_Aires",hour12:false}) : null;
      const isHome  = m.teams?.home?.id == teamId;
      const rival   = isHome ? away : home;
      const rivalLogo = isHome ? (m.teams?.away?.logo ?? null) : (m.teams?.home?.logo ?? null);
      const locVis  = isHome ? "🏠 Local" : "✈️ Visitante";
      const score   = isPast && hg !== null ? (isHome ? `${hg} - ${ag}` : `${ag} - ${hg}`) : null;
      const scoreColor = isPast && hg !== null
        ? (isHome ? (hg > ag ? "var(--accent)" : hg < ag ? "var(--live)" : "var(--muted)") : (ag > hg ? "var(--accent)" : ag < hg ? "var(--live)" : "var(--muted)"))
        : "var(--text)";
      const logoEl = rivalLogo ? `<img src="${rivalLogo}" style="width:24px;height:24px;object-fit:contain;flex-shrink:0;" onerror="this.style.display='none'">` : "";
      return `<div style="display:flex;align-items:center;gap:8px;padding:8px 4px;border-bottom:1px solid rgba(46,51,71,.4);">
        ${logoEl}
        <div style="flex:1;min-width:0;">
          <div style="font-size:15px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${rival}</div>
          <div style="font-size:12px;color:var(--muted);">${dateStr}${timeStr ? " · " + timeStr : ""} · ${locVis}</div>
        </div>
        ${score ? `<div style="font-family:'Barlow Condensed',sans-serif;font-weight:900;font-size:22px;color:${scoreColor};flex-shrink:0;">${score}</div>` : ""}
      </div>`;
    };

    let html = `<div style="display:flex;flex-direction:column;gap:20px;">`;

    html += `<div>
      <div style="font-family:'Barlow Condensed',sans-serif;font-weight:800;font-size:14px;letter-spacing:1px;text-transform:uppercase;color:var(--accent2);padding:6px 0 8px;border-bottom:1px solid var(--border);margin-bottom:8px;">Últimos Partidos</div>`;
    if (lastMatches.length) html += lastMatches.map(m => matchRow(m, true)).join("");
    else html += `<div style="color:var(--muted);font-size:14px;padding:12px 0;">Sin partidos recientes.</div>`;
    html += `</div>`;

    html += `<div>
      <div style="font-family:'Barlow Condensed',sans-serif;font-weight:800;font-size:14px;letter-spacing:1px;text-transform:uppercase;color:var(--accent2);padding:6px 0 8px;border-bottom:1px solid var(--border);margin-bottom:8px;">Próximos Partidos</div>`;
    if (nextMatches.length) html += nextMatches.map(m => matchRow(m, false)).join("");
    else html += `<div style="color:var(--muted);font-size:14px;padding:12px 0;">Sin próximos partidos.</div>`;
    html += `</div></div>`;

    return html;
  } catch(e) {
    return `<div class="modal-error">Error cargando partidos: ${e.message}</div>`;
  }
}

// ── TAB: TÍTULOS ──────────────────────────────────────────────────
async function renderTeamTrophies(teamId) {
  try {
    const data = await apiFetch(`/api/trophies?teamid=${teamId}`);
    const all  = data?.response ?? [];
    if (!all.length) return `<div class="modal-error" style="padding:24px;">Sin datos de títulos.</div>`;

    const won = all.filter(t => t.place === "Winner" || t.place === "1st");
    const nac = won.filter(t => !["UEFA Champions League","Copa Libertadores","Copa Sudamericana","UEFA Europa League","UEFA Conference League","FIFA Club World Cup"].includes(t.league));
    const intl = won.filter(t => ["UEFA Champions League","Copa Libertadores","Copa Sudamericana","UEFA Europa League","UEFA Conference League","FIFA Club World Cup"].includes(t.league));

    const block = (title, list) => {
      if (!list.length) return "";
      const sorted = [...list].sort((a,b) => (b.season?.split("/")[0] ?? b.season ?? 0) - (a.season?.split("/")[0] ?? a.season ?? 0));
      return `<div>
        <div style="font-family:'Barlow Condensed',sans-serif;font-weight:800;font-size:14px;letter-spacing:1px;text-transform:uppercase;color:var(--accent2);padding:6px 0 8px;border-bottom:1px solid var(--border);margin-bottom:8px;">${title} <span style="color:var(--accent);font-size:18px;">(${list.length})</span></div>
        <div style="display:flex;flex-direction:column;gap:2px;">
          ${sorted.map(t => `<div style="display:flex;justify-content:space-between;align-items:center;padding:6px 4px;border-bottom:1px solid rgba(46,51,71,.4);">
            <span style="font-size:15px;font-weight:600;">${t.league}</span>
            <span style="font-family:'Barlow Condensed',sans-serif;font-weight:900;font-size:18px;color:var(--accent);">${t.season ?? "–"}</span>
          </div>`).join("")}
        </div>
      </div>`;
    };

    return `<div style="display:flex;flex-direction:column;gap:20px;">
      ${block("Títulos Nacionales", nac)}
      ${block("Títulos Internacionales", intl)}
      ${!nac.length && !intl.length ? `<div class="modal-error">Sin títulos registrados.</div>` : ""}
    </div>`;
  } catch(e) {
    return `<div class="modal-error">Error cargando títulos: ${e.message}</div>`;
  }
}

// ── TAB: HISTORIAL ────────────────────────────────────────────────
// Datos manuales — estructura: TEAM_HISTORY[teamId] = { nacional: [...], internacional: [...] }
// Cada item: { equipo, pj, pg, pe, pp }
const TEAM_HISTORY = {
  // Ejemplo placeholder — editar manualmente
  // 442: {
  //   nacional: [{ equipo:"Boca Juniors", pj:300, pg:120, pe:80, pp:100 }],
  //   internacional: [{ equipo:"Flamengo", pj:10, pg:5, pe:2, pp:3 }]
  // }
};

let _historialSubTab = "nacional";

function renderTeamHistorial(teamId) {
  const data = TEAM_HISTORY[teamId];

  const histTable = (rows, count) => {
    // Fill up to `count` rows with empty placeholders
    const filled = [...(rows ?? [])];
    while (filled.length < count) filled.push(null);

    return `<div style="overflow-x:auto;">
      <table style="width:100%;border-collapse:collapse;font-size:15px;">
        <thead><tr style="background:var(--bg3);position:sticky;top:0;">
          <th style="text-align:center;padding:7px 6px;font-size:13px;color:var(--light);font-weight:700;width:36px;"></th>
          <th style="text-align:left;padding:7px 8px;font-size:13px;color:var(--light);font-weight:700;text-transform:uppercase;letter-spacing:.5px;">Equipo</th>
          <th style="text-align:center;padding:7px 6px;font-size:13px;color:var(--light);font-weight:700;">PJ</th>
          <th style="text-align:center;padding:7px 6px;font-size:13px;color:var(--accent);font-weight:700;">G</th>
          <th style="text-align:center;padding:7px 6px;font-size:13px;color:var(--muted);font-weight:700;">E</th>
          <th style="text-align:center;padding:7px 6px;font-size:13px;color:var(--live);font-weight:700;">P</th>
          <th style="text-align:center;padding:7px 6px;font-size:13px;color:var(--light);font-weight:700;">DIF</th>
        </tr></thead>
        <tbody>
          ${filled.map(r => {
            if (!r) return `<tr style="border-bottom:1px solid rgba(46,51,71,.25);">
              <td style="padding:7px 6px;"><div style="width:24px;height:24px;background:var(--border);border-radius:50%;opacity:.25;"></div></td>
              <td style="padding:7px 8px;"><div style="height:12px;background:var(--border);border-radius:4px;width:60%;opacity:.25;"></div></td>
              <td colspan="5"></td>
            </tr>`;
            const dif = (r.pg ?? 0) - (r.pp ?? 0);
            const logoEl = r.logo ? `<img src="${r.logo}" style="width:24px;height:24px;object-fit:contain;" onerror="this.style.display='none'">` : `<div style="width:24px;height:24px;background:var(--border);border-radius:50%;opacity:.3;"></div>`;
            return `<tr style="border-bottom:1px solid rgba(46,51,71,.4);">
              <td style="padding:7px 6px;text-align:center;">${logoEl}</td>
              <td style="padding:7px 8px;font-weight:600;">${r.equipo}</td>
              <td style="text-align:center;padding:7px 6px;font-family:'Barlow Condensed',sans-serif;font-weight:700;">${r.pj ?? 0}</td>
              <td style="text-align:center;padding:7px 6px;font-family:'Barlow Condensed',sans-serif;font-weight:900;color:var(--accent);">${r.pg ?? 0}</td>
              <td style="text-align:center;padding:7px 6px;font-family:'Barlow Condensed',sans-serif;font-weight:700;color:var(--muted);">${r.pe ?? 0}</td>
              <td style="text-align:center;padding:7px 6px;font-family:'Barlow Condensed',sans-serif;font-weight:700;color:var(--live);">${r.pp ?? 0}</td>
              <td style="text-align:center;padding:7px 6px;font-family:'Barlow Condensed',sans-serif;font-weight:800;color:${dif>0?"var(--accent)":dif<0?"var(--live)":"var(--muted)"};">${dif>0?"+":""}${dif}</td>
            </tr>`;
          }).join("")}
        </tbody>
      </table>
    </div>`;
  };

  const nacRows  = data?.nacional       ?? [];
  const intRows  = data?.internacional  ?? [];

  const activeNac  = _historialSubTab === "nacional";
  const tableHTML  = activeNac ? histTable(nacRows, 30) : histTable(intRows, 20);

  return `<div>
    <!-- Sub-tabs -->
    <div style="display:flex;gap:6px;margin-bottom:14px;border-bottom:1px solid var(--border);padding-bottom:0;">
      <button onclick="_historialSubTab='nacional';document.getElementById('team-modal-body').innerHTML=renderTeamHistorial(${teamId});"
        style="font-family:'Barlow Condensed',sans-serif;font-weight:700;font-size:14px;letter-spacing:.5px;text-transform:uppercase;padding:8px 16px;border:none;background:transparent;cursor:pointer;border-bottom:2px solid ${activeNac?"var(--accent2)":"transparent"};color:${activeNac?"var(--accent2)":"var(--light)"};margin-bottom:-1px;transition:all .18s;">
        🏆 Nacional
      </button>
      <button onclick="_historialSubTab='internacional';document.getElementById('team-modal-body').innerHTML=renderTeamHistorial(${teamId});"
        style="font-family:'Barlow Condensed',sans-serif;font-weight:700;font-size:14px;letter-spacing:.5px;text-transform:uppercase;padding:8px 16px;border:none;background:transparent;cursor:pointer;border-bottom:2px solid ${!activeNac?"var(--accent2)":"transparent"};color:${!activeNac?"var(--accent2)":"var(--light)"};margin-bottom:-1px;transition:all .18s;">
        🌍 Internacional
      </button>
    </div>
    ${tableHTML}
  </div>`;
}