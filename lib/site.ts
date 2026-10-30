/** Site constants — independent fan/info guide. Not Smilegate / STOVE / Steam. */

export const BRAND = 'Epic Seven Steam Guide';

/**
 * Apex: epicsevensteam.com (Cloudflare Registrar; DNS → Vercel, gray-cloud).
 * Override with NEXT_PUBLIC_SITE_ORIGIN if needed.
 */
export const TARGET_DOMAIN = 'epicsevensteam.com';

export const SITE_ORIGIN =
  process.env.NEXT_PUBLIC_SITE_ORIGIN?.replace(/\/$/, '') ||
  `https://${TARGET_DOMAIN}`;

export const DOMAIN_CONNECTED = true; // registered; DNS/SSL may still be propagating

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
  stoveSecretRabbitCase: 'https://page.onstove.com/epicseven/global/view/14606293',
  stoveLuckyBoard: 'https://page.onstove.com/epicseven/global/view/14606365',
  stoveBunnyLobbyPack: 'https://page.onstove.com/epicseven/global/view/14606343',
} as const;

export const DOMAIN_CANDIDATES = [
  'epicsevensteam.com',
  'epic-seven-steam.com',
  'epic7steam.com',
  'epicsevenfoundry.com',
] as const;

/** As-of note for Foundry dates (launch window). */
export const AS_OF = '2026-10-29';
