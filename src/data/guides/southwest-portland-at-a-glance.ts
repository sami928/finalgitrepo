import type { Guide } from './types';

const guide: Guide = {
  slug: 'southwest-portland-at-a-glance',
  number: '03',
  category: 'area-overviews',
  title: 'Southwest Portland at a Glance',
  eyebrow: 'Twenty-Five Neighborhoods · One Page',
  summary:
    'An overview of twenty-five Southwest Portland neighborhoods, grouped by character: hilltop and view, village and walkable, wooded residential, and close-in urban.',
  lede:
    'Southwest Portland contains hilltop view property, a walkable village and heavily wooded lots within a few minutes of one another. Its twenty-five neighborhoods are grouped here by character rather than alphabetically.',
  hero: null,
  stats: [],
  sections: [
    {
      id: 'hilltop-view',
      heading: 'Hilltop and view',
      blocks: [
        {
          type: 'cards',
          columns: 2,
          items: [
            { title: 'Southwest Hills', text: 'Elevated, with winding streets and views of downtown and the Cascades.' },
            { title: 'Portland Heights', text: 'Historic homes on established streets just above the city center.' },
            { title: 'Council Crest', text: "Portland's highest point, at 1,071 feet, with mountain views." },
            { title: 'Healy Heights', text: 'Small and elevated; among the highest-priced addresses in Southwest.' },
            { title: 'Arlington Heights', text: 'Next to Washington Park, with large homes and city views.' },
          ],
        },
      ],
    },
    {
      id: 'village-walkable',
      heading: 'Village and walkable',
      blocks: [
        {
          type: 'cards',
          columns: 2,
          items: [
            { title: 'Multnomah Village', text: 'Independent shops, cafés and galleries on winding streets.' },
            { title: 'Hillsdale', text: 'Compact town center and farmers market, close to downtown.' },
            { title: 'Burlingame', text: 'Established streets of 1920s–60s homes with access to Barbur.' },
            { title: 'South Burlingame', text: 'Curving roads and mid-century housing close to I-5.' },
          ],
        },
      ],
    },
    {
      id: 'wooded-residential',
      heading: 'Wooded residential',
      blocks: [
        {
          type: 'cards',
          columns: 2,
          items: [
            { title: 'Bridlemile', text: 'Forested lots with valley and Coast Range views.' },
            { title: 'Maplewood', text: 'Cottage-scale homes and a distinct neighborhood identity.' },
            { title: 'Marshall Park', text: 'Quiet and wooded, around a 25-acre park with trails.' },
            { title: 'Collins View', text: 'Surrounds Lewis & Clark College; forest on three sides.' },
            { title: 'Arnold Creek', text: 'Borders Tryon Creek State Natural Area, north of Lake Oswego.' },
            { title: 'Ash Creek', text: 'Built around its own natural area near Tryon Creek.' },
            { title: 'Crestwood', text: 'Between SW 45th and Barbur, with Woods Memorial Natural Area.' },
            { title: 'Hayhurst', text: 'Early-1900s through 1960s homes near Gabriel Park.' },
            { title: 'West Portland Park', text: 'Forest-edged, largely 1940s–80s housing, near PCC Sylvania.' },
            { title: 'Markham', text: 'Wooded and quiet along the I-5 corridor; limited retail.' },
            { title: 'Far Southwest', text: 'Borders Tigard and Lake Oswego, with Lesser Park nearby.' },
          ],
        },
      ],
    },
    {
      id: 'close-in-urban',
      heading: 'Close-in and urban',
      blocks: [
        {
          type: 'cards',
          columns: 2,
          items: [
            { title: 'Goose Hollow', text: 'Among the densest parts of the city; next to Providence Park.' },
            { title: 'Homestead', text: 'Below OHSU, a short walk from downtown.' },
            { title: 'South Portland', text: 'Formerly Corbett–Terwilliger–Lair Hill; riverfront and OHSU.' },
            { title: 'Johns Landing', text: 'Willamette frontage with trails, restaurants and tram access.' },
            { title: 'South Waterfront', text: 'High-rise housing and the aerial tram; the newest housing in Southwest.' },
          ],
        },
      ],
    },
    {
      id: 'reading-the-map',
      heading: 'Boundaries and differences',
      blocks: [
        {
          type: 'list',
          items: [
            {
              title: 'Boundaries and names.',
              text: 'Raleigh Hills, Garden Home and West Slope are marketed as Southwest but are in unincorporated Washington County, with different taxing districts and school assignments.\n\nSylvan-Highlands is usually classified as Northwest, although it is just across Highway 26 from Southwest addresses.\n\nMultnomah is the neighborhood; Multnomah Village is its commercial strip. Listings use both names.\n\nSouth Portland is the current name for what older listings call Corbett–Terwilliger–Lair Hill.',
            },
            {
              title: 'Main differences.',
              text: "Elevation. Hill properties carry a view premium and a steeper commute; lower areas are priced lower and are easier to drive in winter.\n\nHousing stock. Southwest ranges from 1900s cottages through mid-century ranches to new high-rises, often within a mile.\n\nTree cover. Much of Southwest is wooded, which affects light, lot maintenance and survey results.\n\nAssessed value. In Oregon, assessed value does not reset on sale, so tax bills differ between near-identical neighboring homes. Check the county figure.",
            },
          ],
        },
        {
          type: 'steps',
          items: [
            {
              title: 'Elevation',
              text: 'Hill or flat determines view, price and winter driving, and narrows the twenty-five neighborhoods to a few.',
            },
            {
              title: 'Commute',
              text: 'Downtown, OHSU and the westside suburbs lie in three different directions from Southwest.',
            },
            {
              title: 'House',
              text: 'Housing stock varies more by area than by price tier. Touring two contrasting areas is useful before deciding.',
            },
          ],
        },
        {
          type: 'callout',
          title: 'Comparing the range',
          text: 'Multnomah Village and Council Crest are about ten minutes apart and represent opposite ends of what the quadrant offers.',
        },
      ],
    },
  ],
  disclaimer: 'Neighborhood boundaries and descriptions are general and vary by source.',
};

export default guide;
