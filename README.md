# allm²eta

> 新一代企业智能业务操作系统 · **Enterprise Intelligent Operating System**

Top-level landing page and product launcher for the **allm²eta** suite. It composes two installed products into one front door:

| Card | Product | Default dev URL | Repo |
|---|---|---|---|
| **allm²eta Ontology** | Enterprise ontology design, governance & agentic Studio | `http://localhost:3500` | `../allmetaOntology` |
| **Agentic Operator** | AI agent fleet control plane | `http://localhost:3400` | `../AgenticOperator` |

Clicking either card navigates to that product's URL. URLs come from environment variables so the same UI works locally and when the products are deployed elsewhere.

---

## Quick start

```bash
cd /Users/kenny/CSI-AICOE/allmeta
npm install
npm run dev
```

Open <http://localhost:3300>.

To launch the full suite locally:

```bash
# terminal 1 — this landing page
cd /Users/kenny/CSI-AICOE/allmeta              && npm run dev          # → :3300

# terminal 2 — Agentic Operator
cd /Users/kenny/CSI-AICOE/AgenticOperator      && npm run dev          # → :3400

# terminal 3 — allmetaOntology Studio + 10 builders
cd /Users/kenny/CSI-AICOE/allmetaOntology      && ./scripts/restart.sh # → :3500–:3510
```

---

## Stack

| Layer | Version | Notes |
|---|---|---|
| Next.js | **16.2.4** | App Router · Turbopack default |
| React | **19.2.5** | |
| TypeScript | 5.x | |
| Tailwind CSS | **v4.2.4** | `@theme inline` block in `globals.css` — no `tailwind.config.ts` |
| Node | `>=22` | per `engines` |

No backend, no API routes, no database. The page is a Server Component that reads two env vars at request time and hands them to the client tree as props.

---

## Environment variables

Create a `.env.local` (gitignored) at the project root. See [`.env.example`](./.env.example):

```env
allmetaOntology_URL=http://localhost:3500
AgenticOperator_URL=http://localhost:3400
```

Read server-side by `app/page.tsx` and embedded directly as `<a href>` — no `NEXT_PUBLIC_` prefix needed, no client exposure.

In deployed environments, override with whatever the products' real URLs are:

```env
allmetaOntology_URL=https://ontology.example.com
AgenticOperator_URL=https://operator.example.com
```

---

## Project structure

```
allmeta/
├── app/
│   ├── layout.tsx          AppProvider (lang/theme) + font preconnect
│   ├── page.tsx            Server Component — reads env, hands URLs down
│   └── globals.css         OKLCH tokens, brand-mark CSS, mesh background
│
├── components/
│   ├── home/
│   │   ├── HomeContent.tsx     Client root: TopBar + Hero + ProductGrid + Footer
│   │   ├── TopBar.tsx          Brand mark + lang/theme toggles
│   │   ├── Hero.tsx            Big brand mark + bilingual tagline + description
│   │   ├── ProductGrid.tsx     2-card responsive grid
│   │   ├── ProductCard.tsx     Single product launcher
│   │   ├── BrandMark.tsx       "allm²eta" with accent-colored superscript
│   │   ├── BackgroundGrid.tsx  Gradient mesh + dot grid layered behind hero
│   │   └── Footer.tsx          Copyright + version
│   └── shared/
│       ├── atoms.tsx           Btn, Card, CardHead, Badge (subset of AgenticOperator)
│       └── Ic.tsx              Icon set (subset)
│
├── lib/
│   └── i18n.tsx                AppProvider + useApp() + zh/en dictionary
│
├── public/                     Static assets
├── docs/                       Reference material
├── .env.example                Committed env template
├── .env.local                  Local overrides (gitignored)
├── next.config.js              turbopack.root pinned to project (see Troubleshooting)
├── postcss.config.js           @tailwindcss/postcss v4
├── tsconfig.json
└── package.json                Scripts, deps, engines
```

---

## Design system

Mirrors `AgenticOperator` exactly so all three apps share one visual language:

- **OKLCH color tokens** as CSS variables (`--c-bg`, `--c-ink-1`, `--c-accent`, …) defined in [`app/globals.css`](./app/globals.css)
- **Tailwind v4 inline theme**: the `@theme inline { ... }` block at the top of `globals.css` binds Tailwind utilities to the runtime variables, so `data-theme="dark"` recolors the entire app without a rebuild
- **Inter + Noto Sans SC** for type (`@import url(...)` in `globals.css`)
- **No hardcoded colors anywhere** — use Tailwind utilities (`bg-surface`, `text-ink-1`, `border-line`) or `style={{ background: "var(--c-accent)" }}`

Adding a token: declare it once under `@theme inline` (Tailwind binding) and once under `:root` + `[data-theme="dark"]` (light/dark values).

### Brand mark — `allm²eta`

The `²` is the load-bearing visual gesture: **meta squared = the operating system layer that orchestrates other meta-systems**. The superscript is the only colored element — accent against `--c-ink-1`. Styling lives in `globals.css` under `.brand-mark`.

### Theme + language

- **Theme toggle** (sun/moon) flips `data-theme="dark"` on `<html>`; all OKLCH variables redefine
- **Language toggle** (中/EN) switches all UI copy except the bilingual tagline (`新一代企业智能业务操作系统` / `Enterprise Intelligent Operating System`), which is **always rendered in both** — that's the brand identity
- Both prefs persist to `localStorage` under `allmeta:theme` / `allmeta:lang` (separate namespace from AgenticOperator's `ao:*` so each app remembers its own)

---

## Scripts

```bash
npm run dev      # ulimit raise + WATCHPACK_POLLING + next dev on :3300
npm run build    # production build (also runs typecheck + lint)
npm run start    # serve production build on :3300
npm run lint     # next lint
```

The `dev` script is wrapped:

```json
"dev": "ulimit -n 65536 2>/dev/null; WATCHPACK_POLLING=true next dev -p 3300"
```

See [Troubleshooting](#troubleshooting) for why.

---

## Troubleshooting

### `Watchpack Error: EMFILE: too many open files, watch`

**Symptom:** `npm run dev` fills the terminal with `Watchpack Error (watcher): Error: EMFILE: too many open files, watch`. The page may serve correctly, may 404, or may load chrome but show 404 in the body — depends on which file watches got dropped.

**Cause:** macOS launchd sets a per-process file-descriptor soft cap of **256** (run `launchctl limit maxfiles` to confirm). Next.js + Turbopack open hundreds of FSEvents watchers when `next dev` boots — that burst exceeds the cap, and any watch that fails to register silently corrupts the route table.

**Fix** (already baked into `npm run dev`):

1. `ulimit -n 65536` raises the soft cap for the spawned shell to well below the kernel ceiling (`kern.maxfilesperproc` is 138240 on modern macOS — check with `sysctl kern.maxfilesperproc`)
2. `WATCHPACK_POLLING=true` switches Watchpack from FSEvents to `fs.watchFile` polling; slightly slower hot reload (~1s vs. instant), but immune to FD pressure

If you ever invoke `next dev` directly without the wrapper, prepend the same:

```bash
ulimit -n 65536 && WATCHPACK_POLLING=true next dev -p 3300
```

For permanent system-wide relief (survives until reboot):

```bash
sudo launchctl limit maxfiles 65536 200000
```

### `404` on the landing page

If `http://localhost:3300/` returns 404 even with EMFILE quieted, the dev cache is stale. Reset:

```bash
rm -rf .next && npm run dev
```

### Card click goes nowhere / wrong URL

Check `.env.local` actually exists and the keys are spelled exactly **`allmetaOntology_URL`** and **`AgenticOperator_URL`** (no `NEXT_PUBLIC_` prefix). Restart `next dev` after editing `.env.local`.

If a card link goes to `http://localhost:3500` but you see "404 — This page could not be found." inside the Ontology Studio chrome, the bug is on the Ontology side — see `allmetaOntology/scripts/restart.sh` to reset its 11 dev servers cleanly.

### `next.config.js` keeps reloading

If the dev server prints `Found a change in next.config.js. Restarting…` on a loop without any actual edits, an editor's autosave/format-on-save is touching the file. Disable format-on-save for `next.config.js` or close it in the editor.

---

## Verification

```bash
# 1. Cold start
rm -rf .next && npm run dev

# 2. Page returns 200 with the right HTML
curl -s -o /dev/null -w "GET / → HTTP %{http_code}\n" http://localhost:3300/
# expect: GET / → HTTP 200

# 3. Card hrefs reflect .env.local
curl -s http://localhost:3300/ | grep -oE 'href="[^"]*"' | head -5
# expect both URLs from .env.local
```

End-to-end smoke test:
1. Reload `http://localhost:3300/` — hero + 2 product cards visible
2. Toggle ☀/🌙 in the top bar — page recolors instantly
3. Toggle 中/EN — copy switches except the dual-language tagline
4. Click **allm²eta Ontology** → Ontology Studio at `:3500`
5. Click **Agentic Operator** → Operator at `:3400`

---

## License

Internal · v0.1 · 2026
