"use client";
import React from "react";
import { useApp } from "@/lib/i18n";
import { SectionHead, HairCard, Reveal, Em } from "@/components/editorial/parts";

const order: Array<{ k: string; tone: "lime" | "violet" | "amber" | "cyan" | "coral" | "info" }> = [
  { k: "1", tone: "lime" },
  { k: "2", tone: "violet" },
  { k: "3", tone: "amber" },
  { k: "4", tone: "cyan" },
  { k: "5", tone: "coral" },
  { k: "6", tone: "info" },
];

export default function Capabilities() {
  const { t } = useApp();
  return (
    <section style={{ paddingTop: 100, paddingBottom: 90 }}>
      <div className="edito-container">
        <SectionHead
          eyebrow={t("onto_cap_label")}
          title={
            <>
              Six capabilities.{" "}
              <Em color="var(--c-ink-2)">One surface.</Em>
            </>
          }
          desc={t("onto_cap_subtitle")}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {order.map((o, i) => {
            // Text-only map — the tone here drives a `color:` and nothing else,
            // so lime is the text-safe variant rather than the fill lime.
            const c: Record<string, string> = {
              lime: "var(--c-lime-ink)", violet: "var(--c-violet)", amber: "var(--c-amber)",
              cyan: "var(--c-cyan)", coral: "var(--c-coral)", info: "var(--c-info)",
            };
            return (
              <Reveal key={o.k} delay={(Math.min(3, i % 3) + 1) as 1 | 2 | 3}>
                <HairCard style={{ minHeight: 180, display: "flex", flexDirection: "column" }}>
                  <div className="flex items-baseline justify-between mb-6">
                    <span className="f-mono tabular-nums" style={{ fontSize: 11, color: "var(--c-ink-4)", letterSpacing: "0.1em" }}>
                      0{o.k}
                    </span>
                    <span className="f-mono" style={{ fontSize: 10.5, color: c[o.tone], letterSpacing: "0.1em", textTransform: "uppercase" }}>
                      {t(`onto_cap_${o.k}_zh`)}
                    </span>
                  </div>
                  <h3 className="h-sans" style={{ fontSize: 26, fontWeight: 500, letterSpacing: "-0.025em", color: "var(--c-ink-1)", marginBottom: 10 }}>
                    {t(`onto_cap_${o.k}_title`)}
                  </h3>
                  <p style={{ fontSize: 13.5, color: "var(--c-ink-3)", lineHeight: 1.6 }}>
                    {t(`onto_cap_${o.k}_desc`)}
                  </p>
                </HairCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
