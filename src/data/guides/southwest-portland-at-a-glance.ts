import type { Guide } from './types';

const guide: Guide = {
  slug: 'southwest-portland-at-a-glance',
  number: '03',
  category: 'area-overviews',
  title: 'Southwest Portland at a Glance',
  eyebrow: 'Twenty-Five Neighborhoods · One Page',
  summary:
    'Twenty-five Southwest Portland neighborhoods grouped by character rather than alphabetically, because that is how buyers actually choose.',
  lede:
    'Southwest is the quietest quadrant and the most varied — hilltop view property, a walkable village, and deep-woods lots all sit within a few minutes of one another. Grouped here by character rather than alphabetically, because that is how buyers actually choose.',
  hero: null,
  stats: [],
  sections: [
    {
      id: 'hilltop-view',
      heading: '01 Hilltop & View',
      kicker: 'Top of the Market',
      blocks: [
        {
          type: 'cards',
          columns: 2,
          items: [
            { title: 'Southwest Hills', text: 'Elevation and winding streets, with downtown and Cascade outlooks.' },
            { title: 'Portland Heights', text: 'Historic homes on established streets minutes above the city center.' },
            { title: 'Council Crest', text: "Portland's highest point at 1,071 feet; panoramic mountain views." },
            { title: 'Healy Heights', text: 'Small and elevated, among the highest-priced addresses in Southwest.' },
            { title: 'Arlington Heights', text: 'Beside Washington Park, with substantial homes and a city outlook.' },
          ],
        },
      ],
    },
    {
      id: 'village-walkable',
      heading: '02 Village & Walkable',
      kicker: 'Main Street on Foot',
      blocks: [
        {
          type: 'cards',
          columns: 2,
          items: [
            { title: 'Multnomah Village', text: 'Independent shops, cafés and galleries on cosy winding streets.' },
            { title: 'Hillsdale', text: 'Compact town center and farmers market, quick run to downtown.' },
            { title: 'Burlingame', text: 'Established streets of 1920s–60s homes with easy Barbur access.' },
            { title: 'South Burlingame', text: 'Curving roads and mid-century housing stock close to I-5.' },
          ],
        },
      ],
    },
    {
      id: 'wooded-residential',
      heading: '03 Wooded Residential',
      kicker: 'Trees and Larger Lots',
      blocks: [
        {
          type: 'cards',
          columns: 2,
          items: [
            { title: 'Bridlemile', text: 'Forested lots with valley and Coast Range views.' },
            { title: 'Maplewood', text: 'Cottage-scale homes and a strong neighborhood identity.' },
            { title: 'Marshall Park', text: 'Quiet and woodsy around a 25-acre park with trails.' },
            { title: 'Collins View', text: 'Wraps Lewis & Clark College, forest on three sides.' },
            { title: 'Arnold Creek', text: 'Bordering Tryon Creek State Natural Area, north of Lake Oswego.' },
            { title: 'Ash Creek', text: 'Built around its own natural area near Tryon Creek.' },
            { title: 'Crestwood', text: 'Between SW 45th and Barbur, with Woods Memorial Natural Area.' },
            { title: 'Hayhurst', text: 'Early-1900s through 1960s homes near Gabriel Park.' },
            { title: 'West Portland Park', text: 'Forest-edged and largely 1940s–80s, near PCC Sylvania.' },
            { title: 'Markham', text: 'Wooded and quiet along the I-5 corridor, limited retail.' },
            { title: 'Far Southwest', text: 'Bordering Tigard and Lake Oswego, with Lesser Park nearby.' },
          ],
        },
      ],
    },
    {
      id: 'close-in-urban',
      heading: '04 Close-In & Urban',
      kicker: 'Downtown and OHSU',
      blocks: [
        {
          type: 'cards',
          columns: 2,
          items: [
            { title: 'Goose Hollow', text: 'Among the densest parts of the city, Providence Park at the door.' },
            { title: 'Homestead', text: 'OHSU on the hill above, a short walk to downtown.' },
            { title: 'South Portland', text: 'Formerly Corbett–Terwilliger–Lair Hill; riverfront and OHSU.' },
            { title: 'Johns Landing', text: 'Willamette frontage with trails, dining and tram access.' },
            { title: 'South Waterfront', text: 'High-rise living and the aerial tram; the newest housing in Southwest.' },
          ],
        },
      ],
    },
    {
      id: 'reading-the-map',
      heading: 'Reading the Map',
      kicker: "What the Boundaries Don't Tell You",
      blocks: [
        {
          type: 'list',
          items: [
            {
              title: 'Boundaries that catch people out.',
              text: 'Raleigh Hills, Garden Home and West Slope are marketed as Southwest but sit in unincorporated Washington County — different taxing districts and different school assignments.\n\nSylvan-Highlands is usually classified Northwest, despite sitting just across Highway 26 from Southwest addresses.\n\nMultnomah is the neighborhood; Multnomah Village is the commercial strip at its heart. Listings use both.\n\nSouth Portland is the current name for what older listings still call Corbett–Terwilliger–Lair Hill.',
            },
            {
              title: 'What actually separates them.',
              text: "Elevation. The hills carry a view premium and a steeper commute; the flats trade lower and drive easier in winter.\n\nHousing stock. Southwest runs from 1900s cottages through mid-century ranches to new high-rise — often within a mile.\n\nTree cover. Much of Southwest is genuinely wooded, which affects light, lot maintenance and what a survey turns up.\n\nAssessed value. Oregon's does not reset on sale, so tax bills differ between near-identical neighbors. Always check the county figure.",
            },
          ],
        },
        {
          type: 'steps',
          items: [
            {
              title: '01 Start with Elevation',
              text: 'Hill or flat decides view, price and winter driving in one answer, and narrows twenty-five options to a handful.',
            },
            {
              title: '02 Then the Commute',
              text: 'Downtown, OHSU and the westside suburbs pull in three different directions from Southwest.',
            },
            {
              title: '03 Then the House',
              text: 'Housing stock varies more by pocket than by price tier. Tour two contrasting areas before deciding.',
            },
          ],
        },
        {
          type: 'callout',
          title: 'Where to Start Looking',
          text: 'If you are new to Southwest, walk Multnomah Village and drive Council Crest on the same afternoon. They are ten minutes apart and sit at opposite ends of what this quadrant offers — most buyers know which way they lean by the end of it.',
        },
      ],
    },
  ],
  disclaimer: 'Neighborhood boundaries and descriptions are general and vary by source.',
};

export default guide;
