import type { ReactNode } from "react";
import Link from "next/link";
import { Wordmark } from "../landing/primitives";
import { LOGIN_URL, SIGNUP_URL } from "../../lib/site";

/**
 * Shared chrome for editorial/SEO pages (/sizes and the families that follow).
 *
 * Deliberately not the landing's <Navbar>: that one is fixed, has a mobile
 * drawer and anchors to on-page sections that don't exist here. This is the
 * legal-page pattern widened, with a real signup CTA in the header — a visitor
 * arriving cold from search has no other route into the product.
 */

const footerLink =
  "text-[13.5px] text-text-secondary transition-colors duration-150 ease-standard hover:text-text-primary";

export type Breadcrumb = {
  label: string;
  href: string;
};

export function ContentPage({
  breadcrumbs,
  children,
}: {
  breadcrumbs?: Breadcrumb[];
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b border-border-default bg-surface-1">
        <nav className="flex h-14 items-stretch whitespace-nowrap">
          <Link
            href="/"
            className="flex items-center border-r border-border-default px-5 text-[19px] text-text-primary sm:px-7"
          >
            <Wordmark />
          </Link>
          <div className="flex-1" />
          <a
            href={LOGIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center border-l border-border-default px-6 text-[14px] font-semibold text-text-primary transition-colors duration-150 ease-standard hover:bg-surface-3 sm:flex"
          >
            Log in
          </a>
          <a
            href={SIGNUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-accent px-5 font-expanded text-[14px] font-extrabold uppercase tracking-[0.02em] text-accent-fg transition-colors duration-150 ease-standard hover:bg-accent-hover sm:px-7"
          >
            Start free
          </a>
        </nav>
      </header>

      <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-14">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-2 text-[13px] text-text-tertiary">
              {breadcrumbs.map((crumb, i) => (
                <li key={crumb.href} className="flex items-center gap-2">
                  {i > 0 && <span aria-hidden="true">/</span>}
                  <Link
                    href={crumb.href}
                    className="transition-colors duration-150 ease-standard hover:text-text-secondary"
                  >
                    {crumb.label}
                  </Link>
                </li>
              ))}
            </ol>
          </nav>
        )}
        {children}
      </main>

      <footer className="border-t border-border-default bg-surface-1 px-6 py-10">
        <div className="mx-auto flex max-w-5xl flex-wrap items-baseline justify-between gap-6">
          <div className="flex items-baseline gap-4">
            <span className="text-[22px]">
              <Wordmark />
            </span>
            <span className="font-mono text-[12px] text-text-tertiary">
              © {new Date().getFullYear()}
            </span>
          </div>
          <div className="flex flex-wrap gap-x-7 gap-y-3">
            <Link href="/sizes" className={footerLink}>
              Sizes
            </Link>
            <Link href="/vs/canva" className={footerLink}>
              vs Canva
            </Link>
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
    </div>
  );
}

/** Standard section head for content pages. */
export function Section({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="mt-14">
      <h2 className="type-display-md font-semibold text-text-primary">
        {title}
      </h2>
      {children}
    </section>
  );
}

/** Titled paragraphs — guidance, mistakes, "when X is the better choice". */
export function NoteList({
  notes,
}: {
  notes: readonly { title: string; body: string }[];
}) {
  return (
    <div className="mt-6 space-y-6">
      {notes.map((note) => (
        <div key={note.title}>
          <h3 className="text-[15px] font-medium text-text-primary">
            {note.title}
          </h3>
          <p className="mt-2 max-w-[42rem] text-[14.5px] leading-[1.7] text-text-secondary [text-wrap:pretty]">
            {note.body}
          </p>
        </div>
      ))}
    </div>
  );
}

/** Server-rendered FAQ — content stays in the HTML, no client JS on these pages. */
export function FaqList({
  items,
}: {
  items: readonly { q: string; a: string }[];
}) {
  return (
    <div className="mt-6">
      {items.map((item) => (
        <details key={item.q} className="border-b border-border-subtle py-4">
          <summary className="cursor-pointer list-none text-[15px] font-medium text-text-primary marker:content-none">
            {item.q}
          </summary>
          <p className="mt-3 max-w-[40rem] text-[13.5px] leading-[1.65] text-text-secondary [text-wrap:pretty]">
            {item.a}
          </p>
        </details>
      ))}
    </div>
  );
}

/** schema.org FAQPage, escaped per the Next.js JSON-LD guide. */
export function FaqJsonLd({
  items,
}: {
  items: readonly { q: string; a: string }[];
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}

/** Proportional preview of a canvas, drawn from the format's real ratio. */
export function RatioPreview({
  width,
  height,
  label,
  className = "",
}: {
  width: number;
  height: number;
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center justify-center rounded-lg border border-border-default bg-surface-3 p-4 ${className}`}
    >
      <div
        aria-hidden="true"
        className="flex max-h-44 items-center justify-center border border-border-strong bg-surface-2"
        style={{ aspectRatio: `${width} / ${height}`, height: "11rem" }}
      >
        <span className="px-2 text-center font-mono text-[11px] tabular-nums text-text-tertiary">
          {label}
        </span>
      </div>
    </div>
  );
}
