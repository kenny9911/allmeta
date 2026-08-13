"use client";
import React from "react";
import { useApp } from "@/lib/i18n";
import { SectionHead, HairCard, Reveal, Em } from "@/components/editorial/parts";

export default function Pillars() {
  const { t } = useApp();
  const pillars: Array<{ kw: string; tone: "info" | "amber" | "lime"; tk: string }> = [
    { kw: t("onto_pillars_what"), tone: "info", tk: "obj" },
    { kw: t("onto_pillars_how"), tone: "amber", tk: "act" },
    { kw: t("onto_pillars_why"), tone: "lime", tk: "rule" },
  ];
  return (
    <section style={{ paddingTop: 100, paddingBottom: 90 }}>
      <div className="edito-container">
        <SectionHead
          eyebrow={t("onto_pillars_label")}
          title={
            <>
              Three pillars.{" "}
              <Em color="var(--c-ink-2)">Noun, verb, noun.</Em>
            </>
          }
          desc={t("onto_pillars_sub")}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {pillars.map((p, i) => {
            const c: Record<string, string> = { info: "var(--c-info)", amber: "var(--c-amber)", lime: "var(--c-lime)" };
            return (
              <Reveal key={p.tk} delay={(i + 1) as 1 | 2 | 3}>
                <HairCard accent={p.tone} style={{ minHeight: 320 }}>
                  <div className="f-mono mb-5" style={{ fontSize: 10.5, color: c[p.tone], letterSpacing: "0.18em" }}>
                    {p.kw}
                  </div>
                  <h3 className="t-h3">
                    {t(`onto_pillars_${p.tk}_title`)}
                  </h3>
                  <div className="t-small mt-2 mb-5">
                    {t(`onto_pillars_${p.tk}_zh`)}
                  </div>
                  <ul className="space-y-3 pt-5" style={{ borderTop: "1px solid color-mix(in oklab, var(--c-ink-4) 16%, transparent)" }}>
                    {["l1", "l2", "l3"].map((l) => (
                      <li key={l} className="flex gap-3 items-start" style={{ fontSize: 13.5, color: "var(--c-ink-2)", lineHeight: 1.55 }}>
                        <span style={{ width: 4, height: 4, borderRadius: 999, background: c[p.tone], marginTop: 8, flexShrink: 0 }} />
                        <span>{t(`onto_pillars_${p.tk}_${l}`)}</span>
                      </li>
                    ))}
                  </ul>
                </HairCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
