import { ArrowUpRight, House } from 'lucide-react';
import { site } from '@/config/site';

type Profile = (typeof site.profiles)[number];

/** Profiles with a URL set in src/config/site.ts. */
export const activeProfiles = (): Profile[] => site.profiles.filter((p) => p.url);

/** Zillow mark from Simple Icons (CC0). Other sites use a neutral house icon. */
function ZillowIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12.006 0L1.086 8.627v3.868c3.386-2.013 11.219-5.13 14.763-6.015.11-.024.16.005.227.078.372.427 1.586 1.899 1.916 2.301a.128.128 0 0 1-.03.195 43.607 43.607 0 0 0-6.67 6.527c-.03.037-.006.043.012.03 2.642-1.134 8.828-2.94 11.622-3.452V8.627zm-.48 11.177c-2.136.708-8.195 3.307-10.452 4.576V24h21.852v-7.936c-2.99.506-11.902 3.16-15.959 5.246a.183.183 0 0 1-.23-.036l-2.044-2.429c-.055-.061-.062-.098.011-.208 1.574-2.3 4.789-5.899 6.833-7.418.042-.03.031-.06-.012-.042Z" />
    </svg>
  );
}

export function ProfileIcon({ id, className = 'h-4 w-4' }: { id: Profile['id']; className?: string }) {
  return id === 'zillow' ? <ZillowIcon className={className} /> : <House className={className} strokeWidth={1.75} />;
}

/** "Find Catherine on" box for the Contact page. Renders nothing until a profile URL is set. */
export function ProfileLinks() {
  const profiles = activeProfiles();
  if (!profiles.length) return null;
  const first = site.agentName.split(' ')[0];

  return (
    <div className="mt-8 rounded-xl bg-ink-50 p-5">
      <h3 className="text-sm font-semibold text-ink-900">Find {first} on</h3>
      <p className="mt-1 text-sm text-ink-600">Agent profiles, reviews and past sales on listing sites.</p>
      <ul className="mt-4 grid gap-2 sm:grid-cols-2">
        {profiles.map((p) => (
          <li key={p.id}>
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-lg bg-white p-3 ring-1 ring-ink-200 transition-colors hover:ring-gold-400"
            >
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-gold-100 text-gold-600">
                <ProfileIcon id={p.id} />
              </span>
              <span className="flex-1 text-sm font-semibold text-ink-900">{p.label}</span>
              <ArrowUpRight className="h-4 w-4 text-ink-400 transition-colors group-hover:text-gold-600" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
