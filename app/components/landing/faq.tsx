"use client";

import { useId, useState } from "react";
import { PlusIcon } from "./icons";

const ITEMS = [
  {
    q: "Do I need an account?",
    a: "Yes. Modo saves your projects and uploads to your account so they're on every device you sign in from. Signing up takes an email, a password and one click on the confirmation link we send you.",
  },
  {
    q: "Is the free plan a trial?",
    a: "No. It's free forever — unlimited projects, watermark-free exports, and 5 AI generations every month. You only upgrade if you need more AI or more storage.",
  },
  {
    q: "What exactly does the AI do?",
    a: "You write a short brief. Modo picks the template that best fits it, then generates the text for every slot, the color palette, the font pairing, the sizing and the background treatment. Everything it produces is a normal editable layer — you can change any part of it.",
  },
  {
    q: "Do free exports have a watermark?",
    a: "No. Exports are clean on every plan.",
  },
  {
    q: "What formats can I export to?",
    a: "PNG and JPEG, with quality, resolution and transparent-background options — plus the .modo project file if you want a backup or want to hand the file to someone.",
  },
  {
    q: "What counts against my storage?",
    a: "Only the images you upload. Projects themselves don't count against it. Free gives you 250 MB, Pro 1 GB, and there's a storage meter in the app so you always know where you stand.",
  },
  {
    q: "Can I install it?",
    a: "Yes — Modo installs as an app from your browser, on desktop and on mobile. And if your connection drops while you're working, the editor keeps going and syncs your changes when you're back online.",
  },
  {
    q: "Is it a subscription?",
    a: "Pro is $10/month, billed through Paddle. Cancel any time from your account — you keep Pro until the end of the period you've paid for.",
  },
  {
    q: "Does Modo work on mobile?",
    a: "The editor is built for desktop browsers. It runs on mobile, but the experience is designed for a larger canvas.",
  },
  {
    q: "Which browsers are supported?",
    a: "Chrome, Edge, Firefox and Safari.",
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  return (
    <div>
      {ITEMS.map((item, i) => {
        const isOpen = openIndex === i;
        const panelId = `${baseId}-panel-${i}`;
        const buttonId = `${baseId}-button-${i}`;

        return (
          <div key={item.q} className="border-b border-border-subtle">
            <button
              type="button"
              id={buttonId}
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              aria-controls={panelId}
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
            >
              <span className="text-[15px] font-medium text-text-primary">
                {item.q}
              </span>
              <PlusIcon
                aria-hidden="true"
                className={`shrink-0 text-text-ghost transition-transform duration-300 ease-standard ${
                  isOpen ? "rotate-45" : ""
                }`}
                width={18}
                height={18}
              />
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className="grid overflow-hidden transition-all duration-300 ease-standard"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="min-h-0">
                <p className="max-w-[40rem] pb-5 pr-8 text-[13.5px] leading-[1.65] text-text-secondary [text-wrap:pretty]">
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
