// ═══════════════════════════════════════════════════════════════════
// CONFIG — API-Football v3
// IDs de ligas: https://www.api-football.com/documentation-v3#tag/Leagues
// ═══════════════════════════════════════════════════════════════════
const API = window.location.port === "3000" ? "" : "http://localhost:3000";

// ── Match status helpers (available globally on all pages) ─────────
function isLive(m) {
  const s = m.fixture?.status?.short ?? "";
  return ["1H","2H","HT","ET","BT","P","SUSP","INT","LIVE"].includes(s);
}
function isFinished(m) {
  const s = m.fixture?.status?.short ?? "";
  return ["FT","AET","PEN"].includes(s);
}
// Season se define por liga en el array LEAGUES (season property)

// ⚠️ Plan gratuito API-Football: acceso solo hasta season:2024
// Europa 2024/25 → season:2024 | Sudamérica temporada 2024 → season:2024
const LEAGUES = [
  { id:"all",       name:"Todos",           flag:null,                                lid:null, season:null  },
  // ── Sudamérica ──
  { id:"arg",       name:"Argentina",       flag:"https://flagcdn.com/w40/ar.png",    logo:"https://media.api-sports.io/football/leagues/128.png",  lid:128,  season:2024, leagueName:"Liga Profesional" },
  { id:"bra",       name:"Brasil",          flag:"https://flagcdn.com/w40/br.png",    logo:"https://media.api-sports.io/football/leagues/71.png",   lid:71,   season:2024, leagueName:"Brasileirão" },
  { id:"uru",       name:"Uruguay",         flag:"https://flagcdn.com/w40/uy.png",    logo:"https://media.api-sports.io/football/leagues/268.png",  lid:268,  season:2024, leagueName:"Liga Uruguay" },
  { id:"chi",       name:"Chile",           flag:"https://flagcdn.com/w40/cl.png",    logo:"https://media.api-sports.io/football/leagues/265.png",  lid:265,  season:2024, leagueName:"Liga Chile" },
  { id:"col",       name:"Colombia",        flag:"https://flagcdn.com/w40/co.png",    logo:"https://media.api-sports.io/football/leagues/239.png",  lid:239,  season:2024, leagueName:"Liga Colombia" },
  { id:"per",       name:"Perú",            flag:"https://flagcdn.com/w40/pe.png",    logo:"https://media.api-sports.io/football/leagues/281.png",  lid:281,  season:2024, leagueName:"Liga 1" },
  { id:"ecu",       name:"Ecuador",         flag:"https://flagcdn.com/w40/ec.png",    logo:"https://media.api-sports.io/football/leagues/242.png",  lid:242,  season:2024, leagueName:"Liga Pro" },
  { id:"par",       name:"Paraguay",        flag:"https://flagcdn.com/w40/py.png",    logo:"https://media.api-sports.io/football/leagues/250.png",  lid:250,  season:2024, leagueName:"División Profesional" },
  { id:"mex",       name:"México",          flag:"https://flagcdn.com/w40/mx.png",    logo:"https://media.api-sports.io/football/leagues/262.png",  lid:262,  season:2024, leagueName:"Liga MX" },
  { id:"usa",       name:"EEUU",            flag:"https://flagcdn.com/w40/us.png",    logo:"https://media.api-sports.io/football/leagues/253.png",  lid:253,  season:2024, leagueName:"MLS" },
  { id:"lib",       name:"Libertadores",    flag:null,                                logo:"https://media.api-sports.io/football/leagues/13.png",   lid:13,   season:2024 },
  { id:"sula",      name:"Sudamericana",    flag:null,                                logo:"https://media.api-sports.io/football/leagues/11.png",   lid:11,   season:2024 },
  // ── Europa ──
  { id:"ucl",       name:"Champions",       flag:null,                                logo:"https://media.api-sports.io/football/leagues/2.png",    lid:2,    season:2024 },
  { id:"uel",       name:"Europa Lg",       flag:null,                                logo:"https://media.api-sports.io/football/leagues/3.png",    lid:3,    season:2024 },
  { id:"uecl",      name:"Conference",      flag:null,                                logo:"https://media.api-sports.io/football/leagues/848.png",  lid:848,  season:2024 },
  { id:"epl",       name:"Inglaterra",         flag:"https://flagcdn.com/w40/gb-eng.png",logo:"https://media.api-sports.io/football/leagues/39.png",   lid:39,   season:2024, leagueName:"Premier League" },
  { id:"esp",       name:"España",          flag:"https://flagcdn.com/w40/es.png",    logo:"https://media.api-sports.io/football/leagues/140.png",  lid:140,  season:2024, leagueName:"LaLiga" },
  { id:"ita",       name:"Italia",          flag:"https://flagcdn.com/w40/it.png",    logo:"https://media.api-sports.io/football/leagues/135.png",  lid:135,  season:2024, leagueName:"Serie A" },
  { id:"ger",       name:"Alemania",        flag:"https://flagcdn.com/w40/de.png",    logo:"https://media.api-sports.io/football/leagues/78.png",   lid:78,   season:2024, leagueName:"Bundesliga" },
  { id:"fra",       name:"Francia",         flag:"https://flagcdn.com/w40/fr.png",    logo:"https://media.api-sports.io/football/leagues/61.png",   lid:61,   season:2024, leagueName:"Ligue 1" },
  { id:"por",       name:"Portugal",        flag:"https://flagcdn.com/w40/pt.png",    logo:"https://media.api-sports.io/football/leagues/94.png",   lid:94,   season:2024, leagueName:"Liga Portugal" },
  { id:"ned",       name:"Holanda",          flag:"https://flagcdn.com/w40/nl.png",    logo:"https://media.api-sports.io/football/leagues/88.png",   lid:88,   season:2024, leagueName:"Eredivisie" },
  { id:"sau",       name:"Arabia Saudita",   flag:"https://flagcdn.com/w40/sa.png",    logo:"https://media.api-sports.io/football/leagues/307.png",  lid:307,  season:2024, leagueName:"Saudi Pro League" },
  // ── Copas (hidden from main selector, used by sub-tabs) ──
  { id:"arg_copa",  name:"Copa Argentina",  flag:"https://flagcdn.com/w40/ar.png",    logo:"https://media.api-sports.io/football/leagues/130.png",  lid:130,  season:2024, cup:true, parentId:"arg"  },
  { id:"bra_copa",  name:"Copa Brasil",     flag:"https://flagcdn.com/w40/br.png",    logo:"https://media.api-sports.io/football/leagues/73.png",   lid:73,   season:2024, cup:true, parentId:"bra"  },
  { id:"uru_copa",  name:"Copa Uruguay",    flag:"https://flagcdn.com/w40/uy.png",    logo:"https://media.api-sports.io/football/leagues/930.png",  lid:930,  season:2024, cup:true, parentId:"uru"  },
  { id:"chi_copa",  name:"Copa Chile",      flag:"https://flagcdn.com/w40/cl.png",    logo:"https://media.api-sports.io/football/leagues/266.png",  lid:266,  season:2024, cup:true, parentId:"chi"  },
  { id:"col_copa",  name:"Copa Colombia",   flag:"https://flagcdn.com/w40/co.png",    logo:"https://media.api-sports.io/football/leagues/241.png",  lid:241,  season:2024, cup:true, parentId:"col"  },
  { id:"esp_copa",  name:"Copa del Rey",    flag:"https://flagcdn.com/w40/es.png",    logo:"https://media.api-sports.io/football/leagues/143.png",  lid:143,  season:2024, cup:true, parentId:"esp"  },
  { id:"esp_super", name:"Supercopa",       flag:"https://flagcdn.com/w40/es.png",    logo:"https://media.api-sports.io/football/leagues/556.png",  lid:556,  season:2024, cup:true, parentId:"esp"  },
  { id:"eng_fa",    name:"FA Cup",          flag:"https://flagcdn.com/w40/gb-eng.png",logo:"https://media.api-sports.io/football/leagues/45.png",   lid:45,   season:2024, cup:true, parentId:"epl"  },
  { id:"eng_lc",    name:"League Cup",      flag:"https://flagcdn.com/w40/gb-eng.png",logo:"https://media.api-sports.io/football/leagues/48.png",   lid:48,   season:2024, cup:true, parentId:"epl"  },
  { id:"ita_copa",  name:"Coppa Italia",    flag:"https://flagcdn.com/w40/it.png",    logo:"https://media.api-sports.io/football/leagues/137.png",  lid:137,  season:2024, cup:true, parentId:"ita"  },
  { id:"ita_super", name:"Supercopa",       flag:"https://flagcdn.com/w40/it.png",    logo:"https://media.api-sports.io/football/leagues/547.png",  lid:547,  season:2024, cup:true, parentId:"ita"  },
  { id:"ger_copa",  name:"DFB Pokal",       flag:"https://flagcdn.com/w40/de.png",    logo:"https://media.api-sports.io/football/leagues/81.png",   lid:81,   season:2024, cup:true, parentId:"ger"  },
  { id:"ger_super", name:"Supercopa",       flag:"https://flagcdn.com/w40/de.png",    logo:"https://media.api-sports.io/football/leagues/529.png",  lid:529,  season:2024, cup:true, parentId:"ger"  },
  { id:"fra_copa",  name:"Coupe de France", flag:"https://flagcdn.com/w40/fr.png",    logo:"https://media.api-sports.io/football/leagues/66.png",   lid:66,   season:2024, cup:true, parentId:"fra"  },
  { id:"por_copa",  name:"Taça de Portugal",flag:"https://flagcdn.com/w40/pt.png",    logo:"https://media.api-sports.io/football/leagues/96.png",   lid:96,   season:2024, cup:true, parentId:"por"  },
  { id:"per_copa",  name:"Copa Bicentenario",flag:"https://flagcdn.com/w40/pe.png",    logo:"https://media.api-sports.io/football/leagues/283.png",  lid:283,  season:2024, cup:true, parentId:"per"  },
  { id:"mex_copa",  name:"Copa MX",          flag:"https://flagcdn.com/w40/mx.png",    logo:"https://media.api-sports.io/football/leagues/265.png",  lid:265,  season:2024, cup:true, parentId:"mex"  },
  { id:"ned_copa",  name:"KNVB Beker",       flag:"https://flagcdn.com/w40/nl.png",    logo:"https://media.api-sports.io/football/leagues/90.png",   lid:90,   season:2024, cup:true, parentId:"ned"  },
];

// ─── HELPERS ─────────────────────────────────────────────────────
function seasonFor(lid) {
  const lc = LEAGUES.find(l => l.lid === lid);
  return lc?.season ?? 2024;
}

// ─── STATE ────────────────────────────────────────────────────────
let activeLeague  = localStorage.getItem("dopartis-league-results") || "all";
let activeDate    = todayStr();
let currentView   = "results";
let allSections   = [];
let refreshTimer  = null;

// ═══════════════════════════════════════════════════════════════════
// DATE HELPERS
// ═══════════════════════════════════════════════════════════════════
function todayStr() {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, "0");
  const d = String(now.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function offsetDate(base, days) {
  const d = new Date(base + "T12:00:00Z");
  d.setUTCDate(d.getUTCDate() + days);
  return d.toISOString().split("T")[0];
}

function formatDateLabel(iso, offset) {
  const d = new Date(iso + "T12:00:00Z");
  const days   = ["Dom","Lun","Mar","Mié","Jue","Vie","Sáb"];
  const months = ["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic"];
  if (offset === 0) return `Hoy · ${d.getUTCDate()} ${months[d.getUTCMonth()]}`;
  return `${days[d.getUTCDay()]} ${d.getUTCDate()} ${months[d.getUTCMonth()]}`;
}

async function apiFetch(path) {
  const res = await fetch(API + path);
  if (!res.ok) throw new Error(`HTTP ${res.status} — ${path}`);
  return res.json();
}

function setLastUpdate() {
  const now = new Date();
  document.getElementById("last-update").textContent =
    `Actualizado: ${now.toLocaleTimeString("es-AR",{hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:false})}`;
}

function loader() {
  return `<div class="loader-wrap"><div class="spinner"></div><span>Cargando...</span></div>`;
}

function errorBox(msg) {
  return `<div class="error-box">⚠️ ${msg}</div>
          <div class="empty-state"><div class="big">📡</div><p>Verificá que el servidor esté corriendo: <code>node server.js</code></p></div>`;
}

// ═══════════════════════════════════════════════════════════════════
// DATE BAR
// ═══════════════════════════════════════════════════════════════════
// ── TEMA ──────────────────────────────────────────────────────────
function toggleTheme() {
  const isLight = document.body.classList.toggle("light");
  document.getElementById("theme-btn").textContent = isLight ? "☀️" : "🌙";
  localStorage.setItem("dopartis-theme", isLight ? "light" : "dark");
}
(function initTheme() {
  const saved = localStorage.getItem("dopartis-theme");
  if (saved === "light") {
    document.body.classList.add("light");
    // defer so DOM is ready
    window.addEventListener("DOMContentLoaded", () => {
      const btn = document.getElementById("theme-btn");
      if (btn) btn.textContent = "☀️";
    });
  }
})();

// ── GOALS LAZY LOADER ────────────────────────────────────────────
const goalsCache = {};

function buildGoalsHTML(events, homeId) {
  let homeGoals = "", awayGoals = "";

  // Goals
  events.filter(e => e.type === "Goal" && e.detail !== "Missed Penalty").forEach(e => {
    const isHome = e.team?.id === homeId;
    const player = (e.player?.name ?? "").split(" ").pop();
    const min    = e.time?.elapsed ?? "";
    const extra  = e.time?.extra ? `+${e.time.extra}` : "";
    const isOg   = e.detail === "Own Goal";
    const isPen  = e.detail === "Penalty";
    const icon   = "⚽";
    const tag    = isPen ? " <span class=\"g-tag\">(Pen)</span>" : isOg ? " <span class=\"g-tag\">(E.C)</span>" : "";
    const entry  = `<div class="goal-entry"><span class="g-icon">${icon}</span><span class="g-name">${player}${tag}</span><span class="g-min">${min}${extra}′</span></div>`;
    if (isHome) homeGoals += entry; else awayGoals += entry;
  });

  // Red cards (straight red or second yellow)
  events.filter(e => e.type === "Card" && (e.detail === "Red Card" || e.detail === "Second Yellow card")).forEach(e => {
    const isHome = e.team?.id === homeId;
    const player = (e.player?.name ?? "").split(" ").pop();
    const min    = e.time?.elapsed ?? "";
    const extra  = e.time?.extra ? `+${e.time.extra}` : "";
    const entry  = `<div class="goal-entry"><span class="g-icon red-card-icon">🟥</span><span class="g-name">${player}</span><span class="g-min">${min}${extra}′</span></div>`;
    if (isHome) homeGoals += entry; else awayGoals += entry;
  });

  if (!homeGoals && !awayGoals) return "";
  return `<div class="goals-side home">${homeGoals}</div>
          <div style="width:88px;flex-shrink:0;"></div>
          <div class="goals-side away">${awayGoals}</div>
          <div style="width:22px;flex-shrink:0;"></div>`;
}

async function loadGoalsForMatches() {
  const slots = document.querySelectorAll("[id^='goals-']");
  for (const slot of slots) {
    const fid    = slot.id.replace("goals-", "");
    const row    = slot.previousElementSibling;
    const homeId = parseInt(row?.dataset?.homeid ?? "0");
    if (!fid) continue;
    if (goalsCache[fid] !== undefined) {
      slot.innerHTML = goalsCache[fid];
      continue;
    }
    try {
      const data   = await apiFetch(`/api/match/events?fixtureid=${fid}`);
      const events = data?.response ?? [];
      const html   = buildGoalsHTML(events, homeId);
      goalsCache[fid] = html;
      slot.innerHTML  = html;
    } catch(e) {
      goalsCache[fid] = "";
    }
    await new Promise(r => setTimeout(r, 200));
  }
}

// dateWindowOffset: cuántos días se desplazó la ventana (las flechas)
let dateWindowOffset = 0;

function buildDateBar() {
  const bar = document.getElementById("date-bar");
  bar.innerHTML = "";
  const today = todayStr();
  // Mostrar ayer, hoy, mañana centrados + desplazamiento
  for (let i = -1; i <= 1; i++) {
    const offset = i + dateWindowOffset;
    const d = offsetDate(today, offset);
    const btn = document.createElement("button");
    const isToday = (offset === 0);
    btn.className = "date-btn" + (d === activeDate ? " active" : "") + (isToday ? " today" : "");
    btn.textContent = isToday ? `Hoy · ${formatShortDate(d)}` : formatDateLabel(d, offset);
    btn.dataset.date = d;
    btn.onclick = () => {
      activeDate = d;
      document.querySelectorAll(".date-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      if (typeof loadMatches === "function") loadMatches();
    };
    bar.appendChild(btn);
  }
}

function shiftDateWindow(dir) {
  dateWindowOffset += dir;
  // Si volvemos al centro, resetear
  if (dateWindowOffset === 0) dateWindowOffset = 0;
  buildDateBar();
  // Si la fecha activa ya no está visible, llevarla al centro
  const today = todayStr();
  const visible = [-1, 0, 1].map(i => offsetDate(today, i + dateWindowOffset));
  if (!visible.includes(activeDate)) {
    activeDate = visible[1]; // centro = hoy + offset
    if (typeof loadMatches === "function") loadMatches();
  }
}

function formatShortDate(iso) {
  const d = new Date(iso + "T12:00:00Z");
  const months = ["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic"];
  return `${d.getUTCDate()} ${months[d.getUTCMonth()]}`;
}

// ── Mini calendario ───────────────────────────────────────────────
let calYear  = new Date().getUTCFullYear();
let calMonth = new Date().getUTCMonth(); // 0-11

function toggleCalendar() {
  const popup = document.getElementById("cal-popup");
  const isOpen = popup.classList.contains("open");
  if (isOpen) {
    popup.classList.remove("open");
  } else {
    // Sincronizar con fecha activa
    const d = new Date(activeDate + "T12:00:00Z");
    calYear  = d.getUTCFullYear();
    calMonth = d.getUTCMonth();
    renderCalendar();
    popup.classList.add("open");
  }
}

function calChangeMonth(dir) {
  calMonth += dir;
  if (calMonth > 11) { calMonth = 0; calYear++; }
  if (calMonth < 0)  { calMonth = 11; calYear--; }
  renderCalendar();
}

function renderCalendar() {
  const months = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
  const dows   = ["Lu","Ma","Mi","Ju","Vi","Sá","Do"];
  document.getElementById("cal-title").textContent = `${months[calMonth]} ${calYear}`;

  const grid = document.getElementById("cal-grid");
  grid.innerHTML = dows.map(d => `<div class="cal-dow">${d}</div>`).join("");

  const firstDay = new Date(Date.UTC(calYear, calMonth, 1));
  // Lunes=0, ..., Domingo=6
  let startDow = firstDay.getUTCDay() - 1;
  if (startDow < 0) startDow = 6;

  const daysInMonth = new Date(Date.UTC(calYear, calMonth + 1, 0)).getUTCDate();
  const today = todayStr();

  // Días vacíos al inicio
  for (let i = 0; i < startDow; i++) {
    grid.innerHTML += `<div class="cal-day empty"></div>`;
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const iso = `${calYear}-${String(calMonth+1).padStart(2,"0")}-${String(day).padStart(2,"0")}`;
    let cls = "cal-day";
    if (iso === today) cls += " today";
    if (iso === activeDate) cls += " selected";
    grid.innerHTML += `<div class="${cls}" onclick="calSelectDate('${iso}')">${day}</div>`;
  }
}

function calSelectDate(iso) {
  activeDate = iso;
  // Sincronizar la ventana de días para que la fecha elegida sea visible
  const today = todayStr();
  const todayMs  = new Date(today + "T12:00:00Z").getTime();
  const selMs    = new Date(iso + "T12:00:00Z").getTime();
  const diffDays = Math.round((selMs - todayMs) / 86400000);
  dateWindowOffset = diffDays; // centrar en el día elegido
  buildDateBar();
  document.getElementById("cal-popup").classList.remove("open");
  if (typeof loadMatches === "function") loadMatches();
}

// Cerrar calendario al hacer click fuera
document.addEventListener("click", (e) => {
  const wrap = document.getElementById("date-bar-wrap");
  if (wrap && !wrap.contains(e.target)) {
    document.getElementById("cal-popup")?.classList.remove("open");
  }
});



// ═══════════════════════════════════════════════════════════════════
// LEAGUE TABS
// ═══════════════════════════════════════════════════════════════════
// Continent grouping for LEAGUES
const LEAGUE_GROUPS = [
  {
    continent: "América",
    paises: ["all","arg","bra","uru","chi","col","per","ecu","par","mex","usa"],
    comps:   ["lib","sula"],
  },
  {
    continent: "Europa",
    paises: ["epl","esp","ita","ger","fra","por","ned"],
    comps:   ["ucl","uel","uecl"],
  },
  {
    continent: "Asia / Medio Oriente",
    paises: ["sau"],
    comps:   [],
  },
];

function _leagueLabel(l) {
  const iconSrc = l.flag || l.logo;
  const iconEl = iconSrc
    ? `<img src="${iconSrc}" style="width:16px;height:16px;object-fit:contain;border-radius:2px;flex-shrink:0;vertical-align:middle;" onerror="this.style.display='none'">`
    : "";
  return `${iconEl} ${l.name}`.trim();
}

function buildLeagueTabs(containerId, activeId, onClickFn, excludeAll = false) {
  const wrap = document.getElementById(containerId);
  wrap.innerHTML = "";
  wrap.className = "league-selector";

  const list = excludeAll ? LEAGUES.filter(l => l.lid) : LEAGUES;
  const activeLeague = list.find(l => l.id === activeId) || list[0];

  // ── Toggle button ──
  const toggle = document.createElement("div");
  toggle.className = "league-selector-toggle";
  toggle.innerHTML = `
    <span>Liga:</span>
    <span class="sel-active-label" id="${containerId}-label">${_leagueLabel(activeLeague)}</span>
    <span class="sel-arrow">▼</span>`;

  // ── Panel ──
  const panel = document.createElement("div");
  panel.className = "league-selector-panel";
  panel.id = `${containerId}-panel`;

  function selectLeague(l) {
    // Update label
    document.getElementById(`${containerId}-label`).innerHTML = _leagueLabel(l);
    // Close panel
    panel.classList.remove("open");
    toggle.classList.remove("open");
    // Deactivate all, activate selected
    panel.querySelectorAll(".ltab").forEach(b => b.classList.remove("active"));
    panel.querySelector(`[data-id="${l.id}"]`)?.classList.add("active");
    onClickFn(l);
  }

  // ── Build continent groups ──
  LEAGUE_GROUPS.forEach(group => {
    const paisIds = group.paises.filter(id => list.some(l => l.id === id));
    const compIds = group.comps.filter(id => list.some(l => l.id === id));
    if (!paisIds.length && !compIds.length) return;

    const section = document.createElement("div");
    section.className = "lsel-continent";
    section.innerHTML = `<div class="lsel-continent-title">${group.continent}</div>`;

    if (paisIds.length) {
      const row = document.createElement("div");
      row.className = "lsel-group";
      paisIds.forEach(id => {
        const l = list.find(x => x.id === id);
        if (!l) return;
        const btn = document.createElement("button");
        btn.className = "ltab" + (l.id === activeId ? " active" : "");
        btn.dataset.id = l.id;
        const iconSrc = l.flag || l.logo;
        const iconEl = iconSrc
          ? `<img src="${iconSrc}" style="width:18px;height:18px;object-fit:contain;border-radius:2px;flex-shrink:0;" onerror="this.style.display='none'">`
          : `<span style="font-size:15px;">🌐</span>`;
        btn.innerHTML = `${iconEl}<span>${l.name}</span>`;
        btn.onclick = () => selectLeague(l);
        row.appendChild(btn);
      });
      section.appendChild(row);
    }

    if (compIds.length) {
      const sublabel = document.createElement("div");
      sublabel.className = "lsel-sublabel";
      sublabel.textContent = "Competencias";
      section.appendChild(sublabel);
      const row = document.createElement("div");
      row.className = "lsel-group";
      compIds.forEach(id => {
        const l = list.find(x => x.id === id);
        if (!l) return;
        const btn = document.createElement("button");
        btn.className = "ltab" + (l.id === activeId ? " active" : "");
        btn.dataset.id = l.id;
        const iconEl = l.logo
          ? `<img src="${l.logo}" style="width:18px;height:18px;object-fit:contain;border-radius:2px;flex-shrink:0;" onerror="this.style.display='none'">`
          : `<span style="font-size:15px;">🌐</span>`;
        btn.innerHTML = `${iconEl}<span>${l.name}</span>`;
        btn.onclick = () => selectLeague(l);
        row.appendChild(btn);
      });
      section.appendChild(row);
    }

    panel.appendChild(section);
  });

  toggle.onclick = (e) => {
    e.stopPropagation();
    const isOpen = panel.classList.toggle("open");
    toggle.classList.toggle("open", isOpen);
  };

  // Close when clicking outside
  document.addEventListener("click", () => {
    panel.classList.remove("open");
    toggle.classList.remove("open");
  }, { capture: false });

  wrap.appendChild(toggle);
  wrap.appendChild(panel);
}