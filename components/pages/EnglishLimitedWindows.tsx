import { LocaleLink as L } from '@/components/LocaleLink';

const CARDS = [
  {
    id: 'epic-road',
    status: 'Open now',
    title: 'Epic Road and Record of the Journey',
    lead: 'One shared window through 10 Dec 2026, 02:59 UTC: spend Faint Guiding Stones on the Epic Road path, and log in for the 42-day Record of the Journey check-in.',
    href: '/epic-road/',
    link: 'Epic Road and Record of the Journey page',
  },
  {
    id: 'e7wc-grand-final',
    status: 'Open now',
    title: 'E7WC 2026 Grand Final cheer comment event',
    lead: 'The cheer comment event is open through 28 Nov 2026, 09:00 UTC. The Grand Final day starts 28 Nov 2026, 03:00 UTC. All valid participants receive 2 Leif on 4 Dec.',
    href: '/e7wc-2026-grand-final/',
    link: 'E7WC 2026 Grand Final and cheer comment page',
  },
  {
    id: 'call-of-chaos',
    status: 'In season',
    title: 'Call of Chaos Season 2',
    lead: 'Winter 2026 runs through 10 Dec 2026, 02:59 UTC, with a grace period to 17 Dec 2026, 02:59 UTC. Draft Arena stays unavailable until that grace period ends.',
    href: '/call-of-chaos/',
    link: 'Call of Chaos Season 2 windows and rules',
  },
] as const;

/** English-only deep-link cards. Do not ship locale translations from here. */
export function EnglishLimitedEventCards() {
  return (
    <section id="limited-windows" aria-labelledby="limited-windows-title">
      <h2 id="limited-windows-title">More limited windows</h2>
      <p className="quick-answer">
        Official windows restated on dedicated English pages. Confirm live
        timers on STOVE and in the client.
      </p>
      <div className="task-grid">
        {CARDS.map((card) => (
          <article className="card task-card" id={card.id} key={card.id}>
            <p className="as-of">{card.status}</p>
            <h3>{card.title}</h3>
            <p>{card.lead}</p>
            <p>
              <L locale="en" href={card.href}>
                {card.link}
              </L>
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
