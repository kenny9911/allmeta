"use client";
import React from "react";
import Link from "next/link";
import Reveal from "./Reveal";

const stack: Array<{ n: number; title: string; sub: string; tone: "violet" | "info" | "amber" | "lime" | "cyan" | "coral"; emphasize?: boolean }> = [
  { n: 6, title: "Application",         sub: "RAAS · ECAS · GEAS · N apps",                          tone: "violet" },
  { n: 5, title: "Agentic Operator",    sub: "Planner · Executor · Validator · Reflection · Approval · Domain", tone: "info" },
  { n: 4, title: "Generation",          sub: "Prompt Engine · Agent Harness · CodeGen",              tone: "amber" },
  { n: 3, title: "Ontology",            sub: "Objects · Actions · Rules · Events · Permissions",     tone: "lime", emphasize: true },
  { n: 2, title: "Data & Integration",  sub: "API · Connectors · Quality · Time-series · Master Data", tone: "cyan" },
  { n: 1, title: "Enterprise Core",     sub: "ECore · ERP · HR · Finance · Procurement · SCADA",     tone: "coral" },
];

export default function ArchPreviewV2() {
  return (
    <section style={{ paddingTop: 110, paddingBottom: 100, background: "color-mix(in oklab, var(--c-bg) 92%, oklch(0.92 0.22 130) 0%)" }}>
      <div className="edito-container">
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
            <div className="lg:col-span-5">
              <div className="eyebrow mb-5">The stack</div>
              <h2 className="h-sans" style={{ fontSize: "clamp(40px, 5.4vw, 72px)", letterSpacing: "-0.045em", lineHeight: 0.98 }}>
                Six layers,{" "}
                <span className="h-edito" style={{ fontStyle: "italic", letterSpacing: "-0.01em" }}>
                  one semantic surface.
                </span>
              </h2>
            </div>
            <div className="lg:col-span-5 lg:col-start-7">
              <p style={{ fontSize: 14.5, color: "var(--c-ink-3)", lineHeight: 1.7, marginBottom: 20 }}>
                From the system of records you already own, up through a live
                ontology, through the prompt + agent generation, to the
                applications your business actually uses. Each layer composable,
                each layer replaceable.
              </p>
              <Link href="/technology" className="link-edito" style={{ fontSize: 14 }}>
                Read the full architecture →
              </Link>
            </div>
          </div>
        </Reveal>

        <div className="flex flex-col gap-2">
          {stack.map((s, i) => (
            <Reveal key={s.n} delay={Math.min(4, i) as 0 | 1 | 2 | 3 | 4}>
              <LayerStrip {...s} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function LayerStrip({
  n,
  title,
  sub,
  tone,
  emphasize,
}: {
  n: number;
  title: string;
  sub: string;
  tone: "lime" | "violet" | "amber" | "cyan" | "coral" | "info";
  emphasize?: boolean;
}) {
  const c: Record<string, string> = {
    lime: "var(--c-lime)", violet: "var(--c-violet)", amber: "var(--c-amber)",
    cyan: "var(--c-cyan)", coral: "var(--c-coral)", info: "var(--c-info)",
  };
  return (
    <div
      className="hairline grid grid-cols-[80px_1fr_auto] items-center"
      style={{
        padding: "20px 26px",
        borderLeft: `2px solid ${c[tone]}`,
        background: emphasize
          ? `linear-gradient(90deg, color-mix(in oklab, ${c[tone]} 10%, var(--c-surface)), var(--c-surface) 60%)`
          : undefined,
        boxShadow: emphasize ? `0 0 0 1px ${c[tone]}, 0 10px 40px -10px color-mix(in oklab, ${c[tone]} 30%, transparent)` : undefined,
      }}
    >
      <div className="f-display tabular-nums" style={{ fontSize: 28, fontWeight: 500, color: emphasize ? c[tone] : "var(--c-ink-3)", letterSpacing: "-0.03em", lineHeight: 1 }}>
        {String(n).padStart(2, "0")}
      </div>
      <div>
        <div className="h-sans" style={{ fontSize: 19, fontWeight: 500, color: "var(--c-ink-1)", letterSpacing: "-0.018em" }}>
          {title}
        </div>
        <div className="f-mono" style={{ fontSize: 11.5, color: "var(--c-ink-3)", letterSpacing: "0.02em", marginTop: 4 }}>
          {sub}
        </div>
      </div>
      <span className="f-mono" style={{ fontSize: 10.5, color: emphasize ? c[tone] : "var(--c-ink-4)", letterSpacing: "0.16em", textTransform: "uppercase" }}>
        {emphasize ? "Today's focus" : `Layer ${n}`}
      </span>
    </div>
  );
}
