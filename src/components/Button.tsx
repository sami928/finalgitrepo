import { type ReactNode } from 'react';

type Variant = 'primary' | 'outline' | 'ghost';

const styles: Record<Variant, string> = {
  primary:
    'bg-gold-500 text-white hover:bg-gold-600 active:bg-gold-700 shadow-sm',
  outline:
    'border border-ink-300 text-ink-900 bg-white/0 hover:border-ink-900 hover:bg-ink-50',
  ghost: 'text-ink-700 hover:text-ink-900 hover:bg-ink-100',
};

export function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  type = 'button',
  className = '',
}: {
  children: ReactNode;
  variant?: Variant;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  className?: string;
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 ${styles[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
