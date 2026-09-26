import type { Guide } from './types';

const guide: Guide = {
  slug: 'goose-hollow-maplewood-garden-home-west-slope',
  number: '04',
  category: 'area-overviews',
  title: 'Four Neighborhoods, Two Jurisdictions',
  eyebrow: 'Goose Hollow · Maplewood · Garden Home · West Slope',
  summary:
    'Goose Hollow, Maplewood, Garden Home and West Slope sit within about six miles of one another, but the Multnomah–Washington county line splits them into two different jurisdictions.',
  lede:
    'These four sit within about six miles of one another, and two of them are not in the City of Portland at all. Maplewood and Garden Home are direct neighbors across the Multnomah–Washington county line, where similar houses on similar streets carry different school assignments and different taxing districts. That line is the single most important thing to understand here.',
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
              'Leafy suburban, between Portland and Beaverton',
            ],
            [
              'Housing',
              'Condos, apartments and historic single-family',
              'Cottages and mid-century homes, largely owner-occupied',
              'Mid-century and newer homes on generous lots',
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
              'Washington Park on the doorstep',
              'April Hill Park; Gabriel Park just east',
              'Garden Home Recreation Center',
              'Close to the Tualatin Hills park network',
            ],
          ],
        },
        {
          type: 'callout',
          title: 'Why the County Line Matters',
          text: "Crossing it changes the school district, the property tax districts and levies, and which city services apply. It does not announce itself on the ground — SW 65th Avenue looks the same on both sides.\n\nTwo practical consequences. First, never assume a school assignment from a neighborhood name; confirm it by address with the district. Second, Oregon's assessed value does not reset when a home sells, so compare the county's actual assessed figure rather than estimating tax from the purchase price.",
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
          columns: 2,
          items: [
            {
              title: 'Goose Hollow',
              tag: 'SW Portland',
              image: 'goose-hollow',
              text: 'The most urban address of the four, wrapped around Providence Park at the foot of the West Hills. Daniel Lownsdale put a tannery here in 1845; the stadium stands on the site. Interstate 405 took out large pieces of the neighborhood in the 1960s, which is why historic houses and modern towers now sit side by side.\n\nSuits buyers who want to leave the car parked — light rail, downtown and Washington Park are all walkable.',
            },
            {
              title: 'Maplewood',
              tag: 'SW Portland',
              image: 'maplewood',
              text: 'Almost entirely residential, running west of SW 45th to the city limit between Vermont and Multnomah Boulevard. Rolling ground, cottage-scale houses, and a high rate of owner occupancy. April Hill Park has trails down to Woods Creek, and Gabriel Park and the Southwest Community Center sit just across 45th.\n\nSuits buyers who want quiet and trees while staying inside Portland city limits.',
            },
            {
              title: 'Garden Home',
              tag: 'Washington County',
              image: 'garden-home',
              text: "Maplewood's western neighbor, immediately across the county line. Named for the Oregon Electric Railway depot that opened here in the early 1900s; the Whitford half of the name survives mainly as a Beaverton middle school. Around 7,000 residents, on generous lots, with its own recreation center.\n\nSuits buyers who want Portland proximity with Beaverton schools and Washington County taxes.",
            },
            {
              title: 'West Slope',
              tag: 'Washington County',
              image: 'west-slope',
              text: 'A little over 1.6 square miles between Portland and Beaverton, south of US-26 and northwest of Raleigh Hills. Around 7,200 residents on mid-century streets under mature tree cover. The highway sits close enough for a genuinely short run into either city.\n\nSuits buyers weighing a westside commute who still want established streets and larger lots.',
            },
          ],
        },
      ],
    },
  ],
  disclaimer:
    'Jurisdiction, county and school district per the U.S. Census and district boundaries. Attendance areas and district boundaries are revised from time to time and vary by address — verify both with the relevant district before relying on them.',
};

export default guide;
