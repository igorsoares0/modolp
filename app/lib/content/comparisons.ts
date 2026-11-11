/**
 * Competitor comparison content — the source for /vs/[slug].
 *
 * Two rules, and they are not stylistic:
 *
 * 1. **Every Modo-side claim traces to designdocs/landing-copy.md.** If it isn't
 *    in the copy, it doesn't go on the page — and check the copy's appendix of
 *    dead claims before adding one.
 *
 * 2. **Every rival-side claim is stable, checkable and fair.** No invented
 *    prices, template counts or storage limits: those change, and a comparison
 *    page that misstates a competitor's terms is a liability, not a ranking.
 *    Where a number would be needed, the row is written qualitatively instead.
 *    `rivalFactsCheckedOn` below is the date a human last verified this column.
 *
 * The "when the rival is the better choice" section is deliberate, not modesty.
 * A comparison page that finds no case for the competitor reads as marketing and
 * converts like marketing.
 */

import type { ContentFaq, ContentNote } from "./types";

export type ComparisonRow = {
  dimension: string;
  modo: string;
  rival: string;
};

export type Comparison = {
  slug: string;
  /** Rival's product name, as they write it. */
  rival: string;
  heading: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  /** The honest one-paragraph framing, directly under the H1. */
  positioning: string;
  rows: ComparisonRow[];
  chooseRival: ContentNote[];
  chooseModo: ContentNote[];
  faq: ContentFaq[];
  /** ISO date a human last checked the rival column against the rival's docs. */
  rivalFactsCheckedOn: string;
  trademarkNote: string;
};

export const COMPARISONS: readonly Comparison[] = [
  {
    slug: "canva",
    rival: "Canva",
    heading: "Modo vs Canva",
    metaTitle: "Modo vs Canva — An Honest Comparison for Social Media Design",
    metaDescription:
      "Canva is a full design suite. Modo is a fast AI editor for social posts. Where each one wins, what Modo doesn't do, and how to pick — without the sales pitch.",
    intro:
      "These two tools are not really competing for the same job. Canva is a broad design suite that covers presentations, video, print and websites alongside social graphics. Modo does one thing: it turns a sentence into a finished social post you can edit and publish.",
    positioning:
      "If you already know what you want to make and you want a large toolbox to make it in, Canva is the more capable product and this page will not pretend otherwise. If the slow part of your week is staring at a blank canvas deciding what the post should even say, that is the specific problem Modo was built to remove.",
    rows: [
      {
        dimension: "What it's for",
        modo: "Social graphics — Instagram posts and Stories, Pinterest pins.",
        rival:
          "A broad design suite: social, presentations, documents, video, print and websites.",
      },
      {
        dimension: "How a design starts",
        modo:
          "You write a brief. Modo picks the template and fills in the copy, palette, fonts and layout.",
        rival:
          "You browse a large template library and edit from there; AI tools sit alongside the editor.",
      },
      {
        dimension: "Canvas sizes",
        modo: "Three presets: 1080×1080, 1080×1920 and 1000×1500.",
        rival: "Presets for a very wide range of formats and print media.",
      },
      {
        dimension: "Templates",
        modo: "62 across 46 categories, all included.",
        rival:
          "A far larger library, with a substantial part of it reserved for paid plans.",
      },
      {
        dimension: "Export watermarks",
        modo: "None.",
        rival:
          "Exports are clean, but premium templates and stock elements need a paid plan to use.",
      },
      {
        dimension: "Collaboration",
        modo: "Not available. Modo is a single-user editor today.",
        rival: "Team workspaces, shared brand assets and live collaboration.",
      },
      {
        dimension: "Surface area",
        modo: "One editor, deliberately small. Little to learn, little to ignore.",
        rival: "Deep and wide. More capability, and more of it to work through.",
      },
    ],
    chooseRival: [
      {
        title: "You need more than social posts",
        body:
          "Presentations, video, print, documents, websites — Modo does none of these and has no plan to. If your work spans media, a suite is the right shape of tool and Canva is a very good one.",
      },
      {
        title: "You work with other people",
        body:
          "Shared workspaces, brand kits and real-time collaboration are core to how teams use Canva. Modo has none of it: no collaboration, no shared brand assets, no team plan.",
      },
      {
        title: "You need an unusual canvas size",
        body:
          "Modo ships three presets. Anything outside Instagram and Pinterest — a YouTube thumbnail, an A4 flyer, a LinkedIn banner — is simply not a canvas Modo offers.",
      },
      {
        title: "You want the largest possible library",
        body:
          "62 templates is a curated set, not a catalogue. If your workflow is built on browsing thousands of options and stock photography, Modo will feel narrow.",
      },
    ],
    chooseModo: [
      {
        title: "The blank canvas is your bottleneck",
        body:
          "Modo's whole flow starts from a brief in plain language: it picks the template, writes the copy for every slot, sets the palette, pairs the fonts and sizes the blocks. You start from a complete draft and edit, rather than from nothing.",
      },
      {
        title: "You post to Instagram and Pinterest, and that's it",
        body:
          "Three canvases, pre-sized and correct. No hunting through a size picker, no cropping surprises. The narrowness is the feature.",
      },
      {
        title: "You'd rather pay once and keep your work local",
        body:
          "Modo is a one-time purchase with no subscription and no account. Your designs and images stay in your browser, the editor works offline, and exports are full-resolution PNG and JPEG with no watermark — plus the .modo project file if you want a backup.",
      },
      {
        title: "You want less tool, not more",
        body:
          "One editor with the controls people actually reach for. If you have opened a design suite and closed it again because you did not know where to start, that is the reaction Modo is built against.",
      },
    ],
    faq: [
      {
        q: "Is Modo a Canva alternative?",
        a: "For social posts, yes. For presentations, video, print or team collaboration, no — Modo does not do those, and Canva does. Think of Modo as a replacement for the specific job of getting a social graphic made quickly, not for the whole suite.",
      },
      {
        q: "Can I import my Canva designs into Modo?",
        a: "No. There is no Canva import. You can upload your own images and rebuild a design on a Modo canvas, but existing Canva projects do not transfer.",
      },
      {
        q: "Does Modo have as many templates as Canva?",
        a: "Nowhere near. Modo has 62 templates across 46 categories, against a library that is orders of magnitude larger. The trade is that Modo picks one for you from your brief instead of asking you to browse.",
      },
      {
        q: "Do Modo's free exports have a watermark?",
        a: "No. Exports are watermark-free, at full resolution, in PNG or JPEG.",
      },
      {
        q: "What does Modo cost?",
        a: "A one-time $79 for a lifetime license — no subscription, every template included, refundable within 14 days. AI generation runs on your own Anthropic API key, billed by Anthropic at typically about a cent per brief.",
      },
      {
        q: "Can I use both?",
        a: "Plenty of people will. Modo for the quick daily post, a suite for the work that needs a deck or a print file. Modo exports standard PNG and JPEG, so nothing you make here is locked in.",
      },
    ],
    rivalFactsCheckedOn: "2026-08-09",
    trademarkNote:
      "Canva is a trademark of its respective owner. Modo is not affiliated with, endorsed by or sponsored by Canva. This comparison reflects our reading of both products and is offered for information only — check their current plans and features before deciding.",
  },
] as const;

export function getComparison(slug: string): Comparison | undefined {
  return COMPARISONS.find((comparison) => comparison.slug === slug);
}
