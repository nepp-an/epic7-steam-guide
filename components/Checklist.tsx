'use client';

import { useState } from 'react';

type ChecklistProps = {
  items: readonly string[];
  doneText: string;
  officialHref?: string;
  officialLabel?: string;
};

/** Native checkbox checklist with an in-page result. No new route, no form submit. */
export function Checklist({
  items,
  doneText,
  officialHref,
  officialLabel,
}: ChecklistProps) {
  const [done, setDone] = useState<readonly boolean[]>(() =>
    items.map(() => false),
  );
  const checked = done.filter(Boolean).length;
  const allDone = checked === items.length;

  return (
    <div className="checklist-block">
      <p className="checklist-progress" aria-live="polite">
        <span>
          {checked}/{items.length}
        </span>
      </p>
      <ul className="checklist">
        {items.map((item, i) => (
          <li key={`${i}-${item.slice(0, 24)}`}>
            <label>
              <input
                type="checkbox"
                checked={done[i]}
                onChange={(e) => {
                  const next = done.slice();
                  next[i] = e.target.checked;
                  setDone(next);
                }}
              />
              <span>{item}</span>
            </label>
          </li>
        ))}
      </ul>
      <div
        className="checklist-done"
        role="status"
        hidden={!allDone}
      >
        <strong>{doneText}</strong>{' '}
        {officialHref && officialLabel ? (
          <a href={officialHref} target="_blank" rel="noopener noreferrer">
            {officialLabel} →
          </a>
        ) : null}
      </div>
    </div>
  );
}

type QuestRow = readonly [reset: string, task: string, scope: string, note: string];

type QuestChecklistProps = {
  headers: readonly [string, string, string, string];
  rows: readonly QuestRow[];
  doneText: string;
};

/** Daily/weekly table where each row can be ticked; result appears in-page. */
export function QuestChecklist({ headers, rows, doneText }: QuestChecklistProps) {
  const [done, setDone] = useState<readonly boolean[]>(() =>
    rows.map(() => false),
  );
  const checked = done.filter(Boolean).length;
  const allDone = checked === rows.length;

  return (
    <div className="checklist-block">
      <p className="checklist-progress" aria-live="polite">
        <span>
          {checked}/{rows.length}
        </span>
      </p>
      <table className="data checklist-table">
        <thead>
          <tr>
            <th scope="col" aria-label={headers[0]}>
              ✓
            </th>
            {headers.map((h) => (
              <th key={h} scope="col">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={`${i}-${row[1].slice(0, 24)}`}>
              <td>
                <input
                  type="checkbox"
                  aria-label={row[1]}
                  checked={done[i]}
                  onChange={(e) => {
                    const next = done.slice();
                    next[i] = e.target.checked;
                    setDone(next);
                  }}
                />
              </td>
              <td>{row[0]}</td>
              <td>{row[1]}</td>
              <td>{row[2]}</td>
              <td>{row[3]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="checklist-done" role="status" hidden={!allDone}>
        <strong>{doneText}</strong>
      </div>
    </div>
  );
}
