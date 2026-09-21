#!/usr/bin/env python3
"""Download unique original WordPress media into public/imported."""

from __future__ import annotations

import html as htmlmod
import json
import re
import shutil
import subprocess
import urllib.request
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path

ROOT = Path("/Users/hulk/Documents/PROJECTS/cornerstone_craftsman_website")
OUT_IMG = ROOT / "public/imported/images"
OUT_DOC = ROOT / "public/imported/docs"
OUT_VID = ROOT / "public/imported/videos"
for folder in (OUT_IMG, OUT_DOC, OUT_VID):
    folder.mkdir(parents=True, exist_ok=True)

media: list[dict] = []
for i in (1, 2, 3):
    chunk = json.loads(Path(f"/tmp/cc-export/media-{i}.json").read_text())
    if isinstance(chunk, list):
        media.extend(chunk)


def original_url(url: str) -> str:
    url = htmlmod.unescape(url or "")
    if "wp-content/uploads" in url:
        tail = url.split("wp-content/uploads", 1)[1].split("?")[0].rstrip(").;,'\"")
        return "https://cornerstonecraftsman.org/wp-content/uploads" + tail
    return url.split("?")[0]


def local_name(url: str) -> str:
    name = re.sub(r"[^A-Za-z0-9._-]", "-", url.rstrip("/").split("/")[-1]) or "file"
    match = re.search(r"/uploads/(\d{4})/(\d{2})/", url)
    if match and not name.lower().endswith((".pdf", ".docx", ".doc", ".mp4", ".html")):
        return f"{match.group(1)}-{match.group(2)}-{name}"
    return name


def dest_for(url: str, mime: str, filename: str) -> Path:
    lower = filename.lower()
    if mime == "video/mp4" or lower.endswith(".mp4"):
        return OUT_VID / filename
    if mime.startswith("application/") or lower.endswith((".pdf", ".docx", ".doc")):
        return OUT_DOC / filename
    return OUT_IMG / filename


seen: dict[str, dict] = {}


def add(url: str, mime: str = "", alt: str = "", title: str = "", media_id=None) -> None:
    url = original_url(url)
    if not url.startswith("https://cornerstonecraftsman.org/wp-content/uploads"):
        return
    key = url.lower()
    if key in seen:
        return
    filename = local_name(url)
    guessed = mime
    if not guessed:
        lower = filename.lower()
        if lower.endswith(".pdf"):
            guessed = "application/pdf"
        elif lower.endswith(".mp4"):
            guessed = "video/mp4"
        elif lower.endswith(".svg"):
            guessed = "image/svg+xml"
        elif lower.endswith((".jpg", ".jpeg")):
            guessed = "image/jpeg"
        elif lower.endswith(".png"):
            guessed = "image/png"
        elif lower.endswith(".webp"):
            guessed = "image/webp"
        elif lower.endswith(".docx"):
            guessed = "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        else:
            guessed = "application/octet-stream"
    if guessed == "text/html":
        return
    seen[key] = {
        "id": media_id,
        "url": url,
        "mime": guessed,
        "alt": alt,
        "title": title,
        "filename": filename,
    }


for item in media:
    if not isinstance(item, dict):
        continue
    title = item.get("title")
    add(
        item.get("source_url") or "",
        mime=item.get("mime_type") or "",
        alt=item.get("alt_text") or "",
        title=(title or {}).get("rendered") if isinstance(title, dict) else str(title or ""),
        media_id=item.get("id"),
    )

pages = json.loads(Path("/tmp/cc-export/pages.json").read_text())
for page in pages:
    html = (page.get("content") or {}).get("rendered") or ""
    for match in re.finditer(r"https://[^\"'\\s>]+wp-content/uploads[^\"'\\s>]+", html):
        add(match.group(0))

extras = [
    "https://cornerstonecraftsman.org/wp-content/uploads/2025/03/Alexandria.pdf",
    "https://cornerstonecraftsman.org/wp-content/uploads/2025/03/July-2024-Newsletter.pdf",
    "https://cornerstonecraftsman.org/wp-content/uploads/2025/03/June-2024-Newsletter.pdf",
    "https://cornerstonecraftsman.org/wp-content/uploads/2025/10/CC-BinB-News-Release-10.24.25.pdf",
    "https://cornerstonecraftsman.org/wp-content/uploads/2024/11/Northern-Virginia-Magazine-November-2024.pdf",
    "https://cornerstonecraftsman.org/wp-content/uploads/2024/07/Alexandria-Gange-Prevention-Community-Task-Force-Newsletter-7.24.24.pdf",
    "https://cornerstonecraftsman.org/wp-content/uploads/2024/05/Alexandria-Times-Weve-Impacted-Generations-5.30.24.pdf",
    "https://cornerstonecraftsman.org/wp-content/uploads/2024/10/Past-40-Under-40-Honorees-2.pdf",
]
for url in extras:
    add(url, mime="application/pdf")


def download_one(item: dict) -> tuple[str, dict | None, str | None]:
    dest = dest_for(item["url"], item["mime"], item["filename"])
    if dest.exists() and dest.stat().st_size > 0:
        local = "/" + str(dest.relative_to(ROOT / "public"))
        return "kept", {**item, "local": local, "bytes": dest.stat().st_size}, None
    try:
        req = urllib.request.Request(
            item["url"],
            headers={"User-Agent": "CornerstoneSiteImport/1.0"},
        )
        with urllib.request.urlopen(req, timeout=90) as resp:
            data = resp.read()
        dest.parent.mkdir(parents=True, exist_ok=True)
        dest.write_bytes(data)
        if item["mime"].startswith("image/") and dest.suffix.lower() in {".jpg", ".jpeg", ".png", ".webp"}:
            if dest.stat().st_size > 1_500_000:
                subprocess.run(["sips", "-Z", "1800", str(dest)], check=False, capture_output=True)
        local = "/" + str(dest.relative_to(ROOT / "public"))
        return "ok", {**item, "local": local, "bytes": dest.stat().st_size}, None
    except Exception as exc:
        return "fail", None, f"{item['url']} :: {exc}"


records = []
ok = kept = fail = 0
items = list(seen.values())
print(f"Queued {len(items)} files")
with ThreadPoolExecutor(max_workers=8) as pool:
    futures = [pool.submit(download_one, item) for item in items]
    for future in as_completed(futures):
        status, record, err = future.result()
        if status == "ok":
            ok += 1
            records.append(record)
            print("OK", record["filename"], record.get("bytes"))
        elif status == "kept":
            kept += 1
            records.append(record)
        else:
            fail += 1
            print("FAIL", err)

records.sort(key=lambda item: item["filename"])
manifest = ROOT / "src/content/imported-media.json"
manifest.write_text(json.dumps(records, indent=2))

aliases = {
    "2024-03-Cornerstone-Craftsman-Logo.png": ROOT / "public/images/logo.png",
    "2024-03-IBEW.png": ROOT / "public/images/partners/ibew.png",
    "2024-03-carpenters.png": ROOT / "public/images/partners/carpenters.png",
    "2024-03-smart.png": ROOT / "public/images/partners/smart.png",
    "2024-03-local5.png": ROOT / "public/images/partners/local5.png",
    "2024-03-inova.png": ROOT / "public/images/partners/inova.png",
    "2024-03-simpson1.webp": ROOT / "public/images/partners/simpson.webp",
    "2024-03-clark-19c8a2.svg": ROOT / "public/images/partners/clark.svg",
    "2024-03-TheChamberALX_MemberSticker_2025_CM_Page_2.png": ROOT / "public/images/partners/chamber.png",
    "2024-04-kids1.jpeg": ROOT / "public/images/program/hero.jpg",
    "2024-05-20230812_111935-scaled.jpg": ROOT / "public/images/program/workshop-1.jpg",
    "2024-05-Added-4.25.24-scaled.jpg": ROOT / "public/images/program/measuring.jpg",
    "2024-03-Front20230723_142603-2-e1715979383348.jpg": ROOT / "public/images/program/tools.jpg",
    "2025-04-Carpenters-Union-Field-Trip-Youth-e1743790160989.jpeg": ROOT / "public/images/program/carpenters-trip.jpg",
    "2025-04-Copy-of-Group-Photo_IBEW-Local-6.jpg": ROOT / "public/images/program/ibew-group.jpg",
}
by_name = {item["filename"]: item for item in records}
for filename, dest in aliases.items():
    src_item = by_name.get(filename)
    if not src_item:
        print("ALIAS MISSING", filename)
        continue
    src = ROOT / "public" / src_item["local"].lstrip("/")
    dest.parent.mkdir(parents=True, exist_ok=True)
    shutil.copy2(src, dest)
    print("ALIAS", filename, "->", dest.relative_to(ROOT))

print(f"\nDownloaded {ok}, kept {kept}, failed {fail}, manifest {len(records)}")
