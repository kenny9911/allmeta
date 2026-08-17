"use client";
import React from "react";
import { useApp } from "@/lib/i18n";
import { SectionHead, HairCard, Reveal } from "@/components/editorial/parts";
import { I } from "@/components/shared/IconSet";

const builders: Array<{ n: string; tone: "info" | "lime" | "amber" | "cyan" | "violet" | "coral"; icon: React.ReactNode }> = [
  { n: "1", tone: "info", icon: <I.cube /> },
  { n: "2", tone: "lime", icon: <I.shield /> },
  { n: "3", tone: "amber", icon: <I.bolt /> },
  { n: "4", tone: "violet", icon: <I.spark /> },
  { n: "5", tone: "cyan", icon: <I.graph /> },
  { n: "6", tone: "coral", icon: <I.eye /> },
];

export default function Builders() {
  const { t } = useApp();
  return (
    <section className="section">
      <div className="edito-container">
        <SectionHead
          eyebrow={t("onto_builders_label")}
          title={
            <>
              {t("onto_builders_title_1")} {t("onto_builders_title_2")}
            </>
          }
          desc={t("onto_builders_sub")}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {builders.map((b, i) => {
            const c: Record<string, string> = {
              info: "var(--c-info)", lime: "var(--c-lime)", amber: "var(--c-amber)",
              violet: "var(--c-violet)", cyan: "var(--c-cyan)", coral: "var(--c-coral)",
            };
            // Same tones for `color:`; only lime differs — the fill lime is
            // too pale to read as type on white.
            const cText: Record<string, string> = { ...c, lime: "var(--c-lime-ink)" };
            return (
              <Reveal key={b.n} delay={(Math.min(3, (i % 3) + 1)) as 1 | 2 | 3}>
                <HairCard style={{ minHeight: 196 }}>
                  <div className="flex items-center justify-between mb-5">
                    <span
                      className="inline-flex items-center justify-center"
                      style={{
                        width: 38, height: 38, borderRadius: 10,
                        background: `color-mix(in oklab, ${c[b.tone]} 14%, transparent)`,
                        color: c[b.tone],
                        border: `1px solid color-mix(in oklab, ${c[b.tone]} 32%, transparent)`,
                      }}
                    >
                      {b.icon}
                    </span>
                    <span className="f-mono" style={{ fontSize: 10.5, color: cText[b.tone], letterSpacing: "0.1em", textTransform: "uppercase" }}>
                      {t(`onto_builder_${b.n}_tag`)}
                    </span>
                  </div>
                  <h3 className="h-sans" style={{ fontSize: 21, fontWeight: 500, letterSpacing: "-0.02em", color: "var(--c-ink-1)", marginBottom: 10 }}>
                    {t(`onto_builder_${b.n}_name`)}
                  </h3>
                  <p style={{ fontSize: 13.5, color: "var(--c-ink-3)", lineHeight: 1.6 }}>
                    {t(`onto_builder_${b.n}_desc`)}
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
