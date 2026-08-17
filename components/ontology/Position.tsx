"use client";
import React from "react";
import { useApp } from "@/lib/i18n";
import { Eyebrow, HairCard, Reveal, Em } from "@/components/editorial/parts";

export default function Position() {
  const { t } = useApp();
  return (
    <section className="section">
      <div className="edito-container">
        <Reveal>
          <div className="max-w-4xl">
            <Eyebrow>{t("onto_position_label")}</Eyebrow>
            <h2 className="t-h2 mt-6">
              Ontology is a tool to <span style={{ color: "var(--c-coral)" }}>control hallucination</span> —
              <span style={{ color: "var(--c-ink-3)" }}> not to replace the model.</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
          <Reveal delay={1}>
            <HairCard accent="coral">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="f-mono" style={{ width: 18, height: 18, borderRadius: 5, display: "inline-flex", alignItems: "center", justifyContent: "center", background: "color-mix(in oklab, var(--c-coral) 16%, transparent)", color: "var(--c-coral)", fontSize: 12 }}>✕</span>
                <span className="f-mono" style={{ fontSize: 12, color: "var(--c-coral)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  {t("onto_position_bad1_title")}
                </span>
              </div>
              <p className="t-body">{t("onto_position_bad1_caption")}</p>
            </HairCard>
          </Reveal>
          <Reveal delay={2}>
            <HairCard accent="coral">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="f-mono" style={{ width: 18, height: 18, borderRadius: 5, display: "inline-flex", alignItems: "center", justifyContent: "center", background: "color-mix(in oklab, var(--c-coral) 16%, transparent)", color: "var(--c-coral)", fontSize: 12 }}>✕</span>
                <span className="f-mono" style={{ fontSize: 12, color: "var(--c-coral)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  {t("onto_position_bad2_title")}
                </span>
              </div>
              <p className="t-body">{t("onto_position_bad2_caption")}</p>
            </HairCard>
          </Reveal>
        </div>

        <Reveal delay={2}>
          <div
            className="hairline glow-ring mt-4 flex flex-col md:flex-row md:items-center justify-between gap-4"
            style={{ padding: "26px 30px" }}
          >
            <p className="t-h3" style={{ maxWidth: 760 }}>
              {t("onto_position_good")}
            </p>
            <span className="f-mono" style={{ fontSize: 10.5, color: "var(--c-lime-ink)", letterSpacing: "0.14em", textTransform: "uppercase", whiteSpace: "nowrap" }}>
              ✓ alive
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
