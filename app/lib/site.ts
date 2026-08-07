// Single source of truth for the site's canonical origin.
// Used by metadataBase (layout), robots.ts, and sitemap.ts.
export const SITE_URL = "https://getmodo.pro";

/** The editor itself lives on its own subdomain — every CTA points there. */
export const APP_URL = "https://app.getmodo.pro";
export const SIGNUP_URL = `${APP_URL}/signup`;
export const LOGIN_URL = `${APP_URL}/login`;

/**
 * Pro price, kept in one place because it appears in the pricing card, the
 * Pro CTA label and the FAQ. If it changes in Paddle it changes here — and
 * in the app's upgrade modal, which hardcodes it too.
 */
export const PRO_PRICE = "$10";
export const PRO_PRICE_PERIOD = "/month";
