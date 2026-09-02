import { useEffect } from 'react';
import { Search } from 'lucide-react';
import { site } from '@/config/site';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      'realscout-advanced-search': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          'agent-encoded-id'?: string;
        },
        HTMLElement
      >;
    }
  }
}

export function RealScoutWidget() {
  useEffect(() => {
    if (document.getElementById('realscout-web-components')) return;
    const script = document.createElement('script');
    script.id = 'realscout-web-components';
    script.src = 'https://em.realscout.com/widgets/realscout-web-components.umd.js';
    script.type = 'module';
    document.body.appendChild(script);
  }, []);

  return (
    <div className="overflow-hidden rounded-2xl border border-ink-200 bg-white shadow-sm">
      <div className="flex items-center justify-between border-b border-ink-100 bg-ink-50 px-5 py-3">
        <div className="flex items-center gap-2 text-sm font-semibold text-ink-800">
          <Search className="h-4 w-4 text-gold-600" />
          Search {site.area} homes
        </div>
        <span className="rounded-full bg-gold-100 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-gold-700">
          Live MLS
        </span>
      </div>

      <div className="bg-white p-4 sm:p-5">
        <realscout-advanced-search agent-encoded-id="QWdlbnQtMjg1Nzcy" />
      </div>
    </div>
  );
}
