import Link from 'next/link';
import { Checklist, QuestChecklist } from '@/components/Checklist';
import { ExternalLink } from '@/components/ExternalLink';
import { IndepNotice } from '@/components/IndepNotice';
import { PageShell } from '@/components/PageShell';
import { CONTENT } from '@/lib/i18n/content';
import { CHECKLIST_COPY } from '@/lib/i18n/checklists';
import {
  FOUNDRY_VERIFIED,
  FOUNDRY_VERIFIED_DATE,
  HEROES_VERIFIED,
  HOME_VERIFIED,
  ROLE_CHIPS,
  START5,
  TRANSFER_VERIFIED,
  VERIFIED_DATE,
  type LineSeg,
  type VerifiedCopy,
} from '@/lib/i18n/nextCut';
import {
  BANNERS_SUPPLEMENT,
  FAQ_EXTRA,
  FAQ_GROUPS,
  MAINTENANCE_SUPPLEMENT,
  RABBIT_SUPPLEMENT,
  UPDATES_SUPPLEMENT,
  type SupplementSection,
} from '@/lib/i18n/supplement';
import {
  AS_OF,
  CONTACT_PRIVACY,
  OFFICIAL,
  TARGET_DOMAIN,
  type Locale,
  localizedPath,
} from '@/lib/site';
import {
  TIER_HEROES,
  TIER_LIST_COPY,
  TIER_ORDER,
  type Tier,
  type TierHero,
  type TierScenario,
} from '@/lib/i18n/tier-list';

function L({
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

// Case Files exists only in English. Say so in each locale's own language
// instead of linking to a localized route that would 404.
const ENGLISH_LABEL: Record<Locale, string> = {
  en: 'English',
  ko: '영어',
  ja: '英語',
  'zh-tw': '英文',
  th: 'ภาษาอังกฤษ',
  es: 'inglés',
  pt: 'inglês',
  de: 'Englisch',
  fr: 'anglais',
  pl: 'angielski',
};

function Diagram({
  nodes,
  aria,
}: {
  nodes: readonly string[];
  aria: string;
}) {
  return (
    <div className="diagram" aria-label={aria}>
      {nodes.map((n, i) => (
        <span key={n} style={{ display: 'contents' }}>
          {i > 0 && (
            <span className="arrow" aria-hidden="true">
              →
            </span>
          )}
          <div className="node">{n}</div>
        </span>
      ))}
    </div>
  );
}

function FaqJsonLd({ faqs }: { faqs: readonly (readonly [string, string])[] }) {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(([q, a]) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
    />
  );
}

function QuickAnswer({
  text,
  locale,
  rich = false,
}: {
  text: string;
  locale?: Locale;
  rich?: boolean;
}) {
  return (
    <p className="quick-answer">
      <strong>TL;DR — </strong>
      {rich && locale ? <RichInline locale={locale} marked={text} /> : text}
    </p>
  );
}

function LastVerified({
  copy,
  date = VERIFIED_DATE,
}: {
  copy: VerifiedCopy;
  date?: string;
}) {
  return (
    <p className="last-verified">
      {copy.before}
      <time dateTime={date}>{date}</time>
      {copy.after}
    </p>
  );
}

function RichLine({
  locale,
  segs,
}: {
  locale: Locale;
  segs: readonly LineSeg[];
}) {
  return (
    <>
      {segs.map(([text, href], i) => {
        if (!href) return <span key={i}>{text}</span>;
        if (href.startsWith('#')) {
          return (
            <a key={i} href={href}>
              {text}
            </a>
          );
        }
        return (
          <L key={i} locale={locale} href={href}>
            {text}
          </L>
        );
      })}
    </>
  );
}

/** Intrinsic sizes for CLS — keep in sync with public/images/*.webp */
const IMAGE_SIZE: Record<string, readonly [number, number]> = {
  '/images/diagram-demo-delete.webp': [1100, 300],
  '/images/diagram-demo-dodont.webp': [1100, 300],
  '/images/diagram-foundry-calendar.webp': [1100, 420],
  '/images/diagram-foundry-milestones.webp': [1100, 280],
  '/images/diagram-foundry-vs-transfer.webp': [1100, 300],
  '/images/diagram-heroes-compare.webp': [1100, 320],
  '/images/diagram-heroes-groups.webp': [1100, 360],
  '/images/diagram-heroes-path.webp': [1100, 260],
  '/images/diagram-heroes.webp': [960, 220],
  '/images/diagram-home-path.webp': [1100, 320],
  '/images/diagram-quests-foundry-delta.webp': [1100, 300],
  '/images/diagram-quests-priority.webp': [1100, 280],
  '/images/diagram-quests.webp': [960, 280],
  '/images/diagram-steam-bind.webp': [1100, 280],
  '/images/diagram-steam-notes.webp': [1100, 300],
  '/images/diagram-transfer-decision.webp': [1100, 360],
  '/images/diagram-transfer.webp': [1100, 320],
  '/images/diagram-uncheater.webp': [1100, 300],
  '/images/steam-capsule.webp': [231, 87],
  '/images/steam-header.webp': [460, 215],
  '/images/steam-ss-battle.webp': [960, 540],
  '/images/steam-ss-heroes.webp': [960, 540],
  '/images/steam-ss-world.webp': [600, 338],
  '/images/avatars/ras.webp': [160, 160],
  '/images/avatars/mercedes.webp': [160, 160],
  '/images/avatars/aither.webp': [160, 160],
  '/images/avatars/judith.webp': [160, 160],
  '/images/avatars/angelic-montmorancy.webp': [160, 160],
  '/images/avatars/falconer-kluri.webp': [160, 160],
  '/images/avatars/commander-lorina.webp': [160, 160],
  '/images/avatars/alexa.webp': [160, 160],
  '/images/avatars/furious.webp': [160, 160],
  '/images/avatars/silk.webp': [160, 160],
  '/images/avatars/vildred.webp': [160, 160],
  '/images/avatars/luna.webp': [160, 160],
};

function elementChipClass(el: string): string {
  const key = el.trim().toLowerCase();
  if (key === 'fire') return 'chip chip-fire';
  if (key === 'ice') return 'chip chip-ice';
  if (key === 'earth') return 'chip chip-earth';
  if (key === 'light') return 'chip chip-light';
  if (key === 'dark') return 'chip chip-dark';
  return 'chip chip-role';
}

function prioClass(p: string): string {
  const key = p.trim().toLowerCase();
  if (key === 'high') return 'prio-bar prio-high';
  if (key === 'later') return 'prio-bar prio-later';
  return 'prio-bar prio-mid';
}

function prioLabel(
  p: string,
  labels: { high: string; mid: string; later: string },
): string {
  const key = p.trim().toLowerCase();
  if (key === 'high') return labels.high;
  if (key === 'later') return labels.later;
  return labels.mid;
}

type HeroRow = readonly [
  string,
  string,
  string,
  string,
  string,
  string,
  string,
];

function heroesInGroup(rows: readonly HeroRow[], group: string): HeroRow[] {
  return rows.filter((r) => r[5] === group);
}

function roleChipsFor(slug: string) {
  const chips = ROLE_CHIPS[slug];
  if (!chips || chips.length < 1 || chips.length > 2) {
    throw new Error(`Hero card ${slug} needs 1–2 role chips`);
  }
  return chips;
}


function Fig({
  src,
  alt,
  credit,
}: {
  src: string;
  alt: string;
  credit?: string;
}) {
  const [w, h] = IMAGE_SIZE[src] ?? [960, 540];
  const isDiagram = src.includes('/diagram-');
  return (
    <figure className={`site-fig ${isDiagram ? 'site-fig--diagram' : 'site-fig--photo'}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} width={w} height={h} loading="lazy" />
      {credit ? <figcaption className="muted">{credit}</figcaption> : null}
    </figure>
  );
}

function DeepBlock({
  locale,
  h2,
  paras,
}: {
  locale: Locale;
  h2: string;
  paras: readonly string[];
}) {
  return (
    <section>
      <h2>{h2}</h2>
      {paras.map((para) => (
        <p key={para.slice(0, 32)}>
          <RichInline locale={locale} marked={para} />
        </p>
      ))}
    </section>
  );
}

function FaqBlock({
  locale,
  h2,
  faqs,
}: {
  locale: Locale;
  h2: string;
  faqs: readonly (readonly [string, string])[];
}) {
  return (
    <section className="faq">
      <h2>{h2}</h2>
      {faqs.map(([q, a]) => (
        <details key={q}>
          <summary>{q}</summary>
          <FaqRich locale={locale} marked={a} />
        </details>
      ))}
    </section>
  );
}

/** Late-2026 on-page additions for the thinnest content pages. */
function SupplementSections({
  sections,
}: {
  sections: readonly SupplementSection[];
}) {
  return (
    <>
      {sections.map((s) => (
        <section key={s.h2}>
          <h2>{s.h2}</h2>
          <p>{s.intro}</p>
          <ul>
            {s.bullets.map((b) => (
              <li key={b.slice(0, 48)}>{b}</li>
            ))}
          </ul>
          {s.source ? (
            <p className="sources">
              <ExternalLink href={s.source.href}>{s.source.label}</ExternalLink>
            </p>
          ) : null}
        </section>
      ))}
    </>
  );
}

/**
 * FAQ hub answers may mark one phrase as a link: [[label|/path/]] or
 * [[label|https://…]]. Visible text drops the markup; JSON-LD uses the same
 * plain string (paths stay as text, not HTML).
 */
function faqPlain(marked: string): string {
  return marked.replace(/\[\[([^|\]]+)\|[^\]]+\]\]/g, '$1');
}

function richParts(locale: Locale, marked: string): React.ReactNode[] {
  const nodes: React.ReactNode[] = [];
  const re = /\[\[([^|\]]+)\|([^\]]+)\]\]/g;
  let last = 0;
  let key = 0;
  let match: RegExpExecArray | null;
  while ((match = re.exec(marked))) {
    if (match.index > last) {
      nodes.push(<span key={key++}>{marked.slice(last, match.index)}</span>);
    }
    const label = match[1];
    const href = match[2];
    if (href.startsWith('https://') || href.startsWith('http://')) {
      nodes.push(
        <ExternalLink key={key++} href={href}>
          {label}
        </ExternalLink>,
      );
    } else {
      nodes.push(
        <L key={key++} locale={locale} href={href}>
          {label}
        </L>,
      );
    }
    last = match.index + match[0].length;
  }
  if (last < marked.length) {
    nodes.push(<span key={key++}>{marked.slice(last)}</span>);
  }
  return nodes;
}

function FaqRich({ locale, marked }: { locale: Locale; marked: string }) {
  return <p>{richParts(locale, marked)}</p>;
}

function RichInline({ locale, marked }: { locale: Locale; marked: string }) {
  return <>{richParts(locale, marked)}</>;
}

const GW_LINK: Record<Locale, string> = {
  "en": "Guild War on Foundry",
  "ko": "파운드리 길드전",
  "ja": "ファウンドリのギルド戦",
  "zh-tw": "Foundry 公會戰",
  "th": "Guild War บน Foundry",
  "es": "Guild War en Foundry",
  "pt": "Guild War no Foundry",
  "de": "Guild War auf Foundry",
  "fr": "Guild War sur Foundry",
  "pl": "Guild War na Foundry"
};

const TIER_LINK_LABEL: Record<Locale, string> = {
  "en": "Tier list — Steam/transfer lens",
  "ko": "티어표 — Steam/이전 관점",
  "ja": "ティア表 — Steam/引き継ぎ視点",
  "zh-tw": "節奏榜 — Steam／轉移視角",
  "th": "จัดอันดับ — มุมมอง Steam/โอนบัญชี",
  "es": "Tier list — enfoque Steam/transferencia",
  "pt": "Lista de tiers — foco Steam/transferência",
  "de": "Tier-Liste — Steam-/Transfer-Perspektive",
  "fr": "Liste de tiers — approche Steam/transfert",
  "pl": "Lista tierów — ujęcie Steam/transfer"
};

const HUB_OPEN: Record<Locale, string> = {
  en: "Open guide →",
  ko: "가이드 열기 →",
  ja: "ガイドを開く →",
  "zh-tw": "開啟指南 →",
  th: "เปิดคู่มือ →",
  es: "Abrir guía →",
  pt: "Abrir guia →",
  de: "Guide öffnen →",
  fr: "Ouvrir le guide →",
  pl: "Otwórz poradnik →"
};

const HOME_FAQ_HREFS = [
  '/steam-transfer/',
  '/steam-transfer/',
  '/foundry/',
  '/demo-delete-warning/',
] as const;

/** Strip [[label|href]] markup before passing copy to a plain-text checklist. */
function stripMarked(text: string): string {
  return text.replace(/\[\[([^\]|]+)(?:\|[^\]]+)?\]\]/g, "$1");
}

const TIER_AVATAR_ALT: Record<Locale, string> = {
  "en": " — self-drawn element-colour avatar (not official art)",
  "ko": " — 자작 속성색 아바타(공식 아트 아님)",
  "ja": " — 自作属性色アバター（公式アートではありません）",
  "zh-tw": " — 自繪屬性色頭像（非官方立繪）",
  "th": " — อวตารสีตามธาตุที่วาดเอง (ไม่ใช่ภาพทางการ)",
  "es": " — avatar propio con colores de elemento (no es arte oficial)",
  "pt": " — avatar de cor de elemento desenhado por nós (não é arte oficial)",
  "de": " — selbst gezeichneter Elementarfarben-Avatar (keine offizielle Art)",
  "fr": " — avatar dessiné par nos soins aux couleurs de l’élément (pas un visuel officiel)",
  "pl": " — ręcznie rysowany awatar w kolorach żywiołu (nieoficjalny art)"
};

export function HomeView({ locale }: { locale: Locale }) {
  const c = CONTENT['/'][locale];
  const isPl = locale === 'pl';
  return (
    <PageShell locale={locale} path="/">
      <FaqJsonLd faqs={c.faqs} />
      <section className="hero">
        <h1>{c.h1}</h1>
        <p className="quick-answer">
          <strong>TL;DR — </strong>
          <RichInline locale={locale} marked={c.answer} />
        </p>
        <p>{c.hero}</p>
        <div className="cta-row">
          <ExternalLink href={OFFICIAL.steamStore} className="btn btn-primary">
            {c.cta_store}
          </ExternalLink>
          <L locale={locale} href="/download/">
            <span className="btn btn-secondary">{c.cta_dl}</span>
          </L>
          <L locale={locale} href="/steam-transfer/">
            <span className="btn btn-secondary">{c.cta_tr}</span>
          </L>
          <L locale={locale} href="/foundry/">
            <span className="btn btn-secondary">{c.cta_fd}</span>
          </L>
          {/* Case Files is EN-only today; keep CTA on /case-files/ for all locales
              and label the language so the English page is not a surprise. */}
          <Link href="/case-files/">
            <span className="btn btn-secondary">
              {c.cta_cf}
              {locale === 'en' ? '' : ` (${ENGLISH_LABEL[locale]})`}
            </span>
          </Link>
        </div>
      </section>
      <IndepNotice locale={locale} />
      <div className="kpi-strip" aria-label={isPl ? 'Najważniejsze informacje' : 'Hub highlights'}>
        <span className="chip chip-dark">{isPl ? 'Aplikacja Steam 5019180' : 'Steam app 5019180'}</span>
        <span className="chip chip-light">Foundry → 2026-12-31</span>
        <span className="chip chip-ice">{isPl ? 'Niezależny poradnik' : 'Independent guide'}</span>
        <span className="chip chip-fire">{isPl ? 'Potwierdź na STOVE' : 'Verify on STOVE'}</span>
        <span className="chip chip-earth">{c.kpi_covenant}</span>
      </div>
      <LastVerified copy={HOME_VERIFIED[locale]} />
      <section className="hub-section" aria-labelledby="hub-cards-h2">
        <h2 id="hub-cards-h2">{c.hubs_h2}</h2>
        {(() => {
          const dl = CONTENT['/download/'][locale] as typeof CONTENT['/download/']['en'] & {
            hub_blurb?: string;
          };
          const byHref = new Map(c.hubs.map((h) => [h[0], h] as const));
          const primary = [
            byHref.get('/steam-transfer/'),
            byHref.get('/foundry/'),
            [
              '/download/',
              dl.h1,
              dl.hub_blurb ?? dl.lead,
              '/images/steam-header.webp',
            ] as const,
          ].filter(Boolean) as readonly (readonly string[])[];
          const primaryHrefs = new Set(primary.map((h) => h[0]));
          const secondary = c.hubs.filter(([href]) => !primaryHrefs.has(href));
          return (
            <>
              <div className="hub-grid hub-grid-primary">
                {primary.map(([href, title, blurb, img]) => (
                  <L
                    key={href}
                    locale={locale}
                    href={href}
                    className="hub-card hub-card-primary"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={img}
                      alt=""
                      width={IMAGE_SIZE[img]?.[0] ?? 1100}
                      height={IMAGE_SIZE[img]?.[1] ?? 300}
                      loading="lazy"
                    />
                    <div className="hub-card-body">
                      <strong>{title}</strong>
                      <span>{blurb}</span>
                      <span className="hub-card-cta">
                        {href === '/steam-transfer/'
                          ? c.cta_tr
                          : href === '/foundry/'
                            ? c.cta_fd
                            : c.cta_dl}{' '}
                        →
                      </span>
                    </div>
                  </L>
                ))}
              </div>
              {secondary.length > 0 ? (
                <ul className="hub-more">
                  {secondary.map(([href, title]) => (
                    <li key={href}>
                      <L locale={locale} href={href}>
                        {title}
                      </L>
                    </li>
                  ))}
                </ul>
              ) : null}
            </>
          );
        })()}
      </section>
      <section className="start-5" aria-labelledby="get-started-h2">
        <h2 id="get-started-h2">{START5[locale].h2}</h2>
        <ol className="steps">
          {START5[locale].steps.map((segs, i) => (
            <li key={i}>
              <RichLine locale={locale} segs={segs} />
            </li>
          ))}
        </ol>
      </section>
      <Fig
        src="/images/steam-header.webp"
        alt={c.img_header_alt}
        credit="Steam store header · app 5019180 · Steam CDN (fair citation)"
      />
      <Fig
        src="/images/steam-ss-battle.webp"
        alt={c.img_ss_alt}
        credit="Steam store screenshot · Steam CDN"
      />
      <section id="faq" className="faq">
        <h2>{c.faq_h2}</h2>
        {c.faqs.map(([q, a], i) => (
          <details key={q}>
            <summary>{q}</summary>
            <p>{a}</p>
            <p>
              <L locale={locale} href={HOME_FAQ_HREFS[i] ?? '/faq/'}>
                {HUB_OPEN[locale]}
              </L>
            </p>
          </details>
        ))}
        <p>
          <L locale={locale} href="/faq/">
            {c.faq_more}
          </L>
        </p>
      </section>
      <section>
        <h2>{c.map_h2}</h2>
        <div className="card">
          <h3>{c.map_steam}</h3>
          <ul>
            {c.map_links_steam.map(([h, l]) => (
              <li key={h}>
                <L locale={locale} href={h}>
                  {l}
                </L>
              </li>
            ))}
          </ul>
          <h3>{c.map_foundry}</h3>
          <ul>
            {c.map_links_fd.map(([h, l]) => (
              <li key={h}>
                <L locale={locale} href={h}>
                  {l}
                </L>
              </li>
            ))}
          </ul>
          <h3>{c.map_ong}</h3>
          <ul>
            {c.map_links_ong.map(([h, l]) => (
              <li key={h}>
                <L locale={locale} href={h}>
                  {l}
                </L>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="sources">
        <h2>{c.sources_h2}</h2>
        <ul>
          <li>
            <ExternalLink href={OFFICIAL.steamStore}>
              Steam — Epic Seven (app 5019180)
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href={OFFICIAL.stoveLaunch}>STOVE Launch</ExternalLink>
          </li>
          <li>
            <ExternalLink href={OFFICIAL.stoveSteamFaq}>
              STOVE Steam FAQ
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href={OFFICIAL.stoveFoundry}>
              STOVE Foundry
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href={OFFICIAL.stoveDemoDelete}>
              STOVE Demo deletion
            </ExternalLink>
          </li>
        </ul>
      </section>
    </PageShell>
  );
}

const DOWNLOAD_FOUNDRY_LABEL: Record<Locale, string> = {
  "en": "Foundry calendar",
  "ko": "파운드리 캘린더",
  "ja": "ファウンドリ日程",
  "zh-tw": "Foundry 日程",
  "th": "ปฏิทิน Foundry",
  "es": "Calendario de Foundry",
  "pt": "Calendário do Foundry",
  "de": "Foundry-Kalender",
  "fr": "Calendrier Foundry",
  "pl": "Kalendarz Foundry"
};

export function DownloadView({ locale }: { locale: Locale }) {
  const c = CONTENT['/download/'][locale] as typeof CONTENT['/download/']['en'] & {
    demo_h2?: string;
    demo?: readonly string[];
    anticheat_h2?: string;
    anticheat?: readonly string[];
    deep_h2?: string;
    deep?: readonly string[];
    link_transfer?: string;
    link_faq?: string;
    link_notes?: string;
    link_foundry?: string;
    link_demo?: string;
  };
  const faqs = c.faqs.map(([q, a]) => [q, faqPlain(a)] as const);
  return (
    <PageShell locale={locale} path="/download/">
      <FaqJsonLd faqs={faqs} />
      <h1>{c.h1}</h1>
      <IndepNotice locale={locale} compact />
      <QuickAnswer text={c.answer} />
      <p>{c.lead}</p>
      <p>
        <ExternalLink href={OFFICIAL.steamStore} className="btn btn-outline">
          {c.cta}
        </ExternalLink>
      </p>
      <h2>{c.before_h2}</h2>
      <Checklist
        items={c.steps.map(stripMarked)}
        doneText={CHECKLIST_COPY[locale].downloadDone}
        officialHref={OFFICIAL.steamStore}
        officialLabel="Steam app 5019180"
      />
      <Fig
        src="/images/steam-header.webp"
        alt={c.img_alt}
        credit="Steam store header · app 5019180 · Steam CDN"
      />
      <Fig
        src="/images/steam-capsule.webp"
        alt={c.img_cap_alt}
        credit="Steam capsule · Steam CDN"
      />
      <h2>{c.after_h2}</h2>
      <ul>
        {c.after.map((s) => (
          <li key={s.slice(0, 24)}>
            <RichInline locale={locale} marked={s} />
          </li>
        ))}
      </ul>
      {c.demo_h2 && c.demo ? (
        <section>
          <h2>{c.demo_h2}</h2>
          {c.demo.map((para) => (
            <p key={para.slice(0, 32)}>
              <RichInline locale={locale} marked={para} />
            </p>
          ))}
        </section>
      ) : null}
      {c.anticheat_h2 && c.anticheat ? (
        <section>
          <h2>{c.anticheat_h2}</h2>
          {c.anticheat.map((para) => (
            <p key={para.slice(0, 32)}>
              <RichInline locale={locale} marked={para} />
            </p>
          ))}
        </section>
      ) : null}
      {c.deep_h2 && c.deep ? (
        <DeepBlock locale={locale} h2={c.deep_h2} paras={c.deep} />
      ) : null}
      <h2>{c.refs_h2}</h2>
      <ul className="sources">
        <li>
          <ExternalLink href={OFFICIAL.steamStore}>Steam</ExternalLink>
        </li>
        <li>
          <ExternalLink href={OFFICIAL.stoveLaunch}>Launch</ExternalLink>
        </li>
        <li>
          <ExternalLink href={OFFICIAL.stoveSteamFaq}>Steam FAQ</ExternalLink>
        </li>
      </ul>
      <section className="faq">
        <h2>{c.faq_h2}</h2>
        {c.faqs.map(([q, a]) => (
          <details key={q}>
            <summary>{q}</summary>
            <FaqRich locale={locale} marked={a} />
          </details>
        ))}
      </section>
      <h2>{c.related_h2}</h2>
      <ul>
        <li>
          <L locale={locale} href="/steam-transfer/">
            {c.link_transfer || 'STOVE↔Steam transfer guide'}
          </L>
        </li>
        <li>
          <L locale={locale} href="/faq/">
            {c.link_faq || 'Epic Seven Steam FAQ'}
          </L>
        </li>
        <li>
          <L locale={locale} href="/steam-notes/">
            {c.link_notes || 'Steam client notes'}
          </L>
        </li>
        <li>
          <L locale={locale} href="/foundry/">
            {c.link_foundry || DOWNLOAD_FOUNDRY_LABEL[locale]}
          </L>
        </li>
        <li>
          <L locale={locale} href="/demo-delete-warning/">
            {c.link_demo || 'Demo delete warning'}
          </L>
        </li>
      </ul>
    </PageShell>
  );
}

export function TransferView({ locale }: { locale: Locale }) {
  const c = CONTENT['/steam-transfer/'][locale];
  const faqs = c.faqs.map(([q, a]) => [q, faqPlain(a)] as const);
  return (
    <PageShell locale={locale} path="/steam-transfer/">
      <FaqJsonLd faqs={faqs} />
      <h1>{c.h1}</h1>
      <IndepNotice locale={locale} compact />
      <LastVerified copy={TRANSFER_VERIFIED[locale]} />
      <p className="quick-answer">
        <strong>TL;DR — </strong>
        <RichInline locale={locale} marked={c.answer} />
      </p>
      <p>{c.goal}</p>
      <h2>{c.before_h2}</h2>
      <Checklist
        items={c.before}
        doneText={CHECKLIST_COPY[locale].transferDone}
        officialHref={OFFICIAL.stoveSteamFaq}
        officialLabel="STOVE Steam FAQ"
      />
      <Fig
        src="/images/diagram-transfer.webp"
        alt={c.img_alt}
        credit="Unofficial STOVE→Steam transfer diagram"
      />
      <Fig
        src="/images/diagram-transfer-decision.webp"
        alt={c.img_alt2}
        credit="Unofficial wrong-bind decision tree · epicsevensteam.com"
      />
      <Fig
        src="/images/steam-header.webp"
        alt={c.img_alt3}
        credit="Steam store header · app 5019180 · Steam CDN"
      />
      <Diagram nodes={c.diagram} aria={c.diagram_aria} />
      <h2>{c.rec_h2}</h2>
      <ol className="steps">
        {c.steps.map(([t, b], i) => (
          <li key={t}>
            <strong>{t}</strong> {b}
            {i === 3 ? (
              <>
                {' '}
                <L locale={locale} href="/download/">
                  {c.link_download}
                </L>
                . {c.demo_risk}{' '}
                <L locale={locale} href="/demo-delete-warning/">
                  {c.link_demo}
                </L>
                .
              </>
            ) : null}
          </li>
        ))}
      </ol>
      <h2>{c.conflict_h2}</h2>
      <div className="card warn">
        <p>{c.conflict_intro}</p>
        <ol>
          {c.conflict_steps.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ol>
        <p className="muted">{c.conflict_note}</p>
      </div>
      <h2 id="cooldown">{c.cooldown_h2}</h2>
      <div className="card warn">
        <p>{c.cooldown_lead}</p>
        <table className="data">
          <thead>
            <tr>
              {c.cooldown_th.map((t) => (
                <th key={t}>{t}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {c.cooldown_rows.map((row) => (
              <tr key={row[0]}>
                {row.map((cell) => (
                  <td key={cell}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <p className="muted">{c.cooldown_note}</p>
      </div>
      <h2>{c.tree_h2}</h2>
      {c.tree.map(([h, body]) => (
        <div key={h} className="card">
          <h3>{h}</h3>
          <p>{body}</p>
        </div>
      ))}
      <h2>{c.vs_h2}</h2>
      <p>
        {c.vs}{' '}
        <L locale={locale} href="/foundry/">
          {c.link_foundry}
        </L>
        .
      </p>
      <h2>{c.cross_h2}</h2>
      <ul>
        <li>{c.cross[0]}</li>
        <li>
          {c.related_label}{' '}
          <L locale={locale} href="/demo-delete-warning/">
            {c.link_demo}
          </L>
          ,{' '}
          <L locale={locale} href="/steam-notes/">
            {c.link_notes}
          </L>
          ,{' '}
          <L locale={locale} href="/faq/">
            {c.link_faq}
          </L>
          ,{' '}
          <L locale={locale} href="/download/">
            {c.link_download}
          </L>
          .
        </li>
      </ul>
      <DeepBlock locale={locale} h2={c.deep_h2} paras={c.deep} />
      <section className="faq">
        <h2>{c.faq_h2}</h2>
        {c.faqs.map(([q, a]) => (
          <details key={q}>
            <summary>{q}</summary>
            <FaqRich locale={locale} marked={a} />
          </details>
        ))}
      </section>
      <h2>{c.src_h2}</h2>
      <ul className="sources">
        <li>
          <ExternalLink href={OFFICIAL.stoveSteamFaq}>Steam FAQ</ExternalLink>
        </li>
        <li>
          <ExternalLink href={OFFICIAL.stoveLaunch}>Launch</ExternalLink>
        </li>
        <li>
          <ExternalLink href={OFFICIAL.steamStore}>Steam store</ExternalLink>
        </li>
        <li>
          <ExternalLink href={OFFICIAL.stoveDemoDelete}>
            STOVE demo deletion precaution
          </ExternalLink>
        </li>
      </ul>
    </PageShell>
  );
}

export function DemoView({ locale }: { locale: Locale }) {
  const c = CONTENT['/demo-delete-warning/'][locale];
  return (
    <PageShell locale={locale} path="/demo-delete-warning/">
      <FaqJsonLd faqs={c.faqs} />
      <h1>{c.h1}</h1>
      <IndepNotice locale={locale} compact />
      <h2>TL;DR</h2>
      <p className="quick-answer">{c.answer}</p>
      <Fig
        src="/images/diagram-demo-delete.webp"
        alt={c.img_alt}
        credit="Unofficial demo-delete risk diagram"
      />
      <Fig
        src="/images/diagram-demo-dodont.webp"
        alt={c.img_alt2}
        credit="Unofficial Do/Don't diagram · epicsevensteam.com"
      />
      <Fig
        src="/images/steam-capsule.webp"
        alt={c.img_alt3}
        credit="Steam store capsule · Steam CDN"
      />
      <div className="card warn">
        <p>
          <strong>{c.warn_title}</strong> {c.warn}
        </p>
        <p>
          <ExternalLink href={OFFICIAL.stoveDemoDelete}>STOVE</ExternalLink>
        </p>
      </div>
      <h2>{c.table_h2}</h2>
      <table className="data">
        <thead>
          <tr>
            {c.th.map((t) => (
              <th key={t}>{t}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {c.rows.map((row) => (
            <tr key={row[0]}>
              {row.map((cell) => (
                <td key={cell}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <h2>{c.do_h2}</h2>
      <ul>
        {c.dos.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
      <h2>{c.diff_h2}</h2>
      <p>{c.diff}</p>
      <ol>
        {c.diff_steps.map((s) => (
          <li key={s.slice(0, 40)}>{s}</li>
        ))}
      </ol>
      <DeepBlock locale={locale} h2={c.deep_h2} paras={c.deep} />
      <FaqBlock locale={locale} h2={c.faq_h2} faqs={c.faqs} />
      <h2>{c.related_h2}</h2>
      <ul>
        <li>
          <L locale={locale} href="/steam-transfer/">
            {c.link_transfer}
          </L>
        </li>
        <li>
          <L locale={locale} href="/steam-notes/">
            {c.link_notes}
          </L>
        </li>
        <li>
          <L locale={locale} href="/faq/">
            {c.link_faq}
          </L>
        </li>
        <li>
          <L locale={locale} href="/foundry/">
            {c.link_foundry}
          </L>
        </li>
      </ul>
    </PageShell>
  );
}

export function FaqView({ locale }: { locale: Locale }) {
  const c = CONTENT['/faq/'][locale];
  const dl = CONTENT['/download/'][locale];
  const allFaqs = [...c.faqs, ...FAQ_EXTRA[locale]];
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: allFaqs.map(([q, a]) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: faqPlain(a) },
    })),
  };
  return (
    <PageShell locale={locale} path="/faq/">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <h1>{c.h1}</h1>
      <IndepNotice locale={locale} compact />
      <p className="quick-answer">
        <strong>TL;DR — </strong>
        <RichInline locale={locale} marked={c.answer} />
      </p>
      <Fig
        src="/images/diagram-transfer-decision.webp"
        alt={c.img_alt}
        credit="Unofficial FAQ flowchart · wrong bind, withdraw, then convert"
      />
      <p>{c.lead}</p>
      <h2>{c.check_h2}</h2>
      <Checklist
        items={c.checks}
        doneText={CHECKLIST_COPY[locale].faqDone}
        officialHref={OFFICIAL.stoveSteamFaq}
        officialLabel="STOVE Steam FAQ"
      />
      {FAQ_GROUPS[locale].map((group) => (
        <section className="faq" key={group.h2}>
          <h2>{group.h2}</h2>
          <p>{group.intro}</p>
          {group.items.map((i) => {
            const [q, a] = allFaqs[i];
            return (
              <details key={q}>
                <summary>{q}</summary>
                <FaqRich locale={locale} marked={a} />
              </details>
            );
          })}
        </section>
      ))}
      <h2>{dl.related_h2}</h2>
      <ul>
        <li>
          <L locale={locale} href="/steam-transfer/">
            {dl.link_transfer}
          </L>
        </li>
        <li>
          <L locale={locale} href="/foundry/">
            {dl.link_foundry}
          </L>
        </li>
        <li>
          <L locale={locale} href="/download/">
            {dl.h1}
          </L>
        </li>
        <li>
          <L locale={locale} href="/steam-notes/">
            {dl.link_notes}
          </L>
        </li>
        <li>
          <L locale={locale} href="/demo-delete-warning/">
            {dl.link_demo}
          </L>
        </li>
      </ul>
      <h2>{c.src_h2}</h2>
      <ul className="sources">
        <li>
          <ExternalLink href={OFFICIAL.stoveSteamFaq}>Steam FAQ</ExternalLink>
        </li>
        <li>
          <ExternalLink href={OFFICIAL.stoveFoundry}>Foundry</ExternalLink>
        </li>
        <li>
          <ExternalLink href={OFFICIAL.stoveDemoDelete}>Demo</ExternalLink>
        </li>
        <li>
          <ExternalLink href={OFFICIAL.steamStore}>Steam</ExternalLink>
        </li>
      </ul>
    </PageShell>
  );
}

export function SteamNotesView({ locale }: { locale: Locale }) {
  const c = CONTENT['/steam-notes/'][locale];
  return (
    <PageShell locale={locale} path="/steam-notes/">
      <FaqJsonLd faqs={c.faqs} />
      <h1>{c.h1}</h1>
      <IndepNotice locale={locale} compact />
      <QuickAnswer text={c.answer} />
      <Fig
        src="/images/diagram-steam-notes.webp"
        alt={c.img_alt}
        credit="Unofficial Steam bind / launch triage diagram"
      />
      <Fig
        src="/images/diagram-uncheater.webp"
        alt={c.img_alt2}
        credit="Unofficial UNCHEATER triage · epicsevensteam.com"
      />
      <Fig
        src="/images/diagram-steam-bind.webp"
        alt={c.img_alt3}
        credit="Unofficial bind recovery outline · epicsevensteam.com"
      />
      <p>{c.lead}</p>
      <h2>{c.acct_h2}</h2>
      <ul>
        {c.acct.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
      <h2>{c.bind_h2}</h2>
      <p>{c.bind_lead}</p>
      <h3>{c.bind_sym_h3}</h3>
      <ul>
        {c.bind_sym.map((s) => (
          <li key={s.slice(0, 40)}>{s}</li>
        ))}
      </ul>
      <h3>{c.bind_fix_h3}</h3>
      <p>
        {c.bind_fix}{' '}
        <L locale={locale} href="/steam-transfer/">
          {c.link_transfer}
        </L>
        .
      </p>
      <h2>{c.sec_h2}</h2>
      <p>
        <RichInline locale={locale} marked={c.sec_prose} />
      </p>
      <ol className="steps">
        {c.sec.map((s) => (
          <li key={s.slice(0, 48)}>
            <RichInline locale={locale} marked={s} />
          </li>
        ))}
      </ol>
      <h2>{c.launch_h2}</h2>
      {c.launch.map(([h, body]) => (
        <div key={h} className="card">
          <h3>{h}</h3>
          <p>{body}</p>
        </div>
      ))}
      <h2>{c.lang_h2}</h2>
      <p>{c.lang}</p>
      <h2>{c.spec_h2}</h2>
      <table className="data">
        <tbody>
          {c.specs.map(([k, v]) => (
            <tr key={k}>
              <th>{k}</th>
              <td>{v}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <DeepBlock locale={locale} h2={c.deep_h2} paras={c.deep} />
      <FaqBlock locale={locale} h2={c.faq_h2} faqs={c.faqs} />
      <h2>{c.get_h2}</h2>
      <p>
        <ExternalLink href={OFFICIAL.steamStore} className="btn btn-outline">
          {c.cta}
        </ExternalLink>
      </p>
      <h2>{c.related_h2}</h2>
      <ul>
        <li>
          <L locale={locale} href="/steam-transfer/">
            {c.link_transfer}
          </L>
        </li>
        <li>
          <L locale={locale} href="/demo-delete-warning/">
            {c.link_demo}
          </L>
        </li>
        <li>
          <L locale={locale} href="/download/">
            {c.link_download}
          </L>
        </li>
        <li>
          <L locale={locale} href="/faq/">
            {c.link_faq}
          </L>
        </li>
        <li>
          <L locale={locale} href="/foundry/">
            {c.link_foundry}
          </L>
        </li>
      </ul>
    </PageShell>
  );
}

export function FoundryView({ locale }: { locale: Locale }) {
  const c = CONTENT['/foundry/'][locale];
  const faqs = c.faqs.map(([q, a]) => [q, faqPlain(a)] as const);
  return (
    <PageShell locale={locale} path="/foundry/">
      <FaqJsonLd faqs={faqs} />
      <h1>{c.h1}</h1>
      <IndepNotice locale={locale} compact />
      <LastVerified copy={FOUNDRY_VERIFIED[locale]} date={FOUNDRY_VERIFIED_DATE} />
      <p className="quick-answer">
        <strong>TL;DR — </strong>
        <RichInline locale={locale} marked={c.answer} />
      </p>
      <nav className="anchor-nav" aria-label={c.guide_h2}>
        <span className="anchor-nav-label">{c.guide_h2}</span>
        <a href="#server-guide">{c.unlock_h2}</a>
        <a href="#codes">{c.codes_h2}</a>
        <a href="#guild-war">{GW_LINK[locale]}</a>
        <a href="#calendar">{c.cal_h2}</a>
      </nav>
      <p>{c.lead}</p>
      <p className="as-of">{c.as_of}</p>
      <h2 id="server-guide">{c.guide_h2}</h2>
      <table className="data">
        <thead>
          <tr>
            {c.guide_th.map((t) => (
              <th key={t}>{t}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {c.guide.map((row) => (
            <tr key={row[0]}>
              {row.map((cell) => (
                <td key={cell}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <Fig
        src="/images/diagram-foundry-calendar.webp"
        alt={c.img_alt}
        credit="Unofficial Foundry calendar · cite STOVE"
      />
      <Fig
        src="/images/steam-ss-world.webp"
        alt={c.img_ss_alt}
        credit="Steam store screenshot · Steam CDN"
      />
      <Fig
        src="/images/diagram-foundry-vs-transfer.webp"
        alt={c.img_alt2}
        credit="Unofficial Transfer vs Foundry comparison · epicsevensteam.com"
      />
      <Fig
        src="/images/diagram-foundry-milestones.webp"
        alt={c.img_alt3}
        credit="Unofficial Foundry milestone strip · cite STOVE dates"
      />
      <h2 id="codes">{c.codes_h2}</h2>
      <p>{c.codes_note}</p>
      <h2>{c.vs_h2}</h2>
      <p>
        {c.vs}{' '}
        <L locale={locale} href="/steam-transfer/">
          {c.link_transfer}
        </L>
        .
      </p>
      <h2>{c.unlock_h2}</h2>
      <table className="data">
        <thead>
          <tr>
            {c.th.map((t) => (
              <th key={t}>{t}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {c.unlock.map((row) => (
            <tr key={row[0]}>
              {row.map((cell) => (
                <td key={cell}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <h2 id="calendar">{c.cal_h2}</h2>
      <table className="data">
        <thead>
          <tr>
            {c.th2.map((t) => (
              <th key={t}>{t}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {c.events.map((row) => (
            <tr key={row[0] + row[1]}>
              {row.map((cell) => (
                <td key={cell}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <h2>{c.buff_h2}</h2>
      <ul>
        {c.buffs.map((s) => (
          <li key={s.slice(0, 20)}>{s}</li>
        ))}
      </ul>
      <h2>{c.reward_h2}</h2>
      <div className="card">
        {c.rewards.map(([h, p]) => (
          <div key={h}>
            <h3>{h}</h3>
            <p>{p}</p>
          </div>
        ))}
      </div>
      <h2>{c.side_h2}</h2>
      <p>
        {c.side}{' '}
        <L locale={locale} href="/secret-rabbit-hole/">
          →
        </L>
      </p>
      <h2 id="guild-war">{c.gw_h2}</h2>
      <p className="quick-answer">
        <strong>TL;DR — </strong>
        {c.gw_answer}
      </p>
      <h3>{c.gw_unlock_h3}</h3>
      <p>{c.gw_unlock}</p>
      <h3>{c.gw_prep_h3}</h3>
      <ul>
        {c.gw_prep.map((s) => (
          <li key={s.slice(0, 40)}>{s}</li>
        ))}
      </ul>
      <h3>{c.gw_reward_h3}</h3>
      <p>{c.gw_reward}</p>
      <h2>{c.ends_h2}</h2>
      <table className="data">
        <thead>
          <tr>
            {c.ends_th.map((t) => (
              <th key={t}>{t}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {c.ends.map((row) => (
            <tr key={row[0]}>
              {row.map((cell) => (
                <td key={cell}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <h2>{c.related_h2}</h2>
      <ul>
        <li>
          <L locale={locale} href="/steam-transfer/">
            {c.link_transfer}
          </L>
        </li>
        <li>
          <L locale={locale} href="/quests/">
            {c.link_quests}
          </L>
        </li>
        {locale === 'en' ? (
          <li>
            <L locale={locale} href="/case-files/">
              Epic Seven Case Files (Steam)
            </L>
          </li>
        ) : null}
        <li>
          <L locale={locale} href="/heroes/">
            {c.link_heroes}
          </L>
        </li>
        <li>
          <L locale={locale} href="/download/">
            {c.link_download}
          </L>
        </li>
        <li>
          <L locale={locale} href="/faq/">
            {c.link_faq}
          </L>
        </li>
        <li>
          <L locale={locale} href="/banners/">
            {c.link_banners}
          </L>
        </li>
      </ul>
      <DeepBlock locale={locale} h2={c.deep_h2} paras={c.deep} />
      <FaqBlock locale={locale} h2={c.faq_h2} faqs={c.faqs} />
      <h2>{c.src_h2}</h2>
      <ul className="sources">
        <li>
          <ExternalLink href={OFFICIAL.stoveFoundry}>Foundry</ExternalLink>
        </li>
        <li>
          <ExternalLink href={OFFICIAL.stoveLaunch}>
            STOVE Launch (view/14606481)
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href={OFFICIAL.stoveHome}>STOVE hub</ExternalLink>
        </li>
        <li>
          <ExternalLink href={OFFICIAL.steamNewsFoundry}>Steam news</ExternalLink>
        </li>
        <li>
          <ExternalLink href={OFFICIAL.stoveSecretRabbitCase}>
            Case Files
          </ExternalLink>
        </li>
      </ul>
    </PageShell>
  );
}

export function RabbitView({ locale }: { locale: Locale }) {
  const c = CONTENT['/secret-rabbit-hole/'][locale];
  return (
    <PageShell locale={locale} path="/secret-rabbit-hole/">
      <h1>{c.h1}</h1>
      <IndepNotice locale={locale} compact />
      <div className="card warn">
        <h2>{c.deadline_h2}</h2>
        <p>{c.deadline_text}</p>
      </div>
      <p>{c.lead}</p>
      <h2>{c.glance_h2}</h2>
      <table className="data">
        <thead>
          <tr>
            {c.th.map((t) => (
              <th key={t}>{t}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {c.rows.map((row) => (
            <tr key={row[0]}>
              {row.map((cell) => (
                <td key={cell}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <h2>{c.case_h2}</h2>
      <div className="card">
        <ol>
          {c.case_steps.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ol>
        <p className="muted">
          {c.case_note}{' '}
          <ExternalLink href={OFFICIAL.stoveSecretRabbitCase}>STOVE</ExternalLink>
        </p>
      </div>
      <h2>{c.daily_h2}</h2>
      <p>
        {c.daily}{' '}
        <ExternalLink href={OFFICIAL.stoveLuckyBoard}>STOVE</ExternalLink>
      </p>
      <SupplementSections sections={RABBIT_SUPPLEMENT[locale]} />
      <h2>{c.related_h2}</h2>
      <ul>
        <li>
          <L locale={locale} href="/foundry/#guild-war">
            {GW_LINK[locale]}
          </L>
        </li>
        <li>
          <L locale={locale} href="/banners/">
            Banners
          </L>
        </li>
        {locale === 'en' ? (
          <li>
            <L locale={locale} href="/case-files/">
              Case Files guide (Steam)
            </L>
          </li>
        ) : null}
      </ul>
    </PageShell>
  );
}

export function BannersView({ locale }: { locale: Locale }) {
  const c = CONTENT['/banners/'][locale];
  return (
    <PageShell locale={locale} path="/banners/">
      <h1>{c.h1}</h1>
      <IndepNotice locale={locale} compact />
      <QuickAnswer text={c.answer} />
      <Fig
        src="/images/steam-ss-heroes.webp"
        alt={c.img_alt}
        credit="Steam store screenshot · Steam CDN"
      />
      <p>{c.lead}</p>
      <article className="card pickup">
        <p className="as-of">{c.pickup_kicker}</p>
        <h2>{c.pickup_h2}</h2>
        <p>
          <strong>{c.pickup_artifact}</strong>
        </p>
        <p className="pickup-window">{c.pickup_window}</p>
        <p>
          <RichInline locale={locale} marked={c.pickup_body} />
        </p>
        <p className="muted">{c.pickup_note}</p>
        <p className="sources">
          <ExternalLink href={OFFICIAL.stoveAnnouncements}>
            {c.pickup_source}
          </ExternalLink>
        </p>
      </article>
      <article className="card">
        <h2>{c.launch_h2}</h2>
        <ul>
          {c.launch.map((s) => (
            <li key={s.slice(0, 30)}>{s}</li>
          ))}
        </ul>
        <p className="sources">
          <ExternalLink href={OFFICIAL.stoveFoundry}>STOVE Foundry</ExternalLink>
        </p>
      </article>
      <article className="card">
        <h2>{c.how_h2}</h2>
        <ul>
          {c.how.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </article>
      <SupplementSections sections={BANNERS_SUPPLEMENT[locale]} />
      <p>
        {c.also}{' '}
        <L locale={locale} href="/heroes/">
          Heroes
        </L>{' '}
        ·{' '}
        <L locale={locale} href="/updates/">
          Updates
        </L>{' '}
        ·{' '}
        <L locale={locale} href="/foundry/">
          Foundry
        </L>
        {' · '}
        <L locale={locale} href="/foundry/#guild-war">
          {GW_LINK[locale]}
        </L>
        {' · '}
        <L locale={locale} href="/tier-list/">
          {TIER_LINK_LABEL[locale]}
        </L>
      </p>
    </PageShell>
  );
}

export function UpdatesView({ locale }: { locale: Locale }) {
  const c = CONTENT['/updates/'][locale];
  return (
    <PageShell locale={locale} path="/updates/">
      <h1>{c.h1}</h1>
      <IndepNotice locale={locale} compact />
      <QuickAnswer text={c.answer} />
      <Fig
        src="/images/steam-header.webp"
        alt={c.img_alt}
        credit="Steam store header · Steam CDN"
      />
      <p>{c.lead}</p>
      {c.cards.map(([title, bullets, src]) => (
        <article className="card" key={title}>
          <h2>{title}</h2>
          <ul>
            {bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
          {src ? <p className="sources">{src}</p> : null}
        </article>
      ))}
      <SupplementSections sections={UPDATES_SUPPLEMENT[locale]} />
      <p>
        {c.cont}{' '}
        <L locale={locale} href="/foundry/">
          Foundry
        </L>{' '}
        ·{' '}
        <L locale={locale} href="/banners/">
          Banners
        </L>{' '}
        ·{' '}
        <L locale={locale} href="/quests/">
          Quests
        </L>
      </p>
    </PageShell>
  );
}

export function MaintenanceView({ locale }: { locale: Locale }) {
  const c = CONTENT['/maintenance/'][locale];
  return (
    <PageShell locale={locale} path="/maintenance/">
      <h1>{c.h1}</h1>
      <IndepNotice locale={locale} compact />
      <QuickAnswer text={c.answer} locale={locale} rich />
      <Fig
        src="/images/steam-capsule.webp"
        alt={c.img_alt}
        credit="Steam capsule · Steam CDN"
      />
      <p>{c.lead}</p>
      {c.cards.map(([title, bullets]) => (
        <article className="card" key={title}>
          <h2>{title}</h2>
          <ul>
            {bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </article>
      ))}
      <article className="card">
        <h2>{c.how_h2}</h2>
        <ul>
          {c.how.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </article>
      <SupplementSections sections={MAINTENANCE_SUPPLEMENT[locale]} />
      <p>
        <L locale={locale} href="/updates/">
          Updates
        </L>{' '}
        ·{' '}
        <L locale={locale} href="/foundry/">
          Foundry
        </L>{' '}
        ·{' '}
        <L locale={locale} href="/steam-notes/">
          Steam notes
        </L>
      </p>
    </PageShell>
  );
}

export function AboutView({ locale }: { locale: Locale }) {
  const c = CONTENT['/about/'][locale];
  return (
    <PageShell locale={locale} path="/about/">
      <h1>{c.h1}</h1>
      <IndepNotice locale={locale} />
      <p>{c.p1}</p>
      <h2>{c.not_h2}</h2>
      <ul>
        {c.nots.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
      <h2>{c.dom_h2}</h2>
      <p>{c.dom}</p>
      <h2>{c.contact_h2}</h2>
      <p>
        <a href={`mailto:${CONTACT_PRIVACY}`}>{CONTACT_PRIVACY}</a> — {c.contact}
      </p>
      <h2>{c.off_h2}</h2>
      <ul>
        <li>
          <ExternalLink href={OFFICIAL.steamStore}>Steam</ExternalLink>
        </li>
        <li>
          <ExternalLink href={OFFICIAL.stoveHome}>STOVE</ExternalLink>
        </li>
        <li>
          <L locale={locale} href="/privacy/">
            Privacy
          </L>
        </li>
      </ul>
    </PageShell>
  );
}

export function ContactView({ locale }: { locale: Locale }) {
  const c = CONTENT['/contact/'][locale];
  return (
    <PageShell locale={locale} path="/contact/">
      <h1>{c.h1}</h1>
      <IndepNotice locale={locale} />
      <p>{c.lead}</p>
      <h2>{c.scope_h2}</h2>
      <ul>
        {c.scope.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
      <h2>{c.limits_h2}</h2>
      <ul>
        {c.limits.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
      <h2>{c.contact_h2}</h2>
      <p>
        <a href={`mailto:${CONTACT_PRIVACY}`}>{CONTACT_PRIVACY}</a> — {c.contact}
      </p>
      <p>
        <L locale={locale} href="/about/">
          {c.about_link}
        </L>
        {' · '}
        <L locale={locale} href="/privacy/">
          {c.privacy_link}
        </L>
      </p>
    </PageShell>
  );
}

export function PrivacyView({ locale }: { locale: Locale }) {
  const c = CONTENT['/privacy/'][locale];
  return (
    <PageShell locale={locale} path="/privacy/">
      <h1>{c.h1}</h1>
      <p className="muted">
        <time dateTime="2026-11-03">{c.updated}</time>
      </p>
      <IndepNotice locale={locale} compact />
      <p>{c.p1}</p>
      <h2>{c.collect_h2}</h2>
      <ul>
        {c.collect.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
      <h2>{c.ads_h2}</h2>
      <ul>
        {c.ads.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
      <h2>{c.out_h2}</h2>
      <p>{c.out}</p>
      <h2>{c.contact_h2}</h2>
      <p>
        <a href={`mailto:${CONTACT_PRIVACY}`}>{CONTACT_PRIVACY}</a> — {c.contact}
      </p>
    </PageShell>
  );
}

export function HeroesView({ locale }: { locale: Locale }) {
  const c = CONTENT['/heroes/'][locale];
  const fd = CONTENT['/foundry/'][locale];
  const dl = CONTENT['/download/'][locale];
  const prioLabels = {
    high: c.prio_high,
    mid: c.prio_mid,
    later: c.prio_later,
  };
  const groups: { id: string; key: string; h2: string; body: string; fig: string; alt: string; credit: string }[] = [
    {
      id: 'tutorial-early-leads',
      key: 'tutorial',
      h2: c.group_tutorial_h2,
      body: c.group_tutorial_body,
      fig: '/images/diagram-heroes.webp',
      alt: c.img_alt,
      credit: 'Unofficial roles banner · epicsevensteam.com',
    },
    {
      id: 'specialty-change',
      key: 'specialty',
      h2: c.group_specialty_h2,
      body: c.group_specialty_body,
      fig: '/images/diagram-heroes-groups.webp',
      alt: c.img_alt2,
      credit: 'Unofficial on-site hero group cards · epicsevensteam.com',
    },
    {
      id: 'farmers-hunt',
      key: 'farmer',
      h2: c.group_farmer_h2,
      body: c.group_farmer_body,
      fig: '/images/diagram-heroes-path.webp',
      alt: c.img_alt4,
      credit: 'Unofficial early build-order diagram · epicsevensteam.com',
    },
  ];
  const rows = c.heroes as unknown as HeroRow[];

  return (
    <PageShell locale={locale} path="/heroes/">
      <FaqJsonLd faqs={c.faqs} />
      <h1>{c.h1}</h1>
      <IndepNotice locale={locale} compact />
      <QuickAnswer text={c.answer} />
      <LastVerified copy={HEROES_VERIFIED[locale]} />
      <p className="muted">
        <L locale={locale} href="/tier-list/">
          {TIER_LINK_LABEL[locale]}
        </L>
      </p>
      <nav className="anchor-nav" aria-label={c.anchors_label}>
        <span className="anchor-nav-label">{c.anchors_label}</span>
        <a href="#elements">{c.anchor_elements}</a>
        <a href="#classes">{c.anchor_classes}</a>
        <a href="#specialty-change">{c.anchor_specialty}</a>
        <a href="#farmers-hunt">{c.anchor_farmer}</a>
      </nav>
      <p className="prio-note muted">{c.prio_note}</p>
      <div className="kpi-strip" id="elements" aria-label={c.anchor_elements}>
        <span className="chip chip-fire">Fire</span>
        <span className="chip chip-ice">Ice</span>
        <span className="chip chip-earth">Earth</span>
        <span className="chip chip-light">Light</span>
        <span className="chip chip-dark">Dark</span>
      </div>
      <div className="kpi-strip" id="classes" aria-label={c.anchor_classes}>
        <span className="chip chip-role">Knight</span>
        <span className="chip chip-role">Warrior</span>
        <span className="chip chip-role">Mage</span>
        <span className="chip chip-role">Ranger</span>
        <span className="chip chip-role">Soul Weaver</span>
        <span className="chip chip-role">Thief</span>
      </div>
      <Fig
        src="/images/steam-ss-heroes.webp"
        alt={c.img_ss_alt}
        credit="Steam store screenshot · Steam CDN"
      />
      <Fig
        src="/images/diagram-heroes-compare.webp"
        alt={c.img_alt3}
        credit="Unofficial role focus schematic · epicsevensteam.com"
      />
      <p>{c.lead}</p>
      <h2>{c.onsite_h2}</h2>
      <p>{c.onsite}</p>
      {groups.map((g) => {
        const list = heroesInGroup(rows, g.key);
        return (
          <section key={g.id} id={g.id} className="hero-group">
            <h2>{g.h2}</h2>
            <div
              className={prioClass(
                g.key === 'specialty' ? 'high' : g.key === 'tutorial' ? 'mid' : 'mid',
              )}
              role="img"
              aria-label={`${c.prio_label}: ${
                g.key === 'specialty' ? c.prio_high : c.prio_mid
              }`}
            >
              <span className="prio-label">{c.prio_label}</span>
              <span className="prio-value">
                {g.key === 'specialty' ? c.prio_high : c.prio_mid}
              </span>
            </div>
            <p>{g.body}</p>
            <Fig src={g.fig} alt={g.alt} credit={g.credit} />
            <div className="hero-grid">
              {list.map(([slug, name, role, el, brief, _group, prio]) => (
                <article key={slug} id={slug} className="hero-card card">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="hero-avatar"
                    src={`/images/avatars/${slug}.webp`}
                    alt={`${name}${c.avatar_alt_suffix}`}
                    width={160}
                    height={160}
                    loading="lazy"
                  />
                  <div className="hero-card-main">
                    <h3>
                      <a href={`#${slug}`}>{name}</a>
                    </h3>
                    <div className="hero-card-chips">
                      <span className={elementChipClass(el)}>{el}</span>
                      <span className="chip chip-role">{role}</span>
                    </div>
                    <div
                      className={prioClass(prio)}
                      role="img"
                      aria-label={`${c.prio_label}: ${prioLabel(prio, prioLabels)}`}
                    >
                      <span className="prio-label">{c.prio_label}</span>
                      <span className="prio-value">
                        {prioLabel(prio, prioLabels)}
                      </span>
                    </div>
                    <p className="hero-brief">{brief}</p>
                    <div className="hero-focus-chips">
                      {roleChipsFor(slug).map((chip) => (
                        <span
                          key={chip.label}
                          className="chip chip-focus"
                          {...(chip.aria !== chip.label
                            ? { 'aria-label': chip.aria }
                            : {})}
                        >
                          {chip.label}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        );
      })}
      <h2>{c.cite_h2}</h2>
      <p>{c.cite}</p>
      <h2>{c.roster_h2}</h2>
      <table className="data">
        <thead>
          <tr>
            {c.th.map((t) => (
              <th key={t}>{t}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map(([slug, name, role, el, brief, _group, prio]) => (
            <tr key={slug}>
              <td>
                <a href={`#${slug}`}>{name}</a>
              </td>
              <td>
                <span className="chip chip-role">{role}</span>
              </td>
              <td>
                <span className={elementChipClass(el)}>{el}</span>
              </td>
              <td>{prioLabel(prio, prioLabels)}</td>
              <td>{brief}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="muted">{c.note}</p>
      <DeepBlock locale={locale} h2={c.deep_h2} paras={c.deep} />
      <FaqBlock locale={locale} h2={c.faq_h2} faqs={c.faqs} />
      <h2>{c.related_h2}</h2>
      <ul>
        <li>
          <L locale={locale} href="/banners/">
            {fd.link_banners}
          </L>
        </li>
        <li>
          <L locale={locale} href="/foundry/">
            {dl.link_foundry}
          </L>
        </li>
        <li>
          <L locale={locale} href="/tier-list/">
            {TIER_LINK_LABEL[locale]}
          </L>
        </li>
        <li>
          <L locale={locale} href="/quests/">
            {fd.link_quests}
          </L>
        </li>
        <li>
          <L locale={locale} href="/steam-transfer/">
            {dl.link_transfer}
          </L>
        </li>
      </ul>
      <details className="further-reading">
        <summary>{c.further_summary}</summary>
        <h2>{c.further_h2}</h2>
        <p className="muted">{c.further_note}</p>
        <ul>
          {c.further.map(([name, href]) => (
            <li key={href}>
              <ExternalLink href={href}>{name}</ExternalLink>
            </li>
          ))}
        </ul>
      </details>
    </PageShell>
  );
}

export function QuestsView({ locale }: { locale: Locale }) {
  const c = CONTENT['/quests/'][locale];
  const fd = CONTENT['/foundry/'][locale];
  const dl = CONTENT['/download/'][locale];
  const cl = CHECKLIST_COPY[locale];
  const foundryRe = /Foundry|파운드리|ファウンドリ|伺服器|เซิร์ฟเวอร์/i;
  const legacyRe = /legacy|레거시|原服|レガシー|Legado|Héritage|Altbestand|เดิม/i;
  const scopeFor = (task: string) =>
    foundryRe.test(task) && !legacyRe.test(task) ? cl.scopeFoundry : cl.scopeBoth;
  const questRows: (readonly [string, string, string, string])[] = [
    ...c.daily.map(
      (task) =>
        [cl.resetDaily, stripMarked(task), scopeFor(task), cl.noteTimer] as const,
    ),
    ...c.weekly.map(
      (task) =>
        [cl.resetWeekly, stripMarked(task), scopeFor(task), cl.noteTimer] as const,
    ),
  ];
  return (
    <PageShell locale={locale} path="/quests/">
      <FaqJsonLd faqs={c.faqs} />
      <h1>{c.h1}</h1>
      <IndepNotice locale={locale} compact />
      <p className="quick-answer">
        <strong>TL;DR — </strong>
        <RichInline locale={locale} marked={c.answer} />
      </p>
      <p>{c.lead}</p>
      <p className="muted">{c.reset_note}</p>
      <QuestChecklist
        headers={cl.questTh}
        rows={questRows}
        doneText={cl.questDone}
      />
      <Fig
        src="/images/diagram-quests.webp"
        alt={c.img_alt}
        credit="Unofficial quest rhythm diagram"
      />
      <Fig
        src="/images/steam-ss-world.webp"
        alt={c.img_ss_alt}
        credit="Steam store screenshot · Steam CDN"
      />
      <Fig
        src="/images/diagram-quests-foundry-delta.webp"
        alt={c.img_alt2}
        credit="Unofficial Foundry vs legacy quest delta · epicsevensteam.com"
      />
      <Fig
        src="/images/diagram-quests-priority.webp"
        alt={c.img_alt3}
        credit="Unofficial quest priority strip · epicsevensteam.com"
      />
      <h2>{c.foundry_h2}</h2>
      <ul>
        {c.foundry_delta.map((s) => (
          <li key={s.slice(0, 40)}>{s}</li>
        ))}
      </ul>
      <p>
        <RichInline locale={locale} marked={c.foundry_track} />
      </p>
      <h2>{c.hub_h2}</h2>
      <p>
        {c.hub}{' '}
        <L locale={locale} href="/secret-rabbit-hole/">
          {c.link_rabbit}
        </L>{' '}
        ·{' '}
        <L locale={locale} href="/foundry/">
          {c.link_foundry}
        </L>
        .
      </p>
      <h2>{c.main_h2}</h2>
      <ul>
        {c.main.map((s) => (
          <li key={s.slice(0, 40)}>{s}</li>
        ))}
      </ul>
      <h2>{c.daily_h2}</h2>
      <ul>
        {c.daily.map((s) => (
          <li key={s.slice(0, 40)}>{s}</li>
        ))}
      </ul>
      <h2>{c.weekly_h2}</h2>
      <ul>
        {c.weekly.map((s) => (
          <li key={s.slice(0, 40)}>{s}</li>
        ))}
      </ul>
      <h2>{c.event_h2}</h2>
      <ul>
        {c.event.map((s) => (
          <li key={s.slice(0, 40)}>{s}</li>
        ))}
      </ul>
      <h2 id="case-files">{c.case_files_h2}</h2>
      {c.case_files.map((s) => (
        <p key={s.slice(0, 48)}>{s}</p>
      ))}
      {locale === 'en' ? (
        <p>
          <L locale={locale} href="/case-files/">
            Epic Seven Case Files (Steam) — full guide
          </L>
        </p>
      ) : null}
      <p>
        <L locale={locale} href="/">
          {c.link_home}
        </L>{' '}
        ·{' '}
        <L locale={locale} href="/foundry/">
          {c.link_foundry}
        </L>
        .
      </p>
      <DeepBlock locale={locale} h2={c.deep_h2} paras={c.deep} />
      <FaqBlock locale={locale} h2={c.faq_h2} faqs={c.faqs} />
      <h2>{c.related_h2}</h2>
      <ul>
        <li>
          <L locale={locale} href="/foundry/#server-guide">
            {c.link_foundry}
          </L>
        </li>
        <li>
          <L locale={locale} href="/foundry/#guild-war">
            {GW_LINK[locale]}
          </L>
        </li>
        <li>
          <L locale={locale} href="/heroes/">
            {fd.link_heroes}
          </L>
        </li>
        <li>
          <L locale={locale} href="/steam-transfer/">
            {dl.link_transfer}
          </L>
        </li>
        <li>
          <ExternalLink href={OFFICIAL.stoveSteamFaq}>STOVE Steam FAQ</ExternalLink>
        </li>
      </ul>
    </PageShell>
  );
}

/* ------------------------------------------------------------------ */
/* /tier-list/ — Steam/transfer lens. Kept outside CONTENT so the page */
/* can use typed scenario bands without widening every locale object.  */
/* ------------------------------------------------------------------ */

function TierBadge({ tier, label }: { tier: Tier; label?: string }) {
  return (
    <span className={`tier-badge tier-${tier.toLowerCase()}`}>
      {label ? `${label} ` : ''}
      {tier}
    </span>
  );
}

function TierItem({ hero, locale }: { hero: TierHero; locale: Locale }) {
  const content = (
    <>
      {hero.avatar ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          className="tier-avatar"
          src={`/images/avatars/${hero.slug}.webp`}
          alt={`${hero.name}${TIER_AVATAR_ALT[locale]}`}
          width={28}
          height={28}
          loading="lazy"
        />
      ) : (
        <span className="tier-initial" aria-hidden="true">
          {hero.name.slice(0, 1)}
        </span>
      )}
      <span>{hero.name}</span>
    </>
  );
  if (!hero.avatar) {
    return <span className="tier-chip tier-chip--text">{content}</span>;
  }
  return (
    <L locale={locale} href={`/heroes/#${hero.slug}`} className="tier-chip">
      {content}
    </L>
  );
}

function TierBoard({
  locale,
  scenario,
  side,
}: {
  locale: Locale;
  scenario: TierScenario;
  side?: 'offense' | 'defense';
}) {
  return (
    <div className="tier-board">
      {TIER_ORDER.map((tier) => {
        const list = TIER_HEROES.filter((hero) => {
          if (hero[scenario] !== tier) return false;
          if (!side) return true;
          return (
            hero.gwSide === side ||
            hero.gwSide === 'both' ||
            hero.gwSide === 'flex'
          );
        });
        if (list.length === 0) return null;
        return (
          <div className="tier-row" key={tier}>
            <div className={`tier-label tier-${tier.toLowerCase()}`}>{tier}</div>
            <div className="tier-items">
              {list.map((hero) => (
                <TierItem key={hero.slug} hero={hero} locale={locale} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function TierHeroCard({
  hero,
  locale,
  note,
}: {
  hero: TierHero;
  locale: Locale;
  note: string;
}) {
  return (
    <article className="hero-card tier-card">
      {hero.avatar ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          className="hero-avatar"
          src={`/images/avatars/${hero.slug}.webp`}
          alt={`${hero.name}${TIER_AVATAR_ALT[locale]}`}
          width={160}
          height={160}
          loading="lazy"
        />
      ) : (
        <span className="tier-monogram" aria-hidden="true">
          {hero.name.slice(0, 1)}
        </span>
      )}
      <div className="hero-card-main">
        <h3>
          {hero.avatar ? (
            <L locale={locale} href={`/heroes/#${hero.slug}`}>
              {hero.name}
            </L>
          ) : (
            hero.name
          )}
        </h3>
        <div className="hero-card-chips">
          <span className={elementChipClass(hero.element)}>{hero.element}</span>
          <span className="chip chip-role">{hero.role}</span>
        </div>
        <div className="tier-badges">
          <TierBadge tier={hero.pve} label="PvE" />
          <TierBadge tier={hero.gw} label="GW" />
          <TierBadge tier={hero.wa} label="WA" />
        </div>
        <p className="hero-brief">{note}</p>
      </div>
    </article>
  );
}

export function TierListView({ locale }: { locale: Locale }) {
  const c = TIER_LIST_COPY[locale];
  const faqs = c.faqs.map(([q, a]) => [q, faqPlain(a)] as const);
  const avatarHeroes = TIER_HEROES.filter((hero) => hero.avatar);
  const beyondHeroes = TIER_HEROES.filter((hero) => !hero.avatar);

  return (
    <PageShell locale={locale} path="/tier-list/">
      <FaqJsonLd faqs={faqs} />
      <h1>{c.h1}</h1>
      <IndepNotice locale={locale} />
      <p className="last-verified">
        {c.last_before}
        <time dateTime="2026-11-03">2026-11-03</time>
        {c.last_after}
      </p>
      <QuickAnswer text={c.answer} />
      <nav className="anchor-nav" aria-label={c.anchors_label}>
        <span className="anchor-nav-label">{c.anchors_label}</span>
        <a href="#steam-lens">{c.anchor_why}</a>
        <a href="#bands">{c.anchor_bands}</a>
        <a href="#steam-constraints">{c.anchor_constraints}</a>
        <a href="#pve">{c.anchor_pve}</a>
        <a href="#guild-war">{c.anchor_gw}</a>
        <a href="#world-arena">{c.anchor_wa}</a>
        <a href="#budget">{c.anchor_budget}</a>
        <a href="#plan">{c.anchor_plan}</a>
        <a href="#roster">{c.anchor_roster}</a>
        <a href="#faq">{c.anchor_faq}</a>
      </nav>
      <p className="prio-note muted">{c.lens_note}</p>
      <Fig
        src="/images/steam-ss-battle.webp"
        alt={c.img_alt_battle}
        credit="Steam store screenshot · app 5019180 · Steam CDN"
      />
      <p>{c.lead}</p>

      <section id="steam-lens">
        <h2>{c.why_h2}</h2>
        <p>{c.why_p1}</p>
        <p>{c.why_p2}</p>
        <p>{c.why_p3}</p>
        <aside className="card warn">
          <h3>{c.not_h2}</h3>
          <p>{c.not_p}</p>
          <ul className="sources">
            {c.consensus.map((item) => (
              <li key={item.href}>
                <ExternalLink href={item.href}>{item.name}</ExternalLink> —{' '}
                {item.note}
              </li>
            ))}
          </ul>
        </aside>
      </section>

      <section id="bands">
        <h2>{c.bands_h2}</h2>
        <p>{c.bands_intro}</p>
        <table className="data">
          <thead>
            <tr>
              {c.bands_th.map((th) => (
                <th key={th}>{th}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {c.bands.map((band) => (
              <tr key={band.tier}>
                <td>
                  <TierBadge tier={band.tier} />
                </td>
                <td>
                  <strong>{band.label}</strong>
                </td>
                <td>
                  {band.meaning} <span className="muted">{band.action}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="muted">{c.bands_note}</p>
      </section>

      <section id="steam-constraints">
        <h2>{c.constraints_h2}</h2>
        <p>{c.constraints_intro}</p>
        <Fig
          src="/images/diagram-foundry-calendar.webp"
          alt={c.img_alt_calendar}
          credit="Unofficial Foundry calendar · cite STOVE dates"
        />
        <ul>
          {c.constraints.map((item) => (
            <li key={item.slice(0, 40)}>
              <RichInline locale={locale} marked={item} />
            </li>
          ))}
        </ul>
      </section>

      <section id="pve">
        <h2>{c.pve_h2}</h2>
        <p>{c.pve_intro}</p>
        <TierBoard locale={locale} scenario="pve" />
        <p className="muted">{c.pve_note}</p>
      </section>

      <section id="guild-war">
        <h2>{c.gw_h2}</h2>
        <p className="quick-answer">
          <strong>TL;DR — </strong>
          {c.gw_answer}
        </p>
        <p>{c.gw_intro}</p>
        <h3>{c.gw_off_h3}</h3>
        <TierBoard locale={locale} scenario="gw" side="offense" />
        <p className="muted">{c.gw_off_note}</p>
        <h3>{c.gw_def_h3}</h3>
        <TierBoard locale={locale} scenario="gw" side="defense" />
        <p className="muted">{c.gw_def_note}</p>
        <h3>{c.gw_prep_h3}</h3>
        <ul>
          {c.gw_prep.map((item) => (
            <li key={item.slice(0, 40)}>{item}</li>
          ))}
        </ul>
        <p>
          <L locale={locale} href="/foundry/#guild-war">
            {c.gw_link_label}
          </L>
        </p>
      </section>

      <section id="world-arena">
        <h2>{c.wa_h2}</h2>
        <p className="quick-answer">
          <strong>TL;DR — </strong>
          {c.wa_answer}
        </p>
        <p>{c.wa_intro}</p>
        <TierBoard locale={locale} scenario="wa" />
        <h3>{c.wa_draft_h3}</h3>
        <ul>
          {c.wa_draft.map((item) => (
            <li key={item.slice(0, 40)}>{item}</li>
          ))}
        </ul>
        <h3>{c.wa_counter_h3}</h3>
        <ul>
          {c.wa_counter.map((item) => (
            <li key={item.slice(0, 40)}>{item}</li>
          ))}
        </ul>
        <p className="muted">{c.wa_note}</p>
      </section>

      <section id="budget">
        <h2>{c.budget_h2}</h2>
        <p>{c.budget_intro}</p>
        <table className="data">
          <thead>
            <tr>
              {c.budget_th.map((th) => (
                <th key={th}>{th}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {c.budget.map((row) => (
              <tr key={row[0]}>
                {row.map((cell) => (
                  <td key={cell}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section id="plan">
        <h2>{c.plan_h2}</h2>
        <p>{c.plan_intro}</p>
        <ol className="steps">
          {c.plan.map((item) => (
            <li key={item.slice(0, 40)}>
              <RichInline locale={locale} marked={item} />
            </li>
          ))}
        </ol>
      </section>

      <section id="roster">
        <h2>{c.roster_h2}</h2>
        <p>
          <RichInline locale={locale} marked={c.roster_intro} />
        </p>
        <div className="hero-grid tier-hero-grid">
          {avatarHeroes.map((hero) => (
            <TierHeroCard
              key={hero.slug}
              hero={hero}
              locale={locale}
              note={c.hero_notes[hero.slug] ?? ''}
            />
          ))}
        </div>
        <h2>{c.beyond_h2}</h2>
        <p>{c.beyond_intro}</p>
        <div className="hero-grid tier-hero-grid">
          {beyondHeroes.map((hero) => (
            <TierHeroCard
              key={hero.slug}
              hero={hero}
              locale={locale}
              note={c.hero_notes[hero.slug] ?? ''}
            />
          ))}
        </div>
      </section>

      <section id="banners">
        <h2>{c.banners_h2}</h2>
        <p>
          <RichInline locale={locale} marked={c.banners_p} />
        </p>
      </section>

      <section className="faq" id="faq">
        <h2>{c.faq_h2}</h2>
        {c.faqs.map(([q, a]) => (
          <details key={q}>
            <summary>{q}</summary>
            <FaqRich locale={locale} marked={a} />
          </details>
        ))}
      </section>

      <section className="sources">
        <h2>{c.sources_h2}</h2>
        <p className="muted">{c.sources_note}</p>
        <ul>
          <li>
            <ExternalLink href={OFFICIAL.stoveHome}>
              STOVE — Epic Seven notices
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href={OFFICIAL.steamStore}>
              Steam — Epic Seven (app 5019180)
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href={OFFICIAL.stoveFoundry}>
              STOVE — Foundry notice (view/14571828)
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href={OFFICIAL.stoveSteamFaq}>
              STOVE — Steam FAQ (view/14378309)
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href="https://epic7db.com/">epic7db</ExternalLink> —{' '}
            full-roster reference
          </li>
          <li>
            <ExternalLink href="https://www.prydwen.gg/epic-seven/">
              Prydwen — Epic Seven
            </ExternalLink>{' '}
            — patch rankings
          </li>
          <li>
            <ExternalLink href="https://epic7x.com/">epic7x</ExternalLink> —
            hero kit pages
          </li>
        </ul>
      </section>

      <section>
        <h2>{c.related_h2}</h2>
        <ul>
          {c.related.map(([href, label]) => (
            <li key={href}>
              <L locale={locale} href={href}>
                {label}
              </L>
            </li>
          ))}
        </ul>
      </section>
    </PageShell>
  );
}
