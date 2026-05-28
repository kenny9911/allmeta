"use client";
import React from "react";
import { useApp } from "@/lib/i18n";
import Container from "@/components/shared/Container";
import SectionLabel from "@/components/shared/SectionLabel";
import Stat from "@/components/shared/Stat";

export default function DemoRecap() {
  const { t } = useApp();
  return (
    <section style={{ paddingTop: 80, paddingBottom: 60 }}>
      <Container>
        <SectionLabel tone="amber">{t("home_demo_label")}</SectionLabel>

        <div className="mt-8 mb-3">
          <h2 className="h-chunky h-display-md">{t("home_demo_title_zh")}</h2>
          <p className="h-italic mt-2" style={{ fontSize: "clamp(15px, 1.4vw, 18px)" }}>
            {t("home_demo_title_en")}
          </p>
        </div>
        <p className="f-mono mb-12" style={{ fontSize: 12, color: "var(--c-ink-3)", letterSpacing: "0.04em" }}>
          {t("home_demo_caption_zh")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Stat
            tone="lime"
            value={t("home_demo_stat1_value")}
            label={t("home_demo_stat1_label")}
            caption={t("home_demo_stat1_caption")}
          />
          <Stat
            tone="amber"
            value={t("home_demo_stat2_value")}
            label={t("home_demo_stat2_label")}
            caption={t("home_demo_stat2_caption")}
          />
          <Stat
            tone="coral"
            value={t("home_demo_stat3_value")}
            label={t("home_demo_stat3_label")}
            caption={t("home_demo_stat3_caption")}
          />
        </div>

        <div className="mt-14" style={{ borderTop: "1px solid var(--c-line)", paddingTop: 32 }}>
          <p className="h-chunky italic" style={{ fontSize: "clamp(22px, 3vw, 36px)", fontStyle: "italic", color: "var(--c-ink-1)" }}>
            {t("home_demo_punchline")}
          </p>
          <p className="mt-3 f-mono" style={{ fontSize: 13, color: "var(--c-coral)", letterSpacing: "0.04em" }}>
            {t("home_demo_punchline_zh")}
          </p>
        </div>
      </Container>
    </section>
  );
}
