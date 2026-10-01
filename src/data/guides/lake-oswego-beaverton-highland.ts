import type { Guide } from './types';

const guide: Guide = {
  slug: 'lake-oswego-beaverton-highland',
  number: '05',
  category: 'area-overviews',
  title: 'Lake Oswego, Beaverton & Highland',
  eyebrow: 'Two Cities and a Pocket Inside One of Them',
  summary:
    'Lake Oswego and Beaverton are separate cities with their own school districts; Highland, also marketed as Hyland Hills, is a wooded residential neighborhood inside Beaverton.',
  lede:
    'Lake Oswego and Beaverton are separate cities with their own school districts, budgets and character. Highland, also marketed as Hyland Hills, is a wooded residential neighborhood inside Beaverton.',
  hero: null,
  stats: [],
  sections: [
    {
      id: 'comparison',
      heading: 'Comparison',
      blocks: [
        {
          type: 'table',
          columns: ['', 'Lake Oswego', 'Beaverton', 'Highland'],
          rows: [
            ['Jurisdiction', 'City', 'City', 'Within Beaverton'],
            ['County', 'Clackamas, with parts in Multnomah and Washington', 'Washington', 'Washington'],
            [
              'School district',
              'Lake Oswego School District',
              'Beaverton 48J, with parts in Hillsboro and Portland districts',
              'Beaverton 48J',
            ],
            ['Population', 'About 40,700', 'About 97,500 — seventh largest in Oregon', 'Counted within Beaverton'],
            [
              'Distance',
              'Roughly 7 miles south of Portland',
              'Roughly 7 miles west of Portland',
              'Roughly 10 miles west of downtown Portland',
            ],
            [
              'Setting',
              'Lakeside and wooded, residential throughout',
              'A working city and regional employment center',
              'Douglas fir cover, quiet and set back from the arterials',
            ],
            [
              'Housing',
              'Ranges from lakefront estates to wooded contemporary',
              'Broad mix, from apartments to established single-family',
              'Mid-century modern, ranch and split-level, largely single-story',
            ],
            [
              'Getting around',
              'Car and bus; no light rail',
              'Seven MAX stations on two lines; WES commuter rail',
              'Car; Cedar Hills Crossing about two miles north',
            ],
            [
              'Known for',
              'Oswego Lake, and a 19th-century iron industry',
              "Nike's global headquarters and the Silicon Forest",
              'Fir Grove and Channing Heights parks; Hyland Forest Park nearby',
            ],
          ],
        },
        {
          type: 'stats',
          items: [
            { value: '$884,631', label: 'Lake Oswego · typical home value' },
            { value: '$630,000', label: 'Beaverton · median sale price' },
          ],
          note: 'Lake Oswego: Zillow home value index, up 1.4% year on year, 31 August 2026. Beaverton: Redfin median sale price, up 14.5% year on year, 37 days on market, August 2026. The two figures are not comparable: they come from different providers and measure different things (a modeled value index versus a median of closed sales). The price gap between the cities is real, but these numbers do not measure it. A like-for-like analysis is needed before drawing conclusions from either.',
        },
        {
          type: 'callout',
          title: 'Lake access',
          text: 'A Lake Oswego address does not by itself include the right to use Oswego Lake. Access depends on easements attached to particular properties and neighborhood associations, and public access has been litigated in the Oregon courts more than once in recent years.\n\nThis is a common misunderstanding among buyers new to the city, and it materially affects value. Confirm what a specific property conveys before making an offer based on lake access.',
        },
      ],
    },
    {
      id: 'closer-look',
      heading: 'Cities and neighborhood',
      blocks: [
        {
          type: 'cards',
          columns: 3,
          items: [
            {
              title: 'Lake Oswego',
              tag: 'Clackamas County · City',
              image: 'lake-oswego',
              text: "Seven miles south of Portland, built around a 405-acre lake the Clackamas people called Waluga. The city was the center of Oregon's iron industry in the late 1800s before becoming residential. Its school district runs two high schools, Lake Oswego and Lakeridge. Downtown, along A Avenue, has an unusually full range of shops and restaurants for a city of 40,000.\n\nIt is a self-contained small city with its own school district, and its housing is at the upper end of the metro market.",
            },
            {
              title: 'Beaverton',
              tag: 'Washington County · City',
              image: 'beaverton',
              text: "The seventh largest city in Oregon and, with Hillsboro, the economic center of Washington County. Nike's global headquarters is here, employing around 6,000 people; the school district is the next largest employer. With seven MAX stations on two lines and the busiest transit center in the TriMet system, it is the best connected of the three.\n\nIt has the widest range of housing types and prices on the westside.",
            },
            {
              title: 'Highland · Hyland Hills',
              tag: 'Beaverton · Neighborhood',
              image: 'highland-hyland-hills',
              text: "A wooded area about ten miles west of downtown Portland, under tall Douglas firs that make it quieter than the nearby arterials. Housing is almost entirely single-family and mid-century: ranch and split-level, often single-story, with the large windows and courtyards of the period. Fir Grove and Channing Heights parks are inside it, and Hyland Forest Park is just beyond.\n\nIt combines Beaverton's access and schools with quiet, wooded streets.",
            },
          ],
        },
      ],
    },
  ],
  disclaimer:
    'City, county and school district boundaries vary by address and change over time; verify school assignment and any lake or water rights for a specific property. Market figures are as of the dates given and change quickly.',
};

export default guide;
