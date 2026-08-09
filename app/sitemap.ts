import type { MetadataRoute } from "next";
import { SITE_URL } from "./lib/site";
import { FORMATS } from "./lib/content/formats";
import { COMPARISONS } from "./lib/content/comparisons";

const baseUrl = SITE_URL;

// Legal pages share this "last updated" date (see app/*/page.tsx).
const legalUpdated = new Date("2026-08-07");

// Reference content — bumped whenever the specs in lib/content/formats.ts are
// re-checked against the platforms, so the date means something.
const referenceUpdated = new Date("2026-08-09");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/sizes`,
      lastModified: referenceUpdated,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // Driven off the content module so a new format can never be added to the
    // site and forgotten in the sitemap.
    ...FORMATS.map((format) => ({
      url: `${baseUrl}/sizes/${format.slug}`,
      lastModified: referenceUpdated,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    // lastmod tracks the date the rival column was last verified, which is the
    // only date that means anything on a comparison page.
    ...COMPARISONS.map((comparison) => ({
      url: `${baseUrl}/vs/${comparison.slug}`,
      lastModified: new Date(comparison.rivalFactsCheckedOn),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    {
      url: `${baseUrl}/terms`,
      lastModified: legalUpdated,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: legalUpdated,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/refund`,
      lastModified: legalUpdated,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
