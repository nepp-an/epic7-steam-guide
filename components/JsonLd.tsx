import {
  BRAND,
  SITE_ORIGIN,
  absoluteUrl,
  htmlLang,
  localizedPath,
  type Locale,
} from '@/lib/site';

export function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function WebPageJsonLd({
  name,
  description,
  path,
  locale = 'en',
  type = 'WebPage',
}: {
  name: string;
  description: string;
  path: string;
  locale?: Locale;
  type?: 'WebPage' | 'Article' | 'CollectionPage';
}) {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': type,
        name,
        headline: name,
        description,
        url: absoluteUrl(localizedPath(locale, path)),
        inLanguage: htmlLang(locale),
        isPartOf: {
          '@type': 'WebSite',
          name: BRAND,
          url: `${SITE_ORIGIN}/`,
        },
      }}
    />
  );
}

export function FaqJsonLd({
  faqs,
}: {
  faqs: readonly (readonly [string, string])[];
}) {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map(([q, a]) => ({
          '@type': 'Question',
          name: q,
          acceptedAnswer: { '@type': 'Answer', text: a },
        })),
      }}
    />
  );
}
