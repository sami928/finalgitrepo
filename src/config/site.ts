export const site = {
  // Toggle to show or hide all testimonials/reviews content across the site.
  // Set to true to bring back the testimonials page, nav links, and home page section.
  testimonialsEnabled: false,
  // Toggle to show or hide the Resources page and its nav links.
  // Set to true to bring back the resources page and links.
  resourcesEnabled: true,
  // Toggle to show or hide the MLS Search page and its nav links.
  // Set to true once you've added your RMLS API key in src/config/mls.ts.
  // While false, the page exists in the code but is hidden from visitors.
  mlsSearchEnabled: false,
  agentName: 'Catherine Redmond',
  agentTitle: 'Real Estate Broker',
  area: 'Portland,Oregon',
  brokerage: 'Engel & Volkers',
  phone: '(503) 887-5879',
  phoneHref: 'tel:+15038875879',
  email: 'catherine@homesbycatherine.io',
  emailHref: 'mailto:catherine@homesbycatherine.io',
  licenseNo: 'OREL #201217068',
  // Replace with your RealScout embed snippet. Paste the <script> block RealScout
  // gives you (or the widget <div>) into the RealScoutWidget component.
  realscoutNote:
    'Paste your RealScout embed code in src/components/RealScoutWidget.tsx to activate live MLS search here.',
  social: {
    instagram: 'https://instagram.com/_homesbycatherine_',
    facebook: 'https://facebook.com',
    linkedin: 'https://www.linkedin.com/in/catherine-redmond-40321036',
    // Google Business Profile (the "Homes By Catherine" search panel).
    // Linked from the header and footer; leave empty to hide those links.
    googleBusiness:
      'https://www.google.com/search?q=Homes+By+Catherine&stick=H4sIAAAAAAAA_-NgU1I1qDA1sTQ1SDIwTzMytzC3MLW0MqgwTjRJNbBINk5MNjM0ME00XcQq5JGfm1qs4FSp4JxYkpFalJmXCgAOwM3lPgAAAA',
  },
};

export type Site = typeof site;
