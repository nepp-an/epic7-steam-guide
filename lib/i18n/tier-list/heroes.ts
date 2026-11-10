/**
 * Shared hero facts for the Steam build-priority pages.
 *
 * `avatar: true` heroes already have a self-drawn element-colour avatar in
 * public/images/avatars/ and a card on /heroes/. The other names are role
 * examples for slots the starter roster does not fill; we do not host official
 * art for them. This file intentionally carries no letter grades.
 */
export type TierHero = {
  slug: string;
  name: string;
  role: string;
  element: 'Fire' | 'Ice' | 'Earth' | 'Light' | 'Dark';
  avatar: boolean;
};

export const TIER_HEROES: readonly TierHero[] = [
  {
    slug: 'angelic-montmorancy',
    name: 'Angelic Montmorancy',
    role: 'Soul Weaver',
    element: 'Ice',
    avatar: true,
  },
  {
    slug: 'falconer-kluri',
    name: 'Falconer Kluri',
    role: 'Knight',
    element: 'Earth',
    avatar: true,
  },
  {
    slug: 'commander-lorina',
    name: 'Commander Lorina',
    role: 'Warrior',
    element: 'Dark',
    avatar: true,
  },
  {
    slug: 'alexa',
    name: 'Alexa',
    role: 'Thief',
    element: 'Ice',
    avatar: true,
  },
  {
    slug: 'furious',
    name: 'Furious',
    role: 'Ranger',
    element: 'Ice',
    avatar: true,
  },
  {
    slug: 'vildred',
    name: 'Vildred',
    role: 'Thief',
    element: 'Earth',
    avatar: true,
  },
  {
    slug: 'luna',
    name: 'Luna',
    role: 'Mage',
    element: 'Ice',
    avatar: true,
  },
  {
    slug: 'ras',
    name: 'Ras',
    role: 'Knight',
    element: 'Fire',
    avatar: true,
  },
  {
    slug: 'mercedes',
    name: 'Mercedes',
    role: 'Mage',
    element: 'Fire',
    avatar: true,
  },
  {
    slug: 'aither',
    name: 'Aither',
    role: 'Soul Weaver',
    element: 'Ice',
    avatar: true,
  },
  {
    slug: 'silk',
    name: 'Silk',
    role: 'Ranger',
    element: 'Earth',
    avatar: true,
  },
  {
    slug: 'judith',
    name: 'Judith',
    role: 'Thief',
    element: 'Fire',
    avatar: true,
  },
  {
    slug: 'tamarinne',
    name: 'Tamarinne',
    role: 'Soul Weaver',
    element: 'Fire',
    avatar: false,
  },
  {
    slug: 'fallen-cecilia',
    name: 'Fallen Cecilia',
    role: 'Knight',
    element: 'Dark',
    avatar: false,
  },
  {
    slug: 'ruele-of-light',
    name: 'Ruele of Light',
    role: 'Soul Weaver',
    element: 'Light',
    avatar: false,
  },
  {
    slug: 'seaside-bellona',
    name: 'Seaside Bellona',
    role: 'Ranger',
    element: 'Ice',
    avatar: false,
  },
  {
    slug: 'specter-tenebria',
    name: 'Specter Tenebria',
    role: 'Mage',
    element: 'Dark',
    avatar: false,
  },
  {
    slug: 'arbiter-vildred',
    name: 'Arbiter Vildred',
    role: 'Thief',
    element: 'Dark',
    avatar: false,
  },
  {
    slug: 'politis',
    name: 'Politis',
    role: 'Mage',
    element: 'Earth',
    avatar: false,
  },
  {
    slug: 'cerise',
    name: 'Cerise',
    role: 'Ranger',
    element: 'Ice',
    avatar: false,
  },
] as const;
