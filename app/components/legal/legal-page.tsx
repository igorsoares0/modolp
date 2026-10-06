import type { ReactNode } from "react";
import Link from "next/link";
import { Wordmark } from "../landing/primitives";

type LegalPageProps = {
  title: string;
  updated: string;
  children: ReactNode;
};

/** Shared chrome for the Terms / Privacy / Refund pages. */
export function LegalPage({ title, updated, children }: LegalPageProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b border-border-default bg-surface-1">
        <nav className="flex h-14 items-stretch whitespace-nowrap">
          <Link
            href="/"
            className="flex items-center border-r border-border-default px-5 text-[19px] text-text-primary sm:px-7"
          >
            <Wordmark />
          </Link>
          <div className="flex-1" />
          <Link
            href="/"
            className="flex items-center border-l border-border-default px-6 text-[14px] text-text-secondary transition-colors duration-150 ease-standard hover:bg-surface-3 hover:text-text-primary"
          >
            ← Back to home
          </Link>
        </nav>
      </header>

      <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-16">
        <h1 className="type-display-lg text-text-primary">{title}</h1>
        <p className="mt-4 font-mono text-[12px] uppercase text-text-tertiary">
          Last updated: {updated}
        </p>
        <div className="legal mt-10">{children}</div>
      </main>

      <footer className="border-t border-border-default bg-surface-1 px-6 py-10">
        <div className="mx-auto flex max-w-3xl flex-col items-baseline justify-between gap-6 md:flex-row">
          <div className="flex items-baseline gap-4">
            <span className="text-[22px]">
              <Wordmark />
            </span>
            <span className="font-mono text-[12px] text-text-tertiary">
              © 2026 Modo Design
            </span>
          </div>
          <div className="flex items-center gap-6">
            {[
              { label: "Terms", href: "/terms" },
              { label: "Privacy", href: "/privacy" },
              { label: "Refunds", href: "/refund" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[13.5px] text-text-secondary transition-colors duration-150 ease-standard hover:text-text-primary"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
