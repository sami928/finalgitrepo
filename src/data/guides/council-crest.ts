import type { Guide } from './types';

const guide: Guide = {
  slug: 'council-crest',
  number: '08',
  category: 'portland-neighborhoods',
  title: 'Council Crest',
  eyebrow: 'Southwest Portland · Neighborhood Guide',
  summary:
    "Portland's high ground and, for twenty-two years, its amusement park — a summit, a park, and a stretch of hillside streets in the Southwest Hills selling elevation and five Cascade peaks on a clear day.",
  lede:
    "Portland's high ground, and for twenty-two years its amusement park. Council Crest is not a neighborhood on the city's official map — it is a summit, a park and a stretch of hillside streets inside the Southwest Hills. What it sells is elevation: five Cascade peaks on a clear day, and a quiet the rest of the west side does not have.",
  hero: { slot: 'council-crest-view', caption: 'Council Crest Park · the summit and the 1956 Littman Fountain' },
  stats: [
    { value: '1,073 ft', label: 'The summit, one of the highest public points in Portland' },
    { value: '1907', label: 'An amusement park opened on the crest; it closed in 1929' },
    { value: '42.95 acres', label: 'Council Crest Park, city-owned since 1937' },
    { value: '$1.12M', label: 'Median sale, Southwest Hills, November 2025' },
  ],
  statsNote:
    "Redfin's median closed sale for Southwest Hills, November 2025, across 27 sales — the smallest area here with enough volume to mean anything. Redfin's separate Council Crest Park polygon rests on one sale and is not a market figure. Ask for a current, address-level analysis.",
  sections: [
    {
      id: 'history',
      heading: 'How it came to be here',
      blocks: [
        {
          type: 'p',
          text: 'The streetcar got here first. Service to the summit began on 20 September 1906, and the following year Portland Railway, Light & Power opened an amusement park on top of it — a scenic railway, a dance pavilion and an observation tower on the highest ground in the city. It ran for twenty-two years and closed in 1929.',
        },
        {
          type: 'p',
          text: 'The City of Portland bought the property in 1937 and has held it since. The wooden tower came down in 1941 and a steel water tower took its place; the streetcar made its last run on 9 August 1949. What the amusement park left behind is the road pattern — the winding hillside streets that carried visitors up are the ones buyers drive today.',
        },
        {
          type: 'timeline',
          items: [
            { year: '1941', text: 'The wooden observation tower is demolished and replaced by a steel water-storage tower, which still stands.' },
            { year: '1949', text: 'Streetcar service to the crest ends on 9 August, after forty-three years.' },
            { year: '1956', text: "Frederic Littman's bronze mother-and-child fountain is installed at the summit." },
            { year: '1979', text: 'The city acquires Marquam Nature Park, 204.87 acres on the slope below.' },
          ],
        },
      ],
    },
    {
      id: 'before-you-buy',
      heading: 'What to check before you buy here',
      blocks: [
        {
          type: 'list',
          items: [
            { title: 'Landslide hazard.', text: 'Much of this hillside is a mapped Potential Landslide Hazard Area, where City Code 33.632 requires reports from both an engineering geologist and a geotechnical engineer.' },
            { title: 'Environmental overlays.', text: 'Protection and conservation overlays from the 1992 Southwest Hills plan cover parts of many lots. Work inside one can trigger a discretionary review that adds months.' },
            { title: 'Trees.', text: 'A permit is required over twelve inches in diameter, six inside an overlay. The city began rewriting the tree code in 2026, so thresholds may move.' },
            { title: 'The street itself.', text: "Southwest has the city's highest share of unpaved streets. Check whether the frontage is improved, and whether a local improvement district is pending — owners share those costs." },
          ],
        },
      ],
    },
    {
      id: 'housing',
      kicker: 'Living Here · Housing, getting around, and daily life',
      heading: 'The housing',
      blocks: [
        {
          type: 'p',
          text: 'Hillside lots on winding streets, and no single era. The stock runs from Queen Anne survivors through half-timbered Tudors and Colonial Revivals to midcentury ranches and Prairie-influenced houses, with the median year built around 1951 and an average single-family house near 2,870 square feet. Those last two figures come from a listings aggregator rather than the county, so treat them as indicative.',
        },
        {
          type: 'p',
          text: 'What varies most is not the house but the ground under it. Grade, driveway access and retaining structures drive real cost here, and two lots on the same street can carry very different constraints depending on where the overlay lines fall. Pull the parcel layers before the inspection contingency runs out.',
        },
        { type: 'image', slot: 'hillside-street', caption: 'A winding hillside street under mature trees' },
      ],
    },
    {
      id: 'getting-around',
      heading: 'Getting around',
      blocks: [
        {
          type: 'p',
          text: "TriMet's line 51 is the neighborhood bus, running downtown by way of SW Vista, Patton and Talbot, with branches ending at Council Crest and at Hamilton & Dosch. Everything else is a car, and the drive down is over the Vista Bridge, built in 1926.",
        },
        {
          type: 'p',
          text: 'Road closures matter more here than in flatter parts of the city. SW Fairmount Boulevard has been shut at SW Sherwood Place since March 2026, with local access only between Talbot and Marquam Hill. On foot, the Marquam Trail runs from Willamette Park over the summit and links to the Wildwood Trail in Washington Park.',
        },
        { type: 'image', slot: 'vista-bridge', caption: 'The Vista Bridge, or SW Patton Road climbing the hill' },
      ],
    },
    {
      id: 'parks-daily-life',
      heading: 'Parks and daily life',
      blocks: [
        {
          type: 'p',
          text: 'Council Crest Park covers 42.95 acres at the top, with paved and unpaved paths, a plaza, picnic tables and an off-leash area. On a clear day the vista points show Mount Hood, St. Helens, Adams, Jefferson and Rainier. The park opens at 5am; the vehicle gate closes at 9pm from April to October and 7pm through the winter.',
        },
        { type: 'image', slot: 'marquam-trail', caption: 'Marquam Nature Park or the Marquam Trail under forest' },
        {
          type: 'p',
          text: 'Below it, Marquam Nature Park runs to 204.87 acres of forest with its main entrance on SW Marquam Street. The 4T Trail and the Marquam Trail both cross the summit, which makes this one of the few Portland addresses where a serious trail network starts at the end of the street. There is no commercial district — everything is a drive.',
        },
      ],
    },
  ],
};

export default guide;
