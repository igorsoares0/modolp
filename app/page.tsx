import Link from "next/link";
import { Navbar } from "./components/landing/navbar";
import { Faq } from "./components/landing/faq";
import { Reveal } from "./components/landing/reveal";
import { Collage } from "./components/landing/collage";
import { BriefBar } from "./components/landing/brief-bar";
import {
  Kicker,
  Wordmark,
  PrimaryButton,
  SecondaryButton,
} from "./components/landing/primitives";
import {
  TemplatesIcon,
  TextIcon,
  DownloadIcon,
} from "./components/landing/icons";
import { LOGIN_URL, PRO_PRICE, SIGNUP_URL } from "./lib/site";

type Step = {
  code: string;
  title: string;
  body: string;
  icon: (props: React.SVGProps<SVGSVGElement>) => React.ReactElement;
  /** Tile colour: the editor's tool colours, butter for the AI step. */
  tile: string;
};

const STEPS: Step[] = [
  {
    code: "01",
    title: "Pick a format",
    body: "Instagram post, story or Pinterest pin. Start from one of 52 templates or a blank page.",
    icon: TemplatesIcon,
    tile: "bg-tool-templates text-tool-fg",
  },
  {
    code: "02",
    title: "Brief or edit",
    body: "Describe the post and AI drafts it, or adjust every layer yourself: type, color, overlays.",
    icon: TextIcon,
    tile: "bg-ai text-ai-fg",
  },
  {
    code: "03",
    title: "Export",
    body: "PNG or JPG at the exact size each platform expects. Your projects stay saved for later.",
    icon: DownloadIcon,
    tile: "bg-tool-uploads text-tool-fg",
  },
];

type Feature = {
  title: string;
  body: string;
  /** Contextual link out to a reference page. */
  link?: { href: string; label: string };
};

/** AI leads the grid — it's the reason the product changed. */
const FEATURES: Feature[] = [
  {
    title: "Write a line. Get a design.",
    body: "Describe the post and Modo builds it — template, copy, palette, fonts, layout, background. Fully editable the moment it lands on the canvas.",
  },
  {
    title: "52 templates, 45 categories.",
    body: "Wellness, Promo, Story, Pinterest, Podcast, Event, Business, Fashion, Food, Fitness, Travel, Tech, Wedding, Real Estate and more. Search them, preview them, duplicate them, make them yours.",
  },
  {
    title: "Every format, pixel-perfect.",
    body: "Instagram Posts (1080×1080), Instagram Stories (1080×1920), Pinterest (1000×1500) — pre-sized and ready. No manual math, no cropping surprises.",
    // Contextual link into the /sizes family — worth more for crawl than the
    // footer link, since this is the page with the most authority.
    link: { href: "/sizes", label: "See every size →" },
  },
  {
    title: "Type like a designer.",
    body: "28 curated fonts plus full controls: size, color, alignment, letter spacing, line height, bold, italic, underline, uppercase and text shadow. Your words, your style.",
  },
  {
    title: "Upload, edit, done.",
    body: "Resize, rotate, crop, flip, adjust opacity, add border radius and shadow. Uploads land in your account, so the same image is there on your laptop and your desktop.",
  },
  {
    title: "Make it pop.",
    body: "Rectangles, ellipses, triangles and lines with full fill and stroke control. Stickers and decorative graphics, drag-and-drop. Gradients, light leaks, grain, blur and noise for that editorial finish.",
  },
  {
    title: "Total control over every element.",
    body: "Lock, hide, duplicate, reorder — full layer management. Unlimited undo and redo, so you can experiment without fear.",
  },
  {
    title: "Start on your laptop. Finish on your desktop.",
    body: "Your projects and uploads live in your account and follow you to any browser you sign in from. Nothing to export, nothing to email yourself. And if your connection drops mid-edit, Modo keeps working and syncs the moment you're back.",
  },
  {
    title: "High-res exports. No watermark. Ever.",
    body: "PNG or JPEG with quality control and transparent background support — clean output on every plan, including Free. You can also export the project file itself (.modo) to keep a backup or hand it to someone else.",
  },
];

/** Spec-sheet rows. 6 of the 52 templates are Pro-only, so Free sees 46. */
const PLANS = [
  {
    name: "Free",
    price: "$0",
    rows: [
      { k: "Storage", v: "250 MB" },
      { k: "AI briefs", v: "5 / MO" },
      { k: "Templates", v: "46 OF 52" },
    ],
    pro: false,
  },
  {
    name: "Pro",
    price: `${PRO_PRICE} / MO`,
    rows: [
      { k: "Storage", v: "1 GB" },
      { k: "AI briefs", v: "100 / MO" },
      { k: "Templates", v: "ALL 52" },
    ],
    pro: true,
  },
];

const footerLink =
  "text-[13.5px] text-text-secondary transition-colors duration-150 ease-standard hover:text-text-primary";

/** The page's one section skeleton: kicker + big headline left, content right. */
function SplitSection({
  id,
  kicker,
  title,
  aside,
  children,
}: {
  id?: string;
  kicker: string;
  title: React.ReactNode;
  aside?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="grid scroll-mt-14 gap-10 border-b border-border-default px-4 py-14 sm:px-6 md:px-14 lg:grid-cols-[360px_minmax(0,1fr)] lg:gap-12"
    >
      <Reveal className="flex flex-col gap-3.5">
        <Kicker>{kicker}</Kicker>
        <h2 className="type-display-lg">{title}</h2>
        {aside}
      </Reveal>
      <Reveal delay={1}>{children}</Reveal>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />

      {/* The mock is a 1440px sheet; past that it sits centred between rules. */}
      <div
        id="top"
        className="mx-auto flex w-full max-w-[1440px] flex-col overflow-x-hidden min-[1441px]:border-x min-[1441px]:border-border-default"
      >
        <main className="flex flex-col">
          {/* ── Hero ─────────────────────────────────────────────────── */}
          <section className="grid border-b border-border-default lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
            <div className="flex flex-col gap-7 border-b border-border-default px-4 pb-14 pt-14 sm:px-6 md:px-14 lg:border-b-0 lg:border-r lg:pt-[72px]">
              <Kicker>Nº 001 — A design tool for social posts</Kicker>
              <h1 className="type-display-xl">
                Posts that look made, not generated
                <span className="text-accent">.</span>
              </h1>
              <p className="max-w-[520px] text-[17px] leading-[1.45] text-text-secondary [text-wrap:pretty] sm:text-[19px]">
                Start from a template or a one-line brief. Adjust type, color
                and layout like a designer would. Export for Instagram and
                Pinterest.
              </p>
              <BriefBar />
              <span className="font-mono text-[12px] text-text-tertiary">
                FREE · NO CARD · 5 AI BRIEFS A MONTH
              </span>
            </div>

            <Collage />
          </section>

          {/* ── Steps ────────────────────────────────────────────────── */}
          <section
            id="how-it-works"
            className="grid scroll-mt-14 border-b border-border-default md:grid-cols-3"
          >
            {STEPS.map(({ code, title, body, icon: Icon, tile }, i) => (
              <Reveal
                key={code}
                delay={i}
                className="flex flex-col gap-3.5 border-border-default px-4 pb-10 pt-9 not-last:border-b sm:px-6 md:px-10 md:not-last:border-b-0 md:not-last:border-r"
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`flex h-10 w-10 items-center justify-center ${tile}`}
                  >
                    <Icon aria-hidden="true" width={19} height={19} />
                  </span>
                  <span className="font-mono text-[12px] font-medium text-accent">
                    {code}
                  </span>
                </div>
                <h3 className="type-display-md">{title}</h3>
                <p className="text-[15px] leading-[1.5] text-text-secondary [text-wrap:pretty]">
                  {body}
                </p>
              </Reveal>
            ))}
          </section>

          {/* ── Features ─────────────────────────────────────────────── */}
          <SplitSection
            id="templates"
            kicker="Features"
            title={<>Everything you need. Nothing you don&rsquo;t.</>}
            aside={
              // The comparison page's natural anchor — the positioning it
              // expands on.
              <Link
                href="/vs/canva"
                className="mt-2 self-start text-[14px] font-semibold text-text-primary underline decoration-border-default underline-offset-[3px] transition-colors duration-150 ease-standard hover:decoration-text-primary"
              >
                Modo vs Canva →
              </Link>
            }
          >
            <div className="grid border-l border-t border-border-default sm:grid-cols-2 xl:grid-cols-3">
              {FEATURES.map(({ title, body, link }, i) => (
                <article
                  key={title}
                  className="flex flex-col gap-2 border-b border-r border-border-default p-6"
                >
                  <span className="flex items-center gap-2 font-mono text-[12px] font-medium text-accent">
                    {String.fromCharCode(65 + i)}
                    {i === 0 && (
                      <span
                        aria-hidden="true"
                        className="h-2 w-2 rounded-full bg-ai"
                      />
                    )}
                  </span>
                  <h3 className="font-expanded text-[17px] font-extrabold leading-[1.2] tracking-[-0.01em]">
                    {title}
                  </h3>
                  <p className="text-[14px] leading-[1.55] text-text-secondary [text-wrap:pretty]">
                    {body}
                  </p>
                  {link && (
                    <Link
                      href={link.href}
                      className="mt-1 self-start text-[13px] font-semibold text-text-primary underline decoration-border-default underline-offset-[3px] transition-colors duration-150 ease-standard hover:decoration-text-primary"
                    >
                      {link.label}
                    </Link>
                  )}
                </article>
              ))}
            </div>
          </SplitSection>

          {/* ── Pricing ──────────────────────────────────────────────── */}
          <SplitSection
            id="pricing"
            kicker="Pricing"
            title="Two plans. No seats."
          >
            <div className="grid border border-border-strong md:grid-cols-2">
              {PLANS.map((plan) => (
                <div
                  key={plan.name}
                  className={`flex flex-col gap-[18px] p-7 ${
                    plan.pro
                      ? "bg-surface-1"
                      : "border-b border-border-strong md:border-b-0 md:border-r"
                  }`}
                >
                  <div className="flex items-baseline justify-between">
                    <h3 className="font-expanded text-[24px] font-extrabold">
                      {plan.name}
                    </h3>
                    <span className="font-mono text-[13px] font-medium tabular-nums">
                      {plan.price}
                    </span>
                  </div>
                  <dl className="flex flex-col border-t border-border-default">
                    {plan.rows.map((row) => (
                      <div
                        key={row.k}
                        className="flex justify-between border-b border-border-default py-2.5 text-[14px]"
                      >
                        <dt className="text-text-secondary">{row.k}</dt>
                        <dd className="font-mono text-[13px] font-medium tabular-nums">
                          {row.v}
                        </dd>
                      </div>
                    ))}
                  </dl>
                  {plan.pro ? (
                    <PrimaryButton
                      href={SIGNUP_URL}
                      target="_blank"
                      className="self-start"
                    >
                      Go Pro
                    </PrimaryButton>
                  ) : (
                    <SecondaryButton
                      href={SIGNUP_URL}
                      target="_blank"
                      className="self-start"
                    >
                      Start free
                    </SecondaryButton>
                  )}
                </div>
              ))}
            </div>
            <p className="mt-4 font-mono text-[11px] text-text-tertiary">
              CANCEL ANY TIME · BILLED THROUGH PADDLE
            </p>
          </SplitSection>

          {/* ── FAQ ──────────────────────────────────────────────────── */}
          <SplitSection
            id="faq"
            kicker="FAQ"
            title="Questions? We have answers."
          >
            <Faq />
          </SplitSection>

          {/* ── Final CTA ────────────────────────────────────────────── */}
          <section className="flex flex-col gap-8 border-b border-border-default px-4 py-14 sm:px-6 md:px-14 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
            <Reveal className="flex max-w-[760px] flex-col gap-4">
              <h2 className="type-display-lg">
                Your next post is one sentence away.
              </h2>
              <span className="font-mono text-[12px] text-text-tertiary">
                FREE · NO CARD · NOTHING TO INSTALL
              </span>
            </Reveal>
            <Reveal delay={1} className="flex flex-wrap gap-3">
              <PrimaryButton href={SIGNUP_URL} target="_blank">
                Start free
              </PrimaryButton>
              <SecondaryButton href="#templates">
                See the templates
              </SecondaryButton>
            </Reveal>
          </section>
        </main>

        {/* ── Footer ───────────────────────────────────────────────── */}
        <footer className="flex flex-col gap-8 bg-surface-1 px-4 pb-8 pt-10 sm:px-6 md:px-14 lg:flex-row lg:items-end lg:justify-between">
          <span className="type-wordmark-xl">
            <Wordmark />
          </span>
          <div className="flex flex-wrap items-baseline gap-x-7 gap-y-3">
            <a href="#templates" className={footerLink}>
              Templates
            </a>
            <a href="#pricing" className={footerLink}>
              Pricing
            </a>
            <Link href="/sizes" className={footerLink}>
              Sizes
            </Link>
            <Link href="/vs/canva" className={footerLink}>
              vs Canva
            </Link>
            <a
              href={LOGIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={footerLink}
            >
              Log in
            </a>
            <Link href="/privacy" className={footerLink}>
              Privacy
            </Link>
            <Link href="/terms" className={footerLink}>
              Terms
            </Link>
            <Link href="/refund" className={footerLink}>
              Refund
            </Link>
            <a href="mailto:contact@getmodo.pro" className={footerLink}>
              Contact
            </a>
            <span className="font-mono text-[12px] text-text-tertiary">
              © {new Date().getFullYear()}
            </span>
          </div>
        </footer>
      </div>
    </>
  );
}
