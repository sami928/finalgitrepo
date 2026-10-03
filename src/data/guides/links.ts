/**
 * "Useful links" shown at the end of each guide: ratings (Niche), walkability
 * (Walk Score) and the local services someone moving to that area needs.
 *
 * Every URL here was checked when added (Sept 2026). Niche and Walk Score have
 * no page for some small areas, so those use the containing neighborhood and
 * say so in the note. Imported only by the guide page, so it stays out of the
 * main bundle.
 */
export type UsefulLink = { label: string; href: string; note?: string };
export type LinkGroup = { title: string; links: UsefulLink[] };

const niche = (path: string, label: string, note?: string): UsefulLink => ({
  label: `${label} on Niche`,
  href: `https://www.niche.com/${path}/`,
  note: note ?? 'Ratings, reviews, schools and crime',
});
const walk = (path: string, label: string, note?: string): UsefulLink => ({
  label: `${label} Walk Score`,
  href: `https://www.walkscore.com/${path}`,
  note: note ?? 'Walk, transit and bike scores',
});

// --- Shared links ----------------------------------------------------------
const L = {
  portlandMaps: { label: 'PortlandMaps', href: 'https://www.portlandmaps.com/', note: 'Property, zoning, school and hazard lookup by address' },
  pps: { label: 'Portland Public Schools', href: 'https://www.pps.net/' },
  bsd: { label: 'Beaverton School District', href: 'https://www.beaverton.k12.or.us/' },
  losd: { label: 'Lake Oswego School District', href: 'https://www.losdschools.org/' },
  wlwv: { label: 'West Linn-Wilsonville School District', href: 'https://www.wlwv.k12.or.us/' },
  odeReportCards: { label: 'Oregon school report cards', href: 'https://www.oregon.gov/ode/schools-and-districts/reportcards/Pages/default.aspx', note: 'Official results for every Oregon school' },
  nicheDistrictsMetro: { label: 'Best school districts in the Portland area', href: 'https://www.niche.com/k12/search/best-school-districts/m/portland-or-metro-area/', note: 'Niche rankings' },
  nicheDistrictsOregon: { label: 'Best school districts in Oregon', href: 'https://www.niche.com/k12/search/best-school-districts/s/oregon/', note: 'Niche rankings' },

  portland: { label: 'City of Portland', href: 'https://www.portland.gov/' },
  multco: { label: 'Multnomah County', href: 'https://multco.us/' },
  washco: { label: 'Washington County', href: 'https://www.washingtoncountyor.gov/', note: 'County services for unincorporated areas' },
  clackamas: { label: 'Clackamas County', href: 'https://www.clackamas.us/' },
  metro: { label: 'Oregon Metro', href: 'https://www.oregonmetro.gov/', note: 'Regional parks, garbage and recycling rules' },
  lakeOswego: { label: 'City of Lake Oswego', href: 'https://www.ci.oswego.or.us/' },
  westLinn: { label: 'City of West Linn', href: 'https://westlinnoregon.gov/' },
  beaverton: { label: 'City of Beaverton', href: 'https://www.beavertonoregon.gov/' },

  // Electricity & gas — links go straight to each company's start/stop/move page.
  pge: { label: 'Portland General Electric (PGE)', href: 'https://portlandgeneral.com/start-stop-move', note: 'Electricity: start, stop or move service' },
  pacificPower: { label: 'Pacific Power', href: 'https://www.pacificpower.net/my-account/start-stop-move.html', note: 'Electricity for parts of downtown and east Portland — PGE serves most other addresses' },
  nwNatural: { label: 'NW Natural', href: 'https://www.nwnatural.com/account/start-stop-transfer', note: 'Natural gas: start, stop or transfer service' },

  // Water (and sewer/stormwater where the same provider bills it).
  pdxWater: { label: 'Portland Water Bureau', href: 'https://www.portland.gov/water/customer-service/pay-your-utility-bill/start-stop-or-transfer-service', note: 'Water, sewer and stormwater inside Portland city limits' },
  westSlopeWater: { label: 'West Slope Water District', href: 'https://www.wswd.org/', note: 'Water for most of West Slope' },
  raleighWater: { label: 'Raleigh Water District', href: 'https://www.raleigh-h2o.com/', note: 'Water for much of Raleigh Hills (Bull Run supply)' },
  tvwd: { label: 'Tualatin Valley Water District', href: 'https://www.tvwd.org/', note: 'Water for parts of unincorporated Washington County and Beaverton' },
  loWater: { label: 'Lake Oswego utility billing', href: 'https://www.ci.oswego.or.us/utility-billing', note: 'City water, sewer and stormwater' },
  wlWater: { label: 'West Linn utility services', href: 'https://westlinnoregon.gov/finance/utility-services', note: 'City water, sewer and stormwater' },
  beavertonWater: { label: 'Beaverton utilities', href: 'https://www.beavertonoregon.gov/utilities', note: 'City water, sewer and stormwater (some addresses are on TVWD)' },
  cleanWater: { label: 'Clean Water Services', href: 'https://cleanwaterservices.org/', note: 'Sewer and stormwater in Washington County' },

  // Trash & recycling — franchised haulers are assigned by address.
  pdxGarbage: { label: 'Portland: who picks up my garbage?', href: 'https://www.portland.gov/bps/garbage-recycling/home-recycling/find-my-hauler', note: 'Look up your assigned garbage and recycling company' },
  washcoGarbage: { label: 'Washington County garbage & recycling', href: 'https://www.washingtoncountyor.gov/swr/garbage-and-recycling-collection-service', note: 'Find the hauler for unincorporated addresses' },
  beavertonGarbage: { label: "Beaverton: who's my hauler?", href: 'https://www.beavertonoregon.gov/758/Whos-My-Hauler', note: 'Five franchised haulers, assigned by area' },
  loGarbage: { label: 'Lake Oswego garbage & recycling', href: 'https://www.ci.oswego.or.us/recycle/garbage', note: 'Republic Services, under the city franchise' },
  wlGarbage: { label: 'West Linn garbage & recycling', href: 'https://westlinnoregon.gov/publicworks/garbage-and-recycling-west-linn', note: 'West Linn Refuse & Recycling, under the city franchise' },
  tvfr: { label: 'Tualatin Valley Fire & Rescue', href: 'https://www.tvfr.com/' },
  lakeCorp: { label: 'Lake Oswego Corporation', href: 'https://lakecorp.com/', note: 'Lake access, easements and fees' },

  trimet: { label: 'TriMet', href: 'https://trimet.org/', note: 'Buses, MAX light rail and streetcar' },
  biketown: { label: 'BIKETOWN', href: 'https://biketownpdx.com/', note: 'Portland bike share' },
  pdx: { label: 'Portland International Airport', href: 'https://www.flypdx.com/' },
  tripcheck: { label: 'ODOT TripCheck', href: 'https://www.tripcheck.com/', note: 'Road conditions, passes and cameras' },

  multcoLibrary: { label: 'Multnomah County Library', href: 'https://multcolib.org/' },
  wccls: { label: 'Washington County Cooperative Library Services', href: 'https://www.wccls.org/' },
  lincc: { label: 'Libraries in Clackamas County (LINCC)', href: 'https://www.lincc.org/' },
  loLibrary: { label: 'Lake Oswego Public Library', href: 'https://www.ci.oswego.or.us/library' },
  wlLibrary: { label: 'West Linn Public Library', href: 'https://westlinnoregon.gov/library' },
  beavertonLibrary: { label: 'Beaverton City Library', href: 'https://www.beavertonlibrary.org/' },
  pdxParks: { label: 'Portland Parks & Recreation', href: 'https://www.portland.gov/parks' },
  thprd: { label: 'Tualatin Hills Park & Recreation District', href: 'https://www.tualatinhillsparks.org/' },
  loParks: { label: 'Lake Oswego Parks & Recreation', href: 'https://www.ci.oswego.or.us/parksrec' },
  wlParks: { label: 'West Linn Parks & Recreation', href: 'https://westlinnoregon.gov/parksrec' },
  forestPark: { label: 'Forest Park Conservancy', href: 'https://forestparkconservancy.org/' },
  stateParks: { label: 'Oregon State Parks', href: 'https://stateparks.oregon.gov/' },

  dmv: { label: 'Oregon DMV', href: 'https://www.oregon.gov/odot/dmv/pages/index.aspx', note: 'Licenses, titles and registration' },
  deq: { label: 'DEQ vehicle emissions testing', href: 'https://www.oregon.gov/deq/vehicle-inspection/pages/default.aspx', note: 'Required before registering in the Portland metro' },
  voter: { label: 'Oregon voter registration', href: 'https://sos.oregon.gov/elections/pages/registration.aspx' },
  dor: { label: 'Oregon Department of Revenue', href: 'https://www.oregon.gov/dor/Pages/index.aspx', note: 'State income tax' },
  multcoTax: { label: 'Multnomah County property tax', href: 'https://multco.us/departments/assessment-recording-taxation' },
  artsTax: { label: 'Portland Arts Tax', href: 'https://www.portland.gov/revenue/arts-tax', note: 'Annual per-resident city tax' },
  publicAlerts: { label: 'PublicAlerts', href: 'https://www.publicalerts.org/', note: 'Sign up for Portland-area emergency alerts' },
  info211: { label: '211info', href: 'https://www.211info.org/', note: 'Community services and help lines' },
  hazvu: { label: 'Oregon HazVu hazard map', href: 'https://www.oregongeology.org/hazvu/', note: 'Earthquake, landslide, flood and wildfire hazards' },
  travelPortland: { label: 'Travel Portland', href: 'https://www.travelportland.com/', note: 'Events, food and things to do' },
} satisfies Record<string, UsefulLink>;

// --- Groups reused across neighborhoods ----------------------------------

/** Electricity & gas, water, and trash & recycling for one area. */
const utilities = ({
  power = [L.pge],
  water,
  trash,
}: {
  power?: UsefulLink[];
  water: UsefulLink[];
  trash: UsefulLink[];
}): LinkGroup[] => [
  { title: 'Electricity & gas', links: [...power, L.nwNatural] },
  { title: 'Water', links: water },
  { title: 'Trash & recycling', links: trash },
];

const gettingAround: LinkGroup = { title: 'Getting around', links: [L.trimet, L.tripcheck] };

const portlandServices: LinkGroup = {
  title: 'Local government & services',
  links: [L.portlandMaps, L.portland, L.multco, L.metro],
};
const portlandLeisure: LinkGroup = {
  title: 'Parks & libraries',
  links: [L.pdxParks, L.multcoLibrary],
};
const washcoServices: LinkGroup = {
  title: 'Local government & services',
  links: [L.washco, L.metro, L.tvfr],
};
const washcoLeisure: LinkGroup = {
  title: 'Parks & libraries',
  links: [L.thprd, L.wccls],
};

/** A neighborhood inside the City of Portland. */
const portlandNeighborhood = (
  ratings: UsefulLink[],
  {
    schools = [L.pps],
    power = [L.pge],
    trash = [L.pdxGarbage],
  }: { schools?: UsefulLink[]; power?: UsefulLink[]; trash?: UsefulLink[] } = {},
): LinkGroup[] => [
  { title: 'Ratings & walkability', links: ratings },
  { title: 'Schools', links: [...schools, L.odeReportCards] },
  ...utilities({ power, water: [L.pdxWater], trash }),
  gettingAround,
  portlandServices,
  portlandLeisure,
];

export const guideLinks: Record<string, LinkGroup[]> = {
  'relocating-to-portland': [
    {
      title: 'Ratings & walkability',
      links: [
        niche('places-to-live/portland-multnomah-or', 'Portland'),
        { label: 'Best neighborhoods in the Portland area', href: 'https://www.niche.com/places-to-live/search/best-neighborhoods/m/portland-or-metro-area/', note: 'Niche rankings' },
        walk('OR/Portland', 'Portland', 'Walk, transit and bike scores by neighborhood'),
      ],
    },
    { title: 'Schools', links: [L.pps, L.nicheDistrictsMetro, L.odeReportCards] },
    ...utilities({ power: [L.pge, L.pacificPower], water: [L.pdxWater], trash: [L.pdxGarbage] }),
    { title: 'Getting around', links: [L.trimet, L.biketown, L.pdx, L.tripcheck] },
    { title: 'Taxes & government', links: [L.portlandMaps, L.portland, L.multco, L.multcoTax, L.artsTax] },
    { title: 'Everyday life', links: [L.pdxParks, L.forestPark, L.multcoLibrary, L.travelPortland, L.publicAlerts] },
  ],

  'relocating-to-oregon': [
    {
      title: 'Ratings & walkability',
      links: [
        niche('places-to-live/s/oregon', 'Oregon', 'Compare cities and neighborhoods statewide'),
        L.nicheDistrictsOregon,
        walk('OR/Portland', 'Portland'),
      ],
    },
    { title: 'Your first 30 days', links: [L.dmv, L.deq, L.voter] },
    { title: 'Taxes & schools', links: [L.dor, L.odeReportCards] },
    { title: 'Safety & getting around', links: [L.hazvu, L.publicAlerts, L.tripcheck, L.info211] },
    { title: 'Outdoors', links: [L.stateParks, L.metro] },
  ],

  'southwest-portland-at-a-glance': portlandNeighborhood(
    [
      { label: 'Best neighborhoods in the Portland area', href: 'https://www.niche.com/places-to-live/search/best-neighborhoods/m/portland-or-metro-area/', note: 'Niche rankings' },
      niche('places-to-live/n/southwest-hills-portland-or', 'Southwest Hills'),
      walk('OR/Portland', 'Portland', 'Walk, transit and bike scores by neighborhood'),
    ],
    { schools: [L.pps, L.bsd, L.nicheDistrictsMetro] },
  ),

  'goose-hollow-maplewood-garden-home-west-slope': [
    {
      title: 'Ratings & walkability',
      links: [
        niche('places-to-live/n/goose-hollow-portland-or', 'Goose Hollow'),
        niche('places-to-live/n/maplewood-portland-or', 'Maplewood'),
        niche('places-to-live/west-slope-washington-or', 'West Slope'),
        walk('OR/Portland/Goose_Hollow', 'Goose Hollow'),
        walk('OR/Portland/Maplewood', 'Maplewood'),
        walk('OR/Garden_Home-Whitford', 'Garden Home'),
        walk('OR/West_Slope', 'West Slope'),
      ],
    },
    { title: 'Schools', links: [L.pps, L.bsd, L.odeReportCards] },
    ...utilities({
      power: [L.pge, L.pacificPower],
      water: [
        { ...L.pdxWater, note: 'Goose Hollow and Maplewood (inside Portland)' },
        { ...L.tvwd, note: 'Garden Home and other unincorporated Washington County addresses' },
        { ...L.westSlopeWater, note: 'West Slope' },
        L.cleanWater,
      ],
      trash: [
        { ...L.pdxGarbage, note: 'Goose Hollow and Maplewood' },
        { ...L.washcoGarbage, note: 'Garden Home and West Slope' },
      ],
    }),
    gettingAround,
    { title: 'Local government & services', links: [L.portlandMaps, L.portland, L.multco, L.washco] },
    { title: 'Parks & libraries', links: [L.pdxParks, L.thprd, L.multcoLibrary, L.wccls] },
  ],

  'lake-oswego-beaverton-highland': [
    {
      title: 'Ratings & walkability',
      links: [
        niche('places-to-live/lake-oswego-clackamas-or', 'Lake Oswego'),
        niche('places-to-live/beaverton-washington-or', 'Beaverton'),
        niche('places-to-live/n/highland-beaverton-or', 'Highland'),
        walk('OR/Lake_Oswego', 'Lake Oswego'),
        walk('OR/Beaverton', 'Beaverton'),
        walk('OR/Beaverton/Highland', 'Highland'),
      ],
    },
    { title: 'Schools', links: [L.losd, L.bsd, L.odeReportCards] },
    ...utilities({
      water: [L.loWater, { ...L.beavertonWater, note: 'Beaverton and Highland: city water, sewer and stormwater' }, L.tvwd],
      trash: [L.loGarbage, L.beavertonGarbage],
    }),
    gettingAround,
    { title: 'Local government & services', links: [L.lakeOswego, L.beaverton, L.clackamas, L.washco, L.lakeCorp] },
    { title: 'Parks & libraries', links: [L.loParks, L.thprd, L.loLibrary, L.beavertonLibrary] },
  ],

  'multnomah-village': portlandNeighborhood([
    niche('places-to-live/n/multnomah-portland-or', 'Multnomah'),
    walk('score/7688-sw-capitol-hwy-portland-or-97219', 'Multnomah Village', 'Scores for the village centre (Multnomah Arts Center)'),
  ]),

  // Goose Hollow borders the downtown core, where Pacific Power serves some addresses.
  'goose-hollow': portlandNeighborhood(
    [niche('places-to-live/n/goose-hollow-portland-or', 'Goose Hollow'), walk('OR/Portland/Goose_Hollow', 'Goose Hollow')],
    { power: [L.pge, L.pacificPower] },
  ),

  'council-crest': portlandNeighborhood([
    niche('places-to-live/n/southwest-hills-portland-or', 'Southwest Hills', 'Council Crest sits within Southwest Hills'),
    walk('OR/Portland/Southwest_Hills', 'Southwest Hills', 'Council Crest sits within Southwest Hills'),
  ]),

  // Split across the city line and two counties, so both hauler lookups apply.
  bridlemile: portlandNeighborhood(
    [niche('places-to-live/n/bridlemile-portland-or', 'Bridlemile'), walk('OR/Portland/Bridlemile', 'Bridlemile')],
    {
      schools: [L.pps, L.bsd],
      trash: [
        { ...L.pdxGarbage, note: 'Addresses inside Portland city limits' },
        { ...L.washcoGarbage, note: 'The pockets in Washington County' },
      ],
    },
  ),

  'sylvan-highlands': portlandNeighborhood([
    niche('places-to-live/n/sylvan-highlands-portland-or', 'Sylvan-Highlands'),
    walk('OR/Portland/Sylvan-Highlands', 'Sylvan-Highlands'),
  ]),

  'forest-heights': portlandNeighborhood([
    niche('places-to-live/n/northwest-heights-portland-or', 'Northwest Heights', 'Forest Heights sits within Northwest Heights'),
    walk('OR/Portland/Northwest_Heights', 'Northwest Heights', 'Forest Heights sits within Northwest Heights'),
    L.forestPark,
  ]),

  'west-slope': [
    {
      title: 'Ratings & walkability',
      links: [niche('places-to-live/west-slope-washington-or', 'West Slope'), walk('OR/West_Slope', 'West Slope')],
    },
    { title: 'Schools', links: [L.bsd, L.odeReportCards] },
    ...utilities({ water: [L.westSlopeWater, L.cleanWater], trash: [L.washcoGarbage] }),
    gettingAround,
    washcoServices,
    washcoLeisure,
  ],

  // The guide names four water districts here; Metzger has no website of its own.
  'raleigh-hills': [
    {
      title: 'Ratings & walkability',
      links: [niche('places-to-live/raleigh-hills-washington-or', 'Raleigh Hills'), walk('OR/Raleigh_Hills', 'Raleigh Hills')],
    },
    { title: 'Schools', links: [L.bsd, L.odeReportCards] },
    ...utilities({
      water: [
        L.raleighWater,
        { ...L.westSlopeWater, note: 'Northern edge of the plan area' },
        { ...L.tvwd, note: 'Parts of the plan area; Metzger Water District serves others' },
        L.cleanWater,
      ],
      trash: [L.washcoGarbage],
    }),
    gettingAround,
    washcoServices,
    washcoLeisure,
  ],

  'lake-oswego': [
    {
      title: 'Ratings & walkability',
      links: [niche('places-to-live/lake-oswego-clackamas-or', 'Lake Oswego'), walk('OR/Lake_Oswego', 'Lake Oswego')],
    },
    { title: 'Schools', links: [L.losd, L.odeReportCards] },
    ...utilities({ water: [L.loWater], trash: [L.loGarbage] }),
    gettingAround,
    { title: 'Local government & services', links: [L.lakeOswego, L.lakeCorp, L.clackamas, L.metro] },
    { title: 'Parks & libraries', links: [L.loParks, L.loLibrary, L.lincc] },
  ],

  'west-linn': [
    {
      title: 'Ratings & walkability',
      links: [niche('places-to-live/west-linn-clackamas-or', 'West Linn'), walk('OR/West_Linn', 'West Linn')],
    },
    { title: 'Schools', links: [L.wlwv, L.odeReportCards] },
    ...utilities({ water: [L.wlWater], trash: [L.wlGarbage] }),
    gettingAround,
    { title: 'Local government & services', links: [L.westLinn, L.clackamas, L.metro] },
    { title: 'Parks & libraries', links: [L.wlParks, L.wlLibrary, L.lincc] },
  ],
};
