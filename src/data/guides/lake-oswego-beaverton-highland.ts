import type { Guide } from './types';

const guide: Guide = {
  slug: 'lake-oswego-beaverton-highland',
  number: '05',
  category: 'area-overviews',
  title: 'Lake Oswego, Beaverton & Highland',
  eyebrow: 'Two Cities and a Pocket Inside One of Them',
  summary:
    'Lake Oswego and Beaverton are separate cities with their own school districts and character, while Highland — also sold as Hyland Hills — is a wooded residential neighborhood inside Beaverton.',
  lede:
    'These three are not the same kind of choice. Lake Oswego and Beaverton are separate cities with their own school districts, budgets and character. Highland — also sold as Hyland Hills — is a wooded residential neighborhood inside Beaverton. Most buyers settle the city question first and the street question second, so the guide is ordered that way.',
  hero: null,
  stats: [],
  sections: [
    {
      id: 'comparison',
      heading: 'City & Neighborhood',
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
              'Oswego Lake, and a 19th-century iron industry past',
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
          note: 'Lake Oswego figure is the Zillow home value index, up 1.4% year on year, 31 August 2026. Beaverton figure is the Redfin median sale price, up 14.5% year on year, 37 days on market, August 2026. Read those two figures separately, not against each other — they come from different providers and measure different things, a modelled value index against an actual median of closed sales. The gap between the cities is real, but these numbers do not size it. Ask for a like-for-like analysis before drawing a conclusion from either.',
        },
        {
          type: 'callout',
          title: 'Before You Assume Lake Access',
          text: 'A Lake Oswego address does not by itself come with the right to use Oswego Lake. Access runs with specific easements attached to particular properties and neighborhood associations, and the question of public access has been through the Oregon courts more than once in recent years.\n\nIt is one of the most common misunderstandings among buyers new to the city, and it materially affects value. Confirm what a specific property actually conveys before making an offer on the strength of the lake.',
        },
      ],
    },
    {
      id: 'closer-look',
      kicker: 'A Closer Look',
      heading: 'What Each One Is Actually Like',
      blocks: [
        {
          type: 'cards',
          columns: 3,
          items: [
            {
              title: 'Lake Oswego',
              tag: 'Clackamas County · City',
              image: 'lake-oswego',
              text: "Seven miles south of Portland, built around a 405-acre lake the Clackamas people called Waluga. The city was the hub of Oregon's iron industry in the late 1800s before becoming residential. Its own school district runs two high schools, Lake Oswego and Lakeridge, and the downtown along A Avenue carries an unusually complete set of shops and restaurants for a city of 40,000.\n\nConsider it if you want a self-contained small city with its own district, and you are buying at the upper end of the metro.",
            },
            {
              title: 'Beaverton',
              tag: 'Washington County · City',
              image: 'beaverton',
              text: "The seventh largest city in Oregon and the economic center of Washington County alongside Hillsboro. Nike's global headquarters sits here, employing around 6,000 people, with the school district itself the next largest employer. Seven MAX stations across two lines and the busiest transit center in the TriMet system make it the most connected of the three by a wide margin.\n\nConsider it if the commute matters, or you want the widest range of housing types and prices on the westside.",
            },
            {
              title: 'Highland · Hyland Hills',
              tag: 'Beaverton · Neighborhood',
              image: 'highland-hyland-hills',
              text: "A wooded pocket about ten miles west of downtown Portland, under tall Douglas firs that give it a quieter, more secluded feel than the arterials nearby would suggest. Housing is almost entirely single-family and mid-century — ranch and split-level, often single-story, with the large windows and courtyards of the period. Fir Grove and Channing Heights parks sit inside it, Hyland Forest Park just beyond.\n\nConsider it if you want Beaverton's access and schools but trees and quiet on the street itself.",
            },
          ],
        },
      ],
    },
  ],
  disclaimer:
    'City, county and school district boundaries vary by address and change over time; school assignment and any lake or water rights must be verified for a specific property. Market figures are as dated and move quickly.',
};

export default guide;
