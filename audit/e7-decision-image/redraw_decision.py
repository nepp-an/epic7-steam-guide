#!/usr/bin/env python3
"""Targeted re-draw of the two wrong Withdraw text areas in
public/images/diagram-transfer-decision.webp.

Only the green card body and the right recovery outline body are repainted.
Layout, borders, headings, arrows, footer and all unrelated pixels are kept.
"""
from PIL import Image, ImageDraw, ImageFont
import numpy as np

SRC = "audit/e7-decision-image/diagram-transfer-decision.ORIGINAL.webp"
DST = "public/images/diagram-transfer-decision.webp"

FONT = "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"
WHITE = (232, 244, 255)
GREEN = (90, 199, 148)
PURPLE = (176, 138, 245)

im = Image.open(SRC).convert("RGB")
a = np.array(im).astype(np.int16)

# ---- 1. reconstruct background over the old green-card body -----------------
# rows 121..153, interior x 366..694.  Background is flat per row.
for y in range(121, 154):
    strip = a[y, 366:373]
    med = np.median(strip, axis=0).astype(np.uint8)
    a[y, 366:695] = med

# ---- 2. reconstruct background over the old recovery outline body ----------
# rows 176..263, interior x 746..1054.  Interpolate left/right clean strips.
for y in range(176, 264):
    left = np.median(a[y, 746:758], axis=0).astype(float)
    right = np.median(a[y, 1041:1053], axis=0).astype(float)
    xs = np.arange(746, 1055)
    t = (xs - 746) / (1054 - 746)
    row = (left[None, :] * (1 - t[:, None]) + right[None, :] * t[:, None])
    a[y, 746:1055] = np.clip(np.round(row), 0, 255).astype(np.uint8)

im = Image.fromarray(a.astype(np.uint8), "RGB")

# ---- 3. draw replacement text with 4x supersampled mask --------------------
SCALE = 4


def draw_line(base, text, x, baseline, px, color):
    mask = Image.new("L", (base.width * SCALE, base.height * SCALE), 0)
    d = ImageDraw.Draw(mask)
    f = ImageFont.truetype(FONT, int(round(px * SCALE)))
    d.text((x * SCALE, baseline * SCALE), text, font=f, fill=255, anchor="ls")
    mask = mask.resize(base.size, Image.LANCZOS)
    base.paste(color, (0, 0), mask)


# green card body: two short lines, same x origin as before
draw_line(im, "Account Information → Convert temp to non-Steam", 375, 133, 12.2, WHITE)
draw_line(im, "Then convert original email/SNS to Steam", 375, 148, 12.2, WHITE)

# recovery outline: four official Q3 steps, same left edge and 22px rhythm
draw_line(im, "1. Log in to STOVE with Steam", 761, 192, 12.9, WHITE)
draw_line(im, "2. Account Information → Convert", 761, 214, 12.9, WHITE)
draw_line(im, "3. Convert temp to non-Steam login", 761, 236, 12.9, WHITE)
draw_line(im, "4. Convert original email/SNS → Steam", 761, 258, 12.9, WHITE)

im.save(DST, "WEBP", quality=95, method=6)
print("wrote", DST, im.size, im.mode)
