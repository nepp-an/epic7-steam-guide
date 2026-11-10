import type { Locale } from '@/lib/site';
import en from './en.json';
import ja from './ja.json';
import ko from './ko.json';
import zhTw from './zh-tw.json';
import th from './th.json';
import es from './es.json';
import pt from './pt.json';
import de from './de.json';
import fr from './fr.json';
import pl from './pl.json';
import type { TierListCopy } from './types';

export type { TierListCopy } from './types';
export { TIER_HEROES, type TierHero } from './heroes';

export const TIER_LIST_COPY: Record<Locale, TierListCopy> = {
  en: en as unknown as TierListCopy,
  ko: ko as unknown as TierListCopy,
  ja: ja as unknown as TierListCopy,
  'zh-tw': zhTw as unknown as TierListCopy,
  th: th as unknown as TierListCopy,
  es: es as unknown as TierListCopy,
  pt: pt as unknown as TierListCopy,
  de: de as unknown as TierListCopy,
  fr: fr as unknown as TierListCopy,
  pl: pl as unknown as TierListCopy,
};
