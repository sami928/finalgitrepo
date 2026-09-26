import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { AppLink } from '@/components/AppLink';
import {
  guideCategories,
  catalogIn,
  guideUrl,
  categoryUrl,
  RESOURCES_PATH,
  type CategoryId,
} from '@/data/guides/catalog';
import type { Guide } from '@/data/guides/types';

/**
 * The Resources tree: category → guide → sections of the guide being read.
 * Categories start expanded; the reader can fold any of them away.
 */
export function ResourceTree({
  activeCategory,
  activeGuide,
}: {
  activeCategory?: CategoryId;
  activeGuide?: Guide;
}) {
  const [closed, setClosed] = useState<Set<CategoryId>>(new Set());
  const toggle = (id: CategoryId) =>
    setClosed((s) => {
      const next = new Set(s);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  return (
    <nav aria-label="Resource guides" className="text-sm">
      <AppLink
        to={RESOURCES_PATH}
        className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600 hover:text-gold-700"
      >
        All resources
      </AppLink>
      <ul className="mt-4 space-y-4">
        {guideCategories.map((c) => {
          const open = !closed.has(c.id);
          return (
            <li key={c.id}>
              <div className="flex items-center justify-between gap-2">
                <AppLink
                  to={categoryUrl(c.id)}
                  aria-current={activeCategory === c.id && !activeGuide ? 'page' : undefined}
                  className={`font-semibold transition-colors hover:text-gold-600 ${
                    activeCategory === c.id ? 'text-ink-900' : 'text-ink-700'
                  }`}
                >
                  {c.title}
                </AppLink>
                <button
                  onClick={() => toggle(c.id)}
                  aria-expanded={open}
                  aria-label={`${open ? 'Collapse' : 'Expand'} ${c.title}`}
                  className="grid h-7 w-7 place-items-center rounded-full text-ink-400 hover:bg-ink-100 hover:text-ink-700"
                >
                  <ChevronDown className={`h-4 w-4 transition-transform ${open ? '' : '-rotate-90'}`} />
                </button>
              </div>
              {open && (
                <ul className="mt-2 space-y-0.5 border-l border-ink-100">
                  {catalogIn(c.id).map((g) => {
                    const current = activeGuide?.slug === g.slug;
                    return (
                      <li key={g.slug}>
                        <AppLink
                          to={guideUrl(g)}
                          aria-current={current ? 'page' : undefined}
                          className={`-ml-px flex gap-2 border-l-2 py-1.5 pl-3 leading-snug transition-colors ${
                            current
                              ? 'border-gold-500 font-medium text-ink-900'
                              : 'border-transparent text-ink-600 hover:border-ink-300 hover:text-ink-900'
                          }`}
                        >
                          <span className="tabular-nums text-ink-400">{g.number}</span>
                          {g.title}
                        </AppLink>
                        {current && activeGuide && (
                          <ul className="mb-2 ml-9 mt-1 space-y-1">
                            {activeGuide.sections.map((s) => (
                              <li key={s.id}>
                                <a href={`#${s.id}`} className="block text-xs leading-snug text-ink-500 hover:text-gold-600">
                                  {s.heading}
                                </a>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
