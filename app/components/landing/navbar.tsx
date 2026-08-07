"use client";

import { useEffect, useState } from "react";
import { LogoIcon, MenuIcon, CloseIcon } from "./icons";
import { LOGIN_URL, SIGNUP_URL } from "../../lib/site";

const LINKS = [
  { label: "Features", href: "#features" },
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
      className={`fixed inset-x-0 top-0 z-50 border-b border-border-subtle backdrop-blur-xl transition-colors duration-300 ease-standard ${
        scrolled ? "bg-surface-1/90" : "bg-surface-0/80"
      }`}
    >
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-6 px-6">
        <a href="#top" className="flex items-center gap-2.5 text-text-primary">
          <LogoIcon />
          <span className="text-[15px] font-semibold tracking-[-0.01em]">
            Modo
          </span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-text-secondary transition-colors duration-150 ease-standard hover:text-text-primary"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2.5 md:flex">
          <a
            href={LOGIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-border-default bg-surface-2 px-4 py-1.5 text-sm text-text-primary transition-colors duration-150 ease-standard hover:border-border-strong hover:bg-surface-4"
          >
            Sign in
          </a>
          <a
            href={SIGNUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-accent-fg transition-colors duration-150 ease-standard hover:bg-accent-hover"
          >
            Start free
          </a>
        </div>

        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
          className="text-text-primary md:hidden"
        >
          <MenuIcon width={22} height={22} />
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 md:hidden ${open ? "" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />
        <aside
          className={`absolute right-0 top-0 flex h-full w-72 max-w-[80%] flex-col gap-1 border-l border-border-default bg-surface-1 p-6 shadow-pop transition-transform duration-300 ease-standard ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <LogoIcon />
              <span className="text-[15px] font-semibold">Modo</span>
            </div>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="text-text-secondary hover:text-text-primary"
            >
              <CloseIcon width={22} height={22} />
            </button>
          </div>

          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-3 text-base text-text-secondary transition-colors duration-150 ease-standard hover:bg-surface-4 hover:text-text-primary"
            >
              {link.label}
            </a>
          ))}

          <div className="mt-auto flex flex-col gap-3 pt-6">
            <a
              href={LOGIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-border-default bg-surface-2 px-5 py-2.5 text-center text-[15px] text-text-primary"
            >
              Sign in
            </a>
            <a
              href={SIGNUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-accent px-5 py-2.5 text-center text-[15px] font-medium text-accent-fg"
            >
              Start free
            </a>
          </div>
        </aside>
      </div>
    </header>
  );
}
