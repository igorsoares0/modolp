import { LayersIcon, TypeIcon, ImageIcon, SparkleIcon, AssetsIcon } from "./icons";

/**
 * Static, non-interactive mock of the Modo editor used as the hero visual.
 * Pure presentation — no Konva, no real canvas. pointer-events disabled so it
 * reads as an image, not a control surface.
 */
export function EditorMock() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none select-none overflow-hidden rounded-xl border border-line-default bg-surface-1 shadow-[0_40px_80px_rgba(0,0,0,0.7)]"
    >
      {/* Title bar */}
      <div className="flex items-center gap-2 border-b border-line-subtle bg-surface-2 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <div className="ml-4 flex gap-1 text-[11px] text-ink-tertiary">
          <span className="rounded-md bg-surface-3 px-2 py-1 text-ink-secondary">
            Summer Sale.modo
          </span>
        </div>
      </div>

      <div className="flex h-[300px] sm:h-[420px]">
        {/* Left tool rail */}
        <div className="hidden w-14 flex-col items-center gap-1 border-r border-line-subtle bg-surface-1 py-4 sm:flex">
          {[TypeIcon, ImageIcon, AssetsIcon, SparkleIcon, LayersIcon].map(
            (Icon, i) => (
              <div
                key={i}
                className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                  i === 0
                    ? "bg-surface-3 text-accent-green"
                    : "text-ink-tertiary"
                }`}
              >
                <Icon width={20} height={20} />
              </div>
            ),
          )}
        </div>

        {/* Canvas */}
        <div className="canvas-grid relative flex flex-1 items-center justify-center bg-surface-0 p-6">
          <div className="relative aspect-square w-full max-w-[260px] overflow-hidden rounded-lg shadow-[0_24px_64px_rgba(0,0,0,0.6)]">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-green via-accent-blue to-accent-pink" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25),transparent_55%)]" />
            <div className="absolute inset-0 flex flex-col justify-between p-5 text-surface-0">
              <span className="font-body text-[10px] font-semibold uppercase tracking-wider">
                Limited time
              </span>
              <div>
                <p className="font-display text-3xl font-bold leading-none">
                  Summer
                  <br />
                  Sale
                </p>
                <p className="mt-2 font-display text-xl font-bold">-40%</p>
              </div>
              <span className="self-start rounded-full bg-surface-0 px-3 py-1 font-display text-[10px] font-semibold text-ink-primary">
                Shop now →
              </span>
            </div>
            {/* selection handles */}
            <div className="absolute inset-0 rounded-lg ring-2 ring-accent-green/80" />
            {[
              "left-0 top-0",
              "right-0 top-0",
              "left-0 bottom-0",
              "right-0 bottom-0",
            ].map((pos) => (
              <span
                key={pos}
                className={`absolute h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-[2px] border border-accent-green bg-surface-0 ${pos}`}
                style={{
                  transform: "translate(-1px, -1px)",
                }}
              />
            ))}
          </div>
        </div>

        {/* Right properties panel */}
        <div className="hidden w-44 flex-col gap-3 border-l border-line-subtle bg-surface-1 p-4 lg:flex">
          <p className="font-body text-[10px] font-semibold uppercase tracking-wider text-ink-tertiary">
            Layers
          </p>
          {["Headline", "Discount", "Background", "Badge"].map((layer, i) => (
            <div
              key={layer}
              className={`flex items-center gap-2 rounded-md px-2 py-1.5 text-[11px] ${
                i === 0
                  ? "bg-surface-3 text-ink-primary"
                  : "text-ink-secondary"
              }`}
            >
              <LayersIcon width={13} height={13} className="text-ink-tertiary" />
              {layer}
            </div>
          ))}

          <div className="mt-2 border-t border-line-subtle pt-3">
            <p className="mb-2 font-body text-[10px] font-semibold uppercase tracking-wider text-ink-tertiary">
              Fill
            </p>
            <div className="flex gap-1.5">
              {["#34d399", "#60a5fa", "#f472b6", "#e8e8e8"].map((c) => (
                <span
                  key={c}
                  className="h-5 w-5 rounded-md border border-line-default"
                  style={{ background: c }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
