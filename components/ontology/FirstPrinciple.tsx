"use client";
import React from "react";
import { useApp } from "@/lib/i18n";
import { Eyebrow, Reveal, Em } from "@/components/editorial/parts";

export default function FirstPrinciple() {
  const { t } = useApp();
  return (
    <section style={{ paddingTop: 100, paddingBottom: 90 }}>
      <div className="edito-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-5">
            <Reveal><Eyebrow>{t("onto_principle_label")}</Eyebrow></Reveal>
            <Reveal delay={1}>
              <h2 className="t-h2 mt-6">
                Semantics ={" "}
                <span style={{ color: "var(--c-info)" }}>Subject</span> +{" "}
                <span style={{ color: "var(--c-lime)" }}>Verb</span> +{" "}
                <span style={{ color: "var(--c-coral)" }}>Object</span>.
              </h2>
            </Reveal>
            <Reveal delay={2}>
              <p className="mt-6" style={{ fontSize: 15, color: "var(--c-ink-3)", lineHeight: 1.65, maxWidth: 440 }}>
                Everything else is decoration. <Em>Foreign keys are obsolete</Em> in
                the LLM era — agents don't need joins, they need semantic context.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={1}>
              <SvoDiagram t={t} />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function SvoDiagram({ t }: { t: (k: string) => string }) {
  return (
    <svg viewBox="0 0 640 300" className="w-full h-auto" style={{ filter: "drop-shadow(0 30px 60px rgba(0,0,0,0.4))" }} role="img" aria-label="Subject applies-to Object">
      <defs>
        <linearGradient id="svo-conn" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="oklch(0.78 0.14 240)" stopOpacity="0.7" />
          <stop offset="0.5" stopColor="oklch(0.92 0.22 130)" stopOpacity="0.95" />
          <stop offset="1" stopColor="oklch(0.72 0.20 25)" stopOpacity="0.7" />
        </linearGradient>
        <filter id="svo-glow"><feGaussianBlur stdDeviation="5" /></filter>
      </defs>

      <line x1="150" y1="150" x2="490" y2="150" stroke="url(#svo-conn)" strokeWidth="1.5" />

      {/* verb chip */}
      <g transform="translate(320 150)">
        <rect x="-52" y="-15" width="104" height="30" rx="15" fill="oklch(0.16 0.018 260)" stroke="var(--c-lime)" strokeWidth="1" />
        <text x="0" y="5" textAnchor="middle" fontFamily="var(--f-mono)" fontSize="13" fill="var(--c-lime)" letterSpacing="0.02em">applies-to</text>
      </g>

      {/* subject */}
      <g transform="translate(60 110)">
        <rect width="120" height="80" rx="12" fill="oklch(0.18 0.018 260)" stroke="var(--c-info)" strokeWidth="1.2" />
        <text x="16" y="28" fontFamily="var(--f-mono)" fontSize="9" fill="var(--c-info)" letterSpacing="0.14em">SUBJECT</text>
        <text x="16" y="50" fontFamily="var(--f-sans)" fontSize="17" fontWeight="600" fill="var(--c-ink-1)" letterSpacing="-0.01em">Candidate</text>
        <text x="16" y="68" fontFamily="var(--f-mono)" fontSize="9.5" fill="var(--c-ink-4)">noun · object</text>
        <circle cx="110" cy="11" r="3" fill="var(--c-info)">
          <animate attributeName="opacity" values="1;0.4;1" dur="2.6s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* object */}
      <g transform="translate(460 110)">
        <rect width="130" height="80" rx="12" fill="oklch(0.18 0.018 260)" stroke="var(--c-coral)" strokeWidth="1.2" />
        <text x="16" y="28" fontFamily="var(--f-mono)" fontSize="9" fill="var(--c-coral)" letterSpacing="0.14em">OBJECT</text>
        <text x="16" y="50" fontFamily="var(--f-sans)" fontSize="17" fontWeight="600" fill="var(--c-ink-1)" letterSpacing="-0.01em">Requirement</text>
        <text x="16" y="68" fontFamily="var(--f-mono)" fontSize="9.5" fill="var(--c-ink-4)">noun · object</text>
      </g>

      {/* verb label */}
      <text x="320" y="118" textAnchor="middle" fontFamily="var(--f-mono)" fontSize="9.5" fill="var(--c-ink-4)" letterSpacing="0.14em">VERB · ACTION</text>

      <circle r="4" fill="var(--c-lime)" filter="url(#svo-glow)">
        <animateMotion dur="3.6s" repeatCount="indefinite" path="M 180 150 L 460 150" />
        <animate attributeName="opacity" values="0;1;1;0" dur="3.6s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}
