"use client";
import React from "react";
import Link from "next/link";
import { useApp } from "@/lib/i18n";
import { Rich } from "@/components/editorial/parts";
import Reveal from "./Reveal";

export default function ProductBentoV2({
  ontologyUrl,
  operatorUrl,
}: {
  ontologyUrl: string;
  operatorUrl: string;
}) {
  const { t } = useApp();
  return (
    <section className="section">
      <div className="edito-container">
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12 items-end">
            <div className="lg:col-span-7">
              <div className="eyebrow mb-5">{t("h_bento_eyebrow")}</div>
              <h2 className="t-h2">
                {t("h_bento_t1")} {t("h_bento_t2")}
              </h2>
            </div>
            <p className="t-body lg:col-span-5" style={{ maxWidth: 460 }}>
              {t("h_bento_sub")}
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          <Reveal delay={1} className="lg:col-span-7">
            <BentoCard
              tone="lime"
              href="/ontology"
              launch={ontologyUrl}
              kicker={t("h_bento_onto_kicker")}
              title="allmeta Ontology"
              tagline={<Rich text={t("h_bento_onto_tag")} />}
              body={t("h_bento_onto_body")}
              size="lg"
            >
              <OntologyMiniMock />
            </BentoCard>
          </Reveal>

          <Reveal delay={2} className="lg:col-span-5">
            <BentoCard
              tone="violet"
              href="/operator"
              launch={operatorUrl}
              kicker={t("h_bento_op_kicker")}
              title="Agentic Operator"
              tagline={<Rich text={t("h_bento_op_tag")} />}
              body={t("h_bento_op_body")}
              size="lg"
            >
              <OperatorMiniMock />
            </BentoCard>
          </Reveal>
        </div>

        {/* Small capability tiles */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-5">
          <Reveal delay={1}><CapTile name={t("h_cap_autogen")} hint={t("h_cap_autogen_h")} /></Reveal>
          <Reveal delay={2}><CapTile name={t("h_cap_builders")} hint={t("h_cap_builders_h")} /></Reveal>
          <Reveal delay={3}><CapTile name={t("h_cap_infer")} hint={t("h_cap_infer_h")} /></Reveal>
          <Reveal delay={4}><CapTile name={t("h_cap_codegen")} hint={t("h_cap_codegen_h")} /></Reveal>
        </div>
      </div>
    </section>
  );
}

function BentoCard({
  href,
  launch,
  kicker,
  title,
  tagline,
  body,
  tone,
  size,
  children,
}: {
  href: string;
  launch: string;
  kicker: string;
  title: string;
  tagline: React.ReactNode;
  body: string;
  tone: "lime" | "violet";
  size: "lg" | "md";
  children?: React.ReactNode;
}) {
  const { t } = useApp();
  const c = tone === "lime" ? "var(--c-lime)" : "var(--c-violet)";
  return (
    <div
      className="hairline glow-ring relative overflow-hidden flex flex-col"
      style={{
        minHeight: size === "lg" ? 480 : 380,
        boxShadow: "0 30px 60px -30px rgba(0,0,0,0.5)",
      }}
    >
      <div className="relative" style={{ height: size === "lg" ? 240 : 200, borderBottom: "1px solid color-mix(in oklab, var(--c-ink-4) 12%, transparent)", overflow: "hidden" }}>
        {children}
        <div
          aria-hidden
          className="absolute pointer-events-none"
          style={{ inset: 0, background: `radial-gradient(ellipse 50% 40% at 100% 0%, color-mix(in oklab, ${c} 16%, transparent), transparent 60%)` }}
        />
      </div>

      <div className="p-7 flex-1 flex flex-col">
        <div className="flex items-center justify-between mb-3">
          <span className="f-mono" style={{ fontSize: 10.5, color: c, letterSpacing: "0.16em", textTransform: "uppercase" }}>
            {kicker}
          </span>
        </div>
        <h3 className="t-h3" style={{ marginBottom: 8 }}>
          {title}
        </h3>
        <div className="t-title" style={{ color: "var(--c-ink-2)", marginBottom: 14 }}>
          {tagline}
        </div>
        <p className="t-body" style={{ color: "var(--c-ink-3)", marginBottom: 24, maxWidth: 520 }}>
          {body}
        </p>
        <div className="mt-auto flex items-center gap-4">
          <Link href={href} className="link-edito" style={{ fontSize: 13.5 }}>
            {t("h_bento_readmore")} →
          </Link>
          <a href={launch} className="f-mono" style={{ fontSize: 11, color: c, letterSpacing: "0.12em", textTransform: "uppercase", textDecoration: "none" }}>
            {t("h_bento_launch")} ↗
          </a>
        </div>
      </div>
    </div>
  );
}

function CapTile({ name, hint }: { name: string; hint: string }) {
  return (
    <div className="hairline" style={{ padding: "20px 20px", minHeight: 110, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
      <div className="f-mono" style={{ fontSize: 10.5, color: "var(--c-ink-4)", letterSpacing: "0.12em", textTransform: "uppercase" }}>
        {hint}
      </div>
      <div className="t-title">
        {name}
      </div>
    </div>
  );
}

/* ---------- small abstract mockups for the bento cards ---------- */
function OntologyMiniMock() {
  return (
    <svg viewBox="0 0 600 240" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
      <defs>
        <linearGradient id="mini-l" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="oklch(0.92 0.22 130)" stopOpacity="0.95" />
          <stop offset="1" stopColor="oklch(0.92 0.22 130)" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      <pattern id="dots" width="22" height="22" patternUnits="userSpaceOnUse">
        <circle cx="1" cy="1" r="0.8" fill="oklch(0.5 0.012 260)" opacity="0.6" />
      </pattern>
      <rect width="100%" height="100%" fill="url(#dots)" />
      <g>
        <rect x="60" y="60" width="120" height="44" rx="8" fill="oklch(0.18 0.018 260)" stroke="var(--c-lime)" strokeWidth="1.2" />
        <text x="76" y="80" fontFamily="var(--f-mono)" fontSize="9" fill="var(--c-ink-4)" letterSpacing="0.1em">SUBJECT</text>
        <text x="76" y="95" fontFamily="var(--f-sans)" fontSize="13" fontWeight="600" fill="var(--c-ink-1)">Candidate</text>

        <rect x="380" y="140" width="140" height="44" rx="8" fill="oklch(0.18 0.018 260)" stroke="var(--c-violet)" strokeWidth="1.2" />
        <text x="396" y="160" fontFamily="var(--f-mono)" fontSize="9" fill="var(--c-ink-4)" letterSpacing="0.1em">OBJECT</text>
        <text x="396" y="175" fontFamily="var(--f-sans)" fontSize="13" fontWeight="600" fill="var(--c-ink-1)">Requirement</text>

        <path d="M 180 88 C 270 88, 320 160, 380 160" stroke="url(#mini-l)" strokeWidth="1.4" fill="none" />
        <g transform="translate(280 124)">
          <rect x="-30" y="-9" width="60" height="18" rx="9" fill="oklch(0.155 0.018 260)" stroke="var(--c-lime)" strokeWidth="0.8" />
          <text x="0" y="3.5" textAnchor="middle" fontFamily="var(--f-mono)" fontSize="9" fill="var(--c-lime)">applies-to</text>
        </g>

        <circle r="3" fill="var(--c-lime)">
          <animateMotion dur="3s" repeatCount="indefinite" path="M 180 88 C 270 88, 320 160, 380 160" />
          <animate attributeName="opacity" values="0;1;0" dur="3s" repeatCount="indefinite" />
        </circle>
      </g>
    </svg>
  );
}

function OperatorMiniMock() {
  const ag = ["Planner", "Executor", "Validator", "Reflection", "Approval", "Domain"];
  return (
    <div className="relative w-full h-full overflow-hidden" style={{ padding: "16px 18px" }}>
      <div className="grid grid-cols-3 gap-2" style={{ height: "100%" }}>
        {ag.map((a, i) => (
          <div
            key={a}
            style={{
              background: "color-mix(in oklab, var(--c-surface) 50%, transparent)",
              border: "1px solid color-mix(in oklab, var(--c-ink-4) 14%, transparent)",
              borderRadius: 8,
              padding: "10px 11px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div className="flex items-center justify-between">
              <span className="f-mono" style={{ fontSize: 9.5, color: "var(--c-ink-4)", letterSpacing: "0.1em" }}>0{i + 1}</span>
              <span style={{ width: 6, height: 6, borderRadius: 999, background: i < 4 ? "var(--c-violet)" : "var(--c-cyan)", boxShadow: i < 4 ? "0 0 6px var(--c-violet)" : undefined }} />
            </div>
            <div className="f-display" style={{ fontSize: 12, fontWeight: 500, color: "var(--c-ink-1)", letterSpacing: "-0.005em" }}>
              {a}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
