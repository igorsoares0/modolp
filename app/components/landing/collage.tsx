import Image from "next/image";

/**
 * "FIG. 1 — MADE IN MODO": three real templates, exported from the editor's
 * own renderer (Konva) at 2× their size here, overlapped and rotated.
 *
 * Laid out on a fixed 560×640 board (the mock's coordinates) and scaled as a
 * whole per breakpoint, so the composition never reflows. The posts are
 * documents, not chrome: they keep their own colours in dark mode.
 */

type Post = {
  src: string;
  alt: string;
  width: number;
  height: number;
  left: number;
  top: number;
  rotate: string;
  /** Dropped on phones, where three posts crowd the board. */
  hideOnPhone?: boolean;
};

const POSTS: Post[] = [
  {
    src: "/collage/word-of-the-day.png",
    alt: "Instagram post made with Modo's Word of the Day template",
    width: 340,
    height: 340,
    left: 0,
    top: 70,
    rotate: "-3deg",
  },
  {
    src: "/collage/ask-me.png",
    alt: "Instagram story made with Modo's Ask Me template",
    width: 200,
    height: 356,
    left: 266,
    top: 150,
    rotate: "4deg",
  },
  {
    src: "/collage/botanica.png",
    alt: "Instagram post made with Modo's Botanica template",
    width: 220,
    height: 220,
    left: 86,
    top: 390,
    rotate: "2deg",
    hideOnPhone: true,
  },
];

export function Collage() {
  return (
    <div className="relative h-[420px] overflow-hidden sm:h-[520px] lg:h-[620px] xl:h-[680px]">
      <div className="absolute left-1/2 top-0 h-[640px] w-[560px] origin-top -translate-x-1/2 scale-[0.62] sm:scale-75 md:left-6 md:translate-x-0 md:origin-top-left lg:left-10 lg:scale-[0.875] xl:left-16 xl:scale-100">
        <span className="absolute left-0 top-[46px] font-mono text-[10.5px] text-text-tertiary">
          FIG. 1 — MADE IN MODO
        </span>

        {POSTS.map((post, i) => (
          <div
            key={post.src}
            className={`collage-post absolute shadow-paper ${post.hideOnPhone ? "hidden sm:block" : ""}`}
            style={
              {
                left: post.left,
                top: post.top,
                width: post.width,
                height: post.height,
                "--r": post.rotate,
                animationDelay: `${120 + i * 80}ms`,
              } as React.CSSProperties
            }
          >
            <Image
              src={post.src}
              alt={post.alt}
              width={post.width}
              height={post.height}
              // Already exported at 2× the displayed size; nothing to optimise.
              unoptimized
              // Above the fold: all three load eagerly, the largest first.
              // (`priority` is deprecated in Next 16 and clashes with `loading`.)
              loading="eager"
              fetchPriority={i === 0 ? "high" : "auto"}
              className="block h-full w-full"
            />
          </div>
        ))}

        {/* Dimension badge — the canvas's selection badge, in cobalt. */}
        <div className="absolute left-[312px] top-[120px] flex h-[22px] whitespace-nowrap bg-selection font-mono text-[10.5px] font-medium text-white">
          <span className="flex items-center px-[7px]">STORY</span>
          <span className="flex items-center border-l border-white/30 px-[7px] tabular-nums">
            1080 × 1920
          </span>
        </div>
      </div>
    </div>
  );
}
