"use client";
import React from "react";

/** Faux product UI panel — Ontology Studio. Lives in the hero right column.
 *  Designed to read as a real working interface, not a marketing illustration.
 *  Subtle motion: scanning cursor, breathing rule indicator. */
export default function OntologyStudioMock() {
  return (
    <div
      className="hairline relative overflow-hidden"
      style={{
        aspectRatio: "1.05 / 1",
        minHeight: 460,
        boxShadow:
          "0 40px 80px -30px rgba(0,0,0,0.55), 0 0 0 1px color-mix(in oklab, var(--c-ink-4) 14%, transparent)",
      }}
    >
      {/* Window chrome */}
      <div className="term-chrome">
        <span /><span /><span />
        <div className="ml-2 f-mono" style={{ fontSize: 11, color: "var(--c-ink-3)" }}>
          ontology.allmeta.ai / candidate-domain
        </div>
        <div className="ml-auto flex items-center gap-2">
          <span style={{ width: 6, height: 6, borderRadius: 999, background: "var(--c-lime)", boxShadow: "0 0 6px var(--c-lime)" }} />
          <span className="f-mono" style={{ fontSize: 10.5, color: "var(--c-ink-3)", letterSpacing: "0.06em" }}>
            v0.5
          </span>
        </div>
      </div>

      <div className="grid grid-cols-[120px_1fr_140px]" style={{ height: "calc(100% - 36px)" }}>
        {/* Left rail — object list */}
        <aside style={{ borderRight: "1px solid color-mix(in oklab, var(--c-ink-4) 14%, transparent)", padding: "16px 12px" }}>
          <div className="f-mono mb-3" style={{ fontSize: 10, color: "var(--c-ink-4)", letterSpacing: "0.18em", textTransform: "uppercase" }}>
            Objects
          </div>
          <ul className="space-y-1.5">
            {[
              { name: "Candidate", active: true },
              { name: "Application" },
              { name: "Requirement" },
              { name: "Interview" },
              { name: "Offer" },
              { name: "Match" },
            ].map((o) => (
              <li
                key={o.name}
                className="flex items-center gap-2"
                style={{
                  fontSize: 12,
                  color: o.active ? "var(--c-ink-1)" : "var(--c-ink-3)",
                  padding: "5px 8px",
                  borderRadius: 6,
                  background: o.active ? "color-mix(in oklab, var(--c-lime) 12%, transparent)" : "transparent",
                  borderLeft: o.active ? "2px solid var(--c-lime)" : "2px solid transparent",
                }}
              >
                <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                  <rect x="1" y="1" width="10" height="10" rx="1.5" stroke="currentColor" strokeWidth="1" opacity="0.55" />
                </svg>
                <span>{o.name}</span>
              </li>
            ))}
          </ul>
          <div className="f-mono mt-5 mb-3" style={{ fontSize: 10, color: "var(--c-ink-4)", letterSpacing: "0.18em", textTransform: "uppercase" }}>
            Rules
          </div>
          <ul className="space-y-1.5">
            {["R-0421 · degreeOK", "R-0507 · skillFloor", "R-0512 · regionLock"].map((r) => (
              <li key={r} style={{ fontSize: 11, color: "var(--c-ink-3)", fontFamily: "var(--f-mono)", letterSpacing: "0.02em" }}>
                {r}
              </li>
            ))}
          </ul>
        </aside>

        {/* Canvas — semantic graph */}
        <main className="relative">
          {/* subtle dot grid */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(color-mix(in oklab, var(--c-ink-4) 28%, transparent) 0.7px, transparent 0.7px)",
              backgroundSize: "16px 16px",
              opacity: 0.6,
            }}
          />
          <svg viewBox="0 0 360 380" className="relative w-full h-full" preserveAspectRatio="xMidYMid meet">
            {/* Connector lines */}
            <defs>
              <linearGradient id="connLime" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stopColor="oklch(0.92 0.22 130)" stopOpacity="0.85" />
                <stop offset="1" stopColor="oklch(0.92 0.22 130)" stopOpacity="0.2" />
              </linearGradient>
              <linearGradient id="connViolet" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="oklch(0.70 0.26 305)" stopOpacity="0.85" />
                <stop offset="1" stopColor="oklch(0.70 0.26 305)" stopOpacity="0.2" />
              </linearGradient>
            </defs>

            {/* Edge: Candidate → applies-to → Requirement */}
            <path d="M 100 130 C 160 130, 200 200, 260 200" stroke="url(#connLime)" strokeWidth="1.5" fill="none" />
            <path d="M 100 130 C 130 200, 160 240, 200 280" stroke="url(#connViolet)" strokeWidth="1.2" fill="none" />
            <path d="M 260 200 C 280 250, 240 290, 220 290" stroke="url(#connLime)" strokeWidth="1.2" fill="none" />

            {/* Verb label */}
            <g transform="translate(168 158)">
              <rect x="-30" y="-9" width="60" height="18" rx="9" fill="oklch(0.155 0.018 260)" stroke="var(--c-lime)" strokeWidth="0.8" />
              <text x="0" y="3.5" textAnchor="middle" fontFamily="var(--f-mono)" fontSize="9" fill="var(--c-lime)" letterSpacing="0.06em">
                applies-to
              </text>
            </g>

            {/* Node — Candidate (active) */}
            <g transform="translate(60 110)">
              <rect width="80" height="40" rx="8" fill="oklch(0.155 0.018 260)" stroke="var(--c-lime)" strokeWidth="1.2" />
              <text x="12" y="16" fontFamily="var(--f-mono)" fontSize="8" fill="var(--c-ink-4)" letterSpacing="0.06em">SUBJECT</text>
              <text x="12" y="30" fontFamily="var(--f-sans)" fontWeight="600" fontSize="13" fill="var(--c-ink-1)" letterSpacing="-0.01em">
                Candidate
              </text>
              <circle cx="74" cy="6" r="2.5" fill="var(--c-lime)">
                <animate attributeName="opacity" values="1;0.4;1" dur="2.4s" repeatCount="indefinite" />
              </circle>
            </g>

            {/* Node — Requirement */}
            <g transform="translate(220 180)">
              <rect width="92" height="40" rx="8" fill="oklch(0.155 0.018 260)" stroke="var(--c-violet)" strokeWidth="1.2" />
              <text x="12" y="16" fontFamily="var(--f-mono)" fontSize="8" fill="var(--c-ink-4)" letterSpacing="0.06em">OBJECT</text>
              <text x="12" y="30" fontFamily="var(--f-sans)" fontWeight="600" fontSize="13" fill="var(--c-ink-1)" letterSpacing="-0.01em">
                Requirement
              </text>
            </g>

            {/* Node — Application (smaller) */}
            <g transform="translate(160 260)">
              <rect width="80" height="34" rx="7" fill="oklch(0.155 0.018 260)" stroke="color-mix(in oklab, var(--c-ink-4) 60%, transparent)" strokeWidth="1" />
              <text x="40" y="20" textAnchor="middle" fontFamily="var(--f-mono)" fontSize="10" fill="var(--c-ink-3)" letterSpacing="0.04em">
                Application
              </text>
            </g>

            {/* Tiny event ping animation */}
            <circle r="3" fill="var(--c-lime)">
              <animateMotion dur="3.2s" repeatCount="indefinite" path="M 100 130 C 160 130, 200 200, 260 200" />
              <animate attributeName="opacity" values="0;1;0" dur="3.2s" repeatCount="indefinite" />
            </circle>
          </svg>

          {/* hovering hint */}
          <div
            className="absolute"
            style={{
              right: 12, bottom: 10,
              padding: "5px 10px",
              border: "1px solid color-mix(in oklab, var(--c-ink-4) 24%, transparent)",
              borderRadius: 6,
              background: "color-mix(in oklab, var(--c-bg) 70%, transparent)",
              fontSize: 10,
              fontFamily: "var(--f-mono)",
              color: "var(--c-ink-3)",
              letterSpacing: "0.04em",
            }}
          >
            ⌘ k · semantic search
          </div>
        </main>

        {/* Right rail — rule inspector */}
        <aside style={{ borderLeft: "1px solid color-mix(in oklab, var(--c-ink-4) 14%, transparent)", padding: "16px 12px" }}>
          <div className="f-mono mb-3" style={{ fontSize: 10, color: "var(--c-ink-4)", letterSpacing: "0.18em", textTransform: "uppercase" }}>
            Inspector
          </div>
          <div style={{ fontSize: 11.5, color: "var(--c-ink-3)", lineHeight: 1.55 }}>
            <div className="mb-3">
              <div className="f-mono" style={{ fontSize: 9, color: "var(--c-ink-4)", letterSpacing: "0.12em" }}>
                ACTION
              </div>
              <div style={{ color: "var(--c-lime)", fontFamily: "var(--f-mono)", fontWeight: 500 }}>
                applies-to
              </div>
            </div>
            <div className="mb-3">
              <div className="f-mono" style={{ fontSize: 9, color: "var(--c-ink-4)", letterSpacing: "0.12em" }}>
                CONSTRAINTS
              </div>
              <div style={{ fontFamily: "var(--f-mono)", fontSize: 10.5 }}>
                <span style={{ color: "var(--c-amber)" }}>pre</span>: skills ⊇ req
                <br />
                <span style={{ color: "var(--c-amber)" }}>pre</span>: region match
              </div>
            </div>
            <div>
              <div className="f-mono" style={{ fontSize: 9, color: "var(--c-ink-4)", letterSpacing: "0.12em" }}>
                EVENT
              </div>
              <div style={{ fontFamily: "var(--f-mono)", fontSize: 10.5, color: "var(--c-violet)" }}>
                application.created
              </div>
            </div>
          </div>

          {/* Build hint */}
          <div className="absolute bottom-3 right-3" style={{ width: 116 }}>
            <div
              style={{
                padding: "6px 8px",
                borderRadius: 8,
                background: "var(--c-lime)",
                color: "oklch(0.16 0.020 260)",
                fontFamily: "var(--f-sans)",
                fontWeight: 600,
                fontSize: 10.5,
                letterSpacing: "-0.005em",
                textAlign: "center",
              }}
            >
              ↵ Publish
            </div>
          </div>
        </aside>
      </div>

      {/* Lime side glow */}
      <div
        aria-hidden
        className="absolute pointer-events-none"
        style={{
          top: 0,
          right: -120,
          width: 280,
          height: "100%",
          background:
            "radial-gradient(ellipse 50% 50% at 30% 50%, color-mix(in oklab, var(--c-lime) 28%, transparent), transparent 70%)",
          filter: "blur(36px)",
        }}
      />
    </div>
  );
}
