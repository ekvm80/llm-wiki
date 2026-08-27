#!/usr/bin/env python3
"""llm_wiki -> static site builder.

Walks the wiki, parses frontmatter, resolves [[wikilinks]] into an undirected
graph, copies the notes verbatim and emits data/graph.json.

Usage:
    python3 tools/build.py [--wiki DIR] [--out DIR] [--strict]
"""
import argparse
import json
import re
import shutil
import sys
from collections import Counter, defaultdict
from datetime import datetime, timezone
from pathlib import Path

NOTE_DIRS = ("concepts", "papers", "references", "overviews")
SKIP_DIRS = {"_plans", ".obsidian", "_ocr_tmp", "__pycache__"}
SKIP_STEMS = {"index", "log", "NOTE_QUALITY_STANDARD"}
DOC_FILES = ("MANUAL.md", "AGENTS.md")

FM_RE = re.compile(r"^---\r?\n(.*?)\r?\n---\r?\n", re.S)
KV_RE = re.compile(r"^([A-Za-z_][\w-]*):\s*(.*)$")
ITEM_RE = re.compile(r"^\s*-\s+(.*)$")
# [[slug]] | [[slug#heading]] | [[slug|alias]]
LINK_RE = re.compile(r"\[\[([^\]\[|#]+)(?:#[^\]\[|]*)?(?:\|[^\]\[]*)?\]\]")
YEAR_RE = re.compile(r"\((\d{4})[a-z]?\)")
DOI_RE = re.compile(r"https?://(?:dx\.)?doi\.org/\S+")
JOURNAL_RE = re.compile(r"\)\.\s*[^.]+\.\s*([A-Z][^,.]{4,60}),")
SUMMARY_RE = re.compile(r"^##\s+Summary\s*\n+(.+?)(?=\n##\s|\Z)", re.S | re.M)
# a bare $ that is not escaped as \$
RAW_DOLLAR_RE = re.compile(r"(?<!\\)\$")


def parse_front_matter(text):
    """Return (fields, body). Handles both inline and block YAML list forms.

    The wiki uses exactly six keys (title/type/source/citation/date/tags) with a
    flat structure, so a small hand-rolled parser beats pulling in PyYAML.
    """
    m = FM_RE.match(text)
    if not m:
        return {}, text
    fields, current = {}, None
    for line in m.group(1).splitlines():
        item = ITEM_RE.match(line)
        if item and isinstance(fields.get(current), list):
            fields[current].append(item.group(1).strip().strip("\"'"))
            continue
        kv = KV_RE.match(line)
        if not kv:
            continue
        key, value = kv.group(1), kv.group(2).strip()
        if value == "":                                     # opens a block list
            fields[key], current = [], key
        elif value.startswith("[") and value.endswith("]"):  # inline list
            fields[key] = [x.strip().strip("\"'") for x in value[1:-1].split(",") if x.strip()]
            current = None
        else:
            fields[key], current = value.strip("\"'"), None
    return fields, text[m.end():]


def collect_notes(wiki):
    """Map slug -> path, resolving duplicate stems in favour of the longer note."""
    found = defaultdict(list)
    for folder in NOTE_DIRS:
        for path in sorted((wiki / folder).rglob("*.md")):
            if SKIP_DIRS & set(path.parts) or path.stem in SKIP_STEMS:
                continue
            found[path.stem].append(path)

    notes, dupes = {}, []
    for slug, paths in found.items():
        if len(paths) > 1:
            # Same slug in two folders means the same source was noted twice.
            # Keep the richer note; the stub is almost always the stale one.
            paths = sorted(paths, key=lambda p: p.stat().st_size, reverse=True)
            dupes.append((slug, paths))
        notes[slug] = paths[0]
    return notes, dupes


def build(wiki, out, strict):
    notes, dupes = collect_notes(wiki)
    slugs = sorted(notes)
    index_of = {s: i for i, s in enumerate(slugs)}

    records, edges = {}, set()
    broken = defaultdict(list)
    lint = {"odd_dollar": [], "no_year": [], "bad_date": [], "no_frontmatter": []}

    for slug in slugs:
        path = notes[slug]
        text = path.read_text(encoding="utf-8", errors="replace")
        fm, body = parse_front_matter(text)
        if not fm:
            lint["no_frontmatter"].append(slug)

        # Concept notes put provenance wikilinks in `source:`, so scan it too --
        # body-only parsing loses 4 real edges.
        source = fm.get("source", "")
        scannable = body + "\n" + (source if isinstance(source, str) else " ".join(source))
        for target in {m.group(1).strip() for m in LINK_RE.finditer(scannable)}:
            if target == slug:
                continue
            if target in notes:
                edges.add(tuple(sorted((slug, target))))
            else:
                broken[target].append(slug)

        citation = fm.get("citation", "") or ""
        year = YEAR_RE.search(citation)
        journal = JOURNAL_RE.search(citation)
        summary = SUMMARY_RE.search(body)
        tags = fm.get("tags", [])
        if isinstance(tags, str):
            tags = [tags] if tags else []

        if not year:
            lint["no_year"].append(slug)
        if str(fm.get("date", "")).upper().startswith("YYYY"):
            lint["bad_date"].append(slug)
        if len(RAW_DOLLAR_RE.findall(text)) % 2:
            lint["odd_dollar"].append(slug)

        records[slug] = {
            "id": slug,
            "t": fm.get("title") or slug,
            "ty": fm.get("type") or "unknown",
            "p": f"wiki/{path.relative_to(wiki).as_posix()}",
            "tg": tags,
            "yr": int(year.group(1)) if year else None,
            "j": journal.group(1).strip() if journal else None,
            "c": citation,
            "doi": (DOI_RE.search(citation).group(0) if DOI_RE.search(citation) else None),
            "src": source if isinstance(source, str) else "",
            "sm": re.sub(r"\s+", " ", summary.group(1)).strip()[:300] if summary else "",
        }

    degree = Counter()
    for a, b in edges:
        degree[a] += 1
        degree[b] += 1
    for slug, rec in records.items():
        rec["g"] = degree[slug]

    # ---- copy notes + docs -------------------------------------------------
    for folder in NOTE_DIRS:
        shutil.rmtree(out / "wiki" / folder, ignore_errors=True)
    for slug in slugs:
        dest = out / records[slug]["p"]
        dest.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(notes[slug], dest)
    for extra in ("index.md", "log.md", "NOTE_QUALITY_STANDARD.md"):
        if (wiki / extra).exists():
            shutil.copy2(wiki / extra, out / "wiki" / extra)
    (out / "docs").mkdir(exist_ok=True)
    for doc in DOC_FILES:
        if (wiki.parent / doc).exists():
            shutil.copy2(wiki.parent / doc, out / "docs" / doc)

    # ---- graph.json / catalog.json -----------------------------------------
    # The landing page is the graph, so graph.json carries only what the canvas
    # and the viewer's backlink panel need. Citation/summary text is 3x that
    # payload and is only ever read by catalog.html, so it ships separately.
    tag_counts = Counter(t for r in records.values() for t in r["tg"])
    graph = {
        "meta": {
            "built": datetime.now(timezone.utc).astimezone().isoformat(timespec="seconds"),
            "n": len(slugs),
            "m": len(edges),
            "types": dict(Counter(r["ty"] for r in records.values())),
            "years": dict(sorted(Counter(r["yr"] for r in records.values() if r["yr"]).items())),
            "topTags": tag_counts.most_common(40),
            "tagTotal": len(tag_counts),
        },
        "nodes": [{k: r[k] for k in ("id", "t", "ty", "p", "g", "yr", "tg")}
                  for r in (records[s] for s in slugs)],
        "links": sorted([index_of[a], index_of[b]] for a, b in edges),
    }
    catalog = [{"id": r["id"], "j": r["j"], "sm": r["sm"]}
               for r in (records[s] for s in slugs)]

    (out / "data").mkdir(exist_ok=True)
    for name, payload in (("graph.json", graph), ("catalog.json", catalog)):
        (out / "data" / name).write_text(
            json.dumps(payload, ensure_ascii=False, separators=(",", ":")), encoding="utf-8"
        )

    # ---- report ------------------------------------------------------------
    size = (out / "data" / "graph.json").stat().st_size
    cat_size = (out / "data" / "catalog.json").stat().st_size
    report = [
        f"nodes            {len(slugs)}",
        f"edges            {len(edges)}",
        f"graph.json       {size/1024:.0f} KB",
        f"catalog.json     {cat_size/1024:.0f} KB",
        f"types            {graph['meta']['types']}",
        f"distinct tags    {len(tag_counts)}",
        f"year coverage    {len(slugs)-len(lint['no_year'])}/{len(slugs)}",
        "",
        f"[LINT] duplicate slugs      {len(dupes)}",
    ]
    for slug, paths in dupes:
        report.append(f"         {slug}")
        for i, p in enumerate(paths):
            mark = "kept  " if i == 0 else "SKIPPED"
            report.append(f"           {mark} {p.relative_to(wiki)} ({p.stat().st_size} B)")
    report.append(f"[LINT] broken wikilinks     {len(broken)}")
    for target, sources in sorted(broken.items()):
        report.append(f"         [[{target}]] <- {', '.join(sources[:3])}")
    report.append(f"[LINT] unbalanced '$'       {len(lint['odd_dollar'])}")
    for slug in lint["odd_dollar"]:
        report.append(f"         {slug}")
    report.append(f"[LINT] isolated (deg 0)     {sum(1 for r in records.values() if r['g'] == 0)}")
    report.append(f"[LINT] invalid date         {len(lint['bad_date'])}")
    report.append(f"[LINT] no year in citation  {len(lint['no_year'])}")

    text = "\n".join(report)
    (out / "tools" / "build_report.txt").write_text(text + "\n", encoding="utf-8")
    print(text)

    if strict and (broken or lint["odd_dollar"] or dupes):
        sys.exit(1)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--wiki", type=Path,
                    default=Path.home() / "Documents/Research_Knowledge/llm_wiki/wiki")
    ap.add_argument("--out", type=Path, default=Path(__file__).resolve().parent.parent)
    ap.add_argument("--strict", action="store_true")
    args = ap.parse_args()
    build(args.wiki.resolve(), args.out.resolve(), args.strict)


if __name__ == "__main__":
    main()
