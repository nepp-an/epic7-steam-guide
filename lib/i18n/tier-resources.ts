/**
 * English-only /tier-list/ resource page.
 *
 * This file deliberately contains source comparison and reading method, not a
 * hero ranking. Do not add S/A/B assignments here: this round did not read a
 * complete, legally reusable PvE + Guild War + World Arena ranking table.
 */

export const TIER_RESOURCES_CHECKED = '2026-11-13';

export type TierSourceRow = {
  source: string;
  modes: string;
  method: string;
  updated: string;
  checked: string;
  limits: string;
  href: string | null;
  linkLabel: string;
};

export const TIER_SOURCE_ROWS: readonly TierSourceRow[] = [
  {
    source: 'epic7db — PvE and PvP boards',
    modes: 'PvE; separate PvP board',
    method:
      'Editor picks plus input from top-ranked players; separate boards with class and rarity filters.',
    updated: 'PvE: 2025-08-28. PvP: 2026-03-28.',
    limits:
      '“Our official” means epic7db’s own board, not a Smilegate ranking. The PvE board is from August 2025; do not relabel it as a November 2026 list, and do not copy the table as ours.',
    href: 'https://epic7db.com/tier-list',
    linkLabel: 'epic7db.com/tier-list',
    checked: '2026-11-13',
  },
  {
    source: 'gacha.gg — Epic Seven tier list',
    modes: 'RTA; its overall tab still leans RTA, not all modes',
    method:
      'Mode tabs with RTA pick/ban and win-rate data, a daily movement log, and a stated method.',
    updated: 'Read the date on its RTA tab; this check did not capture one stable date.',
    limits:
      'Pick rate and usage are not all-mode strength. A low-usage unit is not automatically weak in PvE, and the overall view is not a complete PvE or Guild War table. Fetch failed (HTTP 403) on 2026-11-13; this row keeps the 2026-11-10 reading.',
    href: 'https://www.gacha.gg/epic-seven/tier-list',
    linkLabel: 'gacha.gg/epic-seven/tier-list',
    checked: '2026-11-10',
  },
  {
    source: 'hideoutgacha — Epic Seven tier list',
    modes: 'RTA (Champion+)',
    method:
      'Usage ranking from Fall 2026 Champion+ RTA with class filters and a “my roster” view. The page reports 379 heroes and 16,681,352 picks (from epic7rtastats). Those are the page’s own reported totals, not an independent recount by this site.',
    updated: 'Fall 2026 season label; exact update day not captured.',
    limits:
      'Usage is not all-mode strength, and the season/sample must not be removed from the number. It is not a Guild War or complete PvE board.',
    href: 'https://www.hideoutgacha.com/games/epic-seven/tier-list',
    linkLabel: 'hideoutgacha.com/games/epic-seven/tier-list',
    checked: '2026-11-13',
  },
  {
    source: 'hideoutgacha — Hunts (Wyvern · Normal)',
    modes: 'PvE Hunts (Wyvern · Normal community clears)',
    method:
      'Community Teams built and upvoted by players, ranked by share of clears. The visible page shows clears from 29 October 2026 to 4 November 2026.',
    updated: 'Window label: 29 October–4 November 2026.',
    limits:
      'Community, non-official. Only Wyvern · Normal yielded a stable team table this round; Hard/Hell and the other Hunts are not covered. Share of clears is not a letter grade.',
    href: 'https://www.hideoutgacha.com/games/epic-seven/hunts',
    linkLabel: 'hideoutgacha.com/games/epic-seven/hunts',
    checked: '2026-11-13',
  },
  {
    source: 'Epic Helper — RTA tier list',
    modes: 'RTA (Champion+)',
    method:
      'Live win rate and pick/ban rate, with a stated threshold for its top band (35%+ pick-or-ban).',
    updated: 'November 2026 (page label).',
    limits:
      'A different sample and threshold mean its win rates cannot be pasted into another site’s table. The underlying data was not independently verified here.',
    href: 'https://epic7helper.com/tier-list',
    linkLabel: 'epic7helper.com/tier-list',
    checked: '2026-11-13',
  },
  {
    source: 'PocketGamer — Epic Seven tier list',
    modes: 'Mixed, split by example/instance',
    method:
      'Second-hand editorial judgement, with a page date, version and author.',
    updated: '2026-11-01 (page label).',
    limits:
      'Not official. Source names, spellings and claims still need checking; do not copy the table or treat it as first-hand data. Fetch failed (HTTP 403) on 2026-11-13; this row keeps the 2026-11-10 reading.',
    href: 'https://www.pocketgamer.com/epic-seven/tier-list/',
    linkLabel: 'pocketgamer.com/epic-seven/tier-list',
    checked: '2026-11-10',
  },
  {
    source: 'RankedMeta — Epic Seven tier list',
    modes: 'RTA / Arena & Abyss',
    method:
      'Community voting; the page showed 16 voters and 81 ratings when checked.',
    updated:
      'Verification stamp 2026-09-06; rating activity shown as “4d ago” at check.',
    limits:
      'Small-sample community vote, not an authoritative full-roster ranking. The confidence boundary is part of the source, not a footnote to hide.',
    href: 'https://rankedmeta.com/epic-seven/tier-list',
    linkLabel: 'rankedmeta.com/epic-seven/tier-list',
    checked: '2026-11-13',
  },
  {
    source: 'Epic Seven Fandom — Tier List',
    modes: 'Historical PvE / PvP / Boss tables',
    method: 'Community wiki tables.',
    updated: 'No longer maintained; last update not captured.',
    limits:
      'The page explicitly says it is no longer maintained. Use it for history only, not as a current ranking. It returned HTTP 403 on 2026-11-13, so this row keeps the 2026-11-10 reading.',
    href: 'https://epicseven.fandom.com/wiki/Tier_List',
    linkLabel: 'epicseven.fandom.com/wiki/Tier_List',
    checked: '2026-11-10',
  },
  {
    source: 'Guild War full board — not verified',
    modes: 'Guild War',
    method: 'No complete Guild War ranking table was read in this check.',
    updated: 'Not verified.',
    limits:
      'No table is reproduced here. Guild War advice on this site is role and team coverage, not a sourced hero order.',
    href: null,
    linkLabel: 'No verified full-board link',
    checked: '2026-11-13',
  },
];

export const TIER_METHOD_POINTS: readonly string[] = [
  'Start with the mode, not the letter. PvE, RTA and Guild War ask different jobs of a hero.',
  'Check the source date and patch. A PvE board dated 2025-08-28 is not a November 2026 list, even if the page is still online.',
  'Read the method. Editorial picks, RTA pick/ban rates, usage and a community vote are different measurements; do not merge them into one number.',
  'Keep the sample. Champion+ RTA usage does not describe a new account’s story team, and 16 voters are not a full-roster census.',
  'Separate role from rank. A speed opener, a cleanse/revive support and a Wyvern farmer cannot be swapped into one universal top slot.',
  'Do not pull because of a letter. Banner timing, pity and your open slots decide a pull; a tier list does not.',
];

export const TIER_ACCOUNT_DECISIONS: readonly {
  title: string;
  body: string;
}[] = [
  {
    title: 'New player pushing story and the first Hunts',
    body: 'Pick a PvE source with a visible date and a low-gear assumption. Check whether the unit is free or obtainable, and whether the page explains the team around it. A story recommendation that assumes a full speed set is not a new-account recommendation. Use the Steam build-priority page for the first four slots, then verify each kit on the source pages.',
  },
  {
    title: 'Transferred account with an old roster',
    body: 'Do not rebuild from a 2026 PvP board. First list the roles your legacy roster already covers: farmer, defense break, cleanse/revive, opener. Compare mode sources only for the slot you cannot fill. Transfer keeps progress, but not a second gear library or a Foundry roster; check the transfer and Foundry pages before spending.',
  },
  {
    title: 'Preparing for RTA',
    body: 'Use RTA-specific sources (gacha.gg, hideoutgacha, Epic Helper) and read their sample and threshold. Pick/ban rate is not PvE strength, and one site’s win rate is not another site’s. Build one speed opener, one cleanse/immunity option and one flexible damage dealer; do not copy a top-ten list into a draft you cannot gear.',
  },
];

export const TIER_LIMITS: readonly string[] = [
  'PvE: no current full letter board. This page now carries two bounded, dated lists — Hideout’s Wyvern · Normal community top five (29 October–4 November 2026) and epic7db’s SS band last updated 2025-08-28 — but neither is a November 2026 all-mode PvE ranking. The S/A/B/C bands were not copied.',
  'World Arena: bounded quote only. The Epic Helper SS band is a dated community snapshot of global Champion+ RTA, not a full roster and not a Foundry measurement. Its pick/ban numbers are the source’s statistics, not this site’s build advice.',
  'Guild War: letter board still not completed. The official phases and role-coverage pointers are usable, but no current, mode-specific Guild War ranking table was read, and Foundry Guild War is not open yet. The RTA SS four are not a Guild War list.',
  'Prydwen is not used as a ranking source on this page. The path checked did not return readable Epic Seven body text in this round (a 404 from one fetch and a 403 challenge from another); that is not enough to cite it as a verified rankings source.',
  'The US/en KD 36 figure is a tool report, not a reproduction of Google’s top ten. This page does not claim to have independently reproduced the SERP.',
  'No letter-grade table is published here because there is no complete, legally reusable, mode-complete ranking table behind it. Third-party tables are not copied as ours.',
];

export const TIER_DIRECT_LINKS: readonly {
  label: string;
  href: string;
  note: string;
}[] = [
  {
    label: 'epic7db — PvE and PvP boards',
    href: 'https://epic7db.com/tier-list',
    note: 'PvE 2025-08-28; PvP 2026-03-28; site’s own “official” board.',
  },
  {
    label: 'gacha.gg — RTA tier list',
    href: 'https://www.gacha.gg/epic-seven/tier-list',
    note: 'RTA pick/ban data; read the tab date and sample.',
  },
  {
    label: 'hideoutgacha — RTA usage',
    href: 'https://www.hideoutgacha.com/games/epic-seven/tier-list',
    note: 'Fall 2026 Champion+ usage; page-reported 379 heroes / 16,681,352 picks, not an independent recount.',
  },
  {
    label: 'hideoutgacha — Hunts (Wyvern · Normal)',
    href: 'https://www.hideoutgacha.com/games/epic-seven/hunts',
    note: 'Community clears 29 October–4 November 2026; share of clears, not a letter grade.',
  },
  {
    label: 'Epic Helper — RTA win/ban rates',
    href: 'https://epic7helper.com/tier-list',
    note: 'November 2026 label; different threshold and sample.',
  },
  {
    label: 'PocketGamer — Epic Seven tier list',
    href: 'https://www.pocketgamer.com/epic-seven/tier-list/',
    note: 'Page label 2026-11-01; second-hand editorial judgement.',
  },
  {
    label: 'RankedMeta — Epic Seven tier list',
    href: 'https://rankedmeta.com/epic-seven/tier-list',
    note: 'Small community vote (16 voters, 81 ratings at check).',
  },
  {
    label: 'Epic Seven Fandom — Tier List',
    href: 'https://epicseven.fandom.com/wiki/Tier_List',
    note: 'Explicitly no longer maintained; history only.',
  },
];


export type TierPveTeam = {
  rank: string;
  team: string;
  share: string;
};

/** Hideout community Wyvern · Normal top five, copied as listed. */
export const TIER_PVE_WYVERN_TEAMS: readonly TierPveTeam[] = [
  {
    rank: '1',
    team: 'Furious, Sigret, Brieg, Muwi',
    share: '3.69% of clears',
  },
  {
    rank: '2',
    team: 'Furious, Brieg, Fenne, Muwi',
    share: '2.46% of clears',
  },
  {
    rank: '3',
    team: 'Free Spirit Tieria, Luna, Sigret, Holiday Yufine',
    share: '1.80% of clears',
  },
  {
    rank: '4',
    team: 'Free Spirit Tieria, Angelica, Landy, Specter Tenebria',
    share: '1.80% of clears',
  },
  {
    rank: '5',
    team: 'Furious, Renoa, Shepherd of the Dark Diene, Leah',
    share: '1.56% of clears',
  },
];

/** Single-hero appearance rate on the same page and window, not a grade. */
export const TIER_PVE_WYVERN_APPEARANCE: readonly {
  hero: string;
  rate: string;
}[] = [
  { hero: 'Furious', rate: '20.7%' },
  { hero: 'Sigret', rate: '17.3%' },
  { hero: 'Brieg', rate: '15.7%' },
  { hero: 'Muwi', rate: '14.3%' },
];

export type TierPveSsRow = {
  hero: string;
  classElement: string;
};

/**
 * epic7db PvE SS band only, read from the saved page markup.
 * Do not add its S/A/B/C rows: the source table is not republished here.
 */
export const TIER_PVE_SS_ROWS: readonly TierPveSsRow[] = [
  { hero: 'Afternoon Soak Flan', classElement: 'Fire Ranger 5★' },
  { hero: 'Angelic Montmorancy', classElement: 'Ice Soul Weaver 3★' },
  { hero: 'Brieg', classElement: 'Ice Knight 5★' },
  { hero: 'Fenne', classElement: 'Ice Soul Weaver 5★' },
  { hero: 'Robin', classElement: 'Fire Ranger 5★' },
  { hero: 'Sea Phantom Politis', classElement: 'Dark Ranger 5★' },
  { hero: 'Specter Tenebria', classElement: 'Dark Mage 5★' },
  { hero: 'Tamarinne', classElement: 'Fire Soul Weaver 5★' },
];

export type TierWaRow = {
  band: string;
  name: string;
  entity: string;
  classElement: string;
  listNumbers: string;
  split: string;
  url: string;
};

/** Bounded SS-band quote only. Do not add S/A or lower bands here. */
export const TIER_WA_ROWS: readonly TierWaRow[] = [
  {
    band: 'SS · Must ban',
    name: 'Lisette',
    entity: 'Hero',
    classElement: 'Light Soul Weaver 5★',
    listNumbers: '67% · 43% P/B',
    split: 'Win 67% / Pick 5% / Ban 38% / P+B 43% / Games 33,380',
    url: 'https://epic7helper.com/hero/lisette',
  },
  {
    band: 'SS · Must ban',
    name: 'Notos',
    entity: 'Hero',
    classElement: 'Light Knight 5★',
    listNumbers: '60% · 44% P/B',
    split: 'Win 60% / Pick 10% / Ban 34% / P+B 44% / Games 74,912',
    url: 'https://epic7helper.com/hero/notos',
  },
  {
    band: 'SS · Must ban',
    name: 'Lady of the Scales',
    entity: 'Hero',
    classElement: 'Light Soul Weaver 5★',
    listNumbers: '59% · 54% P/B',
    split: 'Win 59% / Pick 16% / Ban 37% / P+B 54% / Games 118,527',
    url: 'https://epic7helper.com/hero/lady-of-the-scales',
  },
  {
    band: 'SS · Must ban',
    name: 'Rhianna and Luciella',
    entity: 'Hero (not the same-name artifact)',
    classElement: 'Dark Thief 5★ (two characters, one slot)',
    listNumbers: '56% · 48% P/B',
    split: 'Win 56% / Pick 20% / Ban 28% / P+B 48% / Games 147,564',
    url: 'https://epic7helper.com/hero/rhianna-and-luciella',
  },
];
