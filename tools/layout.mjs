// Pre-solve the force layout at build time and bake x/y into data/graph.json.
//
// 975 nodes take a few seconds to settle. Doing that in the browser would mean
// the landing page spends its first seconds showing an exploding hairball, so
// we solve once here and ship coordinates. The page then paints instantly and
// only reheats the simulation while the user drags a node.
//
// Uses the vendored UMD d3 bundle, so there is nothing to npm install.

import { readFileSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const d3 = createRequire(import.meta.url)(join(root, "vendor/d3.v7.min.js"));

const file = join(root, "data/graph.json");
const graph = JSON.parse(readFileSync(file, "utf8"));

export const nodeRadius = (g) => Math.min(26, 3 + 1.8 * Math.sqrt(g));

const nodes = graph.nodes.map((n, i) => ({ index: i, g: n.g }));
const links = graph.links.map(([s, t]) => ({ source: s, target: t }));

// Deterministic phyllotaxis seed so rebuilds produce the same layout and
// git diffs on graph.json stay readable.
nodes.forEach((n, i) => {
  const r = 12 * Math.sqrt(i + 0.5);
  const a = i * 2.399963229728653;
  n.x = r * Math.cos(a);
  n.y = r * Math.sin(a);
  n.vx = n.vy = 0;
});

// These differ sharply from a 51-node layout. The load-bearing choices:
//  - link strength must stay degree-normalised, or the degree-239 hub applies
//    239 stiff springs and knots the whole graph
//  - charge needs distanceMax, which is what stops the layout expanding without
//    bound at this node count
//  - weak forceX/forceY instead of forceCenter: forceCenter only recentres the
//    mean, it does not bound the extent
const sim = d3
  .forceSimulation(nodes)
  .stop()
  .force("link", d3.forceLink(links)
    .distance((l) => 24 + 26 * Math.log1p(Math.min(l.source.g, l.target.g)))
    .strength((l) => 0.85 / Math.pow(Math.max(1, Math.min(l.source.g, l.target.g)), 0.55)))
  .force("charge", d3.forceManyBody()
    .strength((d) => -26 - 5.5 * Math.sqrt(d.g))
    .theta(0.9)
    .distanceMax(600))
  .force("collide", d3.forceCollide()
    .radius((d) => nodeRadius(d.g) + 3)
    .strength(0.8)
    .iterations(2))
  .force("x", d3.forceX(0).strength(0.028))
  .force("y", d3.forceY(0).strength(0.045))   // y > x gives a wide, 16:9-ish spread
  .velocityDecay(0.42)
  .alphaDecay(0.0165);

const TICKS = 600;
const t0 = Date.now();
for (let i = 0; i < TICKS; i++) sim.tick();

const round = (v) => Math.round(v * 10) / 10;
nodes.forEach((n, i) => {
  graph.nodes[i].x = round(n.x);
  graph.nodes[i].y = round(n.y);
});

const ext = nodes.reduce(
  (a, n) => ({
    x0: Math.min(a.x0, n.x), x1: Math.max(a.x1, n.x),
    y0: Math.min(a.y0, n.y), y1: Math.max(a.y1, n.y),
  }),
  { x0: Infinity, x1: -Infinity, y0: Infinity, y1: -Infinity }
);
graph.meta.extent = [round(ext.x0), round(ext.y0), round(ext.x1), round(ext.y1)];

writeFileSync(file, JSON.stringify(graph), "utf8");

const w = Math.round(ext.x1 - ext.x0);
const h = Math.round(ext.y1 - ext.y0);
console.log(`layout: ${TICKS} ticks in ${((Date.now() - t0) / 1000).toFixed(1)}s`);
console.log(`extent: ${w} x ${h} px  (expect roughly 2000-6000; >20000 means charge is unbounded)`);
