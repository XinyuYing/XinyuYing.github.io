#!/usr/bin/env python3
"""
Update _pages/speaking.md from the CEIBS "教授观点" list.

The script only inserts newly published CEIBS links that are newer than the
latest CEIBS link already represented on the page. This keeps the manually
curated historical entries intact while allowing the monthly workflow to append
fresh items automatically.
"""

from __future__ import annotations

import argparse
import html
import re
import sys
import time
import urllib.error
import urllib.parse
import urllib.request
from dataclasses import dataclass
from datetime import date, datetime
from pathlib import Path


SOURCE_URL = "https://cn.ceibs.edu/ricky_tan"
SPEAKING_PAGE = Path("_pages/speaking.md")
BEGIN_MARKER = "<!-- BEGIN CEIBS AUTO-UPDATED INSIGHTS -->"
END_MARKER = "<!-- END CEIBS AUTO-UPDATED INSIGHTS -->"
DEFAULT_SOURCE = "中欧国际工商学院"
DEFAULT_AUTHOR = "谭寅亮"


@dataclass(frozen=True)
class SourceEntry:
    date: date
    url: str
    title: str
    authors: str


@dataclass(frozen=True)
class RenderedEntry:
    date: date
    url: str
    title: str
    source: str
    authors: str
    summary: str


def fetch_text(url: str, retries: int = 3) -> str:
    headers = {
        "User-Agent": (
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
            "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126 Safari/537.36"
        )
    }
    request = urllib.request.Request(url, headers=headers)
    last_error: Exception | None = None

    for attempt in range(1, retries + 1):
        try:
            with urllib.request.urlopen(request, timeout=30) as response:
                charset = response.headers.get_content_charset() or "utf-8"
                return response.read().decode(charset, errors="replace")
        except (urllib.error.URLError, TimeoutError) as exc:
            last_error = exc
            if attempt < retries:
                time.sleep(attempt)

    raise RuntimeError(f"Failed to fetch {url}: {last_error}")


def strip_tags(raw: str) -> str:
    raw = re.sub(r"<script\b.*?</script>", " ", raw, flags=re.I | re.S)
    raw = re.sub(r"<style\b.*?</style>", " ", raw, flags=re.I | re.S)
    raw = re.sub(r"<br\s*/?>", "\n", raw, flags=re.I)
    raw = re.sub(r"</p\s*>", "\n", raw, flags=re.I)
    raw = re.sub(r"<[^>]+>", " ", raw)
    text = html.unescape(raw)
    text = re.sub(r"[ \t\r\f\v]+", " ", text)
    text = re.sub(r"\n\s+", "\n", text)
    return text.strip()


def normalize_url(url: str) -> str:
    url = html.unescape(url).strip()
    if url.startswith("//"):
        url = f"https:{url}"
    elif url.startswith("/"):
        url = urllib.parse.urljoin(SOURCE_URL, url)

    parsed = urllib.parse.urlsplit(url)
    path = parsed.path.rstrip("/")
    return urllib.parse.urlunsplit((parsed.scheme, parsed.netloc, path, "", ""))


def existing_ceibs_urls(markdown: str) -> set[str]:
    urls = re.findall(r'href=["\']([^"\']*ceibs\.edu[^"\']*)["\']', markdown, flags=re.I)
    return {normalize_url(url) for url in urls}


def extract_attrs(raw_attrs: str) -> dict[str, str]:
    attrs: dict[str, str] = {}
    for key, value in re.findall(r'([:\w-]+)\s*=\s*["\'](.*?)["\']', raw_attrs, flags=re.S):
        attrs[key.lower()] = html.unescape(value).strip()
    return attrs


def clean_author_name(raw: str) -> str:
    raw = html.unescape(raw).strip()
    raw = re.sub(r"[（(][^（）()]*[）)]", "", raw)
    raw = re.sub(r"\s+", "", raw)
    return raw


def normalize_authors(raw: str | None) -> str:
    if not raw:
        return DEFAULT_AUTHOR

    names = []
    for part in re.split(r"[~、,，/]+", raw):
        name = clean_author_name(part)
        if name and name not in names:
            names.append(name)

    return ",".join(names) if names else DEFAULT_AUTHOR


def clean_title(raw_title: str) -> str:
    title = strip_tags(raw_title)
    title = re.sub(r"\s*\|\s*CEIBS\s*$", "", title, flags=re.I).strip()
    title = re.sub(r"^[\s　]+|[\s　]+$", "", title)

    # Remove leading author labels that CEIBS includes in list/article titles.
    title = re.sub(
        r"^(?:[\u4e00-\u9fffA-Za-z（）()·\s、,，]+)?谭寅亮(?:[\u4e00-\u9fffA-Za-z（）()·\s、,，]+)?[：:]\s*",
        "",
        title,
    ).strip()
    title = re.sub(
        r"^“?商学院院长谈AI”?系列[0-9一二三四五六七八九十①②③④⑤⑥⑦⑧⑨⑩]+[丨|]\s*",
        "",
        title,
    ).strip()
    return title


def extract_ceibs_insights(source_html: str) -> list[SourceEntry]:
    section_match = re.search(
        r'<div[^>]*class=["\'][^"\']*print-item-title[^"\']*["\'][^>]*>\s*教授观点\s*</div>(?P<section>.*?)(?:</article>|<div\s+id=["\']block-action70)',
        source_html,
        flags=re.I | re.S,
    )
    if not section_match:
        raise RuntimeError("Could not find the 教授观点 section on the CEIBS page.")

    entries: list[SourceEntry] = []
    seen: set[str] = set()
    section = section_match.group("section")
    for paragraph in re.findall(r"<p\b[^>]*>(.*?)</p>", section, flags=re.I | re.S):
        date_match = re.search(r"(\d{4}-\d{2}-\d{2})", strip_tags(paragraph))
        link_match = re.search(
            r"<a\b(?P<attrs_before>[^>]*)href=[\"'](?P<href>[^\"']+)[\"'](?P<attrs_after>[^>]*)>(?P<title>.*?)</a>",
            paragraph,
            flags=re.I | re.S,
        )
        if not date_match or not link_match:
            continue

        url = normalize_url(link_match.group("href"))
        if url in seen:
            continue
        seen.add(url)

        attrs = extract_attrs(f"{link_match.group('attrs_before')} {link_match.group('attrs_after')}")
        entries.append(
            SourceEntry(
                date=datetime.strptime(date_match.group(1), "%Y-%m-%d").date(),
                url=url,
                title=clean_title(link_match.group("title")),
                authors=normalize_authors(attrs.get("sd_author")),
            )
        )

    if not entries:
        raise RuntimeError("Found the 教授观点 section, but no article links were parsed.")
    return entries


def latest_existing_source_date(entries: list[SourceEntry], existing_urls: set[str]) -> date | None:
    dates = [entry.date for entry in entries if entry.url in existing_urls]
    return max(dates) if dates else None


def first_meta_description(detail_html: str) -> str:
    match = re.search(
        r'<meta\s+name=["\']description["\']\s+content=["\'](?P<content>.*?)[\"\']\s*/?>',
        detail_html,
        flags=re.I | re.S,
    )
    if not match:
        return ""
    return re.sub(r"\s+", " ", html.unescape(match.group("content"))).strip()


def extract_detail_title(detail_html: str, fallback: str) -> str:
    heading = re.search(
        r"<h[12]\b[^>]*class=[\"'][^\"']*\btitle\b[^\"']*[\"'][^>]*>(?P<title>.*?)</h[12]>",
        detail_html,
        flags=re.I | re.S,
    )
    if heading:
        return clean_title(heading.group("title"))

    title = re.search(r"<title\b[^>]*>(?P<title>.*?)</title>", detail_html, flags=re.I | re.S)
    if title:
        return clean_title(title.group("title"))

    return fallback


def extract_source(detail_html: str) -> str:
    text = strip_tags(detail_html)
    match = re.search(r"来源\s*[|｜]\s*([^\n。；;]+)", text)
    if not match:
        return DEFAULT_SOURCE

    source = match.group(1).strip()
    source = re.sub(r"\s+", "", source)
    source = source.strip("。；;，,")
    return source or DEFAULT_SOURCE


def summarize(detail_html: str, fallback_title: str) -> str:
    description = first_meta_description(detail_html)
    if re.match(r"^来源\s*[|｜]", description):
        description = ""

    summary = description or fallback_title
    summary = re.sub(r"\s+", " ", summary).strip()
    if len(summary) > 180:
        summary = f"{summary[:177]}..."
    return summary


def hydrate_entry(source_entry: SourceEntry) -> RenderedEntry:
    detail_html = fetch_text(source_entry.url)
    title = extract_detail_title(detail_html, source_entry.title)
    source = extract_source(detail_html)
    return RenderedEntry(
        date=source_entry.date,
        url=source_entry.url,
        title=title,
        source=source,
        authors=source_entry.authors,
        summary=summarize(detail_html, title),
    )


def format_month(item_date: date) -> str:
    return f"{item_date.year}年{item_date.month}月"


def render_entry(entry: RenderedEntry) -> str:
    url = html.escape(entry.url, quote=True)
    title_attr = html.escape(entry.summary, quote=True)
    title_text = html.escape(entry.title)
    source = html.escape(entry.source)
    authors = html.escape(entry.authors)
    month = html.escape(format_month(entry.date))

    return f"""<div class="speech-list">

  <div class="speech-item">
    <a href="{url}" target="_blank"
       title="{title_attr}">
      “{title_text}” {source}. {authors}. {month}.
    </a>
  </div>

</div>

<div style="display:none;">
  Topics:
</div>"""


def ensure_markers(markdown: str) -> str:
    has_begin = BEGIN_MARKER in markdown
    has_end = END_MARKER in markdown
    if has_begin and has_end:
        return markdown
    if has_begin != has_end:
        raise RuntimeError("Found only one CEIBS auto-update marker in speaking.md.")

    anchor = '<div class="section-title">Latest Insights</div>'
    if anchor not in markdown:
        raise RuntimeError("Could not find the Latest Insights section in speaking.md.")

    marker_block = f"{anchor}\n\n{BEGIN_MARKER}\n{END_MARKER}"
    return markdown.replace(anchor, marker_block, 1)


def insert_entries(markdown: str, entries: list[RenderedEntry]) -> str:
    markdown = ensure_markers(markdown)
    if not entries:
        return markdown

    rendered = "\n\n".join(render_entry(entry) for entry in entries)
    pattern = re.compile(
        rf"({re.escape(BEGIN_MARKER)}\n)(?P<body>.*?)(\n{re.escape(END_MARKER)})",
        flags=re.S,
    )
    match = pattern.search(markdown)
    if not match:
        raise RuntimeError("Could not locate the CEIBS auto-update block in speaking.md.")

    body = match.group("body").strip()
    new_body = rendered if not body else f"{rendered}\n\n{body}"
    return pattern.sub(rf"\1{new_body}\3", markdown, count=1)


def update_speaking_page(page_path: Path, dry_run: bool = False, backfill: bool = False) -> int:
    markdown = page_path.read_text(encoding="utf-8")
    source_entries = extract_ceibs_insights(fetch_text(SOURCE_URL))
    existing_urls = existing_ceibs_urls(markdown)
    latest_date = latest_existing_source_date(source_entries, existing_urls)

    new_source_entries = [
        entry
        for entry in source_entries
        if entry.url not in existing_urls and (backfill or latest_date is None or entry.date >= latest_date)
    ]
    new_source_entries.sort(key=lambda entry: entry.date, reverse=True)

    hydrated = [hydrate_entry(entry) for entry in new_source_entries]
    updated = insert_entries(markdown, hydrated)

    if updated == markdown:
        print("No speaking page changes needed.")
        return 0

    if dry_run:
        print(f"Dry run: would add {len(hydrated)} new CEIBS insight(s).")
        for entry in hydrated:
            print(f"- {entry.date.isoformat()} {entry.title} ({entry.url})")
        return 0

    page_path.write_text(updated, encoding="utf-8")
    print(f"Updated {page_path} with {len(hydrated)} new CEIBS insight(s).")
    return 0


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--page", type=Path, default=SPEAKING_PAGE, help="Path to the speaking page.")
    parser.add_argument("--dry-run", action="store_true", help="Show what would change without writing files.")
    parser.add_argument(
        "--backfill",
        action="store_true",
        help="Add all missing CEIBS links instead of only entries newer than the current latest entry.",
    )
    return parser.parse_args()


def main() -> int:
    args = parse_args()
    try:
        return update_speaking_page(args.page, dry_run=args.dry_run, backfill=args.backfill)
    except Exception as exc:
        print(f"Error: {exc}", file=sys.stderr)
        return 1


if __name__ == "__main__":
    raise SystemExit(main())
