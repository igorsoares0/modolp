import type { ReactNode } from "react";

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-accent-green/15 bg-accent-green/[0.08] px-3 py-1 font-body text-[11px] font-semibold uppercase tracking-wider text-accent-green">
      {children}
    </span>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="font-body text-[11px] font-semibold uppercase tracking-wider text-accent-green">
      {children}
    </p>
  );
}

type ButtonProps = {
  href?: string;
  children: ReactNode;
  className?: string;
};

export function PrimaryButton({ href = "#", children, className = "" }: ButtonProps) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-lg bg-accent-green px-6 py-3 font-display text-sm font-semibold text-surface-0 transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-accent-green-hover hover:shadow-[0_0_32px_rgba(52,211,153,0.25)] ${className}`}
    >
      {children}
    </a>
  );
}

export function GhostButton({ href = "#", children, className = "" }: ButtonProps) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-lg border border-line-default bg-surface-2 px-5 py-2.5 font-body text-sm font-medium text-ink-primary transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-line-strong hover:bg-surface-3 ${className}`}
    >
      {children}
    </a>
  );
}
