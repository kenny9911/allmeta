"use client";
import React from "react";
import Link from "next/link";
import Reveal from "./Reveal";

export default function ProductBentoV2({
  ontologyUrl,
  operatorUrl,
}: {
  ontologyUrl: string;
  operatorUrl: string;
}) {
  return (
    <section style={{ paddingTop: 100, paddingBottom: 100 }}>
      <div className="edito-container">
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12 items-end">
            <div className="lg:col-span-7">
              <div className="eyebrow mb-5">The dual core</div>
              <h2 className="h-sans" style={{ fontSize: "clamp(40px, 5.4vw, 72px)", letterSpacing: "-0.045em", lineHeight: 0.98 }}>
                Two products.{" "}
                <span className="h-edito" style={{ fontStyle: "italic", letterSpacing: "-0.01em" }}>
                  One operating system.
                </span>
              </h2>
            </div>
            <p className="lg:col-span-5" style={{ fontSize: 14.5, color: "var(--c-ink-3)", lineHeight: 1.6, maxWidth: 460 }}>
              One makes agents think. One makes them run. Together they form the
              agentic core — and either one drops into the place where your
              ERP stops being useful.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          <Reveal delay={1} className="lg:col-span-7">
            <BentoCard
              tone="lime"
              href="/ontology"
              launch={ontologyUrl}
              kicker="Core · the Brain"
              title="allmeta Ontology"
              tagline={<>The <em className="f-serif" style={{ fontStyle: "italic" }}>actionable</em> ontology platform.</>}
              body="Author Objects, Actions, Rules, and Events on one semantic surface — the same surface every agent reads and writes. Live since 2026."
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
              kicker="Core · the Runtime"
              title="Agentic Operator"
              tagline={<>Ontology-driven agents, <em className="f-serif" style={{ fontStyle: "italic" }}>at scale</em>.</>}
              body="Planner · Executor · Validator · Reflection · Approval · Domain. Event-driven, fully traced, end-to-end auto-pilot."
              size="lg"
            >
              <OperatorMiniMock />
            </BentoCard>
          </Reveal>
        </div>

        {/* Small capability tiles */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-5">
          <Reveal delay={1}><CapTile name="Inference Engine"     hint="reason on the ontology" /></Reveal>
          <Reveal delay={2}><CapTile name="Rule Generator"        hint="policies → atomic rules" /></Reveal>
          <Reveal delay={3}><CapTile name="CodeGen"               hint="ontology → agent code" /></Reveal>
          <Reveal delay={4}><CapTile name="6 Builders"            hint="domain-specific kits" /></Reveal>
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
  const c = tone === "lime" ? "var(--c-lime)" : "var(--c-violet)";
  return (
    <div
      className="hairline glow-ring relative overflow-hidden flex flex-col"
      style={{
        minHeight: size === "lg" ? 480 : 380,
        boxShadow: "0 30px 60px -30px rgba(0,0,0,0.5)",
      }}
    >
      {/* mockup section */}
      <div className="relative" style={{ height: size === "lg" ? 240 : 200, borderBottom: "1px solid color-mix(in oklab, var(--c-ink-4) 12%, transparent)", overflow: "hidden" }}>
        {children}
        <div
          aria-hidden
          className="absolute pointer-events-none"
          style={{
            inset: 0,
            background: `radial-gradient(ellipse 50% 40% at 100% 0%, color-mix(in oklab, ${c} 16%, transparent), transparent 60%)`,
          }}
        />
      </div>

      <div className="p-7 flex-1 flex flex-col">
        <div className="flex items-center justify-between mb-3">
          <span className="f-mono" style={{ fontSize: 10.5, color: c, letterSpacing: "0.16em", textTransform: "uppercase" }}>
            {kicker}
          </span>
        </div>
        <h3 className="h-sans" style={{ fontSize: "clamp(28px, 2.6vw, 36px)", letterSpacing: "-0.025em", lineHeight: 1.06, color: "var(--c-ink-1)", marginBottom: 8 }}>
          {title}
        </h3>
        <div className="h-edito" style={{ fontSize: "clamp(18px, 1.4vw, 22px)", color: "var(--c-ink-2)", letterSpacing: "-0.005em", lineHeight: 1.3, marginBottom: 14 }}>
          {tagline}
        </div>
        <p style={{ fontSize: 14, color: "var(--c-ink-3)", lineHeight: 1.6, marginBottom: 24, maxWidth: 520 }}>
          {body}
        </p>
        <div className="mt-auto flex items-center gap-4">
          <Link href={href} className="link-edito" style={{ fontSize: 13.5 }}>
            Read more →
          </Link>
          <a
            href={launch}
            className="f-mono"
            style={{
              fontSize: 11,
              color: c,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              textDecoration: "none",
            }}
          >
            Launch ↗
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
      <div className="h-sans" style={{ fontSize: 17, fontWeight: 500, color: "var(--c-ink-1)", letterSpacing: "-0.02em" }}>
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
      {/* dot grid */}
      <pattern id="dots" width="22" height="22" patternUnits="userSpaceOnUse">
        <circle cx="1" cy="1" r="0.8" fill="oklch(0.5 0.012 260)" opacity="0.6" />
      </pattern>
      <rect width="100%" height="100%" fill="url(#dots)" />

      {/* sample nodes */}
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
