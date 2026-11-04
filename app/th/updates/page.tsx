import type { Metadata } from 'next';
import { UpdatesView } from '@/components/pages/renderers';
import { CONTENT } from '@/lib/i18n/content';
import { pageMetadata } from '@/lib/site';

const LOCALE = 'th' as const;
const PATH = '/updates/';
const copy = CONTENT[PATH][LOCALE];

export const metadata: Metadata = pageMetadata({
  title: copy.title,
  description: copy.meta,
  path: PATH,
  locale: LOCALE,
  absoluteTitle: true,
});

export default function Page() {
  return <UpdatesView locale={LOCALE} />;
}
