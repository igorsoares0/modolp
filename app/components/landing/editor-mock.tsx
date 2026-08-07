"use client";

import { useEffect, useRef } from "react";
import {
  AlignCenterIcon,
  AlignLeftIcon,
  AlignRightIcon,
  ArrowUpIcon,
  ChevronDownIcon,
  CircleIcon,
  CopyIcon,
  CursorIcon,
  DownloadIcon,
  ImageIcon,
  LockIcon,
  LogoIcon,
  MinusIcon,
  PlusIcon,
  RedoIcon,
  SearchIcon,
  SparkleIcon,
  TemplatesIcon,
  TextIcon,
  TrashIcon,
  UndoIcon,
  UploadIcon,
} from "./icons";

/** The mock is authored at this fixed size and scaled to fit its column. */
const MOCK_WIDTH = 1280;
const MOCK_HEIGHT = 760;

/**
 * Which slice of the mock to show. On a phone the whole editor shrinks to ~27%
 * and every panel turns into unreadable noise, so below `sm` we frame just the
 * canvas region — the document and the AI bar, the two things the hero is
 * actually claiming — at nearly double that scale.
 *
 * x/y are the canvas region's offset inside the mock: 56px tool rail + 252px
 * templates panel across, 52px topbar down.
 */
const FULL = { x: 0, y: 0, w: MOCK_WIDTH, h: MOCK_HEIGHT };
const CANVAS_ONLY = { x: 308, y: 52, w: 706, h: 708 };
const NARROW = "(max-width: 639px)";

/**
 * A hand-built replica of the editor, not a screenshot — so it stays crisp at
 * any width and follows light/dark without shipping two images.
 *
 * The chrome uses design tokens. The artwork *inside* the canvas keeps literal
 * colors on purpose: that's a user's document, and a document doesn't repaint
 * itself when the OS switches theme.
 */
export function EditorMock() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const inner = innerRef.current;
    if (!wrap || !inner) return;

    // The aspect ratio comes from CSS (so there's no wrong-shape flash before
    // hydration); this only has to place and scale the slice inside it.
    let lastWidth = -1;
    let lastNarrow: boolean | null = null;

    const fit = () => {
      const width = wrap.clientWidth;
      const narrow = window.matchMedia(NARROW).matches;
      // Guard: the observer also fires on the height change we cause below.
      if (width === lastWidth && narrow === lastNarrow) return;
      lastWidth = width;
      lastNarrow = narrow;

      const view = narrow ? CANVAS_ONLY : FULL;
      const scale = width / view.w;
      inner.style.transform = `scale(${scale}) translate(${-view.x}px, ${-view.y}px)`;
    };

    fit();
    const observer = new ResizeObserver(fit);
    observer.observe(wrap);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={wrapRef}
      role="img"
      aria-label="The Modo editor, with an AI-generated Instagram post for a matcha café open on the canvas and the AI prompt bar below it."
      className="relative aspect-[706/708] w-full animate-canvas-appear overflow-hidden rounded-xl border border-border-default shadow-canvas sm:aspect-[1280/760]"
    >
      <div
        ref={innerRef}
        aria-hidden="true"
        className="absolute left-0 top-0 flex origin-top-left flex-col bg-surface-0 text-text-primary"
        style={{ width: MOCK_WIDTH, height: MOCK_HEIGHT }}
      >
        {/* ── Top bar ─────────────────────────────────────────────── */}
        <div className="flex h-[52px] flex-none items-center gap-3.5 border-b border-border-default bg-surface-1 px-3.5">
          <div className="flex items-center gap-2.5">
            <LogoIcon width={26} height={26} />
            <span className="text-[13px] font-semibold">matcha-launch</span>
            <span className="text-[11px] text-text-tertiary">Instagram Post</span>
            <span className="rounded-full bg-success/15 px-2 py-[3px] font-mono text-[10px] font-medium text-success">
              Saved
            </span>
          </div>

          <div className="flex-1" />

          <div className="flex items-center gap-1.5 rounded-[9px] bg-surface-4 p-[3px]">
            <div className="flex items-center gap-1.5 rounded-[7px] bg-surface-2 px-2.5 py-[5px] text-[11.5px] font-medium shadow-raise">
              1080 × 1080
              <ChevronDownIcon
                width={11}
                height={11}
                className="text-text-tertiary"
              />
            </div>
            <div className="mx-0.5 h-4 w-px bg-border-default" />
            <div className="grid h-[26px] w-7 place-items-center rounded-[7px] bg-surface-2 shadow-raise">
              <CursorIcon width={15} height={15} />
            </div>
            <div className="grid h-[26px] w-7 place-items-center rounded-[7px] text-text-secondary">
              <UndoIcon width={15} height={15} />
            </div>
            <div className="grid h-[26px] w-7 place-items-center rounded-[7px] text-text-ghost">
              <RedoIcon width={15} height={15} />
            </div>
          </div>

          <div className="flex-1" />

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-[7px] rounded-md bg-accent-tint px-2.5 py-[5px] text-[11.5px] font-medium text-accent-tint-fg">
              <SparkleIcon width={14} height={14} />
              Upgrade
            </div>
            <div className="flex items-center gap-[7px] rounded-md bg-accent px-3 py-1.5 text-[11.5px] font-medium text-accent-fg">
              <DownloadIcon width={14} height={14} />
              Export
            </div>
            <div className="grid h-[27px] w-[27px] place-items-center rounded-full bg-surface-4 text-[11px] font-medium text-text-secondary">
              JP
            </div>
          </div>
        </div>

        <div className="flex min-h-0 flex-1">
          {/* ── Tool rail ─────────────────────────────────────────── */}
          <div className="flex w-14 flex-none flex-col items-center gap-1 border-r border-border-default bg-surface-1 py-2.5">
            <div className="grid h-[38px] w-[38px] place-items-center rounded-[10px] bg-accent text-accent-fg">
              <TemplatesIcon width={18} height={18} />
            </div>
            {[UploadIcon, TextIcon, CircleIcon, ImageIcon].map((Icon, i) => (
              <div
                key={i}
                className="grid h-[38px] w-[38px] place-items-center rounded-[10px] text-text-secondary"
              >
                <Icon width={18} height={18} />
              </div>
            ))}
            <div className="my-1.5 h-px w-6 bg-border-strong" />
            <div className="grid h-[38px] w-[38px] place-items-center rounded-[10px] bg-accent-tint text-accent">
              <SparkleIcon width={18} height={18} />
            </div>
          </div>

          {/* ── Templates panel ───────────────────────────────────── */}
          <div className="flex w-[252px] min-h-0 flex-none flex-col border-r border-border-default bg-surface-1">
            <div className="flex flex-col gap-2.5 px-3.5 pb-2.5 pt-3.5">
              <div className="text-[12.5px] font-semibold">Templates</div>
              <div className="flex items-center gap-2 rounded-md border border-border-default bg-surface-2 px-2.5 py-1.5">
                <SearchIcon
                  width={13}
                  height={13}
                  className="text-text-tertiary"
                />
                <span className="text-[11.5px] text-text-tertiary">
                  Search 52 templates
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                <span className="rounded-full bg-text-primary px-2.5 py-1 text-[11px] font-medium text-surface-2">
                  All
                </span>
                {["Editorial", "Promo", "Quote"].map((c) => (
                  <span
                    key={c}
                    className="rounded-full bg-surface-4 px-2.5 py-1 text-[11px] font-medium text-text-secondary"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid min-h-0 flex-1 grid-cols-2 content-start gap-2.5 overflow-hidden px-3.5 pb-3.5 pt-0.5">
              <div className="grid aspect-square place-items-center rounded-[9px] border-2 border-accent bg-[#f4f1ea] font-doc-serif text-[15px] text-[#2b2620]">
                sonder
              </div>
              <div className="grid aspect-square place-items-center rounded-[9px] bg-[#1d2a2b] text-[11px] font-medium tracking-[0.14em] text-[#e6ded1]">
                NEW
              </div>
              <div className="flex aspect-square items-end rounded-[9px] bg-[#e8dcd0] p-2.5 font-doc-serif text-[13px] text-[#5a4638]">
                Menu
              </div>
              <div className="grid aspect-square place-items-center rounded-[9px] bg-[linear-gradient(160deg,#312a4d,#5b5bd6)] text-[12px] font-semibold text-white">
                50% OFF
              </div>
              <div className="grid aspect-square place-items-center rounded-[9px] border border-border-default bg-surface-3 text-[12px] text-text-tertiary">
                Quote
              </div>
              <div className="grid aspect-square place-items-center rounded-[9px] bg-[#c9553d] text-[12px] font-semibold text-[#fff2ea]">
                Event
              </div>
              <div className="grid aspect-square place-items-center rounded-[9px] bg-[#dfe6e2] font-doc-serif text-[12px] text-[#3c4a44]">
                Before/After
              </div>
              <div className="grid aspect-square place-items-center rounded-[9px] bg-[#1b1a18] text-[11px] font-medium text-[#f7f6f3]">
                Dark Ad
              </div>
            </div>
          </div>

          {/* ── Canvas ────────────────────────────────────────────── */}
          <div className="relative grid min-w-0 flex-1 place-items-center bg-surface-0">
            <div className="relative">
              {/* The document itself — literal colors, not tokens. */}
              <div className="box-border flex h-[392px] w-[392px] flex-col items-center justify-center gap-3 rounded-sm bg-[#f4f1ea] p-[34px] shadow-canvas">
                <div className="h-px w-[230px] bg-[#2b2620]/20" />
                <div className="text-[8px] font-medium tracking-[0.34em] text-[#8a7f70]">
                  MATCHA CLUB
                </div>

                {/* Selected text layer */}
                <div className="relative mt-1">
                  <div className="px-1.5 font-doc-serif text-[62px] leading-none text-[#2b2620]">
                    slow mornings
                  </div>
                  <div className="pointer-events-none absolute -inset-y-[9px] -inset-x-0.5 rounded-sm border-[1.5px] border-accent" />
                  {[
                    "-left-[13px] -top-[13px]",
                    "-right-[13px] -top-[13px]",
                    "-bottom-[13px] -left-[13px]",
                    "-bottom-[13px] -right-[13px]",
                  ].map((pos) => (
                    <div
                      key={pos}
                      className={`absolute ${pos} h-[7px] w-[7px] rounded-sm border-[1.5px] border-accent bg-surface-2`}
                    />
                  ))}
                </div>

                <div className="mt-2.5 h-px w-[70px] bg-[#2b2620]/15" />
                <div className="max-w-[250px] text-center font-doc-serif text-[15px] leading-[1.5] text-[#4a423a] [text-wrap:pretty]">
                  Ceremonial grade, whisked by hand. Opening Saturday at eight.
                </div>
                <div className="mt-1.5 font-doc-serif text-[10px] italic text-[#a1968a]">
                  — 24 Alder Street
                </div>
                <div className="mt-1.5 h-px w-[230px] bg-[#2b2620]/20" />
              </div>

              {/* Floating toolbar for the selected layer */}
              <div className="absolute left-1/2 top-[22px] flex -translate-x-1/2 items-center gap-0.5 whitespace-nowrap rounded-[11px] border border-border-default bg-surface-2 p-1 shadow-pop">
                <div className="flex items-center gap-1.5 rounded-md bg-accent-tint px-2.5 py-[5px] text-[11px] font-medium text-accent-tint-fg">
                  <TextIcon width={13} height={13} />
                  Playfair Display
                </div>
                <div className="grid h-[26px] w-[26px] place-items-center rounded-md">
                  <div className="h-[13px] w-[13px] rounded-full border border-border-strong bg-[#2b2620]" />
                </div>
                <div className="mx-[3px] h-4 w-px bg-border-default" />
                {[CopyIcon, LockIcon].map((Icon, i) => (
                  <div
                    key={i}
                    className="grid h-[26px] w-[26px] place-items-center rounded-md text-text-secondary"
                  >
                    <Icon width={14} height={14} />
                  </div>
                ))}
                <div className="grid h-[26px] w-[26px] place-items-center rounded-md text-danger">
                  <TrashIcon width={14} height={14} />
                </div>
              </div>
            </div>

            {/* Zoom control */}
            <div className="absolute bottom-3.5 left-4 flex items-center gap-[3px] rounded-[10px] border border-border-default bg-surface-2 px-[5px] py-1 shadow-raise">
              <div className="grid h-6 w-6 place-items-center rounded-[7px] text-text-secondary">
                <MinusIcon width={14} height={14} />
              </div>
              <div className="min-w-9 text-center font-mono text-[11px] font-medium tabular-nums">
                52%
              </div>
              <div className="grid h-6 w-6 place-items-center rounded-[7px] text-text-secondary">
                <PlusIcon width={14} height={14} />
              </div>
              <div className="mx-[3px] h-[15px] w-px bg-border-default" />
              <div className="px-1.5 text-[11px] font-medium text-text-secondary">
                Fit
              </div>
            </div>

            {/* AI bar */}
            <div className="absolute bottom-3.5 left-1/2 box-border flex w-[330px] -translate-x-1/2 items-center gap-2.5 rounded-full border border-border-default bg-surface-2 py-1.5 pl-3.5 pr-1.5 shadow-pop">
              <SparkleIcon width={14} height={14} className="text-accent" />
              <span className="flex-1 text-[11.5px] text-text-tertiary">
                Describe a post…
              </span>
              <span className="font-mono text-[10px] font-medium text-text-tertiary">
                4/5
              </span>
              <div className="grid h-[26px] w-[26px] place-items-center rounded-full bg-accent text-accent-fg">
                <ArrowUpIcon width={13} height={13} strokeWidth={1.8} />
              </div>
            </div>
          </div>

          {/* ── Properties panel ──────────────────────────────────── */}
          <div className="flex w-[266px] min-h-0 flex-none flex-col border-l border-border-default bg-surface-1">
            <div className="flex gap-0.5 px-2.5 pt-2">
              <div className="flex-1 rounded-t-md bg-surface-2 py-1.5 text-center text-[11.5px] font-medium">
                Properties
              </div>
              <div className="flex-1 py-1.5 text-center text-[11.5px] text-text-tertiary">
                Layers
              </div>
            </div>

            <div className="flex min-h-0 flex-1 flex-col overflow-hidden bg-surface-2">
              <div className="flex flex-col gap-2.5 border-b border-border-subtle p-3.5">
                <span className="text-[10px] font-medium tracking-[0.1em] text-text-tertiary">
                  POSITION &amp; SIZE
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    ["X", "305.5", false],
                    ["Y", "320", false],
                    ["W", "469", true],
                    ["H", "180", false],
                  ].map(([label, value, focused]) => (
                    <div
                      key={label as string}
                      className={`flex items-center gap-[7px] rounded-md px-2.5 ${
                        focused
                          ? "border-[1.5px] border-accent bg-surface-2 py-[5.5px]"
                          : "border border-border-subtle bg-surface-3 py-1.5"
                      }`}
                    >
                      <span className="font-mono text-[10px] text-text-ghost">
                        {label}
                      </span>
                      <span className="font-mono text-[11.5px] font-medium tabular-nums">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="relative h-1 rounded-full bg-surface-4">
                  <div className="absolute inset-0 rounded-full bg-accent" />
                  <div className="absolute -right-1 -top-1 h-3 w-3 rounded-full border-[1.5px] border-accent bg-surface-2" />
                </div>
              </div>

              <div className="flex flex-col gap-2.5 border-b border-border-subtle p-3.5">
                <span className="text-[10px] font-medium tracking-[0.1em] text-text-tertiary">
                  TYPOGRAPHY
                </span>
                <div className="flex items-center justify-between rounded-md border border-border-subtle bg-surface-3 px-2.5 py-[7px]">
                  <span className="font-doc-serif text-[13px]">
                    Playfair Display
                  </span>
                  <ChevronDownIcon
                    width={12}
                    height={12}
                    className="text-text-ghost"
                  />
                </div>
                <div className="flex gap-2">
                  <div className="flex flex-1 items-center gap-[7px] rounded-md border border-border-subtle bg-surface-3 px-2.5 py-1.5">
                    <span className="font-mono text-[10px] text-text-ghost">
                      Aa
                    </span>
                    <span className="font-mono text-[11.5px] font-medium tabular-nums">
                      96
                    </span>
                  </div>
                  <div className="flex gap-0.5 rounded-md border border-border-subtle bg-surface-3 p-[3px]">
                    {[AlignLeftIcon, AlignCenterIcon, AlignRightIcon].map(
                      (Icon, i) => (
                        <div
                          key={i}
                          className={`grid h-[22px] w-[26px] place-items-center rounded-[6px] ${
                            i === 0
                              ? "bg-surface-2 text-text-primary"
                              : "text-text-tertiary"
                          }`}
                        >
                          <Icon width={13} height={13} />
                        </div>
                      ),
                    )}
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2.5 p-3.5">
                <span className="text-[10px] font-medium tracking-[0.1em] text-text-tertiary">
                  COLOR
                </span>
                <div className="flex items-center gap-2.5 rounded-md border border-border-subtle bg-surface-3 px-2.5 py-1.5">
                  <div className="h-5 w-5 rounded-[6px] border border-border-strong bg-[#2b2620]" />
                  <span className="font-mono text-[11.5px] font-medium">
                    #2B2620
                  </span>
                  <div className="flex-1" />
                  <span className="font-mono text-[11px] font-medium tabular-nums text-text-ghost">
                    100%
                  </span>
                </div>
                <span className="text-[10px] text-text-tertiary">
                  Document palette
                </span>
                <div className="flex flex-wrap gap-[7px]">
                  {["#2b2620", "#f4f1ea", "#8a7f70", "#c9553d", "#5b5bd6"].map(
                    (hex) => (
                      <div
                        key={hex}
                        className="h-6 w-6 rounded-full ring-1 ring-border-default"
                        style={{ background: hex }}
                      />
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
