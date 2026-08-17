"use client";
import React from "react";
import { useApp } from "@/lib/i18n";
import { Rich } from "@/components/editorial/parts";
import Reveal from "./Reveal";
import { useReducedMotion } from "./useReducedMotion";

/** "Capability can be bought in. Judgement cannot be outsourced."
 *
 *  The picture is a CONTAINMENT, not a pipeline. A pipeline says "first this,
 *  then that"; swap its labels and it reads the same. The claim here is an
 *  asymmetry — capability crosses inward, judgement never crosses outward —
 *  and only a closed perimeter with one aperture can draw that. The ontology
 *  plate straddles the perimeter wall, so it *is* the gate rather than a box
 *  beside one, and the outbound attempt visibly dies at a strike.
 *
 *  Colour budget is three tokens with one meaning each: info = borrowed
 *  capability, lime = what is yours, amber = the refusal. Violet is retired
 *  from this section — it means "a person" page-wide, as the hero established. */
export default function DualityV2() {
  const { t } = useApp();
  return (
    <section className="section">
      <div className="edito-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="eyebrow mb-6">{t("h_dual_eyebrow")}</div>
            </Reveal>
            <Reveal delay={1}>
              {/* Ink carries the emphasis, not weight: .t-em is weight 500 and
                  would render LIGHTER than the .t-h2 (600) around it. */}
              <p className="t-h2">
                <span style={{ color: "var(--c-ink-3)" }}>{t("h_dual_q_lead")}</span>
                <span style={{ color: "var(--c-ink-1)" }}>{t("h_dual_q_main")}</span>
              </p>
            </Reveal>
            <Reveal delay={2}>
              <p className="t-body mt-7" style={{ maxWidth: 480 }}>
                <Rich text={t("h_dual_sub")} />
              </p>
            </Reveal>
            <Reveal delay={3}>
              <p className="t-small mt-6" style={{ maxWidth: 460 }}>
                {t("h_dual_note")}
              </p>
            </Reveal>
          </div>

          {/* min-w-0 on the grid item itself: a grid item defaults to
              min-width:auto and refuses to shrink below its content. */}
          <div className="lg:col-span-7 min-w-0">
            <Reveal delay={1}>
              <div className="overflow-x-auto">
                <PerimeterDiagram t={t} />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

const DUR = "6s";

function PerimeterDiagram({ t }: { t: (k: string) => string }) {
  const still = useReducedMotion();
  return (
    <svg
      viewBox="0 0 560 340"
      style={{ width: "100%", minWidth: 520 }}
      role="img"
      aria-label={`${t("h_dual_q_lead")}${t("h_dual_q_main")}`}
    >
      {/* zone captions */}
      <text x="8" y="68" fontFamily="var(--f-mono)" fontSize="11" letterSpacing="0.16em" fill="var(--c-ink-4)">
        {t("h_dual_d_outside")}
      </text>
      <text x="252" y="56" fontFamily="var(--f-mono)" fontSize="11" letterSpacing="0.16em" fill="var(--c-lime-ink)">
        {t("h_dual_d_inside")}
      </text>

      {/* the perimeter — a frame, never a plate */}
      <rect x="236" y="24" width="312" height="292" rx="20" fill="none" stroke="var(--c-lime)" strokeWidth="1.4" />

      {/* inbound: capability crosses in */}
      <path d="M 128 132 H 172" stroke="var(--c-lime)" strokeWidth="1.4" fill="none" />
      <polygon points="170,128 176,132 170,136" fill="var(--c-lime)" />
      <text x="152" y="92" textAnchor="middle" fontFamily="var(--f-mono)" fontSize="11" fill="var(--c-ink-4)">
        {t("h_dual_d_in")}
      </text>

      {/* outbound: refused. Dash pattern + strike, never a lowered opacity —
          a meaning-bearing stroke must stay above 3:1. */}
      <path d="M 176 186 H 132" stroke="var(--c-amber)" strokeWidth="1.2" strokeDasharray="4 3" fill="none" />
      <path d="M 134 182 L 128 186 L 134 190" stroke="var(--c-amber)" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 146 180 L 158 192" stroke="var(--c-amber)" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M 158 180 L 146 192" stroke="var(--c-amber)" strokeWidth="1.6" strokeLinecap="round" />
      <text x="86" y="210" textAnchor="middle" fontFamily="var(--f-mono)" fontSize="11" fill="var(--c-ink-4)">
        {t("h_dual_d_out1")}
      </text>
      <text x="86" y="228" textAnchor="middle" fontFamily="var(--f-mono)" fontSize="11" fill="var(--c-ink-4)">
        {t("h_dual_d_out2")}
      </text>

      {/* ontology → what it holds */}
      <path d="M 296 126 C 318 126 322 118 344 118" stroke="var(--c-line-graph-mid)" strokeWidth="1.1" fill="none" />
      <path d="M 296 152 C 318 152 322 174 344 174" stroke="var(--c-line-graph-mid)" strokeWidth="1.1" fill="none" />
      <path d="M 296 178 C 318 178 322 230 344 230" stroke="var(--c-line-graph-mid)" strokeWidth="1.1" fill="none" />

      <Chip y={96} baseline={122} label={t("h_dual_d_obj")} />
      <Chip y={152} baseline={178} label={t("h_dual_d_rules")} />
      <Chip y={208} baseline={234} label={t("h_dual_d_rights")} />

      <path d="M 392 252 V 268" stroke="var(--c-line-graph-mid)" strokeWidth="1.1" fill="none" />
      <polygon points="388,262 392,268 396,262" fill="var(--c-line-graph-mid)" />

      {/* agents act only inside the line */}
      <rect x="252" y="268" width="280" height="42" rx="21" fill="var(--c-plate)" stroke="var(--c-lime)" strokeWidth="1.2" />
      <text x="392" y="294" textAnchor="middle" fontFamily="var(--f-sans)" fontSize="12.5" fill="var(--c-ink-1)">
        {t("h_dual_d_act")}
      </text>

      {/* the borrowed capability */}
      <rect x="8" y="104" width="120" height="56" rx="10" fill="var(--c-plate)" stroke="var(--c-info)" strokeWidth="1.1" />
      <text x="68" y="126" textAnchor="middle" fontFamily="var(--f-mono)" fontSize="11" letterSpacing="0.16em" fill="var(--c-info)">
        {t("h_dual_d_model_k")}
      </text>
      <text x="68" y="146" textAnchor="middle" fontFamily="var(--f-sans)" fontWeight="500" fontSize="12.5" fill="var(--c-ink-1)">
        {t("h_dual_d_model")}
      </text>

      {/* the aperture. Painted after the frame so its opaque plate occludes
          the perimeter wall — that occlusion IS the gate. */}
      <rect x="176" y="104" width="120" height="96" rx="12" fill="var(--c-plate)" stroke="var(--c-lime)" strokeWidth="1.4" />
      <text x="236" y="130" textAnchor="middle" fontFamily="var(--f-mono)" fontSize="11" letterSpacing="0.16em" fill="var(--c-lime-ink)">
        {t("h_dual_d_onto_k")}
      </text>
      <text x="236" y="156" textAnchor="middle" fontFamily="var(--f-sans)" fontWeight="500" fontSize="13" fill="var(--c-ink-1)">
        {t("h_dual_d_onto1")}
      </text>
      <text x="236" y="176" textAnchor="middle" fontFamily="var(--f-sans)" fontWeight="500" fontSize="13" fill="var(--c-ink-1)">
        {t("h_dual_d_onto2")}
      </text>

      {/* Motion: two dots on one 6s clock, both travelling in open space so
          nothing is ever occluded. The outbound dot dies at the strike — that
          refusal, performed, is the argument. */}
      {still ? (
        <>
          <circle cx="172" cy="132" r="4.5" fill="var(--c-lime)" />
          <circle cx="162" cy="186" r="4" fill="var(--c-amber)" />
          <circle cx="344" cy="174" r="3.5" fill="var(--c-lime)" />
        </>
      ) : (
        <>
          <circle r="4.5" fill="var(--c-lime)">
            <animateMotion dur={DUR} repeatCount="indefinite" path="M 128 132 H 172" keyPoints="0;1;1" keyTimes="0;0.24;1" calcMode="linear" />
            <animate attributeName="opacity" values="0;1;1;0;0" keyTimes="0;0.04;0.20;0.26;1" dur={DUR} repeatCount="indefinite" calcMode="linear" />
          </circle>
          <circle r="4" fill="var(--c-amber)">
            <animateMotion dur={DUR} repeatCount="indefinite" path="M 172 186 L 152 186" keyPoints="0;0;1;1" keyTimes="0;0.42;0.62;1" calcMode="linear" />
            <animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;0.42;0.46;0.62;0.68;1" dur={DUR} repeatCount="indefinite" calcMode="linear" />
          </circle>
          <circle r="3.5" fill="var(--c-lime)">
            <animateMotion dur={DUR} repeatCount="indefinite" path="M 296 152 C 318 152 322 174 344 174" keyPoints="0;0;1;1" keyTimes="0;0.30;0.50;1" calcMode="linear" />
            <animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;0.30;0.34;0.48;0.54;1" dur={DUR} repeatCount="indefinite" calcMode="linear" />
          </circle>
        </>
      )}
    </svg>
  );
}

/** A thing the ontology holds. The lime cap keeps the accent present without
 *  making lime the default outline of every box in the frame. */
function Chip({ y, baseline, label }: { y: number; baseline: number; label: string }) {
  return (
    <>
      <rect x="344" y={y} width="188" height="44" rx="22" fill="var(--c-plate)" stroke="var(--c-line-graph-mid)" strokeWidth="1" />
      <rect x="344" y={y} width="3" height="44" rx="1.5" fill="var(--c-lime)" />
      <text x="360" y={baseline} fontFamily="var(--f-sans)" fontSize="13" fill="var(--c-ink-1)">
        {label}
      </text>
    </>
  );
}
