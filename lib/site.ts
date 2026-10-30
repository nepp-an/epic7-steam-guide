/** Site constants — independent fan/info guide. Not Smilegate / STOVE / Steam. */

export const BRAND = 'Epic Seven Steam Guide';

/**
 * Target domain chosen by user: epicsevensteam.com
 * Domain is NOT purchased/connected yet — use for copy placeholders only.
 * Override with NEXT_PUBLIC_SITE_ORIGIN when live.
 */
export const TARGET_DOMAIN = 'epicsevensteam.com';

export const SITE_ORIGIN =
  process.env.NEXT_PUBLIC_SITE_ORIGIN?.replace(/\/$/, '') ||
  `https://${TARGET_DOMAIN}`;

export const DOMAIN_CONNECTED = false;

export const CONTACT_PRIVACY = `privacy@${TARGET_DOMAIN}`;
export const CONTACT_ABOUT = `hello@${TARGET_DOMAIN}`;

/** Official outbound links (cite; do not mirror wholesale). */
export const OFFICIAL = {
  steamStore: 'https://store.steampowered.com/app/5019180/Epic_Seven/',
  steamNewsFoundry:
    'https://store.steampowered.com/news/app/5019180/view/685267261521395852',
  stoveLaunch: 'https://page.onstove.com/epicseven/global/view/14606481',
  stoveSteamFaq: 'https://page.onstove.com/epicseven/global/view/14378309',
  stoveFoundry: 'https://page.onstove.com/epicseven/global/view/14571828',
  stoveDemoDelete: 'https://page.onstove.com/epicseven/global/view/14581667',
  stoveHome: 'https://page.onstove.com/epicseven/global',
} as const;

export const DOMAIN_CANDIDATES = [
  'epicsevensteam.com',
  'epic-seven-steam.com',
  'epic7steam.com',
  'epicsevenfoundry.com',
] as const;

/** As-of note for Foundry dates (launch window). */
export const AS_OF = '2026-10-29';
