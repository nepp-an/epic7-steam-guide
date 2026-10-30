import Link from 'next/link';
import { ExternalLink } from '@/components/ExternalLink';
import { IndepNotice } from '@/components/IndepNotice';
import { PageShell } from '@/components/PageShell';
import { CONTENT } from '@/lib/i18n/content';
import {
  AS_OF,
  CONTACT_PRIVACY,
  OFFICIAL,
  TARGET_DOMAIN,
  type Locale,
  localizedPath,
} from '@/lib/site';

function L({
  locale,
  href,
  children,
}: {
  locale: Locale;
  href: string;
  children: React.ReactNode;
}) {
  return <Link href={localizedPath(locale, href)}>{children}</Link>;
}

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

function QuickAnswer({ text }: { text: string }) {
  return (
    <p className="quick-answer">
      <strong>TL;DR — </strong>
      {text}
    </p>
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
  h2,
  paras,
}: {
  h2: string;
  paras: readonly string[];
}) {
  return (
    <section>
      <h2>{h2}</h2>
      {paras.map((para) => (
        <p key={para.slice(0, 32)}>{para}</p>
      ))}
    </section>
  );
}

function FaqBlock({
  h2,
  faqs,
}: {
  h2: string;
  faqs: readonly (readonly [string, string])[];
}) {
  return (
    <section className="faq">
      <h2>{h2}</h2>
      {faqs.map(([q, a]) => (
        <details key={q}>
          <summary>{q}</summary>
          <p>{a}</p>
        </details>
      ))}
    </section>
  );
}


export function HomeView({ locale }: { locale: Locale }) {
  const c = CONTENT['/'][locale];
  return (
    <PageShell locale={locale} path="/">
      <FaqJsonLd faqs={c.faqs} />
      <section className="hero">
        <h1>{c.h1}</h1>
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
        </div>
      </section>
      <IndepNotice locale={locale} />
      <div className="kpi-strip" aria-label="Hub highlights">
        <span className="chip chip-dark">Steam app 5019180</span>
        <span className="chip chip-light">Foundry → 2026-12-31</span>
        <span className="chip chip-ice">Independent guide</span>
        <span className="chip chip-fire">Verify on STOVE</span>
      </div>
      <QuickAnswer text={c.answer} />
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
      <section id="transfer">
        <h2>{c.transfer_h2}</h2>
        <p className="muted">{c.transfer_muted}</p>
        <Fig
          src="/images/diagram-transfer.webp"
          alt={c.img_transfer_alt}
          credit="Unofficial transfer diagram · epicsevensteam.com"
        />
        <Diagram nodes={c.diagram} aria={c.diagram_aria} />
        <ol className="steps">
          {c.steps.map(([t, b]) => (
            <li key={t}>
              <strong>{t}</strong> {b}
            </li>
          ))}
        </ol>
      </section>
      <section id="foundry">
        <h2>{c.foundry_h2}</h2>
        <p className="as-of">{c.as_of}</p>
        <Fig
          src="/images/diagram-foundry-calendar.webp"
          alt={c.img_foundry_alt}
          credit="Unofficial Foundry calendar visual · cite STOVE"
        />
        <Fig
          src="/images/diagram-home-path.webp"
          alt={c.img_path_alt}
          credit="Unofficial path chooser · epicsevensteam.com"
        />
        <Fig
          src="/images/steam-ss-world.webp"
          alt={c.img_world_alt}
          credit="Steam store screenshot · Steam CDN"
        />
        <div className="card">
          <table className="data">
            <thead>
              <tr>
                <th>{c.th_content}</th>
                <th>{c.th_open}</th>
              </tr>
            </thead>
            <tbody>
              {c.rows.map(([a, b]) => (
                <tr key={a}>
                  <td>{a}</td>
                  <td>{b}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p>
            {c.foundry_p}{' '}
            <L locale={locale} href="/foundry/">
              →
            </L>{' '}
            <ExternalLink href={OFFICIAL.stoveFoundry}>STOVE</ExternalLink>
          </p>
        </div>
      </section>
      <section id="faq" className="faq">
        <h2>{c.faq_h2}</h2>
        {c.faqs.map(([q, a]) => (
          <details key={q}>
            <summary>{q}</summary>
            <p>{a}</p>
          </details>
        ))}
        <p>
          <L locale={locale} href="/faq/">
            {c.faq_more}
          </L>
        </p>
      </section>
      <section id="troubleshoot">
        <h2>{c.trouble_h2}</h2>
        <ul className="troubleshoot">
          {c.trouble.map(([t, b]) => (
            <li key={t}>
              <strong>{t}</strong> {b}
            </li>
          ))}
        </ul>
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

export function DownloadView({ locale }: { locale: Locale }) {
  const c = CONTENT['/download/'][locale];
  return (
    <PageShell locale={locale} path="/download/">
      <FaqJsonLd faqs={c.faqs} />
      <h1>{c.h1}</h1>
      <IndepNotice locale={locale} compact />
      <QuickAnswer text={c.answer} />
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
      <p>{c.lead}</p>
      <p>
        <ExternalLink href={OFFICIAL.steamStore} className="btn btn-outline">
          {c.cta}
        </ExternalLink>
      </p>
      <h2>{c.before_h2}</h2>
      <ol className="steps">
        {c.steps.map((s) => (
          <li key={s.slice(0, 24)}>{s}</li>
        ))}
      </ol>
      <h2>{c.after_h2}</h2>
      <ul>
        {c.after.map((s) => (
          <li key={s.slice(0, 24)}>{s}</li>
        ))}
      </ul>
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
      <FaqBlock h2={c.faq_h2} faqs={c.faqs} />
      <h2>{c.related_h2}</h2>
      <ul>
        <li>
          <L locale={locale} href="/steam-transfer/">
            transfer
          </L>
        </li>
        <li>
          <L locale={locale} href="/faq/">
            FAQ
          </L>
        </li>
        <li>
          <L locale={locale} href="/steam-notes/">
            Steam notes
          </L>
        </li>
      </ul>
    </PageShell>
  );
}

export function TransferView({ locale }: { locale: Locale }) {
  const c = CONTENT['/steam-transfer/'][locale];
  return (
    <PageShell locale={locale} path="/steam-transfer/">
      <FaqJsonLd faqs={c.faqs} />
      <h1>{c.h1}</h1>
      <IndepNotice locale={locale} compact />
      <QuickAnswer text={c.answer} />
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
      <p>{c.goal}</p>
      <Diagram nodes={c.diagram} aria={c.diagram_aria} />
      <h2>{c.before_h2}</h2>
      <ul>
        {c.before.map((s) => (
          <li key={s.slice(0, 48)}>{s}</li>
        ))}
      </ul>
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
          {c.cross_foundry_before}{' '}
          <L locale={locale} href="/foundry/">
            {c.link_foundry}
          </L>{' '}
          {c.cross_foundry_after}
        </li>
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
          .
        </li>
      </ul>
      <DeepBlock h2={c.deep_h2} paras={c.deep} />
      <FaqBlock h2={c.faq_h2} faqs={c.faqs} />
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
      <QuickAnswer text={c.answer} />
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
      <DeepBlock h2={c.deep_h2} paras={c.deep} />
      <FaqBlock h2={c.faq_h2} faqs={c.faqs} />
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
      </ul>
    </PageShell>
  );
}

export function FaqView({ locale }: { locale: Locale }) {
  const c = CONTENT['/faq/'][locale];
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: c.faqs.map(([q, a]) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
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
      <p>{c.lead}</p>
      <section className="faq">
        {c.faqs.map(([q, a]) => (
          <details key={q}>
            <summary>{q}</summary>
            <p>{a}</p>
          </details>
        ))}
      </section>
      <h2>{c.check_h2}</h2>
      <ol>
        {c.checks.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ol>
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
      <ul>
        {c.sec.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
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
      <DeepBlock h2={c.deep_h2} paras={c.deep} />
      <FaqBlock h2={c.faq_h2} faqs={c.faqs} />
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
      </ul>
    </PageShell>
  );
}

export function FoundryView({ locale }: { locale: Locale }) {
  const c = CONTENT['/foundry/'][locale];
  return (
    <PageShell locale={locale} path="/foundry/">
      <FaqJsonLd faqs={c.faqs} />
      <h1>{c.h1}</h1>
      <IndepNotice locale={locale} compact />
      <QuickAnswer text={c.answer} />
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
      <p>{c.lead}</p>
      <p className="as-of">{c.as_of}</p>
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
      <h2>{c.cal_h2}</h2>
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
          <L locale={locale} href="/secret-rabbit-hole/">
            {c.link_rabbit}
          </L>
        </li>
        <li>
          <L locale={locale} href="/quests/">
            {c.link_quests}
          </L>
        </li>
        <li>
          <L locale={locale} href="/faq/">
            {c.link_faq}
          </L>
        </li>
      </ul>
      <DeepBlock h2={c.deep_h2} paras={c.deep} />
      <FaqBlock h2={c.faq_h2} faqs={c.faqs} />
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
      <h2>{c.related_h2}</h2>
      <ul>
        <li>
          <L locale={locale} href="/foundry/">
            Foundry
          </L>
        </li>
        <li>
          <L locale={locale} href="/banners/">
            Banners
          </L>
        </li>
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
      <QuickAnswer text={c.answer} />
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

export function PrivacyView({ locale }: { locale: Locale }) {
  const c = CONTENT['/privacy/'][locale];
  return (
    <PageShell locale={locale} path="/privacy/">
      <h1>{c.h1}</h1>
      <IndepNotice locale={locale} compact />
      <p>{c.p1}</p>
      <h2>{c.collect_h2}</h2>
      <ul>
        {c.collect.map((s) => (
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
  return (
    <PageShell locale={locale} path="/heroes/">
      <FaqJsonLd faqs={c.faqs} />
      <h1>{c.h1}</h1>
      <IndepNotice locale={locale} compact />
      <QuickAnswer text={c.answer} />
      <Fig
        src="/images/diagram-heroes.webp"
        alt={c.img_alt}
        credit="Unofficial roles banner · epicsevensteam.com"
      />
      <Fig
        src="/images/steam-ss-heroes.webp"
        alt={c.img_ss_alt}
        credit="Steam store screenshot · Steam CDN"
      />
      <Fig
        src="/images/diagram-heroes-groups.webp"
        alt={c.img_alt2}
        credit="Unofficial on-site hero group cards · epicsevensteam.com"
      />
      <Fig
        src="/images/diagram-heroes-compare.webp"
        alt={c.img_alt3}
        credit="Unofficial role focus schematic · epicsevensteam.com"
      />
      <Fig
        src="/images/diagram-heroes-path.webp"
        alt={c.img_alt4}
        credit="Unofficial early build-order diagram · epicsevensteam.com"
      />
      <p>{c.lead}</p>
      <h2>{c.onsite_h2}</h2>
      <p>{c.onsite}</p>
      <h2>{c.groups_h2}</h2>
      {c.groups.map(([h, body]) => (
        <div key={h} className="card">
          <h3>{h}</h3>
          <p>{body}</p>
        </div>
      ))}
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
          {c.heroes.map(([name, role, el, brief, href]) => (
            <tr key={name}>
              <td>{name}</td>
              <td>
                <span className="chip chip-role">{role}</span>
              </td>
              <td>
                <span className={elementChipClass(el)}>{el}</span>
              </td>
              <td>{brief}</td>
              <td>
                <ExternalLink href={href}>wiki</ExternalLink>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="muted">{c.note}</p>
      <DeepBlock h2={c.deep_h2} paras={c.deep} />
      <FaqBlock h2={c.faq_h2} faqs={c.faqs} />
      <h2>{c.related_h2}</h2>
      <ul>
        <li>
          <L locale={locale} href="/banners/">
            Banners
          </L>
        </li>
        <li>
          <L locale={locale} href="/quests/">
            Quests
          </L>
        </li>
        <li>
          <L locale={locale} href="/foundry/">
            Foundry
          </L>
        </li>
        <li>
          <ExternalLink href={OFFICIAL.steamStore}>Steam app 5019180</ExternalLink>
        </li>
        <li>
          <ExternalLink href={OFFICIAL.stoveSteamFaq}>STOVE Steam FAQ</ExternalLink>
        </li>
        <li>
          <ExternalLink href={OFFICIAL.stoveFoundry}>STOVE Foundry notice</ExternalLink>
        </li>
      </ul>
    </PageShell>
  );
}

export function QuestsView({ locale }: { locale: Locale }) {
  const c = CONTENT['/quests/'][locale];
  return (
    <PageShell locale={locale} path="/quests/">
      <FaqJsonLd faqs={c.faqs} />
      <h1>{c.h1}</h1>
      <IndepNotice locale={locale} compact />
      <QuickAnswer text={c.answer} />
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
      <p>{c.lead}</p>
      <p className="muted">{c.reset_note}</p>
      <h2>{c.foundry_h2}</h2>
      <ul>
        {c.foundry_delta.map((s) => (
          <li key={s.slice(0, 40)}>{s}</li>
        ))}
      </ul>
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
      <DeepBlock h2={c.deep_h2} paras={c.deep} />
      <FaqBlock h2={c.faq_h2} faqs={c.faqs} />
      <h2>{c.related_h2}</h2>
      <ul>
        <li>
          <L locale={locale} href="/secret-rabbit-hole/">
            Secret Rabbit♥Hole
          </L>
        </li>
        <li>
          <L locale={locale} href="/foundry/">
            Foundry
          </L>
        </li>
        <li>
          <L locale={locale} href="/heroes/">
            Heroes
          </L>
        </li>
        <li>
          <L locale={locale} href="/updates/">
            Updates
          </L>
        </li>
        <li>
          <ExternalLink href={OFFICIAL.stoveSteamFaq}>STOVE Steam FAQ</ExternalLink>
        </li>
        <li>
          <ExternalLink href={OFFICIAL.stoveFoundry}>STOVE Foundry notice (view/14571828)</ExternalLink>
        </li>
        <li>
          <ExternalLink href={OFFICIAL.steamStore}>Steam app 5019180</ExternalLink>
        </li>
      </ul>
    </PageShell>
  );
}
