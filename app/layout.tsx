import type { Metadata } from 'next';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import { BRAND, SITE_ORIGIN } from '@/lib/site';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  title: {
    default: `Epic Seven on Steam — Transfer, Foundry & FAQ | ${BRAND}`,
    template: `%s | ${BRAND}`,
  },
  description:
    'Independent guide to Epic Seven on Steam: official store link, STOVE↔Steam account transfer steps, Foundry new-server rewards, and launch troubleshooting. Not affiliated with Smilegate or STOVE.',
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
