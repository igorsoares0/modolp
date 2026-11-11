/**
 * Canvas-format reference content — the source for /sizes and /sizes/[slug].
 *
 * Scope rule: this file describes ONLY the three formats Modo actually ships
 * presets for (see landing-copy.md §Feature 3). Adding a Facebook or LinkedIn
 * page here would rank for a query the product can't serve — the visitor lands,
 * finds no preset, and leaves. Same discipline as the copy appendix: don't put
 * a claim on the page the editor can't honour.
 *
 * Platform numbers change. Re-check them against the platform's own docs before
 * each release — a sizes page that is wrong is worse than no sizes page.
 */

import type { ContentFaq, ContentNote } from "./types";

export type FormatSpec = {
  label: string;
  value: string;
};

export type CanvasFormat = {
  /** URL segment under /sizes. */
  slug: string;
  /** Short name, used in nav, tables and cross-links. */
  name: string;
  platform: string;
  /** H1. Written as the query a person actually types, not as a slogan. */
  heading: string;
  metaTitle: string;
  metaDescription: string;
  /** Lead paragraph — answers the query in the first sentence, above the fold. */
  intro: string;
  width: number;
  height: number;
  aspectRatio: string;
  /** Rendered as a definition table under the hero. */
  specs: FormatSpec[];
  /** Composition guidance: what to keep clear, where the platform draws UI. */
  composition: ContentNote[];
  mistakes: ContentNote[];
  faq: ContentFaq[];
};

export const FORMATS: readonly CanvasFormat[] = [
  {
    slug: "instagram-post",
    name: "Instagram Post",
    platform: "Instagram",
    heading: "Instagram post size",
    metaTitle: "Instagram Post Size (2026) — Dimensions, Ratio & Template",
    metaDescription:
      "An Instagram post is 1080×1080 px at a 1:1 ratio. Full spec, safe margins and the mistakes that soften your image — plus a pre-sized canvas you can open now.",
    intro:
      "A square Instagram post is 1080 × 1080 pixels, a 1:1 ratio. That is the width Instagram serves at full resolution on a phone, so it is the size to design at — anything smaller gets upscaled and goes soft, anything larger just gets compressed back down.",
    width: 1080,
    height: 1080,
    aspectRatio: "1:1",
    specs: [
      { label: "Dimensions", value: "1080 × 1080 px" },
      { label: "Aspect ratio", value: "1:1 (square)" },
      { label: "Minimum width", value: "600 px — below this the feed upscales it" },
      { label: "File type", value: "PNG for flat colour and text, JPEG for photos" },
      { label: "Colour space", value: "sRGB" },
    ],
    composition: [
      {
        title: "Keep the crop in mind on profile grids",
        body:
          "A square post shows in full in the feed, but the profile grid has historically cropped and re-cropped as Instagram changes its layout. Keep anything that must survive — a logo, a face, the punchline of the headline — away from the outer edge rather than bleeding it to the border.",
      },
      {
        title: "Leave a real margin",
        body:
          "Roughly 60–80 px of clear space on each side keeps text off the edge and stops the design reading as cramped when it renders at thumbnail size. Modo's square canvas is 1080 px, so that is about 6–7% per side.",
      },
      {
        title: "Design for the thumbnail first",
        body:
          "Most people meet your post at a fraction of its real size, in a scrolling feed. If the headline is unreadable at 150 px wide, the design is not finished — shrink the preview and check before you export.",
      },
    ],
    mistakes: [
      {
        title: "Exporting at screen resolution",
        body:
          "Screenshotting a design or exporting at 500 px and letting Instagram scale it up is the single most common cause of a blurry post. Export at 1080 px and let the platform scale down.",
      },
      {
        title: "Using JPEG for flat graphics",
        body:
          "JPEG compression puts visible fringing around hard edges — exactly what a headline on a solid background is made of. Use PNG when the design is type and flat colour; JPEG only when it is mostly photographic.",
      },
      {
        title: "Designing at a different ratio and cropping later",
        body:
          "Cropping a 16:9 image into a square almost always cuts the composition badly. Start on a square canvas so the layout is built for the frame it will live in.",
      },
    ],
    faq: [
      {
        q: "What size is an Instagram post in 2026?",
        a: "1080 × 1080 px for a square post, at a 1:1 ratio. Instagram also accepts portrait (4:5) and landscape (1.91:1) images, but square remains the safest default — it renders predictably in the feed and in the profile grid.",
      },
      {
        q: "Is 1080×1080 still the right size?",
        a: "Yes. 1080 px is the width Instagram serves at full quality on a phone. Designing larger does not increase the quality that gets displayed; designing smaller means the platform upscales your image and it goes soft.",
      },
      {
        q: "PNG or JPEG for an Instagram post?",
        a: "PNG if the design is type, flat colour or sharp edges — it stays crisp. JPEG if the design is mostly a photograph, where the file size saving is worth it and the compression is far less visible.",
      },
      {
        q: "Does Modo have a 1080×1080 preset?",
        a: "Yes. The square canvas is a built-in preset, and exports are full-resolution with no watermark.",
      },
    ],
  },
  {
    slug: "instagram-story",
    name: "Instagram Story",
    platform: "Instagram",
    heading: "Instagram Story size",
    metaTitle: "Instagram Story Size (2026) — 1080×1920 Dimensions & Safe Zone",
    metaDescription:
      "An Instagram Story is 1080×1920 px, 9:16. The full spec plus the safe zone that keeps your text out from under Instagram's own interface — and a ready canvas.",
    intro:
      "An Instagram Story is 1080 × 1920 pixels, a 9:16 ratio — a full phone screen. The dimensions are the easy part; the part that catches people out is that Instagram draws its own interface on top of your design, so a strip at the top and a strip at the bottom are not really yours to use.",
    width: 1080,
    height: 1920,
    aspectRatio: "9:16",
    specs: [
      { label: "Dimensions", value: "1080 × 1920 px" },
      { label: "Aspect ratio", value: "9:16 (full screen vertical)" },
      { label: "Safe zone", value: "Keep key content clear of the top and bottom ~250 px" },
      { label: "File type", value: "PNG for flat colour and text, JPEG for photos" },
      { label: "Colour space", value: "sRGB" },
    ],
    composition: [
      {
        title: "The top strip belongs to Instagram",
        body:
          "Your profile picture, your handle, the timestamp and the progress bars all sit across the top of a Story. Treat roughly the first 250 px as reserved — a headline placed up there ends up behind Instagram's own chrome.",
      },
      {
        title: "So does the bottom strip",
        body:
          "The reply bar, the share and more buttons, and the swipe-up affordance sit across the bottom. Keep the last ~250 px clear of anything that has to be read, and put your call to action above it rather than in it.",
      },
      {
        title: "That leaves a centre band",
        body:
          "In practice you are designing into the middle ~1420 px of the canvas. Background art can and should run edge to edge; it is the type and the logo that need to stay inside the band.",
      },
    ],
    mistakes: [
      {
        title: "Uploading a square post as a Story",
        body:
          "A 1:1 image in a 9:16 frame either gets letterboxed with bars or cropped. If a design needs to run in both places, build it twice — the compositions are genuinely different, not a resize apart.",
      },
      {
        title: "Centring text vertically without checking the safe zone",
        body:
          "Dead-centre is usually fine, but a two-line headline that starts high or a caption that sits low will collide with the interface. Preview it on a phone before it goes out.",
      },
      {
        title: "Putting the call to action at the very bottom",
        body:
          "That is exactly where the reply bar lands. Move it up a little — the design reads as deliberate and the instruction stays visible.",
      },
    ],
    faq: [
      {
        q: "What size is an Instagram Story?",
        a: "1080 × 1920 px, a 9:16 ratio. That matches a full phone screen, which is why Stories fill the display edge to edge.",
      },
      {
        q: "What is the Instagram Story safe zone?",
        a: "Roughly the top 250 px and the bottom 250 px, where Instagram draws your handle, the progress bars, the reply bar and the share buttons. Background art can run through those areas — text and logos should not.",
      },
      {
        q: "Can I use the same design for a post and a Story?",
        a: "Not as a straight resize. A 1:1 post cropped to 9:16 loses the composition. Build the Story on its own canvas so the layout suits the taller frame.",
      },
      {
        q: "Does Modo have a Story canvas?",
        a: "Yes — 1080 × 1920 is a built-in preset, with watermark-free export.",
      },
    ],
  },
  {
    slug: "pinterest-pin",
    name: "Pinterest Pin",
    platform: "Pinterest",
    heading: "Pinterest pin size",
    metaTitle: "Pinterest Pin Size (2026) — 1000×1500 Dimensions & 2:3 Ratio",
    metaDescription:
      "A standard Pinterest pin is 1000×1500 px at a 2:3 ratio. Why the ratio matters more than the pixels, what gets truncated, and a pre-sized canvas to start from.",
    intro:
      "A standard Pinterest pin is 1000 × 1500 pixels, a 2:3 ratio. On Pinterest the ratio matters more than the pixel count: the feed is a vertical column of fixed-width tiles, so a pin that is taller than 2:3 gets truncated and one that is shorter simply takes up less of the screen than its neighbours.",
    width: 1000,
    height: 1500,
    aspectRatio: "2:3",
    specs: [
      { label: "Dimensions", value: "1000 × 1500 px" },
      { label: "Aspect ratio", value: "2:3 (the standard pin)" },
      { label: "Longer pins", value: "Taller than 2:3 risks being cut off in the feed" },
      { label: "File type", value: "PNG for flat colour and text, JPEG for photos" },
      { label: "Colour space", value: "sRGB" },
    ],
    composition: [
      {
        title: "Text overlay is the norm here",
        body:
          "Pinterest behaves more like a search engine than a social feed, and pins are browsed for what they promise. A clear text overlay stating what the pin is tends to outperform a bare photograph.",
      },
      {
        title: "Put the promise in the top third",
        body:
          "The top of the tile is what a person sees while scrolling a dense grid. Lead with the claim and let the supporting detail sit lower.",
      },
      {
        title: "Design for a narrow column",
        body:
          "Pins are displayed far smaller than 1000 px wide. Large type, strong contrast and few elements survive that reduction; fine detail does not.",
      },
    ],
    mistakes: [
      {
        title: "Making the pin too tall",
        body:
          "Long infographic pins beyond 2:3 get truncated in the feed, and the cut usually lands somewhere unhelpful. Stay at 2:3 unless you have a specific reason not to.",
      },
      {
        title: "Reusing a square post",
        body:
          "A 1:1 image occupies noticeably less vertical space than the 2:3 pins around it, so it simply attracts less attention in the column.",
      },
      {
        title: "Small type",
        body:
          "Type sized for a 1000 px canvas viewed at full size is unreadable in the feed. Judge it at the size it will actually appear.",
      },
    ],
    faq: [
      {
        q: "What size is a Pinterest pin?",
        a: "The standard pin is 1000 × 1500 px, a 2:3 ratio. Pinterest scales the image to fit the column width, so the ratio is what really determines how the pin appears.",
      },
      {
        q: "Why 2:3 and not something taller?",
        a: "2:3 is the ratio the feed is built around. Taller pins risk being truncated, and the truncation is not something you control.",
      },
      {
        q: "Should a pin have text on it?",
        a: "Usually yes. Pinterest is browsed with intent, and a pin that states what it offers gives someone a reason to click. Keep it short and set it large enough to read in a narrow column.",
      },
      {
        q: "Does Modo have a Pinterest canvas?",
        a: "Yes — 1000 × 1500 is a preset on every plan, and export is full-resolution with no watermark.",
      },
    ],
  },
] as const;

/** Route params + sitemap are both driven off this, never off a second list. */
export const FORMAT_SLUGS = FORMATS.map((format) => format.slug);

export function getFormat(slug: string): CanvasFormat | undefined {
  return FORMATS.find((format) => format.slug === slug);
}
