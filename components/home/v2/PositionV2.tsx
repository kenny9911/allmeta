"use client";
import React from "react";
import { useApp } from "@/lib/i18n";
import { Rich } from "@/components/editorial/parts";
import Reveal from "./Reveal";

/** Editorial position statement. Pull-quote on the left, thin SVG diagram
 *  on the right. No card grids, no top-bars. Magazine column flow. */
export default function PositionV2() {
  const { t } = useApp();
  return (
    <section className="section">
      <div className="edito-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-6">
            <Reveal>
              <div className="eyebrow mb-6">{t("h_pos_eyebrow")}</div>
            </Reveal>
            <Reveal delay={1}>
              <p className="t-h2">
                <span style={{ color: "var(--c-ink-3)" }}>{t("h_pos_q_lead")}</span>
                <span style={{ color: "var(--c-ink-1)" }}>
                  <Rich text={t("h_pos_q_main")} />
                </span>
              </p>
            </Reveal>
            <Reveal delay={2}>
              <p className="t-body mt-7" style={{ maxWidth: 520 }}>
                <Rich text={t("h_pos_sub")} />
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <Reveal delay={1}>
              <PositionDiagram t={t} />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function PositionDiagram({ t }: { t: (k: string) => string }) {
  return (
    <svg
      viewBox="0 0 640 360"
      className="w-full h-auto"
      style={{ filter: "drop-shadow(0 30px 60px rgba(0,0,0,0.4))" }}
      role="img"
      aria-label="LLM understands. Ontology translates. Agents execute."
    >
      <defs>
        <linearGradient id="pos-conn" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="oklch(0.78 0.14 240)" stopOpacity="0.7" />
          <stop offset="0.5" stopColor="oklch(0.92 0.22 130)" stopOpacity="0.9" />
          <stop offset="1" stopColor="oklch(0.72 0.20 25)" stopOpacity="0.7" />
        </linearGradient>
        <filter id="pos-glow">
          <feGaussianBlur stdDeviation="6" />
        </filter>
      </defs>

      <line x1="120" y1="180" x2="520" y2="180" stroke="url(#pos-conn)" strokeWidth="1.5" />

      {/* center — Ontology */}
      <g transform="translate(320 180)">
        <rect x="-90" y="-50" width="180" height="100" rx="14" fill="oklch(0.18 0.018 260)" stroke="var(--c-lime)" strokeWidth="1.3" />
        <text x="0" y="-22" textAnchor="middle" fontFamily="var(--f-mono)" fontSize="10.5" letterSpacing="0.16em" fill="var(--c-lime)">{t("h_pos_d_onto")}</text>
        <text x="0" y="7" textAnchor="middle" fontFamily="var(--f-sans)" fontWeight="600" fontSize="20" fill="var(--c-ink-1)" letterSpacing="-0.02em">{t("h_pos_d_translates")}</text>
        <text x="0" y="30" textAnchor="middle" fontFamily="var(--f-sans)" fontSize="11" fill="var(--c-ink-3)">{t("h_pos_d_oar")}</text>
        <circle cx="76" cy="-36" r="3" fill="var(--c-lime)">
          <animate attributeName="opacity" values="1;0.35;1" dur="2.4s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* left — LLM */}
      <g transform="translate(60 180)">
        <circle r="46" fill="oklch(0.18 0.018 260)" stroke="var(--c-info)" strokeWidth="1.1" />
        <text y="-4" textAnchor="middle" fontFamily="var(--f-mono)" fontSize="9.5" letterSpacing="0.18em" fill="var(--c-info)">{t("h_pos_d_llm")}</text>
        <text y="15" textAnchor="middle" fontFamily="var(--f-sans)" fontWeight="500" fontSize="13" fill="var(--c-ink-1)">{t("h_pos_d_understands")}</text>
      </g>

      {/* right — Agent */}
      <g transform="translate(580 180)">
        <circle r="46" fill="oklch(0.18 0.018 260)" stroke="var(--c-coral)" strokeWidth="1.1" />
        <text y="-4" textAnchor="middle" fontFamily="var(--f-mono)" fontSize="9.5" letterSpacing="0.18em" fill="var(--c-coral)">{t("h_pos_d_agent")}</text>
        <text y="15" textAnchor="middle" fontFamily="var(--f-sans)" fontWeight="500" fontSize="13" fill="var(--c-ink-1)">{t("h_pos_d_executes")}</text>
      </g>

      <circle r="3.5" fill="var(--c-lime)" filter="url(#pos-glow)">
        <animateMotion dur="4s" repeatCount="indefinite" path="M 110 180 L 530 180" />
        <animate attributeName="opacity" values="0;1;1;0" dur="4s" repeatCount="indefinite" />
      </circle>

      <text x="60" y="100" textAnchor="middle" fontFamily="var(--f-mono)" fontSize="10" fill="var(--c-ink-4)" letterSpacing="0.12em">{t("h_pos_d_input")}</text>
      <text x="320" y="100" textAnchor="middle" fontFamily="var(--f-mono)" fontSize="10" fill="var(--c-ink-4)" letterSpacing="0.12em">{t("h_pos_d_meaning")}</text>
      <text x="580" y="100" textAnchor="middle" fontFamily="var(--f-mono)" fontSize="10" fill="var(--c-ink-4)" letterSpacing="0.12em">{t("h_pos_d_output")}</text>

      <text x="60" y="262" textAnchor="middle" fontFamily="var(--f-sans)" fontSize="10.5" fill="var(--c-ink-4)">{t("h_pos_d_sub1")}</text>
      <text x="320" y="262" textAnchor="middle" fontFamily="var(--f-sans)" fontSize="10.5" fill="var(--c-ink-2)">{t("h_pos_d_sub2")}</text>
      <text x="580" y="262" textAnchor="middle" fontFamily="var(--f-sans)" fontSize="10.5" fill="var(--c-ink-4)">{t("h_pos_d_sub3")}</text>
    </svg>
  );
}
