"use client";
import { useState } from 'react';
import { toggleTask } from '@/lib/task-checklist-state';
import type { GROWTH_COPY, GrowthLocale } from '@/lib/i18n/growth';
import { OFFICIAL } from '@/lib/site';

export function TaskChecklist({copy: c}: {copy: (typeof GROWTH_COPY)[GrowthLocale]}) {
  const [checked, setChecked] = useState<string[]>([]);
  const groups = ['today', 'week', 'next'] as const;
  return <div className="task-checklist">
    <p className="muted">{c.checkNote}</p>
    <p role="status" aria-live="polite">{c.progress}: {checked.length}/{c.tasks.length}</p>
    <button type="button" onClick={() => setChecked([])}>{c.reset}</button>
    {groups.map(group => <section key={group} id={`tasks-${group}`}><h2>{c[group]}</h2>
      <div className="task-grid">{c.tasks.filter(task => task[1] === group).map(task => <article className="card task-card" id={`task-${task[0]}`} key={task[0]}>
        <h3><label><input type="checkbox" checked={checked.includes(task[0])} onChange={e => {
          const on = e.target.checked; setChecked(prev => toggleTask(prev, task[0], on));
        }}/>{' '}{task[2]}</label></h3>
        <dl><dt>{c.entry}</dt><dd>{task[3]}</dd><dt>{c.reward}</dt><dd>{task[4]}</dd><dt>{c.deadline}</dt><dd>{task[5]}</dd><dt>{c.done}</dt><dd>{task[6]}</dd></dl>
        <a href={task[0] === 'case' ? OFFICIAL.stoveSecretRabbitCase : OFFICIAL.stoveFoundry} target="_blank" rel="noopener noreferrer">{c.source} ↗</a>
      </article>)}</div>
    </section>)}
    <p role="status" hidden={checked.length !== c.tasks.length}>{c.complete}</p>
  </div>;
}
