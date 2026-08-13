"use client";
import React from "react";

const layers = [
  { n: "06", name: "Application",        c: "var(--c-violet)" },
  { n: "05", name: "Agentic Operator",   c: "var(--c-info)" },
  { n: "04", name: "Generation",         c: "var(--c-amber)" },
  { n: "03", name: "Ontology",           c: "var(--c-lime)", focus: true },
  { n: "02", name: "Data & Integration", c: "var(--c-cyan)" },
  { n: "01", name: "Enterprise Core",    c: "var(--c-coral)" },
];

/** Faux architecture stack — isometric-ish layered panel for the
 *  technology hero. Each layer a thin slab, Ontology layer lit. */
export default function ArchStackMock() {
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
          allmeta / architecture
        </div>
        <div className="ml-auto f-mono" style={{ fontSize: 10.5, color: "var(--c-ink-3)", letterSpacing: "0.06em" }}>6 LAYERS</div>
      </div>

      <div className="relative flex flex-col justify-center gap-2.5" style={{ height: "calc(100% - 36px)", padding: "24px 28px" }}>
        {/* upward flow arrow */}
        <div
          className="absolute"
          aria-hidden
          style={{
            left: 12, top: 30, bottom: 30, width: 2,
            background: "linear-gradient(to top, color-mix(in oklab, var(--c-coral) 50%, transparent), color-mix(in oklab, var(--c-violet) 50%, transparent))",
          }}
        />
        {layers.map((l, i) => (
          <div
            key={l.n}
            className="relative flex items-center gap-3"
            style={{
              marginLeft: 18,
              padding: "12px 16px",
              borderRadius: 9,
              background: l.focus
                ? `linear-gradient(90deg, color-mix(in oklab, ${l.c} 16%, oklch(0.18 0.018 260)), oklch(0.18 0.018 260) 70%)`
                : "color-mix(in oklab, var(--c-surface) 60%, transparent)",
              border: `1px solid ${l.focus ? l.c : "color-mix(in oklab, var(--c-ink-4) 16%, transparent)"}`,
              boxShadow: l.focus ? `0 0 30px -8px color-mix(in oklab, ${l.c} 60%, transparent)` : undefined,
              transform: `translateX(${(2 - Math.abs(i - 2.5)) * 4}px)`,
            }}
          >
            <span className="f-mono tabular-nums" style={{ fontSize: 11, color: l.focus ? l.c : "var(--c-ink-4)", letterSpacing: "0.08em" }}>
              {l.n}
            </span>
            <span className="f-display" style={{ fontSize: 14, fontWeight: 500, color: "var(--c-ink-1)", letterSpacing: "-0.01em" }}>
              {l.name}
            </span>
            {l.focus && (
              <span className="ml-auto f-mono" style={{ fontSize: 9.5, color: l.c, letterSpacing: "0.12em" }}>
                FOCUS
              </span>
            )}
            <span
              style={{ width: 7, height: 7, borderRadius: 999, background: l.c, marginLeft: l.focus ? 0 : "auto", boxShadow: l.focus ? `0 0 8px ${l.c}` : undefined }}
            />
          </div>
        ))}
      </div>

      <div
        aria-hidden
        className="absolute pointer-events-none"
        style={{ inset: 0, background: "radial-gradient(ellipse 40% 30% at 100% 50%, color-mix(in oklab, var(--c-lime) 14%, transparent), transparent 60%)" }}
      />
    </div>
  );
}
