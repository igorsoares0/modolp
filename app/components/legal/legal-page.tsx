import type { ReactNode } from "react";
import { LogoIcon } from "../landing/icons";

type LegalPageProps = {
  title: string;
  updated: string;
  children: ReactNode;
};

/** Shared chrome for the Terms / Privacy / Refund pages. */
export function LegalPage({ title, updated, children }: LegalPageProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b border-line-subtle bg-surface-0/80 backdrop-blur-xl">
        <nav className="mx-auto flex h-14 max-w-3xl items-center justify-between px-6">
          <a href="/" className="flex items-center gap-2">
            <LogoIcon />
            <span className="font-display text-base font-semibold text-ink-primary">
              Modo
            </span>
          </a>
          <a
            href="/"
            className="font-body text-sm font-medium text-ink-secondary transition-colors hover:text-ink-primary"
          >
            ← Back to home
          </a>
        </nav>
      </header>

      <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-16">
        <h1 className="font-display text-3xl font-bold tracking-tight text-ink-primary sm:text-4xl">
          {title}
        </h1>
        <p className="mt-3 font-body text-sm text-ink-ghost">
          Last updated: {updated}
        </p>
        <div className="legal mt-10">{children}</div>
      </main>

      <footer className="border-t border-line-subtle bg-surface-1 px-6 py-10">
        <div className="mx-auto flex max-w-3xl flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <LogoIcon />
            <span className="font-body text-sm text-ink-ghost">
              © 2026 Modo Design. All rights reserved.
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="/terms"
              className="font-body text-sm text-ink-ghost transition-colors hover:text-ink-secondary"
            >
              Terms
            </a>
            <a
              href="/privacy"
              className="font-body text-sm text-ink-ghost transition-colors hover:text-ink-secondary"
            >
              Privacy
            </a>
            <a
              href="/refund"
              className="font-body text-sm text-ink-ghost transition-colors hover:text-ink-secondary"
            >
              Refunds
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
