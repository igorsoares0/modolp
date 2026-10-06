import type { Metadata } from "next";
import Link from "next/link";
import { ContentPage } from "../components/content/content-page";
import { Eyebrow, PrimaryButton } from "../components/landing/primitives";
import { FORMATS } from "../lib/content/formats";
import { SIGNUP_URL } from "../lib/site";

export const metadata: Metadata = {
  title: "Social Media Image Sizes (2026) — Instagram, Stories & Pinterest",
  description:
    "The dimensions that matter: Instagram posts (1080×1080), Stories (1080×1920) and Pinterest pins (1000×1500). Ratios, safe zones and a pre-sized canvas for each.",
  alternates: { canonical: "/sizes" },
  openGraph: {
    type: "article",
    siteName: "Modo",
    url: "/sizes",
    title: "Social Media Image Sizes (2026)",
    description:
      "Instagram posts, Stories and Pinterest pins — exact dimensions, ratios and safe zones, with a pre-sized canvas for each.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Social Media Image Sizes (2026)",
    description:
      "Instagram posts, Stories and Pinterest pins — exact dimensions, ratios and safe zones.",
  },
};

export default function SizesHubPage() {
  return (
    <ContentPage breadcrumbs={[{ label: "Home", href: "/" }]}>
      <Eyebrow>Reference</Eyebrow>
      <h1 className="type-display-lg mt-5 font-semibold text-text-primary">
        Social media image sizes
      </h1>
      <p className="mt-5 text-[17px] leading-[1.6] text-text-secondary [text-wrap:pretty]">
        Three formats cover almost everything people post: the square Instagram
        post, the full-screen Story and the vertical Pinterest pin. Below is the
        exact spec for each, what the platform does to your image once you
        upload it, and a canvas already set to the right size.
      </p>

      <div className="mt-10 overflow-x-auto">
        <table className="w-full min-w-[30rem] border-collapse overflow-hidden rounded-lg border border-border-default bg-surface-2 text-left">
          <thead>
            <tr className="border-b border-border-default">
              <th className="px-5 py-3 text-[12px] uppercase tracking-[0.06em] text-text-tertiary">
                Format
              </th>
              <th className="px-5 py-3 text-[12px] uppercase tracking-[0.06em] text-text-tertiary">
                Size
              </th>
              <th className="px-5 py-3 text-[12px] uppercase tracking-[0.06em] text-text-tertiary">
                Ratio
              </th>
            </tr>
          </thead>
          <tbody>
            {FORMATS.map((format) => (
              <tr
                key={format.slug}
                className="border-b border-border-subtle last:border-b-0"
              >
                <td className="px-5 py-3.5">
                  <Link
                    href={`/sizes/${format.slug}`}
                    className="text-[14.5px] font-semibold text-text-primary underline decoration-border-default underline-offset-[3px] transition-colors duration-150 ease-standard hover:decoration-text-primary"
                  >
                    {format.name}
                  </Link>
                </td>
                <td className="px-5 py-3.5 font-mono text-[13.5px] tabular-nums text-text-primary">
                  {format.width} × {format.height}
                </td>
                <td className="px-5 py-3.5 font-mono text-[13.5px] tabular-nums text-text-secondary">
                  {format.aspectRatio}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-12 space-y-4">
        {FORMATS.map((format) => (
          <Link
            key={format.slug}
            href={`/sizes/${format.slug}`}
            className="block rounded-lg border border-border-default bg-surface-2 px-6 py-5 transition-colors duration-150 ease-standard hover:border-border-strong hover:bg-surface-4"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <h2 className="text-[16px] font-medium text-text-primary">
                {format.heading}
              </h2>
              <span className="font-mono text-[12.5px] tabular-nums text-text-tertiary">
                {format.width} × {format.height} · {format.aspectRatio}
              </span>
            </div>
            <p className="mt-2.5 max-w-[42rem] text-[14px] leading-[1.65] text-text-secondary [text-wrap:pretty]">
              {format.intro}
            </p>
          </Link>
        ))}
      </div>

      <section className="mt-16 rounded-xl border border-border-default bg-surface-1 px-6 py-8 text-center">
        <h2 className="type-display-md font-semibold text-text-primary">
          Every format, already sized.
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-[14.5px] leading-[1.65] text-text-secondary [text-wrap:pretty]">
          Pick the canvas, describe the post, and Modo builds the design — copy,
          palette, type and layout. Export at full resolution with no watermark,
          including on the free plan.
        </p>
        <PrimaryButton href={SIGNUP_URL} target="_blank" className="mt-6">
          Start free
        </PrimaryButton>
      </section>
    </ContentPage>
  );
}
