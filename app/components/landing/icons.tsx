import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = (props: IconProps) => ({
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  ...props,
});

/** Modo mark — iris tile with the canvas "M" cut out of it. */
export function LogoIcon(props: IconProps) {
  return (
    <svg
      width={26}
      height={26}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      {...props}
    >
      <rect x="0" y="0" width="24" height="24" rx="7" fill="var(--accent)" />
      <path
        d="M6.75 16.75V8l5.25 5.25L17.25 8v8.75"
        stroke="var(--accent-fg)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

/** Four-point star — the AI/generate mark used throughout the product. */
export function SparkleIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 4l1.9 4.6 4.6 1.9-4.6 1.9L12 17l-1.9-4.6L5.5 10.5l4.6-1.9z" />
    </svg>
  );
}

export function TemplatesIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
    </svg>
  );
}

export function FormatIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="4" y="4" width="16" height="16" rx="2.5" />
      <path d="M4 9h16M9 4v16" />
    </svg>
  );
}

export function TextIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M5 6.5V5h14v1.5M12 5v14M9 19h6" />
    </svg>
  );
}

export function ImageIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="4" y="4" width="16" height="16" rx="2.5" />
      <path d="M4 15l4-4 4 4 3-3 5 5" />
      <circle cx="9" cy="9" r="1.4" />
    </svg>
  );
}

export function ShapesIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="8.5" cy="8.5" r="4.5" />
      <rect x="11" y="11" width="9" height="9" rx="1.5" />
    </svg>
  );
}

export function LayersIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 3l9 5-9 5-9-5z" />
      <path d="M3 13l9 5 9-5" />
    </svg>
  );
}

export function CloudSyncIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M7 18a4 4 0 010-8 5.5 5.5 0 0110.5-1.5A3.75 3.75 0 0117.5 18z" />
    </svg>
  );
}

export function DownloadIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14" />
    </svg>
  );
}

export function BoltIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M13 3L5 13h6l-1 8 8-10h-6z" />
    </svg>
  );
}

export function SearchIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="11" cy="11" r="6" />
      <path d="M20 20l-4.5-4.5" />
    </svg>
  );
}

export function ChevronDownIcon(props: IconProps) {
  return (
    <svg {...base(props)} strokeWidth={2}>
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export function ArrowUpIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 19V5m0 0l-5 5m5-5l5 5" />
    </svg>
  );
}

export function UndoIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M3 8h11a5 5 0 010 10h-3" />
      <path d="M6.5 4.5L3 8l3.5 3.5" />
    </svg>
  );
}

export function RedoIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M21 8H10a5 5 0 000 10h3" />
      <path d="M17.5 4.5L21 8l-3.5 3.5" />
    </svg>
  );
}

export function CursorIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M5 3l14 8-6 1.6L10 19z" />
    </svg>
  );
}

export function UploadIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 16V4m0 0L7.5 8.5M12 4l4.5 4.5M4 19h16" />
    </svg>
  );
}

export function CircleIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="8" />
    </svg>
  );
}

export function LockIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="5" y="11" width="14" height="9" rx="2" />
      <path d="M8.5 11V8a3.5 3.5 0 017 0v3" />
    </svg>
  );
}

export function CopyIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="8" y="8" width="12" height="12" rx="2" />
      <path d="M16 8V6a2 2 0 00-2-2H6a2 2 0 00-2 2v8a2 2 0 002 2h2" />
    </svg>
  );
}

export function TrashIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M5 7h14M10 7V5h4v2M7 7l1 12h8l1-12" />
    </svg>
  );
}

export function AlignLeftIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 7h16M4 12h10M4 17h16" />
    </svg>
  );
}

export function AlignCenterIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 7h16M7 12h10M4 17h16" />
    </svg>
  );
}

export function AlignRightIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 7h16M10 12h10M4 17h16" />
    </svg>
  );
}

export function MinusIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M6 12h12" />
    </svg>
  );
}

export function PlusIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 6v12M6 12h12" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...base(props)} strokeWidth={2}>
      <path d="M4 12.5 9 17.5 20 6.5" />
    </svg>
  );
}
