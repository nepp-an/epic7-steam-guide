import type { Metadata } from 'next';
import { BannersView } from '@/components/pages/renderers';
import { CONTENT } from '@/lib/i18n/content';
import { pageMetadata } from '@/lib/site';

const LOCALE = 'ja' as const;
const PATH = '/banners/';
const copy = CONTENT[PATH][LOCALE];

export const metadata: Metadata = pageMetadata({
  title: copy.title,
  description: copy.meta,
  path: PATH,
  locale: LOCALE,
});

export default function Page() {
  return <BannersView locale={LOCALE} />;
}
