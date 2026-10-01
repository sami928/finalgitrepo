import type { Guide } from './types';

const guide: Guide = {
  slug: 'council-crest',
  number: '08',
  category: 'portland-neighborhoods',
  title: 'Council Crest',
  eyebrow: 'Southwest Portland · Neighborhood Guide',
  summary:
    "A summit, park and hillside residential area in Portland's Southwest Hills, site of an amusement park for twenty-two years, with views of five Cascade peaks on a clear day.",
  lede:
    "Council Crest is a summit, a park and a stretch of hillside streets in Portland's Southwest Hills; it is not a neighborhood on the city's official map. It is among the highest ground in Portland, held an amusement park for twenty-two years, and on a clear day has views of five Cascade peaks.",
  hero: { slot: 'council-crest-view', caption: 'Council Crest Park · the summit and the 1956 Littman Fountain' },
  stats: [
    { value: '1,073 ft', label: 'Summit, one of the highest public points in Portland' },
    { value: '1907', label: 'Amusement park opened on the crest; closed 1929' },
    { value: '42.95 acres', label: 'Council Crest Park, city-owned since 1937' },
    { value: '$1.12M', label: 'Median sale, Southwest Hills, November 2025' },
  ],
  statsNote:
    "Redfin's median closed sale for Southwest Hills, November 2025, across 27 sales; this is the smallest area with enough volume to be meaningful. Redfin's separate Council Crest Park polygon rests on one sale and is not a market figure. Pricing a specific property requires a current, address-level analysis.",
  sections: [
    {
      id: 'history',
      heading: 'History',
      blocks: [
        {
          type: 'p',
          text: 'Streetcar service to the summit began on 20 September 1906. The following year Portland Railway, Light & Power opened an amusement park there, with a scenic railway, a dance pavilion and an observation tower on the highest ground in the city. It operated for twenty-two years and closed in 1929.',
        },
        {
          type: 'p',
          text: 'The City of Portland bought the property in 1937 and still owns it. The wooden tower was removed in 1941 and replaced by a steel water tower; the streetcar made its last run on 9 August 1949. The winding hillside streets built to carry visitors to the park remain the area’s road network.',
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
      heading: 'Before buying',
      blocks: [
        {
          type: 'list',
          items: [
            { title: 'Landslide hazard.', text: 'Much of this hillside is a mapped Potential Landslide Hazard Area, where City Code 33.632 requires reports from both an engineering geologist and a geotechnical engineer.' },
            { title: 'Environmental overlays.', text: 'Protection and conservation overlays from the 1992 Southwest Hills plan cover parts of many lots. Work inside one can trigger a discretionary review that adds months.' },
            { title: 'Trees.', text: 'A permit is required for trees over twelve inches in diameter, or six inches inside an overlay. The city began rewriting the tree code in 2026, so thresholds may change.' },
            { title: 'Street improvement.', text: "Southwest has the city's highest share of unpaved streets. Check whether the frontage is improved and whether a local improvement district is pending; owners share those costs." },
          ],
        },
      ],
    },
    {
      id: 'housing',
      kicker: 'Living Here · Housing, getting around, and daily life',
      heading: 'Housing',
      blocks: [
        {
          type: 'p',
          text: 'Houses sit on hillside lots along winding streets and span many periods: Queen Anne houses, half-timbered Tudors, Colonial Revivals, midcentury ranches and Prairie-influenced designs. The median year built is around 1951 and the average single-family house is near 2,870 square feet; both figures come from a listings aggregator rather than the county and are indicative only.',
        },
        {
          type: 'p',
          text: 'Site conditions vary more than the houses. Grade, driveway access and retaining structures can add significant cost, and lots on the same street can face different constraints depending on where overlay lines fall. Check the parcel map layers before the inspection contingency expires.',
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
          text: "TriMet's line 51 serves the area, running downtown via SW Vista, Patton and Talbot, with branches ending at Council Crest and at Hamilton & Dosch. Otherwise travel is by car; the route downtown crosses the Vista Bridge, built in 1926.",
        },
        {
          type: 'p',
          text: 'Road closures have a larger effect here than in flatter parts of the city. SW Fairmount Boulevard has been closed at SW Sherwood Place since March 2026, with local access only between Talbot and Marquam Hill. The Marquam Trail runs from Willamette Park over the summit and connects to the Wildwood Trail in Washington Park.',
        },
        { type: 'image', slot: 'vista-bridge', caption: 'The Vista Bridge, or SW Patton Road climbing the hill' },
      ],
    },
    {
      id: 'parks-daily-life',
      heading: 'Parks and amenities',
      blocks: [
        {
          type: 'p',
          text: 'Council Crest Park covers 42.95 acres at the summit, with paved and unpaved paths, a plaza, picnic tables and an off-leash area. On a clear day the viewpoints show Mount Hood, St. Helens, Adams, Jefferson and Rainier. The park opens at 5am; the vehicle gate closes at 9pm from April to October and at 7pm in winter.',
        },
        { type: 'image', slot: 'marquam-trail', caption: 'Marquam Nature Park or the Marquam Trail under forest' },
        {
          type: 'p',
          text: 'Below it, Marquam Nature Park covers 204.87 acres of forest, with its main entrance on SW Marquam Street. The 4T Trail and the Marquam Trail both cross the summit, giving nearby residential streets direct access to the trail network. There is no commercial district; shopping and services require a drive.',
        },
      ],
    },
  ],
};

export default guide;
