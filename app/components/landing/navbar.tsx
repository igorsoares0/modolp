"use client";

import { useState } from "react";
import { MenuIcon, CloseIcon } from "./icons";
import { Wordmark } from "./primitives";
import { LOGIN_URL, SIGNUP_URL } from "../../lib/site";

const LINKS = [
  { label: "Templates", href: "#templates" },
  { label: "AI briefs", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
];

/** Full-height cells split by hairlines — the app's topbar, not pill groups. */
const cell = "flex items-center border-border-default";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border-default bg-surface-1">
      <nav className="mx-auto flex h-14 max-w-[1440px] items-stretch whitespace-nowrap">
        <a
          href="#top"
          className={`${cell} border-r px-5 text-[19px] text-text-primary sm:px-7`}
        >
          <Wordmark />
        </a>

        <div className="hidden items-stretch md:flex">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`${cell} px-5 text-[14px] text-text-secondary transition-colors duration-150 ease-standard hover:text-text-primary`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex-1" />

        <a
          href={LOGIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={`${cell} hidden border-l px-6 text-[14px] font-semibold text-text-primary transition-colors duration-150 ease-standard hover:bg-surface-3 md:flex`}
        >
          Log in
        </a>
        <a
          href={SIGNUP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={`${cell} bg-accent px-5 font-expanded text-[14px] font-extrabold uppercase tracking-[0.02em] text-accent-fg transition-colors duration-150 ease-standard hover:bg-accent-hover sm:px-7`}
        >
          Start free
        </a>
        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
          className={`${cell} justify-center border-l px-4 text-text-primary md:hidden`}
        >
          <MenuIcon width={20} height={20} />
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
          className={`absolute right-2 top-2 flex w-72 max-w-[85%] flex-col rounded-float border border-border-default bg-surface-1 shadow-pop transition-[opacity,transform] duration-200 ease-standard ${
            open ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
          }`}
        >
          <div className="flex h-14 items-center justify-between border-b border-border-default pl-5">
            <span className="text-[19px]">
              <Wordmark />
            </span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="flex h-14 w-14 items-center justify-center text-text-secondary hover:text-text-primary"
            >
              <CloseIcon width={20} height={20} />
            </button>
          </div>

          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-border-default px-5 py-4 text-[15px] text-text-secondary transition-colors duration-150 ease-standard hover:bg-surface-3 hover:text-text-primary"
            >
              {link.label}
            </a>
          ))}

          <a
            href={LOGIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-4 text-[15px] font-semibold text-text-primary hover:bg-surface-3"
          >
            Log in
          </a>
        </aside>
      </div>
    </header>
  );
}
