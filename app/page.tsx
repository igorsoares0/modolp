import Link from "next/link";
import { Navbar } from "./components/landing/navbar";
import { Faq } from "./components/landing/faq";
import { Reveal } from "./components/landing/reveal";
import { EditorMock } from "./components/landing/editor-mock";
import { PromptDemo } from "./components/landing/prompt-demo";
import { Badge, Eyebrow, PrimaryButton, GhostButton } from "./components/landing/primitives";
import {
  LogoIcon,
  SparkleIcon,
  TemplatesIcon,
  FormatIcon,
  TextIcon,
  ImageIcon,
  ShapesIcon,
  LayersIcon,
  CloudSyncIcon,
  DownloadIcon,
  BoltIcon,
  CheckIcon,
} from "./components/landing/icons";
import {
  LOGIN_URL,
  PRO_PRICE,
  PRO_PRICE_PERIOD,
  SIGNUP_URL,
} from "./lib/site";

/** AI leads the grid — it's the reason the product changed. */
const FEATURES = [
  {
    icon: SparkleIcon,
    title: "Write a line. Get a design.",
    body: "Describe the post and Modo builds it — template, copy, palette, fonts, layout, background. Fully editable the moment it lands on the canvas.",
  },
  {
    icon: TemplatesIcon,
    title: "52 templates, 45 categories.",
    body: "Wellness, Promo, Story, Pinterest, Podcast, Event, Business, Fashion, Food, Fitness, Travel, Tech, Wedding, Real Estate and more. Search them, preview them, duplicate them, make them yours.",
  },
  {
    icon: FormatIcon,
    title: "Every format, pixel-perfect.",
    body: "Instagram Posts (1080×1080), Instagram Stories (1080×1920), Pinterest (1000×1500) — pre-sized and ready. No manual math, no cropping surprises.",
  },
  {
    icon: TextIcon,
    title: "Type like a designer.",
    body: "16 curated fonts plus full controls: size, color, alignment, letter spacing, line height, bold, italic, underline, uppercase and text shadow. Your words, your style.",
  },
  {
    icon: ImageIcon,
    title: "Upload, edit, done.",
    body: "Resize, rotate, crop, flip, adjust opacity, add border radius and shadow. Uploads land in your account, so the same image is there on your laptop and your desktop.",
  },
  {
    icon: ShapesIcon,
    title: "Make it pop.",
    body: "Rectangles, ellipses, triangles and lines with full fill and stroke control. Stickers and decorative graphics, drag-and-drop. Gradients, light leaks, grain, blur and noise for that editorial finish.",
  },
  {
    icon: LayersIcon,
    title: "Total control over every element.",
    body: "Lock, hide, duplicate, reorder — full layer management. Unlimited undo and redo, so you can experiment without fear.",
  },
  {
    icon: CloudSyncIcon,
    title: "Start on your laptop. Finish on your desktop.",
    body: "Your projects and uploads live in your account and follow you to any browser you sign in from. Nothing to export, nothing to email yourself. And if your connection drops mid-edit, Modo keeps working and syncs the moment you're back.",
  },
  {
    icon: DownloadIcon,
    title: "High-res exports. No watermark. Ever.",
    body: "PNG or JPEG with quality control and transparent background support — clean output on every plan, including Free. You can also export the project file itself (.modo) to keep a backup or hand it to someone else.",
  },
];

const PILLARS = [
  { icon: SparkleIcon, label: "First draft in one sentence" },
  { icon: BoltIcon, label: "No learning curve" },
  { icon: CloudSyncIcon, label: "Synced across your devices" },
];

const STEPS = [
  {
    title: "Describe it or pick it",
    body: "Write a brief and let Modo generate the design, or start from a template or a blank canvas.",
  },
  {
    title: "Make it yours",
    body: "Edit text, swap images, add shapes, adjust colors. Everything is drag-and-drop.",
  },
  {
    title: "Export and post",
    body: "Download as PNG or JPEG at full resolution. No watermark. That's it.",
  },
];

const PERSONAS = [
  {
    title: "Content creators",
    body: "who publish daily and need speed over perfection.",
  },
  {
    title: "Small business owners",
    body: "who can't afford an agency but won't settle for bad-looking posts.",
  },
  {
    title: "Marketers",
    body: "who need fast, on-brand visuals for campaigns.",
  },
  {
    title: "Freelancers",
    body: "who want to deliver results without a heavyweight tool.",
  },
];

/** `emphasis` lifts the number that actually separates the two plans. */
type PlanFeature = { text: string; emphasis?: string; trailing?: string };

const FREE_FEATURES: PlanFeature[] = [
  { text: "Unlimited projects" },
  { text: "", emphasis: "5 AI generations", trailing: " per month" },
  { text: "46 templates" },
  { text: "All canvas formats, fonts, shapes, assets and overlays" },
  {
    text: "PNG, JPEG and project-file export — ",
    emphasis: "no watermark",
  },
  { text: "Projects synced across your devices" },
  { text: "", emphasis: "250 MB", trailing: " of image storage" },
];

const PRO_FEATURES: PlanFeature[] = [
  { text: "Everything in Free" },
  {
    text: "",
    emphasis: "100 AI generations per month",
    trailing: " (20× the free limit)",
  },
  {
    text: "",
    emphasis: "1 GB of image storage",
    trailing: " (4× the free limit)",
  },
  { text: "All 6 premium templates unlocked" },
  { text: "Priority support" },
];

const footerLink =
  "text-[13.5px] text-text-ghost transition-colors duration-150 ease-standard hover:text-text-secondary";

function PlanFeatureList({ features }: { features: PlanFeature[] }) {
  return (
    <ul className="flex flex-1 flex-col gap-[11px]">
      {features.map((f) => (
        <li
          key={`${f.text}${f.emphasis ?? ""}`}
          className="flex gap-2.5 text-[13.5px] leading-[1.5] text-text-secondary"
        >
          <CheckIcon
            aria-hidden="true"
            width={14}
            height={14}
            className="mt-[3px] shrink-0 text-accent"
          />
          <span>
            {f.text}
            {f.emphasis && (
              <span className="font-medium text-text-primary">{f.emphasis}</span>
            )}
            {f.trailing}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />

      <main id="top" className="flex flex-col overflow-x-hidden">
        {/* ── Hero ─────────────────────────────────────────────────── */}
        <header className="relative overflow-hidden px-6 pt-[150px] text-center">
          <div className="canvas-dots pointer-events-none absolute inset-0 [mask-image:linear-gradient(180deg,#000_0%,#000_55%,transparent_100%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,color-mix(in_srgb,var(--accent)_9%,transparent)_0%,transparent_70%)]" />

          <div className="relative mx-auto flex max-w-6xl flex-col items-center">
            <div className="animate-fade-in">
              <Badge>AI design editor</Badge>
            </div>

            <h1 className="type-display-xl mt-[22px] font-semibold animate-fade-in [animation-delay:80ms]">
              Describe the post.
              <br />
              <span className="text-accent">Get the design.</span>
            </h1>

            <p className="mt-[22px] max-w-[660px] text-[18px] leading-[1.55] text-text-secondary [text-wrap:pretty] animate-fade-in [animation-delay:160ms]">
              Modo is a browser-based design editor with AI built into the
              canvas. Write one line about what you need — Modo picks the
              template, writes the copy, sets the palette and the type. Then you
              edit anything you want, by hand, in seconds.
            </p>

            <PromptDemo />

            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <PrimaryButton href={SIGNUP_URL} target="_blank">
                Start free
              </PrimaryButton>
              <GhostButton href="#how-it-works">See how it works →</GhostButton>
            </div>

            <p className="mt-3.5 text-xs text-text-ghost">
              Free plan, no credit card. Nothing to install. Works in your
              browser.
            </p>

            <div className="mt-16 w-full max-w-[1060px]">
              <EditorMock />

              <div className="mt-5 flex flex-wrap justify-center gap-2">
                {["1080×1080", "1080×1920", "1000×1500"].map((size) => (
                  <span
                    key={size}
                    className="rounded-full border border-border-default bg-surface-2 px-3 py-1 font-mono text-[11.5px] text-text-secondary"
                  >
                    {size}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </header>

        {/* ── Social proof bar ─────────────────────────────────────── */}
        <div className="no-scrollbar mt-20 overflow-x-auto border-y border-border-subtle bg-surface-1 px-6 py-[22px]">
          <p className="whitespace-nowrap text-center text-[13.5px] text-text-ghost">
            Instagram Posts&nbsp; ·&nbsp; Instagram Stories&nbsp; ·&nbsp;
            Pinterest&nbsp; ·&nbsp; Marketing Creatives&nbsp; ·&nbsp; Promotional
            Banners
          </p>
        </div>

        {/* ── Section 1 — Value prop ───────────────────────────────── */}
        <Reveal
          as="section"
          className="mx-auto grid w-full max-w-5xl items-center gap-16 px-6 py-26 md:grid-cols-2"
        >
          <div>
            <Eyebrow>Why Modo</Eyebrow>
            <h2 className="type-display-lg mt-5 font-semibold">
              Canva is powerful.
              <br />
              Modo is fast.
            </h2>
            <p className="mt-[22px] text-base leading-[1.6] text-text-secondary [text-wrap:pretty]">
              Most design tools hand you a blank canvas and a thousand buttons.
              Modo hands you a finished draft.
            </p>
            <p className="mt-3.5 text-base leading-[1.6] text-text-secondary [text-wrap:pretty]">
              Type{" "}
              <code className="rounded-sm bg-accent-tint px-1.5 py-0.5 font-mono text-sm text-accent-tint-fg">
                launch post for a matcha café, warm and minimal
              </code>{" "}
              and you get a real design back — an actual template, filled with
              actual copy, in a palette that works. From there it&rsquo;s a
              normal editor: drag, retype, swap the photo, ship it.
            </p>
            <p className="mt-3.5 text-base leading-[1.6] text-text-secondary [text-wrap:pretty]">
              Built for the founder writing their own ads, the creator posting
              three times a day, the marketer who needed it an hour ago. No
              learning curve, no bloat — just the tools people actually use.
            </p>
            <a
              href="#features"
              className="mt-[22px] inline-block text-sm text-accent transition-colors duration-150 ease-standard hover:text-accent-hover"
            >
              See all features →
            </a>
          </div>

          <div className="flex flex-col gap-3">
            {PILLARS.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-3.5 rounded-lg border border-border-default bg-surface-2 px-[18px] py-4"
              >
                <Icon
                  aria-hidden="true"
                  width={18}
                  height={18}
                  className="shrink-0 text-accent"
                />
                <span className="text-[15px] font-medium">{label}</span>
              </div>
            ))}
          </div>
        </Reveal>

        {/* ── Section 1B — AI callout ──────────────────────────────── */}
        <section className="border-y border-border-subtle bg-surface-1 px-6 py-26">
          <Reveal className="mx-auto max-w-3xl text-center">
            <Eyebrow>AI generation</Eyebrow>
            <h2 className="type-display-lg mt-5 font-semibold">
              The fastest first draft you&rsquo;ll ever get.
            </h2>
            <p className="mt-6 text-base leading-[1.6] text-text-secondary [text-wrap:pretty]">
              Starting is the slow part. Modo removes it.
            </p>

            {/* Brief → result */}
            <div className="mt-9 flex flex-wrap items-center justify-center gap-5">
              <div className="min-w-[240px] flex-1 rounded-lg border border-border-default bg-surface-2 px-[18px] py-4 text-left">
                <div className="text-[10px] font-medium tracking-[0.1em] text-text-ghost">
                  YOUR BRIEF
                </div>
                <div className="mt-2 font-mono text-[13px] leading-[1.5] text-accent-tint-fg">
                  black friday story, bold, high contrast
                </div>
              </div>

              <span aria-hidden="true" className="text-[22px] text-text-ghost">
                →
              </span>

              {/* Generated artwork — literal colors, this is a document */}
              <div className="flex aspect-[9/16] max-h-[220px] w-[150px] flex-none flex-col justify-center gap-2 rounded-lg bg-[#141416] p-[18px] shadow-raise">
                <div className="text-[9px] font-medium tracking-[0.26em] text-[#c9553d]">
                  24 HOURS ONLY
                </div>
                <div className="text-[30px] font-semibold leading-[0.95] tracking-[-0.03em] text-[#f4f1ea]">
                  BLACK
                  <br />
                  FRIDAY
                </div>
                <div className="h-0.5 w-[34px] bg-[#c9553d]" />
                <div className="text-[11px] text-[#8f8b85]">
                  Everything 50% off
                </div>
              </div>
            </div>

            <p className="mt-8 text-base leading-[1.6] text-text-secondary [text-wrap:pretty]">
              Write a brief in plain language. Modo reads it, chooses the
              template that fits, then fills in every text slot, picks the color
              palette, matches the fonts, sizes each block and sets the
              background treatment. You get a complete, coherent design — not a
              stock layout with lorem ipsum in it.
            </p>
            <p className="mt-3.5 text-base leading-[1.6] text-text-secondary [text-wrap:pretty]">
              And it never leaves you stranded. Every AI result is validated
              before it hits your canvas, and anything that doesn&rsquo;t fit
              falls back to the template&rsquo;s original design. The worst case
              is a design you need to tweak. There is no case where it breaks.
            </p>

            <blockquote className="mx-auto mt-8 max-w-lg border-l-2 border-accent pl-5 text-left text-base italic leading-[1.6] text-text-secondary">
              &ldquo;Blank canvas to finished post, in one sentence.&rdquo;
            </blockquote>

            <p className="mt-7 text-xs text-text-ghost">
              Included on every plan. 5 generations a month on Free, 100 on Pro.
            </p>
          </Reveal>
        </section>

        {/* ── Section 2 — Features ─────────────────────────────────── */}
        <section
          id="features"
          className="mx-auto w-full max-w-6xl scroll-mt-20 px-6 py-26"
        >
          <Reveal className="text-center">
            <Eyebrow>Features</Eyebrow>
            <h2 className="type-display-lg mt-5 font-semibold">
              Everything you need.
              <br />
              Nothing you don&rsquo;t.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map(({ icon: Icon, title, body }, i) => (
              <Reveal
                key={title}
                as="article"
                delay={i % 3}
                className="rounded-lg border border-border-default bg-surface-2 p-6 transition-colors duration-150 ease-standard hover:border-border-strong"
              >
                <Icon aria-hidden="true" className="text-accent" />
                <h3 className="mt-3.5 text-[15px] font-semibold">{title}</h3>
                <p className="mt-2 text-[13.5px] leading-[1.6] text-text-secondary [text-wrap:pretty]">
                  {body}
                </p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── Section 3 — How it works ─────────────────────────────── */}
        <section
          id="how-it-works"
          className="scroll-mt-14 border-y border-border-subtle bg-surface-1 px-6 py-26"
        >
          <Reveal className="mx-auto max-w-4xl">
            <div className="text-center">
              <Eyebrow>Process</Eyebrow>
              <h2 className="type-display-lg mt-5 font-semibold">
                From one sentence to
                <br />
                ready-to-post in 3 steps.
              </h2>
            </div>

            <ol className="mt-14 grid gap-8 sm:grid-cols-3">
              {STEPS.map((step, i) => (
                <li key={step.title}>
                  {/* The dashed rule runs from the numeral into the next
                      column, so the three steps read as one sequence. */}
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-4xl font-semibold leading-none text-border-strong">
                      {i + 1}
                    </span>
                    {i < STEPS.length - 1 && (
                      <span
                        aria-hidden="true"
                        className="-mr-8 hidden h-px flex-1 border-t border-dashed border-border-strong sm:block"
                      />
                    )}
                  </div>
                  <h3 className="mt-3 text-[17px] font-semibold">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[13.5px] leading-[1.6] text-text-secondary [text-wrap:pretty]">
                    {step.body}
                  </p>
                </li>
              ))}
            </ol>
          </Reveal>
        </section>

        {/* ── Section 4 — Who it's for ─────────────────────────────── */}
        <section className="mx-auto w-full max-w-5xl px-6 py-26">
          <Reveal className="text-center">
            <Eyebrow>Who it&rsquo;s for</Eyebrow>
            <h2 className="type-display-lg mt-5 font-semibold">
              Made for people who create,
              <br />
              not just designers.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {PERSONAS.map((persona, i) => (
              <Reveal
                key={persona.title}
                as="article"
                delay={i % 2}
                className="rounded-lg border border-border-default bg-surface-2 p-6"
              >
                <h3 className="text-[15px] font-semibold">{persona.title}</h3>
                <p className="mt-2 text-[13.5px] leading-[1.6] text-text-secondary">
                  {persona.body}
                </p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── Section 5 — Pricing ──────────────────────────────────── */}
        <section
          id="pricing"
          className="scroll-mt-14 border-y border-border-subtle bg-surface-1 px-6 py-26"
        >
          <Reveal className="mx-auto max-w-4xl text-center">
            <Eyebrow>Pricing</Eyebrow>
            <h2 className="type-display-lg mt-5 font-semibold">
              Start free. Upgrade when you outgrow it.
            </h2>
            <p className="mt-4 text-base text-text-secondary">
              One plan, one price. Cancel any time.
            </p>

            <div className="mx-auto mt-12 grid max-w-2xl gap-6 text-left md:grid-cols-2">
              {/* Free */}
              <div className="flex flex-col rounded-xl border border-border-default bg-surface-2 p-8">
                <h3 className="text-lg font-semibold">Free</h3>
                <div className="mt-3 flex items-baseline gap-1.5">
                  <span className="type-display-md font-mono font-semibold tabular-nums">
                    $0
                  </span>
                  <span className="text-sm text-text-secondary">/ forever</span>
                </div>
                <p className="mt-2.5 text-sm text-text-secondary">
                  A real editor, not a trial.
                </p>
                <div className="my-6 border-t border-border-subtle" />
                <PlanFeatureList features={FREE_FEATURES} />
                <GhostButton
                  href={SIGNUP_URL}
                  target="_blank"
                  className="mt-7 w-full"
                >
                  Start free
                </GhostButton>
              </div>

              {/* Pro */}
              <div className="relative flex flex-col rounded-xl border border-accent bg-surface-2 p-8 shadow-raise">
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap">
                  Most popular
                </Badge>
                <h3 className="text-lg font-semibold">Pro</h3>
                <div className="mt-3 flex items-baseline gap-1.5">
                  <span className="type-display-md font-mono font-semibold tabular-nums">
                    {PRO_PRICE}
                  </span>
                  <span className="text-sm text-text-secondary">
                    {PRO_PRICE_PERIOD}
                  </span>
                </div>
                <p className="mt-2.5 text-sm text-text-secondary">
                  For people who post every day.
                </p>
                <div className="my-6 border-t border-border-subtle" />
                <PlanFeatureList features={PRO_FEATURES} />
                <PrimaryButton
                  href={SIGNUP_URL}
                  target="_blank"
                  className="mt-7 w-full"
                >
                  Upgrade to Pro — {PRO_PRICE}
                  {PRO_PRICE_PERIOD}
                </PrimaryButton>
              </div>
            </div>

            <p className="mx-auto mt-5 max-w-lg text-xs leading-[1.6] text-text-ghost">
              No contract, no seat minimums. Cancel any time and you keep access
              until the end of your billing period.
            </p>
          </Reveal>
        </section>

        {/* ── Section 6 — FAQ ──────────────────────────────────────── */}
        <section
          id="faq"
          className="mx-auto w-full max-w-3xl scroll-mt-14 px-6 py-26"
        >
          <Reveal className="text-center">
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="type-display-lg mt-5 font-semibold">
              Questions? We have answers.
            </h2>
          </Reveal>

          <div className="mt-12">
            <Faq />
          </div>
        </section>

        {/* ── Final CTA ────────────────────────────────────────────── */}
        <section className="relative overflow-hidden px-6 py-32 text-center">
          <div className="canvas-dots pointer-events-none absolute inset-0 [mask-image:linear-gradient(0deg,#000_0%,#000_50%,transparent_100%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_100%,color-mix(in_srgb,var(--accent)_10%,transparent)_0%,transparent_70%)]" />

          <Reveal className="relative mx-auto max-w-xl">
            <h2 className="type-display-lg font-semibold">
              Your next post is one sentence away.
            </h2>
            <p className="mt-[22px] text-[18px] leading-[1.55] text-text-secondary [text-wrap:pretty]">
              Create an account, describe what you need, and have something
              ready to publish in the next ten minutes. No install. No tutorial.
              No watermark.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <PrimaryButton href={SIGNUP_URL} target="_blank">
                Start free
              </PrimaryButton>
              <GhostButton href="#features">See the templates →</GhostButton>
            </div>
            <p className="mt-4 text-xs text-text-ghost">
              Free to start. No credit card required.
            </p>
          </Reveal>
        </section>
      </main>

      {/* ── Footer ─────────────────────────────────────────────────── */}
      <footer className="border-t border-border-subtle bg-surface-1 px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <LogoIcon width={22} height={22} />
            <span className="text-[13.5px] text-text-ghost">
              © {new Date().getFullYear()} Modo. All rights reserved.
            </span>
          </div>

          <div className="flex flex-wrap gap-6">
            <a
              href={LOGIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={footerLink}
            >
              Sign in
            </a>
            <Link href="/terms" className={footerLink}>
              Terms
            </Link>
            <Link href="/privacy" className={footerLink}>
              Privacy
            </Link>
            <Link href="/refund" className={footerLink}>
              Refund
            </Link>
            <a href="mailto:contact@getmodo.pro" className={footerLink}>
              Contact
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
