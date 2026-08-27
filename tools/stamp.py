#!/usr/bin/env python3
"""Stamp a content hash onto asset URLs so deploys can't serve stale JS.

GitHub Pages sends `cache-control: max-age=600` with no revalidation, and the
nav is injected by JavaScript -- so a browser holding one stale shell.js will
render a nav that is silently missing whatever the latest deploy added, with no
error to hint at it. Versioned URLs mean a changed file is simply a different
URL, and the browser cannot serve the old one.

The hash covers every asset, so any change busts them all. That is deliberate:
the modules import each other, and mismatched versions are worse than an extra
fetch of a few tens of KB.

Idempotent -- existing ?v= stamps are stripped before hashing and rewritten.
"""
import hashlib
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
ASSETS = ROOT / "assets"
PAGES = ("index.html", "catalog.html", "concepts.html", "about.html", "viewer.html")

STAMP_RE = re.compile(r'\?v=[0-9a-f]{8}')
# src="assets/x.js"  href="assets/style.css"
HTML_REF_RE = re.compile(r'((?:src|href)=")(assets/[\w.-]+\.(?:js|css))((?:\?v=[0-9a-f]{8})?)(")')
# from "./x.js"  import "./x.js"
JS_IMPORT_RE = re.compile(r'((?:from|import)\s+")(\./[\w.-]+\.js)((?:\?v=[0-9a-f]{8})?)(")')


def unstamped(text):
    return STAMP_RE.sub("", text)


def compute_version():
    """Hash the stamp-free content of every asset, in a stable order."""
    h = hashlib.sha256()
    for path in sorted(ASSETS.rglob("*")):
        if path.is_file() and path.suffix in (".js", ".css"):
            h.update(path.relative_to(ASSETS).as_posix().encode())
            h.update(unstamped(path.read_text(encoding="utf-8")).encode())
    return h.hexdigest()[:8]


def main():
    if not ASSETS.is_dir():
        sys.exit(f"no assets directory at {ASSETS}")

    version = compute_version()
    changed = []

    for path in sorted(ASSETS.rglob("*.js")):
        text = path.read_text(encoding="utf-8")
        new = JS_IMPORT_RE.sub(lambda m: f"{m.group(1)}{m.group(2)}?v={version}{m.group(4)}", text)
        if new != text:
            path.write_text(new, encoding="utf-8")
            changed.append(path.relative_to(ROOT).as_posix())

    for name in PAGES:
        page = ROOT / name
        if not page.exists():
            continue
        text = page.read_text(encoding="utf-8")
        new = HTML_REF_RE.sub(lambda m: f"{m.group(1)}{m.group(2)}?v={version}{m.group(4)}", text)
        if new != text:
            page.write_text(new, encoding="utf-8")
            changed.append(name)

    print(f"asset version {version}" + (f"  ({len(changed)} files restamped)" if changed else "  (already current)"))


if __name__ == "__main__":
    main()
