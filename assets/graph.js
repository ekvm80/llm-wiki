// Canvas force graph for 975 nodes / 3447 edges.
//
// Coordinates arrive pre-solved from tools/layout.mjs, so the page paints a
// settled graph immediately and the simulation stays stopped until the user
// drags something. Drawing is batched: all edges are one path, and nodes are
// one path per colour -- about 6 draw calls per frame instead of 4400.

import {
  mountShell, loadGraph, buildAdjacency, escapeHtml, viewerUrl, debounce,
  typeLabel, TYPES, TYPE_COLOR, t,
} from "./shell.js";

const TAU = Math.PI * 2;
const nodeRadius = (g) => Math.min(26, 3 + 1.8 * Math.sqrt(g));

const canvas = document.getElementById("net");
const ctx = canvas.getContext("2d");
const tooltip = document.getElementById("tooltip");

let graph, nodes, links, adj, sim, quad;
let T = d3.zoomIdentity;
let W = 0, H = 0;
let hovered = null, selected = null;
let matched = null;                       // Set of indices, or null when no search
let neighbourOnly = false;
let minDegree = 0;
const activeTypes = new Set(TYPES);
let activeTag = "";
let pending = false;

// ---------------------------------------------------------------- rendering
function requestDraw() {
  if (pending) return;
  pending = true;
  requestAnimationFrame(draw);
}

function resize(width, height) {
  // Cap DPR at 2: a 3x display would rasterise 9x the pixels for no visible gain
  // at these node sizes.
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  W = width; H = height;
  canvas.width = Math.round(W * dpr);
  canvas.height = Math.round(H * dpr);
  // Pin the CSS size too. The width/height attributes above are the canvas's
  // *intrinsic* size (2x on retina); without an explicit style size a flex item
  // refuses to shrink below that and shoves the sidebar off screen.
  canvas.style.width = W + "px";
  canvas.style.height = H + "px";
  // Baseline transform carries DPR, so all drawing code works in CSS pixels.
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  requestDraw();
}

/** Is this node eligible under the current filters? */
function passes(n) {
  if (!activeTypes.has(n.ty)) return false;
  if (n.g < minDegree) return false;
  if (activeTag && !n.tg.includes(activeTag)) return false;
  return true;
}

/** Focus set = selected node plus neighbours, or search matches. */
function focusSet() {
  if (selected) {
    const s = new Set(adj[selected.i]);
    s.add(selected.i);
    return s;
  }
  return matched;
}

function labelCutoff(k) {
  if (k < 0.8) return 60;
  if (k < 1.3) return 20;
  if (k < 2.2) return 10;
  if (k < 4.0) return 4;
  return 0;
}

function draw() {
  pending = false;
  const focus = focusSet();
  const dim = !!focus;

  ctx.save();
  ctx.clearRect(0, 0, W, H);
  ctx.translate(T.x, T.y);
  ctx.scale(T.k, T.k);

  // --- edges: every visible segment in a single path ---
  ctx.beginPath();
  let hasFocusEdges = false;
  for (const l of links) {
    const s = l.source, t = l.target;
    if (!s.vis || !t.vis) continue;
    if (dim && focus.has(s.i) && focus.has(t.i)) { hasFocusEdges = true; continue; }
    ctx.moveTo(s.x, s.y);
    ctx.lineTo(t.x, t.y);
  }
  ctx.globalAlpha = dim ? 0.05 : 0.16;
  ctx.strokeStyle = "#94a3b8";
  ctx.lineWidth = Math.max(0.35, 0.9 / T.k);
  ctx.stroke();

  if (hasFocusEdges) {
    ctx.beginPath();
    for (const l of links) {
      const s = l.source, t = l.target;
      if (!s.vis || !t.vis || !focus.has(s.i) || !focus.has(t.i)) continue;
      ctx.moveTo(s.x, s.y);
      ctx.lineTo(t.x, t.y);
    }
    ctx.globalAlpha = 0.85;
    ctx.strokeStyle = "#2563eb";
    ctx.lineWidth = Math.max(0.8, 1.6 / T.k);
    ctx.stroke();
  }

  // --- nodes: one path per colour ---
  for (const [type, color] of Object.entries(TYPE_COLOR)) {
    for (const bright of [false, true]) {
      if (dim === false && bright) continue;
      ctx.beginPath();
      let any = false;
      for (const n of nodes) {
        if (n.ty !== type || !n.vis) continue;
        if (dim && focus.has(n.i) !== bright) continue;
        // moveTo before arc, or consecutive arcs get joined by a stray line
        ctx.moveTo(n.x + n.r, n.y);
        ctx.arc(n.x, n.y, n.r, 0, TAU);
        any = true;
      }
      if (!any) continue;
      ctx.globalAlpha = dim ? (bright ? 1 : 0.14) : 1;
      ctx.fillStyle = color;
      ctx.fill();
    }
  }

  if (selected && selected.vis) {
    ctx.beginPath();
    ctx.arc(selected.x, selected.y, selected.r + 3.5 / T.k, 0, TAU);
    ctx.globalAlpha = 1;
    ctx.strokeStyle = "#0f172a";
    ctx.lineWidth = 2 / T.k;
    ctx.stroke();
  }
  ctx.restore();

  drawLabels(focus);
}

// Labels are drawn in screen space at a constant font size. Scaling text with
// the zoom transform makes it blurry and re-rasterises the font atlas per zoom.
function drawLabels(focus) {
  const cut = labelCutoff(T.k);
  const pad = 50;
  ctx.font = '11px -apple-system,BlinkMacSystemFont,"Apple SD Gothic Neo","Noto Sans KR",sans-serif';
  ctx.textAlign = "center";
  ctx.textBaseline = "alphabetic";
  ctx.globalAlpha = 1;

  for (const n of nodes) {
    if (!n.vis) continue;
    const forced = n === hovered || n === selected || (focus && focus.has(n.i));
    if (!forced && n.g < cut) continue;
    const sx = n.x * T.k + T.x;
    const sy = n.y * T.k + T.y;
    if (sx < -pad || sx > W + pad || sy < -pad || sy > H + pad) continue;

    const txt = n.t.length > 26 ? n.t.slice(0, 25) + "…" : n.t;
    const w = ctx.measureText(txt).width;
    const baseY = sy - n.r * T.k - 5;
    ctx.fillStyle = "rgba(244,246,249,.86)";
    ctx.fillRect(sx - w / 2 - 3, baseY - 11, w + 6, 14);
    ctx.fillStyle = forced ? "#0f172a" : "#475569";
    ctx.fillText(txt, sx, baseY);
  }
}

// ------------------------------------------------------------- interaction
function refreshVisibility() {
  for (const n of nodes) n.vis = passes(n);
  if (neighbourOnly && selected) {
    const keep = new Set(adj[selected.i]);
    keep.add(selected.i);
    for (const n of nodes) n.vis = n.vis && keep.has(n.i);
  }
  requestDraw();
}

function pick(clientX, clientY) {
  const r = canvas.getBoundingClientRect();
  const [gx, gy] = T.invert([clientX - r.left, clientY - r.top]);
  const reach = 22 / T.k;                       // constant ~22px on screen
  const n = quad.find(gx, gy, reach);
  if (!n || !n.vis) return null;
  return Math.hypot(n.x - gx, n.y - gy) <= Math.max(n.r, reach * 0.7) ? n : null;
}

function showTooltip(n, ev) {
  if (!n) { tooltip.style.opacity = 0; return; }
  tooltip.innerHTML = `
    <b>${escapeHtml(n.t)}</b><br>
    <span class="tt-meta">${typeLabel(n.ty)}${n.yr ? " · " + n.yr : ""} · ${t("view.links", { n: n.g })}</span>
    ${n.tg.length ? `<br><span class="tt-tags">${n.tg.slice(0, 4).map(escapeHtml).join(" · ")}</span>` : ""}
    <br><span class="tt-hint">${t("graph.tip")}</span>`;
  tooltip.style.opacity = 1;
  const pad = 14;
  const w = tooltip.offsetWidth, h = tooltip.offsetHeight;
  let x = ev.clientX + pad, y = ev.clientY + pad;
  if (x + w > innerWidth - 8) x = ev.clientX - w - pad;
  if (y + h > innerHeight - 8) y = ev.clientY - h - pad;
  tooltip.style.left = x + "px";
  tooltip.style.top = y + "px";
}

function select(n) {
  selected = n;
  renderSidebar();
  refreshVisibility();
}

function zoomTo(n, k = 2.5) {
  d3.select(canvas).transition().duration(600).call(
    zoomBehaviour.transform,
    d3.zoomIdentity.translate(W / 2, H / 2).scale(k).translate(-n.x, -n.y)
  );
}

function renderSidebar() {
  const box = document.getElementById("detail");
  if (!selected) {
    box.innerHTML = `<p class="muted small">${t("graph.detailEmpty")}</p>`;
    return;
  }
  const n = selected;
  const neighbours = adj[n.i]
    .map((i) => nodes[i])
    .sort((a, b) => b.g - a.g);
  box.innerHTML = `
    <span class="badge ${n.ty}">${typeLabel(n.ty)}</span>
    ${n.yr ? `<span class="muted small"> ${n.yr}</span>` : ""}
    <h3>${escapeHtml(n.t)}</h3>
    <p class="small muted">${t("graph.links", { n: n.g })}</p>
    <p><a class="btn-link" href="${viewerUrl(n.id)}" target="_blank" rel="noopener">${t("graph.open")}</a></p>
    ${n.tg.length ? `<div>${n.tg.slice(0, 8).map((t) =>
        `<a class="tag" href="catalog.html?tag=${encodeURIComponent(t)}">#${escapeHtml(t)}</a>`).join("")}</div>` : ""}
    <h4>${t("graph.connected", { n: neighbours.length })}</h4>
    <ul class="nbr">${neighbours.slice(0, 40).map((m) =>
        `<li><a href="#" data-goto="${m.i}">${escapeHtml(m.t)}</a>
             <span class="muted small">${m.g}</span></li>`).join("")}
    </ul>
    ${neighbours.length > 40 ? `<p class="muted small">${t("graph.andMore", { n: neighbours.length - 40 })}</p>` : ""}`;

  box.querySelectorAll("[data-goto]").forEach((a) =>
    a.addEventListener("click", (e) => {
      e.preventDefault();
      const m = nodes[+a.dataset.goto];
      select(m);
      zoomTo(m);
    }));
}

// ------------------------------------------------------------------ controls
function buildControls() {
  const typeBox = document.getElementById("typeFilters");
  const counts = graph.meta.types;
  typeBox.innerHTML = TYPES
    .filter((ty) => counts[ty])
    .map((ty) => `<button class="chip on" data-type="${ty}">
        <span class="dot" style="background:${TYPE_COLOR[ty]}"></span>${typeLabel(ty)} ${counts[ty]}
      </button>`).join("");
  typeBox.querySelectorAll("[data-type]").forEach((b) =>
    b.addEventListener("click", () => {
      const t = b.dataset.type;
      activeTypes.has(t) ? activeTypes.delete(t) : activeTypes.add(t);
      b.classList.toggle("on");
      refreshVisibility();
    }));

  const tagSel = document.getElementById("tagFilter");
  tagSel.innerHTML = `<option value="">${t("graph.tagsAll", { n: graph.meta.tagTotal })}</option>` +
    graph.meta.topTags.map(([t, c]) =>
      `<option value="${escapeHtml(t)}">${escapeHtml(t)} (${c})</option>`).join("");
  tagSel.addEventListener("change", () => { activeTag = tagSel.value; refreshVisibility(); });

  const deg = document.getElementById("degFilter");
  const degOut = document.getElementById("degValue");
  deg.addEventListener("input", () => {
    minDegree = +deg.value;
    degOut.textContent = minDegree;
    refreshVisibility();
  });

  const search = document.getElementById("search");
  const run = debounce(() => {
    const q = search.value.trim().toLowerCase();
    matched = null;
    if (q) {
      matched = new Set();
      for (const n of nodes) {
        if (n.t.toLowerCase().includes(q) || n.id.includes(q)) matched.add(n.i);
      }
      document.getElementById("hits").textContent = t("graph.hits", { n: matched.size });
      if (matched.size === 0) matched = null;
    } else {
      document.getElementById("hits").textContent = "";
    }
    selected = null;
    renderSidebar();
    refreshVisibility();
  }, 140);
  search.addEventListener("input", run);
  search.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && matched && matched.size >= 1) {
      const first = nodes[[...matched].sort((a, b) => nodes[b].g - nodes[a].g)[0]];
      select(first);
      zoomTo(first);
    }
  });

  document.getElementById("nbrOnly").addEventListener("click", (e) => {
    neighbourOnly = !neighbourOnly;
    e.currentTarget.classList.toggle("on", neighbourOnly);
    refreshVisibility();
  });
  document.getElementById("resetView").addEventListener("click", fitToScreen);
}

function fitToScreen({ animate = true } = {}) {
  const [x0, y0, x1, y1] = graph.meta.extent;
  const k = Math.min(W / (x1 - x0 + 80), H / (y1 - y0 + 80), 4);
  const target = d3.zoomIdentity
    .translate(W / 2, H / 2).scale(k)
    .translate(-(x0 + x1) / 2, -(y0 + y1) / 2);
  const sel = d3.select(canvas);
  // The first fit must land before paint; only user-triggered refits animate.
  (animate ? sel.transition().duration(500) : sel).call(zoomBehaviour.transform, target);
}

let zoomBehaviour;

// ----------------------------------------------------------------- startup
(async function init() {
  mountShell({ subtitle: "sub.graph" });
  graph = await loadGraph();
  nodes = graph.nodes;
  links = graph.links.map(([s, t]) => ({ source: nodes[s], target: nodes[t] }));
  adj = buildAdjacency(graph);
  nodes.forEach((n) => { n.r = nodeRadius(n.g); n.vis = true; });

  quad = d3.quadtree().x((d) => d.x).y((d) => d.y).addAll(nodes);

  // Created stopped: coordinates are already solved, so this only ever runs
  // while a node is being dragged.
  sim = d3.forceSimulation(nodes).stop()
    .force("link", d3.forceLink(links)
      .distance((l) => 24 + 26 * Math.log1p(Math.min(l.source.g, l.target.g)))
      .strength((l) => 0.85 / Math.pow(Math.max(1, Math.min(l.source.g, l.target.g)), 0.55)))
    .force("charge", d3.forceManyBody()
      .strength((d) => -26 - 5.5 * Math.sqrt(d.g)).theta(0.9).distanceMax(600))
    .force("collide", d3.forceCollide().radius((d) => d.r + 3).strength(0.8))
    .velocityDecay(0.42)
    .on("tick", () => {
      quad = d3.quadtree().x((d) => d.x).y((d) => d.y).addAll(nodes);
      requestDraw();
    });

  zoomBehaviour = d3.zoom().scaleExtent([0.12, 10])
    .on("zoom", (e) => { T = e.transform; requestDraw(); });
  d3.select(canvas).call(zoomBehaviour);

  d3.select(canvas).call(d3.drag()
    .subject((e) => pick(e.sourceEvent.clientX, e.sourceEvent.clientY))
    .on("start", (e) => {
      if (!e.subject) return;
      sim.alphaTarget(0.25).restart();
      e.subject.fx = e.subject.x; e.subject.fy = e.subject.y;
    })
    .on("drag", (e) => {
      if (!e.subject) return;
      const [gx, gy] = T.invert(d3.pointer(e.sourceEvent, canvas));
      e.subject.fx = gx; e.subject.fy = gy;
    })
    .on("end", (e) => {
      if (!e.subject) return;
      sim.alphaTarget(0);
      e.subject.fx = null; e.subject.fy = null;
    }));

  canvas.addEventListener("pointermove", (e) => {
    const n = pick(e.clientX, e.clientY);
    canvas.style.cursor = n ? "pointer" : "grab";
    if (n !== hovered) { hovered = n; requestDraw(); }
    showTooltip(n, e);
  });
  canvas.addEventListener("pointerleave", () => {
    hovered = null; showTooltip(null); requestDraw();
  });
  canvas.addEventListener("click", (e) => {
    const n = pick(e.clientX, e.clientY);
    if (n) select(n); else if (selected) { selected = null; renderSidebar(); refreshVisibility(); }
  });
  canvas.addEventListener("dblclick", (e) => {
    const n = pick(e.clientX, e.clientY);
    if (n) window.open(viewerUrl(n.id), "_blank", "noopener");
  });

  buildControls();
  renderSidebar();
  // Observe the canvas rather than the window: it sits in a flex row next to a
  // fixed-width sidebar, so a one-shot measure at startup can read the width
  // before flex has assigned it and the initial fit lands off-centre.
  let fitted = false;
  new ResizeObserver((entries) => {
    const box = entries[0].contentRect;
    if (box.width < 2 || box.height < 2) return;
    resize(box.width, box.height);
    if (!fitted) { fitted = true; fitToScreen({ animate: false }); }
  }).observe(canvas);

  // index.html?focus=<slug> lets the viewer link back into the graph
  const focus = new URLSearchParams(location.search).get("focus");
  if (focus && graph.byId.has(focus)) {
    const n = graph.byId.get(focus);
    select(n);
    setTimeout(() => zoomTo(n, 3), 550);
  }
})();
