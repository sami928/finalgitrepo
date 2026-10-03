import type { Guide } from './types';

const guide: Guide = {
  slug: 'goose-hollow-maplewood-garden-home-west-slope',
  number: '04',
  category: 'area-overviews',
  title: 'Four Neighborhoods, Two Jurisdictions',
  eyebrow: 'Goose Hollow · Maplewood · Garden Home · West Slope',
  summary:
    'Goose Hollow, Maplewood, Garden Home and West Slope lie within about six miles of one another, split by the Multnomah–Washington county line.',
  lede:
    'Goose Hollow, Maplewood, Garden Home and West Slope lie within about six miles of one another; Garden Home and West Slope are outside the City of Portland. Maplewood and Garden Home are neighbors across the Multnomah–Washington county line, where similar houses have different school assignments and taxing districts.',
  hero: null,
  stats: [],
  sections: [
    {
      id: 'jurisdiction',
      heading: 'Jurisdiction',
      blocks: [
        {
          type: 'table',
          columns: ['', 'Goose Hollow', 'Maplewood', 'Garden Home', 'West Slope'],
          rows: [
            ['Jurisdiction', 'City of Portland', 'City of Portland', 'Unincorporated', 'Unincorporated'],
            ['County', 'Multnomah', 'Multnomah', 'Washington', 'Washington'],
            [
              'School district',
              'Portland Public',
              'Portland Public',
              'Beaverton 48J',
              'Beaverton 48J, small NW portion Portland Public',
            ],
            [
              'Setting',
              'Dense and urban, at the foot of the West Hills',
              'Quiet and residential on rolling ground',
              "Established suburban, on Portland's western edge",
              'Wooded suburban, between Portland and Beaverton',
            ],
            [
              'Housing',
              'Condos, apartments and historic single-family',
              'Cottages and mid-century homes, largely owner-occupied',
              'Mid-century and newer homes on large lots',
              'Mid-century stock with mature tree cover',
            ],
            [
              'Getting around',
              'MAX light rail; walk to downtown',
              'Car; SW Multnomah Blvd and Barbur',
              'Car; close to Highway 217',
              'Car; immediate US-26 access',
            ],
            [
              'Green space',
              'Washington Park adjacent',
              'April Hill Park; Gabriel Park just east',
              'Garden Home Recreation Center',
              'Close to the Tualatin Hills park network',
            ],
          ],
        },
        {
          type: 'callout',
          title: 'The county line',
          text: "The county line determines the school district, the property tax districts and levies, and which city services apply. It is not visible on the ground; SW 65th Avenue looks the same on both sides.\n\nSchool assignment should be confirmed by address with the district, not assumed from a neighborhood name. Oregon's assessed value does not reset when a home sells, so tax should be estimated from the county's assessed figure, not the purchase price.",
        },
      ],
    },
    {
      id: 'closer-look',
      heading: 'Neighborhoods',
      blocks: [
        {
          type: 'cards',
          columns: 2,
          items: [
            {
              title: 'Goose Hollow',
              tag: 'SW Portland',
              image: 'goose-hollow',
              text: 'The most urban of the four, around Providence Park at the foot of the West Hills. Daniel Lownsdale built a tannery here in 1845; the stadium stands on the site. Construction of Interstate 405 in the 1960s removed large parts of the neighborhood, and historic houses now stand next to modern towers.\n\nLight rail, downtown and Washington Park are within walking distance.',
            },
            {
              title: 'Maplewood',
              tag: 'SW Portland',
              image: 'maplewood',
              text: 'Almost entirely residential, extending west from SW 45th to the city limit between Vermont and Multnomah Boulevard. It has rolling ground, cottage-scale houses and a high rate of owner occupancy. April Hill Park has trails down to Woods Creek; Gabriel Park and the Southwest Community Center are just across 45th.\n\nIt is quiet and wooded while inside Portland city limits.',
            },
            {
              title: 'Garden Home',
              tag: 'Washington County',
              image: 'garden-home',
              text: "Maplewood's western neighbor, across the county line. It is named for the Oregon Electric Railway depot that opened here in the early 1900s; the Whitford half of the name survives mainly as the name of a Beaverton middle school. It has around 7,000 residents, large lots and its own recreation center.\n\nIt combines proximity to Portland with Beaverton schools and Washington County taxes.",
            },
            {
              title: 'West Slope',
              tag: 'Washington County',
              image: 'west-slope',
              text: 'A little over 1.6 square miles between Portland and Beaverton, south of US-26 and northwest of Raleigh Hills. It has around 7,200 residents on mid-century streets with mature tree cover. The highway is close, giving a short drive to either city.\n\nIt combines established streets and larger lots with westside commute access.',
            },
          ],
        },
      ],
    },
  ],
  disclaimer:
    'Jurisdiction, county and school district per the U.S. Census and district boundaries. Attendance areas and district boundaries are revised from time to time and vary by address; verify both with the relevant district.',
};

export default guide;
