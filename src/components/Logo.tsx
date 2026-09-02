import { Home } from 'lucide-react';
import { site } from '@/config/site';
import evLogo from '@/assets/photos/EV_Logo_RGB_R.png';

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-2.5">
      <span className="grid h-9 w-9 place-items-center rounded-full bg-ink-900 text-gold-400">
        <Home className="h-5 w-5" strokeWidth={1.75} />
      </span>
      {!compact && (
        <div className="leading-tight">
          <div className="font-display text-lg font-semibold tracking-tightish text-ink-900">
            {site.agentName}
          </div>
          <img
            src={evLogo}
            alt="Engel & Völkers"
            className="mt-0.5 h-[11px] w-auto object-contain"
          />
        </div>
      )}
    </div>
  );
}
