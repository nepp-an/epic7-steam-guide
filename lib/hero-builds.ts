/** Sourced English hero-build library. Do not invent sets, floors, or artifacts. */

import {
  TIER_PVE_ABYSS91_APPEARANCE,
  TIER_PVE_ABYSS91_TEAMS,
  TIER_PVE_BANSHEE_HELL_APPEARANCE,
  TIER_PVE_BANSHEE_HELL_TEAMS,
  TIER_PVE_EXPEDITION_APPEARANCE,
  TIER_PVE_EXPEDITION_TEAMS,
  TIER_PVE_PHERUS_S3_APPEARANCE,
  TIER_PVE_PHERUS_S3_TEAMS,
  TIER_PVE_SS_ROWS,
  TIER_PVE_WYVERN_APPEARANCE,
  TIER_PVE_WYVERN_HELL_APPEARANCE,
  TIER_PVE_WYVERN_HELL_TEAMS,
  TIER_PVE_WYVERN_TEAMS,
  TIER_RESOURCES_CHECKED,
  TIER_WA_ROWS,
  TIER_WA_S_SAMPLE,
  type TierPveTeam,
} from './i18n/tier-resources.ts';

export const HERO_CLASSES = [
  'Knight',
  'Warrior',
  'Mage',
  'Ranger',
  'Soul Weaver',
  'Thief',
] as const;

export const HERO_ELEMENTS = ['Fire', 'Ice', 'Earth', 'Light', 'Dark'] as const;

export const HERO_GROUPS = [
  'tutorial',
  'specialty',
  'farmer',
  'mode-example',
  'dated-clear',
] as const;

export type HeroClass = (typeof HERO_CLASSES)[number];
export type HeroElement = (typeof HERO_ELEMENTS)[number];
export type HeroGroup = (typeof HERO_GROUPS)[number];

export type HeroSourceRef = {
  label: string;
  href: string;
  date: string;
};

export type HideoutSample = {
  panel: string;
  window: string;
  rate?: string;
  teams?: string[];
  href: string;
  checked: string;
};

export type HeroBuild = {
  slug: string;
  name: string;
  class?: HeroClass;
  element?: HeroElement;
  group: HeroGroup;
  roles: string[];
  job?: string;
  summary: string;
  statPriority?: { text: string; source: string };
  artifact?: { text: string; source: string };
  hideout: HideoutSample[];
  sources: HeroSourceRef[];
  limits: string;
};

export const HIDEOUT_HUNTS = 'https://www.hideoutgacha.com/games/epic-seven/hunts';
export const HIDEOUT_EXPEDITION = 'https://www.hideoutgacha.com/games/epic-seven/expedition';
export const SITE_HEROES = '/heroes/';
export const SITE_STEAM_TIER = '/steam-tier-list/';
export const SITE_TIER = '/tier-list/';

const ON_SITE_2026_11_26: HeroSourceRef[] = [
  { label: 'Heroes page (unofficial on-site cards)', href: SITE_HEROES, date: '2026-11-26' },
  { label: 'Steam build-priority notes', href: SITE_STEAM_TIER, date: '2026-11-26' },
];

const MODE_EXAMPLE_SOURCES: HeroSourceRef[] = [
  { label: 'Steam build-priority notes', href: SITE_STEAM_TIER, date: '2026-11-26' },
];

const WINDOW_LIVE = '12 November–18 November 2026';
const WINDOW_TIER = '29 October–4 November 2026 (page checked 2026-11-13)';
const WINDOW_ABYSS91 = '7 August–4 November 2026 (page checked 2026-11-13)';

export const LIBRARY_HERO_BUILDS: readonly HeroBuild[] = [
  {
    slug: 'ras',
    name: 'Ras',
    class: 'Knight',
    element: 'Fire',
    group: 'tutorial',
    roles: ['Tank', 'Story lead'],
    job: 'Guild War tank (budget / free option)',
    summary:
      'Free story knight and early tank while you learn the systems. On a Steam/Foundry account he is a serviceable Guild War body when you have no premium tank. This is this site’s unofficial summary, not an official kit page.',
    hideout: [],
    sources: ON_SITE_2026_11_26,
    limits:
      'No sourced set, stat-floor, or artifact recommendation on this page. He did not appear in the Hideout hunt samples read on 26 November 2026.',
  },
  {
    slug: 'mercedes',
    name: 'Mercedes',
    class: 'Mage',
    element: 'Fire',
    group: 'tutorial',
    roles: ['AoE', 'Early clear'],
    summary:
      'Starter AoE mage. Fine for early Adventure clears; not a priority once a real farmer is online. Unofficial on-site summary.',
    hideout: [],
    sources: ON_SITE_2026_11_26,
    limits:
      'No sourced set, stat-floor, or artifact recommendation. Not in the Hideout samples read on 26 November 2026.',
  },
  {
    slug: 'aither',
    name: 'Aither',
    class: 'Soul Weaver',
    element: 'Ice',
    group: 'tutorial',
    roles: ['Heal', 'Starter Soul Weaver'],
    summary:
      'Early healer from the starter path. This site’s Steam notes say to move toward Angelic Montmorancy or another cleanse support as soon as you can. Unofficial summary.',
    hideout: [],
    sources: ON_SITE_2026_11_26,
    limits:
      'No sourced set, stat-floor, or artifact recommendation. Not in the Hideout samples read on 26 November 2026.',
  },
  {
    slug: 'judith',
    name: 'Judith',
    class: 'Thief',
    element: 'Fire',
    group: 'tutorial',
    roles: ['CR push', 'Opener'],
    job: 'World Arena speed opener (budget / free option)',
    summary:
      'Free combat-readiness pusher. A budget World Arena opener until you own a premium speed unit. Unofficial on-site summary.',
    statPriority: {
      text: 'The Steam 14-day plan says to put your best speed gear on the opener. That is a general account plan, not a numeric speed floor for Judith.',
      source: '/steam-tier-list/',
    },
    hideout: [],
    sources: ON_SITE_2026_11_26,
    limits:
      'No sourced named set or artifact. Not in the Hideout samples read on 26 November 2026.',
  },
  {
    slug: 'angelic-montmorancy',
    name: 'Angelic Montmorancy',
    class: 'Soul Weaver',
    element: 'Ice',
    group: 'specialty',
    roles: ['Cleanse', 'Heal'],
    job: 'Cleanse + heal (budget / free option)',
    summary:
      'Specialty change from Montmorancy. This site treats her as the free cleanse and heal backbone for early PvE, and as the single best early support investment on a constrained account. Unofficial summary. A dated source sample quoted on the tier-list resource page listed her as Ice Soul Weaver 3★; that rarity was not independently re-checked from an official notice today.',
    hideout: [],
    sources: [
      ...ON_SITE_2026_11_26,
      { label: 'Tier-list resource page (quoted SS-row sample)', href: SITE_TIER, date: '2026-11-13' },
    ],
    limits:
      'No sourced set, stat-floor, or artifact recommendation. Official STOVE skill notices could not be read this pass (service unavailable or store redirect). She was not in the Hideout hunt most-used lists opened on 26 November 2026.',
  },
  {
    slug: 'falconer-kluri',
    name: 'Falconer Kluri',
    class: 'Knight',
    element: 'Earth',
    group: 'specialty',
    roles: ['Defense break', 'Combat readiness'],
    job: 'Defense break + CR (budget / free option)',
    summary:
      'Specialty-change support with defense break and combat-readiness tools. This site’s Steam notes say she opens Hunt and Guild War offense without premium gear. Unofficial summary.',
    hideout: [],
    sources: ON_SITE_2026_11_26,
    limits:
      'No sourced set, stat-floor, or artifact recommendation. Not in the Hideout samples read on 26 November 2026.',
  },
  {
    slug: 'commander-lorina',
    name: 'Commander Lorina',
    class: 'Warrior',
    element: 'Dark',
    group: 'specialty',
    roles: ['Single-target DPS', 'Abyss'],
    job: 'Single-target damage (budget / free option)',
    summary:
      'Specialty-change single-target damage dealer. This site’s notes call her slow to build but a long-term PvE answer that does not need a limited banner. Unofficial summary.',
    hideout: [
      {
        panel: 'Wyvern · Normal',
        window: WINDOW_LIVE,
        teams: ['Team 14: Sigret, Ran, Destina, Commander Lorina — 1.41% of clears'],
        href: HIDEOUT_HUNTS,
        checked: '2026-11-26',
      },
    ],
    sources: [
      ...ON_SITE_2026_11_26,
      { label: 'Hideout Hunt Teams (Wyvern · Normal)', href: HIDEOUT_HUNTS, date: '2026-11-26' },
    ],
    limits:
      'No sourced set or artifact recipe. The Hideout line is a share of listed clears in one window, not a win rate or a gear guide.',
  },
  {
    slug: 'alexa',
    name: 'Alexa',
    class: 'Thief',
    element: 'Ice',
    group: 'farmer',
    roles: ['Farmer', 'Wyvern'],
    job: 'Wyvern farmer (budget / free option)',
    summary:
      'This site’s unofficial heroes brief describes her as a common Wyvern 11 dual-attack farmer when built with speed / crit kits. Steam notes say to build her for that one job, then stop; she is not treated here as a Guild War or World Arena pick. Do not confuse her with Summer’s Disciple Alexa, a different unit on Hideout.',
    statPriority: {
      text: 'On-site unofficial brief only: speed / crit kits. No numeric speed or crit floor is published here.',
      source: '/heroes/',
    },
    hideout: [],
    sources: ON_SITE_2026_11_26,
    limits:
      'No named set recipe and no sourced artifact. Regular Alexa was not in the Hideout Wyvern · Normal or Wyvern · Hell most-used 20 opened on 26 November 2026; that Hell list had Summer’s Disciple Alexa instead, which is not this card.',
  },
  {
    slug: 'furious',
    name: 'Furious',
    class: 'Ranger',
    element: 'Ice',
    group: 'farmer',
    roles: ['Defense break', 'Target'],
    summary:
      'Defense break and target for Wyvern compositions. This site’s Steam notes treat him as a PvE enabler and keep him on the PvE side of the account. Unofficial summary.',
    artifact: {
      text: 'On the tier-list resource page, Hideout Wyvern · Normal Team 1 in the 29 October–4 November 2026 window (checked 2026-11-13) listed Furious with Song of Stars. That is one dated team observation, not an official or general recommendation.',
      source: '/tier-list/',
    },
    hideout: [
      {
        panel: 'Wyvern · Normal',
        window: WINDOW_LIVE,
        rate: '18.8% of the most-used list',
        teams: [
          'Team 3: Furious, Renoa, Shepherd of the Dark Diene, Leah — 2.47%',
          'Team 4: Furious, Sigret, Brieg, Muwi — 2.11%',
          'Also listed on teams 8, 9, 10, 16, and 18',
        ],
        href: HIDEOUT_HUNTS,
        checked: '2026-11-26',
      },
      {
        panel: 'Wyvern · Hell',
        window: WINDOW_LIVE,
        rate: '49.3% of the most-used list',
        teams: [
          'Team 1: Brieg, Sigret, Furious, Muwi — 14.46% of clears',
          'Team 2: Brieg, Furious, Fenne, Muwi — 6.62%',
        ],
        href: HIDEOUT_HUNTS,
        checked: '2026-11-26',
      },
      {
        panel: 'Wyvern · Hell (older on-site sample)',
        window: WINDOW_TIER,
        rate: '49.7% appearance on the page checked 2026-11-13',
        teams: ['Top listed team included Furious with Brieg, Sigret, and Muwi'],
        href: SITE_TIER,
        checked: '2026-11-13',
      },
      {
        panel: 'Brutal Pherus · Stage 1',
        window: WINDOW_LIVE,
        rate: '7.41% of the most-used list',
        teams: ['Team 8: Brieg, Furious, Fenne, Muwi — 1.85%'],
        href: HIDEOUT_EXPEDITION,
        checked: '2026-11-26',
      },
    ],
    sources: [
      ...ON_SITE_2026_11_26,
      { label: 'Hideout Hunt Teams (Wyvern · Normal and Hell)', href: HIDEOUT_HUNTS, date: '2026-11-26' },
      { label: 'Hideout Expedition (Brutal Pherus · Stage 1)', href: HIDEOUT_EXPEDITION, date: '2026-11-26' },
      { label: 'Tier-list resource page (older Hideout window + Team 1 artifact)', href: SITE_TIER, date: '2026-11-13' },
    ],
    limits:
      'Shares of clears are not win rates. Hideout “most used sets” tables were not copied. The Song of Stars line is only the dated Team 1 observation already published on this site.',
  },
  {
    slug: 'silk',
    name: 'Silk',
    class: 'Ranger',
    element: 'Earth',
    group: 'farmer',
    roles: ['CR push', 'Cleave'],
    job: 'World Arena speed opener (budget / free option)',
    summary:
      'Free combat-readiness push. Useful while you lack a speed opener; this site’s notes say to replace her rather than over-invest. Unofficial summary.',
    hideout: [],
    sources: ON_SITE_2026_11_26,
    limits:
      'No sourced set, stat-floor, or artifact recommendation. Not in the Hideout samples read on 26 November 2026.',
  },
  {
    slug: 'vildred',
    name: 'Vildred',
    class: 'Thief',
    element: 'Earth',
    group: 'farmer',
    roles: ['Cleave', 'Adventure'],
    summary:
      'Popular Earth cleave damage from Covenant summons. This site’s notes say he speeds story and some PvE farms, and that he falls off in a serious World Arena draft. Unofficial summary. He is not Arbiter Vildred.',
    hideout: [
      {
        panel: 'Banshee · Hell',
        window: WINDOW_LIVE,
        rate: '6.07% of the most-used list',
        href: HIDEOUT_HUNTS,
        checked: '2026-11-26',
      },
      {
        panel: 'Brutal Pherus · Stage 1',
        window: WINDOW_LIVE,
        rate: '13.0% of the most-used list',
        teams: ['Team 1: Arbiter Vildred, Vildred, Eligos, Lisette — 11.42% of clears'],
        href: HIDEOUT_EXPEDITION,
        checked: '2026-11-26',
      },
    ],
    sources: [
      ...ON_SITE_2026_11_26,
      { label: 'Hideout Hunt Teams (Banshee · Hell)', href: HIDEOUT_HUNTS, date: '2026-11-26' },
      { label: 'Hideout Expedition (Brutal Pherus · Stage 1)', href: HIDEOUT_EXPEDITION, date: '2026-11-26' },
    ],
    limits:
      'No sourced set or artifact recipe. Appearance figures are sample shares, not grades.',
  },
  {
    slug: 'luna',
    name: 'Luna',
    class: 'Mage',
    element: 'Ice',
    group: 'farmer',
    roles: ['Foundry path', 'Rank 70'],
    summary:
      'This site’s Foundry notes often highlight a limited Luna join around Rank 70 — confirm that on STOVE. The Steam notes call her strong PvE damage, not a universal Guild War or World Arena answer. Unofficial summary. She is not New Moon Luna.',
    hideout: [
      {
        panel: 'Wyvern · Normal',
        window: WINDOW_LIVE,
        rate: '7.30% of the most-used list',
        teams: ['Team 13: Free Spirit Tieria, Luna, Sigret, Holiday Yufine — 1.41%'],
        href: HIDEOUT_HUNTS,
        checked: '2026-11-26',
      },
      {
        panel: 'Wyvern · Hell',
        window: WINDOW_LIVE,
        rate: '3.38% of the most-used list',
        href: HIDEOUT_HUNTS,
        checked: '2026-11-26',
      },
      {
        panel: 'Brutal Pherus · Stage 1',
        window: WINDOW_LIVE,
        rate: '13.9% of the most-used list',
        teams: ['Listed on Stage 1 teams 4, 9, and 10'],
        href: HIDEOUT_EXPEDITION,
        checked: '2026-11-26',
      },
      {
        panel: 'Brutal Pherus · Stage 3 (older on-site sample)',
        window: WINDOW_TIER,
        rate: '26.8% appearance on the page checked 2026-11-13',
        teams: ['Team 3 in that sample included Brieg, Luna, Tamarinne, and Taranor Guard'],
        href: SITE_TIER,
        checked: '2026-11-13',
      },
    ],
    sources: [
      ...ON_SITE_2026_11_26,
      { label: 'Hideout Hunt Teams', href: HIDEOUT_HUNTS, date: '2026-11-26' },
      { label: 'Hideout Expedition (Brutal Pherus · Stage 1)', href: HIDEOUT_EXPEDITION, date: '2026-11-26' },
      { label: 'Tier-list resource page (Pherus · Stage 3 sample)', href: SITE_TIER, date: '2026-11-13' },
    ],
    limits:
      'Stage 1 and Stage 3 figures are kept separate. No sourced set or artifact recipe.',
  },
  {
    slug: 'tamarinne',
    name: 'Tamarinne',
    class: 'Soul Weaver',
    element: 'Fire',
    group: 'mode-example',
    roles: ['Heal', 'Cleanse', 'Combat readiness'],
    summary:
      'Heal, cleanse, and combat readiness in one slot. This site’s Steam notes call her the usual upgrade path from Aither or Angelic Montmorancy for players who already own her. A dated source sample quoted on the tier-list page listed her as Fire Soul Weaver 5★. Unofficial summary, not a banner-chase instruction.',
    hideout: [
      {
        panel: 'Wyvern · Normal',
        window: WINDOW_LIVE,
        teams: ['Team 11: Bunny Girl Mafia Yufine, Tamarinne, Aria, Blood Blade Karin — 1.45%'],
        href: HIDEOUT_HUNTS,
        checked: '2026-11-26',
      },
      {
        panel: 'Banshee · Hell',
        window: WINDOW_LIVE,
        rate: '10.7% of the most-used list',
        teams: ['Team 2: Vivian, Tamarinne, Landy, Brieg — 3.03%', 'Also listed on teams 4, 9, and 20'],
        href: HIDEOUT_HUNTS,
        checked: '2026-11-26',
      },
      {
        panel: 'Brutal Pherus · Stage 1',
        window: WINDOW_LIVE,
        rate: '35.8% of the most-used list',
        href: HIDEOUT_EXPEDITION,
        checked: '2026-11-26',
      },
      {
        panel: 'Brutal Pherus · Stage 3 (older on-site sample)',
        window: WINDOW_TIER,
        rate: '67.2% appearance on the page checked 2026-11-13',
        href: SITE_TIER,
        checked: '2026-11-13',
      },
      {
        panel: 'Abyss Floor 91 (older on-site sample)',
        window: WINDOW_ABYSS91,
        rate: '56.7% appearance on the page checked 2026-11-13',
        teams: ['Top listed teams in that sample included Tamarinne'],
        href: SITE_TIER,
        checked: '2026-11-13',
      },
    ],
    sources: [
      ...MODE_EXAMPLE_SOURCES,
      { label: 'Hideout Hunts and Expedition (Stage 1)', href: HIDEOUT_HUNTS, date: '2026-11-26' },
      { label: 'Tier-list resource page (Stage 3 and Abyss 91 samples)', href: SITE_TIER, date: '2026-11-13' },
    ],
    limits:
      'No sourced set or artifact recipe. Today’s live Hideout Abyss default was Floor 1 and is not used as the Floor 91 figure. Stage 1 and Stage 3 are not mixed.',
  },
  {
    slug: 'fallen-cecilia',
    name: 'Fallen Cecilia',
    class: 'Knight',
    element: 'Dark',
    group: 'mode-example',
    roles: ['Tank', 'Guild War defense'],
    job: 'Guild War tank (upgrade if already owned)',
    summary:
      'Dark knight built for Guild War defense in this site’s Steam notes. If you already own her, those notes say she is usually the first tank you gear; Ras is the free early stand-in. Not a banner-chase instruction.',
    hideout: [],
    sources: MODE_EXAMPLE_SOURCES,
    limits:
      'No sourced set, stat-floor, or artifact. She was not in the Hideout PvE samples read on 26 November 2026, and she is not in the quoted top Guild War lineups on the tier-list resource page.',
  },
  {
    slug: 'ruele-of-light',
    name: 'Ruele of Light',
    class: 'Soul Weaver',
    element: 'Light',
    group: 'mode-example',
    roles: ['Revive', 'Cleanse', 'Guild War defense'],
    job: 'Revive / Guild War defense (use if already owned)',
    summary:
      'Revive and cleanse defensive support. This site’s Steam notes call her a Guild War defense staple when paired with a real tank, and say not to chase a banner for a defense slot you cannot gear. The tier-list resource page quotes a source editorial “against burst” team that includes her; that is the source’s list, not our grade.',
    hideout: [
      {
        panel: 'Wyvern · Normal',
        window: WINDOW_LIVE,
        teams: [
          'Team 5: Bunny Girl Mafia Yufine, Ruele of Light, Setsuka, Lady of the Scales — 2.11%',
          'Team 7: Bunny Girl Mafia Yufine, Ruele of Light, Lionheart Cermia, Lady of the Scales — 1.80%',
        ],
        href: HIDEOUT_HUNTS,
        checked: '2026-11-26',
      },
    ],
    sources: [
      ...MODE_EXAMPLE_SOURCES,
      { label: 'Hideout Hunt Teams (Wyvern · Normal)', href: HIDEOUT_HUNTS, date: '2026-11-26' },
      { label: 'Tier-list resource page (quoted GW editorial team)', href: SITE_TIER, date: '2026-11-13' },
    ],
    limits:
      'No sourced set or artifact recipe. Hunt-sample appearance is not a gear guide.',
  },
  {
    slug: 'seaside-bellona',
    name: 'Seaside Bellona',
    class: 'Ranger',
    element: 'Ice',
    group: 'mode-example',
    roles: ['AoE', 'Debuff'],
    summary:
      'This site’s Steam notes describe her as AoE debuff damage that can work in PvE and both PvP modes, and as flexible but gear-hungry. Unofficial summary.',
    hideout: [
      {
        panel: 'Wyvern · Hell',
        window: WINDOW_LIVE,
        rate: '10.3% of the most-used list',
        teams: [
          'Team 6: Seaside Bellona, Rem, Sinful Angelica, Camilla — 1.45%',
          'Also listed on teams 9 and 14',
        ],
        href: HIDEOUT_HUNTS,
        checked: '2026-11-26',
      },
      {
        panel: 'Brutal Pherus · Stage 1',
        window: WINDOW_LIVE,
        rate: '6.48% of the most-used list',
        teams: ['Listed on Stage 1 teams 9 and 10'],
        href: HIDEOUT_EXPEDITION,
        checked: '2026-11-26',
      },
    ],
    sources: [
      ...MODE_EXAMPLE_SOURCES,
      { label: 'Hideout Hunt Teams (Wyvern · Hell)', href: HIDEOUT_HUNTS, date: '2026-11-26' },
      { label: 'Hideout Expedition (Brutal Pherus · Stage 1)', href: HIDEOUT_EXPEDITION, date: '2026-11-26' },
    ],
    limits: 'No sourced set or artifact recipe. Appearance figures are sample shares, not grades.',
  },
  {
    slug: 'specter-tenebria',
    name: 'Specter Tenebria',
    class: 'Mage',
    element: 'Dark',
    group: 'mode-example',
    roles: ['Single-target', 'Debuff', 'Guild War / World Arena'],
    summary:
      'Single-target dark damage with debuff pressure in this site’s Steam notes. Those notes call her a Guild War / World Arena pick, not a starter farmer. A dated source sample quoted on the tier-list page listed her as Dark Mage 5★.',
    hideout: [
      {
        panel: 'Wyvern · Normal',
        window: WINDOW_LIVE,
        teams: ['Team 19: Free Spirit Tieria, Angelica, Landy, Specter Tenebria — 0.92%'],
        href: HIDEOUT_HUNTS,
        checked: '2026-11-26',
      },
    ],
    sources: [
      ...MODE_EXAMPLE_SOURCES,
      { label: 'Hideout Hunt Teams (Wyvern · Normal)', href: HIDEOUT_HUNTS, date: '2026-11-26' },
      { label: 'Tier-list resource page (quoted SS-row and older Wyvern sample)', href: SITE_TIER, date: '2026-11-13' },
    ],
    limits: 'No sourced set or artifact recipe.',
  },
  {
    slug: 'arbiter-vildred',
    name: 'Arbiter Vildred',
    class: 'Thief',
    element: 'Dark',
    group: 'mode-example',
    roles: ['Cleave', 'World Arena opener'],
    summary:
      'Cleave and revive threat, and a common World Arena opener in this site’s Steam notes. Those notes also say he is expensive to gear and should not be chased before a PvE core is online. He is not Vildred.',
    hideout: [
      {
        panel: 'Wyvern · Normal',
        window: WINDOW_LIVE,
        rate: '6.66% of the most-used list',
        teams: [
          'Team 6: Free Spirit Tieria, Frieren, Arbiter Vildred, Successor Taeyou — 2.04%',
          'Team 10: Furious, Arbiter Vildred, Successor Taeyou, Free Spirit Tieria — 1.48%',
        ],
        href: HIDEOUT_HUNTS,
        checked: '2026-11-26',
      },
      {
        panel: 'Banshee · Hell',
        window: WINDOW_LIVE,
        rate: '4.31% of the most-used list',
        href: HIDEOUT_HUNTS,
        checked: '2026-11-26',
      },
      {
        panel: 'Brutal Pherus · Stage 1',
        window: WINDOW_LIVE,
        rate: '22.8% of the most-used list',
        teams: ['Team 1: Arbiter Vildred, Vildred, Eligos, Lisette — 11.42% of clears'],
        href: HIDEOUT_EXPEDITION,
        checked: '2026-11-26',
      },
      {
        panel: 'Abyss Floor 91 (older on-site sample)',
        window: WINDOW_ABYSS91,
        rate: '28.5% appearance on the page checked 2026-11-13',
        teams: ['Team 1 in that sample: Fenne, Tamarinne, Brieg, Arbiter Vildred — 14.48% of clears'],
        href: SITE_TIER,
        checked: '2026-11-13',
      },
    ],
    sources: [
      ...MODE_EXAMPLE_SOURCES,
      { label: 'Hideout Hunts and Expedition (Stage 1)', href: HIDEOUT_HUNTS, date: '2026-11-26' },
      { label: 'Tier-list resource page (Abyss 91 sample)', href: SITE_TIER, date: '2026-11-13' },
    ],
    limits:
      'No sourced set or artifact recipe. Today’s live Hideout Abyss default was Floor 1 (a different floor) and is not used as the Floor 91 figure.',
  },
  {
    slug: 'politis',
    name: 'Politis',
    class: 'Mage',
    element: 'Earth',
    group: 'mode-example',
    roles: ['Anti-cleave', 'Combat-readiness disruption'],
    summary:
      'Anti-cleave and combat-readiness disruption in this site’s Steam notes: a World Arena answer to speed drafts, and niche in PvE. Unofficial summary. She is not Sea Phantom Politis or Uncharted Pioneer Politis.',
    hideout: [],
    sources: MODE_EXAMPLE_SOURCES,
    limits:
      'No sourced set, stat-floor, or artifact. The exact name “Politis” was not in the Hideout hunt most-used lists opened on 26 November 2026.',
  },
  {
    slug: 'cerise',
    name: 'Cerise',
    class: 'Ranger',
    element: 'Ice',
    group: 'mode-example',
    roles: ['Control', 'World Arena opener'],
    job: 'World Arena control (verify the current patch)',
    summary:
      'Control opener for World Arena in this site’s Steam notes. Those notes say she is strong when the draft lets her act first, and to verify the current patch before investing. Unofficial summary, not a banner-chase instruction.',
    hideout: [],
    sources: MODE_EXAMPLE_SOURCES,
    limits:
      'No sourced set, stat-floor, or artifact. Not in the Hideout PvE samples read on 26 November 2026.',
  },
];

export const DATED_CLEAR_LABEL =
  'Dated clear appearance sample — no on-site build recipe';

const HIDEOUT_ABYSS = 'https://www.hideoutgacha.com/games/epic-seven/abyss';

type DatedClearPanel = {
  panel: string;
  window: string;
  href: string;
  sourceHref: string;
  teams: readonly TierPveTeam[];
  appearance: readonly { hero: string; rate: string }[];
};

const DATED_CLEAR_PANELS: readonly DatedClearPanel[] = [
  {
    panel: 'Wyvern · Hell',
    window: WINDOW_TIER,
    href: '/tier-list/#wyvern-hell',
    sourceHref: HIDEOUT_HUNTS,
    teams: TIER_PVE_WYVERN_HELL_TEAMS,
    appearance: TIER_PVE_WYVERN_HELL_APPEARANCE,
  },
  {
    panel: 'Banshee · Hell',
    window: WINDOW_TIER,
    href: '/tier-list/#banshee-hell',
    sourceHref: HIDEOUT_HUNTS,
    teams: TIER_PVE_BANSHEE_HELL_TEAMS,
    appearance: TIER_PVE_BANSHEE_HELL_APPEARANCE,
  },
  {
    panel: 'Brutal Pherus · Stage 3',
    window: WINDOW_TIER,
    href: '/tier-list/#pherus-3',
    sourceHref: HIDEOUT_EXPEDITION,
    teams: TIER_PVE_PHERUS_S3_TEAMS,
    appearance: TIER_PVE_PHERUS_S3_APPEARANCE,
  },
  {
    panel: 'Abyss Floor 91',
    window: WINDOW_ABYSS91,
    href: '/tier-list/#abyss-91',
    sourceHref: HIDEOUT_ABYSS,
    teams: TIER_PVE_ABYSS91_TEAMS,
    appearance: TIER_PVE_ABYSS91_APPEARANCE,
  },
  {
    panel: 'Wyvern · Normal',
    window: WINDOW_TIER,
    href: '/tier-list/',
    sourceHref: HIDEOUT_HUNTS,
    teams: TIER_PVE_WYVERN_TEAMS,
    appearance: TIER_PVE_WYVERN_APPEARANCE,
  },
  {
    panel: 'Brutal Pherus · Stage 1',
    window: WINDOW_TIER,
    href: '/tier-list/',
    sourceHref: HIDEOUT_EXPEDITION,
    teams: TIER_PVE_EXPEDITION_TEAMS,
    appearance: TIER_PVE_EXPEDITION_APPEARANCE,
  },
];

const CLASS_TOKENS: readonly HeroClass[] = [
  'Soul Weaver',
  'Knight',
  'Warrior',
  'Mage',
  'Ranger',
  'Thief',
];

function parseClassElement(
  label: string,
): { class: HeroClass; element: HeroElement } | undefined {
  const element = HERO_ELEMENTS.find((item) => label.startsWith(`${item} `));
  if (!element) return undefined;
  const rest = label.slice(element.length + 1);
  const heroClass = CLASS_TOKENS.find((item) => rest.startsWith(item));
  if (!heroClass) return undefined;
  return { class: heroClass, element };
}

function classElementQuote(name: string): {
  class: HeroClass;
  element: HeroElement;
  label: string;
  source: string;
} | undefined {
  const ss = TIER_PVE_SS_ROWS.find((row) => row.hero === name);
  if (ss) {
    const parsed = parseClassElement(ss.classElement);
    if (parsed) {
      return {
        ...parsed,
        label: ss.classElement,
        source: 'the on-site epic7db PvE SS-band quote on the tier-list page',
      };
    }
  }
  const wa = [...TIER_WA_ROWS, ...TIER_WA_S_SAMPLE].find((row) => row.name === name);
  if (wa) {
    const parsed = parseClassElement(wa.classElement);
    if (parsed) {
      return {
        ...parsed,
        label: wa.classElement,
        source: 'an on-site World Arena sample quote on the tier-list page',
      };
    }
  }
  return undefined;
}

function slugifyHero(name: string): string {
  return name
    .toLowerCase()
    .replace(/['’]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function parsePublishedTeam(team: string): string[] {
  return team
    .split(',')
    .map((part) => part.trim())
    .filter(Boolean);
}

function buildDatedClearBuilds(): HeroBuild[] {
  const libraryNames = new Set(LIBRARY_HERO_BUILDS.map((hero) => hero.name.toLowerCase()));
  const sampleNames = new Set<string>();
  for (const panel of DATED_CLEAR_PANELS) {
    for (const row of panel.teams) {
      for (const name of parsePublishedTeam(row.team)) {
        if (!libraryNames.has(name.toLowerCase())) sampleNames.add(name);
      }
    }
  }

  const checked = TIER_RESOURCES_CHECKED;
  const cards: HeroBuild[] = [];
  for (const name of Array.from(sampleNames).sort((a, b) => a.localeCompare(b))) {
    const quote = classElementQuote(name);
    const hideout: HideoutSample[] = [];
    for (const panel of DATED_CLEAR_PANELS) {
      const listedTeams = panel.teams.filter((row) =>
        parsePublishedTeam(row.team).some((hero) => hero === name),
      );
      const appearance = panel.appearance.find((row) => row.hero === name);
      if (!listedTeams.length && !appearance) continue;
      const lines: string[] = [];
      if (appearance) {
        lines.push(
          `Appearance share in this dated window: ${appearance.rate} of clears.`,
        );
      }
      for (const row of listedTeams) {
        lines.push(
          `Listed on Team ${row.rank}: ${row.team} — ${row.share}`,
        );
      }
      hideout.push({
        panel: panel.panel,
        window: panel.window,
        teams: lines,
        href: panel.href,
        checked,
      });
    }

    const identity = quote
      ? `Class and element are quoted from ${quote.source} as “${quote.label}”; that quote is identity only, not a gear or artifact recipe.`
      : 'This site has not published a sourced class or element for this exact name, so those fields stay blank.';

    cards.push({
      slug: slugifyHero(name),
      name,
      class: quote?.class,
      element: quote?.element,
      group: 'dated-clear',
      roles: [],
      summary:
        `This is a dated clear appearance sample from this site’s tier-list tables, with no on-site build recipe. ${identity} Exact names are not merged with similarly named variants. Appearance share is not a win rate.`,
      hideout,
      sources: [
        {
          label: 'Tier-list resource page (dated Hideout clear samples)',
          href: SITE_TIER,
          date: checked,
        },
      ],
      limits:
        'Dated clear appearance sample, no on-site build recipe. Sets, stat floors, and artifact recipes are left blank on purpose. Hideout most-used set and artifact tables were not imported. Appearance share is a share of clears in a named panel and date window, not a win rate.',
    });
  }
  return cards;
}

export const DATED_CLEAR_BUILDS: readonly HeroBuild[] = buildDatedClearBuilds();

export const HERO_BUILDS: readonly HeroBuild[] = [
  ...LIBRARY_HERO_BUILDS,
  ...DATED_CLEAR_BUILDS,
];

export const HERO_GROUP_LABEL: Record<HeroGroup, string> = {
  tutorial: 'Tutorial / early leads',
  specialty: 'Specialty change',
  farmer: 'Hunt / farm openers',
  'mode-example': 'Mode examples beyond the starter 12',
  'dated-clear': 'Dated clear appearance (no on-site build recipe)',
};

export type HeroBuildFilters = {
  query: string;
  className: 'all' | HeroClass;
  element: 'all' | HeroElement;
  group: 'all' | HeroGroup;
};

export const EMPTY_HERO_FILTERS: HeroBuildFilters = {
  query: '',
  className: 'all',
  element: 'all',
  group: 'all',
};

export function normalizeSearch(value: string): string {
  return value.trim().toLowerCase();
}

export function heroMatchesQuery(hero: HeroBuild, query: string): boolean {
  const q = normalizeSearch(query);
  if (!q) return true;
  const haystack = [
    hero.name,
    hero.slug.replace(/-/g, ' '),
    hero.class,
    hero.element,
    hero.job ?? '',
    ...hero.roles,
  ]
    .join(' ')
    .toLowerCase();
  return haystack.includes(q);
}

export function filterHeroBuilds(
  heroes: readonly HeroBuild[] = HERO_BUILDS,
  filters: HeroBuildFilters = EMPTY_HERO_FILTERS,
): HeroBuild[] {
  return heroes.filter((hero) => {
    if (!heroMatchesQuery(hero, filters.query)) return false;
    if (filters.className !== 'all' && hero.class !== filters.className) return false;
    if (filters.element !== 'all' && hero.element !== filters.element) return false;
    if (filters.group !== 'all' && hero.group !== filters.group) return false;
    return true;
  });
}

export function getHeroBuild(slug: string): HeroBuild | undefined {
  return HERO_BUILDS.find((hero) => hero.slug === slug);
}
