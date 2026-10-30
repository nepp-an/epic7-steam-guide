import type { Metadata } from 'next';
import { DemoView } from '@/components/pages/renderers';
import { CONTENT } from '@/lib/i18n/content';
import { pageMetadata } from '@/lib/site';

const LOCALE = 'ja' as const;
const PATH = '/demo-delete-warning/';
const copy = CONTENT[PATH][LOCALE];

export const metadata: Metadata = pageMetadata({
  title: copy.title,
  description: copy.meta,
  path: PATH,
  locale: LOCALE,
});

export default function Page() {
  return <DemoView locale={LOCALE} />;
}
