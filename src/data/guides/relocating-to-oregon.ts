import type { Guide } from './types';

const guide: Guide = {
  slug: 'relocating-to-oregon',
  number: '02',
  category: 'relocation',
  title: 'Relocating to Oregon',
  eyebrow: 'A Guide for Out-of-State Buyers',
  summary:
    "An overview of Oregon's regions, taxes, climate and housing costs, and the thirty-day deadlines that apply to new residents after arrival.",
  lede:
    "Oregon has several distinct regions. This guide covers the state's tax rules, regional attractions and weather.",
  hero: { slot: 'cover-oregon' },
  stats: [
    { value: '98,379', label: 'Square miles — 9th largest state' },
    { value: '~4.3M', label: 'Residents statewide' },
    { value: '363 mi', label: 'Of public coastline' },
    { value: '0%', label: 'State sales tax' },
  ],
  sections: [
    {
      id: 'why-oregon',
      kicker: '01 · Overview',
      heading: 'Overview',
      blocks: [
        {
          type: 'p',
          text: "Oregon is about the size of the United Kingdom and has fewer than four and a half million residents. Alpine terrain, high desert, vineyards, rainforest and 363 miles of coastline are all within a half-day's drive of one another.",
        },
        {
          type: 'p',
          text: 'The rainy, evergreen climate commonly associated with Oregon ends at the Cascade crest. East of it the state is high desert; Bend gets less annual rain than Phoenix gets in a wet year.',
        },
        {
          type: 'p',
          text: "This guide is for buyers deciding from out of state. It covers the regions, the combined effect of Oregon's three main taxes, and the requirements for the first thirty days.",
        },
        {
          type: 'cards',
          columns: 3,
          items: [
            { title: 'No sales tax', text: 'Oregon is one of only five states without a sales tax, which affects the cost of everything from a car to a sofa.' },
            { title: 'Public beaches', text: 'The 1967 Beach Bill made the entire coastline public up to the high-tide line. There are no private beaches.' },
            { title: 'Two climates', text: 'The Cascades divide the state into a wet west and a dry east.' },
          ],
        },
        {
          type: 'image',
          slot: 'oregon-overview',
          caption: 'Mount Hood from Trillium Lake — the Cascades, an hour from Portland',
        },
      ],
    },
    {
      id: 'the-regions',
      kicker: '02 · Orientation',
      heading: 'Regions',
      blocks: [
        {
          type: 'p',
          text: 'Oregon is usually divided into a handful of regions that differ considerably from one another. The Cascade Range runs north to south and separates the wet, densely populated western third from the dry, open two-thirds to the east.',
        },
        {
          type: 'p',
          text: "County boundaries are from the Bureau of Land Management, drawn on an Albers equal-area projection so each region's area is shown accurately. Regional definitions vary between sources; county lines do not.",
        },
        {
          type: 'list',
          items: [
            { title: 'Portland Metro.', text: 'The economic center, with walkable neighborhoods, the largest job market and an international airport.' },
            { title: 'Northwest Oregon & the Willamette Valley.', text: 'Salem, Eugene and Corvallis. Farmland, wine country, the major universities and the northern coast.' },
            { title: 'Columbia River Gorge.', text: 'Hood River and the waterfall corridor. A national scenic area an hour from Portland.' },
            { title: 'Central Oregon.', text: 'Bend and Redmond. Dry, sunny high desert, with skiing and rivers nearby.' },
            { title: 'Southern Oregon.', text: 'Medford, Ashland and Grants Pass. Warmer summers, the Rogue Valley and the southern coast.' },
            { title: 'Eastern Oregon.', text: 'Ranch country, with the lowest land prices in the state.' },
          ],
        },
        {
          type: 'p',
          text: 'The Oregon Coast (363 miles, publicly owned along its full length) is a landform rather than a region; it runs the length of the state through both the Northwest and Southern groupings.',
        },
        {
          type: 'steps',
          items: [
            { title: 'Climate first', text: 'The choice between wet and green or dry and sunny determines most other decisions, and it is the one most often misjudged from a distance.' },
            { title: 'Then access', text: 'Required proximity to a major airport and a full-service hospital narrows the options faster than any other single factor.' },
            { title: 'Then budget', text: 'The same budget buys very different homes across these regions. It is best considered last, once climate and access have shortened the list.' },
          ],
        },
      ],
    },
    {
      id: 'west-of-the-cascades',
      kicker: '03 · Regions',
      heading: 'West of the Cascades',
      blocks: [
        {
          type: 'cards',
          columns: 2,
          items: [
            {
              title: 'Portland Metro',
              tag: 'Northwest',
              image: 'portland-metro',
              text: "Roughly half the state's population and most of its jobs. A city of distinct neighborhoods rather than a single core, with light rail, a dense restaurant scene, and Forest Park inside the city limits.",
            },
            {
              title: 'Willamette Valley',
              tag: 'West Central',
              image: 'willamette-valley',
              text: "The state's main agricultural region and the end point of the Oregon Trail. Salem, Eugene and Corvallis are its main cities; Pinot Noir country runs along the western edge. Prices are lower than in Portland.",
            },
            {
              title: 'Oregon Coast',
              tag: 'West',
              image: 'oregon-coast',
              text: 'Public along its entire length by law since 1967, from Astoria at the mouth of the Columbia to Brookings near California. Cooler and much wetter than inland; Astoria averages over 70 inches of rain a year.',
            },
            {
              title: 'Columbia River Gorge',
              tag: 'North',
              image: 'columbia-gorge',
              text: 'A national scenic area where the Columbia cuts through the Cascades, with waterfalls at the west end and windsurfing at Hood River. Within commuting distance of Portland but rural in character.',
            },
          ],
        },
        {
          type: 'callout',
          title: 'Commuting',
          text: "Oregon's mountain passes have serious winter weather. The Cascade crest is a bigger barrier to commuting than the mileage suggests: a 90-minute summer drive can take twice as long in January.",
        },
      ],
    },
    {
      id: 'east-of-the-cascades',
      kicker: '04 · Regions',
      heading: 'East of the Cascades',
      blocks: [
        {
          type: 'cards',
          columns: 3,
          items: [
            {
              title: 'Central Oregon',
              tag: 'Bend & Redmond',
              image: 'central-oregon',
              text: "High desert at 3,600 feet, with skiing at Mount Bachelor, a river running through town, and roughly a quarter of Portland's annual rainfall. The fastest-growing and most expensive part of the state; Bend's median sale price is well above Portland's.",
            },
            {
              title: 'Southern Oregon',
              tag: 'Rogue Valley & Ashland',
              image: 'southern-oregon',
              text: "Warmer and drier than the Willamette Valley, with a long growing season and an established theater scene in Ashland. Medford is the commercial hub. Crater Lake is at the region's northern edge.",
            },
            {
              title: 'Eastern Oregon',
              tag: 'Ranch Country',
              image: 'eastern-oregon',
              text: "Two-thirds of the state's land and a small fraction of its people, including Pendleton, Baker City and the Wallowa Mountains. Land is far cheaper here than elsewhere in the state, but major medical centers and airports are distant.",
            },
          ],
        },
      ],
    },
    {
      id: 'tax-picture',
      kicker: '05 · Money',
      heading: 'Taxes',
      blocks: [
        {
          type: 'p',
          text: "Oregon has no sales tax; it relies on income and property taxes instead. Buyers should weigh a home's affordability against the tax obligations that come with it.",
        },
        {
          type: 'p',
          text: 'The table compares Oregon with states buyers commonly move from. Each of the three measures is on its own scale; they are comparable across states, not with one another.',
        },
        {
          type: 'table',
          columns: ['State', 'Combined sales tax', 'Top income tax rate', 'Property tax'],
          rows: [
            ['Oregon', 'None', '9.90%', '0.79%'],
            ['California', '8.99%', '13.30%', '0.69%'],
            ['Washington', '9.51%', 'None on wages', '0.74%'],
            ['Texas', '8.20%', 'None', '1.25%'],
            ['Arizona', '8.52%', '2.50% flat', '0.43%'],
          ],
          note:
            'Combined sales tax is state plus average local rate; top income tax rate is the highest marginal bracket; property tax is the effective rate on home value. Sales and income tax rates: Tax Foundation, 2026. Effective property tax rate: Construction Coverage analysis of U.S. Census Bureau 2024 American Community Survey data. Washington levies no tax on wage income but does tax certain capital gains. Rates change; confirm individual tax positions with a tax professional before moving.',
        },
        {
          type: 'callout',
          title: 'In practice',
          text: 'Buyers moving from Washington or Texas trade no income tax for a top rate near 10 percent, usually the larger cost. For buyers from California, Oregon is likely lower on income tax and about equal on property tax.',
        },
        {
          type: 'p',
          text: 'Not shown in the table:',
        },
        {
          type: 'list',
          items: [
            { title: 'Estate tax.', text: 'Oregon taxes estates above $1 million, one of the lowest thresholds in the country and far below the federal exemption. It does not pass automatically between spouses.' },
            { title: 'Local option levies.', text: 'Property tax varies by district, so two addresses a mile apart can have different rates.' },
            { title: 'Vehicle fees.', text: 'Registration fees are based partly on fuel economy, so efficient vehicles cost less to register.' },
          ],
        },
        {
          type: 'p',
          text: 'Groups that tend to pay less overall:',
        },
        {
          type: 'list',
          items: [
            "Retirees and others living on savings rather than wages, since Oregon's main tax is on earned income.",
            'Households moving from California, which usually see income tax fall and property tax stay roughly flat.',
            'Buyers making large purchases after arriving, because there is no sales tax.',
          ],
        },
        {
          type: 'p',
          text: 'Estate tax is a planning matter rather than a real estate one. Anyone it may affect should consult an estate attorney before establishing Oregon residency.',
        },
      ],
    },
    {
      id: 'climate',
      kicker: '06 · Climate',
      heading: 'Climate',
      blocks: [
        {
          type: 'p',
          text: "Oregon's rainy reputation applies west of the Cascades. Astoria, on the coast, gets close to six feet of rain a year; Bend, inland and east of the crest, gets under eleven inches.",
        },
        {
          type: 'table',
          columns: ['City', 'Region', 'Avg. annual precipitation (in)'],
          rows: [
            ['Astoria', 'Coast', '70.3'],
            ['Portland', 'Metro', '43.7'],
            ['Eugene', 'W. Valley', '40.8'],
            ['Salem', 'W. Valley', '40.1'],
            ['Medford', 'Rogue Valley', '18.4'],
            ['Pendleton', 'East', '12.8'],
            ['Bend', 'Central', '10.6'],
          ],
          note:
            '1991–2020 normals, sorted wettest to driest; Portland shown as the metro baseline. Source: NOAA National Centers for Environmental Information 1991–2020 normals, via Current Results. Medford is west of the Cascade crest but in the Siskiyou rain shadow, which is why it is dry despite being on the "wet" side of the state.',
        },
        {
          type: 'p',
          text: 'Sunny days per year:',
        },
        {
          type: 'list',
          items: [
            { title: 'Portland.', text: '68 clear days and 142 with some sun. Overcast weather is persistent rather than heavy.' },
            { title: 'Medford.', text: '117 clear days, with hot, dry summers and four distinct seasons.' },
            { title: 'Burns and Pendleton.', text: '120 and 101 clear days respectively. Eastern Oregon is the sunniest part of the state.' },
          ],
        },
        {
          type: 'p',
          text: 'Common misconceptions:',
        },
        {
          type: 'list',
          items: [
            "Portland's rain falls mostly as drizzle spread over many days rather than as downpours. By volume, Portland gets less rain than Miami or Houston.",
            'Summers west of the Cascades are reliably dry and mild; July and August are nearly rainless.',
            'Winter in Bend brings snow and sun rather than overcast skies. It is a different climate, not a milder version of the western one.',
          ],
        },
        {
          type: 'image',
          slot: 'oregon-climate',
          caption: 'A valley river running high — the wet season, November to April',
        },
      ],
    },
    {
      id: 'what-homes-cost',
      kicker: '07 · Housing',
      heading: 'Housing costs',
      blocks: [
        {
          type: 'p',
          text: 'Oregon has several distinct housing markets. The statewide median is near half a million dollars; Bend is clearly more expensive than Portland, and Eastern Oregon is much cheaper than both.',
        },
        {
          type: 'stats',
          items: [
            { value: '$507,600', label: 'Oregon statewide median' },
            { value: '$535,509', label: 'Portland metro median' },
            { value: '$698,538', label: 'Bend median' },
          ],
          note:
            'Statewide median via Houzeo; Portland and Bend medians via Redfin, three months ending August 2026. Housing figures change quickly; use a current, neighborhood-level analysis rather than a published number.',
        },
        {
          type: 'p',
          text: 'Factors affecting prices:',
        },
        {
          type: 'list',
          items: [
            { title: 'Land supply.', text: "Oregon's urban growth boundaries limit sprawl, which supports values inside the boundary and restricts building outside it." },
            { title: 'In-migration.', text: 'Central Oregon has drawn buyers from higher-cost markets for a decade, and prices reflect it.' },
            { title: 'Distance to a major airport and a full-service hospital.', text: "The two amenities that most consistently separate Oregon's price tiers." },
          ],
        },
        {
          type: 'p',
          text: 'Property tax assessment:',
        },
        {
          type: 'list',
          items: [
            'Oregon taxes an assessed value that is usually well below market value and, by law, rises no more than 3 percent a year.',
            'Unlike in California, assessed value does not reset when a home sells, so two near-identical neighboring homes can owe very different amounts.',
            'Do not estimate a tax bill from the purchase price. Obtain the actual assessed value from the county before making an offer.',
          ],
        },
        {
          type: 'callout',
          title: 'Comparing costs with another state',
          text: 'A like-for-like comparison should include all three taxes, insurance and commuting costs. Buyers from states without an income tax usually pay more on income and less on property.',
        },
        {
          type: 'image',
          slot: 'oregon-homes',
          caption: "A craftsman bungalow — the Northwest's signature early-century house",
        },
      ],
    },
    {
      id: 'the-clock-starts-on-arrival',
      kicker: '08 · Logistics',
      heading: 'Deadlines after arrival',
      blocks: [
        {
          type: 'p',
          text: "Two of Oregon's requirements for new residents are legal deadlines, both at thirty days. The order matters: in two parts of the state, a vehicle must pass an emissions test before it can be registered.",
        },
        {
          type: 'steps',
          items: [
            { title: 'Before moving', text: 'Check whether the new address is inside a DEQ testing boundary. This changes the registration sequence.' },
            { title: 'Day 0 — arrival', text: 'Residency is established, and the thirty-day clock on both DMV requirements starts.' },
            { title: 'Day 30 — two legal deadlines', text: '1. Oregon driver license. 2. Title and register every vehicle brought into the state. In the Portland metro and Medford areas, the DEQ test comes first.' },
            { title: 'Day 90 — settling in', text: 'Voter registration, doctors, schools and establishing domicile for tax purposes.' },
          ],
        },
        {
          type: 'callout',
          text: 'Voter registration closes 21 days before any election, a separate deadline from the two above.',
        },
        {
          type: 'p',
          text: "Deadlines per the State of Oregon and Oregon DEQ. Emissions testing applies only in the Portland metropolitan and Medford–Ashland areas; DEQ's boundary lookup confirms whether a specific address is included. Requirements change; verify with DMV and DEQ.",
        },
        {
          type: 'p',
          text: 'Registering a vehicle brought from another state requires:',
        },
        {
          type: 'list',
          items: [
            'The original out-of-state title, plus any lien releases or bills of sale from previous owners.',
            'A VIN inspection, required for out-of-state titles and done at the DMV appointment.',
            'An odometer disclosure, if the vehicle requires one.',
            'A passing DEQ test beforehand, if the address is inside a testing boundary.',
          ],
        },
        {
          type: 'p',
          text: 'Residency and fees:',
        },
        {
          type: 'list',
          items: [
            'Registering a vehicle requires Oregon residency or domicile; proof can include tax returns or military documents.',
            'Title, registration and plate fees are paid at the same visit; DMV publishes a fee calculator for passenger vehicles.',
            'DMV appointments around Portland fill up quickly. Booking before arrival helps meet the thirty-day deadline.',
          ],
        },
        {
          type: 'callout',
          title: 'Emissions test timing',
          text: 'In the Portland metro and Medford–Ashland areas, the emissions test must be completed before registration. Booking the DMV appointment before the test is the most common reason the thirty-day deadline is missed.',
        },
      ],
    },
    {
      id: 'getting-set-up',
      kicker: '09 · Practicalities',
      heading: 'Getting set up',
      blocks: [
        {
          type: 'list',
          items: [
            { title: 'Emissions testing.', text: 'Required in the Portland metro and Medford–Ashland areas. A vehicle must pass before it can be registered, and every two years after that.' },
            { title: 'Fuel service.', text: 'Oregon banned self-service fuel for decades. The rules have since loosened: drivers may pump their own fuel or be served by an attendant, and attendant service remains common across much of the state.' },
            { title: 'Vote by mail.', text: 'Oregon has run elections entirely by mail since 2000 and registers voters automatically through the DMV. Ballots are mailed to voters at home; registration closes 21 days before an election.' },
            { title: 'No sales tax.', text: 'The price on the tag is the price paid. Buyers relocating from high-tax states notice it most on vehicles, appliances and home furnishings.' },
            { title: 'Mountain passes.', text: 'For commutes or family visits across the Cascades, traction devices and occasional winter closures are a planning factor from November through March.' },
            { title: 'Establishing domicile.', text: "For people who keep property in another state, the date Oregon residency begins matters for that year's tax filing. Consult an accountant before the move." },
          ],
        },
        {
          type: 'image',
          slot: 'oregon-lifestyle',
          caption: 'Portland after dark from the West Hills',
        },
      ],
    },
  ],
  disclaimer:
    'Tax, legal and regulatory details in this guide are general and current as of publication; verify with the relevant agency or a qualified professional before acting on them. Information is deemed reliable but not guaranteed, and is subject to change.',
};

export default guide;
