#!/usr/bin/env python3
"""Generate self-drawn avatars and tool-page diagrams for epicsevensteam.com.

Avatars match the existing 160x160 element-colour style (dark field, ring,
cut-out silhouette, two-letter badge). Existing files in public/images/avatars/
are never overwritten. Diagrams follow public/images/diagram-heroes-groups.webp.
"""
from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
AVATAR_DIR = ROOT / "public" / "images" / "avatars"
IMAGE_DIR = ROOT / "public" / "images"

SIZE = 160
SCALE = 4
S = SIZE * SCALE
FONT_BOLD = "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"
FONT_REG = "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"
INTER_VAR = "/usr/share/fonts/truetype/sand-box/google/Inter/Inter-VariableFont_opsz,wght.ttf"

# Geometry fitted to the existing ras.webp plate (non-badge region).
CX = CY = 79.5
R_OUTER = 67.5
RING_W = 5.5
R_INNER = 52.0
HEAD_CY = 67.0
HEAD_R = 25.0
SH_CY = 124.0
SH_R = 40.0

# Palettes: Fire/Ice/Earth/Dark sampled from existing avatars.
# Light and Neutral follow the same recipe (dark tinted field, chip accent,
# lightened badge stroke/text). Do not invent an element for Neutral names.
PALETTES = {
    "Fire": {
        "bg": (59, 20, 17),
        "accent": (232, 93, 76),
        "badge": (236, 184, 179),
        "badge_text": (250, 184, 172),
    },
    "Ice": {
        "bg": (15, 36, 52),
        "accent": (95, 182, 232),
        "badge": (193, 228, 241),
        "badge_text": (189, 229, 252),
    },
    "Earth": {
        "bg": (21, 36, 24),
        "accent": (123, 196, 126),
        "badge": (205, 234, 210),
        "badge_text": (209, 234, 213),
    },
    "Dark": {
        "bg": (26, 19, 47),
        "accent": (155, 128, 212),
        "badge": (212, 203, 245),
        "badge_text": (220, 203, 253),
    },
    "Light": {
        "bg": (46, 38, 16),
        "accent": (240, 216, 120),
        "badge": (250, 234, 176),
        "badge_text": (255, 242, 196),
    },
    "Neutral": {
        "bg": (22, 26, 34),
        "accent": (154, 166, 188),
        "badge": (210, 218, 230),
        "badge_text": (222, 228, 238),
    },
}

# Library heroes missing avatars (elements from lib/hero-builds.ts).
LIBRARY_NEW = [
    ("tamarinne", "Ta", "Fire"),
    ("fallen-cecilia", "FC", "Dark"),
    ("ruele-of-light", "RL", "Light"),
    ("seaside-bellona", "SB", "Ice"),
    ("specter-tenebria", "ST", "Dark"),
    ("arbiter-vildred", "AV", "Dark"),
    ("politis", "Po", "Earth"),
    ("cerise", "Ce", "Ice"),
]

# Sample-only roster names. Tints only when this site already publishes a
# class/element for that exact name (tier-list SS / WA quotes). Otherwise Neutral.
SAMPLE_ONLY = [
    ("afternoon-soak-flan", "AF", "Fire"),  # /tier-list/ TIER_PVE_SS_ROWS: Fire Ranger 5★
    ("angelica", "An", "Neutral"),
    ("bellona", "Be", "Neutral"),
    ("brieg", "Br", "Ice"),  # TIER_PVE_SS_ROWS: Ice Knight 5★
    ("camilla", "Ca", "Neutral"),
    ("cermia", "Ce", "Neutral"),  # same letters as Cerise; this is sample-only Neutral
    ("eligos", "El", "Neutral"),
    ("fenne", "Fe", "Ice"),  # TIER_PVE_SS_ROWS: Ice Soul Weaver 5★
    ("free-spirit-tieria", "FT", "Neutral"),
    ("holiday-yufine", "HY", "Neutral"),
    ("immortal-wukong", "IW", "Neutral"),
    ("landy", "La", "Neutral"),
    ("leah", "Le", "Neutral"),
    ("lisette", "Li", "Light"),  # TIER_WA_ROWS: Light Soul Weaver 5★
    ("mort", "Mo", "Neutral"),
    ("muwi", "Mu", "Neutral"),
    ("renoa", "Re", "Neutral"),
    ("rose", "Ro", "Neutral"),
    ("schniel", "Sc", "Neutral"),
    ("shepherd-of-the-dark-diene", "SD", "Dark"),  # TIER_WA_S_SAMPLE: Dark Mage 5★
    ("sigret", "Si", "Neutral"),
    ("taranor-guard", "TG", "Neutral"),
    ("vivian", "Vi", "Neutral"),
]

# Cermia "Ce" collides with Cerise "Ce". That's OK — they are different files;
# the letters follow the one-word Upper+lower rule. Leave as Ce.

SKIP_EXISTING = True

# Diagram colours sampled from diagram-heroes-groups.webp
DIA_BG = (11, 22, 43)
DIA_CARD = (18, 31, 59)
DIA_TITLE = (238, 247, 255)
DIA_SUB = (170, 184, 204)
DIA_FOOT = (101, 111, 135)
DIA_BODY = (214, 224, 236)
DIA_MUTED = (140, 154, 176)
DIA_BLUE = (106, 160, 237)
DIA_GREEN = (91, 195, 146)
DIA_ORANGE = (229, 161, 89)
DIA_PURPLE = (176, 138, 245)
DIA_PINK = (232, 140, 180)


def font_inter(px: int, weight: int = 700) -> ImageFont.FreeTypeFont:
    try:
        font = ImageFont.truetype(INTER_VAR, px)
        try:
            font.set_variation_by_axes([14, weight])
        except Exception:
            try:
                font.set_variation_by_axes([weight])
            except Exception:
                pass
        return font
    except Exception:
        path = FONT_BOLD if weight >= 600 else FONT_REG
        return ImageFont.truetype(path, px)


def font_dejavu(px: int, bold: bool = True) -> ImageFont.FreeTypeFont:
    return ImageFont.truetype(FONT_BOLD if bold else FONT_REG, px)


def draw_plate(pal: dict) -> Image.Image:
    bg, acc = pal["bg"], pal["accent"]
    img = Image.new("RGB", (S, S), bg)
    d = ImageDraw.Draw(img)
    s = SCALE
    d.ellipse(
        [(CX - R_OUTER) * s, (CY - R_OUTER) * s, (CX + R_OUTER) * s, (CY + R_OUTER) * s],
        fill=acc,
    )
    hole = R_OUTER - RING_W
    d.ellipse(
        [(CX - hole) * s, (CY - hole) * s, (CX + hole) * s, (CY + hole) * s],
        fill=bg,
    )
    d.ellipse(
        [(CX - R_INNER) * s, (CY - R_INNER) * s, (CX + R_INNER) * s, (CY + R_INNER) * s],
        fill=acc,
    )
    d.ellipse(
        [(CX - HEAD_R) * s, (HEAD_CY - HEAD_R) * s, (CX + HEAD_R) * s, (HEAD_CY + HEAD_R) * s],
        fill=bg,
    )
    d.ellipse(
        [(CX - SH_R) * s, (SH_CY - SH_R) * s, (CX + SH_R) * s, (SH_CY + SH_R) * s],
        fill=bg,
    )
    return img


def add_badge(img: Image.Image, pal: dict, letters: str) -> Image.Image:
    d = ImageDraw.Draw(img)
    s = SCALE
    font = font_dejavu(28 * s, bold=True)
    # Measure at 1x to size the box, then draw at 4x.
    font1 = font_dejavu(28, bold=True)
    probe = Image.new("L", (SIZE, SIZE), 0)
    ImageDraw.Draw(probe).text((80, 138), letters, font=font1, fill=255, anchor="mm")
    # bbox of ink
    pix = list(probe.getdata())
    xs = [i % SIZE for i, p in enumerate(pix) if p > 128]
    if not xs:
        left, right = 55, 105
    else:
        pad = 12
        left = min(xs) - pad
        right = max(xs) + pad
        # keep a little margin from the canvas edge
        left = max(8, left)
        right = min(151, right)
    # Fixed vertical box, modest corner radius (fitted to existing badges).
    box = [left * s, 118 * s, (right + 1) * s - 1, 149 * s - 1]
    d.rounded_rectangle(box, radius=7 * s, fill=pal["bg"], outline=pal["badge"], width=s)
    d.text((80 * s, 138 * s), letters, font=font, fill=pal["badge_text"], anchor="mm")
    return img


def write_avatar(slug: str, letters: str, tint: str) -> Path | None:
    dest = AVATAR_DIR / f"{slug}.webp"
    if SKIP_EXISTING and dest.exists():
        print(f"skip existing {dest.name}")
        return None
    pal = PALETTES[tint]
    img = add_badge(draw_plate(pal), pal, letters)
    out = img.resize((SIZE, SIZE), Image.Resampling.LANCZOS)
    dest.parent.mkdir(parents=True, exist_ok=True)
    out.save(dest, "WEBP", quality=95, method=6)
    print(f"wrote {dest.relative_to(ROOT)} ({tint} {letters})")
    return dest


def ss_text(base: Image.Image, text: str, xy: tuple[float, float], font_px: int,
            color: tuple[int, int, int], *, weight: int = 700, anchor: str = "lt") -> None:
    """Draw crisp text via 4x supersampled mask, same method as redraw_decision.py."""
    scale = 4
    mask = Image.new("L", (base.width * scale, base.height * scale), 0)
    d = ImageDraw.Draw(mask)
    font = font_inter(int(round(font_px * scale)), weight)
    d.text((xy[0] * scale, xy[1] * scale), text, font=font, fill=255, anchor=anchor)
    mask = mask.resize(base.size, Image.Resampling.LANCZOS)
    base.paste(color, (0, 0), mask)


def rounded_card(d: ImageDraw.ImageDraw, box, radius, fill, outline, width=3):
    d.rounded_rectangle(box, radius=radius, fill=fill, outline=outline, width=width)


def footer_and_title(im: Image.Image, title: str, subtitle: str) -> None:
    ss_text(im, title, (28, 28), 22, DIA_TITLE, weight=700, anchor="lt")
    ss_text(im, subtitle, (28, 56), 14, DIA_SUB, weight=500, anchor="lt")
    ss_text(
        im,
        "Independent diagram · epicsevensteam.com · not Smilegate/STOVE/Steam",
        (28, im.height - 22),
        12,
        DIA_FOOT,
        weight=500,
        anchor="ls",
    )


def write_diagram(name: str, im: Image.Image) -> Path:
    dest = IMAGE_DIR / name
    dest.parent.mkdir(parents=True, exist_ok=True)
    im.save(dest, "WEBP", quality=95, method=6)
    print(f"wrote {dest.relative_to(ROOT)} {im.size}")
    return dest


def diagram_gear_score() -> Image.Image:
    W, H = 1100, 400
    im = Image.new("RGB", (W, H), DIA_BG)
    d = ImageDraw.Draw(im)
    footer_and_title(
        im,
        "Unofficial community formula weights (independent)",
        "The exact weights used on this page — not a Smilegate or Epic Seven official score",
    )
    # Weight chips, two rows
    items = [
        (DIA_BLUE, "Speed × 2"),
        (DIA_PURPLE, "Crit Chance × 1.6"),
        (DIA_PINK, "Crit Damage × 1.1"),
        (DIA_GREEN, "ATK% HP% DEF% Eff% ER%  →  +1 per percent"),
        (DIA_ORANGE, "Flat ATK ÷ 10   ·   Flat HP ÷ 50   ·   Flat DEF ÷ 6"),
    ]
    y = 86
    # first row: three compact chips
    row1 = items[:3]
    x = 28
    chip_h = 56
    gap = 14
    chip_w = (W - 28 * 2 - gap * 2) // 3
    for color, label in row1:
        rounded_card(d, [x, y, x + chip_w, y + chip_h], 12, DIA_CARD, color, 3)
        ss_text(im, label, (x + chip_w / 2, y + chip_h / 2), 16, color, weight=700, anchor="mm")
        x += chip_w + gap
    y = 154
    for color, label in items[3:]:
        rounded_card(d, [28, y, W - 28, y + 48], 12, DIA_CARD, color, 3)
        ss_text(im, label, (W / 2, y + 24), 15, color, weight=650, anchor="mm")
        y += 48 + 10
    # ranges callout
    y += 4
    rounded_card(d, [28, y, W - 28, H - 36], 12, DIA_CARD, (90, 110, 150), 2)
    ss_text(
        im,
        "Lv.85 / Lv.90 score bands on this page are a community rule of thumb only.",
        (44, y + 16),
        14,
        DIA_TITLE,
        weight=650,
        anchor="lt",
    )
    ss_text(
        im,
        "Lv.85: 40–49 often called okay, 50–59 good, 60–70 very good, 71–85 best.   "
        "Lv.90: 50–59 okay, 60–69 good, 70–80 very good, 81–90 best.",
        (44, y + 38),
        13,
        DIA_BODY,
        weight=500,
        anchor="lt",
    )
    ss_text(
        im,
        "Those ranges are not a Smilegate standard, and they do not change the score this tool calculates.",
        (44, y + 58),
        13,
        DIA_MUTED,
        weight=500,
        anchor="lt",
    )
    return im


def diagram_hero_builds() -> Image.Image:
    W, H = 1100, 360
    im = Image.new("RGB", (W, H), DIA_BG)
    d = ImageDraw.Draw(im)
    footer_and_title(
        im,
        "How to read this sourced library (independent)",
        "A retrieval library with sources — not an official kit page and not a full-roster tier list",
    )
    cards = [
        (
            DIA_BLUE,
            "Sourced library",
            "Only starter, specialty-change,\nhunt, and mode-example units\nalready documented on this site.",
        ),
        (
            DIA_ORANGE,
            "Blank means no source",
            "Empty set, stat, or artifact\nfields stay blank when we do not\nhave a reliable source we opened.",
        ),
        (
            DIA_GREEN,
            "Shares are not win rates",
            "Hideout figures are shares of\nclears in a named panel and date\nwindow — not official grades.",
        ),
    ]
    gap = 18
    card_w = (W - 28 * 2 - gap * 2) // 3
    y0, y1 = 92, H - 44
    x = 28
    for color, title, body in cards:
        rounded_card(d, [x, y0, x + card_w, y1], 14, DIA_CARD, color, 3)
        ss_text(im, title, (x + 22, y0 + 24), 18, color, weight=700, anchor="lt")
        by = y0 + 62
        for line in body.split("\n"):
            ss_text(im, line, (x + 22, by), 14, DIA_BODY, weight=500, anchor="lt")
            by += 24
        x += card_w + gap
    return im


def diagram_team_builder() -> Image.Image:
    W, H = 1100, 300
    im = Image.new("RGB", (W, H), DIA_BG)
    d = ImageDraw.Draw(im)
    footer_and_title(
        im,
        "How this unofficial matcher works (independent)",
        "Match a roster to dated published sample teams — it does not invent a team or a substitute",
    )
    steps = [
        (DIA_BLUE, "1. Check your roster", "Mark the heroes you have,\nincluding sample-only names."),
        (DIA_GREEN, "2. Compare dated samples", "Each card is a published\nsample, with its date window."),
        (DIA_ORANGE, "3. Missing names stay listed", "A missing name is listed.\nNo guessed substitute is added."),
    ]
    gap = 18
    arrow_w = 28
    n = len(steps)
    card_w = (W - 28 * 2 - (arrow_w + gap) * (n - 1) - gap * 0) // n
    y0, y1 = 92, H - 44
    x = 28
    for i, (color, title, body) in enumerate(steps):
        rounded_card(d, [x, y0, x + card_w, y1], 14, DIA_CARD, color, 3)
        ss_text(im, title, (x + 20, y0 + 22), 17, color, weight=700, anchor="lt")
        by = y0 + 58
        for line in body.split("\n"):
            ss_text(im, line, (x + 20, by), 14, DIA_BODY, weight=500, anchor="lt")
            by += 22
        if i < n - 1:
            # arrow between cards
            ax = x + card_w + (arrow_w + gap) / 2 - 4
            ay = (y0 + y1) / 2
            d.polygon(
                [(ax - 10, ay - 8), (ax + 8, ay), (ax - 10, ay + 8)],
                fill=DIA_SUB,
            )
        x += card_w + arrow_w + gap
    return im


def three_cards(im: Image.Image, cards: list[tuple]) -> None:
    d = ImageDraw.Draw(im)
    W, H = im.size
    gap = 18
    card_w = (W - 28 * 2 - gap * (len(cards) - 1)) // len(cards)
    y0, y1 = 92, H - 44
    x = 28
    for color, title, body in cards:
        rounded_card(d, [x, y0, x + card_w, y1], 14, DIA_CARD, color, 3)
        ss_text(im, title, (x + 18, y0 + 20), 16, color, weight=700, anchor="lt")
        by = y0 + 56
        for line in body.split("\n"):
            ss_text(im, line, (x + 18, by), 13, DIA_BODY, weight=500, anchor="lt")
            by += 20
        x += card_w + gap


def diagram_steam_beginner() -> Image.Image:
    W, H = 1100, 360
    im = Image.new("RGB", (W, H), DIA_BG)
    footer_and_title(
        im,
        "Steam beginner path (independent)",
        "Confirm identity and transfer first — not a day-N yield table",
    )
    three_cards(
        im,
        [
            (DIA_ORANGE, "1. Confirm first", "Confirm the account you\nwant to keep, and finish\nthe official transfer before\ntreating a Steam save as\nyour main character."),
            (DIA_GREEN, "2. Progress carries", "Official FAQ: progress,\nunclaimed rewards, event\nitems, and Epic Pass\nprogress are retained."),
            (DIA_BLUE, "3. Same account", "The same account still\nworks on STOVE PC and\nmobile. Steam can enter\nnew and existing worlds."),
        ],
    )
    return im


def diagram_steam_vs_mobile() -> Image.Image:
    W, H = 1100, 360
    im = Image.new("RGB", (W, H), DIA_BG)
    footer_and_title(
        im,
        "Steam vs mobile, official FAQ questions 4–5 (independent)",
        "Quoted official facts only — Deck, achievements, and performance are left blank",
    )
    three_cards(
        im,
        [
            (DIA_GREEN, "Same game and prices", "Cross-play is supported.\nGameplay experience is the\nsame, and prices have no\nplatform difference."),
            (DIA_BLUE, "Same PC requirements", "Steam system requirements\nmatch the STOVE PC client.\nUNCHEATER is a Steam\nclient install expectation."),
            (DIA_ORANGE, "Some schedules differ", "Steam can enter new and\nexisting worlds. Official\nexample: World Arena\nmatchmaking is new-world\nonly."),
        ],
    )
    return im


def diagram_summon_calculator() -> Image.Image:
    W, H = 1100, 400
    im = Image.new("RGB", (W, H), DIA_BG)
    d = ImageDraw.Draw(im)
    footer_and_title(
        im,
        "Current official pickup only (independent)",
        "Bunny Girl Maid Cecilia & Covert Service — 26 Nov 03:00 to 17 Dec 02:59 UTC",
    )
    cards = [
        (DIA_BLUE, "Featured 5★ at 1%", "Bunny Girl Maid Cecilia\nis raised to 1%. No other\n5★ hero can appear."),
        (DIA_GREEN, "120, then guaranteed", "Each summon lowers the\ncounter by 1 (max 120).\nThe next pull after 120\nmisses is 100%."),
        (DIA_ORANGE, "Expires on time", "After 17 Dec 02:59 UTC\nthe tool must show these\nrules have expired. It does\nnot auto-apply a later\nbanner."),
    ]
    gap = 18
    card_w = (W - 28 * 2 - gap * 2) // 3
    y0, y1 = 92, H - 92
    x = 28
    for color, title, body in cards:
        rounded_card(d, [x, y0, x + card_w, y1], 14, DIA_CARD, color, 3)
        ss_text(im, title, (x + 18, y0 + 20), 17, color, weight=700, anchor="lt")
        by = y0 + 56
        for line in body.split("\n"):
            ss_text(im, line, (x + 18, by), 13, DIA_BODY, weight=500, anchor="lt")
            by += 22
        x += card_w + gap
    rounded_card(d, [28, H - 80, W - 28, H - 36], 12, DIA_CARD, (90, 110, 150), 2)
    ss_text(
        im,
        "Featured pull resets the counter. No moonlight on this banner. Regular covenant summons can still be used. No 3★/4★/artifact rates here.",
        (44, H - 58),
        13,
        DIA_BODY,
        weight=500,
        anchor="lt",
    )
    return im



def diagram_already_registered() -> Image.Image:
    W, H = 1100, 360
    im = Image.new("RGB", (W, H), DIA_BG)
    footer_and_title(
        im,
        "Already registered or a greyed-out Transfer button (independent)",
        "Two official wordings are restated side by side — this page does not pick one",
    )
    three_cards(
        im,
        [
            (DIA_ORANGE, "Already registered", "Official wording: “This information\nhas already been registered.\nPlease start over.” A temporary\nSteam account already exists,\nso you cannot transfer onto it."),
            (DIA_BLUE, "Two official wordings", "FAQ Q3 is Convert only.\nThe account guide also says\nregister, then withdraw, and\nfollow its current-Steam steps.\nThis page does not pick one."),
            (DIA_GREEN, "Greyed-out button", "Only if you already transferred\nin the last 3 months: wait 3\nmonths from that date, then\ncontinue in STOVE > [My Info].\nNot a first-bind default wait."),
        ],
    )
    return im


def diagram_wrong_bind() -> Image.Image:
    W, H = 1100, 360
    im = Image.new("RGB", (W, H), DIA_BG)
    footer_and_title(
        im,
        "Steam opened a new account — recover STOVE progress (independent)",
        "Official FAQ Q3 is the Convert sequence; Q3 does not require withdrawal",
    )
    three_cards(
        im,
        [
            (DIA_ORANGE, "New Steam account", "Official FAQ Q3: if Steam\nalready opened a new account,\nyou can still return to your\noriginal email or SNS login."),
            (DIA_GREEN, "Q3 Convert sequence", "Register via Steam login if\nneeded, convert the temporary\naccount to a non-Steam login,\nthen convert the original\nemail/SNS login to Steam."),
            (DIA_BLUE, "Temporary-account note", "The account guide: a first\nlaunch can create a temporary\nSteam account. If it is not\nattached to STOVE, access and\nCS help may not be possible."),
        ],
    )
    return im


def diagram_transfer_vs_foundry() -> Image.Image:
    W, H = 1100, 360
    im = Image.new("RGB", (W, H), DIA_BG)
    footer_and_title(
        im,
        "Transferring your login is not moving to Foundry (independent)",
        "Official FAQ Q4: Steam can still enter new and existing worlds",
    )
    three_cards(
        im,
        [
            (DIA_BLUE, "Login transfer", "Converting your login only\nchanges how you sign in\n(email/SNS → Steam) and keeps\nlegacy-server progress."),
            (DIA_ORANGE, "Foundry is separate", "Foundry is a new server you\nopt into on purpose. Transfer\nitself does not move an old\nHeir onto Foundry."),
            (DIA_GREEN, "New and existing worlds", "Official FAQ Q4: after a\nSteam conversion you can still\nenter the new world and\nexisting worlds — not only\nthe new world."),
        ],
    )
    return im



def diagram_epic_road() -> Image.Image:
    W, H = 1100, 360
    im = Image.new("RGB", (W, H), DIA_BG)
    footer_and_title(
        im,
        "Epic Road and Record of the Journey (independent)",
        "Shared window: 29 Oct after maintenance – 10 Dec 2026, 02:59 UTC",
    )
    three_cards(
        im,
        [
            (DIA_BLUE, "Shared entry", "Lobby > Event > Special Event.\nBoth events share one window.\nThis diagram is not a board\nor attendance-grid copy."),
            (DIA_GREEN, "Epic Road path", "Spend Faint Guiding Stones\nfrom missions or the Attendance\nBook. Light connected slots\nleft to right. Grace: 7 days\nbefore the end; missions close."),
            (DIA_ORANGE, "42-day check-in", "Log in 42 days for cumulative\nrewards. A special reward is\nadded every 7 days. Grace is\nfor catch-up check-ins only."),
        ],
    )
    return im


def diagram_e7wc_grand_final() -> Image.Image:
    W, H = 1100, 360
    im = Image.new("RGB", (W, H), DIA_BG)
    footer_and_title(
        im,
        "E7WC 2026 Grand Final and cheer comment event (independent)",
        "Cheer comment window ended 28 Nov 2026, 09:00 UTC — not a prediction board",
    )
    three_cards(
        im,
        [
            (DIA_GREEN, "Cheer window has ended", "The comment window ran\nfrom 26 Nov through\n28 Nov 2026, 09:00 UTC\nand is now closed."),
            (DIA_BLUE, "Grand Final day", "28 Nov 2026, 03:00 UTC:\nWinners Bracket Finals,\nLosers Bracket Finals,\nand the Grand Final."),
            (DIA_ORANGE, "Participant reward", "All valid participants: 2 Leif,\nsent to the in-game mailbox\non 4 Dec 2026 (Fri),\nstored for 7 days."),
        ],
    )
    return im


def diagram_call_of_chaos() -> Image.Image:
    W, H = 1100, 360
    im = Image.new("RGB", (W, H), DIA_BG)
    footer_and_title(
        im,
        "Call of Chaos Season 2 windows (independent)",
        "Winter 2026 is unified across servers on KST clocks — not a roster tier list",
    )
    three_cards(
        im,
        [
            (DIA_BLUE, "How to enter", "Arena screen, bottom-left\nbanner: The Call of Chaos.\nAccount Rank 20 or higher."),
            (DIA_GREEN, "Season window", "19 Nov after maintenance\nto 10 Dec 2026, 02:59 UTC.\nDraft Arena is unavailable\nwhile the season is active."),
            (DIA_ORANGE, "Grace period", "10 Dec 03:00 – 17 Dec 02:59\nUTC. You can enter, but you\ncannot start a new Challenge.\nClaim rank rewards then."),
        ],
    )
    return im


def main() -> None:
    AVATAR_DIR.mkdir(parents=True, exist_ok=True)
    for slug, letters, tint in LIBRARY_NEW + SAMPLE_ONLY:
        write_avatar(slug, letters, tint)
    write_diagram("diagram-gear-score-formula.webp", diagram_gear_score())
    write_diagram("diagram-hero-builds-library.webp", diagram_hero_builds())
    write_diagram("diagram-team-builder-flow.webp", diagram_team_builder())
    write_diagram("diagram-steam-beginner.webp", diagram_steam_beginner())
    write_diagram("diagram-steam-vs-mobile.webp", diagram_steam_vs_mobile())
    write_diagram("diagram-summon-calculator.webp", diagram_summon_calculator())
    write_diagram("diagram-already-registered.webp", diagram_already_registered())
    write_diagram("diagram-wrong-bind.webp", diagram_wrong_bind())
    write_diagram("diagram-transfer-vs-foundry.webp", diagram_transfer_vs_foundry())
    write_diagram("diagram-epic-road.webp", diagram_epic_road())
    write_diagram("diagram-e7wc-grand-final.webp", diagram_e7wc_grand_final())
    write_diagram("diagram-call-of-chaos.webp", diagram_call_of_chaos())


if __name__ == "__main__":
    main()
