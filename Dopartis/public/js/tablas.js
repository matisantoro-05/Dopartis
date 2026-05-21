// ═══════════════════════════════════════════════════════════════════
// STANDINGS — normalización API-Football v3
// response[0].league.standings[0][ { rank, team, points, ... } ]
// ═══════════════════════════════════════════════════════════════════

// ── Drag-to-scroll for bracket containers ────────────────────────
function initBracketDrag(el) {
  if (!el || el._dragInit) return;
  el._dragInit = true;
  let isDown = false, startX, startY, scrollLeft, scrollTop;
  el.style.cursor = "grab";
  el.addEventListener("mousedown", function(e) {
    if (e.button !== 0) return;
    isDown = true;
    el.style.cursor = "grabbing";
    startX = e.pageX - el.offsetLeft;
    startY = e.pageY - el.offsetTop;
    scrollLeft = el.scrollLeft;
    scrollTop  = el.scrollTop;
    e.preventDefault();
  });
  el.addEventListener("mouseleave", function() { isDown = false; el.style.cursor = "grab"; });
  el.addEventListener("mouseup",    function() { isDown = false; el.style.cursor = "grab"; });
  el.addEventListener("mousemove",  function(e) {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - el.offsetLeft;
    const y = e.pageY - el.offsetTop;
    el.scrollLeft = scrollLeft - (x - startX);
    el.scrollTop  = scrollTop  - (y - startY);
  });
  // Touch support
  let touchStartX, touchStartY, touchScrollLeft, touchScrollTop;
  el.addEventListener("touchstart", function(e) {
    touchStartX = e.touches[0].pageX;
    touchStartY = e.touches[0].pageY;
    touchScrollLeft = el.scrollLeft;
    touchScrollTop  = el.scrollTop;
  }, { passive: true });
  el.addEventListener("touchmove", function(e) {
    const dx = touchStartX - e.touches[0].pageX;
    const dy = touchStartY - e.touches[0].pageY;
    el.scrollLeft = touchScrollLeft + dx;
    el.scrollTop  = touchScrollTop  + dy;
  }, { passive: true });
}

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
  130: [ { label:"Eliminación", lid:130, bracket:true } ],
  250: [ { label:"Apertura", lid:250 }, { label:"Clausura", lid:252 } ],
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
      renderStandingsFull(data, cont, lid);
    }
    setLastUpdate();
  } catch(e) {
    cont.innerHTML = errorBox(e.message);
  }
}

function roundRank(r, lid) {
  const rl = r.toLowerCase();
  // Preliminary / qualifying / playoff rounds → rank 0 (never shown)
  if (rl.includes("preliminary"))                                              return 0;
  if (rl.includes("qualifying") || rl.includes("qualification"))              return 0;
  if (rl.includes("knockout round play") || rl.includes("playoff") || rl.includes("play off") || rl.includes("play offs") || rl.includes("play-off")) return 0;
  if (rl.includes("1/16") || rl.includes("1/8-final"))                       return 0;
  // Early cup rounds — ranked separately so they sort correctly
  if (/\b1st round\b/.test(rl) || /\bfirst round\b/.test(rl))               return 1;  // 32avos
  if (/\b2nd round\b/.test(rl) || /\bsecond round\b/.test(rl))              return 2;  // 16avos
  if (/\b3rd round\b/.test(rl) || /\bthird round\b/.test(rl))               return 1;  // other cups
  if (rl.includes("64"))                                                      return 1;  // Round of 64 = 32avos
  if (rl.includes("32"))                                                      return 2;  // Round of 32 = 16avos
  if (rl.includes("16") || rl.includes("8th"))                               return 3;  // Round of 16 = octavos
  if (rl.includes("8")  || rl.includes("quarter"))                           return 4;
  if (rl.includes("semi"))                                                    return 5;
  if (rl.includes("3rd") || rl.includes("third"))                            return 6;
  if (rl.includes("final"))                                                   return 7;
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

    // Keep only knockout rounds for the main bracket display
    // For Portugal cup (lid 96): exclude early rounds, show from Round of 16 (Octavos) onwards
    const POR_CUP_EXCLUDED = ["3rd round", "4th round", "2nd round", "1st round"];
    const BRACKET_KEYWORDS = ["final","semi","quarter","round of","8th","4th","octavo","cuarto","semifinal","1st round","2nd round","3rd round","4th round","5th round"];
    const bracketRounds = allRounds.filter(r => {
      const rl = r.toLowerCase().trim();
      if (rl.includes("preliminary")) return false;  // exclude Preliminary Round always
      if (lid === 96 && POR_CUP_EXCLUDED.includes(rl)) return false;
      return BRACKET_KEYWORDS.some(k => rl.includes(k));
    });

    // For UECL/UEL, also include qualifying/playoff rounds for the early phases section
    const UECL_EARLY_KEYWORDS = ["qualifying", "playoff", "play offs", "play-off", "1/16", "1/8-final", "knockout round play"];
    const isUECLComp = (lid === 848 || lid === 3 || lid === 2);
    const earlyQualRounds = isUECLComp ? allRounds.filter(r => {
      const rl = r.toLowerCase();
      return UECL_EARLY_KEYWORDS.some(k => rl.includes(k)) && !bracketRounds.includes(r);
    }) : [];

    const roundsToShow = [
      ...(bracketRounds.length ? bracketRounds : allRounds.slice(-8)),
      ...earlyQualRounds
    ];

    // Fetch all rounds in parallel
    const fixturesByRound = await Promise.all(
      roundsToShow.map(async round => {
        const enc = encodeURIComponent(round);
        const d = await apiFetch(`/api/matches/by-round?leagueid=${lid}&season=${season}&round=${enc}`).catch(()=>({response:[]}));
        let allMatches = d?.response ?? [];

        // 1. Deduplicación agresiva por fixture.id
        const uniqueMatches = allMatches.filter((v, i, a) =>
          a.findIndex(t => t.fixture.id === v.fixture.id) === i
        );

        // 2. Igualdad estricta: solo fixtures cuyo league.round sea exactamente el solicitado
        let matches = uniqueMatches.filter(f => f.league?.round === round);

        // 3. France/Germany/Spain: limits and strict league filter
        if (lid === 66 || lid === 81 || lid === 143) {
          matches = matches.filter(m => m.league?.id === lid);
          const limits66 = { "Round of 16": 8, "Round of 32": 16, "Round of 64": 32, "Quarter-finals": 4, "Semi-finals": 2, "Final": 1 };
          const limits81 = { "1st Round": 32, "2nd Round": 16, "3rd Round": 8, "Quarter-finals": 4, "Semi-finals": 2, "Final": 1 };
          const limits143 = {
            "Round of 32": 16, "Round of 16": 8,
            "Quarter-finals": 4,
            "1st Round": 16, "2nd Round": 8,
            "Semi-finals": 4,  // 2 ties × 2 legs each = 4 fixtures
            "Final": 1
          };
          const limits = lid === 66 ? limits66 : lid === 81 ? limits81 : limits143;
          if (limits[round] !== undefined) matches = matches.slice(0, limits[round]);
        }

        return { round, matches };
      })
    );

    // Sort rounds earliest → latest
    fixturesByRound.sort((a, b) => roundRank(a.round, lid) - roundRank(b.round, lid));

    // Group legs: pair Ida + Vuelta by team combination
    // Detect if any round has 2 matches between same two teams → it's two-legged
    const processedRounds = groupLegs(fixturesByRound, lid);

    cont.innerHTML = renderBracketHTML(processedRounds, lid, season, allRounds);

    // Init drag and center — must run AFTER innerHTML is set (scripts in innerHTML don't execute)
    requestAnimationFrame(function() {
      cont.querySelectorAll(".vbk-scroll-wrap").forEach(function(el) {
        el.scrollLeft = (el.scrollWidth - el.clientWidth) / 2;
        el.scrollTop  = (el.scrollHeight - el.clientHeight) / 2;
        initBracketDrag(el);
      });
      // Coppa Italia: also scroll vertically to Octavos anchor
      if (lid === 137) {
        var oct = cont.querySelector("[id^='coppa-oct-']");
        var vp  = cont.querySelector(".coppa-scroll");
        if (vp && oct) { vp.scrollTop = oct.offsetTop - vp.offsetTop - 40; }
      }
    });
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
function groupLegs(fixturesByRound, lid) {
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

  // For single-leg cups (France, etc.) skip cross-round reordering — it causes duplication
  const skipReorder = (lid === 66);
  if (skipReorder) return processed;

  // Re-order each round so ties align with the previous round's bracket position.
  // We use winner team IDs when available, otherwise all team IDs from the previous pair.
  for (let ri = 1; ri < processed.length; ri++) {
    const prevTies = processed[ri - 1].ties; // array of leg-arrays
    const currTies = [...processed[ri].ties];
    if (!prevTies.length || !currTies.length) continue;

    const ordered = new Array(Math.ceil(prevTies.length / 2)).fill(null);
    const used = new Set();

    for (let pi = 0; pi < prevTies.length; pi += 2) {
      // Collect team IDs from prev[pi] and prev[pi+1]
      // Prefer winner IDs when available; fall back to all team IDs
      const winnerIds = new Set();
      const allTeamIds = new Set();
      for (let k = pi; k <= pi + 1 && k < prevTies.length; k++) {
        const legs = prevTies[k];
        legs.forEach(m => {
          if (m.teams?.home?.id) allTeamIds.add(m.teams.home.id);
          if (m.teams?.away?.id) allTeamIds.add(m.teams.away.id);
        });
        const wid = tieWinnerId(legs);
        if (wid) winnerIds.add(wid);
      }
      const searchIds = winnerIds.size > 0 ? winnerIds : allTeamIds;

      // Find current tie whose matches share a qualifying team with the prev pair
      let matchIdx = currTies.findIndex((legArray, idx) => {
        if (used.has(idx)) return false;
        return legArray.some(m =>
          searchIds.has(m.teams?.home?.id) || searchIds.has(m.teams?.away?.id)
        );
      });

      // Fallback: if no match via winners, try all team IDs
      if (matchIdx < 0 && winnerIds.size > 0) {
        matchIdx = currTies.findIndex((legArray, idx) => {
          if (used.has(idx)) return false;
          return legArray.some(m =>
            allTeamIds.has(m.teams?.home?.id) || allTeamIds.has(m.teams?.away?.id)
          );
        });
      }

      const slot = Math.floor(pi / 2);
      if (matchIdx >= 0) {
        ordered[slot] = currTies[matchIdx];
        used.add(matchIdx);
      }
    }
    // Append any unmatched ties in remaining slots
    let slot = 0;
    currTies.forEach((t, idx) => {
      if (!used.has(idx)) {
        while (slot < ordered.length && ordered[slot] !== null) slot++;
        if (slot < ordered.length) { ordered[slot] = t; slot++; }
        else ordered.push(t);
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
  const penH = m.score?.penalty?.home ?? null;
  const penA = m.score?.penalty?.away ?? null;
  const hasPens = fin && penH !== null && penA !== null;
  const hWin = fin && hg !== null && (hg > ag || (hg === ag && hasPens && penH > penA));
  const aWin = fin && ag !== null && (ag > hg || (ag === hg && hasPens && penA > penH));
  const teamRow = (name, logo, goals, pen, win) => `
    <div class="bracket-team ${win ? "bracket-winner":""}">
      ${logo ? `<img src="${logo}" onerror="this.style.display='none'">` : ""}
      <span class="bracket-team-name">${name}</span>
      ${(fin||live) && goals !== null ? `<span class="bracket-score">${goals}${hasPens ? `<span style="font-size:12px;font-weight:700;color:var(--light);margin-left:2px;">(${pen}p)</span>` : ""}</span>` : ""}
    </div>`;
  return `<div class="bracket-match" onclick="openMatch(${fid},'${hn.replace(/'/g,"\'")}','${an.replace(/'/g,"\'")}')">
    ${teamRow(hn, hl, hg, penH, hWin)}
    <div class="bracket-divider"></div>
    ${teamRow(an, al, ag, penA, aWin)}
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

  return `<div class="bracket-match bracket-match-tie" onclick="openMatchTie(${fidIda},${fidV},'${hn.replace(/'/g,"\'")}','${an.replace(/'/g,"\'")}')"> 
    <div class="btie-row">
      ${teamImg(hl)}${teamName(hn, hWin)}${scoresCells(iH, vH, gH, penH, hWin)}
    </div>
    <div class="bracket-divider"></div>
    <div class="btie-row">
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

function renderBracketHTML(processedRounds, lid, season, allRoundsRaw) {
  if (!processedRounds.length) return `<div class="empty-state"><div class="big">🏆</div><p>Sin partidos disponibles.</p></div>`;

  const isUECL   = (lid === 848 || lid === 3 || lid === 2);
  const isCoppa  = (lid === 137 || lid === 66 || lid === 81 || lid === 143);

  // For Coppa Italia: include early rounds (rank 1-2) inside the main bracket
  const mainRounds  = processedRounds.filter(r => {
    const rk = roundRank(r.round, lid);
    if (isCoppa) {
      const minRank = (lid === 143) ? 1 : 1;  // always start from 1 for isCoppa; trentaTies excluded per lid
      return rk >= minRank && rk <= 7;
    }
    return rk >= 3 && rk <= 7;
  });
  const earlyRounds = processedRounds.filter(r => roundRank(r.round, lid) < 3);

  const finalRound = mainRounds.find(r => roundRank(r.round, lid) === 7);
  const thirdPlace = mainRounds.find(r => roundRank(r.round, lid) === 6);
  const semiRound  = mainRounds.find(r => roundRank(r.round, lid) === 5);
  const quarterRd  = mainRounds.find(r => roundRank(r.round, lid) === 4);
  const octavosRd  = mainRounds.find(r => roundRank(r.round, lid) === 3);

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
  function makeRow(label, ties, startIdx, count, isFinal, anchorId) {
    if (!ties || !count) return "";
    const slice = ties.slice(startIdx, startIdx + count);
    if (!slice.length) return "";
    const isTL = ties.some(t => t.length > 1);
    const cardsHTML = slice.map(legs =>
      `<div class="vbk-card">${(isTL && legs.length > 1) ? renderTieCard(legs) : renderSingleCard(legs[0])}</div>`
    ).join("");
    return `<div class="vbk-row${isFinal?" vbk-row-final":""}"${anchorId ? ` id="${anchorId}"` : ""}>
      <div class="vbk-row-label">${label}</div>
      <div class="vbk-row-cards">${cardsHTML}</div>
    </div>`;
  }

  // ── Re-order each round so that pairs align correctly in the two-sided bracket ──
  // The bracket is split: top half feeds into semi[0], bottom half into semi[1].
  // We need to re-order each earlier round relative to the one just above it,
  // processing the top half and bottom half independently so the lines connect.
  function reorderHalf(earlier, later) {
    // earlier: ties[] for the round below (e.g. octavos)
    // later:   ties[] for the round above (e.g. cuartos)
    // We want earlier[2*i] and earlier[2*i+1] to be the two teams that fed into later[i]
    if (!earlier.length || !later.length) return earlier;
    const result = [];
    const used = new Set();
    for (let li = 0; li < later.length; li++) {
      const allIds = new Set();
      later[li].forEach(m => {
        if (m.teams?.home?.id) allIds.add(m.teams.home.id);
        if (m.teams?.away?.id) allIds.add(m.teams.away.id);
      });
      // Find up to 2 entries in earlier that share a team with later[li]
      let found = 0;
      earlier.forEach((legs, idx) => {
        if (used.has(idx) || found >= 2) return;
        const matches = legs.some(m =>
          allIds.has(m.teams?.home?.id) || allIds.has(m.teams?.away?.id)
        );
        if (matches) {
          result.push(legs);
          used.add(idx);
          found++;
        }
      });
      // If we found only 1 or 0, pad with any remaining unmatched
      while (found < 2) {
        const idx = earlier.findIndex((_, i) => !used.has(i));
        if (idx < 0) break;
        result.push(earlier[idx]);
        used.add(idx);
        found++;
      }
    }
    // Append any still unused
    earlier.forEach((legs, idx) => { if (!used.has(idx)) result.push(legs); });
    return result;
  }

  const octN  = oTies.length;
  const qtrN  = qTies.length;
  const semiN = sTies.length;
  const hQtr  = Math.ceil(qtrN  / 2);
  const hSemi = Math.ceil(semiN / 2);

  let sTopTies, sBotTies, qTopTies, qBotTies, oTopTies, oBotTies;

  if (isCoppa) {
    // For Copa del Rey (143): semis are two-legged, use team-ID split for semis/cuartos/octavos
    // but simple split for early rounds (16avos)
    if (lid === 143) {
      // Semis: reorder by team IDs (ida/vuelta)
      sTopTies = reorderHalf(sTies.slice(0, hSemi), fTies.length ? [fTies[0]] : []);
      sBotTies = reorderHalf(sTies.slice(hSemi), fTies.length ? [fTies[0]] : []);
      // Cuartos: simple split
      qTopTies = qTies.slice(0, hQtr);
      qBotTies = qTies.slice(hQtr);
      // Octavos: simple split
      const hOct = Math.ceil(octN / 2);
      oTopTies = oTies.slice(0, hOct);
      oBotTies = oTies.slice(hOct);
    } else {
      // Simple half split for all other single-leg cups (Coppa Italia, France, Germany)
      sTopTies = sTies.slice(0, hSemi);
      sBotTies = sTies.slice(hSemi);
      qTopTies = qTies.slice(0, hQtr);
      qBotTies = qTies.slice(hQtr);
      const hOct = Math.ceil(octN / 2);
      oTopTies = oTies.slice(0, hOct);
      oBotTies = oTies.slice(hOct);
    }
  } else {
    // Re-order semi halves against final
    sTopTies = reorderHalf(sTies.slice(0, hSemi), fTies.length ? [fTies[0]] : []);
    sBotTies = reorderHalf(sTies.slice(hSemi), fTies.length ? [fTies[0]] : []);

    // Split cuartos into top/bottom by which semi each tie feeds into (same logic as octavos split)
    const sTopIds = new Set();
    sTopTies.forEach(legs => legs.forEach(m => {
      if (m.teams?.home?.id) sTopIds.add(m.teams.home.id);
      if (m.teams?.away?.id) sTopIds.add(m.teams.away.id);
    }));
    const qTopRaw = [], qBotRaw = [];
    qTies.forEach(legs => {
      const isTop = legs.some(m =>
        sTopIds.has(m.teams?.home?.id) || sTopIds.has(m.teams?.away?.id)
      );
      if (isTop) qTopRaw.push(legs); else qBotRaw.push(legs);
    });
    qTopTies = reorderHalf(qTopRaw, sTopTies.slice(0, 1));
    qBotTies = reorderHalf(qBotRaw, sBotTies.slice(0, 1));

    // Split octavos into top/bottom by which cuarto each tie feeds into.
    const qTopIds = new Set();
    qTopTies.forEach(legs => legs.forEach(m => {
      if (m.teams?.home?.id) qTopIds.add(m.teams.home.id);
      if (m.teams?.away?.id) qTopIds.add(m.teams.away.id);
    }));
    const oTopRaw = [], oBotRaw = [];
    oTies.forEach(legs => {
      const isTop = legs.some(m =>
        qTopIds.has(m.teams?.home?.id) || qTopIds.has(m.teams?.away?.id)
      );
      if (isTop) oTopRaw.push(legs); else oBotRaw.push(legs);
    });
    oTopTies = reorderHalf(oTopRaw, qTopTies);
    oBotTies = reorderHalf(oBotRaw, qBotTies);
  }

  // ══════════════════════════════════════════════════════════════
  // COPPA ITALIA: árbol vertical igual que el resto, con 1st/2nd Round
  // (return happens after all tie variables are computed below)
  // ══════════════════════════════════════════════════════════════

  const sedicesimi = [];
  const trentaduesimi = [];
  const scrollId = "";
  const octavosAnchorId = "";

  // ── Coppa Italia: return vertical tree with early rounds + scroll ─
  if (isCoppa) {
    // Copa del Rey (143): 16avos may be rank 1 ("1st Round") or rank 2 ("Round of 32")
    // No 32avos shown for lid 143
    const trentaTies = lid === 143
      ? []
      : mainRounds.filter(r => roundRank(r.round, lid) === 1).flatMap(r => r.ties);
    const sedicTies  = lid === 143
      ? mainRounds.filter(r => roundRank(r.round, lid) === 1 || roundRank(r.round, lid) === 2).flatMap(r => r.ties)
      : mainRounds.filter(r => roundRank(r.round, lid) === 2).flatMap(r => r.ties);
    const trentHalf  = Math.ceil(trentaTies.length / 2);
    const sedicHalf  = Math.ceil(sedicTies.length  / 2);

    const coppaScrollId = `coppa-vp-${lid}`;
    const octAnchorId   = `coppa-oct-${lid}`;

    const trentaLabel = lid === 66 ? "32avos" : "32avos (1ª Ronda)";
    const sedicLabel  = lid === 66 ? "16avos" : "16avos (2ª Ronda)";
    const coppaRows = [
      makeRow(trentaLabel, trentaTies.slice(0, trentHalf),             0, trentHalf,                        false),
      makeRow(sedicLabel,  sedicTies.slice(0, sedicHalf),              0, sedicHalf,                        false),
      makeRow("Octavos",           oTopTies,                                   0, oTopTies.length,                  false, octAnchorId),
      makeRow("Cuartos",           qTopTies,                                   0, qTopTies.length,                  false),
      makeRow("Semifinales",       sTopTies,                                   0, sTopTies.length,                  false),
      fTies.length ? `<div class="vbk-row vbk-row-final">
        <div class="vbk-row-label">Final</div>
        <div class="vbk-row-cards"><div class="vbk-card">${renderSingleCard(fTies[0][0])}</div></div>
      </div>` : "",
      makeRow("Semifinales",       sBotTies,                                   0, sBotTies.length,                  false),
      makeRow("Cuartos",           qBotTies,                                   0, qBotTies.length,                  false),
      makeRow("Octavos",           oBotTies,                                   0, oBotTies.length,                  false),
      makeRow(sedicLabel,          sedicTies.slice(sedicHalf),                 0, sedicTies.length  - sedicHalf,    false),
      makeRow(trentaLabel,         trentaTies.slice(trentHalf),               0, trentaTies.length - trentHalf,    false),
    ].filter(Boolean);

    const cupLegendCoppa = `<div class="standings-legend" style="margin-top:12px;padding:10px 14px;background:var(--card);border:1px solid var(--border);border-radius:var(--radius);">
      <div class="legend-item"><div class="legend-dot" style="background:#ff9100;"></div><span>El campeón clasifica a Europa League</span></div>
    </div>`;

    return `<div class="coppa-bracket-outer"><div class="vbk-scroll-wrap coppa-scroll" id="${coppaScrollId}"><div class="vbk-tree">${coppaRows.join("")}</div></div></div>` + cupLegendCoppa;
  }

  const rows = [
    makeRow("Octavos",     oTopTies, 0, oTopTies.length, false),
    makeRow("Cuartos",     qTopTies, 0, qTopTies.length, false),
    makeRow("Semifinales", sTopTies, 0, sTopTies.length, false),
    fTies.length ? `<div class="vbk-row vbk-row-final">
      <div class="vbk-row-label">Final</div>
      <div class="vbk-row-cards"><div class="vbk-card">${renderSingleCard(fTies[0][0])}</div></div>
    </div>` : "",
    makeRow("Semifinales", sBotTies, 0, sBotTies.length, false),
    makeRow("Cuartos",     qBotTies, 0, qBotTies.length, false),
    makeRow("Octavos",     oBotTies, 0, oBotTies.length, false),
    thirdPlace ? makeRow(formatRound(thirdPlace.round), thirdPlace.ties, 0, thirdPlace.ties.length, false) : "",
  ].filter(Boolean);

  const bracketId = `bracket-${lid}-${season}`;
  const mainHTML = `<div class="vbk-scroll-wrap" id="${bracketId}"><div class="vbk-tree">${rows.join("")}</div></div>`;

  // ── Early / qualifying rounds below the main bracket ──────────────
  let earlyHTML = "";

  if (isUECL) {
    // UECL early phases — shown below the main bracket, top = most recent
    // Order: Playoffs | Clasificación Ronda Final | 3ra | 2da | 1ra Ronda Clasificación

    // Helper: render a phase section from a list of ties
    function renderPhaseSection(label, ties) {
      if (!ties.length) return "";
      const isTL = ties.some(t => t.length > 1);
      const cardsHTML = ties.map(legs =>
        `<div class="uecl-early-card">${(isTL && legs.length > 1) ? renderTieCard(legs) : renderSingleCard(legs[0])}</div>`
      ).join("");
      return `<div class="uecl-early-phase">
        <div class="uecl-early-phase-title">${label}</div>
        <div class="uecl-early-phase-cards">${cardsHTML}</div>
      </div>`;
    }

    // All rank-0 rounds from processedRounds (qualifying + playoff)
    const rank0Rounds = processedRounds.filter(pr => roundRank(pr.round, lid) === 0);

    // Classify each round into a phase bucket
    function isQualifyingRound(str) {
      const s = str.toLowerCase();
      return s.includes("qualifying") || s.includes("qualification");
    }
    function isPlayoffRound(str) {
      const s = str.toLowerCase();
      return s.includes("knockout round play") || s.includes("1/16");
    }
    function qualifyingLevel(str) {
      const s = str.toLowerCase();
      if (s.includes("final"))                        return "final";
      if (s.includes("3rd") || s.includes("third") || s.includes("- 3") || s.includes("round 3")) return "3";
      if (s.includes("2nd") || s.includes("second") || s.includes("- 2") || s.includes("round 2")) return "2";
      if (s.includes("1st") || s.includes("first")  || s.includes("- 1") || s.includes("round 1")) return "1";
      return "other";
    }

    const playoffTies   = rank0Rounds.filter(pr => isPlayoffRound(pr.round)).flatMap(pr => pr.ties);
    const qualFinalTies = rank0Rounds.filter(pr => isQualifyingRound(pr.round) && qualifyingLevel(pr.round) === "final").flatMap(pr => pr.ties);
    const qual3Ties     = rank0Rounds.filter(pr => isQualifyingRound(pr.round) && qualifyingLevel(pr.round) === "3").flatMap(pr => pr.ties);
    const qual2Ties     = rank0Rounds.filter(pr => isQualifyingRound(pr.round) && qualifyingLevel(pr.round) === "2").flatMap(pr => pr.ties);
    const qual1Ties     = rank0Rounds.filter(pr => isQualifyingRound(pr.round) && qualifyingLevel(pr.round) === "1").flatMap(pr => pr.ties);
    // Catch-all: rank-0 rounds not matched by any category above
    const otherTies     = rank0Rounds.filter(pr =>
      !isPlayoffRound(pr.round) &&
      !(isQualifyingRound(pr.round) && ["final","3","2","1"].includes(qualifyingLevel(pr.round)))
    ).flatMap(pr => pr.ties);

    // Solo los Playoffs reales = ronda "Knockout Round Play-offs"
    const effectivePlayoffTies = playoffTies.length > 0 ? playoffTies
      : rank0Rounds.filter(pr => pr.round.toLowerCase().includes("knockout round play") || pr.round.toLowerCase().includes("1/16")).flatMap(pr => pr.ties);

    const sections = [
      renderPhaseSection("Playoffs", effectivePlayoffTies),
    ].filter(Boolean);

    if (sections.length) {
      earlyHTML = `<div class="uecl-early-wrap">${sections.join("")}</div>`;
    }
  } else if (earlyRounds.length) {
    // Default: horizontal layout for other competitions
    const earlyCols = earlyRounds.map(({round, ties}) => {
      const isTL = ties.some(t => t.length > 1);
      return `<div class="bracket-col">
        <div class="bracket-col-title">${formatRound(round)}</div>
        <div class="bracket-col-matches">${tieBlocksHTML(ties, isTL)}</div>
      </div>`;
    }).join('<div class="bracket-connector"></div>');
    earlyHTML = `<div class="bracket-early-wrap">
      <div class="bracket-early-title">Rondas Previas</div>
      <div class="bracket-wrap">${earlyCols}</div>
    </div>`;
  }

  const cupLegend = (lid === 90 || lid === 96 || lid === 66 || lid === 81 || lid === 143) ? `<div class="standings-legend" style="margin-top:12px;padding:10px 14px;background:var(--card);border:1px solid var(--border);border-radius:var(--radius);">
    <div class="legend-item"><div class="legend-dot" style="background:#ff9100;"></div><span>El campeón clasifica a Europa League</span></div>
  </div>` : "";

  return mainHTML + earlyHTML + cupLegend;
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
    renderStandingsFull(data, cont, lid);
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
  if (desc.includes("afc champions") || (desc.includes("afc") && desc.includes("champions")))
    return { cls: "pos-cl", label: "AFC Champions League Elite" };
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

// ── Netherlands (Eredivisie lid 88): custom classification by rank ─
function classifyNedPosition(rank, total) {
  if (rank <= 2)  return { cls: "pos-cl",    label: "Champions League" };
  if (rank === 3) return { cls: "pos-uel",   label: "Europa League" };
  if (rank >= 4 && rank <= 7) return { cls: "pos-uecl", label: "Playoffs Conference League" };
  if (rank === 16) return { cls: "pos-promo", label: "Promoción" };
  if (rank >= 17)  return { cls: "pos-rel",   label: "Descenso" };
  return { cls: "pos-none", label: "" };
}

// ── Portugal (Primeira Liga lid 94): custom classification by rank ─
function classifyPorPosition(rank) {
  if (rank <= 2)  return { cls: "pos-cl",       label: "Champions League" };
  if (rank === 3) return { cls: "pos-cl-pre",   label: "Fase Previa Champions League" };
  if (rank === 4) return { cls: "pos-uel",      label: "Europa League" };
  if (rank === 5) return { cls: "pos-uecl",     label: "Conference League" };
  if (rank === 16) return { cls: "pos-promo",   label: "Promoción" };
  if (rank >= 17)  return { cls: "pos-rel",     label: "Descenso" };
  return { cls: "pos-none", label: "" };
}

// ── Germany (Bundesliga lid 78): only pos 16 = Promoción, rest via API description ─
function classifyGerPosition(rank, desc) {
  if (rank === 16) return { cls: "pos-promo", label: "Promoción" };
  return classifyPosition(desc);
}

// ── Spain (LaLiga lid 140): custom classification by rank ─────────
function classifyEspPosition(rank) {
  if (rank <= 4)  return { cls: "pos-cl",   label: "Champions League" };
  if (rank === 5) return { cls: "pos-uel",  label: "Europa League" };
  if (rank === 6) return { cls: "pos-uecl", label: "Conference League" };
  if (rank >= 18) return { cls: "pos-rel",  label: "Descenso" };
  return { cls: "pos-none", label: "" };
}
function classifyFraPosition(rank) {
  if (rank <= 3)  return { cls: "pos-cl",     label: "Champions League" };
  if (rank === 4) return { cls: "pos-cl-pre", label: "Fase Previa Champions League" };
  if (rank === 5) return { cls: "pos-uel",    label: "Europa League" };
  if (rank === 6) return { cls: "pos-uecl",   label: "Conference League" };
  if (rank === 16) return { cls: "pos-promo", label: "Promoción" };
  if (rank >= 17)  return { cls: "pos-rel",   label: "Descenso" };
  return { cls: "pos-none", label: "" };
}

// ── League Phase: custom classification by rank position (UECL lid 848, UEL lid 3) ─────
function classifyUECLPosition(rank) {
  if (rank <= 8)  return { cls: "pos-cl",   label: "Octavos de Final" };
  if (rank <= 24) return { cls: "pos-uecl", label: "Playoffs" };
  return { cls: "pos-none", label: "" };
}

function renderStandingsFull(data, cont, leagueId) {
  const groups = extractAllGroups(data);
  if (!groups || groups.length === 0) {
    cont.innerHTML = `<div class="empty-state"><div class="big">📊</div><p>Sin datos de tabla para esta liga/temporada.</p></div>`;
    return;
  }

  const useLeaguePhaseColors = (leagueId === 848 || leagueId === 3 || leagueId === 2);
  const isNed = (leagueId === 88);
  const isPor = (leagueId === 94);
  const isFra = (leagueId === 61);
  const isGer = (leagueId === 78);
  const isEsp = (leagueId === 140);

  // Si hay 1 solo grupo → tabla simple
  // Si hay múltiples → mostrar cada grupo con su título
  const isMultiGroup = groups.length > 1;
  const leagueName = data?.response?.[0]?.league?.name ?? "";

  const tableHTML = (rows, groupName = "") => {
    // Build legend from unique bar classes in this group
    const legendMap = {};
    rows.forEach((r, idx) => {
      let cls, label;
      if (useLeaguePhaseColors) {
        const rank = r.rank ?? (idx + 1);
        ({ cls, label } = classifyUECLPosition(rank));
      } else if (isNed) {
        const rank = r.rank ?? (idx + 1);
        ({ cls, label } = classifyNedPosition(rank, rows.length));
      } else if (isPor) {
        const rank = r.rank ?? (idx + 1);
        ({ cls, label } = classifyPorPosition(rank));
      } else if (isFra) {
        const rank = r.rank ?? (idx + 1);
        ({ cls, label } = classifyFraPosition(rank));
      } else if (isGer) {
        const rank = r.rank ?? (idx + 1);
        const desc = (r.description ?? "").toLowerCase();
        ({ cls, label } = classifyGerPosition(rank, desc));
      } else if (isEsp) {
        const rank = r.rank ?? (idx + 1);
        ({ cls, label } = classifyEspPosition(rank));
      } else {
        const desc = (r.description ?? "").toLowerCase();
        ({ cls, label } = classifyPosition(desc));
      }
      if (cls !== "pos-none" && !legendMap[cls]) legendMap[cls] = label;
    });
    const colorMap = { "pos-cl":"#29b6f6", "pos-cl-pre":"#0d7abf", "pos-uel":"#ff9100", "pos-uecl":"#ab47bc", "pos-rep-lib":"#ab47bc", "pos-rep-sul":"#ec407a", "pos-rel":"var(--live)", "pos-promo":"#8b1a1a" };
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
        ${rows.map((r, i) => renderStandingRow(r, i+1, rows.length, useLeaguePhaseColors, isNed, isPor, isFra, isGer, isEsp)).join("")}
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

function renderStandingRow(r, i, total, isUECL = false, isNed = false, isPor = false, isFra = false, isGer = false, isEsp = false) {
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

  let barClass;
  if (isUECL) {
    barClass = classifyUECLPosition(pos).cls;
  } else if (isNed) {
    barClass = classifyNedPosition(pos, total).cls;
  } else if (isPor) {
    barClass = classifyPorPosition(pos).cls;
  } else if (isFra) {
    barClass = classifyFraPosition(pos).cls;
  } else if (isGer) {
    const desc = (r.description ?? "").toLowerCase();
    barClass = classifyGerPosition(pos, desc).cls;
  } else if (isEsp) {
    barClass = classifyEspPosition(pos).cls;
  } else {
    const desc = (r.description ?? "").toLowerCase();
    barClass = classifyPosition(desc).cls;
  }

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