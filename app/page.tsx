import { Navbar } from "./components/landing/navbar";
import { Faq } from "./components/landing/faq";
import { Reveal } from "./components/landing/reveal";
import { EditorMock } from "./components/landing/editor-mock";
import {
  Badge,
  Eyebrow,
  PrimaryButton,
  GhostButton,
} from "./components/landing/primitives";
import {
  LogoIcon,
  BoltIcon,
  LockIcon,
  WifiOffIcon,
  TemplateIcon,
  FormatIcon,
  TypeIcon,
  ImageIcon,
  AssetsIcon,
  SparkleIcon,
  LayersIcon,
  CloudOffIcon,
  ExportIcon,
  CheckIcon,
} from "./components/landing/icons";

const FEATURES = [
  {
    icon: TemplateIcon,
    title: "Start from a template, finish in minutes.",
    body: "Browse hundreds of templates across Marketing, Fashion, Business, Food, Fitness, and more. Pick one, make it yours, export it. Done.",
  },
  {
    icon: FormatIcon,
    title: "Every format, pixel-perfect.",
    body: "Instagram Posts (1080×1080), Instagram Stories (1080×1920), Pinterest (1000×1500) — all pre-sized and ready to go. No manual math, no cropping surprises.",
  },
  {
    icon: TypeIcon,
    title: "Type like a designer.",
    body: "Full typography controls: font family, size, color, alignment, letter spacing, line height, bold, italic, underline, uppercase, and text shadow. Your words, your style.",
  },
  {
    icon: ImageIcon,
    title: "Upload, edit, done.",
    body: "Resize, rotate, crop, flip, adjust opacity, add border radius and shadow. Your images, fully under control — without leaving the browser.",
  },
  {
    icon: AssetsIcon,
    title: "Thousands of assets at your fingertips.",
    body: "Stickers, icons, SVGs, and decorative graphics — all searchable and drag-and-drop ready. Find the right element in seconds.",
  },
  {
    icon: SparkleIcon,
    title: "Make it pop.",
    body: "Add gradients, light leaks, grain textures, blur, and noise overlays to give your designs that editorial, professional feel.",
  },
  {
    icon: LayersIcon,
    title: "Total control over every element.",
    body: "Lock, hide, duplicate, reorder — full layer management. And with unlimited undo/redo, you can experiment without fear.",
  },
  {
    icon: CloudOffIcon,
    title: "Your files. Your device. No one else's cloud.",
    body: "Modo saves everything locally on your device — automatically, continuously, without asking. Close the tab, lose your Wi-Fi, cancel nothing — your work is still right there when you come back.",
  },
  {
    icon: ExportIcon,
    title: "High-res exports, every time.",
    body: "Export as PNG or JPEG with quality control and transparent background support. Ready to post, print, or send.",
  },
];

const STEPS = [
  {
    title: "Pick a format or template",
    body: "Choose from Instagram, Stories, Pinterest, or start from scratch.",
  },
  {
    title: "Make it yours",
    body: "Edit text, swap images, add shapes, adjust colors. Everything is drag-and-drop.",
  },
  {
    title: "Export and post",
    body: "Download as PNG or JPEG at full resolution. That's it.",
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

const FREE_FEATURES = [
  "Unlimited projects",
  "Access to core templates",
  "All canvas formats",
  "PNG & JPEG export",
  "Browser autosave",
];

const PRO_FEATURES = [
  "Everything in Free",
  "Full template library (all categories)",
  "Full assets library (stickers, icons, SVGs)",
  "All overlays and effects",
  "High-res export",
  "Priority support",
  "All future Pro features included",
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="top" className="flex flex-col">
        {/* ── Hero ─────────────────────────────────────────────── */}
        <section className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-28 pb-16 text-center">
          <div className="canvas-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,black,transparent)]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(52,211,153,0.08)_0%,transparent_70%)]" />

          <div className="relative mx-auto flex max-w-3xl flex-col items-center">
            <div className="animate-fade-in">
              <Badge>Browser-based design editor</Badge>
            </div>

            <h1 className="mt-6 animate-fade-in font-display text-[2.5rem] font-bold leading-[1.05] tracking-tight text-ink-primary sm:text-6xl lg:text-[5rem] [animation-delay:80ms]">
              Design that moves
              <br />
              as <span className="text-accent-green">fast</span> as you think.
            </h1>

            <p className="mt-6 max-w-xl animate-fade-in font-body text-lg leading-relaxed text-ink-secondary [animation-delay:160ms]">
              Modo is the browser-based design editor built for creators who
              don&apos;t have time to learn complex software. Create stunning
              social media graphics, stories, and marketing visuals — in
              minutes, not hours.
            </p>

            <div className="mt-8 flex animate-fade-in flex-col items-center gap-3 sm:flex-row [animation-delay:240ms]">
              <PrimaryButton href="#pricing">
                Start designing for free
              </PrimaryButton>
              <GhostButton href="#features">See templates →</GhostButton>
            </div>

            <p className="mt-4 animate-fade-in font-body text-sm text-ink-ghost [animation-delay:320ms]">
              No download. No credit card. Your files stay yours — forever.
            </p>
          </div>

          {/* Hero visual */}
          <div className="relative mt-16 w-full max-w-5xl animate-canvas-appear [animation-delay:360ms]">
            <EditorMock />
            <div className="mt-5 flex flex-wrap justify-center gap-2">
              {["1080×1080", "1080×1920", "1000×1500"].map((fmt) => (
                <span
                  key={fmt}
                  className="rounded-full border border-line-default bg-surface-2 px-3 py-1 font-body text-xs text-ink-secondary"
                >
                  {fmt}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── Social proof bar ─────────────────────────────────── */}
        <div className="border-y border-line-subtle bg-surface-1 py-6">
          <div className="no-scrollbar mx-auto max-w-6xl overflow-x-auto px-6">
            <p className="flex min-w-max items-center justify-center gap-3 text-center font-body text-sm text-ink-ghost">
              {[
                "Instagram Posts",
                "Instagram Stories",
                "Pinterest",
                "Marketing Creatives",
                "Promotional Banners",
              ].map((item, i, arr) => (
                <span key={item} className="flex items-center gap-3">
                  {item}
                  {i < arr.length - 1 && <span aria-hidden>·</span>}
                </span>
              ))}
            </p>
          </div>
        </div>

        {/* ── Section 1 — Value prop ───────────────────────────── */}
        <section className="mx-auto grid max-w-5xl items-center gap-16 px-6 py-24 md:grid-cols-2">
          <Reveal>
            <Eyebrow>Why Modo</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-ink-primary sm:text-5xl">
              Canva is powerful.
              <br />
              Modo is <span className="text-accent-green">fast</span>.
            </h2>
            <div className="mt-6 space-y-4 font-body text-base leading-relaxed text-ink-secondary">
              <p>
                Most design tools are built for designers. Modo is built for
                everyone else — the founder writing their own ads, the creator
                scheduling three posts a day, the marketer who needs something
                done <em className="text-ink-primary not-italic">now</em>.
              </p>
              <p>
                No steep learning curve. No bloated interface. Just a clean
                canvas, beautiful templates, and the tools you actually use.
              </p>
            </div>
            <a
              href="#features"
              className="mt-6 inline-block font-body text-sm font-medium text-accent-green transition-colors hover:text-accent-green-hover"
            >
              See all features →
            </a>
          </Reveal>

          <Reveal delay={1} className="flex flex-col gap-3">
            {[
              { icon: BoltIcon, label: "No learning curve" },
              { icon: LockIcon, label: "Your files stay local" },
              { icon: WifiOffIcon, label: "Works offline" },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 rounded-xl border border-line-default bg-surface-2 px-4 py-3.5"
              >
                <Icon className="shrink-0 text-accent-green" width={20} height={20} />
                <span className="font-body text-sm text-ink-primary">{label}</span>
              </div>
            ))}
          </Reveal>
        </section>

        {/* ── Section 1B — Ownership callout ───────────────────── */}
        <section className="border-y border-line-subtle bg-surface-1 py-24">
          <Reveal className="mx-auto max-w-3xl px-6 text-center">
            <Eyebrow>Local-first</Eyebrow>
            <h2 className="mx-auto mt-4 font-display text-3xl font-bold leading-tight text-ink-primary sm:text-5xl">
              Your designs don&apos;t live
              <br />
              in someone else&apos;s cloud.
            </h2>
            <div className="mx-auto mt-6 space-y-4 text-left font-body text-base leading-relaxed text-ink-secondary sm:text-center">
              <p>
                Tools like Canva keep your files on their servers. Cancel your
                subscription, and your work is essentially held hostage. Modo
                works differently.
              </p>
              <p>
                Everything you create is saved locally on your device —
                automatically, in real time. Your projects are yours, period.
                No subscription required to access them. No account required to
                keep them. Close the tab and come back a month later —
                everything is exactly where you left it.
              </p>
              <p>
                Design on a plane. Design in a café with spotty Wi-Fi. Design
                anywhere. Modo works fully offline because your files never had
                to leave your device in the first place.
              </p>
            </div>
            <blockquote className="mx-auto mt-8 max-w-md border-l-2 border-accent-green pl-5 text-left font-body text-lg italic text-ink-secondary">
              &ldquo;Your work belongs to you — not to our servers.&rdquo;
            </blockquote>
          </Reveal>
        </section>

        {/* ── Section 2 — Features grid ────────────────────────── */}
        <section id="features" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24">
          <Reveal className="text-center">
            <Eyebrow>Features</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-ink-primary sm:text-5xl">
              Everything you need.
              <br />
              Nothing you don&apos;t.
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((feature, i) => (
              <Reveal
                key={feature.title}
                delay={i % 3}
                as="article"
                className="group rounded-2xl border border-line-default bg-surface-1 p-7 transition-all duration-300 hover:border-line-strong hover:bg-surface-2"
              >
                <feature.icon className="text-accent-green" width={24} height={24} />
                <h3 className="mt-5 font-display text-base font-semibold text-ink-primary">
                  {feature.title}
                </h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-ink-secondary">
                  {feature.body}
                </p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── Section 3 — How it works ─────────────────────────── */}
        <section className="border-y border-line-subtle bg-surface-1 py-24">
          <div className="mx-auto max-w-4xl px-6">
            <Reveal className="text-center">
              <Eyebrow>Process</Eyebrow>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-ink-primary sm:text-5xl">
                From blank canvas to
                <br />
                ready-to-post in 3 steps.
              </h2>
            </Reveal>

            <div className="relative mt-16 grid gap-10 md:grid-cols-3 md:gap-6">
              {STEPS.map((step, i) => (
                <Reveal key={step.title} delay={i} className="relative">
                  {i < STEPS.length - 1 && (
                    <span className="absolute left-[calc(50%+1.5rem)] top-6 hidden w-[calc(100%-3rem)] border-t border-dashed border-line-default md:block" />
                  )}
                  <span className="font-display text-4xl font-bold text-line-strong">
                    {i + 1}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-semibold text-ink-primary">
                    {step.title}
                  </h3>
                  <p className="mt-2 font-body text-sm leading-relaxed text-ink-secondary">
                    {step.body}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Section 4 — Who it's for ─────────────────────────── */}
        <section className="mx-auto max-w-5xl px-6 py-24">
          <Reveal className="text-center">
            <Eyebrow>Who it&apos;s for</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-ink-primary sm:text-5xl">
              Made for people who create,
              <br />
              not just designers.
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-4 sm:grid-cols-2">
            {PERSONAS.map((persona, i) => (
              <Reveal
                key={persona.title}
                delay={i % 2}
                className="rounded-2xl border border-line-default bg-surface-1 p-6"
              >
                <h3 className="font-display text-base font-semibold text-ink-primary">
                  {persona.title}
                </h3>
                <p className="mt-1 font-body text-sm leading-relaxed text-ink-secondary">
                  {persona.body}
                </p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── Section 5 — Pricing ──────────────────────────────── */}
        <section
          id="pricing"
          className="scroll-mt-20 border-y border-line-subtle bg-surface-1 py-24"
        >
          <div className="mx-auto max-w-4xl px-6 text-center">
            <Reveal>
              <Eyebrow>Pricing</Eyebrow>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-ink-primary sm:text-5xl">
                One price. Forever yours.
              </h2>
              <p className="mt-4 font-body text-base text-ink-secondary">
                No monthly fees. No seat limits. No surprises.
              </p>
            </Reveal>

            <div className="mx-auto mt-12 grid max-w-2xl gap-6 md:grid-cols-2">
              {/* Free */}
              <Reveal className="flex flex-col rounded-2xl border border-line-default bg-surface-1 p-8 text-left">
                <h3 className="font-display text-xl font-bold text-ink-primary">
                  Free
                </h3>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="font-display text-[2rem] font-bold text-ink-primary">
                    $0
                  </span>
                  <span className="font-body text-sm text-ink-secondary">
                    / forever
                  </span>
                </div>
                <p className="mt-2 font-body text-sm text-ink-secondary">
                  Everything you need to get started.
                </p>
                <div className="my-6 border-t border-line-subtle" />
                <ul className="flex flex-col gap-3">
                  {FREE_FEATURES.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2.5 font-body text-sm text-ink-primary"
                    >
                      <CheckIcon
                        className="mt-0.5 shrink-0 text-accent-green"
                        width={16}
                        height={16}
                      />
                      {f}
                    </li>
                  ))}
                </ul>
                <GhostButton href="#" className="mt-8 w-full">
                  Get started free
                </GhostButton>
              </Reveal>

              {/* Pro */}
              <Reveal
                delay={1}
                className="relative flex flex-col rounded-2xl border border-accent-green/30 bg-surface-1 p-8 text-left shadow-[0_0_40px_rgba(52,211,153,0.06)]"
              >
                <span className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge>Best value</Badge>
                </span>
                <h3 className="font-display text-xl font-bold text-ink-primary">
                  Pro — Lifetime
                </h3>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="font-display text-[2rem] font-bold text-ink-primary">
                    $47
                  </span>
                  <span className="font-body text-sm text-ink-secondary">
                    one-time
                  </span>
                </div>
                <p className="mt-2 font-body text-sm text-ink-secondary">
                  Pay once. Use forever.
                </p>
                <div className="my-6 border-t border-line-subtle" />
                <ul className="flex flex-col gap-3">
                  {PRO_FEATURES.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2.5 font-body text-sm text-ink-primary"
                    >
                      <CheckIcon
                        className="mt-0.5 shrink-0 text-accent-green"
                        width={16}
                        height={16}
                      />
                      {f}
                    </li>
                  ))}
                </ul>
                <PrimaryButton href="#" className="mt-8 w-full">
                  Get lifetime access — $47
                </PrimaryButton>
              </Reveal>
            </div>

            <p className="mt-3 font-body text-xs text-ink-ghost">
              Limited early-access pricing. Lock it in before it changes.
            </p>
          </div>
        </section>

        {/* ── Section 6 — FAQ ──────────────────────────────────── */}
        <section id="faq" className="mx-auto max-w-3xl scroll-mt-20 px-6 py-24">
          <Reveal className="text-center">
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-ink-primary sm:text-5xl">
              Questions? We have answers.
            </h2>
          </Reveal>
          <Reveal className="mt-12">
            <Faq />
          </Reveal>
        </section>

        {/* ── Final CTA ────────────────────────────────────────── */}
        <section className="relative px-6 py-32 text-center">
          <div className="canvas-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_70%,black,transparent)]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_100%,rgba(52,211,153,0.09)_0%,transparent_70%)]" />
          <Reveal className="relative mx-auto max-w-lg">
            <h2 className="font-display text-3xl font-bold leading-tight text-ink-primary sm:text-5xl">
              Stop putting off your next design.
            </h2>
            <p className="mt-6 font-body text-lg leading-relaxed text-ink-secondary">
              Open Modo, pick a template, and have something ready to post in
              the next 10 minutes. No install. No tutorial. Just design.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <PrimaryButton href="#">Start for free</PrimaryButton>
              <GhostButton href="#features">View all templates →</GhostButton>
            </div>
            <p className="mt-4 font-body text-sm text-ink-ghost">
              Free to start. No credit card required.
            </p>
          </Reveal>
        </section>
      </main>

      {/* ── Footer ─────────────────────────────────────────────── */}
      <footer className="border-t border-line-subtle bg-surface-1 px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <LogoIcon />
            <span className="font-body text-sm text-ink-ghost">
              © 2026 Modo. All rights reserved.
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="font-body text-sm text-ink-ghost transition-colors hover:text-ink-secondary"
            >
              Terms
            </a>
            <a
              href="#"
              className="font-body text-sm text-ink-ghost transition-colors hover:text-ink-secondary"
            >
              Privacy
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
