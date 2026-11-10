import type { Metadata } from 'next';
import { FoundryView } from '@/components/pages/renderers';
import { CONTENT } from '@/lib/i18n/content';
import { pageMetadata } from '@/lib/site';

const LOCALE = 'pt' as const;
const PATH = '/foundry/';
const copy = CONTENT[PATH][LOCALE];

export const metadata: Metadata = pageMetadata({
  title: copy.title,
  description: copy.meta,
  path: PATH,
  locale: LOCALE,
  absoluteTitle: true,
});

export default function Page() {
  return <FoundryView locale={LOCALE} />;
}
