import type { Metadata } from 'next';
import { BRAND, SITE_ORIGIN } from '@/lib/site';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  title: {
    default: `Epic Seven on Steam — Transfer, Foundry & FAQ | ${BRAND}`,
    template: `%s | ${BRAND}`,
  },
  description:
    'Independent guide to Epic Seven on Steam: official store link, STOVE↔Steam account transfer, Foundry schedule & rewards, FAQ. Not affiliated with Smilegate or STOVE.',
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
        {/* GA4: inject only after ops provides a real Measurement ID (G-…). Never use a fake ID or ArtCraft property. */}
        {/* Example (disabled):
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXX" strategy="afterInteractive" />
        */}
        {children}
      </body>
    </html>
  );
}
