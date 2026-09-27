import { ArrowUpRight } from 'lucide-react';
import type { LinkGroup } from '@/data/guides/links';

/** Grouped external links (Niche, Walk Score, local services) for one guide. */
export function UsefulLinks({ groups }: { groups: LinkGroup[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {groups.map((group) => (
        <div key={group.title} className="rounded-2xl border border-ink-100 bg-white p-6">
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">{group.title}</h3>
          <ul className="mt-4 space-y-3">
            {group.links.map((link) => (
              <li key={link.href + link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start justify-between gap-3"
                >
                  <span>
                    <span className="block text-sm font-semibold text-ink-900 group-hover:text-gold-700">
                      {link.label}
                    </span>
                    {link.note && <span className="block text-xs leading-snug text-ink-500">{link.note}</span>}
                  </span>
                  <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-ink-400 transition-colors group-hover:text-gold-600" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
