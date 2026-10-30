import type { Metadata } from 'next';
import { FaqView } from '@/components/pages/renderers';
import { CONTENT } from '@/lib/i18n/content';
import { pageMetadata } from '@/lib/site';

const LOCALE = 'en' as const;
const PATH = '/faq/';
const copy = CONTENT[PATH][LOCALE];

export const metadata: Metadata = pageMetadata({
  title: copy.title,
  description: copy.meta,
  path: PATH,
  locale: LOCALE,
});

export default function Page() {
  return <FaqView locale={LOCALE} />;
}
