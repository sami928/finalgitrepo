/**
 * Full guide content. Import this only from the guide page (which is lazy
 * loaded) — everything else should use ./catalog so the guide text stays out
 * of the main bundle.
 */
import type { Guide } from './types';
import { catalog } from './catalog';

import relocatingToPortland from './relocating-to-portland';
import relocatingToOregon from './relocating-to-oregon';
import southwestPortlandAtAGlance from './southwest-portland-at-a-glance';
import gooseHollowMaplewoodGardenHomeWestSlope from './goose-hollow-maplewood-garden-home-west-slope';
import lakeOswegoBeavertonHighland from './lake-oswego-beaverton-highland';
import multnomahVillage from './multnomah-village';
import gooseHollow from './goose-hollow';
import councilCrest from './council-crest';
import bridlemile from './bridlemile';
import sylvanHighlands from './sylvan-highlands';
import forestHeights from './forest-heights';
import westSlope from './west-slope';
import raleighHills from './raleigh-hills';
import lakeOswego from './lake-oswego';
import westLinn from './west-linn';

export type { Guide } from './types';

export const guides: Guide[] = [
  relocatingToPortland,
  relocatingToOregon,
  southwestPortlandAtAGlance,
  gooseHollowMaplewoodGardenHomeWestSlope,
  lakeOswegoBeavertonHighland,
  multnomahVillage,
  gooseHollow,
  councilCrest,
  bridlemile,
  sylvanHighlands,
  forestHeights,
  westSlope,
  raleighHills,
  lakeOswego,
  westLinn,
];

export const getGuide = (slug: string) => guides.find((g) => g.slug === slug);

if (import.meta.env.DEV) {
  for (const g of guides) {
    const m = catalog.find((c) => c.slug === g.slug);
    if (!m || m.number !== g.number || m.category !== g.category || m.title !== g.title || m.summary !== g.summary) {
      console.warn(`[guides] catalog.ts entry for "${g.slug}" is missing or out of date`);
    }
  }
}
