import type { Block, Stat } from '@/data/guides/types';
import { GuideImage } from './GuideImage';

const paras = (text: string) =>
  text.split(/\n\n+/).map((t, i) => (
    <p key={i} className="leading-relaxed text-ink-600">
      {t}
    </p>
  ));

export function GuideStats({ items, note }: { items: Stat[]; note?: string }) {
  return (
    <div>
      <dl className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {items.map((s, i) => (
          <div key={i} className="rounded-2xl border border-ink-100 bg-white p-4 sm:p-5">
            <dt className="break-words font-display text-lg font-semibold text-ink-900 sm:text-2xl">{s.value}</dt>
            <dd className="mt-1 text-xs uppercase leading-snug tracking-wide text-ink-500">{s.label}</dd>
          </div>
        ))}
      </dl>
      {note && <p className="mt-3 text-xs leading-relaxed text-ink-500">{note}</p>}
    </div>
  );
}

function GuideBlock({ block: b, guide }: { block: Block; guide: string }) {
  switch (b.type) {
    case 'p':
      return <div className="space-y-4">{paras(b.text)}</div>;

    case 'list':
      return (
        <ul className="space-y-3">
          {b.items.map((it, i) => (
            <li key={i} className="flex gap-3 leading-relaxed text-ink-600">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
              <span>
                {typeof it === 'string' ? (
                  it
                ) : (
                  <>
                    {it.title && <strong className="font-semibold text-ink-900">{it.title} </strong>}
                    {it.text}
                  </>
                )}
              </span>
            </li>
          ))}
        </ul>
      );

    case 'image':
      return <GuideImage guide={guide} slot={b.slot} caption={b.caption} />;

    case 'timeline':
      return (
        <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {b.items.map((t, i) => (
            <li key={i} className="border-t-2 border-gold-500 pt-3">
              <span className="font-display text-xl font-semibold text-ink-900">{t.year}</span>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-600">{t.text}</p>
            </li>
          ))}
        </ol>
      );

    case 'stats':
      return <GuideStats items={b.items} note={b.note} />;

    case 'cards':
      return (
        <div className={`grid gap-6 sm:grid-cols-2 ${b.columns === 3 ? 'lg:grid-cols-3' : ''}`}>
          {b.items.map((c, i) => (
            <article
              key={i}
              id={c.id}
              className="flex flex-col overflow-hidden rounded-2xl border border-ink-100 bg-white"
            >
              {c.image && <GuideImage guide={guide} slot={c.image} rounded="rounded-none" />}
              <div className="flex flex-1 flex-col p-6">
                {c.tag && (
                  <span className="w-fit rounded-full bg-ink-100 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-ink-600">
                    {c.tag}
                  </span>
                )}
                <h3 className={`${c.tag ? 'mt-3' : ''} text-lg font-semibold leading-snug text-ink-900`}>
                  {c.href ? (
                    <a href={c.href} className="hover:text-gold-700">
                      {c.title}
                    </a>
                  ) : (
                    c.title
                  )}
                </h3>
                <div className="mt-2 space-y-3 text-sm">{paras(c.text)}</div>
                {c.facts && c.facts.length > 0 && (
                  <dl className="mt-4 grid grid-cols-2 gap-3 border-t border-ink-100 pt-4">
                    {c.facts.map((f, j) => (
                      <div key={j}>
                        <dt className="text-[11px] font-semibold uppercase tracking-wide text-ink-500">{f.label}</dt>
                        <dd className="text-sm text-ink-800">{f.value}</dd>
                      </div>
                    ))}
                  </dl>
                )}
              </div>
            </article>
          ))}
        </div>
      );

    case 'table':
      return (
        <div>
          <div className="overflow-x-auto rounded-2xl border border-ink-100">
            <table className="w-full min-w-[520px] text-left text-sm">
              <thead className="bg-ink-900 text-white">
                <tr>
                  {b.columns.map((c, i) => (
                    <th key={i} scope="col" className="px-4 py-3 text-[11px] font-semibold uppercase tracking-wide">
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-ink-100">
                {b.rows.map((r, i) => (
                  <tr key={i} className="even:bg-ink-50">
                    {r.map((cell, j) =>
                      j === 0 ? (
                        <th key={j} scope="row" className="px-4 py-3 align-top font-semibold text-ink-900">
                          {cell}
                        </th>
                      ) : (
                        <td key={j} className="px-4 py-3 align-top text-ink-600">
                          {cell}
                        </td>
                      ),
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {b.note && <p className="mt-3 text-xs leading-relaxed text-ink-500">{b.note}</p>}
        </div>
      );

    case 'callout':
      return (
        <div className="rounded-2xl border-l-4 border-gold-500 bg-ink-50 p-6">
          {b.title && (
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">{b.title}</p>
          )}
          <div className={`${b.title ? 'mt-3' : ''} space-y-3`}>{paras(b.text)}</div>
        </div>
      );

    case 'steps':
      return (
        <ol className="space-y-5">
          {b.items.map((s, i) => (
            <li key={i} className="flex gap-4">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gold-100 text-sm font-semibold text-gold-700">
                {i + 1}
              </span>
              <div className="space-y-2 pt-1.5">
                {s.title && <p className="font-semibold text-ink-900">{s.title}</p>}
                {paras(s.text)}
              </div>
            </li>
          ))}
        </ol>
      );
  }
}

export function GuideBlocks({ blocks, guide }: { blocks: Block[]; guide: string }) {
  return (
    <div className="space-y-6">
      {blocks.map((b, i) => (
        <GuideBlock key={i} block={b} guide={guide} />
      ))}
    </div>
  );
}
