"use client";
import React from "react";
import { useApp } from "@/lib/i18n";
import { SectionHead, Reveal } from "@/components/editorial/parts";
import { useReducedMotion } from "@/components/home/v2/useReducedMotion";
import { PRODUCTS, TONE_VAR, TONE_VAR_INK, type ProductId } from "@/lib/products";

/** The five-layer architecture, drawn as an architecture diagram.
 *
 *  Three things a list of layer names cannot say, and this drawing does:
 *
 *   1. THE LOOP. Data reads up from the systems of record; actions write back
 *      down into them. Both rails terminate at layer 03, so the picture says
 *      "the loop closes at the ontology" without a caption. One-directional
 *      stack diagrams describe a dashboard; this one describes an OS.
 *   2. WHO OWNS WHAT. Layers 03 and 04 carry the lime cap and the
 *      "what allmeta adds" kicker; 01/02/05 are neutral because the customer
 *      already has them. The colour does the attribution, not a legend.
 *   3. WHICH PRODUCT IMPLEMENTS WHICH LAYER. Every layer carries the product
 *      pills that build it, in that product's own tone — so this page and the
 *      suite page agree on sight.
 *   4. WHERE THE GATES ARE. A person ratifies extracted content before it
 *      enters the ontology (violet gate on the read rail); the write rail is
 *      idempotent and authorized (gate on the write rail); a regression suite
 *      bound to the ontology version stands between a rule change and the
 *      fleet (neutral dock into layer 04). Build-time artifacts sit on the
 *      03→04 seam under a version stamp, above a hairline from the run-time
 *      rows — the compile boundary made visible.
 *
 *  Borrowed capability docks in as --c-info and the human decision as
 *  --c-violet: the same two tokens, with the same two meanings, that
 *  DualityV2 and HarnessV2 use on the home page. */

type Band = {
  n: string;
  key: string;
  y: number;
  h: number;
  ours?: boolean;
  /** sub-blocks rendered inside the band, for the two allmeta layers */
  subs?: { label: string; items: string; y: number; h: number; build?: boolean }[];
  products: ProductId[];
};

/* Geometry. Bands x=210..910. The read rail (x=170) runs between layer 01's
   centre and layer 03's; the write rail (x=950) runs back down. The human
   dock (y=257) and model dock (y=177) both sit above the rails' vertical
   runs, so no line ever crosses another. */
const BANDS: Band[] = [
  { n: "05", key: "l5", y: 18, h: 80, products: ["work"] },
  {
    n: "04", key: "l4", y: 126, h: 180, ours: true, products: ["flow", "operator"],
    subs: [
      { label: "tech_l4_c", items: "tech_l4_c_items", y: 168, h: 36, build: true },
      { label: "tech_l4_a", items: "tech_l4_a_items", y: 218, h: 38 },
      { label: "tech_l4_b", items: "tech_l4_b_items", y: 262, h: 38 },
    ],
  },
  {
    n: "03", key: "l3", y: 322, h: 124, ours: true, products: ["studio"],
    subs: [
      { label: "tech_l3_a", items: "tech_l3_a_items", y: 366, h: 36 },
      { label: "tech_l3_b", items: "tech_l3_b_items", y: 406, h: 34 },
    ],
  },
  { n: "02", key: "l2", y: 462, h: 86, products: ["copilot", "xform"] },
  { n: "01", key: "l1", y: 564, h: 86, products: [] },
];

const READ = "M 210 607 H 170 V 384 H 206";
const WRITE = "M 910 404 H 950 V 627 H 914";
const DUR = "7s";

export default function ArchitectureV2() {
  const { t } = useApp();
  return (
    <section className="section">
      <div className="edito-container">
        <SectionHead
          eyebrow={t("tech_arch_label")}
          title={
            <>
              <span style={{ color: "var(--c-ink-3)" }}>{t("tech_arch_lead")}</span>
              <span style={{ color: "var(--c-ink-1)" }}>{t("tech_arch_main")}</span>
            </>
          }
          desc={t("tech_arch_desc")}
        />
        <Reveal>
          <div className="min-w-0">
            <div className="overflow-x-auto hidden lg:block">
              <StackWide t={t} />
            </div>
            <div className="lg:hidden">
              <StackNarrow t={t} />
            </div>
          </div>
        </Reveal>
        <Reveal delay={1}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-4 mt-6">
            {["tech_arch_loop", "tech_l4_budget", "tech_l3_ratify"].map((k) => (
              <p key={k} className="t-small" style={{ margin: 0 }}>{t(k)}</p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/** Product pills. Widths are derived from the name length rather than
 *  measured, because SVG cannot measure before layout — the names are fixed
 *  Latin strings, so the estimate is stable. */
function pills(ids: ProductId[]) {
  let x = 600;
  return ids.map((id) => {
    const p = PRODUCTS.find((q) => q.id === id)!;
    const w = Math.round(p.name.length * 5.9) + 22;
    const out = { p, x, w };
    x += w + 8;
    return out;
  });
}

function StackWide({ t }: { t: (k: string) => string }) {
  const still = useReducedMotion();
  return (
    <svg viewBox="0 0 1120 690" style={{ width: "100%", minWidth: 1000 }} role="img" aria-label={t("tech_arch_loop")}>
      {/* the loop */}
      <path d={READ} fill="none" stroke="var(--c-lime-line)" strokeWidth="1.3" />
      <polygon points="204,380 210,384 204,388" fill="var(--c-lime)" />
      <text x="162" y="500" textAnchor="end" fontFamily="var(--f-mono)" fontSize="11" fill="var(--c-ink-4)">{t("tech_arch_reads")}</text>
      <path d={WRITE} fill="none" stroke="var(--c-lime-line)" strokeWidth="1.3" />
      <polygon points="916,623 910,627 916,631" fill="var(--c-lime)" />
      <text x="962" y="520" fontFamily="var(--f-mono)" fontSize="11" fill="var(--c-ink-4)">{t("tech_arch_writes")}</text>

      {/* borrowed capability */}
      <rect x="966" y="148" width="146" height="58" rx="10" fill="var(--c-plate)" stroke="var(--c-info)" strokeWidth="1.1" />
      <text x="982" y="172" fontFamily="var(--f-mono)" fontSize="10" letterSpacing="0.14em" fill="var(--c-info)">{t("tech_arch_model_k")}</text>
      <text x="982" y="192" fontFamily="var(--f-sans)" fontWeight="500" fontSize="13" fill="var(--c-ink-1)">{t("tech_arch_model")}</text>
      <path d="M 966 177 H 916" fill="none" stroke="var(--c-info)" strokeWidth="1.1" />
      <polygon points="916,173 910,177 916,181" fill="var(--c-info)" />

      {/* a person */}
      <rect x="8" y="228" width="146" height="58" rx="3" fill="var(--c-plate)" stroke="var(--c-violet)" strokeWidth="1.4" />
      <text x="24" y="252" fontFamily="var(--f-mono)" fontSize="10" letterSpacing="0.14em" fill="var(--c-violet)">{t("tech_arch_human_k")}</text>
      <text x="24" y="272" fontFamily="var(--f-sans)" fontWeight="500" fontSize="13" fill="var(--c-ink-1)">{t("tech_arch_human")}</text>
      <path d="M 154 257 H 204" fill="none" stroke="var(--c-violet)" strokeWidth="1.1" />
      <polygon points="204,253 210,257 204,261" fill="var(--c-violet)" />

      {/* the two layers allmeta supplies, and the version boundary between them */}
      <text x="210" y="118" fontFamily="var(--f-mono)" fontSize="10.5" letterSpacing="0.14em" fill="var(--c-lime-ink)">
        {t("tech_arch_ours")}
      </text>
      <text x="894" y="318" textAnchor="end" fontFamily="var(--f-mono)" fontSize="10" fill="var(--c-lime-ink)">{t("tech_ver")}</text>

      {/* the write rail is the only path that can damage a system of record —
          it gets a gate: idempotent, authorized */}
      <circle cx="950" cy="460" r="6" fill="var(--c-plate)" stroke="var(--c-lime)" strokeWidth="1.3" />
      <path d="M 947 460 H 953" stroke="var(--c-lime)" strokeWidth="1.3" strokeLinecap="round" />
      <text x="962" y="464" fontFamily="var(--f-mono)" fontSize="10" fill="var(--c-ink-4)">{t("tech_arch_gate")}</text>

      {/* extracted content enters the ontology only once a person ratifies it */}
      <circle cx="170" cy="454" r="6" fill="var(--c-plate)" stroke="var(--c-violet)" strokeWidth="1.3" />
      <text x="158" y="458" textAnchor="end" fontFamily="var(--f-mono)" fontSize="10" fill="var(--c-violet)">{t("tech_arch_ratify")}</text>

      {/* the regression suite bound to each ontology version — a gate, so a
          neutral tone: not a supplied capability (lime), not a person (violet) */}
      <rect x="8" y="160" width="146" height="44" rx="6" fill="var(--c-plate)" stroke="var(--c-line-graph-strong)" strokeWidth="1.1" />
      <text x="24" y="179" fontFamily="var(--f-mono)" fontSize="10" letterSpacing="0.14em" fill="var(--c-ink-4)">{t("tech_arch_regress_k")}</text>
      <text x="24" y="196" fontFamily="var(--f-sans)" fontWeight="500" fontSize="13" fill="var(--c-ink-1)">{t("tech_arch_regress")}</text>
      <path d="M 154 182 H 204" fill="none" stroke="var(--c-line-graph-strong)" strokeWidth="1.1" />
      <polygon points="204,178 210,182 204,186" fill="var(--c-line-graph-strong)" />

      {BANDS.map((b) => (
        <g key={b.key}>
          <rect x="210" y={b.y} width="700" height={b.h} rx="12" fill="var(--c-plate)"
            stroke={b.ours ? "var(--c-lime)" : "var(--c-line-graph-mid)"} strokeWidth={b.ours ? 1.5 : 1} />
          {b.ours && <rect x="210" y={b.y} width="4" height={b.h} rx="2" fill="var(--c-lime)" />}
          <text x="228" y={b.y + 30} fontFamily="var(--f-mono)" fontSize="12"
            fill={b.ours ? "var(--c-lime-ink)" : "var(--c-ink-4)"}>{b.n}</text>
          <text x="262" y={b.y + 30} fontFamily="var(--f-sans)" fontWeight={b.ours ? 600 : 500}
            fontSize="16" fill="var(--c-ink-1)">{t(`tech_${b.key}_title`)}</text>

          {/* which product builds this layer */}
          {pills(b.products).map(({ p, x, w }) => (
            <g key={p.id}>
              <rect x={x} y={b.y + 12} width={w} height={22} rx="11" fill="none"
                stroke={TONE_VAR[p.tone]} strokeWidth="1" />
              <text x={x + w / 2} y={b.y + 27} textAnchor="middle" fontFamily="var(--f-sans)"
                fontSize="11" fill={TONE_VAR_INK[p.tone]}>{p.name}</text>
            </g>
          ))}

          {b.subs ? (
            b.subs.map((sb) => (
              <g key={sb.label}>
                <rect x="228" y={sb.y} width="660" height={sb.h} rx="9" fill="none"
                  stroke="var(--c-line-graph-mid)" strokeWidth="1" />
                <text x="242" y={sb.y + sb.h / 2 + 4} fontFamily="var(--f-sans)" fontSize="12.5"
                  fontWeight="500" fill={sb.build ? "var(--c-lime-ink)" : "var(--c-ink-1)"}>{t(sb.label)}</text>
                <text x="400" y={sb.y + sb.h / 2 + 4} fontFamily="var(--f-mono)" fontSize="10"
                  fill="var(--c-ink-4)">{t(sb.items)}</text>
                {/* build-time sits above the run-time rows, separated by a hairline */}
                {sb.build && <path d={`M 228 ${sb.y + sb.h + 7} H 888`} stroke="var(--c-line-graph-mid)" strokeWidth="1" strokeDasharray="2 3" />}
              </g>
            ))
          ) : (
            <text x="262" y={b.y + 58} fontFamily="var(--f-mono)" fontSize="10.5" fill="var(--c-ink-4)">
              {t(`tech_${b.key}_items`)}
            </text>
          )}
        </g>
      ))}

      {/* the run: up, a beat at the ontology, back down */}
      {still ? (
        <>
          <circle cx="206" cy="384" r="4.5" fill="var(--c-lime)" />
          <circle cx="950" cy="520" r="4.5" fill="var(--c-lime)" />
          <circle cx="880" cy="384" r="4" fill="var(--c-lime)" />
        </>
      ) : (
        <>
          <circle r="4.5" fill="var(--c-lime)">
            <animateMotion dur={DUR} repeatCount="indefinite" path={READ} keyPoints="0;1;1" keyTimes="0;0.35;1" calcMode="linear" />
            <animate attributeName="opacity" values="0;1;1;0;0" keyTimes="0;0.03;0.35;0.40;1" dur={DUR} repeatCount="indefinite" calcMode="linear" />
          </circle>
          <circle cx="880" cy="384" r="4" fill="var(--c-lime)">
            <animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;0.36;0.39;0.50;0.53;1" dur={DUR} repeatCount="indefinite" calcMode="linear" />
          </circle>
          <circle r="4.5" fill="var(--c-lime)">
            <animateMotion dur={DUR} repeatCount="indefinite" path={WRITE} keyPoints="0;0;1;1" keyTimes="0;0.50;0.85;1" calcMode="linear" />
            <animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;0.50;0.53;0.85;0.90;1" dur={DUR} repeatCount="indefinite" calcMode="linear" />
          </circle>
        </>
      )}
    </svg>
  );
}

/* Narrow variant: the wide diagram is not shrunk — its 16px titles would set
   under 6px. The side docks and the sub-blocks are dropped; the stack, the
   loop and the product attribution survive, because those are the argument. */
const N_BANDS = [
  { n: "05", key: "l5", y: 16, products: ["work"] as ProductId[] },
  { n: "04", key: "l4", y: 92, ours: true, products: ["flow", "operator"] as ProductId[] },
  { n: "03", key: "l3", y: 168, ours: true, products: ["studio"] as ProductId[] },
  { n: "02", key: "l2", y: 244, products: ["copilot", "xform"] as ProductId[] },
  { n: "01", key: "l1", y: 320, products: [] as ProductId[] },
];
const N_READ = "M 48 346 H 28 V 206 H 42";
const N_WRITE = "M 312 222 H 332 V 346 H 318";

function StackNarrow({ t }: { t: (k: string) => string }) {
  const still = useReducedMotion();
  return (
    <svg viewBox="0 0 360 396" style={{ width: "100%" }} role="img" aria-label={t("tech_arch_loop")}>
      <path d={N_READ} fill="none" stroke="var(--c-lime-line)" strokeWidth="1.3" />
      <polygon points="42,202 48,206 42,210" fill="var(--c-lime)" />
      <path d={N_WRITE} fill="none" stroke="var(--c-lime-line)" strokeWidth="1.3" />
      <polygon points="318,342 312,346 318,350" fill="var(--c-lime)" />
      {N_BANDS.map((b) => (
        <g key={b.key}>
          <rect x="48" y={b.y} width="264" height="64" rx="10" fill="var(--c-plate)"
            stroke={b.ours ? "var(--c-lime)" : "var(--c-line-graph-mid)"} strokeWidth={b.ours ? 1.5 : 1} />
          {b.ours && <rect x="48" y={b.y} width="4" height="64" rx="2" fill="var(--c-lime)" />}
          <text x="64" y={b.y + 24} fontFamily="var(--f-mono)" fontSize="10.5"
            fill={b.ours ? "var(--c-lime-ink)" : "var(--c-ink-4)"}>{b.n}</text>
          <text x="94" y={b.y + 24} fontFamily="var(--f-sans)" fontWeight={b.ours ? 600 : 500}
            fontSize="12.5" fill="var(--c-ink-1)">{t(`tech_${b.key}_title`)}</text>
          <text x="64" y={b.y + 46} fontFamily="var(--f-mono)" fontSize="9.5" fill="var(--c-lime-ink)">
            {b.products.map((id) => PRODUCTS.find((q) => q.id === id)!.name).join(" · ")}
          </text>
        </g>
      ))}
      {still ? (
        <circle cx="42" cy="206" r="4" fill="var(--c-lime)" />
      ) : (
        <>
          <circle r="4" fill="var(--c-lime)">
            <animateMotion dur={DUR} repeatCount="indefinite" path={N_READ} keyPoints="0;1;1" keyTimes="0;0.35;1" calcMode="linear" />
            <animate attributeName="opacity" values="0;1;1;0;0" keyTimes="0;0.03;0.35;0.40;1" dur={DUR} repeatCount="indefinite" calcMode="linear" />
          </circle>
          <circle r="4" fill="var(--c-lime)">
            <animateMotion dur={DUR} repeatCount="indefinite" path={N_WRITE} keyPoints="0;0;1;1" keyTimes="0;0.50;0.85;1" calcMode="linear" />
            <animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;0.50;0.53;0.85;0.90;1" dur={DUR} repeatCount="indefinite" calcMode="linear" />
          </circle>
        </>
      )}
    </svg>
  );
}
