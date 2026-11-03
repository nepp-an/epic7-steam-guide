import type { Metadata } from 'next';
import Script from 'next/script';
import { BRAND, GA4_MEASUREMENT_ID, SITE_ORIGIN } from '@/lib/site';
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
  other: {
    'google-adsense-account': 'ca-pub-3175943774981621',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google AdSense — Auto ads only; async so it never blocks the disclaimer or CTAs. */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3175943774981621"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        {/* GA4: E7 Steam Guide property only (G-QY1D1CDXDZ). Not ArtCraft. */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-e7" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA4_MEASUREMENT_ID}');
        `}</Script>
        {children}
      </body>
    </html>
  );
}
