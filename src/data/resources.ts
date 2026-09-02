export type Resource = {
  id: string;
  title: string;
  type: 'PDF Guide' | 'Buyer Guide' | 'Article';
  description: string;
  format: string;
  pages?: number;
  readTime?: string;
  category: 'Buying' | 'Selling' | 'Portland Metro' | 'Financing';
  url: string;
};

// Placeholder download links — replace href URLs with your actual PDFs.
// Articles link to the article detail view (template shows inline).
export const resources: Resource[] = [
  {
    id: 'r-01',
    title: 'Portland Metro Home Buyer\'s Guide',
    type: 'Buyer Guide',
    description:
      'A 28-page walkthrough of the entire buying process, from pre-approval to closing day, with Portland-specific timelines and contingencies.',
    format: 'PDF',
    pages: 28,
    category: 'Buying',
    url: '#',
  },
  {
    id: 'r-02',
    title: 'First-Time Buyer Checklist',
    type: 'PDF Guide',
    description:
      'A printable one-page checklist covering everything you need before, during, and after your first home purchase.',
    format: 'PDF',
    pages: 1,
    category: 'Buying',
    url: '#',
  },
  {
    id: 'r-03',
    title: 'Selling Your Home: Maximizing Value',
    type: 'PDF Guide',
    description:
      'How to prep, price, and market your home to attract the strongest offers in today\'s Portland market.',
    format: 'PDF',
    pages: 16,
    category: 'Selling',
    url: '#',
  },
  {
    id: 'r-04',
    title: 'Greater Portland Neighborhood Guide',
    type: 'PDF Guide',
    description:
      'Side-by-side comparison of 24 Portland metro neighborhoods — schools, walkability, median prices, and vibe.',
    format: 'PDF',
    pages: 24,
    category: 'Portland Metro',
    url: '#',
  },
  {
    id: 'r-05',
    title: 'Mortgage Pre-Approval Workbook',
    type: 'PDF Guide',
    description:
      'Worksheets and a lender question list so you walk into pre-approval confident and prepared.',
    format: 'PDF',
    pages: 8,
    category: 'Financing',
    url: '#',
  },
  {
    id: 'r-06',
    title: 'Closing Costs Explained (Oregon)',
    type: 'PDF Guide',
    description:
      'A clear breakdown of Oregon-specific closing costs so there are no surprises at the signing table.',
    format: 'PDF',
    pages: 6,
    category: 'Financing',
    url: '#',
  },
  {
    id: 'a-01',
    title: '5 Things to Know Before Buying in Portland in 2026',
    type: 'Article',
    description:
      'Inventory trends, interest rate impact, and which neighborhoods are heating up this year.',
    readTime: '4 min',
    category: 'Buying',
    url: '#',
  },
  {
    id: 'a-02',
    title: 'Why Pricing Right Matters in a Shifting Market',
    type: 'Article',
    description:
      'The data behind overpricing — days on market, price drops, and final sale price.',
    readTime: '3 min',
    category: 'Selling',
    url: '#',
  },
  {
    id: 'a-03',
    title: 'Maxims of Moving to the Greater Portland Metro',
    type: 'Article',
    description:
      'A relocation primer: commute corridors, school districts, and the personality of each suburb.',
    readTime: '6 min',
    category: 'Portland Metro',
    url: '#',
  },
];
