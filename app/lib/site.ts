// Single source of truth for the site's canonical origin.
// Used by metadataBase (layout), robots.ts, and sitemap.ts.
export const SITE_URL = "https://getmodo.pro";

/**
 * The editor lives on its own subdomain. Without a license it shows only the
 * activation screen — paste a key, or buy one there (Paddle checkout, and the
 * app activates itself when the payment lands). So every "Get Modo" CTA on
 * this site goes to the app root.
 */
export const APP_URL = "https://app.getmodo.pro";
export const GET_URL = APP_URL;
/** For people who already have a key (purchase email, AppSumo). */
export const ACTIVATE_URL = `${APP_URL}/activate`;

/**
 * The lifetime license. One place, because it appears in the pricing card,
 * the CTAs, the FAQ, the terms and the refund policy. If it changes in Paddle
 * it changes here — and in the app's NEXT_PUBLIC_LTD_PRICE_LABEL.
 */
export const LTD_PRICE = "$79";
export const REFUND_DAYS = 14;

/** Catalog numbers, kept in step with the editor (app/data/templates.ts). */
export const TEMPLATE_COUNT = 62;
export const CATEGORY_COUNT = 46;

/** The landing's format slugs → the editor's `?format=` values. */
const EDITOR_FORMAT: Record<string, string> = {
  "instagram-post": "post",
  "instagram-story": "story",
  "pinterest-pin": "pinterest",
};

/**
 * Deep link into the editor with a blank canvas of this format. A visitor with
 * a license lands on it directly; one without sees the activation screen
 * first, and the canvas opens right after activating.
 */
export function editorUrlForFormat(formatSlug: string): string {
  const format = EDITOR_FORMAT[formatSlug];
  return format ? `${APP_URL}/?new=1&format=${format}` : GET_URL;
}
