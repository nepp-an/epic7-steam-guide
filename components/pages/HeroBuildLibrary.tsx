'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { ExternalLink } from '@/components/ExternalLink';
import {
  HERO_BUILDS,
  HERO_CLASSES,
  HERO_ELEMENTS,
  HERO_GROUP_LABEL,
  HERO_GROUPS,
  filterHeroBuilds,
  type HeroClass,
  type HeroElement,
  type HeroGroup,
} from '@/lib/hero-builds';

export function HeroBuildLibrary() {
  const [query, setQuery] = useState('');
  const [className, setClassName] = useState<'all' | HeroClass>('all');
  const [element, setElement] = useState<'all' | HeroElement>('all');
  const [group, setGroup] = useState<'all' | HeroGroup>('all');

  const results = useMemo(
    () => filterHeroBuilds(HERO_BUILDS, { query, className, element, group }),
    [query, className, element, group],
  );

  function reset() {
    setQuery('');
    setClassName('all');
    setElement('all');
    setGroup('all');
  }

  const active = query || className !== 'all' || element !== 'all' || group !== 'all';

  return (
    <div className="hb-lib">
      <form className="hb-filters" role="search" onSubmit={(event) => event.preventDefault()}>
        <label className="hb-search">
          Search heroes
          <input
            type="search"
            value={query}
            placeholder="Name, role, or class"
            autoComplete="off"
            enterKeyHint="search"
            onChange={(event) => setQuery(event.target.value)}
          />
        </label>
        <label>
          Class
          <select
            value={className}
            onChange={(event) => setClassName(event.target.value as 'all' | HeroClass)}
          >
            <option value="all">All classes</option>
            {HERO_CLASSES.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
        <label>
          Element
          <select
            value={element}
            onChange={(event) => setElement(event.target.value as 'all' | HeroElement)}
          >
            <option value="all">All elements</option>
            {HERO_ELEMENTS.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
        <label>
          Group
          <select
            value={group}
            onChange={(event) => setGroup(event.target.value as 'all' | HeroGroup)}
          >
            <option value="all">All groups</option>
            {HERO_GROUPS.map((item) => (
              <option key={item} value={item}>
                {HERO_GROUP_LABEL[item]}
              </option>
            ))}
          </select>
        </label>
        <button type="button" className="btn btn-outline" onClick={reset} disabled={!active}>
          Clear filters
        </button>
      </form>
      <p className="muted hb-count" aria-live="polite">
        {results.length === 0
          ? 'No heroes in this library match that search or filter.'
          : `Showing ${results.length} of ${HERO_BUILDS.length} sourced heroes.`}
      </p>
      {results.length === 0 ? (
        <p className="hb-empty">
          This v1 library covers 20 sourced starter, specialty-change, hunt, and
          mode-example units — not a full roster. Try another name, or clear the
          filters. Missing set or artifact fields stay blank on purpose when we
          do not have a source.
        </p>
      ) : (
        <div className="hb-list">
          {results.map((hero) => (
            <article key={hero.slug} id={hero.slug} className="hb-card card">
              <header className="hb-card-head">
                <h2>
                  <a href={`#${hero.slug}`}>{hero.name}</a>
                </h2>
                <p className="hb-id">
                  {hero.element} {hero.class}
                  <span className="muted"> · {HERO_GROUP_LABEL[hero.group]}</span>
                </p>
                <div className="hb-chips">
                  {hero.roles.map((role) => (
                    <span key={role} className="chip chip-role">
                      {role}
                    </span>
                  ))}
                  {hero.job ? <span className="chip chip-focus">{hero.job}</span> : null}
                </div>
              </header>
              <p>{hero.summary}</p>
              <dl className="hb-fields">
                <div>
                  <dt>Sets</dt>
                  <dd className="muted">
                    No sourced set recommendation on this page.
                  </dd>
                </div>
                <div>
                  <dt>Stat priority</dt>
                  <dd className={hero.statPriority ? undefined : 'muted'}>
                    {hero.statPriority ? hero.statPriority.text : 'No sourced stat floor or main-stat recipe on this page.'}
                  </dd>
                </div>
                <div>
                  <dt>Artifact</dt>
                  <dd className={hero.artifact ? undefined : 'muted'}>
                    {hero.artifact ? hero.artifact.text : 'No sourced artifact recommendation on this page.'}
                  </dd>
                </div>
              </dl>
              {hero.hideout.length > 0 ? (
                <div className="hb-hideout">
                  <h3>Community clear samples</h3>
                  <ul>
                    {hero.hideout.map((sample) => (
                      <li key={`${sample.panel}-${sample.checked}-${sample.window}`}>
                        <strong>{sample.panel}</strong>
                        <span className="muted">
                          {' '}
                          · {sample.window} · read {sample.checked}
                        </span>
                        {sample.rate ? <div>Most-used share: {sample.rate}</div> : null}
                        {sample.teams?.length ? (
                          <ul>
                            {sample.teams.map((team) => (
                              <li key={team}>{team}</li>
                            ))}
                          </ul>
                        ) : null}
                        {sample.href.startsWith('http') ? (
                          <ExternalLink href={sample.href}>Open the source panel</ExternalLink>
                        ) : (
                          <Link href={sample.href}>On-site sample</Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
              <p className="muted hb-limits">
                <strong>Source / limits: </strong>
                {hero.limits}{' '}
                <Link href="/gear-score-calculator/">
                  Score a piece on the gear score calculator
                </Link>
                .
              </p>
              <p className="muted hb-sourcelist">
                Sources:{' '}
                {hero.sources.map((source, index) => (
                  <span key={`${source.href}-${source.date}`}>
                    {index > 0 ? '; ' : null}
                    {source.href.startsWith('http') ? (
                      <ExternalLink href={source.href}>{source.label}</ExternalLink>
                    ) : (
                      <Link href={source.href}>{source.label}</Link>
                    )}{' '}
                    ({source.date})
                  </span>
                ))}
              </p>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
