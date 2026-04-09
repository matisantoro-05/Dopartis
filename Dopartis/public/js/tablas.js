// ═══════════════════════════════════════════════════════════════════
// STANDINGS — normalización API-Football v3
// response[0].league.standings[0][ { rank, team, points, ... } ]
// ═══════════════════════════════════════════════════════════════════
let activeStandingsLeague = localStorage.getItem("dopartis-league-tablas") || "epl";
let activeRound = null;      // current round string e.g. "Regular Season - 28"
let activeRoundLid = null;   // league id for current rounds
let activeRoundSeason = null;
let allRounds = [];          // all round strings for current league

function formatRoundLabel(round) {
  return round.replace("Regular Season - ", "Jornada ").replace("Group Stage - ", "Grupo ").replace("Playoffs - ", "Playoffs ").replace(" Round","").replace("Final","Final");
}

function populateRoundSelect() {
  const sel = document.getElementById("srn-select");
  if (!sel) return;
  sel.innerHTML = allRounds.map(r =>
    `<option value="${r}" ${r === activeRound ? "selected" : ""}>${formatRoundLabel(r)}</option>`
  ).join("");
}

async function selectRoundFromDropdown(val) {
  activeRound = val;
  await loadRoundMatches(activeRoundLid, activeRoundSeason, activeRound);
}

async function loadRoundsForLeague(lid, season) {
  activeRoundLid = lid;
  activeRoundSeason = season;
  const cont = document.getElementById("srn-matches");
  const sel = document.getElementById("srn-select");
  if (sel) sel.innerHTML = `<option>Cargando...</option>`;
  cont.innerHTML = `<div class="loader-wrap" style="padding:20px;"><div class="spinner"></div></div>`;
  try {
    const data = await apiFetch(`/api/rounds?leagueid=${lid}&season=${season}`);
    allRounds = data?.response ?? [];
    if (!allRounds.length) {
      cont.innerHTML = `<div style="padding:16px;text-align:center;color:var(--muted);font-size:13px;">Sin jornadas disponibles.</div>`;
      return;
    }
    activeRound = allRounds[allRounds.length - 1];
    populateRoundSelect();
    await loadRoundMatches(lid, season, activeRound);
  } catch(e) {
    cont.innerHTML = `<div style="padding:16px;text-align:center;color:var(--muted);font-size:13px;">Error cargando jornadas.</div>`;
  }
}

async function changeRound(dir) {
  if (!allRounds.length) return;
  const idx = allRounds.indexOf(activeRound);
  const newIdx = Math.max(0, Math.min(allRounds.length - 1, idx + dir));
  activeRound = allRounds[newIdx];
  populateRoundSelect();
  await loadRoundMatches(activeRoundLid, activeRoundSeason, activeRound);
}

async function loadRoundMatches(lid, season, round) {
  const cont = document.getElementById("srn-matches");
  // Format round title
  // Title shown via dropdown select
  cont.innerHTML = `<div class="loader-wrap" style="padding:20px;"><div class="spinner"></div></div>`;
  try {
    const enc = encodeURIComponent(round);
    const data = await apiFetch(`/api/matches/by-round?leagueid=${lid}&season=${season}&round=${enc}`);
    const matches = data?.response ?? [];
    if (!matches.length) {
      cont.innerHTML = `<div style="padding:16px;text-align:center;color:var(--muted);font-size:13px;">Sin partidos en esta jornada.</div>`;
      return;
    }
    cont.innerHTML = matches.map(m => {
      const hn  = m.teams?.home?.name ?? "";
      const an  = m.teams?.away?.name ?? "";
      const hl  = m.teams?.home?.logo ?? null;
      const al  = m.teams?.away?.logo ?? null;
      const hg  = m.goals?.home;
      const ag  = m.goals?.away;
      const live = isLive(m);
      const fin  = isFinished(m);
      const fid  = m.fixture?.id;
      const scoreText = (fin || live) && hg !== null ? `${hg} - ${ag}` : m.fixture?.date
        ? new Date(m.fixture.date).toLocaleTimeString("es-AR",{hour:"2-digit",minute:"2-digit",timeZone:"America/Argentina/Buenos_Aires",hour12:false})
        : "-";
      const scoreCls = live ? "live" : "";
      const hlImg = hl ? `<img src="${hl}" onerror="this.style.display='none'">` : "";
      const alImg = al ? `<img src="${al}" onerror="this.style.display='none'">` : "";
      return `<div class="srn-match" onclick="openMatch(${fid})">
        <div class="srn-team home">${hlImg}<span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${hn}</span></div>
        <div style="display:flex;flex-direction:column;align-items:center;flex-shrink:0;">
          <div class="srn-score ${scoreCls}">${scoreText}</div>
          ${fin ? `<div class="srn-time">Final</div>` : live ? `<div class="srn-time" style="color:var(--live);">EN VIVO</div>` : ""}
        </div>
        <div class="srn-team" style="justify-content:flex-start;">${alImg}<span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${an}</span></div>
      </div>`;
    }).join("");
  } catch(e) {
    cont.innerHTML = `<div style="padding:16px;text-align:center;color:var(--muted);font-size:13px;">Error cargando partidos.</div>`;
  }
}

function loadStandingsView() {
  buildLeagueTabs("standings-league-tabs", activeStandingsLeague, (l) => {
    activeStandingsLeague = l.id;
    localStorage.setItem("dopartis-league-tablas", l.id);
    if (l.lid) loadStandingsFull(l.lid);
  }, true);
  const lc = LEAGUES.find(l => l.id === activeStandingsLeague);
  if (lc?.lid) loadStandingsFull(lc.lid);
}

// Sub-tab state for league/cup navigation
let currentSubLid = null; // currently displayed lid (could be cup)

const ARG_ANUAL_LID = 130;
const ARG_PROM_LID  = 131;

// Extra sub-tabs per league lid (beyond the main league and cups from LEAGUES)
const EXTRA_SUBTABS = {
  128: [ { label:"Liga Profesional", lid:128 }, { label:"Tabla Anual", lid:130 }, { label:"Promedios", lid:131 } ],
  2:   [ { label:"Fase de Liga",    lid:2,   group:false }, { label:"Eliminación", lid:2,   bracket:true } ],
  3:   [ { label:"Fase de Liga",    lid:3,   group:false }, { label:"Eliminación", lid:3,   bracket:true } ],
  848: [ { label:"Fase de Liga",    lid:848, group:false }, { label:"Eliminación", lid:848, bracket:true } ],
  13:  [ { label:"Fase de Grupos",  lid:13,  group:true  }, { label:"Eliminación", lid:13,  bracket:true } ],
  11:  [ { label:"Fase de Grupos",  lid:11,  group:true  }, { label:"Eliminación", lid:11,  bracket:true } ],
};

function buildSubTabs(mainLid, season) {
  const wrap = document.getElementById("arg-tabs-wrap");
  const mainLeague = LEAGUES.find(l => l.lid === mainLid);
  const cups = LEAGUES.filter(l => l.cup && l.parentId === mainLeague?.id);

  // Build tab list
  let tabs = [];
  if (EXTRA_SUBTABS[mainLid]) {
    tabs = [...EXTRA_SUBTABS[mainLid]];
  } else {
    tabs = [{ label: mainLeague?.leagueName || mainLeague?.name || "Liga", lid: mainLid }];
  }
  cups.forEach(c => tabs.push({ label: c.leagueName || c.name, lid: c.lid, cup: true }));

  if (tabs.length <= 1 && !cups.length) {
    wrap.style.display = "none"; wrap.innerHTML = ""; return;
  }

  wrap.innerHTML = tabs.map(t =>
    `<button class="arg-tab${(t.lid === (currentSubLid ?? mainLid) && !t.bracket) ? " active" : ""}" onclick="switchSubTab(${t.lid}, ${season}, ${!!t.cup}, ${!!t.bracket})">${t.label}</button>`
  ).join("");
  wrap.style.display = "";
}

async function switchSubTab(lid, season, isCup, isBracket) {
  currentSubLid = isBracket ? -lid : lid; // negative to distinguish bracket from group tab
  document.querySelectorAll("#arg-tabs-wrap .arg-tab").forEach(b => {
    const onc = b.getAttribute("onclick") ?? "";
    const btnBracket = onc.includes(", true)");
    b.classList.toggle("active", onc.includes(`(${lid},`) && (!!isBracket === btnBracket));
  });
  const cont = document.getElementById("standings-container");
  cont.innerHTML = loader();
  loadRoundsForLeague(lid, season);
  try {
    if (isBracket || isCup) {
      await renderCupBracket(lid, season, cont);
    } else {
      const data = await apiFetch(`/api/standings?leagueid=${lid}&season=${season}`);
      renderStandingsFull(data, cont);
    }
    setLastUpdate();
  } catch(e) {
    cont.innerHTML = errorBox(e.message);
  }
}

function roundRank(r) {
  const rl = r.toLowerCase();
  if (rl.includes("64") || rl.includes("32nd"))   return 1;
  if (rl.includes("32") || rl.includes("16th"))   return 2;
  if (rl.includes("16") || rl.includes("8th"))    return 3;
  if (rl.includes("8")  || rl.includes("quarter"))return 4;
  if (rl.includes("semi"))                        return 5;
  if (rl.includes("3rd") || rl.includes("third")) return 6;
  if (rl.includes("final"))                       return 7;
  return 9;
}

async function renderCupBracket(lid, season, cont) {
  // Hide sidebar rounds panel when showing bracket, show ad instead
  const sidebarRounds = document.getElementById("sidebar-rounds");
  if (sidebarRounds) {
    sidebarRounds.innerHTML = `<div class="ad-slot box">Publicidad · 300×250</div>`;
  }
  cont.innerHTML = `<div class="loader-wrap"><div class="spinner"></div><span>Cargando llaves...</span></div>`;
  try {
    const rData = await apiFetch(`/api/rounds?leagueid=${lid}&season=${season}`);
    const allRounds = rData?.response ?? [];
    if (!allRounds.length) {
      cont.innerHTML = `<div class="empty-state"><div class="big">🏆</div><p>Sin datos para esta copa.</p></div>`;
      return;
    }

    // Keep only knockout rounds
    const BRACKET_KEYWORDS = ["final","semi","quarter","round of","8th","4th","octavo","cuarto","semifinal","2nd round","3rd round","4th round","5th round"];
    const bracketRounds = allRounds.filter(r => {
      const rl = r.toLowerCase();
      return BRACKET_KEYWORDS.some(k => rl.includes(k));
    });
    const roundsToShow = bracketRounds.length ? bracketRounds : allRounds.slice(-8);

    // Fetch all rounds in parallel
    const fixturesByRound = await Promise.all(
      roundsToShow.map(async round => {
        const enc = encodeURIComponent(round);
        const d = await apiFetch(`/api/matches/by-round?leagueid=${lid}&season=${season}&round=${enc}`).catch(()=>({response:[]}));
        return { round, matches: d?.response ?? [] };
      })
    );

    // Sort rounds earliest → latest
    fixturesByRound.sort((a, b) => roundRank(a.round) - roundRank(b.round));

    // Group legs: pair Ida + Vuelta by team combination
    // Detect if any round has 2 matches between same two teams → it's two-legged
    const processedRounds = groupLegs(fixturesByRound);

    cont.innerHTML = renderBracketHTML(processedRounds);
  } catch(e) {
    cont.innerHTML = `<div class="error-box">⚠️ ${e.message}</div>`;
  }
}

// Get winner team ID from a tie
function tieWinnerId(legs) {
  if (!legs || !legs.length) return null;
  if (legs.length === 1) {
    const m = legs[0];
    const hg = m.goals?.home, ag = m.goals?.away;
    if (!isFinished(m) || hg === null || ag === null) return null;
    const hPen = m.score?.penalty?.home ?? null, aPen = m.score?.penalty?.away ?? null;
    if (hg > ag || (hg === ag && hPen !== null && hPen > aPen)) return m.teams?.home?.id;
    if (ag > hg || (ag === hg && aPen !== null && aPen > hPen)) return m.teams?.away?.id;
    return null;
  }
  const ida = legs[0], vuelta = legs[1];
  const gH = (ida.goals?.home??0) + (vuelta.goals?.away??0);
  const gA = (ida.goals?.away??0) + (vuelta.goals?.home??0);
  if (gH > gA) return ida.teams?.home?.id;
  if (gA > gH) return ida.teams?.away?.id;
  const penH = vuelta.score?.penalty?.away ?? null, penA = vuelta.score?.penalty?.home ?? null;
  if (penH !== null && penH > penA) return ida.teams?.home?.id;
  if (penA !== null && penA > penH) return ida.teams?.away?.id;
  return null;
}

// Group two-legged ties (ida/vuelta) within each round and order by bracket progression
function groupLegs(fixturesByRound) {
  const processed = fixturesByRound.map(({ round, matches }) => {
    const tieMap = new Map();
    matches.forEach(m => {
      const key = [m.teams?.home?.id, m.teams?.away?.id].sort().join("-");
      if (!tieMap.has(key)) tieMap.set(key, []);
      tieMap.get(key).push(m);
    });
    const ties = [];
    tieMap.forEach(legs => {
      legs.sort((a, b) => new Date(a.fixture?.date) - new Date(b.fixture?.date));
      ties.push(legs);
    });
    ties.sort((a, b) => new Date(a[0]?.fixture?.date) - new Date(b[0]?.fixture?.date));
    return { round, ties };
  });

  // Re-order each round so ties align with the previous round's bracket position.
  // prevTies[i] is an array of match objects (legs).
  // currTies[i] is also an array of match objects (legs).
  for (let ri = 1; ri < processed.length; ri++) {
    const prevTies = processed[ri - 1].ties; // array of leg-arrays
    const currTies = [...processed[ri].ties];
    if (!prevTies.length || !currTies.length) continue;

    const ordered = new Array(currTies.length).fill(null);
    const used = new Set();

    for (let pi = 0; pi < prevTies.length; pi += 2) {
      // Collect all team IDs that appear in prev[pi] and prev[pi+1]
      const teamIds = new Set();
      for (let k = pi; k <= pi + 1 && k < prevTies.length; k++) {
        // prevTies[k] is a leg-array (array of match objects)
        prevTies[k].forEach(m => {
          if (m.teams?.home?.id) teamIds.add(m.teams.home.id);
          if (m.teams?.away?.id) teamIds.add(m.teams.away.id);
        });
      }
      // Find current tie whose matches share a team with the prev pair
      const matchIdx = currTies.findIndex((legArray, idx) => {
        if (used.has(idx)) return false;
        // legArray is an array of match objects
        return legArray.some(m =>
          teamIds.has(m.teams?.home?.id) || teamIds.has(m.teams?.away?.id)
        );
      });
      if (matchIdx >= 0) {
        ordered[Math.floor(pi / 2)] = currTies[matchIdx];
        used.add(matchIdx);
      }
    }
    // Append any unmatched ties in remaining slots
    let slot = 0;
    currTies.forEach((t, idx) => {
      if (!used.has(idx)) {
        while (slot < ordered.length && ordered[slot] !== null) slot++;
        if (slot < ordered.length) { ordered[slot] = t; slot++; }
      }
    });
    processed[ri].ties = ordered.filter(Boolean);
  }

  return processed;
}

function formatRound(r) {
  return r.replace(/Regular Season - /i,"")
    .replace(/Round of 64/i,"32avos")
    .replace(/Round of 32/i,"16avos")
    .replace(/Round of 16/i,"Octavos")
    .replace(/Quarter-?Finals?/i,"Cuartos")
    .replace(/Semi-?Finals?/i,"Semifinales")
    .replace(/3rd Place/i,"3er Lugar")
    .replace(/Final/i,"Final");
}

// Render a single match card (Final, single-leg matches)
function renderSingleCard(m) {
  const hn  = m.teams?.home?.name ?? "Local";
  const an  = m.teams?.away?.name ?? "Visitante";
  const hl  = m.teams?.home?.logo ?? null;
  const al  = m.teams?.away?.logo ?? null;
  const hg  = m.goals?.home;
  const ag  = m.goals?.away;
  const fin = isFinished(m);
  const live= isLive(m);
  const fid = m.fixture?.id;
  const hWin = fin && hg !== null && hg > ag;
  const aWin = fin && ag !== null && ag > hg;
  const teamRow = (name, logo, goals, win) => `
    <div class="bracket-team ${win ? "bracket-winner":""}">
      ${logo ? `<img src="${logo}" onerror="this.style.display='none'">` : ""}
      <span class="bracket-team-name">${name}</span>
      ${(fin||live) && goals !== null ? `<span class="bracket-score">${goals}</span>` : ""}
    </div>`;
  return `<div class="bracket-match" onclick="openMatch(${fid},'${hn.replace(/'/g,"\'")}','${an.replace(/'/g,"\'")}')">
    ${teamRow(hn, hl, hg, hWin)}
    <div class="bracket-divider"></div>
    ${teamRow(an, al, ag, aWin)}
  </div>`;
}

// Render a two-legged tie as ONE card with I / V / G columns
function renderTieCard(legs) {
  if (legs.length === 1) return renderSingleCard(legs[0]);
  const ida = legs[0], vuelta = legs[1];
  const hn = ida.teams?.home?.name ?? "Local";
  const an = ida.teams?.away?.name ?? "Visitante";
  const hl = ida.teams?.home?.logo ?? null;
  const al = ida.teams?.away?.logo ?? null;
  // Scores from ida's home perspective
  const iH = ida.goals?.home ?? null, iA = ida.goals?.away ?? null;
  // Vuelta: home is away of ida → flip
  const vH = vuelta.goals?.away ?? null, vA = vuelta.goals?.home ?? null;
  const gH = (iH !== null && vH !== null) ? iH + vH : null;
  const gA = (iA !== null && vA !== null) ? iA + vA : null;
  // Penalties (from vuelta's score)
  const penH = vuelta.score?.penalty?.away ?? null;  // flipped: away of vuelta = home of ida
  const penA = vuelta.score?.penalty?.home ?? null;
  const isPens = gH !== null && gA !== null && gH === gA && penH !== null;
  const hWin = gH !== null && gA !== null && (gH > gA || (isPens && penH > penA));
  const aWin = gH !== null && gA !== null && (gA > gH || (isPens && penA > penH));
  const finIda = isFinished(ida), finV = isFinished(vuelta);
  const fidIda = ida.fixture?.id, fidV = vuelta.fixture?.id;

  const scoresCells = (i, v, g, pen, win) => {
    let html = "";
    if (finIda && i !== null) html += `<div class="btie-cell"><span class="btie-lbl">I</span><span class="btie-val">${i}</span></div>`;
    if (finV   && v !== null) html += `<div class="btie-cell"><span class="btie-lbl">V</span><span class="btie-val">${v}</span></div>`;
    if (g !== null) {
      const penLabel = (isPens && pen !== null) ? `<span class="btie-pen">(${pen}p)</span>` : "";
      html += `<div class="btie-cell btie-global"><span class="btie-lbl">G</span><span class="btie-val ${win?"btie-win":""}">${g}${penLabel}</span></div>`;
    }
    return `<div class="btie-scores">${html}</div>`;
  };

  const teamImg  = (logo) => logo ? `<img src="${logo}" onerror="this.style.display='none'">` : `<span></span>`;
  const teamName = (name, win) => `<span class="bracket-team-name ${win?"bracket-winner":""}">${name}</span>`;

  return `<div class="bracket-match bracket-match-tie">
    <div class="btie-row" onclick="openMatch(${fidIda},'${hn.replace(/'/g,"\'")}','${an.replace(/'/g,"\'")}')">
      ${teamImg(hl)}${teamName(hn, hWin)}${scoresCells(iH, vH, gH, penH, hWin)}
    </div>
    <div class="bracket-divider"></div>
    <div class="btie-row" onclick="openMatch(${fidV},'${an.replace(/'/g,"\'")}','${hn.replace(/'/g,"\'")}')">
      ${teamImg(al)}${teamName(an, aWin)}${scoresCells(iA, vA, gA, penA, aWin)}
    </div>
  </div>`;
}

function tieBlocksHTML(ties, isTwoLegged) {
  return ties.map(legs => {
    const card = (isTwoLegged && legs.length > 1) ? renderTieCard(legs) : renderSingleCard(legs[0]);
    return `<div class="bracket-tie">${card}</div>`;
  }).join("");
}

function renderBracketHTML(processedRounds) {
  if (!processedRounds.length) return `<div class="empty-state"><div class="big">🏆</div><p>Sin partidos disponibles.</p></div>`;

  const mainRounds  = processedRounds.filter(r => roundRank(r.round) >= 3 && roundRank(r.round) <= 7);
  const earlyRounds = processedRounds.filter(r => roundRank(r.round) < 3);

  const finalRound = mainRounds.find(r => roundRank(r.round) === 7);
  const thirdPlace = mainRounds.find(r => roundRank(r.round) === 6);
  const semiRound  = mainRounds.find(r => roundRank(r.round) === 5);
  const quarterRd  = mainRounds.find(r => roundRank(r.round) === 4);
  const octavosRd  = mainRounds.find(r => roundRank(r.round) === 3);

  const oTies = octavosRd?.ties ?? [];
  const qTies = quarterRd?.ties ?? [];
  const sTies = semiRound?.ties ?? [];
  const fTies = finalRound?.ties ?? [];

  // Helper: render one card from ties array
  function card(ties, idx) {
    if (!ties || idx >= ties.length) return "";
    const legs = ties[idx];
    const isTL = ties.some(t => t.length > 1);
    return (isTL && legs.length > 1) ? renderTieCard(legs) : renderSingleCard(legs[0]);
  }

  // Build one "row" of the vertical bracket
  // A row contains N match cards displayed side by side
  function makeRow(label, ties, startIdx, count, isFinal) {
    if (!ties || !count) return "";
    const slice = ties.slice(startIdx, startIdx + count);
    if (!slice.length) return "";
    const isTL = ties.some(t => t.length > 1);
    const cardsHTML = slice.map(legs =>
      `<div class="vbk-card">${(isTL && legs.length > 1) ? renderTieCard(legs) : renderSingleCard(legs[0])}</div>`
    ).join("");
    return `<div class="vbk-row${isFinal?" vbk-row-final":""}">
      <div class="vbk-row-label">${label}</div>
      <div class="vbk-row-cards">${cardsHTML}</div>
    </div>`;
  }

  const octN  = oTies.length;
  const qtrN  = qTies.length;
  const semiN = sTies.length;
  const hOct  = Math.ceil(octN  / 2);
  const hQtr  = Math.ceil(qtrN  / 2);
  const hSemi = Math.ceil(semiN / 2);

  const rows = [
    makeRow("Octavos",     oTies, 0,     hOct,        false),
    makeRow("Cuartos",     qTies, 0,     hQtr,        false),
    makeRow("Semifinales", sTies, 0,     hSemi,       false),
    fTies.length ? `<div class="vbk-row vbk-row-final">
      <div class="vbk-row-label">Final</div>
      <div class="vbk-row-cards"><div class="vbk-card">${renderSingleCard(fTies[0][0])}</div></div>
    </div>` : "",
    makeRow("Semifinales", sTies, hSemi, semiN-hSemi, false),
    makeRow("Cuartos",     qTies, hQtr,  qtrN-hQtr,   false),
    makeRow("Octavos",     oTies, hOct,  octN-hOct,   false),
    thirdPlace ? makeRow(formatRound(thirdPlace.round), thirdPlace.ties, 0, thirdPlace.ties.length, false) : "",
  ].filter(Boolean);

  const mainHTML = `<div class="vbk-scroll-wrap"><div class="vbk-tree">${rows.join("")}</div></div>`;

  // Early rounds below
  let earlyHTML = "";
  if (earlyRounds.length) {
    const earlyCols = earlyRounds.map(({round,ties}) => {
      const isTL = ties.some(t=>t.length>1);
      return `<div class="bracket-col">
        <div class="bracket-col-title">${formatRound(round)}</div>
        <div class="bracket-col-matches">${tieBlocksHTML(ties,isTL)}</div>
      </div>`;
    }).join('<div class="bracket-connector"></div>');
    earlyHTML = `<div class="bracket-early-wrap">
      <div class="bracket-early-title">Rondas Previas</div>
      <div class="bracket-wrap">${earlyCols}</div>
    </div>`;
  }

  return mainHTML + earlyHTML;
}

async function loadStandingsFull(lid) {
  lid = parseInt(lid);
  currentSubLid = lid;
  const cont = document.getElementById("standings-container");
  cont.innerHTML = loader();
  const season = seasonFor(lid);
  loadRoundsForLeague(lid, season);
  buildSubTabs(lid, season);
  try {
    const data = await apiFetch(`/api/standings?leagueid=${lid}&season=${season}`);
    renderStandingsFull(data, cont);
    setLastUpdate();
  } catch(e) {
    cont.innerHTML = errorBox(e.message);
  }
}

function extractAllGroups(data) {
  // API-Football v3: response[0].league.standings → array de grupos
  // Cada grupo es un array de equipos con su posición, puntos, etc.
  try {
    const standings = data?.response?.[0]?.league?.standings;
    if (!standings || !Array.isArray(standings) || standings.length === 0) return null;
    return standings; // array de grupos [ [grupo A], [grupo B], ... ]
  } catch { return null; }
}

function extractStandingRows(data) {
  const groups = extractAllGroups(data);
  if (!groups) return [];
  // Para sidebar: aplanar todos los grupos en una lista, ordenar por puntos
  return groups.flat().sort((a,b) => (b.points ?? 0) - (a.points ?? 0));
}

function classifyPosition(desc) {
  // desc is already lowercased before being passed in
  if (desc.includes("libertadores") && (desc.includes("repechaje") || desc.includes("playoff") || desc.includes("qualifying")))
    return { cls: "pos-rep-lib", label: "Repechaje Libertadores" };
  if ((desc.includes("sudamericana") || desc.includes("sul-americana")) && (desc.includes("repechaje") || desc.includes("playoff") || desc.includes("qualifying")))
    return { cls: "pos-rep-sul", label: "Repechaje Sudamericana" };
  if (desc.includes("libertadores"))
    return { cls: "pos-cl", label: "Copa Libertadores" };
  if (desc.includes("sudamericana") || desc.includes("sul-americana"))
    return { cls: "pos-uel", label: "Copa Sudamericana" };
  if (desc.includes("champions") || desc.includes("champions league"))
    return { cls: "pos-cl", label: "Champions League" };
  if (desc.includes("europa league") || desc.includes("uefa europa"))
    return { cls: "pos-uel", label: "Europa League" };
  if (desc.includes("conference") || desc.includes("uecl"))
    return { cls: "pos-uecl", label: "Conference League" };
  if (desc.includes("relegat") || desc.includes("descenso") || desc.includes("playoff relegat"))
    return { cls: "pos-rel", label: "Descenso" };
  return { cls: "pos-none", label: "" };
}

function renderStandingsFull(data, cont) {
  const groups = extractAllGroups(data);
  if (!groups || groups.length === 0) {
    cont.innerHTML = `<div class="empty-state"><div class="big">📊</div><p>Sin datos de tabla para esta liga/temporada.</p></div>`;
    return;
  }

  // Si hay 1 solo grupo → tabla simple
  // Si hay múltiples → mostrar cada grupo con su título
  const isMultiGroup = groups.length > 1;
  const leagueName = data?.response?.[0]?.league?.name ?? "";

  const tableHTML = (rows, groupName = "") => {
    // Build legend from unique bar classes in this group
    const legendMap = {};
    rows.forEach(r => {
      const desc = (r.description ?? "").toLowerCase();
      let cls = "pos-none", label = "";
      const classified = classifyPosition(desc);
      cls = classified.cls; label = classified.label;
      if (cls !== "pos-none" && !legendMap[cls]) legendMap[cls] = label;
    });
    const colorMap = { "pos-cl":"#29b6f6", "pos-uel":"#ff9100", "pos-uecl":"#ab47bc", "pos-rep-lib":"#ab47bc", "pos-rep-sul":"#ec407a", "pos-rel":"var(--live)" };
    const legendHTML = Object.keys(legendMap).length
      ? `<div class="standings-legend">${Object.entries(legendMap).map(([cls, lbl]) =>
          `<div class="legend-item"><div class="legend-dot" style="background:${colorMap[cls]};"></div><span>${lbl}</span></div>`
        ).join("")}</div>`
      : "";
    return `
    ${groupName ? `<div style="padding:8px 12px;background:var(--bg3);border-bottom:1px solid var(--border);font-family:'Barlow Condensed',sans-serif;font-weight:800;font-size:14px;letter-spacing:1px;color:var(--light);text-transform:uppercase;">${groupName}</div>` : ""}
    <table class="standings-full">
      <thead><tr>
        <th>#</th><th>Equipo</th><th>PJ</th><th>G</th><th>E</th><th>P</th><th>GF</th><th>GC</th><th>DG</th><th>PTS</th><th>Últimos</th>
      </tr></thead>
      <tbody>
        ${rows.map((r,i) => renderStandingRow(r, i+1, rows.length)).join("")}
      </tbody>
    </table>${legendHTML}`;
  };

  cont.innerHTML = `<div style="background:var(--card);border:1px solid var(--border);border-radius:var(--radius);overflow:auto;">
    ${groups.map(group => {
      const groupName = isMultiGroup ? (group[0]?.group ?? "") : "";
      return tableHTML(group, groupName);
    }).join("")}
  </div>`;
}

function renderStandingRow(r, i, total) {
  // API-Football v3 fields: rank, team{id,name,logo}, points, goalsDiff,
  // all{played,win,draw,lose,goals{for,against}}, form
  const pos  = r.rank ?? i;
  const name = r.team?.name ?? "";
  const logo = r.team?.logo ?? null;
  const pj   = r.all?.played ?? 0;
  const gd   = r.all?.win ?? 0;
  const ge   = r.all?.draw ?? 0;
  const gp   = r.all?.lose ?? 0;
  const gf   = r.all?.goals?.for ?? 0;
  const gc   = r.all?.goals?.against ?? 0;
  const dg   = r.goalsDiff ?? (gf - gc);
  const pts  = r.points ?? 0;
  const form = r.form ?? "";

  const desc = (r.description ?? "").toLowerCase();
  const barClass = classifyPosition(desc).cls;

  const formHTML = form.split("").slice(-5).map(f => {
    if (f === "W") return `<div class="form-w">V</div>`;
    if (f === "D") return `<div class="form-d">E</div>`;
    return `<div class="form-l">D</div>`;
  }).join("");

  const logoEl = logo
    ? `<div class="team-logo-sm"><img src="${logo}" onerror="this.style.display='none'"></div>`
    : `<div class="team-logo-sm">⚽</div>`;

  return `<tr>
    <td><div style="display:flex;align-items:center;"><span class="pos-bar ${barClass}"></span><span class="pos-num">${pos}</span></div></td>
    <td><div class="team-cell-std">${logoEl}<span>${name}</span></div></td>
    <td>${pj}</td><td>${gd}</td><td>${ge}</td><td>${gp}</td>
    <td>${gf}</td><td>${gc}</td><td>${dg > 0 ? '+' : ''}${dg}</td>
    <td class="pts-cell">${pts}</td>
    <td><div class="form-cell">${formHTML}</div></td>
  </tr>`;
}



// ═══════════════════════════════════════════════════════════════════
// INIT — Tablas
// ═══════════════════════════════════════════════════════════════════
document.addEventListener("DOMContentLoaded", () => {
  loadStandingsView();
});