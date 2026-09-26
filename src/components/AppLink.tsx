import { type MouseEvent, type ReactNode } from 'react';
import { navigate } from '@/lib/router';

/**
 * Real <a href> for crawlers and cmd/middle-click, with ordinary clicks kept
 * client-side — the same pattern the Navbar and Footer use.
 */
export function AppLink({
  to,
  children,
  className = '',
  ...rest
}: {
  to: string;
  children: ReactNode;
  className?: string;
  'aria-current'?: 'page' | undefined;
}) {
  const onClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    e.preventDefault();
    navigate(to);
  };
  return (
    <a href={to} onClick={onClick} className={className} {...rest}>
      {children}
    </a>
  );
}
