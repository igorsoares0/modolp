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
    // Sized for the Features headline column (360px on desktop). The caption
    // sits outside the scaled board so it stays legible, and nothing clips:
    // the rotated corners and paper shadows spill into the section padding.
    <figure className="mt-6 flex flex-col gap-4">
      <figcaption className="font-mono text-[10.5px] text-text-tertiary">
        FIG. 2 — MADE IN MODO
      </figcaption>
      <div className="relative h-[300px] sm:h-[440px] lg:h-[370px]">
        {/* The board's top 60px is empty; pull it up by that much × scale. */}
        <div className="absolute -top-9 left-1/2 h-[640px] w-[560px] origin-top -translate-x-1/2 scale-[0.6] sm:-top-[45px] sm:scale-75 lg:-top-[37px] lg:left-0 lg:origin-top-left lg:translate-x-0 lg:scale-[0.62]">
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
    </figure>
  );
}
