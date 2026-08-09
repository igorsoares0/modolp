import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ContentPage,
  FaqJsonLd,
  FaqList,
  NoteList,
  RatioPreview,
  Section,
} from "../../components/content/content-page";
import { Eyebrow, PrimaryButton } from "../../components/landing/primitives";
import { FORMATS, getFormat } from "../../lib/content/formats";
import { signupUrlForFormat } from "../../lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

/** The three real formats are the whole set — anything else is a 404. */
export const dynamicParams = false;

export function generateStaticParams() {
  return FORMATS.map((format) => ({ slug: format.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const format = getFormat(slug);

  if (!format) return {};

  const path = `/sizes/${format.slug}`;

  return {
    title: format.metaTitle,
    description: format.metaDescription,
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      siteName: "Modo",
      url: path,
      title: format.metaTitle,
      description: format.metaDescription,
    },
    twitter: {
      card: "summary_large_image",
      title: format.metaTitle,
      description: format.metaDescription,
    },
  };
}

export default async function FormatSizePage({ params }: Props) {
  const { slug } = await params;
  const format = getFormat(slug);

  // dynamicParams=false already 404s unknown slugs; this keeps the type honest.
  if (!format) notFound();

  const others = FORMATS.filter((entry) => entry.slug !== format.slug);

  return (
    <ContentPage
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Sizes", href: "/sizes" },
        { label: format.name, href: `/sizes/${format.slug}` },
      ]}
    >
      <FaqJsonLd items={format.faq} />

      <Eyebrow>{format.platform}</Eyebrow>
      <h1 className="type-display-lg mt-5 font-semibold text-text-primary">
        {format.heading}
      </h1>
      <p className="mt-5 text-[17px] leading-[1.6] text-text-secondary [text-wrap:pretty]">
        {format.intro}
      </p>

      {/* Answer box — the spec a visitor came for, before anything else. */}
      <div className="mt-10 grid gap-5 sm:grid-cols-[1fr_auto] sm:items-center">
        <dl className="divide-y divide-border-subtle overflow-hidden rounded-lg border border-border-default bg-surface-2">
          {format.specs.map((spec) => (
            <div
              key={spec.label}
              className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 px-5 py-3.5"
            >
              <dt className="text-[13px] uppercase tracking-[0.06em] text-text-tertiary">
                {spec.label}
              </dt>
              <dd className="font-mono text-[13.5px] tabular-nums text-text-primary">
                {spec.value}
              </dd>
            </div>
          ))}
        </dl>
        <RatioPreview
          width={format.width}
          height={format.height}
          label={`${format.width} × ${format.height}`}
          className="sm:w-56"
        />
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-4">
        <PrimaryButton href={signupUrlForFormat(format.slug)} target="_blank">
          Open a {format.width} × {format.height} canvas
        </PrimaryButton>
        <span className="text-[13px] text-text-ghost">
          Free plan, no watermark on export.
        </span>
      </div>

      <Section title="Composition">
        <NoteList notes={format.composition} />
      </Section>

      <Section title="Common mistakes">
        <NoteList notes={format.mistakes} />
      </Section>

      <Section title="Frequently asked">
        <FaqList items={format.faq} />
      </Section>

      <Section title="Other formats">
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {others.map((entry) => (
            <li key={entry.slug}>
              <Link
                href={`/sizes/${entry.slug}`}
                className="block rounded-lg border border-border-default bg-surface-2 px-5 py-4 transition-colors duration-150 ease-standard hover:border-border-strong hover:bg-surface-4"
              >
                <span className="block text-[15px] font-medium text-text-primary">
                  {entry.name}
                </span>
                <span className="mt-1 block font-mono text-[12.5px] tabular-nums text-text-tertiary">
                  {entry.width} × {entry.height} · {entry.aspectRatio}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </ContentPage>
  );
}
