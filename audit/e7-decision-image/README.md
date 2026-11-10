# Decision diagram — narrow pixel repair record

- Recorded: **2026-11-10T19:00:19+08:00 (Asia/Shanghai)**
- File changed in place: `public/images/diagram-transfer-decision.webp`
- Path/name unchanged, still referenced by all pages as `/images/diagram-transfer-decision.webp`.
- Dimensions/mode: **1100 × 360, RGB** before and after.
- Editing method: local Pillow re-draw of the two wrong text areas only (`redraw_decision.py`); no paid image API, no new/alternative diagram.

## 1. Byte facts

| Item | Bytes | SHA-256 |
|---|---:|---|
| Original (read-only backup copy) | 34,078 | `22f3b6eaa773e01998f167ae2314ef1ce1348aa4d9e4bf76e2f309e9a4d50223` |
| New in-place image | 49,248 | `d88e1b6905976fb4a856e2a72cd306050921173afc6981dd02dbc7de015ff4dd` |

The backup copy is `diagram-transfer-decision.ORIGINAL.webp` in this directory; it is byte-identical to both the pre-change site file and the read-only dispatch backup. The new copy is `diagram-transfer-decision.NEW.webp`; it is byte-identical to the site file and to `out/images/diagram-transfer-decision.webp` after build.

Other two diagrams were not touched:

| Image | Bytes | SHA-256 | Worktree vs HEAD |
|---|---:|---|---|
| `public/images/diagram-transfer.webp` | 19,466 | `491c65b0715c4167ad71749bdf78ceda142ea31bdcfdd58782309168ce1c3fc4` | identical |
| `public/images/steam-header.webp` | 27,852 | `08ca2061388c3df32cd744c9bf30f0d62de875132d4ceeec2cec04f2c5fcdb82` | identical |

## 2. Text before → after (pixels, English shared image)

Green card body:

- Before: `Withdraw Steam-linked STOVE → convert original`
- After line 1: `Account Information → Convert temp to non-Steam`
- After line 2: `Then convert original email/SNS to Steam`

Right recovery outline:

- Before: `1. Authorize empty Steam link` / `2. Withdraw that STOVE account` / `3. Convert original email/SNS` / `4. Relaunch Steam app 5019180`
- After: `1. Log in to STOVE with Steam` / `2. Account Information → Convert` / `3. Convert temp to non-Steam login` / `4. Convert original email/SNS → Steam`

Unchanged pixels/content: title `Wrong-bind decision tree (independent)` + subtitle; blue `Steam shows empty Heir?` / `Stop creating characters`; orange `Progress missing` / `Confirm conversion; check STOVE PC/mobile identity`; pink `Demo vs wipe` / `Never in-game delete after transfer → demo warning`; footer `Independent diagram · epicsevensteam.com · not Smilegate/STOVE/Steam`; dark background, rounded cards, three-colour arrows, recovery-panel structure, `Full steps: /steam-transfer/`.

## 3. Tool check that Withdraw is gone

- The old green body occupied x 375–691, y 126–139. The repair repainted the full interior strip x 366–694, y 121–153, so every original glyph/halo pixel in that area was replaced, not merely overlaid.
- The old recovery body occupied x 761–971, y 182–261. The repair repainted the full interior strip x 746–1054, y 176–263.
- New drawn strings were checked against a literal list; none contains `Withdraw`/`withdraw`. The only new recovery verbs are `Log in`, `Convert`, and `Convert original`.
- `read_image` visual read of the final 1100×360 file confirms the two areas read as the official Q3 Convert path. OCR is not installed on this host, so this is pixel-region replacement + visual read, not a claim of OCR output.
- WebP re-encode changes compression values across the canvas; content outside the two repainted strips was not re-drawn. The decision image is intentionally the only image whose bytes changed.

## 4. Official basis

- STOVE Epic Seven Global FAQ view **14378309**, question 3: <https://page.onstove.com/epicseven/global/view/14378309>
  1. On the STOVE login page, select Steam login and register STOVE if needed.
  2. Log in to the STOVE website with that Steam account; select **Convert** under **[My Profile Icon > Account Information]**.
  3. Select a login method **other than Steam** to convert the temporary account.
  4. Convert the previously used email/SNS account to a Steam login.
- Saved readable copy: `/workspace/research-1110/evidence/extract/steam-body-faqs-regarding-steam.visible.txt`
- Cross-check: `/workspace/verify-1110/e7-ko-deepen-1753/extract/official-source-review.md`
- The official answer does **not** require withdrawal/deletion first and does **not** state a uniform waiting period.
- Demo warning view **14581667** only supports “do not use in-game account deletion after transfer”; it is not a withdrawal step and is not conflated with Convert.

## 5. Reproduce

`redraw_decision.py` reads the original backup above and writes `public/images/diagram-transfer-decision.webp`. It uses DejaVu Sans, repaints only the two strips, and re-draws the Convert strings. Run from the repo root:

```bash
python3 audit/e7-decision-image/redraw_decision.py
```
