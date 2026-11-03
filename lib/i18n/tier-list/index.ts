import type { Locale } from '@/lib/site';
import en from './en.json';
import ja from './ja.json';
import ko from './ko.json';
import zhTw from './zh-tw.json';
import type { TierListCopy } from './types';

export type { TierListCopy } from './types';
export {
  TIER_HEROES,
  TIER_ORDER,
  type GwSide,
  type Tier,
  type TierHero,
  type TierScenario,
} from './heroes';

export const TIER_LIST_COPY: Record<Locale, TierListCopy> = {
  en: en as unknown as TierListCopy,
  ko: ko as unknown as TierListCopy,
  ja: ja as unknown as TierListCopy,
  'zh-tw': zhTw as unknown as TierListCopy,
};
