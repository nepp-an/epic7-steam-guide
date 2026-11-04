import type { Metadata } from 'next';
import { ContactView } from '@/components/pages/renderers';
import { CONTENT } from '@/lib/i18n/content';
import { pageMetadata } from '@/lib/site';

const LOCALE = 'es' as const;
const PATH = '/contact/';
const copy = CONTENT[PATH][LOCALE];

export const metadata: Metadata = pageMetadata({
  title: copy.title,
  description: copy.meta,
  path: PATH,
  locale: LOCALE,
  absoluteTitle: true,
});

export default function Page() {
  return <ContactView locale={LOCALE} />;
}
