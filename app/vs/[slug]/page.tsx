import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  ContentPage,
  FaqJsonLd,
  FaqList,
  NoteList,
  Section,
} from "../../components/content/content-page";
import { Eyebrow, PrimaryButton } from "../../components/landing/primitives";
import { COMPARISONS, getComparison } from "../../lib/content/comparisons";
import { SIGNUP_URL } from "../../lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return COMPARISONS.map((comparison) => ({ slug: comparison.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const comparison = getComparison(slug);

  if (!comparison) return {};

  const path = `/vs/${comparison.slug}`;

  return {
    title: comparison.metaTitle,
    description: comparison.metaDescription,
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      siteName: "Modo",
      url: path,
      title: comparison.metaTitle,
      description: comparison.metaDescription,
    },
    twitter: {
      card: "summary_large_image",
      title: comparison.metaTitle,
      description: comparison.metaDescription,
    },
  };
}

export default async function ComparisonPage({ params }: Props) {
  const { slug } = await params;
  const comparison = getComparison(slug);

  if (!comparison) notFound();

  return (
    <ContentPage
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: `vs ${comparison.rival}`, href: `/vs/${comparison.slug}` },
      ]}
    >
      <FaqJsonLd items={comparison.faq} />

      <Eyebrow>Comparison</Eyebrow>
      <h1 className="type-display-lg mt-5 font-semibold text-text-primary">
        {comparison.heading}
      </h1>
      <p className="mt-5 text-[17px] leading-[1.6] text-text-secondary [text-wrap:pretty]">
        {comparison.intro}
      </p>
      <p className="mt-4 max-w-[42rem] text-[15px] leading-[1.7] text-text-secondary [text-wrap:pretty]">
        {comparison.positioning}
      </p>

      <Section title="Side by side">
        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[38rem] border-collapse overflow-hidden rounded-lg border border-border-default bg-surface-2 text-left align-top">
            <thead>
              <tr className="border-b border-border-default">
                <th className="w-[22%] px-5 py-3 text-[12px] uppercase tracking-[0.06em] text-text-tertiary">
                  &nbsp;
                </th>
                <th className="px-5 py-3 text-[12px] uppercase tracking-[0.06em] text-accent">
                  Modo
                </th>
                <th className="px-5 py-3 text-[12px] uppercase tracking-[0.06em] text-text-tertiary">
                  {comparison.rival}
                </th>
              </tr>
            </thead>
            <tbody>
              {comparison.rows.map((row) => (
                <tr
                  key={row.dimension}
                  className="border-b border-border-subtle align-top last:border-b-0"
                >
                  <th
                    scope="row"
                    className="px-5 py-4 text-left text-[13.5px] font-medium text-text-primary"
                  >
                    {row.dimension}
                  </th>
                  <td className="px-5 py-4 text-[13.5px] leading-[1.6] text-text-secondary">
                    {row.modo}
                  </td>
                  <td className="px-5 py-4 text-[13.5px] leading-[1.6] text-text-secondary">
                    {row.rival}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section title={`When ${comparison.rival} is the better choice`}>
        <NoteList notes={comparison.chooseRival} />
      </Section>

      <Section title="When Modo is the better choice">
        <NoteList notes={comparison.chooseModo} />
      </Section>

      <section className="mt-16 rounded-xl border border-border-default bg-surface-1 px-6 py-8 text-center">
        <h2 className="type-display-md font-semibold text-text-primary">
          Try it on your next post.
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-[14.5px] leading-[1.65] text-text-secondary [text-wrap:pretty]">
          Describe what you need in one line and see what comes back. Free plan,
          no credit card, and exports have no watermark on any plan.
        </p>
        <PrimaryButton href={SIGNUP_URL} target="_blank" className="mt-6">
          Start free
        </PrimaryButton>
      </section>

      <Section title="Frequently asked">
        <FaqList items={comparison.faq} />
      </Section>

      <p className="mt-12 border-t border-border-subtle pt-6 text-[12.5px] leading-[1.6] text-text-ghost">
        {comparison.trademarkNote}
      </p>
    </ContentPage>
  );
}
