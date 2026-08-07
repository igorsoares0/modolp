import type { ReactNode } from "react";
import Link from "next/link";
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
      <header className="border-b border-border-subtle bg-surface-0/80 backdrop-blur-xl">
        <nav className="mx-auto flex h-14 max-w-3xl items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-2.5">
            <LogoIcon width={22} height={22} />
            <span className="font-display text-[15px] font-semibold text-text-primary">
              Modo
            </span>
          </Link>
          <Link
            href="/"
            className="font-body text-sm text-text-secondary transition-colors duration-150 ease-standard hover:text-text-primary"
          >
            ← Back to home
          </Link>
        </nav>
      </header>

      <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-16">
        <h1 className="font-display text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
          {title}
        </h1>
        <p className="mt-3 font-body text-sm text-text-ghost">
          Last updated: {updated}
        </p>
        <div className="legal mt-10">{children}</div>
      </main>

      <footer className="border-t border-border-subtle bg-surface-1 px-6 py-10">
        <div className="mx-auto flex max-w-3xl flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <LogoIcon />
            <span className="font-body text-sm text-text-ghost">
              © 2026 Modo Design. All rights reserved.
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
                className="font-body text-sm text-text-ghost transition-colors duration-150 ease-standard hover:text-text-secondary"
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
