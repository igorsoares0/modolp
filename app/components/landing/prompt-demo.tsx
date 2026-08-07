"use client";

import { useEffect, useState } from "react";
import { SparkleIcon } from "./icons";

const BRIEFS = [
  "launch post for a matcha café, warm and minimal",
  "black friday story, bold, high contrast",
  "pinterest pin for a yoga retreat",
];

/**
 * Non-interactive stand-in for the editor's AI bar. Types through a few real
 * briefs so the promise in the headline is visible before the fold.
 *
 * Renders the first brief in full on the server, so there's no empty flash and
 * no hydration mismatch — the typing only starts once the effect runs, and only
 * where it's wanted (motion allowed, viewport wide enough).
 */
export function PromptDemo() {
  const [typed, setTyped] = useState(BRIEFS[0]);

  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const narrow = window.matchMedia("(max-width: 639px)").matches;
    if (reduced || narrow) return;

    let brief = 0;
    let chars = BRIEFS[0].length;
    let direction = -1;
    let pause = 30;

    const timer = window.setInterval(() => {
      if (pause > 0) {
        pause -= 1;
        return;
      }

      chars += direction;

      if (chars >= BRIEFS[brief].length) {
        chars = BRIEFS[brief].length;
        direction = -1;
        pause = 38;
      } else if (chars <= 0) {
        chars = 0;
        direction = 1;
        brief = (brief + 1) % BRIEFS.length;
        pause = 8;
      }

      setTyped(BRIEFS[brief].slice(0, chars));
    }, 45);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="mt-8 flex w-full max-w-lg items-center gap-2.5 rounded-full border border-border-default bg-surface-2 px-5 py-3 text-left shadow-raise">
      <SparkleIcon
        aria-hidden="true"
        width={16}
        height={16}
        className="shrink-0 text-accent"
      />
      <span className="min-w-0 flex-1 truncate text-[14.5px] text-text-secondary">
        {typed}
        <span
          aria-hidden="true"
          className="ml-0.5 inline-block h-3.5 w-px translate-y-0.5 animate-caret bg-accent"
        />
      </span>
      <span className="font-mono text-[10px] font-medium text-text-ghost">
        4/5
      </span>
    </div>
  );
}
