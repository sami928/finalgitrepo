import { useEffect } from 'react';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      'realscout-your-listings': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          'agent-encoded-id'?: string;
          'sort-order'?: string;
          'listing-status'?: string;
          'property-types'?: string;
          'listing-date-start'?: string;
          'listing-date-end'?: string;
          'include-co-listings'?: string;
          'include-seller-listings'?: string;
        },
        HTMLElement
      >;
    }
  }
}

/**
 * RealScout "Your Listings" widget — shows Catherine's active, pending,
 * and sold listings pulled live from the MLS via RealScout.
 */
export function RealScoutListings() {
  useEffect(() => {
    if (document.getElementById('realscout-web-components')) return;
    const script = document.createElement('script');
    script.id = 'realscout-web-components';
    script.src = 'https://em.realscout.com/widgets/realscout-web-components.umd.js';
    script.type = 'module';
    document.body.appendChild(script);
  }, []);

  return (
    <div className="rounded-2xl border border-ink-200 bg-white shadow-sm">
      <style>{`
        realscout-your-listings {
          --rs-listing-divider-color: #e4e4e7;
          width: 100%;
        }
      `}</style>
      <realscout-your-listings
        agent-encoded-id="QWdlbnQtMjg1Nzcy"
        sort-order="STATUS_AND_SIGNIFICANT_CHANGE"
        listing-status="For Sale,In Contract,Sold"
        property-types="SFR,MF,TC,LAL,MOBILE,OTHER"
        listing-date-start="2020-01-01"
        include-co-listings="true"
        include-seller-listings="true"
      />
    </div>
  );
}
