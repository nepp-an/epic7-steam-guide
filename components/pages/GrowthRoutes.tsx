import { LocaleLink as L } from '@/components/LocaleLink';
import { ExternalLink } from '@/components/ExternalLink';
import { GROWTH_COPY, type GrowthLocale } from '@/lib/i18n/growth';
import { FoundryUpcomingEventsNote } from '@/components/pages/ActiveEventRoutes';
import { OFFICIAL } from '@/lib/site';

export function GrowthHomePaths({locale}: {locale: GrowthLocale}) {
 const c = GROWTH_COPY[locale];
 return <section id="choose-task" aria-labelledby="choose-task-title">
   <h2 id="choose-task-title">{c.homeTitle}</h2><p className="quick-answer">{c.homeAnswer}</p>
   <div className="task-grid">{c.paths.map(([title,body,href]) => <L key={href} locale={locale} href={href} className="hub-card task-route"><strong>{title} →</strong><span>{body}</span></L>)}</div>
 </section>;
}
export function FoundryActionRoutes({locale}: {locale: GrowthLocale}) {
 const c = GROWTH_COPY[locale];
 return <section id="today" aria-labelledby="foundry-next-action">
  <h2 id="foundry-next-action">{c.routeTitle}</h2>
  <div className="task-grid">{(['today','week','next'] as const).map(group => <article key={group} className="card task-card"><h3>{c[group]}</h3><ul>{c.tasks.filter(task => task[1] === group).map(task => <li key={task[0]}><L locale={locale} href={`/quests/#task-${task[0]}`}>{task[2]}</L><p>{task[4]}</p><p className="muted">{task[5]}</p></li>)}</ul></article>)}</div>
  <p className="schedule-note">{c.schedule}</p><p>{c.mode}</p>
  <FoundryUpcomingEventsNote locale={locale} />
  <p><ExternalLink href="https://store.steampowered.com/news/app/5019180/view/1848664643349012">Steam — Foundry Guild War (11/07)</ExternalLink>{' · '}<ExternalLink href={OFFICIAL.stoveVersion87Update}>STOVE — 11/19</ExternalLink></p>
 </section>;
}
