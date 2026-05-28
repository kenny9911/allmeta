"use client";
import React from "react";
import { useApp } from "@/lib/i18n";
import Container from "@/components/shared/Container";
import SectionLabel from "@/components/shared/SectionLabel";

export default function Runtime() {
  const { t } = useApp();
  return (
    <section style={{ paddingTop: 80, paddingBottom: 40 }}>
      <Container>
        <SectionLabel>{t("op_runtime_label")}</SectionLabel>
        <div className="mt-8 mb-4">
          <h2 className="h-chunky h-display-md">{t("op_runtime_title")}</h2>
        </div>
        <p className="italic-en" style={{ fontSize: 15, color: "var(--c-ink-3)", lineHeight: 1.6, maxWidth: 720, fontStyle: "italic" }}>
          {t("op_runtime_sub")}
        </p>
      </Container>
    </section>
  );
}
