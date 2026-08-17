/** ============================================================
 *  allm²eta product suite — single source of truth.
 *
 *  Six products, ordered as one pipeline: the output artifact of
 *  each stage is the input artifact of the next.
 *
 *    01 OntoCopilot     raw client material  → business findings
 *    02 OntoXForm       business findings    → canonical data
 *    03 Ontology Studio canonical data       → actionable ontology
 *    04 OntoFlow        actionable ontology  → agentic workflows
 *    05 Agentic Operator agentic workflows   → a running agent fleet
 *    06 OntoWork        a running fleet      → an operated enterprise
 *
 *  Copy lives in lib/i18n.tsx under the `p_<id>_*` key prefix so every
 *  string is bilingual. This file holds only structure: order, colour,
 *  routing and the env var each launch URL is read from.
 *
 *  Deliberately NOT "use client" — app/page.tsx (a Server Component)
 *  imports PRODUCTS to resolve launch URLs from non-NEXT_PUBLIC_ env
 *  vars, while the client components import it for layout metadata.
 *  ============================================================ */

export type ProductId =
  | "copilot"
  | "xform"
  | "studio"
  | "flow"
  | "operator"
  | "work";

export type Tone = "cyan" | "info" | "lime" | "amber" | "violet" | "coral";

/** Tone → CSS custom property, for FILL roles: backgrounds, borders,
 *  rails, dots, glows, gradient stops. Theme-aware; flipping data-theme
 *  recolors without a rebuild. */
export const TONE_VAR: Record<Tone, string> = {
  cyan: "var(--c-cyan)",
  info: "var(--c-info)",
  lime: "var(--c-lime)",
  amber: "var(--c-amber)",
  violet: "var(--c-violet)",
  coral: "var(--c-coral)",
};

/** Tone → CSS custom property, for TEXT roles: anything driving a `color:`
 *  on glyphs a human reads. Identical to TONE_VAR except lime — the fill
 *  lime is a 3.4:1 swatch on the light surface, so type takes the deeper
 *  --c-lime-ink instead. Every other tone already clears 4.5:1 as text. */
export const TONE_VAR_INK: Record<Tone, string> = {
  ...TONE_VAR,
  lime: "var(--c-lime-ink)",
};

export type SubModule = {
  /** i18n key for the module label */
  key: string;
  /** optional own launch URL, resolved from this env var */
  env?: string;
  fallback?: string;
};

export type Product = {
  id: ProductId;
  /** Canonical product name — a brand mark, never translated. */
  name: string;
  /** 1-based position in the value chain. */
  stage: number;
  tone: Tone;
  /** One of the two cores of the Agentic OS. */
  core?: boolean;
  /** Internal marketing page, when one exists. */
  href?: string;
  /** Env var holding the deployed app URL (non-NEXT_PUBLIC_ by design). */
  env: string;
  fallback: string;
  /** Named modules shipped inside the product. */
  modules?: SubModule[];
};

export const PRODUCTS: Product[] = [
  {
    id: "copilot",
    name: "OntoCopilot",
    stage: 1,
    tone: "cyan",
    env: "OntoCopilot_URL",
    fallback: "http://localhost:3594",
  },
  {
    id: "xform",
    name: "OntoXForm",
    stage: 2,
    tone: "info",
    env: "OntoXForm_URL",
    fallback: "http://localhost:3596",
  },
  {
    id: "studio",
    name: "Ontology Studio",
    stage: 3,
    tone: "lime",
    core: true,
    href: "/ontology",
    env: "allmetaOntology_URL",
    fallback: "http://localhost:3500",
    modules: [
      { key: "m_generator", env: "OntologyGenerator_URL", fallback: "http://localhost:3598" },
      { key: "m_object" },
      { key: "m_rule" },
      { key: "m_action" },
      { key: "m_event" },
      { key: "m_links" },
      { key: "m_workflow" },
    ],
  },
  {
    id: "flow",
    name: "OntoFlow",
    stage: 4,
    tone: "amber",
    env: "OntoFlow_URL",
    fallback: "http://localhost:3592",
  },
  {
    id: "operator",
    name: "Agentic Operator",
    stage: 5,
    tone: "violet",
    core: true,
    href: "/operator",
    env: "AgenticOperator_URL",
    fallback: "http://localhost:3599",
  },
  {
    id: "work",
    name: "OntoWork",
    stage: 6,
    tone: "coral",
    env: "OntoWork_URL",
    fallback: "http://localhost:3590",
  },
];

/** Launch URL per product id, plus `<id>.<moduleKey>` for sub-modules
 *  that ship their own app. Built server-side in app/page.tsx and
 *  handed down as a plain object so no env var reaches the client. */
export type LaunchMap = Record<string, string>;

export function resolveLaunchUrls(env: NodeJS.ProcessEnv): LaunchMap {
  const map: LaunchMap = {};
  for (const p of PRODUCTS) {
    map[p.id] = env[p.env] ?? p.fallback;
    for (const m of p.modules ?? []) {
      if (m.env) map[`${p.id}.${m.key}`] = env[m.env] ?? m.fallback ?? "#";
    }
  }
  return map;
}

/** i18n key helpers — keeps the `p_<id>_<field>` convention in one place. */
export const pk = (id: ProductId, field: string) => `p_${id}_${field}`;
