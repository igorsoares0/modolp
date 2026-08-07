# modolp — Modo landing page

The public marketing site for **Modo**, the browser-based AI design editor.
This repo is the landing page and the legal pages only — **the editor itself
lives in a separate repo** and is served from `app.getmodo.pro`. Every CTA here
links out to it.

- Production: <https://getmodo.pro>
- Editor: <https://app.getmodo.pro>

## Stack

Next.js 16 (App Router) · React 19 · Tailwind CSS v4 · TypeScript.

No database, no API routes, no client-side state beyond three small
`"use client"` components. Every route is statically prerendered.

> **This is not the Next.js you may remember.** See `AGENTS.md` — read the
> relevant guide in `node_modules/next/dist/docs/` before writing code against
> an API you're recalling from memory.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm run lint
```

### Serving a production build locally

`next start` **does not work** in this repo — `next.config.ts` sets
`output: "standalone"`, and `next start` will happily boot while serving a dev
bundle with the devtools client injected. Use the same path the Dockerfile does:

```bash
npm run build
cp -r .next/static .next/standalone/.next/
cp -r public .next/standalone/
node .next/standalone/server.js
```

### No HMR in this checkout

The repo lives on `/mnt/c` under WSL2, where file-change events don't reach the
watcher. Restart `next dev` to see any edit.

## Layout

```
app/
  page.tsx                     the whole landing page, section by section
  layout.tsx                   fonts + metadata + viewport
  globals.css                  the design system (see below)
  opengraph-image.tsx          1200×630 social card, generated at build
  robots.ts · sitemap.ts
  lib/site.ts                  canonical origin, app URLs, Pro price
  components/landing/
    navbar.tsx                 fixed nav + mobile drawer
    editor-mock.tsx            hand-built replica of the editor (hero visual)
    prompt-demo.tsx            the typing AI-bar stand-in
    faq.tsx · reveal.tsx · primitives.tsx · icons.tsx
  components/legal/legal-page.tsx    shared chrome for the three legal pages
  terms/ · privacy/ · refund/
designdocs/                    copy, page spec, design tokens, design comps
```

## Design system

The source of truth is `designdocs/design-tokens.md` ("Daylight / Íris"), and
`app/globals.css` implements it. Two rules worth knowing before you touch it:

**1. Light is the theme; dark is opt-in.** Dark values live under a `.dark`
class on the root element and are deliberately *not* wired to
`prefers-color-scheme` — this is a light-first page and must not flip because a
visitor's OS is dark. Nothing on the landing sets `.dark` today; the palette is
there so the tokens stay in sync with the app.

**2. Never put a literal inside `@theme inline`.** Raw values are declared in
`:root` / `.dark`; `@theme inline` only *aliases* them
(`--color-surface-0: var(--surface-0)`). A literal declared inside the theme
block gets inlined at build time and `.dark` can never reach it — the theme
breaks silently, with no error. The snippet at the end of `design-tokens.md`
has this bug; don't copy it verbatim.

Utility names match the editor app: `bg-surface-2`, `text-text-secondary`,
`border-border-default`, `text-accent`. The radius scale is the system's
(6/8/11/14px), not Tailwind's defaults.

Literal hex appears in exactly two intentional places: the artwork *inside* the
editor mock (a user's document doesn't repaint when the OS theme changes) and
`opengraph-image.tsx` (Satori can't resolve CSS custom properties).

## Content

Page copy is not invented here — it tracks `designdocs/landing-copy.md`. That
file ends with an appendix of **claims that are no longer true** (local-first
storage, the $47 lifetime deal, "no account required"). Check it before adding
a line to the page or reviving copy from an old deck.

## Deployment

Docker, via the included `Dockerfile` (multi-stage, standalone output,
non-root). Built for Coolify; the container listens on `3000` and needs no
environment variables.
