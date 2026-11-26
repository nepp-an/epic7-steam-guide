'use client';

import { useMemo, useState } from 'react';
import { SelfDrawnAvatar } from '@/components/SelfDrawnAvatar';
import {
  ROSTER_HEROES,
  TEAM_BUILDER_MODES,
  filterRosterHeroes,
  heroesInMode,
  libraryHeroesNotInMode,
  libraryRoleCoverage,
  matchMode,
  type RosterHero,
  type TeamBuilderModeId,
} from '@/lib/team-builder';

const ROSTER_LOOKUP: Record<string, RosterHero> = Object.fromEntries(
  ROSTER_HEROES.map((hero) => [hero.name, hero]),
);

const DEFAULT_MODE: TeamBuilderModeId = 'wyvern-hell';

function toggleName(roster: string[], name: string): string[] {
  return roster.includes(name) ? roster.filter((entry) => entry !== name) : [...roster, name];
}

function HeroCheck({
  hero,
  checked,
  onToggle,
}: {
  hero: RosterHero;
  checked: boolean;
  onToggle: (name: string) => void;
}) {
  const id = `tb-hero-${hero.slug}`;
  return (
    <label className="tb-hero" htmlFor={id}>
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={() => onToggle(hero.name)}
      />
      <SelfDrawnAvatar
        slug={hero.slug}
        name={hero.name}
        className="tb-avatar"
        size={32}
      />
      <span>
        <strong>{hero.name}</strong>
        <span className="tb-hero-meta">
          {hero.kind === 'library'
            ? `${hero.element} ${hero.class}`
            : 'Dated clear appearance sample, no on-site build recipe'}
        </span>
      </span>
    </label>
  );
}

export function TeamBuilderTool() {
  const [modeId, setModeId] = useState<TeamBuilderModeId>(DEFAULT_MODE);
  const [roster, setRoster] = useState<string[]>([]);
  const [query, setQuery] = useState('');

  const result = matchMode(modeId, roster);
  const inMode = useMemo(
    () => filterRosterHeroes(heroesInMode(modeId), query),
    [modeId, query],
  );
  const otherLibrary = useMemo(
    () => filterRosterHeroes(libraryHeroesNotInMode(modeId), query),
    [modeId, query],
  );
  const roles = libraryRoleCoverage(roster);
  const noVisibleHeroes = inMode.length === 0 && otherLibrary.length === 0;

  function onToggle(name: string) {
    setRoster((current) => toggleName(current, name));
  }

  return (
    <div className="tb-tool">
      <div className="tb-controls">
        <label className="tb-search">
          Mode
          <select
            value={modeId}
            onChange={(event) => setModeId(event.target.value as TeamBuilderModeId)}
            aria-label="Select a sourced mode"
          >
            {TEAM_BUILDER_MODES.map((mode) => (
              <option key={mode.id} value={mode.id}>
                {mode.label}
              </option>
            ))}
          </select>
        </label>
        <label className="tb-search">
          Search roster names
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Type a hero name"
            autoComplete="off"
            enterKeyHint="search"
          />
        </label>
        <button type="button" className="btn" onClick={() => setRoster([])} disabled={roster.length === 0}>
          Clear roster
        </button>
      </div>

      {result ? (
        <p className="tb-count">
          {roster.length === 0
            ? `No heroes selected. ${result.teams.length} dated sample teams are listed for ${result.mode.label}; none are marked as filled.`
            : `You can fill ${result.completeCount} of ${result.teams.length} dated sample teams in ${result.mode.label}. ${roster.length} hero${roster.length === 1 ? '' : 'es'} selected.`}
        </p>
      ) : null}

      {result ? (
        <p className="muted tb-window">
          Clear window: {result.mode.window}. Checked {result.mode.checked}.{' '}
          <a href={result.mode.onSite}>On-site sample</a>
          {' · '}
          <a href={result.mode.sourceHref} rel="noopener noreferrer" target="_blank">
            Hideout citation
          </a>
          . {result.mode.limits}
        </p>
      ) : null}

      <div className="tb-layout">
        <section className="tb-roster" aria-labelledby="tb-roster-title">
          <h3 id="tb-roster-title">Heroes you have</h3>
          <p className="muted">
            Check off units you own. Names from the sample stay blank for role
            and gear — they are only here so you can mark a missing piece.
          </p>
          {noVisibleHeroes ? (
            <p className="tb-empty" role="status">
              No hero names in this list match that search. Try another spelling,
              or clear the search. This tool does not add unsourced roster cards.
            </p>
          ) : null}
          {inMode.length > 0 ? (
            <fieldset className="tb-fieldset">
              <legend>In this mode’s dated samples</legend>
              {inMode.map((hero) => (
                <HeroCheck
                  key={hero.slug}
                  hero={hero}
                  checked={roster.includes(hero.name)}
                  onToggle={onToggle}
                />
              ))}
            </fieldset>
          ) : null}
          {otherLibrary.length > 0 ? (
            <fieldset className="tb-fieldset">
              <legend>On-site build library (not in these samples)</legend>
              {otherLibrary.map((hero) => (
                <HeroCheck
                  key={hero.slug}
                  hero={hero}
                  checked={roster.includes(hero.name)}
                  onToggle={onToggle}
                />
              ))}
            </fieldset>
          ) : null}
        </section>

        <section className="tb-results" aria-labelledby="tb-results-title">
          <h3 id="tb-results-title">Dated sample teams</h3>
          {roster.length === 0 ? (
            <p className="tb-empty" role="status">
              Select the heroes you have. This unofficial Epic Seven team
              builder only matches dated community sample teams already
              published on this site. It does not invent a PvP, RTA, or
              “Wyvern 13” recommendation for an empty roster.
            </p>
          ) : null}
          {result
            ? result.teams.map((row) => (
                <article
                  key={row.team.id}
                  className={`tb-team card${row.complete ? ' is-complete' : ''}`}
                  data-team-id={row.team.id}
                >
                  <header className="tb-team-head">
                    <p className="tb-team-kicker">
                      {result.mode.label} · Sample rank {row.team.rank}
                    </p>
                    <p className="tb-team-status">
                      {row.complete
                        ? 'Your roster fills this dated sample'
                        : row.have.length === 0
                          ? 'No selected heroes on this sample'
                          : `Missing ${row.missing.length}: ${row.missing.join(', ')}`}
                    </p>
                  </header>
                  <ul className="tb-slots">
                    {row.team.heroes.map((hero) => {
                      const filled = row.have.includes(hero);
                      const card = ROSTER_LOOKUP[hero];
                      return (
                        <li key={hero} className={filled ? 'is-have' : 'is-missing'}>
                          {card ? (
                            <SelfDrawnAvatar
                              slug={card.slug}
                              name={card.name}
                              className="tb-slot-avatar"
                              size={28}
                            />
                          ) : null}
                          <span>{filled ? 'Have' : 'Need'}</span> {hero}
                          {card?.kind === 'library' && card.href ? (
                            <>
                              {' '}
                              <a href={card.href}>Build notes</a>
                            </>
                          ) : card?.href ? (
                            <>
                              {' '}
                              <a href={card.href}>Dated clear appearance</a>
                              <em> — no on-site build recipe</em>
                            </>
                          ) : (
                            <em> — listed on a dated clear team, no on-site build recipe</em>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                  <p className="muted">
                    {row.team.share} in the {result.mode.window} window — share of
                    clears, not a win rate. Source:{' '}
                    <a href={result.mode.onSite}>{result.mode.label} on the tier-list page</a>.
                  </p>
                </article>
              ))
            : null}

          {result && result.mode.appearance.length > 0 ? (
            <p className="muted tb-appearance">
              Most-used heroes on the same dated panel (appearance share, not a
              generated team, not a win rate):{' '}
              {result.mode.appearance.map((row) => `${row.hero} ${row.rate}`).join(' · ')}.
            </p>
          ) : null}

          {roles.length > 0 ? (
            <div className="tb-roles">
              <h3>Sourced roles in your library heroes</h3>
              <p className="muted">
                These jobs come from the{' '}
                <a href="/hero-builds/">Epic Seven hero builds</a> cards. They
                are not a substitute for a missing sample-team slot, and
                sample-only names have no invented role here, only a dated clear-appearance card. Score a piece on
                the{' '}
                <a href="/gear-score-calculator/">gear score calculator</a>.
              </p>
              <ul>
                {roles.map(({ hero, roles: job }) => (
                  <li key={hero.slug}>
                    <a href={hero.href}>{hero.name}</a>: {job.join(', ')}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </section>
      </div>
    </div>
  );
}

