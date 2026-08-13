"use client";
import React from "react";
import { useApp } from "@/lib/i18n";
import { SectionHead, HairCard, Reveal, Em } from "@/components/editorial/parts";

export default function Decoupling() {
  const { t } = useApp();
  return (
    <section style={{ paddingTop: 100, paddingBottom: 90 }}>
      <div className="edito-container">
        <SectionHead
          eyebrow={t("onto_decouple_label")}
          title={
            <>
              <span style={{ color: "var(--c-info)" }}>Logic</span> and{" "}
              <span style={{ color: "var(--c-lime)" }}>Rule</span>{" "}
              <Em color="var(--c-ink-2)">must decouple.</Em>
            </>
          }
          desc={t("onto_decouple_sub")}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Reveal delay={1}>
            <HairCard accent="info" style={{ minHeight: 280 }}>
              <div className="f-mono mb-4" style={{ fontSize: 11, color: "var(--c-info)", letterSpacing: "0.18em" }}>
                {t("onto_decouple_logic_label")}
              </div>
              <h3 className="h-sans" style={{ fontSize: 26, fontWeight: 500, letterSpacing: "-0.025em", color: "var(--c-ink-1)", marginBottom: 18 }}>
                {t("onto_decouple_logic_title")}
              </h3>
              <ul className="space-y-3">
                {["l1", "l2", "l3"].map((l) => (
                  <li key={l} className="flex gap-3 items-start" style={{ fontSize: 14, color: "var(--c-ink-2)", lineHeight: 1.55 }}>
                    <span style={{ width: 4, height: 4, borderRadius: 999, background: "var(--c-info)", marginTop: 8, flexShrink: 0 }} />
                    <span>{t(`onto_decouple_logic_${l}`)}</span>
                  </li>
                ))}
              </ul>
            </HairCard>
          </Reveal>

          <Reveal delay={2}>
            <HairCard accent="lime" style={{ minHeight: 280 }}>
              <div className="f-mono mb-4" style={{ fontSize: 11, color: "var(--c-lime)", letterSpacing: "0.18em" }}>
                {t("onto_decouple_rule_label")}
              </div>
              <h3 className="h-sans" style={{ fontSize: 26, fontWeight: 500, letterSpacing: "-0.025em", color: "var(--c-ink-1)", marginBottom: 18 }}>
                {t("onto_decouple_rule_title")}
              </h3>
              <ul className="space-y-3">
                {["l1", "l2", "l3"].map((l) => (
                  <li key={l} className="flex gap-3 items-start" style={{ fontSize: 14, color: "var(--c-ink-2)", lineHeight: 1.55 }}>
                    <span style={{ width: 4, height: 4, borderRadius: 999, background: "var(--c-lime)", marginTop: 8, flexShrink: 0 }} />
                    <span>{t(`onto_decouple_rule_${l}`)}</span>
                  </li>
                ))}
              </ul>
            </HairCard>
          </Reveal>
        </div>

        <Reveal delay={2}>
          <p className="t-body mt-8" style={{ color: "var(--c-ink-3)", textAlign: "center" }}>
            {t("onto_decouple_footer")}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
