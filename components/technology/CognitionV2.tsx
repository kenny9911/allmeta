"use client";
import React from "react";
import { useApp } from "@/lib/i18n";
import { SectionHead, Reveal } from "@/components/editorial/parts";

/** Agent = ontology + model + harness.
 *
 *  The picture carries three claims a bullet list cannot:
 *
 *   1. The harness is COMPILED from the ontology, not hand-written per agent —
 *      but at two confidences. Action contracts, preconditions and permission
 *      scope compile totally (solid arrow, lime source tag). Context policy,
 *      the post-state check and the trace are TYPED by the ontology and ship
 *      with the role (dashed arrow, neutral tag). Stating all six at one
 *      confidence is the over-claim an engineer reader catches first.
 *   2. The model sits INSIDE the harness, and the harness wall IS the tool
 *      boundary: a denied action dies at an amber strike on that wall and
 *      returns to the model as a tool error. Containment by geometry alone is
 *      an assertion; the strike makes it a mechanism (the DualityV2 gesture).
 *   3. Two identical version stamps — on the ontology and inside the harness —
 *      are the version-pinning argument drawn rather than written. A run pins
 *      the ontology version it started on.
 *
 *  A violet author mark sits upstream of the compile arrow: the equation
 *  contains a human, and that human is upstream of every agent at once.
 *
 *  "Harness" carries two meanings on this site. HarnessV2 (home) is the
 *  org-level decision surface, 决策中枢 — English now says "decision surface".
 *  This is per-agent runtime scaffolding, 骨架. */

const STAGES = [
  { k: "s1", compiled: false },
  { k: "s2", compiled: true },
  { k: "s3", compiled: true },
  { k: "s4", compiled: true },
  { k: "s5", compiled: false },
  { k: "s6", compiled: false },
];
const ONTO = ["onto_1", "onto_2", "onto_3", "onto_4"];
const NOTES = [
  { n: "01", k: "tech_cog_ctx" },
  { n: "02", k: "tech_cog_action" },
  { n: "04", k: "tech_cog_enforce" },
  { n: "05", k: "tech_cog_verify" },
  { n: "06", k: "tech_cog_trace" },
  { n: "→", k: "tech_cog_compile_fail" },
  { n: "R", k: "tech_cog_rules" },
];

export default function CognitionV2() {
  const { t } = useApp();
  return (
    <section className="section">
      <div className="edito-container">
        <SectionHead
          eyebrow={t("tech_cog_label")}
          title={
            <>
              <span style={{ color: "var(--c-ink-3)" }}>{t("tech_cog_lead")}</span>
              <span style={{ color: "var(--c-ink-1)" }}>{t("tech_cog_main")}</span>
            </>
          }
          desc={t("tech_cog_desc")}
        />

        <Reveal>
          <div className="min-w-0">
            <div className="overflow-x-auto hidden lg:block">
              <EquationWide t={t} />
            </div>
            <div className="lg:hidden">
              <EquationNarrow t={t} />
            </div>
          </div>
        </Reveal>

        <Reveal delay={1}>
          <p className="t-body mt-8" style={{ maxWidth: 760, color: "var(--c-ink-1)" }}>{t("tech_cog_note")}</p>
        </Reveal>

        {/* The mechanism sentences. Each is the answer to the question an
            engineer asks about that stage; together they earn the words
            "agent operating system". */}
        <Reveal delay={2}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5 mt-10">
            {NOTES.map((nt) => (
              <div key={nt.k} className="flex gap-3">
                <span className="f-mono shrink-0" style={{ fontSize: 11, color: "var(--c-lime-ink)", width: 18, paddingTop: 3 }}>{nt.n}</span>
                <p className="t-small" style={{ margin: 0 }}>{t(nt.k)}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ── geometry ─────────────────────────────────────────────────────────
   ontology 8..208 (y 110..390) · two compile arrows 208..272 at y=232 and
   y=268 · harness 272..922 (y 60..440) · stage rows 290..610, y=140+i·48 ·
   model nested 640..902 (y 190..310). Denied-attempt line rises from the
   model top (770,184) to the harness top wall and dies at a strike on y=60;
   its label sits at (782,84), clear of the harness kicker (290..~360, y=90)
   and of the version stamp, which lives on the title row at (906,116). ── */
function EquationWide({ t }: { t: (k: string) => string }) {
  return (
    <svg viewBox="0 0 940 520" style={{ width: "100%", minWidth: 860 }} role="img"
      aria-label={`${t("tech_cog_lead")}${t("tech_cog_main")}`}>

      {/* the human upstream of everything */}
      <rect x="12" y="92" width="8" height="8" rx="2" fill="var(--c-violet)" />
      <text x="26" y="100" fontFamily="var(--f-mono)" fontSize="10" letterSpacing="0.12em" fill="var(--c-violet)">{t("tech_cog_author")}</text>

      {/* ontology */}
      <rect x="8" y="110" width="200" height="280" rx="12" fill="var(--c-plate)" stroke="var(--c-lime)" strokeWidth="1.5" />
      <rect x="8" y="110" width="4" height="280" rx="2" fill="var(--c-lime)" />
      <text x="26" y="140" fontFamily="var(--f-mono)" fontSize="10.5" letterSpacing="0.14em" fill="var(--c-lime-ink)">{t("tech_cog_onto_k")}</text>
      <text x="196" y="140" textAnchor="end" fontFamily="var(--f-mono)" fontSize="10.5" fill="var(--c-lime-ink)">{t("tech_ver")}</text>
      <text x="26" y="166" fontFamily="var(--f-sans)" fontWeight="600" fontSize="15" fill="var(--c-ink-1)">{t("tech_cog_onto")}</text>
      {ONTO.map((k, i) => (
        <text key={k} x="26" y={210 + i * 38} fontFamily="var(--f-mono)" fontSize="11" fill="var(--c-ink-4)">{t(`tech_cog_${k}`)}</text>
      ))}

      {/* two confidences: compiled (solid) and typed (dashed) */}
      <path d="M 208 232 H 266" fill="none" stroke="var(--c-lime)" strokeWidth="1.4" />
      <polygon points="266,228 272,232 266,236" fill="var(--c-lime)" />
      <text x="240" y="222" textAnchor="middle" fontFamily="var(--f-mono)" fontSize="10" fill="var(--c-lime-ink)">{t("tech_cog_compiles")}</text>
      <path d="M 208 268 H 266" fill="none" stroke="var(--c-lime-line)" strokeWidth="1.2" strokeDasharray="4 3" />
      <path d="M 260 264 L 266 268 L 260 272" fill="none" stroke="var(--c-lime-line)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <text x="240" y="286" textAnchor="middle" fontFamily="var(--f-mono)" fontSize="10" fill="var(--c-ink-4)">{t("tech_cog_typed")}</text>

      {/* harness — its wall is the tool boundary */}
      <rect x="272" y="60" width="650" height="380" rx="14" fill="none" stroke="var(--c-lime)" strokeWidth="1.5" />
      <text x="290" y="90" fontFamily="var(--f-mono)" fontSize="10.5" letterSpacing="0.14em" fill="var(--c-lime-ink)">{t("tech_cog_harn_k")}</text>
      <text x="290" y="116" fontFamily="var(--f-sans)" fontWeight="600" fontSize="15" fill="var(--c-ink-1)">{t("tech_cog_harn")}</text>
      <text x="906" y="116" textAnchor="end" fontFamily="var(--f-mono)" fontSize="10.5" fill="var(--c-lime-ink)">{t("tech_ver")}</text>

      {STAGES.map((st, i) => {
        const y = 140 + i * 48;
        return (
          <g key={st.k}>
            <rect x="290" y={y} width="320" height="40" rx="10" fill="var(--c-plate)" stroke="var(--c-line-graph-mid)" strokeWidth="1" />
            <text x="302" y={y + 25} fontFamily="var(--f-mono)" fontSize="10" fill="var(--c-ink-4)">{`0${i + 1}`}</text>
            <text x="328" y={y + 25} fontFamily="var(--f-sans)" fontSize="13" fill="var(--c-ink-1)">{t(`tech_cog_${st.k}`)}</text>
            <text x="598" y={y + 25} textAnchor="end" fontFamily="var(--f-mono)" fontSize="10"
              fill={st.compiled ? "var(--c-lime-ink)" : "var(--c-ink-4)"}>
              {t(`tech_cog_${st.k}_src`)}
            </text>
          </g>
        );
      })}

      {/* the model, nested inside the harness */}
      <rect x="640" y="190" width="262" height="120" rx="10" fill="var(--c-plate)" stroke="var(--c-info)" strokeWidth="1.2" />
      <text x="658" y="218" fontFamily="var(--f-mono)" fontSize="10.5" letterSpacing="0.14em" fill="var(--c-info)">{t("tech_cog_model_k")}</text>
      <text x="658" y="246" fontFamily="var(--f-sans)" fontWeight="600" fontSize="15" fill="var(--c-ink-1)">{t("tech_cog_model")}</text>
      <text x="658" y="270" fontFamily="var(--f-mono)" fontSize="10" fill="var(--c-ink-4)">{t("tech_cog_model_note")}</text>
      <text x="640" y="342" fontFamily="var(--f-mono)" fontSize="10.5" fill="var(--c-ink-4)">{t("tech_cog_inside")}</text>

      {/* a denied action: leaves the model, dies at the wall. Dash pattern
          and a strike carry "refused" — never a lowered opacity. */}
      <path d="M 770 184 V 76" fill="none" stroke="var(--c-amber)" strokeWidth="1.2" strokeDasharray="4 3" />
      <path d="M 764 66 L 776 78" stroke="var(--c-amber)" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M 776 66 L 764 78" stroke="var(--c-amber)" strokeWidth="1.6" strokeLinecap="round" />
      <text x="782" y="84" fontFamily="var(--f-mono)" fontSize="10" fill="var(--c-ink-4)">{t("tech_cog_boundary")}</text>

      {/* = AGENT, bracketing all three terms */}
      <path d="M 8 462 V 474 H 424" fill="none" stroke="var(--c-line-graph-mid)" strokeWidth="1" />
      <path d="M 506 474 H 922 V 462" fill="none" stroke="var(--c-line-graph-mid)" strokeWidth="1" />
      <text x="465" y="480" textAnchor="middle" fontFamily="var(--f-sans)" fontWeight="600" fontSize="15" fill="var(--c-lime-ink)">{t("tech_cog_eq")}</text>
    </svg>
  );
}

/* Narrow variant: three terms stack, the model stays nested, the per-stage
   source tags are dropped (under 6px at this width). Enclosure, version
   stamps and the equation survive. */
function EquationNarrow({ t }: { t: (k: string) => string }) {
  return (
    <svg viewBox="0 0 360 640" style={{ width: "100%" }} role="img"
      aria-label={`${t("tech_cog_lead")}${t("tech_cog_main")}`}>
      <rect x="8" y="8" width="344" height="122" rx="12" fill="var(--c-plate)" stroke="var(--c-lime)" strokeWidth="1.5" />
      <rect x="8" y="8" width="4" height="122" rx="2" fill="var(--c-lime)" />
      <text x="26" y="34" fontFamily="var(--f-mono)" fontSize="10.5" letterSpacing="0.14em" fill="var(--c-lime-ink)">{t("tech_cog_onto_k")}</text>
      <text x="338" y="34" textAnchor="end" fontFamily="var(--f-mono)" fontSize="10.5" fill="var(--c-lime-ink)">{t("tech_ver")}</text>
      <text x="26" y="58" fontFamily="var(--f-sans)" fontWeight="600" fontSize="14" fill="var(--c-ink-1)">{t("tech_cog_onto")}</text>
      <text x="26" y="84" fontFamily="var(--f-mono)" fontSize="10.5" fill="var(--c-ink-4)">{t("tech_cog_onto_1")} · {t("tech_cog_onto_2")}</text>
      <text x="26" y="106" fontFamily="var(--f-mono)" fontSize="10.5" fill="var(--c-ink-4)">{t("tech_cog_onto_3")} · {t("tech_cog_onto_4")}</text>

      <path d="M 180 130 V 152" fill="none" stroke="var(--c-lime)" strokeWidth="1.4" />
      <polygon points="176,152 180,158 184,152" fill="var(--c-lime)" />
      <text x="192" y="148" fontFamily="var(--f-mono)" fontSize="10" fill="var(--c-ink-4)">{t("tech_cog_compiles")} · {t("tech_cog_typed")}</text>

      <rect x="8" y="158" width="344" height="384" rx="14" fill="none" stroke="var(--c-lime)" strokeWidth="1.5" />
      <text x="26" y="184" fontFamily="var(--f-mono)" fontSize="10.5" letterSpacing="0.14em" fill="var(--c-lime-ink)">{t("tech_cog_harn_k")}</text>
      <text x="338" y="184" textAnchor="end" fontFamily="var(--f-mono)" fontSize="10.5" fill="var(--c-lime-ink)">{t("tech_ver")}</text>
      {STAGES.map((st, i) => {
        const y = 198 + i * 40;
        return (
          <g key={st.k}>
            <rect x="24" y={y} width="312" height="32" rx="8" fill="var(--c-plate)" stroke="var(--c-line-graph-mid)" strokeWidth="1" />
            <text x="38" y={y + 21} fontFamily="var(--f-mono)" fontSize="10" fill="var(--c-ink-4)">{`0${i + 1}`}</text>
            <text x="64" y={y + 21} fontFamily="var(--f-sans)" fontSize="12.5" fill="var(--c-ink-1)">{t(`tech_cog_${st.k}`)}</text>
          </g>
        );
      })}
      <rect x="24" y="444" width="312" height="84" rx="10" fill="var(--c-plate)" stroke="var(--c-info)" strokeWidth="1.2" />
      <text x="38" y="470" fontFamily="var(--f-mono)" fontSize="10.5" letterSpacing="0.14em" fill="var(--c-info)">{t("tech_cog_model_k")}</text>
      <text x="38" y="494" fontFamily="var(--f-sans)" fontWeight="600" fontSize="14" fill="var(--c-ink-1)">{t("tech_cog_model")}</text>
      <text x="38" y="516" fontFamily="var(--f-mono)" fontSize="10" fill="var(--c-ink-4)">{t("tech_cog_boundary")}</text>

      <path d="M 8 566 V 578 H 128" fill="none" stroke="var(--c-line-graph-mid)" strokeWidth="1" />
      <path d="M 232 578 H 352 V 566" fill="none" stroke="var(--c-line-graph-mid)" strokeWidth="1" />
      <text x="180" y="584" textAnchor="middle" fontFamily="var(--f-sans)" fontWeight="600" fontSize="14" fill="var(--c-lime-ink)">{t("tech_cog_eq")}</text>
    </svg>
  );
}
