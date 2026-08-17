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

**allm²eta** is the top-level marketing site / product launcher for an enterprise AI suite of **six products**, which compose into a single pipeline — each product's output is the next one's input:

| # | Product | Role | Output | Port |
|---|---------|------|--------|------|
| 01 | **OntoCopilot** | Understand | structured business findings | 3594 |
| 02 | **OntoXForm** | Canonicalize | canonical data format | 3596 |
| 03 | **Ontology Studio** *(core)* | Model & Govern | actionable ontology | 3500 |
| 04 | **OntoFlow** | Orchestrate | agentic workflows | 3592 |
| 05 | **Agentic Operator** *(core)* | Run | a running agent fleet | 3599 |
| 06 | **OntoWork** | Operate | an operated enterprise | 3590 |

Ontology Studio additionally exposes the **Ontology Generator** (port 3598) as a separately launchable module, alongside six in-app builders (Data Object, Rule, Action, Event, Links Generator, Workflow).

Two of these live locally as their own repos: Ontology Studio at `/Users/kenny/CSI-AICOE/allmetaOntology` (pnpm monorepo — Studio shell + builders on 3500–3510; start with `./scripts/restart.sh`, not `pnpm dev`) and Agentic Operator at `/Users/kenny/CSI-AICOE/AgenticOperator` (single Next.js app, `npm run dev`).

### The product registry

**[lib/products.ts](lib/products.ts) is the single source of truth for the suite.** It holds structure only — order, tone colour, routing, and the env var each launch URL comes from. All copy lives in `lib/i18n.tsx` under the `p_<id>_*` key prefix so every string is bilingual.

To add or reorder a product, edit `PRODUCTS` in that file and add the matching `p_<id>_{role,tag,body,c1,c2,c3,in,out}` keys to **both** `zh` and `en`. The home page pipeline, the product grid, the nav menu, the footer and `/suite` all derive from it — no component needs touching.

`resolveLaunchUrls(process.env)` builds the `id → URL` map (plus `<id>.<moduleKey>` for modules with their own app). Env-var names are **non-prefixed by design** (no `NEXT_PUBLIC_`): they're read in Server Components and handed down as a plain string map, so no env var reaches the client and URL changes need no rebuild.

```
OntoCopilot_URL=http://localhost:3594
OntoXForm_URL=http://localhost:3596
allmetaOntology_URL=http://localhost:3500
OntologyGenerator_URL=http://localhost:3598
OntoFlow_URL=http://localhost:3592
AgenticOperator_URL=http://localhost:3599
OntoWork_URL=http://localhost:3590
```

## Design system inheritance

The visual identity is **inherited from `AgenticOperator`**, which is the single source of truth:

- `AgenticOperator/app/globals.css` → ports verbatim to `allmeta/app/globals.css` (OKLCH tokens, `@theme inline`, fonts)
- `AgenticOperator/components/shared/atoms.tsx` → ported as a subset (Btn, Card, CardHead, Badge — landing page doesn't need StatusDot/Spark/Metric)
- `AgenticOperator/components/shared/Ic.tsx` → ported as a subset (icons used here only)
- `AgenticOperator/lib/i18n.tsx` → same provider/hook structure with allmeta-specific keys

When tokens or atoms change in `AgenticOperator`, port the change here. Do not invent new color tokens — extend the shared palette upstream first.

## Architecture

Five routes, each a Server Component that resolves launch URLs from env and renders a `"use client"` content root:

```
app/page.tsx        → components/home/HomeContent      the home page
app/suite/page.tsx  → components/suite/SuiteContent    the whole-suite page
app/ontology/…      → components/ontology/…            Ontology Studio
app/operator/…      → components/operator/…            Agentic Operator
app/technology/…    → components/technology/…          6-layer architecture
```

Every route uses `export const dynamic = "force-dynamic"` so env-derived URLs are read per request.

The home page section order tells the story in the order a visitor needs it:

```
HeroV2 → SuiteFlowV2 → ProductSuiteV2 → DualityV2
       → HarnessV2 → ArchPreviewV2 → RoadmapV2 → ClosingV2
```

- **`SuiteFlowV2`** — the pipeline diagram: what the suite *is*. Horizontal rail on desktop, vertical rail on mobile. Nodes anchor to `#p-<id>` cards rather than launching, so the diagram stays a map.
- **`ProductSuiteV2`** — all six products as uniform cards, each with a direct **Launch** link to the running app. Uniform on purpose: the section exists for comparability, so the two cores get a `CORE` badge instead of a bigger tile. Reused verbatim on `/suite`.
- **`DualityV2`** — "capability can be bought in, judgement cannot be outsourced". The diagram is a **containment, not a pipeline**: a pipeline reads identically with its labels swapped, and the claim here is an asymmetry. One perimeter, the ontology plate straddling its wall so it *is* the aperture, and an outbound attempt that visibly dies at a strike. Three tokens, one meaning each — `--c-info` borrowed capability, `--c-lime` what is yours, `--c-amber` the refusal. Violet is deliberately absent: page-wide it means *a person*.
- **`HarnessV2`** — "humans and agents, on one decision surface". People dock to the harness band from above, agents from below, through **identical** hairlines — that symmetry is the whole peer argument, so neither dock gets an arrowhead. The run halts under the human who must rule, then resumes. `R-GOV-301` is intentionally the same id and gloss as the hero's procurement panel; never reuse `R-PROC-016` / `R-SUPP-114` here, since a repeated rule id with a changed meaning is exactly what a procurement reader catches. Below `lg` it renders a purpose-built stacked variant rather than shrinking the wide band, the way `SuiteFlowV2` flips its rail.

`PageShell` takes an optional `launch` map and passes it to `NavBar`, whose Products drop-down can then launch any app directly from any page.

**Server/client split:** route files and `app/layout.tsx` stay server-rendered so env vars and metadata work without client exposure. Everything inside `<AppProvider>` is client-side because the language + theme toggles need React state. Don't add `"use client"` to a route file — that would prevent reading the non-`NEXT_PUBLIC_` env vars.

## Layout invariants

Two mistakes recur in this codebase and both produce sideways scroll on phones. Check them when adding any wide element:

1. **A grid item defaults to `min-width: auto`**, so its track refuses to shrink below the content's min-content width. Hero mock columns need `min-w-0` plus `overflow-x-auto` on the inner wrapper (see `HeroV2` and `EditoHero`).
2. **`1fr` tracks don't shrink below min-content either.** Use responsive column counts (`grid-cols-2 md:grid-cols-3 lg:grid-cols-5`) rather than a fixed `repeat(N, 1fr)` — see `RoadmapV2`.

Regression check — every page should report `0` at 390 / 768 / 1440px:

```js
document.documentElement.scrollWidth - document.documentElement.clientWidth
```

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

`useApp()` exposes `{ t, lang, setLang, toggleLang, theme, setTheme, toggleTheme }`. The dictionary is two flat objects in [lib/i18n.tsx](lib/i18n.tsx) — when adding a string, add it under both `zh` and `en`. `lang` and `theme` are persisted to `localStorage` under `allmeta:lang` / `allmeta:theme` (note: different namespace than AgenticOperator's `ao:*` so each app remembers its own preference).

**Both preferences are persisted on write, never mirrored from state via an effect.** A mirror effect (`useEffect(() => localStorage.setItem(k, v), [v])`) writes the initial default *before* the stored value has been applied, and because `reactStrictMode` is on, the re-run of the mount effect then reads that default back — silently discarding the user's saved choice on every load. Write inside `setLang`/`toggleLang` (and `applyTheme`) instead.

Parity and resolution are worth re-checking after a bulk copy edit — both dictionaries should have identical key sets, and every `t()` key should resolve:

```bash
node -e "const s=require('fs').readFileSync('lib/i18n.tsx','utf8'),a=s.indexOf('  zh: {'),b=s.indexOf('  en: {'),k=x=>[...x.matchAll(/^\s{4}([a-zA-Z0-9_]+):/gm)].map(m=>m[1]),z=k(s.slice(a,b)),e=k(s.slice(b,s.indexOf('\n};',b)));console.log(z.length,e.length,z.filter(x=>!e.includes(x)),e.filter(x=>!z.includes(x)))"
```

The bilingual brand tagline (`brand_tag_zh` and `brand_tag_en`) intentionally returns the same string regardless of `lang` — the hero shows BOTH languages stacked, because that's the brand identity statement, not translated copy.
