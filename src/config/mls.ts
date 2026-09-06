/**
 * MLS API configuration for the RMLS (Regional Multiple Listing Service) search.
 *
 * ------------------------------------------------------------------
 * HOW TO PLUG IN YOUR RMLS API KEY
 * ------------------------------------------------------------------
 * This tool connects to a local MLS API (RMLS / Portland Metro) to search
 * active and sold listings. The connection requires an API key from your
 * MLS provider. Here's how to set it up:
 *
 * 1. OBTAIN YOUR API KEY
 *    - Contact RMLS (rmls.com) or your MLS provider and request API access.
 *    - They will issue you an API key (sometimes called a "client token"
 *      or "vendor key").
 *    - You'll also receive a base URL for the API endpoint, typically
 *      something like https://api.rmls.com/v1 or a RESO Web API endpoint
 *      like https://api.reso.org/RESO/OData
 *
 * 2. ENTER YOUR CREDENTIALS
 *    - Replace the empty string in `apiKey` below with your RMLS API key.
 *    - Replace the empty string in `baseUrl` below with the API endpoint URL.
 *    - If your API uses a Bearer token instead of a query/header key,
 *      set `authMode` to 'bearer'. If it uses an `apiKey` query parameter,
 *      leave `authMode` as 'header'.
 *
 *    Example:
 *      apiKey: 'rmls_live_abc123XYZ...',
 *      baseUrl: 'https://api.rmls.com/v1',
 *      authMode: 'header',
 *
 * 3. ENABLE THE PAGE
 *    - In src/config/site.ts, set `mlsSearchEnabled` to `true`.
 *    - The MLS Search link will appear in the navigation bar and footer.
 *    - While `mlsSearchEnabled` is `false`, the page exists but is hidden
 *      from visitors — visiting /mls-search directly will redirect home.
 *
 * 4. REBUILD & DEPLOY
 *    - After making changes, rebuild the project (npm run build) and
 *      deploy to your hosting platform. The credentials are embedded
 *      at build time, so a redeploy is required after changing them.
 *
 * 5. VERIFY
 *    - Visit the MLS Search page on your live site.
 *    - Try a basic search (e.g. zip code 97201, price range $500k–$750k).
 *    - Check the browser console — if the API key is wrong or the URL is
 *      incorrect, you'll see a network error in the console.
 *
 * SECURITY NOTE
 *    The MLS API key in this file gets bundled into the front-end JavaScript.
 *    This is the same pattern used for the Supabase publishable key — the key
 *    is public-facing and its access is controlled server-side by the MLS
 *    provider (rate limits, IP allowlisting, read-only listing data). Do NOT
 *    put a key with write access or unrestricted data access here. If your
 *    MLS provider requires a server-side proxy for security, see the
 *    "Proxy Mode" section below.
 *
 * ------------------------------------------------------------------
 * PROXY MODE (optional, recommended for production)
 * ------------------------------------------------------------------
 * If your MLS provider requires the API key to remain server-side (not
 * exposed in browser JavaScript), you can route requests through a proxy:
 *
 *    1. Set `useProxy` to `true` and `proxyUrl` to your proxy endpoint
 *       (e.g. https://homesbycatherine.io/api/mls-proxy).
 *    2. Set up a server-side function (e.g. a Supabase Edge Function or
 *       a Node.js route) that forwards requests to the RMLS API, injecting
 *       the secret API key on the server.
 *    3. The browser will call your proxy URL, which adds the key and
 *       forwards to the real MLS API.
 *
 *    The Edge Function would look something like:
 *
 *      // supabase/functions/mls-proxy/index.ts
 *      import { serve } from "https://deno.land/std/http/server.ts";
 *      serve(async (req) => {
 *        const url = `${RMLS_BASE_URL}${new URL(req.url).search}`;
 *        const res = await fetch(url, {
 *          headers: { 'Authorization': `Bearer ${Deno.env.get('RMLS_API_KEY')}` },
 *        });
 *        return new Response(res.body, { headers: corsHeaders });
 *      });
 *
 * ------------------------------------------------------------------
 */

export const mlsConfig = {
  /** RMLS API key — replace with your actual key. Leave empty to disable. */
  apiKey: '',

  /** RMLS API base URL — replace with your provider's endpoint. */
  baseUrl: '',

  /**
   * How the API key is sent:
   * - 'header': sent as `Authorization: Bearer <key>` (most common, RESO Web API)
   * - 'query': sent as `?apiKey=<key>` query parameter
   */
  authMode: 'header' as 'header' | 'query',

  /**
   * Proxy mode — set to true to route all MLS requests through a server-side
   * proxy that holds the secret key. See the PROXY MODE section above.
   */
  useProxy: false,

  /** Proxy endpoint URL (only used when useProxy is true). */
  proxyUrl: '',

  /** Default search area (Portland Metro ZIP codes). */
  defaultZipCodes: ['97201', '97202', '97209', '97210', '97212', '97214', '97215', '97217', '97219', '97220', '97221', '97229', '97230', '97231', '97232', '97233', '97236', '97239'],

  /** Price range defaults (in USD). */
  defaultPriceMin: 0,
  defaultPriceMax: 2_000_000,

  /** How many results to load per page. */
  pageSize: 24,
};

/** Whether the MLS API is ready to make live requests. */
export const isMlsConfigured = Boolean(
  (mlsConfig.useProxy && mlsConfig.proxyUrl) ||
  (!mlsConfig.useProxy && mlsConfig.apiKey && mlsConfig.baseUrl)
);

export type MlsConfig = typeof mlsConfig;
