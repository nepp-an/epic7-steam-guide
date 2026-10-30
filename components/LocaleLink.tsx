import Link from 'next/link';
import type { Locale } from '@/lib/site';
import { localizedPath } from '@/lib/site';

export function LocaleLink({
  locale,
  href,
  children,
  className,
}: {
  locale: Locale;
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link href={localizedPath(locale, href)} className={className}>
      {children}
    </Link>
  );
}
