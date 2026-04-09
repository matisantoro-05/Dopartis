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
    { continent:"América", ids:["arg","bra","uru","chi","col"] },
    { continent:"Europa",  ids:["epl","esp","ita","ger","fra","por"] },
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
      return `<tr>
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