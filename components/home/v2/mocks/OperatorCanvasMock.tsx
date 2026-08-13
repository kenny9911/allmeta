"use client";
import React from "react";

/** Faux Operator control-plane canvas — an orchestration graph where a
 *  Planner fans out to specialist agents, all bound to one Ontology.
 *  Reads as a real runtime console, not a marketing diagram. */
export default function OperatorCanvasMock() {
  return (
    <div
      className="hairline relative overflow-hidden"
      style={{
        aspectRatio: "1.05 / 1",
        minHeight: 460,
        boxShadow: "0 40px 80px -30px rgba(0,0,0,0.55), 0 0 0 1px color-mix(in oklab, var(--c-ink-4) 14%, transparent)",
      }}
    >
      <div className="term-chrome">
        <span /><span /><span />
        <div className="ml-2 f-mono" style={{ fontSize: 11, color: "var(--c-ink-3)" }}>
          operator.allmeta.ai / orchestrator
        </div>
        <div className="ml-auto flex items-center gap-2">
          <span className="f-mono" style={{ fontSize: 10.5, color: "var(--c-ink-3)", letterSpacing: "0.06em" }}>AUTO-PILOT</span>
          <span style={{ width: 6, height: 6, borderRadius: 999, background: "var(--c-violet)", boxShadow: "0 0 6px var(--c-violet)" }} />
        </div>
      </div>

      <div className="relative" style={{ height: "calc(100% - 36px)" }}>
        {/* dot grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(color-mix(in oklab, var(--c-ink-4) 26%, transparent) 0.7px, transparent 0.7px)",
            backgroundSize: "18px 18px",
            opacity: 0.5,
          }}
        />
        <svg viewBox="0 0 460 420" className="relative w-full h-full" preserveAspectRatio="xMidYMid meet">
          <defs>
            <linearGradient id="op-v" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="oklch(0.70 0.26 305)" stopOpacity="0.9" />
              <stop offset="1" stopColor="oklch(0.70 0.26 305)" stopOpacity="0.15" />
            </linearGradient>
            <filter id="op-glow"><feGaussianBlur stdDeviation="4" /></filter>
          </defs>

          {/* edges planner -> agents */}
          {[
            "M 230 96 C 150 150, 110 170, 86 210",
            "M 230 96 C 200 160, 180 190, 168 230",
            "M 230 96 C 260 160, 280 190, 292 230",
            "M 230 96 C 320 150, 360 170, 384 210",
          ].map((d, i) => (
            <path key={i} d={d} stroke="url(#op-v)" strokeWidth="1.3" fill="none" />
          ))}
          {/* agents -> ontology */}
          {[
            "M 86 250 C 120 320, 180 340, 220 350",
            "M 168 268 C 190 310, 210 330, 226 348",
            "M 292 268 C 270 310, 250 330, 234 348",
            "M 384 250 C 340 320, 280 340, 240 350",
          ].map((d, i) => (
            <path key={`b${i}`} d={d} stroke="oklch(0.92 0.22 130)" strokeOpacity="0.4" strokeWidth="1.1" fill="none" />
          ))}

          {/* Planner (top) */}
          <g transform="translate(176 70)">
            <rect width="108" height="50" rx="10" fill="oklch(0.18 0.018 260)" stroke="var(--c-violet)" strokeWidth="1.3" />
            <text x="14" y="20" fontFamily="var(--f-mono)" fontSize="8" fill="var(--c-ink-4)" letterSpacing="0.1em">ORCHESTRATOR</text>
            <text x="14" y="36" fontFamily="var(--f-sans)" fontSize="14" fontWeight="600" fill="var(--c-ink-1)">Planner</text>
            <circle cx="98" cy="9" r="3" fill="var(--c-violet)">
              <animate attributeName="opacity" values="1;0.4;1" dur="2.2s" repeatCount="indefinite" />
            </circle>
          </g>

          {/* specialist agents */}
          {[
            { x: 40, y: 214, name: "Executor", c: "var(--c-lime)" },
            { x: 124, y: 234, name: "Validator", c: "var(--c-amber)" },
            { x: 248, y: 234, name: "Reflection", c: "var(--c-cyan)" },
            { x: 340, y: 214, name: "Approval", c: "var(--c-coral)" },
          ].map((a) => (
            <g key={a.name} transform={`translate(${a.x} ${a.y})`}>
              <rect width="92" height="40" rx="8" fill="oklch(0.18 0.018 260)" stroke="color-mix(in oklab, var(--c-ink-4) 50%, transparent)" strokeWidth="1" />
              <circle cx="13" cy="20" r="3.5" fill={a.c} />
              <text x="24" y="24" fontFamily="var(--f-sans)" fontSize="11.5" fontWeight="500" fill="var(--c-ink-1)">{a.name}</text>
            </g>
          ))}

          {/* Ontology (bottom, emphasized) */}
          <g transform="translate(168 348)">
            <rect width="124" height="46" rx="10" fill="oklch(0.18 0.018 260)" stroke="var(--c-lime)" strokeWidth="1.3" />
            <text x="16" y="19" fontFamily="var(--f-mono)" fontSize="8" fill="var(--c-lime)" letterSpacing="0.14em">SHARED STATE</text>
            <text x="16" y="34" fontFamily="var(--f-sans)" fontSize="13" fontWeight="600" fill="var(--c-ink-1)">Ontology</text>
          </g>

          {/* travelling event ping */}
          <circle r="3.5" fill="var(--c-violet)" filter="url(#op-glow)">
            <animateMotion dur="3.4s" repeatCount="indefinite" path="M 230 96 C 150 150, 110 170, 86 210" />
            <animate attributeName="opacity" values="0;1;0" dur="3.4s" repeatCount="indefinite" />
          </circle>
          <circle r="3" fill="var(--c-lime)" filter="url(#op-glow)">
            <animateMotion dur="3.8s" repeatCount="indefinite" path="M 86 250 C 120 320, 180 340, 220 350" />
            <animate attributeName="opacity" values="0;1;0" dur="3.8s" repeatCount="indefinite" />
          </circle>
        </svg>

        {/* status footer */}
        <div
          className="absolute flex items-center gap-3"
          style={{ left: 16, bottom: 12, fontFamily: "var(--f-mono)", fontSize: 10.5, color: "var(--c-ink-3)" }}
        >
          <span style={{ color: "var(--c-lime)" }}>● 8 agents</span>
          <span style={{ color: "var(--c-violet)" }}>● 1.2k ops/min</span>
          <span style={{ color: "var(--c-ink-4)" }}>p50 1.2s</span>
        </div>
      </div>

      <div
        aria-hidden
        className="absolute pointer-events-none"
        style={{ top: 0, right: -120, width: 280, height: "100%", background: "radial-gradient(ellipse 50% 50% at 30% 50%, color-mix(in oklab, var(--c-violet) 26%, transparent), transparent 70%)", filter: "blur(36px)" }}
      />
    </div>
  );
}
