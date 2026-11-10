/**
 * English-only /tier-list/ resource page.
 *
 * This file deliberately contains source comparison and reading method, not a
 * hero ranking. Do not add S/A/B assignments here: this round did not read a
 * complete, legally reusable PvE + Guild War + World Arena ranking table.
 */

export const TIER_RESOURCES_CHECKED = '2026-11-10';

export type TierSourceRow = {
  source: string;
  modes: string;
  method: string;
  updated: string;
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
  },
  {
    source: 'gacha.gg — Epic Seven tier list',
    modes: 'RTA; its overall tab still leans RTA, not all modes',
    method:
      'Mode tabs with RTA pick/ban and win-rate data, a daily movement log, and a stated method.',
    updated: 'Read the date on its RTA tab; this check did not capture one stable date.',
    limits:
      'Pick rate and usage are not all-mode strength. A low-usage unit is not automatically weak in PvE, and the overall view is not a complete PvE or Guild War table.',
    href: 'https://www.gacha.gg/epic-seven/tier-list',
    linkLabel: 'gacha.gg/epic-seven/tier-list',
  },
  {
    source: 'hideoutgacha — Epic Seven tier list',
    modes: 'RTA (Champion+)',
    method:
      'Usage ranking from Fall 2026 Champion+ RTA with class filters and a “my roster” view. The page says 362 heroes and 9,900,353 picks; those totals were not independently verified.',
    updated: 'Fall 2026 season label; exact update day not captured.',
    limits:
      'Usage is not all-mode strength, and the season/sample must not be removed from the number. It is not a Guild War or complete PvE board.',
    href: 'https://www.hideoutgacha.com/games/epic-seven/tier-list',
    linkLabel: 'hideoutgacha.com/games/epic-seven/tier-list',
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
  },
  {
    source: 'PocketGamer — Epic Seven tier list',
    modes: 'Mixed, split by example/instance',
    method:
      'Second-hand editorial judgement, with a page date, version and author.',
    updated: '2026-11-01 (page label).',
    limits:
      'Not official. Source names, spellings and claims still need checking; do not copy the table or treat it as first-hand data.',
    href: 'https://www.pocketgamer.com/epic-seven/tier-list/',
    linkLabel: 'pocketgamer.com/epic-seven/tier-list',
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
  },
  {
    source: 'Epic Seven Fandom — Tier List',
    modes: 'Historical PvE / PvP / Boss tables',
    method: 'Community wiki tables.',
    updated: 'No longer maintained; last update not captured.',
    limits:
      'The page explicitly says it is no longer maintained. Use it for history only, not as a current ranking.',
    href: 'https://epicseven.fandom.com/wiki/Tier_List',
    linkLabel: 'epicseven.fandom.com/wiki/Tier_List',
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
  'Guild War: not verified. No complete Guild War ranking table was read in this check. The Guild War sections on this site are role/team coverage, not a sourced hero order.',
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
    note: 'Fall 2026 Champion+ usage; page-reported totals, not independently verified.',
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
