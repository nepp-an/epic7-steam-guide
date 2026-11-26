'use client';

import { useMemo, useState } from 'react';
import {
  MAX_COUNTER,
  SUMMON_BANNER,
  bannerPhase,
  formatExpected,
  formatPercent,
  isValidCounter,
  probabilityWithinPulls,
  projectFromCounter,
} from '@/lib/summon-calculator';

function parseCounter(raw: string): number | null {
  if (raw.trim() === '') return null;
  const value = Number(raw);
  if (!Number.isInteger(value)) return null;
  return value;
}

export function SummonCalculatorTool({ now }: { now?: Date } = {}) {
  const [counterRaw, setCounterRaw] = useState(String(MAX_COUNTER));
  const [horizonRaw, setHorizonRaw] = useState('10');
  const clock = now ?? new Date();
  const phase = bannerPhase(clock);

  const counter = parseCounter(counterRaw);
  const horizon = parseCounter(horizonRaw);
  const counterOk = counter !== null && isValidCounter(counter);
  const horizonOk = horizon !== null && horizon >= 0;

  const projection = useMemo(
    () => (counterOk ? projectFromCounter(counter) : null),
    [counterOk, counter],
  );
  const horizonChance = useMemo(() => {
    if (!counterOk || !horizonOk) return null;
    return probabilityWithinPulls(counter, horizon);
  }, [counterOk, horizonOk, counter, horizon]);

  const expired = phase === 'expired';
  const upcoming = phase === 'upcoming';
  const locked = expired || upcoming;

  return (
    <div className="sc-calc">
      {expired ? (
        <div className="sc-status sc-status--expired" role="status">
          <p>
            <strong>These banner rules have expired. </strong>
            The official Bunny Girl Maid Cecilia &amp; Covert Service Drop Rate
            Up window ended at 17 December 2026, 02:59 UTC. This calculator
            will not apply those rates or pity rules to a later banner, and it
            will not invent the next official pool. Wait for a new official
            STOVE notice, then confirm the current pickup on the{' '}
            <a href="/banners/">current banner page</a> and{' '}
            <a href="/updates/">patch notes</a>.
          </p>
        </div>
      ) : null}
      {upcoming ? (
        <div className="sc-status" role="status">
          <p>
            <strong>This official window has not started yet. </strong>
            The notice lists 26 November 2026, 03:00 UTC as the start. The
            inputs below stay disabled until that time.
          </p>
        </div>
      ) : null}

      <form
        className="sc-form"
        onSubmit={(event) => event.preventDefault()}
        aria-disabled={locked}
      >
        <label className="sc-field">
          Current summon counter
          <input
            type="number"
            inputMode="numeric"
            min={0}
            max={MAX_COUNTER}
            step={1}
            value={counterRaw}
            disabled={locked}
            aria-invalid={counterRaw !== '' && !counterOk}
            onChange={(event) => setCounterRaw(event.target.value)}
          />
          <span className="muted">
            Official range: 0 to {MAX_COUNTER}. 0 means the next summon is the
            guaranteed featured hero.
          </span>
        </label>
        <label className="sc-field">
          Extra summons to measure
          <input
            type="number"
            inputMode="numeric"
            min={0}
            step={1}
            value={horizonRaw}
            disabled={locked}
            aria-invalid={horizonRaw !== '' && !horizonOk}
            onChange={(event) => setHorizonRaw(event.target.value)}
          />
          <span className="muted">
            Optional. Chance of seeing the featured 5★ hero within this many
            more summons from the counter above.
          </span>
        </label>
      </form>

      {locked ? (
        <p className="muted sc-locked-note">
          Results stay hidden while the official window is not active, so this
          page cannot be read as a live rate for a different banner.
        </p>
      ) : !counterOk ? (
        <p className="sc-error" role="alert">
          Enter a whole number from 0 to {MAX_COUNTER} for the current summon
          counter.
        </p>
      ) : projection ? (
        <div className="sc-results" aria-live="polite">
          <p className="sc-kicker">Featured 5★ {SUMMON_BANNER.featuredHero}</p>
          <dl className="sc-grid">
            <div>
              <dt>Chance on the next summon</dt>
              <dd>{formatPercent(projection.nextRate)}</dd>
            </div>
            <div>
              <dt>Chance before the guarantee</dt>
              <dd>{formatPercent(projection.probabilityBeforeGuarantee)}</dd>
            </div>
            <div>
              <dt>Chance by the worst case</dt>
              <dd>{formatPercent(projection.probabilityByWorstCase)}</dd>
            </div>
            <div>
              <dt>Expected summons remaining</dt>
              <dd>{formatExpected(projection.expectedSummons)}</dd>
            </div>
            <div>
              <dt>Worst case remaining</dt>
              <dd>
                {projection.worstCaseSummons} summon
                {projection.worstCaseSummons === 1 ? '' : 's'}
              </dd>
            </div>
            <div>
              <dt>Chance within the extra summons entered</dt>
              <dd>
                {horizonOk && horizonChance !== null
                  ? formatPercent(horizonChance)
                  : 'Enter a whole number of 0 or more.'}
              </dd>
            </div>
          </dl>
          <p className="muted">
            The featured 5★ rate used here is 1%. After {projection.counter}{' '}
            miss{projection.counter === 1 ? '' : 'es'} the next summon is
            100%. Pulling the featured hero resets the counter. This is not a
            Smilegate official tool, and it does not say whether you should
            spend bookmarks.
          </p>
        </div>
      ) : null}
    </div>
  );
}
