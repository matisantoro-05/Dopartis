// ═══════════════════════════════════════════════════════════════════
// SWITCH VIEW
// ═══════════════════════════════════════════════════════════════════
function refreshCurrentView() {
  loadMatches();
  loadSidebarStandings(document.getElementById("sb-standings-sel").value);
  loadSidebarScorers(document.getElementById("sb-scorers-sel").value);
}

// ═══════════════════════════════════════════════════════════════════
// MATCHES — normalización API-Football v3
// Estructura: response[].{ fixture, league, teams, goals, score }
// ═══════════════════════════════════════════════════════════════════
function getMinute(m) {
  return m.fixture?.status?.elapsed ?? null;
}
function getTime(m) {
  const utc = m.fixture?.date;
  if (!utc) return "--:--";
  const d = new Date(utc);
  return d.toLocaleTimeString("es-AR", { hour:"2-digit", minute:"2-digit", timeZone:"America/Argentina/Buenos_Aires", hour12:false });
}
function getScore(m) {
  const h = m.goals?.home ?? null;
  const a = m.goals?.away ?? null;
  if (h === null || a === null) return null;
  const s = m.fixture?.status?.short ?? "";
  if (s === "NS") return null; // not started
  return { h, a };
}
function getHomeName(m) { return m.teams?.home?.name ?? "Local"; }
function getAwayName(m) { return m.teams?.away?.name ?? "Visitante"; }
function getHomeLogo(m) { return m.teams?.home?.logo ?? null; }
function getAwayLogo(m) { return m.teams?.away?.logo ?? null; }
function getFixtureId(m) { return m.fixture?.id ?? null; }
function getLeagueId(m)  { return m.league?.id ?? null; }
function getLeagueName(m){ return m.league?.name ?? "Liga"; }
function getLeagueLogo(m){ return m.league?.logo ?? null; }

async function loadMatches() {
  clearAutoRefresh();
  document.getElementById("matches-container").innerHTML = loader();

  try {
    let data;
    if (activeLeague === "all") {
      data = await apiFetch(`/api/matches/by-date?date=${activeDate}`);
    } else {
      const lc = LEAGUES.find(l => l.id === activeLeague);
      if (lc?.lid) {
        // Fetch main league + cup leagues for this country in parallel
        const cupLeagues = LEAGUES.filter(l => l.cup && l.parentId === lc.id);
        const fetches = [
          apiFetch(`/api/matches/by-date-league?date=${activeDate}&leagueid=${lc.lid}&season=${seasonFor(lc.lid)}`),
          ...cupLeagues.map(c =>
            apiFetch(`/api/matches/by-date-league?date=${activeDate}&leagueid=${c.lid}&season=${seasonFor(c.lid)}`).catch(() => ({ response:[] }))
          )
        ];
        const results = await Promise.all(fetches);
        data = { response: results.flatMap(r => r?.response ?? []) };
      } else {
        data = await apiFetch(`/api/matches/by-date?date=${activeDate}`);
      }
    }

    allSections = groupByLeague(data);
    renderMatches();
    loadGoalsForMatches();
    setLastUpdate();
    startAutoRefresh();
  } catch(e) {
    document.getElementById("matches-container").innerHTML = errorBox(e.message);
  }
}

function groupByLeague(data) {
  // API-Football v3: { response: [ { fixture, league, teams, goals, ... } ] }
  const raw = data?.response ?? [];
  if (!Array.isArray(raw) || raw.length === 0) return [];

  // Set de IDs permitidos (solo nuestras ligas configuradas)
  const allowedIds = new Set(LEAGUES.filter(l => l.lid).map(l => l.lid));

  const map = new Map();
  raw.forEach(m => {
    const lid  = getLeagueId(m);
    // Si la vista es "todos" y la liga no está en nuestra lista, la ignoramos
    if (activeLeague === "all" && !allowedIds.has(lid)) return;
    const name = getLeagueName(m);
    const logo = getLeagueLogo(m);
    if (!map.has(lid)) map.set(lid, { lid, name, logo, matches:[] });
    map.get(lid).matches.push(m);
  });

  return [...map.values()].sort((a, b) => {
    const ai = LEAGUES.findIndex(l => l.lid === a.lid);
    const bi = LEAGUES.findIndex(l => l.lid === b.lid);
    if (ai >= 0 && bi < 0) return -1;
    if (bi >= 0 && ai < 0) return 1;
    return (ai < 0 ? 999 : ai) - (bi < 0 ? 999 : bi);
  });
}

function renderMatches() {
  const cont = document.getElementById("matches-container");
  if (allSections.length === 0) {
    cont.innerHTML = `<div class="empty-state"><div class="big">⚽</div><p>No hay partidos para este día.</p></div>`;
    return;
  }
  cont.innerHTML = "";
  allSections.forEach(sec => {
    const lc = LEAGUES.find(l => l.lid === sec.lid);
    const _iconSrc = lc?.logo || lc?.flag;
    const flagHTML = _iconSrc
      ? `<img src="${_iconSrc}" style="width:22px;height:22px;object-fit:contain;border-radius:2px;" onerror="this.style.display='none'">`
      : "🏆";
    const name = lc?.name ?? sec.name;
    const liveCount = sec.matches.filter(m => isLive(m)).length;

    const div = document.createElement("div");
    div.className = "section";
    div.innerHTML = `
      <div class="section-head" onclick="toggleSection(this)">
        <span class="section-flag">${flagHTML}</span>
        <span class="section-title">${name}</span>
        ${liveCount > 0 ? `<span class="section-live-badge">● ${liveCount} EN VIVO</span>` : ""}
        <span class="section-badge">${sec.matches.length}</span>
        <span class="section-arrow">▾</span>
      </div>
      <div class="matches-list">
        ${sec.matches.map(m => renderMatchRow(m)).join("")}
      </div>`;
    cont.appendChild(div);
  });
}

function logoHTML(url, name, cls = "team-logo") {
  if (url) return `<div class="${cls}"><img src="${url}" alt="${name}" onerror="this.style.display='none'"></div>`;
  return `<div class="${cls}">⚽</div>`;
}

function renderMatchRow(m) {
  const live     = isLive(m);
  const finished = isFinished(m);
  const score    = getScore(m);
  const min      = getMinute(m);
  const time     = getTime(m);
  const fid      = getFixtureId(m);
  const hn       = getHomeName(m);
  const an       = getAwayName(m);
  const hl       = getHomeLogo(m);
  const al       = getAwayLogo(m);
  const status   = m.fixture?.status?.short ?? "";

  let timeHTML;
  if (live) {
    const minStr = min ? `${min}′` : status;
    timeHTML = `<div class="match-time"><span class="time-main live">${minStr}</span><span class="time-sub">EN VIVO</span></div>`;
  } else if (finished) {
    timeHTML = `<div class="match-time"><span class="time-main">Final</span></div>`;
  } else {
    timeHTML = `<div class="match-time"><span class="time-main">${time}</span></div>`;
  }

  let scoreHTML;
  if (!score) {
    scoreHTML = `<div class="score-cell"><span class="score-val ns">vs</span></div>`;
  } else {
    const cls = live ? "live" : "ft";
    // Mostrar resultado primer tiempo si está disponible
    const htStr = ""; // Marcador primer tiempo quitado
    scoreHTML = `<div class="score-cell"><span class="score-val ${cls}">${score.h} - ${score.a}</span>${htStr}</div>`;
  }

  // Goals row — populated lazily after render via loadGoalsForMatches()
  const needGoals = finished || live;
  const goalsRow = needGoals
    ? `<div class="match-goals" id="goals-${fid}" onclick="openMatch(${fid})"></div>`
    : "";

  return `<div class="match-row" onclick="openMatch(${fid},'${(hn).replace(/'/g,"\\'")}','${(an).replace(/'/g,"\\'")}' )" data-fid="${fid}" data-homeid="${m.teams?.home?.id ?? ''}">
    ${timeHTML}
    <div class="team-cell home"><span class="team-name">${hn}</span>${logoHTML(hl, hn)}</div>
    ${scoreHTML}
    <div class="team-cell away"><span class="team-name">${an}</span>${logoHTML(al, an)}</div>
    <div class="match-extra">${live ? '<span class="live-dot2"></span>' : ''}</div>
  </div>${goalsRow}`;
}

// ═══════════════════════════════════════════════════════════════════
// SIDEBAR WIDGETS
// ═══════════════════════════════════════════════════════════════════
async function loadSidebarStandings(lid) {
  lid = parseInt(lid);
  const cont = document.getElementById("sidebar-standings");
  cont.innerHTML = `<div class="loader-wrap" style="padding:20px 0;"><div class="spinner"></div></div>`;
  try {
    const data = await apiFetch(`/api/standings?leagueid=${lid}&season=${seasonFor(lid)}`);
    const rows = extractStandingRows(data).slice(0, 8);
    if (!rows.length) { cont.innerHTML = `<p style="color:var(--muted);font-size:14px;text-align:center;padding:16px 0;">Sin datos</p>`; return; }
    cont.innerHTML = `<table class="standings-mini">
      ${rows.map(r => {
        const pos  = r.rank ?? "?";
        const name = r.team?.name ?? "";
        const pj   = r.all?.played ?? 0;
        const pts  = r.points ?? 0;
        return `<tr><td>${pos}</td><td>${name}</td><td>${pj}</td><td class="pts-s">${pts}</td></tr>`;
      }).join("")}
    </table>`;
  } catch(e) {
    cont.innerHTML = `<p style="color:var(--muted);font-size:13px;text-align:center;padding:12px 0;">No disponible</p>`;
  }
}

async function loadSidebarScorers(lid) {
  lid = parseInt(lid);
  const cont = document.getElementById("sidebar-scorers");
  cont.innerHTML = `<div class="loader-wrap" style="padding:20px 0;"><div class="spinner"></div></div>`;
  try {
    const data = await apiFetch(`/api/top-scorers?leagueid=${lid}&season=${seasonFor(lid)}`);
    const raw  = (data?.response ?? []).slice(0, 6);
    if (!raw.length) { cont.innerHTML = `<p style="color:var(--muted);font-size:13px;text-align:center;padding:12px 0;">Sin datos</p>`; return; }
    cont.innerHTML = raw.map((p, i) => {
      const name  = p.player?.name ?? "";
      const club  = p.statistics?.[0]?.team?.name ?? "";
      const goals = p.statistics?.[0]?.goals?.total ?? 0;
      return `<div class="scorer-row">
        <span class="scorer-num">${i+1}</span>
        <div class="scorer-info"><div class="scorer-name">${name}</div><div class="scorer-club">${club}</div></div>
        <span class="scorer-g">${goals}</span>
      </div>`;
    }).join("");
  } catch(e) {
    cont.innerHTML = `<p style="color:var(--muted);font-size:13px;text-align:center;padding:12px 0;">No disponible</p>`;
  }
}

// ═══════════════════════════════════════════════════════════════════
// AUTO REFRESH & UTILS
// ═══════════════════════════════════════════════════════════════════
function startAutoRefresh() {
  clearAutoRefresh();
  const hasLive = allSections.some(s => s.matches.some(m => isLive(m)));
  if (hasLive) {
    refreshTimer = setInterval(loadMatches, 60000);
  }
}
function clearAutoRefresh() { if (refreshTimer) { clearInterval(refreshTimer); refreshTimer = null; } }
function toggleSection(head) { head.parentElement.classList.toggle("collapsed"); }

// ═══════════════════════════════════════════════════════════════════
// INIT — Resultados
// ═══════════════════════════════════════════════════════════════════
document.addEventListener("DOMContentLoaded", () => {
  buildDateBar();
  buildLeagueTabs("league-tabs", activeLeague, (l) => {
    activeLeague = l.id;
    localStorage.setItem("dopartis-league-results", l.id);
    loadMatches();
  });
  loadMatches();
  setTimeout(() => loadSidebarStandings(document.getElementById("sb-standings-sel").value), 3000);
  setTimeout(() => loadSidebarScorers(document.getElementById("sb-scorers-sel").value), 10000);
  startAutoRefresh();
});