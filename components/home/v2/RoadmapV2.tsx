"use client";
import React from "react";
import Reveal from "./Reveal";

const milestones = [
  { when: "Now · Jun 2026",  title: "allmeta Ontology",   note: "The Brain. Live.",       live: true },
  { when: "Q3 · 2026",       title: "Agent Operator",     note: "The Runtime." },
  { when: "Q4 · 2026",       title: "allmeta Code",       note: "Ontology writes itself." },
  { when: "EOY · 2026",      title: "Full Platform",      note: "Generic layer + 3 AS." },
  { when: "2027+",           title: "AI-Native Enterprise", note: "60% of IT spend." },
];

export default function RoadmapV2() {
  return (
    <section style={{ paddingTop: 100, paddingBottom: 100 }}>
      <div className="edito-container">
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14 items-end">
            <div className="lg:col-span-7">
              <div className="eyebrow mb-5">Roadmap</div>
              <h2 className="h-sans" style={{ fontSize: "clamp(40px, 5.4vw, 72px)", letterSpacing: "-0.045em", lineHeight: 0.98 }}>
                Start today.{" "}
                <span className="h-edito" style={{ fontStyle: "italic", letterSpacing: "-0.01em" }}>
                  Walk it in a year.
                </span>
              </h2>
            </div>
            <p className="lg:col-span-5" style={{ fontSize: 14.5, color: "var(--c-ink-3)", lineHeight: 1.6, maxWidth: 460 }}>
              The brain ships first. Then it grows the muscles. Then the bones.
              By the time it has skin, the enterprise hasn't added AI — the
              enterprise <em className="f-serif" style={{ fontStyle: "italic", color: "var(--c-ink-1)" }}>is</em> AI.
            </p>
          </div>
        </Reveal>

        <div
          className="relative grid gap-0"
          style={{ gridTemplateColumns: `repeat(${milestones.length}, 1fr)`, borderTop: "1px solid color-mix(in oklab, var(--c-ink-4) 20%, transparent)" }}
        >
          {milestones.map((m, i) => (
            <Reveal key={m.title} delay={Math.min(4, i) as 0 | 1 | 2 | 3 | 4}>
              <div
                className="relative"
                style={{
                  padding: "26px 18px 26px 18px",
                  borderRight: i < milestones.length - 1 ? "1px solid color-mix(in oklab, var(--c-ink-4) 14%, transparent)" : "none",
                  minHeight: 180,
                }}
              >
                <span
                  aria-hidden
                  style={{
                    position: "absolute",
                    top: -5,
                    left: 0,
                    width: 9,
                    height: 9,
                    borderRadius: 999,
                    background: m.live ? "var(--c-lime)" : "var(--c-bg)",
                    border: `1.5px solid ${m.live ? "var(--c-lime)" : "var(--c-ink-3)"}`,
                    boxShadow: m.live ? "0 0 14px var(--c-lime)" : "none",
                  }}
                />
                <div className="f-mono mb-3" style={{ fontSize: 10.5, color: m.live ? "var(--c-lime)" : "var(--c-ink-4)", letterSpacing: "0.14em", textTransform: "uppercase" }}>
                  {m.when}
                </div>
                <div className="h-sans" style={{ fontSize: "clamp(17px, 1.6vw, 22px)", fontWeight: 500, color: "var(--c-ink-1)", letterSpacing: "-0.02em", lineHeight: 1.15, marginBottom: 6 }}>
                  {m.title}
                </div>
                <div className="h-edito" style={{ fontStyle: "italic", fontSize: 14, color: "var(--c-ink-3)", lineHeight: 1.35 }}>
                  {m.note}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
