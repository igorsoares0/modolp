import type { ReactNode } from "react";

/**
 * Tinted pill used for both section eyebrows and the "Most popular" flag.
 * 11px / 500 / uppercase / 0.1em — the only label style in the system.
 */
export function Badge({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full bg-accent-tint px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.1em] text-accent-tint-fg ${className}`}
    >
      {children}
    </span>
  );
}

/** Alias kept for readability at section heads — same visual as Badge. */
export const Eyebrow = Badge;

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
      className={`inline-flex items-center justify-center rounded-md bg-accent px-5 py-2.5 text-[15px] font-medium text-accent-fg transition-colors duration-150 ease-standard hover:bg-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface-0 ${className}`}
    >
      {children}
    </a>
  );
}

export function GhostButton({
  href = "#",
  children,
  className = "",
  target,
}: ButtonProps) {
  return (
    <a
      href={href}
      {...externalProps(target)}
      className={`inline-flex items-center justify-center rounded-md border border-border-default bg-surface-2 px-5 py-2.5 text-[15px] text-text-primary transition-colors duration-150 ease-standard hover:border-border-strong hover:bg-surface-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface-0 ${className}`}
    >
      {children}
    </a>
  );
}
