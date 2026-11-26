'use client';

import { useMemo, useState } from 'react';
import {
  EMPTY_GEAR_STATS,
  FLAT_KEYS,
  GEAR_STAT_KEYS,
  WORKED_EXAMPLE_STATS,
  formatScore,
  scoreGear,
  sumGearScores,
  type GearStatKey,
  type GearStats,
} from '@/lib/gear-score';

export const GEAR_SLOTS = [
  { id: 'weapon', label: 'Weapon' },
  { id: 'helmet', label: 'Helmet' },
  { id: 'chest', label: 'Chest' },
  { id: 'boots', label: 'Boots' },
  { id: 'necklace', label: 'Necklace' },
  { id: 'ring', label: 'Ring' },
] as const;

export type GearSlotId = (typeof GEAR_SLOTS)[number]['id'];

const STAT_FIELDS: {
  key: GearStatKey;
  label: string;
  suffix: string;
  hint: string;
}[] = [
  { key: 'atkPercent', label: 'Attack %', suffix: '%', hint: '× 1' },
  { key: 'hpPercent', label: 'Health %', suffix: '%', hint: '× 1' },
  { key: 'defPercent', label: 'Defense %', suffix: '%', hint: '× 1' },
  { key: 'effectiveness', label: 'Effectiveness %', suffix: '%', hint: '× 1' },
  { key: 'effectResistance', label: 'Effect Resistance %', suffix: '%', hint: '× 1' },
  { key: 'critChance', label: 'Crit Chance %', suffix: '%', hint: '× 1.6' },
  { key: 'critDamage', label: 'Crit Damage %', suffix: '%', hint: '× 1.1' },
  { key: 'speed', label: 'Speed', suffix: '', hint: '× 2' },
  { key: 'flatAtk', label: 'Flat Attack', suffix: '', hint: '÷ 10' },
  { key: 'flatHp', label: 'Flat Health', suffix: '', hint: '÷ 50' },
  { key: 'flatDef', label: 'Flat Defense', suffix: '', hint: '÷ 6' },
];

function emptySet(): Record<GearSlotId, GearStats> {
  return {
    weapon: { ...EMPTY_GEAR_STATS },
    helmet: { ...EMPTY_GEAR_STATS },
    chest: { ...EMPTY_GEAR_STATS },
    boots: { ...EMPTY_GEAR_STATS },
    necklace: { ...EMPTY_GEAR_STATS },
    ring: { ...EMPTY_GEAR_STATS },
  };
}

function parseInput(raw: string): number | '' {
  if (raw.trim() === '') return '';
  const value = Number(raw);
  if (!Number.isFinite(value)) return '';
  return value < 0 ? 0 : value;
}

type ScoreMode = 'full' | 'percentOnly';
type LevelHint = 'unspecified' | '85' | '90';

function bandLabel(score: number, level: LevelHint): string | null {
  if (score <= 0) return null;
  if (level === '85') {
    if (score >= 71) return 'In the “best” Lv.85 community range often quoted as 71–85.';
    if (score >= 60) return 'In the “very good” Lv.85 community range often quoted as 60–70.';
    if (score >= 50) return 'In the “good” Lv.85 community range often quoted as 50–59.';
    if (score >= 40) return 'In the “okay” Lv.85 community range often quoted as 40–49.';
    return 'Below the “okay” Lv.85 community range often quoted as 40–49.';
  }
  if (level === '90') {
    if (score >= 81) return 'In the “best” Lv.90 community range often quoted as 81–90.';
    if (score >= 70) return 'In the “very good” Lv.90 community range often quoted as 70–80.';
    if (score >= 60) return 'In the “good” Lv.90 community range often quoted as 60–69.';
    if (score >= 50) return 'In the “okay” Lv.90 community range often quoted as 50–59.';
    return 'Below the “okay” Lv.90 community range often quoted as 50–59.';
  }
  return null;
}

export function GearScoreCalculatorTool() {
  const [pieces, setPieces] = useState(emptySet);
  const [active, setActive] = useState<GearSlotId>('weapon');
  const [mode, setMode] = useState<ScoreMode>('full');
  const [levelHint, setLevelHint] = useState<LevelHint>('unspecified');
  const [draft, setDraft] = useState<Record<GearStatKey, string>>(() => {
    const initial = {} as Record<GearStatKey, string>;
    for (const key of GEAR_STAT_KEYS) initial[key] = '';
    return initial;
  });

  const activeStats = pieces[active];
  const activeScore = useMemo(() => scoreGear(activeStats), [activeStats]);
  const setTotal = useMemo(
    () => sumGearScores(GEAR_SLOTS.map((slot) => pieces[slot.id])),
    [pieces],
  );
  const primary = mode === 'full' ? activeScore.full : activeScore.percentOnly;
  const setPrimary = mode === 'full' ? setTotal.full : setTotal.percentOnly;
  const hint = bandLabel(primary, levelHint);

  function commit(key: GearStatKey, raw: string) {
    setDraft((current) => ({ ...current, [key]: raw }));
    const parsed = parseInput(raw);
    const nextValue = parsed === '' ? 0 : parsed;
    setPieces((current) => ({
      ...current,
      [active]: { ...current[active], [key]: nextValue },
    }));
  }

  function selectSlot(id: GearSlotId) {
    setActive(id);
    const stats = pieces[id];
    const next = {} as Record<GearStatKey, string>;
    for (const key of GEAR_STAT_KEYS) {
      next[key] = stats[key] ? String(stats[key]) : '';
    }
    setDraft(next);
  }

  function loadExample() {
    setPieces((current) => ({
      ...current,
      [active]: { ...WORKED_EXAMPLE_STATS },
    }));
    const next = {} as Record<GearStatKey, string>;
    for (const key of GEAR_STAT_KEYS) {
      const value = WORKED_EXAMPLE_STATS[key];
      next[key] = value ? String(value) : '';
    }
    setDraft(next);
  }

  function clearPiece() {
    setPieces((current) => ({
      ...current,
      [active]: { ...EMPTY_GEAR_STATS },
    }));
    const next = {} as Record<GearStatKey, string>;
    for (const key of GEAR_STAT_KEYS) next[key] = '';
    setDraft(next);
  }

  function clearAll() {
    setPieces(emptySet());
    const next = {} as Record<GearStatKey, string>;
    for (const key of GEAR_STAT_KEYS) next[key] = '';
    setDraft(next);
  }

  return (
    <div className="gs-calc">
      <div className="gs-calc-summary">
        <div>
          <p className="gs-calc-kicker">This piece</p>
          <p className="gs-calc-total" aria-live="polite">
            {formatScore(primary)}
            <span className="gs-calc-total-unit"> GS</span>
          </p>
          <p className="muted gs-calc-modescore">
            Full (includes flats): {formatScore(activeScore.full)} · Percent /
            Speed / Crit only: {formatScore(activeScore.percentOnly)}
          </p>
        </div>
        <div>
          <p className="gs-calc-kicker">Six-piece total</p>
          <p className="gs-calc-set-total" aria-live="polite">
            {formatScore(setPrimary)}
            <span className="gs-calc-total-unit"> GS</span>
          </p>
          <p className="muted gs-calc-modescore">
            Full: {formatScore(setTotal.full)} · Without flats:{' '}
            {formatScore(setTotal.percentOnly)}
          </p>
        </div>
      </div>

      <div className="gs-calc-controls">
        <fieldset className="gs-calc-fieldset">
          <legend>Score shown first</legend>
          <label>
            <input
              type="radio"
              name="gs-mode"
              value="full"
              checked={mode === 'full'}
              onChange={() => setMode('full')}
            />
            Include flats (default)
          </label>
          <label>
            <input
              type="radio"
              name="gs-mode"
              value="percentOnly"
              checked={mode === 'percentOnly'}
              onChange={() => setMode('percentOnly')}
            />
            Percent, Speed, and Crit only
          </label>
        </fieldset>
        <label className="gs-calc-level">
          Piece level, for the community range hint only
          <select
            value={levelHint}
            onChange={(event) => setLevelHint(event.target.value as LevelHint)}
          >
            <option value="unspecified">Not used in the score</option>
            <option value="85">Lv.85 hint</option>
            <option value="90">Lv.90 hint</option>
          </select>
        </label>
      </div>
      {hint ? <p className="muted gs-calc-hint">{hint} This is not an official grade, and a needed Speed breakpoint can outrank a higher score.</p> : null}

      <div className="gs-calc-slots" role="tablist" aria-label="Gear piece">
        {GEAR_SLOTS.map((slot) => {
          const pieceScore = scoreGear(pieces[slot.id]);
          const value = mode === 'full' ? pieceScore.full : pieceScore.percentOnly;
          const selected = slot.id === active;
          return (
            <button
              key={slot.id}
              type="button"
              role="tab"
              aria-selected={selected}
              className={selected ? 'gs-calc-slot is-active' : 'gs-calc-slot'}
              onClick={() => selectSlot(slot.id)}
            >
              <span>{slot.label}</span>
              <strong>{formatScore(value)}</strong>
            </button>
          );
        })}
      </div>

      <div className="gs-calc-actions">
        <button type="button" className="btn btn-primary" onClick={loadExample}>
          Load the 36.7 worked example
        </button>
        <button type="button" className="btn btn-outline" onClick={clearPiece}>
          Clear this piece
        </button>
        <button type="button" className="btn btn-outline" onClick={clearAll}>
          Clear all six
        </button>
      </div>

      <div className="gs-calc-grid">
        {STAT_FIELDS.map((field) => {
          const contribution = activeScore.contributions[field.key];
          const isFlat = (FLAT_KEYS as readonly string[]).includes(field.key);
          return (
            <label key={field.key} className={isFlat ? 'gs-calc-field is-flat' : 'gs-calc-field'}>
              <span className="gs-calc-field-label">
                {field.label}
                <span className="muted"> {field.hint}</span>
              </span>
              <input
                type="number"
                inputMode="decimal"
                min={0}
                step="any"
                value={draft[field.key]}
                placeholder="0"
                aria-label={field.label}
                onChange={(event) => commit(field.key, event.target.value)}
              />
              <span className="gs-calc-contrib">
                {formatScore(contribution)}
                {field.suffix ? <span className="visually-hidden"> from {field.suffix}</span> : null}
              </span>
            </label>
          );
        })}
      </div>

      <div className="gs-calc-breakdown">
        <h3>Contribution breakdown</h3>
        <table className="data">
          <thead>
            <tr>
              <th scope="col">Stat</th>
              <th scope="col">Entered</th>
              <th scope="col">Weight</th>
              <th scope="col">Score</th>
            </tr>
          </thead>
          <tbody>
            {STAT_FIELDS.map((field) => (
              <tr key={field.key}>
                <td data-label="Stat">{field.label}</td>
                <td data-label="Entered">
                  {formatScore(activeStats[field.key])}
                  {field.suffix}
                </td>
                <td data-label="Weight">{field.hint.replace('× ', '').replace('÷ ', '÷ ')}</td>
                <td data-label="Score">{formatScore(activeScore.contributions[field.key])}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
