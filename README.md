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
  lib/site.ts                  canonical origin, app URLs, license price, catalog counts
  lib/content/                 the SEO content families (see below)
    types.ts · formats.ts · comparisons.ts
  components/landing/
    navbar.tsx                 fixed nav + mobile drawer
    collage.tsx                hero visual
    faq.tsx · reveal.tsx · primitives.tsx · icons.tsx
  components/legal/legal-page.tsx    shared chrome for the three legal pages
  components/content/content-page.tsx  shared chrome for the SEO pages
  sizes/ · sizes/[slug]/       canvas-size reference pages
  vs/[slug]/                   competitor comparison pages
  terms/ · privacy/ · refund/
designdocs/                    copy, page spec, design tokens, design comps
  editor-integration.md        what the landing needs from the editor repo
```

## SEO content

Beyond the landing there are two content families, both statically prerendered
from typed modules in `app/lib/content/`:

- **`/sizes`** — canvas-size reference (`/sizes/instagram-post`, etc.)
- **`/vs/[slug]`** — competitor comparisons (`/vs/canva`)

Three rules hold across both:

**1. The content module is the source of truth.** `generateStaticParams`, the
sitemap and the cross-links all read from it, so a new entry cannot be added to
the site and forgotten in the sitemap. Routes use `dynamicParams = false`, so an
unknown slug is a 404 rather than a runtime-rendered page.

**2. Only claim what the editor can serve.** `formats.ts` covers exactly the three
canvases Modo ships presets for. A LinkedIn-banner page would rank for a query
that ends at an editor with no such canvas — the same discipline as the copy
appendix in `landing-copy.md`.

**3. Facts about other companies get checked, and the check gets dated.**
`comparisons.ts` carries `rivalFactsCheckedOn`, which drives the page's sitemap
`lastmod`. The rival column deliberately avoids prices and counts that churn.

The CTAs on `/sizes/*` deep-link into the editor with a blank canvas of that
format (`editorUrlForFormat()`), which the editor honours — see
`designdocs/editor-integration.md` for that contract and the template-preview
manifest the next content family needs.

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

Modo is sold as a **one-time lifetime license** ($79, 14-day refund) with no
accounts: designs and images stay in the user's browser, and AI runs on the
user's own Anthropic API key. Every CTA goes to the editor, whose activation
screen sells the license (Paddle) or accepts a key. Since 2026-11-10 the old
subscription claims — free plan, AI credits, storage quotas, account sync,
"Log in" — are the ones that are **no longer true**; don't revive them. Price,
refund window and catalog counts live in `app/lib/site.ts`.

## Deployment

Docker, via the included `Dockerfile` (multi-stage, standalone output,
non-root). Built for Coolify; the container listens on `3000` and needs no
environment variables.
