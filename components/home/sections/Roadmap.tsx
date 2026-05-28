"use client";
import React from "react";
import { useApp } from "@/lib/i18n";
import Container from "@/components/shared/Container";
import SectionLabel from "@/components/shared/SectionLabel";

export default function Roadmap() {
  const { t } = useApp();
  const steps: Array<{ when: string; title: string; caption: string; tone: "lime" | "violet" | "amber" | "info" | "coral"; live?: boolean }> = [
    { when: t("home_roadmap_now"), title: t("home_roadmap_step1_title"), caption: t("home_roadmap_step1_caption"), tone: "lime", live: true },
    { when: t("home_roadmap_q3"), title: t("home_roadmap_step2_title"), caption: t("home_roadmap_step2_caption"), tone: "violet" },
    { when: t("home_roadmap_q4"), title: t("home_roadmap_step3_title"), caption: t("home_roadmap_step3_caption"), tone: "amber" },
    { when: t("home_roadmap_eoy"), title: t("home_roadmap_step4_title"), caption: t("home_roadmap_step4_caption"), tone: "info" },
    { when: t("home_roadmap_2027"), title: t("home_roadmap_step5_title"), caption: t("home_roadmap_step5_caption"), tone: "coral" },
  ];

  const c: Record<string, string> = {
    lime: "var(--c-lime)",
    violet: "var(--c-violet)",
    amber: "var(--c-amber)",
    info: "var(--c-info)",
    coral: "var(--c-coral)",
  };

  return (
    <section style={{ paddingTop: 80, paddingBottom: 60 }}>
      <Container>
        <SectionLabel tone="violet">{t("home_roadmap_label")}</SectionLabel>

        <div className="mt-8 mb-3">
          <h2 className="h-chunky h-display-md">{t("home_roadmap_title_zh")}</h2>
          <p className="h-italic mt-2" style={{ fontSize: "clamp(15px, 1.4vw, 18px)" }}>
            {t("home_roadmap_title_en")}
          </p>
        </div>
        <p className="mb-14 italic-en" style={{ fontSize: 14, color: "var(--c-ink-3)", lineHeight: 1.6, maxWidth: 700, fontStyle: "italic" }}>
          {t("home_roadmap_caption_en")}
        </p>

        <div className="relative grid grid-cols-2 md:grid-cols-5 gap-4">
          {/* horizontal connector line */}
          <div
            className="hidden md:block absolute pointer-events-none"
            aria-hidden
            style={{
              top: 26,
              left: 28,
              right: 28,
              height: 1,
              background: "linear-gradient(to right, var(--c-lime), var(--c-violet), var(--c-amber), var(--c-info), var(--c-coral))",
              opacity: 0.4,
            }}
          />

          {steps.map((s, i) => (
            <div key={i} className="relative">
              {/* node dot */}
              <div
                className="flex items-center justify-center mb-3"
                style={{ width: 52, height: 52, borderRadius: 999, background: "var(--c-bg)", border: `1.5px solid ${c[s.tone]}`, position: "relative", zIndex: 1 }}
              >
                <div style={{ width: 18, height: 18, borderRadius: 999, background: c[s.tone], boxShadow: s.live ? `0 0 18px ${c[s.tone]}` : undefined }} />
              </div>
              <div className="f-mono" style={{ fontSize: 10.5, color: c[s.tone], letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 6 }}>
                {s.when}
                {s.live && <span style={{ color: "var(--c-lime)", marginLeft: 6 }}>● LIVE</span>}
              </div>
              <div className="f-display" style={{ fontSize: 18, fontWeight: 700, color: "var(--c-ink-1)", letterSpacing: "-0.01em", lineHeight: 1.2, marginBottom: 4 }}>
                {s.title}
              </div>
              <div style={{ fontSize: 12.5, color: "var(--c-ink-3)", lineHeight: 1.5 }}>{s.caption}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
