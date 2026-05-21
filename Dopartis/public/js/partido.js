// ═══════════════════════════════════════════════════════════════════
// MODAL DE PARTIDO
// ═══════════════════════════════════════════════════════════════════
let modalFixtureId = null;
let modalTab = "eventos";

function slugify(name) {
  return (name ?? "").toLowerCase()
    .normalize("NFD").replace(/[̀-ͯ]/g, "") // remove accents
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function openMatch(fid, homeName, awayName) {
  const isPartidoPage = window.location.pathname.endsWith("partido.html");
  if (isPartidoPage) return; // partido.html loads via initPartidoPage, not openMatch

  if (!fid) return;
  modalFixtureId = fid;
  modalTab = "eventos";
  _modalCache = null;
  document.getElementById("match-modal").classList.add("open");
  document.body.style.overflow = "hidden";

  // Push URL without reload
  const h = slugify(homeName ?? "local");
  const a = slugify(awayName ?? "visitante");
  const slug = `${h}-vs-${a}`;
  history.pushState({ fid, slug }, "", `/partido/${slug}?id=${fid}`);

  loadModalData(fid);
}

// Open a two-legged tie modal with IDA/VUELTA tabs above
let _tieFidIda = null;
let _tieFidV   = null;
let _tieLeg    = "ida"; // "ida" | "vuelta"

function openMatchTie(fidIda, fidV, homeName, awayName) {
  const isPartidoPage = window.location.pathname.endsWith("partido.html");
  if (isPartidoPage) return;
  if (!fidIda) return;

  _tieFidIda = fidIda;
  _tieFidV   = fidV;
  _tieLeg    = "ida";

  modalTab   = "eventos";
  _modalCache = null;

  // Show leg selector above modal
  _renderTieLegTabs();

  document.getElementById("match-modal").classList.add("open");
  document.body.style.overflow = "hidden";

  const h = slugify(homeName ?? "local");
  const a = slugify(awayName ?? "visitante");
  const slug = `${h}-vs-${a}`;
  history.pushState({ fid: fidIda, slug }, "", `/partido/${slug}?id=${fidIda}`);

  modalFixtureId = fidIda;
  loadModalData(fidIda);
}

function _renderTieLegTabs() {
  // Inject tab bar above modal-box if not already present
  const overlay = document.getElementById("match-modal");
  let tabBar = document.getElementById("tie-leg-tabs");
  if (!tabBar) {
    tabBar = document.createElement("div");
    tabBar.id = "tie-leg-tabs";
    tabBar.className = "tie-leg-tabbar";
    // Insert before the modal-box
    const box = document.getElementById("modal-box");
    overlay.insertBefore(tabBar, box);
  }
  tabBar.style.display = (_tieFidIda && _tieFidV) ? "flex" : "none";
  tabBar.innerHTML = `
    <button class="tie-leg-btn${_tieLeg === 'ida' ? ' active' : ''}" onclick="switchTieLeg('ida')">IDA</button>
    <button class="tie-leg-btn${_tieLeg === 'vuelta' ? ' active' : ''}" onclick="switchTieLeg('vuelta')">VUELTA</button>
  `;
}

function switchTieLeg(leg) {
  _tieLeg = leg;
  _renderTieLegTabs();
  _modalCache = null;
  modalTab = "eventos";
  const fid = leg === "ida" ? _tieFidIda : _tieFidV;
  modalFixtureId = fid;
  loadModalData(fid);
}

function closeModal() {
  if (window.location.pathname.endsWith("partido.html")) {
    history.back();
    return;
  }
  document.getElementById("match-modal").classList.remove("open");
  document.body.style.overflow = "";
  modalFixtureId = null;
  _tieFidIda = null;
  _tieFidV   = null;
  _tieLeg    = "ida";
  // Hide tie tabs
  const tabBar = document.getElementById("tie-leg-tabs");
  if (tabBar) tabBar.style.display = "none";
  // Restore URL to /
  history.pushState({}, "", "/");
}

function closeModalOnOverlay(e) {
  if (e.target === document.getElementById("match-modal")) closeModal();
}

document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

// Handle browser back/forward
window.addEventListener("popstate", (e) => {
  if (e.state?.fid) {
    // Navigated forward to a match
    openMatch(e.state.fid);
  } else {
    // Navigated back — close modal without pushing state again
    const modal = document.getElementById("match-modal");
    if (modal?.classList.contains("open")) {
      modal.classList.remove("open");
      document.body.style.overflow = "";
      modalFixtureId = null;
    }
  }
});

// On page load: check if URL is /partido/slug?id=X and auto-open modal
(function checkDirectPartidoURL() {
  const match = window.location.pathname.match(/^\/partido\//);
  if (!match) return;
  const params = new URLSearchParams(window.location.search);
  const fid = parseInt(params.get("id"));
  if (!fid) return;
  // Wait for DOM ready then open modal
  window.addEventListener("DOMContentLoaded", () => openMatch(fid));
})();

async function loadModalData(fid) {
  const box = document.getElementById("modal-content");
  box.innerHTML = `<div class="modal-loader"><div class="spinner"></div><span>Cargando partido...</span></div>`;

  try {
    // Fetch all data in parallel
    const [detailRes, eventsRes, statsRes, lineupsRes] = await Promise.allSettled([
      apiFetch(`/api/match/detail?fixtureid=${fid}`),
      apiFetch(`/api/match/events?fixtureid=${fid}`),
      apiFetch(`/api/match/stats?fixtureid=${fid}`),
      apiFetch(`/api/match/lineups?fixtureid=${fid}`),
    ]);

    const detail  = detailRes.status  === "fulfilled" ? detailRes.value  : null;
    const events  = eventsRes.status  === "fulfilled" ? eventsRes.value  : null;
    const stats   = statsRes.status   === "fulfilled" ? statsRes.value   : null;
    const lineups = lineupsRes.status === "fulfilled" ? lineupsRes.value : null;

    const m = detail?.response?.[0];
    if (!m) { box.innerHTML = `<div class="modal-error">No se encontraron datos para este partido.</div>`; return; }

    const evArr = events?.response ?? [];
    const stArr = stats?.response ?? [];
    const liArr = lineups?.response ?? [];
    _modalCache = { m, events: evArr, stats: stArr, lineups: liArr };
    renderModal(m, evArr, stArr, liArr);
  } catch(e) {
    box.innerHTML = `<div class="modal-error">Error al cargar el partido: ${e.message}</div>`;
  }
}

function renderModal(m, events, stats, lineups) {
  const hn    = m.teams?.home?.name ?? "Local";
  const an    = m.teams?.away?.name ?? "Visitante";
  const hl    = m.teams?.home?.logo ?? null;
  const al    = m.teams?.away?.logo ?? null;
  const hg    = m.goals?.home ?? "-";
  const ag    = m.goals?.away ?? "-";
  const live  = isLive(m);
  const fin   = isFinished(m);
  const status = m.fixture?.status?.short ?? "";
  const elapsed = m.fixture?.status?.elapsed;
  const venue   = m.fixture?.venue?.name ?? null;
  const city    = m.fixture?.venue?.city ?? null;
  const referee = m.fixture?.referee ?? null;
  const date    = m.fixture?.date ? new Date(m.fixture.date).toLocaleDateString("es-AR",{weekday:"long",day:"numeric",month:"long",year:"numeric",timeZone:"America/Argentina/Buenos_Aires"}) : null;
  const time    = m.fixture?.date ? new Date(m.fixture.date).toLocaleTimeString("es-AR",{hour:"2-digit",minute:"2-digit",timeZone:"America/Argentina/Buenos_Aires",hour12:false}) : null;
  const leagueName = m.league?.name ?? "";
  const leagueLogo = m.league?.logo ?? null;
  const season     = m.league?.season ?? "";
  const round      = m.league?.round ?? "";

  const statusLabel = live ? (elapsed ? `${elapsed}′ EN VIVO` : "EN VIVO") : fin ? status : time ?? status;
  const statusCls   = live ? "live-s" : "";
  const scoreCls    = live ? "live" : "";
  const showScore   = fin || live;

  const box = document.getElementById("modal-content");
  box.innerHTML = `
    <!-- Header -->
    <div class="modal-header" style="position:relative;">
      <div class="modal-team home">
        ${hl ? `<img class="modal-team-logo" src="${hl}" onerror="this.style.display='none'">` : ""}
        <span class="modal-team-name">${hn}</span>
      </div>
      <div class="modal-score-center">
        <div class="modal-league-badge">
          ${leagueLogo ? `<img src="${leagueLogo}" onerror="this.style.display='none'">` : ""}
          <span>${leagueName}</span>
        </div>
        <div class="modal-score ${scoreCls}">${showScore ? `${hg} - ${ag}` : "vs"}</div>
        <div class="modal-status ${statusCls}">${statusLabel}</div>
        ${round ? `<div style="font-size:11px;color:var(--muted);margin-top:2px;">${round}</div>` : ""}
      </div>
      <div class="modal-team away">
        ${al ? `<img class="modal-team-logo" src="${al}" onerror="this.style.display='none'">` : ""}
        <span class="modal-team-name">${an}</span>
      </div>
      <button class="modal-close" onclick="closeModal()">✕</button>
    </div>

    <!-- Tabs -->
    <div class="modal-tabs" id="modal-tabs">
      ${["eventos","estadísticas","alineación","táctica","info"].map(t =>
        `<button class="modal-tab ${t === modalTab ? "active" : ""}" onclick="switchModalTab('${t}')">${t.charAt(0).toUpperCase()+t.slice(1)}</button>`
      ).join("")}
    </div>

    <!-- Body -->
    <div class="modal-body" id="modal-body">
      ${renderModalTab(modalTab, m, events, stats, lineups)}
    </div>
  `;
}

// Cache modal data to avoid re-fetching on tab switch
let _modalCache = null;

function switchModalTab(tab) {
  modalTab = tab;
  document.querySelectorAll(".modal-tab").forEach(b => b.classList.toggle("active", b.textContent.toLowerCase() === tab));
  if (_modalCache) {
    const body = document.getElementById("modal-body");
    if (body) body.innerHTML = renderModalTab(tab, _modalCache.m, _modalCache.events, _modalCache.stats, _modalCache.lineups);
  } else {
    loadModalData(modalFixtureId);
  }
}

function renderModalTab(tab, m, events, stats, lineups) {
  if (tab === "eventos")      return renderEvents(m, events);
  if (tab === "estadísticas") return renderStats(stats, m);
  if (tab === "alineación")   return renderLineups(lineups, m);
  if (tab === "táctica")      return renderPitch(lineups, m);
  if (tab === "info") {
    // async: render placeholder then fill
    setTimeout(async () => {
      const body = document.getElementById("modal-body");
      if (body) body.innerHTML = await renderInfo(m);
    }, 0);
    return `<div class="modal-loader"><div class="spinner"></div><span>Cargando info...</span></div>`;
  }
  return "";
}

// ── EVENTOS ───────────────────────────────────────────────────────
function renderEvents(m, events) {
  if (!events.length) return `<div class="modal-error" style="padding:24px;">Sin eventos registrados para este partido.</div>`;

  const homeId = m.teams?.home?.id;
  const iconMap = { "Goal":"⚽", "Card":"🟨", "subst":"🔄", "Var":"📺", "missed_penalty":"❌" };

  // Separate first/second half
  let html = "";
  let shownHT = false;

  events.forEach(ev => {
    const min    = ev.time?.elapsed ?? 0;
    const extra  = ev.time?.extra ? `+${ev.time.extra}` : "";
    const type   = ev.type ?? "";
    const detail = ev.detail ?? "";
    const player = ev.player?.name ?? "";
    const assist = ev.assist?.name ?? "";
    const isHome = ev.team?.id === homeId;

    if (!shownHT && min > 45 && !detail.includes("Extra Time")) {
      html += `<div class="event-sep">— Segundo Tiempo —</div>`;
      shownHT = true;
    }

    let icon = iconMap[type] ?? "⚡";
    let extraInfo = "";

    if (type === "Goal") {
      if (detail === "Own Goal") { icon = "⚽🔴"; extraInfo = "Autogol"; }
      else if (detail === "Missed Penalty") { icon = "🎯❌"; extraInfo = "Penal Errado"; }
      else if (detail === "Penalty") { icon = "⚽🎯"; extraInfo = "Penal"; }
      if (assist && detail !== "Missed Penalty") extraInfo += (extraInfo ? " · Asist: " : "Asist: ") + assist;
    } else if (type === "Card") {
      icon = detail === "Red Card" ? "🟥" : detail === "Yellow Red Card" ? "🟨🟥" : "🟨";
    } else if (type === "subst") {
      icon = "🔄";
      extraInfo = ev.assist?.name ? `↑ ${ev.assist.name}` : "";
    } else if (type === "Var") {
      icon = "📺❌";
      extraInfo = "Anulado";
    } else if (type === "missed_penalty") {
      icon = "🎯❌";
      extraInfo = "Penal Errado";
    }

    const playerHTML = `<div>
      <div class="event-player">${player}</div>
      ${extraInfo ? `<div class="event-detail">${extraInfo}</div>` : ""}
    </div>`;
    const minHTML = `<div class="event-min">${min}${extra}′</div>`;
    const iconHTML = `<span class="event-icon">${icon}</span>`;

    if (isHome) {
      html += `<div class="event-row">
        <div class="event-home">${playerHTML}${iconHTML}</div>
        ${minHTML}
        <div></div>
      </div>`;
    } else {
      html += `<div class="event-row">
        <div></div>
        ${minHTML}
        <div class="event-away">${iconHTML}${playerHTML}</div>
      </div>`;
    }
  });

  if (!shownHT) html = `<div class="event-sep">— Primer Tiempo —</div>` + html;
  else html = `<div class="event-sep">— Primer Tiempo —</div>` + html;

  return `<div class="events-list">${html}</div>`;
}

// ── ESTADÍSTICAS ──────────────────────────────────────────────────
function renderStats(stats, m) {
  // Stats may be unavailable for matches not yet started, or live but early
  const hasStats = stats.length > 0 && stats[0]?.statistics?.length > 0;
  if (!hasStats) {
    const status = m?.fixture?.status?.short ?? "";
    const notStarted = ["NS","TBD","PST","CANC","ABD","AWD","WO"].includes(status);
    const msg = notStarted
      ? "Las estadísticas estarán disponibles cuando comience el partido."
      : "Estadísticas no disponibles para este partido. Puede que la liga no las provea o el partido aún no inició.";
    return `<div class="modal-error" style="padding:24px;">${msg}</div>`;
  }

  const homeStats = stats[0]?.statistics ?? [];
  const awayStats = stats[1]?.statistics ?? [];
  const homeMap   = Object.fromEntries(homeStats.map(s => [s.type, s.value ?? 0]));
  const awayMap   = Object.fromEntries(awayStats.map(s => [s.type, s.value ?? 0]));

  const statKeys = [
    ["Posesión del balón", "Ball Possession", true],
    ["Tiros al arco",      "Shots on Goal", false],
    ["Tiros totales",      "Total Shots", false],
    ["Tiros bloqueados",   "Blocked Shots", false],
    ["Tiros fuera",        "Shots off Goal", false],
    ["Corners",            "Corner Kicks", false],
    ["Offside",            "Offsides", false],
    ["Faltas",             "Fouls", false],
    ["Tarjetas amarillas", "Yellow Cards", false],
    ["Tarjetas rojas",     "Red Cards", false],
    ["Atajadas",           "Goalkeeper Saves", false],
    ["Pases totales",      "Total passes", false],
    ["Pases precisos",     "Passes accurate", false],
    ["Precisión de pases", "Passes %", true],
  ];

  let html = "";
  statKeys.forEach(([label, key, isPercent]) => {
    let hv = homeMap[key] ?? homeMap[key.toLowerCase()];
    let av = awayMap[key] ?? awayMap[key.toLowerCase()];
    hv = (hv === null || hv === undefined) ? "-" : hv;
    av = (av === null || av === undefined) ? "-" : av;
    if ((hv === "-" || hv === 0) && (av === "-" || av === 0)) return;

    const hNum = parseFloat(String(hv).replace("%","")) || 0;
    const aNum = parseFloat(String(av).replace("%","")) || 0;
    const total = hNum + aNum;
    const hPct  = total > 0 ? (hNum / total * 100).toFixed(0) : 50;

    html += `
      <div class="stat-row">
        <div class="stat-val stat-home">${hv}</div>
        <div class="stat-label">${label}</div>
        <div class="stat-val stat-away">${av}</div>
      </div>
      <div class="stat-row" style="padding-top:0;padding-bottom:6px;">
        <div class="stat-bar-wrap">
          <div class="stat-bar-home" style="width:${hPct}%"></div>
        </div>
      </div>`;
  });

  const hn = m.teams?.home?.name ?? "Local";
  const an = m.teams?.away?.name ?? "Visitante";

  return `
    <div style="display:flex;justify-content:space-between;margin-bottom:14px;font-family:'Barlow Condensed',sans-serif;font-weight:800;font-size:16px;">
      <span style="color:var(--accent);">${hn}</span>
      <span style="color:var(--light);font-size:13px;text-transform:uppercase;letter-spacing:.5px;">Estadísticas</span>
      <span>${an}</span>
    </div>
    ${html || `<div class="modal-error">Sin estadísticas.</div>`}`;
}

// ── ALINEACIONES ─────────────────────────────────────────────────
function renderLineups(lineups, m) {
  if (!lineups.length) return `<div class="modal-error" style="padding:24px;">Alineaciones no disponibles.</div>`;

  const renderTeam = (lineup) => {
    const logo      = lineup.team?.logo ?? null;
    const tname     = lineup.team?.name ?? "";
    const formation = lineup.formation ?? "";
    const starters  = lineup.startXI ?? [];
    const subs      = lineup.substitutes ?? [];
    const coach     = lineup.coach?.name ?? null;

    const playerRow = (p, isSub = false) => {
      const num  = p.player?.number ?? "";
      const name = p.player?.name ?? "";
      const pos  = p.player?.pos ?? "";
      return `<div class="player-row">
        <span class="player-num">${num}</span>
        <span class="player-name">${name}</span>
        <span class="player-pos">${pos}</span>
      </div>`;
    };

    return `<div>
      <div class="lineup-team-title">
        ${logo ? `<img src="${logo}" onerror="this.style.display='none'">` : ""}
        <span>${tname}</span>
        ${formation ? `<span class="formation-badge">${formation}</span>` : ""}
      </div>
      ${starters.map(p => playerRow(p)).join("")}
      ${subs.length ? `<div class="subs-title">Suplentes</div>${subs.map(p => playerRow(p, true)).join("")}` : ""}
      ${coach ? `<div style="margin-top:12px;font-size:16px;color:var(--light);font-family:'Barlow Condensed',sans-serif;font-weight:700;">🧥 DT: <b style="color:var(--text);font-size:17px;">${coach}</b></div>` : ""}
    </div>`;
  };

  return `<div class="lineup-wrap">
    ${lineups[0] ? renderTeam(lineups[0]) : ""}
    <div class="lineup-divider"></div>
    ${lineups[1] ? renderTeam(lineups[1]) : ""}
  </div>`;
}

// ── TÁCTICA (VISUAL) ─────────────────────────────────────────────
// Team color palette — fallback colors per team id or use kit colors from API
const TEAM_COLORS = {
  // Argentinas
  // defaults for well-known teams (API may provide colors)
};

function getTeamColor(lineup, fallback) {
  // API-Football v3 provides team colors in lineups.team.colors
  const primary = lineup?.team?.colors?.player?.primary;
  if (primary && primary !== "ffffff" && primary !== "000000") return `#${primary}`;
  const alt = lineup?.team?.colors?.goalkeeper?.primary;
  if (alt && alt !== "ffffff" && alt !== "000000") return `#${alt}`;
  return fallback;
}

function parseFormation(formation) {
  // "4-3-3" -> [4,3,3], then add [1] for GK
  if (!formation) return [1,4,3,3];
  const lines = formation.split("-").map(Number).filter(n => !isNaN(n));
  return [1, ...lines];
}

function renderPitch(lineups, m) {
  if (!lineups.length || !lineups[0]?.startXI?.length) {
    return `<div class="modal-error" style="padding:24px;">Alineaciones no disponibles para el campo.</div>`;
  }

  const homeL = lineups[0];
  const awayL = lineups[1];
  const homeColor = getTeamColor(homeL, "#29b6f6");
  const awayColor = getTeamColor(awayL, "#ff3d57");

  // Determine text color based on brightness
  function textColor(hex) {
    const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
    return (r*299 + g*587 + b*114) / 1000 > 128 ? "#000" : "#fff";
  }

  // Render one team's players positioned by formation rows
  // direction: "home" = bottom half (GK at bottom), "away" = top half (GK at top)
  function renderFormationRows(lineup, color, direction) {
    const allPlayers = (lineup?.startXI ?? []).map(p => p.player);
    const lines      = parseFormation(lineup?.formation); // e.g. [1,4,3,3]
    const tc         = textColor(color);
    let html         = "";

    // For home: players array is [GK, def..., mid..., fwd...]
    // We want GK row at bottom → fwd row near center line
    // So we iterate lines in order, but position from bottom up.
    // For away: GK row at top → fwd row near center line
    // So we iterate lines in order, position from top down.

    const totalRows = lines.length;
    let idx = 0;

    lines.forEach((count, ri) => {
      const rowPlayers = allPlayers.slice(idx, idx + count);
      idx += count;

      // ri=0 is GK row, ri=totalRows-1 is attack row
      // home: GK at bottom → pct large from bottom; attack near center → pct small from bottom
      // away: GK at top → pct large from top; attack near center → pct small from top
      // home: ri=0(GK) at bottom, ri=N(attack) near center  → pct increases with ri from bottom
      // away: ri=0(GK) at top,    ri=N(attack) near center  → pct increases with ri from top
      const pct = ((ri + 0.5) / totalRows) * 44 + 2;

      const pos = direction === "home"
        ? `bottom:${pct}%`
        : `top:${pct}%`;

      const dots = rowPlayers.map(p => `
        <div class="pitch-player">
          <div class="pitch-player-dot" style="background:${color};color:${tc};">${p?.number ?? "?"}</div>
          <div class="pitch-player-name">${(p?.name ?? "").split(" ").pop()}</div>
        </div>`).join("");

      html += `<div class="pitch-row" style="position:absolute;left:0;right:0;display:flex;justify-content:space-around;align-items:center;${pos};">${dots}</div>`;
    });
    return html;
  }

  return `<div class="pitch-wrap">
    <div class="pitch" style="position:relative;">
      <div class="pitch-line pitch-center-line"></div>
      <div class="pitch-line pitch-center-circle"></div>
      <div class="pitch-line pitch-penalty-top"></div>
      <div class="pitch-line pitch-penalty-bot"></div>
      <div class="pitch-line pitch-goal-top"></div>
      <div class="pitch-line pitch-goal-bot"></div>
      ${renderFormationRows(awayL, awayColor, "away")}
      ${renderFormationRows(homeL, homeColor, "home")}
    </div>
    <div style="display:flex;gap:20px;font-size:14px;justify-content:center;flex-wrap:wrap;">
      <span><span style="display:inline-block;width:14px;height:14px;border-radius:50%;background:${homeColor};margin-right:6px;vertical-align:middle;border:1px solid rgba(255,255,255,.2);"></span>${homeL?.team?.name ?? "Local"} (${homeL?.formation ?? ""})</span>
      <span><span style="display:inline-block;width:14px;height:14px;border-radius:50%;background:${awayColor};margin-right:6px;vertical-align:middle;border:1px solid rgba(255,255,255,.2);"></span>${awayL?.team?.name ?? "Visitante"} (${awayL?.formation ?? ""})</span>
    </div>
  </div>`;
}

// ── INFO ──────────────────────────────────────────────────────────
async function renderInfo(m) {
  const venue    = m.fixture?.venue?.name;
  const city     = m.fixture?.venue?.city;
  const referee  = m.fixture?.referee;
  const date     = m.fixture?.date ? new Date(m.fixture.date) : null;
  const dateStr  = date ? date.toLocaleDateString("es-AR",{weekday:"long",day:"numeric",month:"long",year:"numeric",timeZone:"America/Argentina/Buenos_Aires"}) : null;
  const timeStr  = date ? date.toLocaleTimeString("es-AR",{hour:"2-digit",minute:"2-digit",timeZone:"America/Argentina/Buenos_Aires",hour12:false}) : null;
  const league   = m.league?.name;
  const season   = m.league?.season;
  const round    = m.league?.round;
  const lid      = m.league?.id;

  const card = (title, val) => val ? `
    <div class="info-card">
      <div class="info-card-title">${title}</div>
      <div class="info-card-val">${val}</div>
    </div>` : "";

  // Base info cards
  let html = `<div class="info-grid">
    ${card("Competencia", league ? `${league} ${season ?? ""}` : null)}
    ${card("Ronda / Jornada", round)}
    ${card("Fecha", dateStr)}
    ${card("Hora", timeStr ? `${timeStr} (ARG)` : null)}
    ${card("Estadio", venue ? (city ? `${venue}, ${city}` : venue) : null)}
    ${card("Árbitro", referee)}
  </div>`;

  // Standings mini for both teams
  const hid = m.teams?.home?.id;
  const aid = m.teams?.away?.id;
  const hn  = m.teams?.home?.name ?? "Local";
  const an  = m.teams?.away?.name ?? "Visitante";

  if (lid) {
    try {
      const sData = await apiFetch(`/api/standings?leagueid=${lid}&season=${seasonFor(lid)}`);
      const groups = sData?.response?.[0]?.league?.standings ?? [];
      // Flatten all groups
      const allRows = groups.flat ? groups.flat() : [].concat(...groups);

      const findTeam = (tid) => allRows.find(r => r.team?.id === tid);
      const hRow = findTeam(hid);
      const aRow = findTeam(aid);

      const teamStandCard = (row, name) => {
        if (!row) return card(name, "Sin datos en tabla");
        const pos = row.rank;
        const pts = row.points;
        const pj  = row.all?.played ?? "-";
        const dg  = row.goalsDiff != null ? (row.goalsDiff > 0 ? `+${row.goalsDiff}` : row.goalsDiff) : "-";
        return `<div class="info-card">
          <div class="info-card-title">${name}</div>
          <div class="info-card-val"><span style="color:var(--accent);font-size:20px;font-family:'Barlow Condensed',sans-serif;font-weight:900;">#${pos}</span></div>
          <div style="display:flex;gap:14px;margin-top:6px;font-size:14px;">
            <span><span style="color:var(--light);font-size:12px;">PTS</span><br><b style="font-size:17px;">${pts}</b></span>
            <span><span style="color:var(--light);font-size:12px;">PJ</span><br><b style="font-size:17px;">${pj}</b></span>
            <span><span style="color:var(--light);font-size:12px;">DG</span><br><b style="font-size:17px;">${dg}</b></span>
          </div>
        </div>`;
      };

      html += `<div style="margin-top:12px;font-size:13px;color:var(--light);text-transform:uppercase;letter-spacing:1px;font-weight:700;font-family:'Barlow Condensed',sans-serif;margin-bottom:8px;">Posición en tabla</div>
      <div class="info-grid">
        ${teamStandCard(hRow, hn)}
        ${teamStandCard(aRow, an)}
      </div>`;
    } catch(e) {
      // standings not available, skip silently
    }
  }

  return html;
}



// ═══════════════════════════════════════════════════════════════════
// INIT — Página dedicada de partido (/partido.html?id=XXXX)
// ═══════════════════════════════════════════════════════════════════
function initPartidoPage() {
  const params = new URLSearchParams(window.location.search);
  const fid = parseInt(params.get("id"));
  if (!fid) {
    const cont = document.getElementById("modal-content");
    if (cont) cont.innerHTML = '<div class="empty-state"><div class="big">⚽</div><p>No se especificó un partido.</p></div>';
    return;
  }
  // renderModal() writes to #modal-content which is inside #partido-container on this page
  // closeModal() on this page goes back to previous page
  document.addEventListener("keydown", e => { if (e.key === "Escape") history.back(); });
  modalFixtureId = fid;
  modalTab = "eventos";
  _modalCache = {};
  loadModalData(fid);
}