import { useRealScout } from '@/lib/useRealScout';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      'realscout-home-value': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          'agent-encoded-id'?: string;
        },
        HTMLElement
      >;
    }
  }
}

/**
 * RealScout Home Value widget — lets a visitor enter their address and
 * get an instant estimated home value pulled from RealScout's data.
 */
export function RealScoutHomeValue() {
  const { ref } = useRealScout<HTMLDivElement>();

  return (
    <div ref={ref} className="overflow-hidden rounded-2xl border border-ink-200 bg-white shadow-sm">
      <style>{`
        realscout-home-value {
          --rs-hvw-background-color: #ffffff;
          --rs-hvw-title-color: #000000;
          --rs-hvw-subtitle-color: rgba(28, 30, 38, 0.5);
          --rs-hvw-input-text-color: inherit;
          --rs-hvw-primary-button-text-color: #ffffff;
          --rs-hvw-primary-button-color: #dc2626;
          --rs-hvw-secondary-button-text-color: #dc2626;
          --rs-hvw-secondary-button-color: #ffffff;
          --rs-hvw-widget-width: auto;
        }
      `}</style>
      <realscout-home-value agent-encoded-id="QWdlbnQtMjg1Nzcy" />
    </div>
  );
}
