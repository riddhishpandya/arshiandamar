# Wedding QR Photo Frame Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create a print-ready 4×6 portrait wedding card that frames the existing Arshi and Amar seating-chart QR code.

**Architecture:** Build one self-contained SVG card with the existing QR SVG embedded as a data image, then rasterize that same composition to a 1200×1800 PNG. The QR source artwork and payload remain unchanged; only the surrounding frame, typography, and copy are added.

**Tech Stack:** Node.js standard library, SVG, `sharp-cli`, PNG, GitHub Pages.

## Global Constraints

- Use a 4×6 portrait composition at 1200×1800 pixels.
- Preserve the exact existing QR payload and QR artwork.
- Include `ARSHI & AMAR`, `Find Your Table`, and `Scan to find your table`.
- Keep sufficient clear space around the QR for reliable scanning.
- Publish the finished PNG and SVG under `assets/`.

---

### Task 1: Create and publish the framed card

**Files:**
- Create: `assets/arshiandamar-qr-frame.svg`
- Create: `assets/arshiandamar-qr-frame.png`

**Interfaces:**
- Consumes: `assets/arshiandamar-qr.svg`.
- Produces: a self-contained 4×6 SVG and matching 1200×1800 PNG.

- [ ] **Step 1: Generate a self-contained 4×6 SVG**

Use a Node script to read `assets/arshiandamar-qr.svg`, base64-embed it, and write an SVG with:

- `viewBox="0 0 1200 1800"`.
- Ivory `#f7f3ed` background.
- Forest-green `#17362c` typography.
- Gold `#a87532` border and botanical flourishes.
- Header copy `ARSHI &amp; AMAR`.
- Title copy `Find Your Table`.
- QR centered at x=150, y=430, width=900, height=900.
- Callout copy `Scan to find your table` below the QR.
- Closing copy `We’re so glad you’re here`.

- [ ] **Step 2: Rasterize the SVG to PNG**

```bash
npx --yes sharp-cli -i assets/arshiandamar-qr-frame.svg -o assets/arshiandamar-qr-frame.png resize 1200 1800
```

- [ ] **Step 3: Inspect the output**

```bash
file assets/arshiandamar-qr-frame.svg assets/arshiandamar-qr-frame.png
rg -q 'ARSHI &amp; AMAR|Find Your Table|Scan to find your table' assets/arshiandamar-qr-frame.svg
```

Expected: SVG exists, PNG is 1200×1800, and all wedding copy is present.

- [ ] **Step 4: Commit and push the framed assets**

```bash
git add assets/arshiandamar-qr-frame.svg assets/arshiandamar-qr-frame.png
git commit -m "Add framed wedding seating QR card"
git push
```

- [ ] **Step 5: Verify GitHub Pages deployment**

```bash
gh api repos/riddhishpandya/arshiandamar/pages/builds/latest --jq '{status,updated_at}'
curl -L -sS -o /dev/null -w 'PNG HTTP %{http_code}\n' \
  https://riddhishpandya.github.io/arshiandamar/assets/arshiandamar-qr-frame.png
curl -L -sS -o /dev/null -w 'SVG HTTP %{http_code}\n' \
  https://riddhishpandya.github.io/arshiandamar/assets/arshiandamar-qr-frame.svg
```

Expected: Pages status is `built` and both new assets return HTTP 200.
