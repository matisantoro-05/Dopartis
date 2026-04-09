// ═══════════════════════════════════════════════════════════════════
// SCORERS — normalización API-Football v3
// response[].{ player{name,photo}, statistics[0]{team,goals} }
// ═══════════════════════════════════════════════════════════════════
let activeScorersLeague = localStorage.getItem("dopartis-league-stats") || "esp";

let activeScorerLid = null;

function buildScorersCompTabs(mainLid) {
  const wrap = document.getElementById("scorers-comp-tabs");
  if (!wrap) return;
  const mainLeague = LEAGUES.find(l => l.lid === mainLid);
  const cups = LEAGUES.filter(l => l.cup && l.parentId === mainLeague?.id);
  if (!cups.length) { wrap.style.display = "none"; wrap.innerHTML = ""; return; }
  const allTabs = [{ label: mainLeague?.leagueName || mainLeague?.name || "Liga", lid: mainLid }, ...cups.map(c => ({ label: c.leagueName || c.name, lid: c.lid }))];
  wrap.innerHTML = allTabs.map(t =>
    `<button class="arg-tab${t.lid === (activeScorerLid ?? mainLid) ? " active" : ""}" onclick="switchScorerComp(${t.lid})">${t.label}</button>`
  ).join("");
  wrap.style.display = "";
}

function switchScorerComp(lid) {
  activeScorerLid = lid;
  document.querySelectorAll("#scorers-comp-tabs .arg-tab").forEach(b => {
    b.classList.toggle("active", b.getAttribute("onclick")?.includes(`(${lid})`));
  });
  loadScorersFull(lid);
}

function loadScorersView() {
  buildLeagueTabs("scorers-league-tabs", activeScorersLeague, (l) => {
    activeScorersLeague = l.id;
    localStorage.setItem("dopartis-league-stats", l.id);
    if (l.lid) {
      activeScorerLid = l.lid;
      buildScorersCompTabs(l.lid);
      loadScorersFull(l.lid);
    }
  }, true);
  const lc = LEAGUES.find(l => l.id === activeScorersLeague);
  if (lc?.lid) {
    activeScorerLid = lc.lid;
    buildScorersCompTabs(lc.lid);
    loadScorersFull(lc.lid);
  }
}

let activeStatTab = "scorers";
let activeStatLid  = null;

function switchStatTab(tab) {
  activeStatTab = tab;
  document.querySelectorAll(".stats-tab").forEach(b => {
    b.classList.toggle("active",
      (tab==="scorers" && b.textContent.includes("Goleadores")) ||
      (tab==="assists" && b.textContent.includes("Asistidores")) ||
      (tab==="yellow"  && b.textContent.includes("Amarillas")) ||
      (tab==="red"     && b.textContent.includes("Rojas"))
    );
  });
  if (activeStatLid) loadScorersFull(activeStatLid);
}

async function loadScorersFull(lid) {
  lid = parseInt(lid);
  activeStatLid = lid;
  const cont = document.getElementById("scorers-container");
  cont.innerHTML = loader();
  const season = seasonFor(lid);
  const endpointMap = {
    scorers: `/api/top-scorers?leagueid=${lid}&season=${season}`,
    assists: `/api/top-assists?leagueid=${lid}&season=${season}`,
    yellow:  `/api/top-yellowcards?leagueid=${lid}&season=${season}`,
    red:     `/api/top-redcards?leagueid=${lid}&season=${season}`,
  };
  try {
    const data = await apiFetch(endpointMap[activeStatTab]);
    renderStatsFull(data, cont, activeStatTab);
    setLastUpdate();
  } catch(e) {
    cont.innerHTML = errorBox(e.message);
  }
}

function renderStatsFull(data, cont, tab) {
  const raw = data?.response ?? [];
  if (!raw.length) {
    const labels = { scorers:"goleadores", assists:"asistidores", yellow:"tarjetas amarillas", red:"tarjetas rojas" };
    cont.innerHTML = `<div class="empty-state"><div class="big">📊</div><p>Sin datos de ${labels[tab] ?? "estadísticas"}.</p></div>`;
    return;
  }

  const isScorers = tab === "scorers";
  const isAssists = tab === "assists";
  const isYellow  = tab === "yellow";
  const isRed     = tab === "red";

  let headers, rows;

  if (isScorers) {
    headers = `<th>#</th><th>Jugador</th><th>Club</th><th>Goles (Pen)</th><th>PJ</th>`;
    rows = raw.slice(0, 30).map((p, i) => {
      const name     = p.player?.name ?? "";
      const stats    = p.statistics?.[0];
      const club     = stats?.team?.name ?? "";
      const clubLogo = stats?.team?.logo ?? null;
      const goals    = stats?.goals?.total ?? 0;
      const pens     = stats?.penalty?.scored ?? 0;
      const played   = stats?.games?.appearences ?? 0;
      const penStr   = pens > 0 ? ` <span style="font-size:14px;color:var(--light);font-weight:600;">(${pens})</span>` : "";
      const logoEl   = clubLogo ? `<div class="team-logo-sm"><img src="${clubLogo}" onerror="this.style.display='none'"></div>` : `<div class="team-logo-sm">⚽</div>`;
      return `<tr>
        <td class="pos-num">${i+1}</td>
        <td><b>${name}</b></td>
        <td><div class="team-cell-std">${logoEl}<span>${club}</span></div></td>
        <td class="pts-cell">${goals}${penStr}</td>
        <td>${played}</td>
      </tr>`;
    }).join("");
  } else if (isAssists) {
    headers = `<th>#</th><th>Jugador</th><th>Club</th><th>Asist.</th><th>PJ</th>`;
    rows = raw.slice(0, 30).map((p, i) => {
      const name     = p.player?.name ?? "";
      const stats    = p.statistics?.[0];
      const club     = stats?.team?.name ?? "";
      const clubLogo = stats?.team?.logo ?? null;
      const asst     = stats?.goals?.assists ?? 0;
      const played   = stats?.games?.appearences ?? 0;
      const logoEl   = clubLogo ? `<div class="team-logo-sm"><img src="${clubLogo}" onerror="this.style.display='none'"></div>` : `<div class="team-logo-sm">⚽</div>`;
      return `<tr>
        <td class="pos-num">${i+1}</td>
        <td><b>${name}</b></td>
        <td><div class="team-cell-std">${logoEl}<span>${club}</span></div></td>
        <td class="pts-cell">${asst}</td>
        <td>${played}</td>
      </tr>`;
    }).join("");
  } else {
    const cardField = isYellow ? "yellow" : "red";
    const cardIcon  = isYellow ? "🟨" : "🟥";
    headers = `<th>#</th><th>Jugador</th><th>Club</th><th>${cardIcon}</th><th>PJ</th>`;
    rows = raw.slice(0, 30).map((p, i) => {
      const name     = p.player?.name ?? "";
      const stats    = p.statistics?.[0];
      const club     = stats?.team?.name ?? "";
      const clubLogo = stats?.team?.logo ?? null;
      const cards    = stats?.cards?.[cardField] ?? 0;
      const played   = stats?.games?.appearences ?? 0;
      const logoEl   = clubLogo ? `<div class="team-logo-sm"><img src="${clubLogo}" onerror="this.style.display='none'"></div>` : `<div class="team-logo-sm">⚽</div>`;
      return `<tr>
        <td class="pos-num">${i+1}</td>
        <td><b>${name}</b></td>
        <td><div class="team-cell-std">${logoEl}<span>${club}</span></div></td>
        <td class="pts-cell">${cards}</td>
        <td>${played}</td>
      </tr>`;
    }).join("");
  }

  cont.innerHTML = `
    <div style="background:var(--card);border:1px solid var(--border);border-radius:var(--radius);overflow:auto;">
      <table class="standings-full stats-table">
        <thead><tr>${headers}</tr></thead>
        <tbody>${rows}</tbody>
      </table>
    </div>`;
}



// ═══════════════════════════════════════════════════════════════════
// INIT — Estadísticas
// ═══════════════════════════════════════════════════════════════════
document.addEventListener("DOMContentLoaded", () => {
  loadScorersView();
  loadSidebarStandings(document.getElementById("sb-standings-sel").value);
});

function refreshCurrentView() {
  loadScorersView();
  loadSidebarStandings(document.getElementById("sb-standings-sel").value);
}