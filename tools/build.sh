#!/bin/sh
# Full rebuild. Run this rather than build.py alone: build.py rewrites
# graph.json from scratch, so the pre-solved layout coordinates have to be
# regenerated straight afterwards or the graph page loads with no positions.
set -e
cd "$(dirname "$0")/.."
python3 tools/build.py "$@"
echo
node tools/layout.mjs
