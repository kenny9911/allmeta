"use client";
import React from "react";
import Reveal from "./Reveal";

/** Editorial position statement. Pull-quote on the left, thin SVG diagram
 *  on the right. No card grids, no top-bars. Magazine column flow. */
export default function PositionV2() {
  return (
    <section style={{ paddingTop: 120, paddingBottom: 100 }}>
      <div className="edito-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-6">
            <Reveal>
              <div className="eyebrow mb-6">The thesis</div>
            </Reveal>
            <Reveal delay={1}>
              <p
                className="h-edito"
                style={{
                  fontSize: "clamp(34px, 4.6vw, 56px)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.012em",
                  color: "var(--c-ink-1)",
                }}
              >
                <span style={{ color: "var(--c-ink-2)" }}>LLMs understand. </span>
                <span style={{ color: "var(--c-ink-2)" }}>Agents execute. </span>
                <span style={{ color: "var(--c-ink-1)" }}>
                  allmeta is the <em style={{ fontStyle: "italic" }}>layer between them</em> — the place where business semantics
                  become callable.
                </span>
              </p>
            </Reveal>
            <Reveal delay={2}>
              <p className="mt-7" style={{ maxWidth: 520, fontSize: 14.5, color: "var(--c-ink-3)", lineHeight: 1.65 }}>
                Code is dead weight. Knowledge is the new moat. The era of <em className="f-serif" style={{ fontStyle: "italic" }}>System of Records</em> is closing —
                the era of <em className="f-serif" style={{ fontStyle: "italic" }}>System of Actions</em> begins here.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <Reveal delay={1}>
              <PositionDiagram />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function PositionDiagram() {
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

      {/* connector through the middle */}
      <line x1="120" y1="180" x2="520" y2="180" stroke="url(#pos-conn)" strokeWidth="1.5" />

      {/* center diamond — Ontology */}
      <g transform="translate(320 180)">
        <rect x="-90" y="-50" width="180" height="100" rx="14" fill="oklch(0.18 0.018 260)" stroke="var(--c-lime)" strokeWidth="1.3" />
        <text x="0" y="-22" textAnchor="middle" fontFamily="var(--f-mono)" fontSize="10.5" letterSpacing="0.16em" fill="var(--c-lime)">ONTOLOGY</text>
        <text x="0" y="6" textAnchor="middle" fontFamily="var(--f-serif)" fontStyle="italic" fontSize="22" fill="var(--c-ink-1)" letterSpacing="-0.01em">translates</text>
        <text x="0" y="30" textAnchor="middle" fontFamily="var(--f-sans)" fontSize="11" fill="var(--c-ink-3)">Object · Action · Rule</text>
        {/* breathing dot */}
        <circle cx="76" cy="-36" r="3" fill="var(--c-lime)">
          <animate attributeName="opacity" values="1;0.35;1" dur="2.4s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* left node — LLM */}
      <g transform="translate(60 180)">
        <circle r="46" fill="oklch(0.18 0.018 260)" stroke="var(--c-info)" strokeWidth="1.1" />
        <text y="-4" textAnchor="middle" fontFamily="var(--f-mono)" fontSize="9.5" letterSpacing="0.18em" fill="var(--c-info)">LLM</text>
        <text y="14" textAnchor="middle" fontFamily="var(--f-serif)" fontStyle="italic" fontSize="14" fill="var(--c-ink-1)">understands</text>
      </g>

      {/* right node — Agent */}
      <g transform="translate(580 180)">
        <circle r="46" fill="oklch(0.18 0.018 260)" stroke="var(--c-coral)" strokeWidth="1.1" />
        <text y="-4" textAnchor="middle" fontFamily="var(--f-mono)" fontSize="9.5" letterSpacing="0.18em" fill="var(--c-coral)">AGENT</text>
        <text y="14" textAnchor="middle" fontFamily="var(--f-serif)" fontStyle="italic" fontSize="14" fill="var(--c-ink-1)">executes</text>
      </g>

      {/* moving ping */}
      <circle r="3.5" fill="var(--c-lime)" filter="url(#pos-glow)">
        <animateMotion dur="4s" repeatCount="indefinite" path="M 110 180 L 530 180" />
        <animate attributeName="opacity" values="0;1;1;0" dur="4s" repeatCount="indefinite" />
      </circle>

      {/* labels above */}
      <text x="60" y="100" textAnchor="middle" fontFamily="var(--f-mono)" fontSize="10" fill="var(--c-ink-4)" letterSpacing="0.12em">INPUT</text>
      <text x="320" y="100" textAnchor="middle" fontFamily="var(--f-mono)" fontSize="10" fill="var(--c-ink-4)" letterSpacing="0.12em">MEANING</text>
      <text x="580" y="100" textAnchor="middle" fontFamily="var(--f-mono)" fontSize="10" fill="var(--c-ink-4)" letterSpacing="0.12em">OUTPUT</text>

      {/* sub labels */}
      <text x="60" y="262" textAnchor="middle" fontFamily="var(--f-sans)" fontSize="10.5" fill="var(--c-ink-4)">free hallucination</text>
      <text x="320" y="262" textAnchor="middle" fontFamily="var(--f-sans)" fontSize="10.5" fill="var(--c-ink-2)">constrained semantics</text>
      <text x="580" y="262" textAnchor="middle" fontFamily="var(--f-sans)" fontSize="10.5" fill="var(--c-ink-4)">safe execution</text>
    </svg>
  );
}
