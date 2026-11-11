"use client";

import { useId, useState } from "react";
import { LTD_PRICE, REFUND_DAYS } from "../../lib/site";

const ITEMS = [
  {
    q: "Is it really a one-time payment?",
    a: `Yes. ${LTD_PRICE} once, for a lifetime license — no subscription, nothing renews, and the updates we ship are included. "Lifetime" means for as long as Modo exists.`,
  },
  {
    q: "Do I need an account?",
    a: "No. There's nothing to sign up for. You activate Modo with the license key from your purchase email, and that's it.",
  },
  {
    q: "Where is my work stored?",
    a: "In your browser, on your device. Your projects and uploads never touch our servers, and the editor keeps working offline. To move to another computer or keep a safety copy, back everything up to one file from Settings and restore it anywhere.",
  },
  {
    q: "How does the AI work if there are no credits?",
    a: "You paste your own Anthropic API key into Modo's settings, and briefs go straight from your browser to Anthropic on your account. A brief typically costs about a cent. We never see your key or your briefs.",
  },
  {
    q: "What exactly does the AI do?",
    a: "You write a short brief. Modo picks the template that best fits it, then generates the text for every slot, the color palette, the font pairing, the sizing and the background treatment. Everything it produces is a normal editable layer — you can change any part of it.",
  },
  {
    q: "Can I use it on more than one computer?",
    a: "Yes — the license is yours to activate on all of your own devices and browsers. Each device keeps its own projects; move them with a backup file.",
  },
  {
    q: "What if it's not for me?",
    a: `Ask for a refund within ${REFUND_DAYS} days of buying and you get the full amount back, no questions asked.`,
  },
  {
    q: "I bought Modo on AppSumo. How do I activate it?",
    a: "Use the Activate button on your AppSumo product page. It brings you back to Modo with the license already activated.",
  },
  {
    q: "What formats can I export to?",
    a: "PNG and JPEG, with quality, resolution and transparent-background options — plus the .modo project file, images included, if you want a backup or want to hand the file to someone.",
  },
  {
    q: "Can I install it?",
    a: "Yes — Modo installs as an app from your browser, on desktop and on mobile, and works without a connection once it's loaded.",
  },
  {
    q: "Which browsers are supported?",
    a: "Chrome, Edge, Firefox and Safari. The editor is built for desktop; it runs on mobile, but the experience is designed for a larger canvas.",
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  return (
    <div className="border-b border-border-default">
      {ITEMS.map((item, i) => {
        const isOpen = openIndex === i;
        const panelId = `${baseId}-panel-${i}`;
        const buttonId = `${baseId}-button-${i}`;

        return (
          <div key={item.q} className="border-t border-border-default">
            <button
              type="button"
              id={buttonId}
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              aria-controls={panelId}
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
            >
              <span className="text-[16px] font-bold text-text-primary">
                {item.q}
              </span>
              <span
                aria-hidden="true"
                className="w-4 shrink-0 text-center font-mono text-[16px] text-text-tertiary"
              >
                {isOpen ? "−" : "+"}
              </span>
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className="grid overflow-hidden transition-[grid-template-rows] duration-150 ease-standard"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="min-h-0">
                <p className="max-w-[40rem] pb-5 pr-8 text-[15px] leading-[1.6] text-text-secondary [text-wrap:pretty]">
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
