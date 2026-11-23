import { ExternalLink } from '@/components/ExternalLink';
import { LocaleLink as L } from '@/components/LocaleLink';
import {
  ACTIVE_EVENTS,
  type ActiveEventCard,
} from '@/lib/i18n/activeEvents';
import { type GrowthLocale } from '@/lib/i18n/growth';

function EventCard({ event, sourceLabel }: { event: ActiveEventCard; sourceLabel: string }) {
  return (
    <article className="card task-card" id={event.id}>
      <p className="as-of">{event.status}</p>
      <h3>{event.title}</h3>
      <p>{event.lead}</p>
      <dl>
        <dt>{event.entryLabel}</dt>
        <dd>{event.entryBody}</dd>
        <dt>{event.rewardLabel}</dt>
        <dd>{event.rewardBody}</dd>
        <dt>{event.deadlineLabel}</dt>
        <dd>{event.deadlineBody}</dd>
        <dt>{event.doneLabel}</dt>
        <dd>{event.doneBody}</dd>
        <dt>{event.stuckLabel}</dt>
        <dd>{event.stuckBody}</dd>
      </dl>
      {event.missions && event.missionsTitle ? (
        <>
          <h4>{event.missionsTitle}</h4>
          <ol>
            {event.missions.map(([step, clear]) => (
              <li key={step}>
                <strong>{step}.</strong> {clear}
              </li>
            ))}
          </ol>
        </>
      ) : null}
      {event.points && event.pointsTitle ? (
        <>
          <h4>{event.pointsTitle}</h4>
          <ul>
            {event.points.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </>
      ) : null}
      {event.resetRows && event.resetTitle && event.resetTh ? (
        <>
          <h4>{event.resetTitle}</h4>
          <div className="event-route-table">
          <table className="data">
            <thead>
              <tr>
                <th>{event.resetTh[0]}</th>
                <th>{event.resetTh[1]}</th>
              </tr>
            </thead>
            <tbody>
              {event.resetRows.map(([servers, time]) => (
                <tr key={servers}>
                  <td>{servers}</td>
                  <td>{time}</td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        </>
      ) : null}
      {event.exchangeRows && event.exchangeTitle && event.exchangeTh ? (
        <>
          <h4>{event.exchangeTitle}</h4>
          {event.exchangeNote ? <p className="muted">{event.exchangeNote}</p> : null}
          <div className="event-route-table">
          <table className="data">
            <thead>
              <tr>
                <th>{event.exchangeTh[0]}</th>
                <th className="num">{event.exchangeTh[1]}</th>
                <th className="num">{event.exchangeTh[2]}</th>
              </tr>
            </thead>
            <tbody>
              {event.exchangeRows.map((row, i) => (
                <tr key={`${row[0]}-${row[1]}-${i}`}>
                  <td>{row[0]}</td>
                  <td className="num">{row[1]}</td>
                  <td className="num">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        </>
      ) : null}
      <p className="sources">
        <ExternalLink href={event.officialHref}>
          {sourceLabel}: {event.officialLabel}
        </ExternalLink>
      </p>
    </article>
  );
}

export function ActiveEventRoutes({ locale }: { locale: GrowthLocale }) {
  const c = ACTIVE_EVENTS[locale];
  return (
    <section id="event-routes" aria-labelledby="event-routes-title">
      <h2 id="event-routes-title">{c.sectionTitle}</h2>
      <p className="quick-answer">{c.intro}</p>
      <p className="muted">{c.verified}</p>
      <div className="task-grid">
        {c.events.map((event) => (
          <EventCard key={event.id} event={event} sourceLabel={c.sourceLabel} />
        ))}
      </div>
    </section>
  );
}

export function PalaceMaidBannerNote({ locale }: { locale: GrowthLocale }) {
  const c = ACTIVE_EVENTS[locale];
  return (
    <p className="muted">
      {c.bannerNote}{' '}
      <L locale={locale} href="/quests/#palace-maid">
        {c.foundryLinkLabel}
      </L>
      .
    </p>
  );
}

export function PalaceMaidRabbitNote({ locale }: { locale: GrowthLocale }) {
  const c = ACTIVE_EVENTS[locale];
  return (
    <article className="card" id="palace-maid-entry">
      <p>
        {c.rabbitNote}{' '}
        <L locale={locale} href="/quests/#palace-maid">
          {c.foundryLinkLabel}
        </L>
        .
      </p>
    </article>
  );
}

export function FoundryUpcomingEventsNote({ locale }: { locale: GrowthLocale }) {
  const c = ACTIVE_EVENTS[locale];
  return (
    <p className="schedule-note">
      {c.foundryLead}{' '}
      <L locale={locale} href="/quests/#event-routes">
        {c.foundryLinkLabel}
      </L>
      .
    </p>
  );
}
