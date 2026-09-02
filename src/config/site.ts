export const site = {
  // Toggle to show or hide all testimonials/reviews content across the site.
  // Set to true to bring back the testimonials page, nav links, and home page section.
  testimonialsEnabled: false,
  // Toggle to show or hide the Resources page and its nav links.
  // Set to true to bring back the resources page and links.
  resourcesEnabled: false,
  agentName: 'Catherine Redmond',
  agentTitle: 'Real Estate Broker',
  area: 'Portland Metro',
  brokerage: 'Engel & Volkers',
  phone: '(503) 887-5879',
  phoneHref: 'tel:+15035550142',
  email: 'catherine@homesbycatherine.io',
  emailHref: 'mailto:catherine@homesbycatherine.io',
  licenseNo: 'OREL #201401234',
  // Replace with your RealScout embed snippet. Paste the <script> block RealScout
  // gives you (or the widget <div>) into the RealScoutWidget component.
  realscoutNote:
    'Paste your RealScout embed code in src/components/RealScoutWidget.tsx to activate live MLS search here.',
  social: {
    instagram: 'https://instagram.com/_homesbykaty_',
    facebook: 'https://facebook.com',
    linkedin: 'https://linkedin.com',
  },
};

export type Site = typeof site;
