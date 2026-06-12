"use client";

import { useEffect, useState } from "react";
import { LogoIcon, MenuIcon, CloseIcon } from "./icons";

const LINKS = [
  { label: "Templates", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-line-default bg-surface-1/90 backdrop-blur-xl"
          : "border-line-subtle bg-surface-0/60 backdrop-blur-xl"
      }`}
    >
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2">
          <LogoIcon />
          <span className="font-display text-base font-semibold text-ink-primary">
            Modo
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-body text-sm font-medium text-ink-secondary transition-colors hover:text-ink-primary"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href="https://app.getmodo.pro"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-accent-green px-4 py-2 font-display text-sm font-semibold text-surface-0 transition-all duration-200 hover:bg-accent-green-hover hover:shadow-[0_0_24px_rgba(52,211,153,0.25)]"
          >
            Start for free
          </a>
        </div>

        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
          className="text-ink-primary md:hidden"
        >
          <MenuIcon />
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 md:hidden ${open ? "" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <div
          className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />
        <aside
          className={`absolute right-0 top-0 flex h-full w-72 max-w-[80%] flex-col gap-2 border-l border-line-default bg-surface-1 p-6 shadow-2xl transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <LogoIcon />
              <span className="font-display text-base font-semibold">Modo</span>
            </div>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="text-ink-secondary hover:text-ink-primary"
            >
              <CloseIcon />
            </button>
          </div>

          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 font-body text-base font-medium text-ink-secondary transition-colors hover:bg-surface-2 hover:text-ink-primary"
            >
              {link.label}
            </a>
          ))}

          <div className="mt-auto flex flex-col gap-3 pt-6">
            <a
              href="https://app.getmodo.pro"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-accent-green px-5 py-3 text-center font-display text-sm font-semibold text-surface-0"
            >
              Start for free
            </a>
          </div>
        </aside>
      </div>
    </header>
  );
}
