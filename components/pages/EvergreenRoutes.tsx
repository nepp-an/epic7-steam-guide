import { ExternalLink } from '@/components/ExternalLink';
import { LocaleLink as L } from '@/components/LocaleLink';
import { EVERGREEN_COPY } from '@/lib/i18n/evergreen';
import type { GrowthLocale } from '@/lib/i18n/growth';

const ROUTE_SOURCES = [
  ['https://page.onstove.com/epicseven/global/view/14571828', 'STOVE · Official Foundry celebration / Rank 70'],
  ['https://page.onstove.com/epicseven/global/view/14378309', 'STOVE · Official Steam account FAQ'],
  ['https://page.onstove.com/epicseven/global/view/14467359', 'keaツ / Global · Community new-player guide (2026-08-29)'],
] as const;
const STEAM_SOURCES = [
  ['https://page.onstove.com/epicseven/global/view/14609690', 'STOVE · Official account guide'],
  ['https://help.steampowered.com/en/faqs/view/0C48-FCBD-DA71-93EB', 'Steam Support · Verify integrity of game files'],
  ['https://store.steampowered.com/app/5019180/Epic_Seven/', 'Steam · Epic Seven requirements / anti-cheat disclosure'],
  ['https://page.onstove.com/epicseven/global/list/986', 'STOVE · Official announcements'],
  ['https://page.onstove.com/epicseven/global/view/14608118', 'STOVE · Official Known Issues'],
  ['https://page.onstove.com/epicseven/global/view/9979209', 'STOVE · Official inquiry / bug-report FAQ'],
] as const;
const SUPPORT = 'https://cs.onstove.com/en/service/STOVE_EPIC7';
type Card = readonly [string, string, string, string, string, string, number];
type Source = readonly [string, string];

function RouteCards({ cards, labels, prefix, sources }: {
  cards: readonly Card[]; labels: readonly string[]; prefix: string; sources: readonly Source[];
}) {
  return <div className="evergreen-cards">
    {cards.map((card, index) => <article className="card evergreen-card" id={`${prefix}-${index + 1}`} key={card[0]}>
      <h3>{index + 1}. {card[0]}</h3>
      <dl>{labels.map((label, field) => <div key={label}>
        <dt>{label}</dt><dd>{card[field + 1]}</dd>
      </div>)}</dl>
      <p className="muted"><ExternalLink href={sources[card[6]][0]}>{sources[card[6]][1]}</ExternalLink></p>
    </article>)}
  </div>;
}

export function EvergreenJump({ locale, kind }: { locale: GrowthLocale; kind: 'route' | 'steam' }) {
  const c = EVERGREEN_COPY[locale];
  return <a href={kind === 'route' ? '#first-week' : '#symptoms'}>{kind === 'route' ? c.routeTitle : c.steamTitle}</a>;
}

export function FoundryRoadmap({ locale }: { locale: GrowthLocale }) {
  const c = EVERGREEN_COPY[locale];
  return <section className="evergreen-guide" id="first-week" aria-labelledby="first-week-title">
    <h2 id="first-week-title">{c.routeTitle}</h2><p>{c.routeIntro}</p>
    <nav className="anchor-nav" aria-label={c.routeTitle}>{c.route.map((card, i) => <a key={card[0]} href={`#rank-route-${i + 1}`}>{i + 1}. {card[0]}</a>)}</nav>
    <RouteCards cards={c.route} labels={c.labels} prefix="rank-route" sources={ROUTE_SOURCES} />
    <p><L locale={locale} href="/steam-transfer/">{c.routeLinks[0]}</L>{' · '}<L locale={locale} href="/quests/">{c.routeLinks[1]}</L>{' · '}<L locale={locale} href="/tier-list/">{c.routeLinks[2]}</L></p>
    <h3>{c.sources}</h3><p className="muted">{c.sourceNote}</p>
    <ul className="sources">{ROUTE_SOURCES.map(([href, text]) => <li key={href}><ExternalLink href={href}>{text}</ExternalLink></li>)}</ul>
  </section>;
}

export function SteamSymptomNavigator({ locale }: { locale: GrowthLocale }) {
  const c = EVERGREEN_COPY[locale];
  return <section className="evergreen-guide" id="symptoms" aria-labelledby="steam-symptoms-title">
    <h2 id="steam-symptoms-title">{c.steamTitle}</h2><p>{c.steamIntro}</p>
    <nav className="anchor-nav" aria-label={c.steamTitle}>{c.steam.map((card, i) => <a key={card[0]} href={`#steam-symptom-${i + 1}`}>{card[0]}</a>)}</nav>
    <RouteCards cards={c.steam} labels={c.labels} prefix="steam-symptom" sources={STEAM_SOURCES} />
    <p><L locale={locale} href="/steam-transfer/">{c.steamLinks[0]}</L>{' · '}<L locale={locale} href="/maintenance/">{c.steamLinks[1]}</L>{' · '}<L locale={locale} href="/faq/">{c.steamLinks[3]}</L>{' · '}<ExternalLink href={SUPPORT}>{c.steamLinks[2]}</ExternalLink></p>
    <h3>{c.sources}</h3><p className="muted">{c.steamSourceNote}</p><ul className="sources">{STEAM_SOURCES.map(([href, text]) => <li key={href}><ExternalLink href={href}>{text}</ExternalLink></li>)}</ul>
  </section>;
}
