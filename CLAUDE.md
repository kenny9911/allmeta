# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start the dev server on **port 3300**. The script is wrapped: `ulimit -n 65536 2>/dev/null; WATCHPACK_POLLING=true next dev -p 3300` — both flags are load-bearing on macOS, see [Dev environment gotchas](#dev-environment-gotchas) below. Don't strip them.
- `npm run build` — production build. Use this to surface TypeScript errors; `next build` runs typecheck + lint.
- `npm run start` — serve the production build on port 3300.
- `npm run lint` — `next lint`.

There is no test suite configured.

## Dev environment gotchas

**`Watchpack Error: EMFILE: too many open files`** — macOS launchd sets a per-process FD soft cap of 256 (`launchctl limit maxfiles`). Next.js + Turbopack burst past it during watcher init, which silently corrupts the route table — symptom is the chrome rendering but the page body 404s. The wrapped `dev` script raises `ulimit -n` to 65536 and forces `WATCHPACK_POLLING=true` (polling instead of FSEvents). If you ever invoke `next dev` directly, prepend the same.

**`turbopack.root` is pinned in `next.config.js`** to `path.resolve(__dirname)`. There's a stray `~/package.json` + `~/package-lock.json` in the user's `$HOME` that Next.js otherwise picks up as the workspace root, causing Watchpack to recursively watch the entire home directory. Don't remove the `turbopack.root` setting.

**Stale `.next/` cache after port or env changes** — if `/` 404s after editing `next.config.js` or changing the dev port, run `rm -rf .next && npm run dev`. Turbopack's dev cache is fragile across config changes.

## Stack

Next.js 16.2 (App Router · Turbopack default) · React 19.2 · Tailwind CSS v4 · TypeScript 5 · `engines.node: ">=22"`. No tests, no API routes.

## What this project is

**allm²eta** is the top-level landing page / product launcher for an enterprise AI suite. It hosts two products today:

- **allm²eta Ontology** — ontology authoring studio at `/Users/kenny/CSI-AICOE/allmetaOntology`, dev port 3500. It's a pnpm monorepo with a Studio shell + 10 builders on ports 3500–3510; start it via `./scripts/restart.sh` (not `pnpm dev` directly, which has its own concurrency/FD-limit wrinkles).
- **Agentic Operator** — AI agent control plane at `/Users/kenny/CSI-AICOE/AgenticOperator`, dev port 3400. Single Next.js app, `npm run dev`.

The home page renders a hero plus two product cards. Clicking a card navigates the browser to the corresponding product URL. URLs are read from `.env.local`:

```
allmetaOntology_URL=http://localhost:3500
AgenticOperator_URL=http://localhost:3400
```

These env-var names are **non-prefixed by design** (no `NEXT_PUBLIC_`). They are read server-side in `app/page.tsx` (a React Server Component) and embedded as `<a href>` attributes — no client exposure, no rebuild on URL change.

## Design system inheritance

The visual identity is **inherited from `AgenticOperator`**, which is the single source of truth:

- `AgenticOperator/app/globals.css` → ports verbatim to `allmeta/app/globals.css` (OKLCH tokens, `@theme inline`, fonts)
- `AgenticOperator/components/shared/atoms.tsx` → ported as a subset (Btn, Card, CardHead, Badge — landing page doesn't need StatusDot/Spark/Metric)
- `AgenticOperator/components/shared/Ic.tsx` → ported as a subset (icons used here only)
- `AgenticOperator/lib/i18n.tsx` → same provider/hook structure with allmeta-specific keys

When tokens or atoms change in `AgenticOperator`, port the change here. Do not invent new color tokens — extend the shared palette upstream first.

## Architecture

```
app/page.tsx               ← Server Component: reads env vars, renders <HomeContent>
                              uses `export const dynamic = "force-dynamic"` so URLs
                              come from env on every request (no rebuild on URL change)
app/layout.tsx             ← <html>/<body> + Google Fonts preconnect + <AppProvider>
components/home/           ← all the real markup lives here; HomeContent is the
                              "use client" root that orchestrates TopBar + Hero +
                              ProductGrid + Footer
components/shared/         ← atoms + icons (mirror of AgenticOperator/components/shared)
lib/i18n.tsx               ← AppProvider: lang (zh/en) + theme (light/dark) + t(key);
                              this is the only "use client" boundary that wraps
                              the entire tree
```

The single page (`/`) renders `HomeContent` with `TopBar` + `Hero` + `ProductGrid` + `Footer`. The hero is a brand-forward, single-screen layout — no scrollable sections, no marketing footer.

**Server/client split:** `app/page.tsx` and `app/layout.tsx` stay server-rendered so env vars and metadata work without client exposure. Everything inside the `<AppProvider>` boundary (i.e. all of `components/home/*` and `components/shared/*`) is client-side because the language + theme toggles need React state. Don't add `"use client"` to `app/page.tsx` — that would prevent reading the non-`NEXT_PUBLIC_` env vars.

## Design system — read this before styling anything

Visual identity is defined as **OKLCH CSS variables (`--c-*`) in [app/globals.css](app/globals.css)**. There is **no `tailwind.config.ts`** — Tailwind v4's config lives in CSS, in the `@theme inline { --color-bg: var(--c-bg); ... }` block at the top of `globals.css`. Flipping `data-theme="dark"` on `<html>` recolors the entire app without a rebuild.

Practical consequence: never hardcode colors. Use Tailwind utilities (`bg-surface`, `border-line`, `text-ink-1`, `text-accent`, `bg-accent-bg`) **or** inline `style={{ background: "var(--c-accent)" }}`. Both auto-respond to theme changes.

When adding a new color/font/radius token: add it to AgenticOperator's `globals.css` first (single source of truth), then mirror here.

## Brand mark

The `²` in **allm²eta** is the load-bearing visual gesture. Render it with the `.brand-mark` class and a `<sup>` tag. Styling in `app/globals.css`:

```css
.brand-mark sup {
  font-size: 0.55em;
  vertical-align: super;
  line-height: 0;
  color: var(--c-accent);
}
```

The accent color on the superscript is the only colored element in the mark. Everything else is `--c-ink-1`.

## i18n

`useApp()` exposes `{ t, lang, setLang, theme, setTheme }`. The dictionary is two flat objects in [lib/i18n.tsx](lib/i18n.tsx) — when adding a string, add it under both `zh` and `en`. `lang` and `theme` are persisted to `localStorage` under `allmeta:lang` / `allmeta:theme` (note: different namespace than AgenticOperator's `ao:*` so each app remembers its own preference).

The bilingual brand tagline (`brand_tag_zh` and `brand_tag_en`) intentionally returns the same string regardless of `lang` — the hero shows BOTH languages stacked, because that's the brand identity statement, not translated copy.
