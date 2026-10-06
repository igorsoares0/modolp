import type { ReactNode } from "react";

/**
 * Mono kicker that opens the hero and every section ("PRICING").
 * Plex Mono 500 12px, uppercase, 0.06em — the only label style on the page.
 */
export function Kicker({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`block font-mono text-[12px] font-medium uppercase tracking-[0.06em] text-text-tertiary ${className}`}
    >
      {children}
    </span>
  );
}

/** Alias kept for the content pages (/sizes, /vs) — same visual as Kicker. */
export const Eyebrow = Kicker;

/** The "modo." wordmark. The full stop is the only accent in it. */
export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`font-black tracking-[-0.02em] font-wide ${className}`}>
      modo<span className="text-accent">.</span>
    </span>
  );
}

type ButtonProps = {
  href?: string;
  children: ReactNode;
  className?: string;
  target?: string;
};

/** Adds safe rel when opening in a new tab. */
function externalProps(target?: string) {
  return target === "_blank"
    ? { target, rel: "noopener noreferrer" }
    : { target };
}

/** Riso-red CTA. Ink text on the red, never white (same as the app). */
export const primaryButton =
  "inline-flex items-center justify-center whitespace-nowrap bg-accent px-[18px] py-[11px] font-expanded text-[14px] font-extrabold uppercase tracking-[0.02em] text-accent-fg transition-colors duration-150 ease-standard hover:bg-accent-hover active:shadow-[inset_0_2px_0_rgb(0_0_0/0.25)]";

/** Ink-outlined CTA. Hover lifts to surface-3, pressed fills with ink. */
export const secondaryButton =
  "inline-flex items-center justify-center whitespace-nowrap border border-border-strong px-[18px] py-[10px] text-[14px] font-bold text-text-primary transition-colors duration-150 ease-standard hover:bg-surface-3 active:bg-surface-inverse active:text-text-inverse";

export function PrimaryButton({
  href = "#",
  children,
  className = "",
  target,
}: ButtonProps) {
  return (
    <a
      href={href}
      {...externalProps(target)}
      className={`${primaryButton} ${className}`}
    >
      {children}
    </a>
  );
}

export function SecondaryButton({
  href = "#",
  children,
  className = "",
  target,
}: ButtonProps) {
  return (
    <a
      href={href}
      {...externalProps(target)}
      className={`${secondaryButton} ${className}`}
    >
      {children}
    </a>
  );
}
