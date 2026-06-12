"use client";

import { useState } from "react";
import { PlusIcon } from "./icons";

const ITEMS = [
  {
    q: "Do I need to create an account to use Modo?",
    a: "No. Open Modo and start designing immediately — no account, no signup, no email required. Your projects are saved locally on your device from the first click.",
  },
  {
    q: "Where are my files stored?",
    a: "Locally on your device, in your browser. Modo doesn't upload your projects to any server. They're yours — not ours.",
  },
  {
    q: "Does it work without internet?",
    a: "Yes. Since your projects live on your device, you can open, edit, and export them entirely offline. A connection is only needed to load the app the first time.",
  },
  {
    q: "What formats can I export to?",
    a: "PNG and JPEG, with options for quality, resolution, and transparent background.",
  },
  {
    q: "Is this a subscription?",
    a: "The Pro plan is a one-time lifetime deal — you pay once and own it forever, including all future updates.",
  },
  {
    q: "Does Modo work on mobile?",
    a: "Modo is optimized for desktop browsers. Mobile support is on the roadmap.",
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div>
      {ITEMS.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.q} className="border-b border-line-subtle">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
            >
              <span className="font-display text-base font-medium text-ink-primary">
                {item.q}
              </span>
              <PlusIcon
                className={`shrink-0 text-ink-ghost transition-transform duration-300 ${
                  isOpen ? "rotate-45" : ""
                }`}
                width={18}
                height={18}
              />
            </button>
            <div
              className="grid overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="min-h-0">
                <p className="pb-5 pr-8 font-body text-sm leading-relaxed text-ink-secondary">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
