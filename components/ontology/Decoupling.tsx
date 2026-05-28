"use client";
import React from "react";
import { useApp } from "@/lib/i18n";
import Container from "@/components/shared/Container";
import SectionLabel from "@/components/shared/SectionLabel";

export default function Decoupling() {
  const { t } = useApp();
  return (
    <section style={{ paddingTop: 80, paddingBottom: 60 }}>
      <Container>
        <SectionLabel tone="cyan">{t("onto_decouple_label")}</SectionLabel>
        <div className="mt-8 mb-3">
          <h2 className="h-chunky h-display-md">
            <span style={{ color: "var(--c-info)" }}>Logic</span>{" "}
            <span style={{ color: "var(--c-ink-1)" }}>与</span>{" "}
            <span style={{ color: "var(--c-lime)" }}>Rule</span>{" "}
            <span style={{ color: "var(--c-ink-1)" }}>必须解耦。</span>
          </h2>
        </div>
        <p className="italic-en mb-12" style={{ fontSize: 15, color: "var(--c-ink-3)", lineHeight: 1.6, maxWidth: 700, fontStyle: "italic" }}>
          {t("onto_decouple_sub")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <DecoupleCard
            tone="info"
            label={t("onto_decouple_logic_label")}
            title={t("onto_decouple_logic_title")}
            bullets={[t("onto_decouple_logic_l1"), t("onto_decouple_logic_l2"), t("onto_decouple_logic_l3")]}
          />
          <DecoupleCard
            tone="lime"
            label={t("onto_decouple_rule_label")}
            title={t("onto_decouple_rule_title")}
            bullets={[t("onto_decouple_rule_l1"), t("onto_decouple_rule_l2"), t("onto_decouple_rule_l3")]}
          />
        </div>

        <p className="mt-10 text-center f-mono italic" style={{ fontSize: 13, color: "var(--c-ink-3)" }}>
          {t("onto_decouple_footer")}
        </p>
      </Container>
    </section>
  );
}

function DecoupleCard({
  tone,
  label,
  title,
  bullets,
}: {
  tone: "info" | "lime";
  label: string;
  title: string;
  bullets: string[];
}) {
  const c: Record<string, string> = { info: "var(--c-info)", lime: "var(--c-lime)" };
  return (
    <div className="panel" style={{ padding: 32, boxShadow: `inset 0 3px 0 0 ${c[tone]}` }}>
      <div className="f-mono mb-4" style={{ fontSize: 11, color: c[tone], letterSpacing: "0.18em" }}>
        {label}
      </div>
      <div className="f-display" style={{ fontSize: 28, fontWeight: 700, color: "var(--c-ink-1)", letterSpacing: "-0.02em", lineHeight: 1.15, marginBottom: 20 }}>
        {title}
      </div>
      <ul className="space-y-3">
        {bullets.map((b, i) => (
          <li key={i} className="flex gap-3 items-start" style={{ fontSize: 13.5, color: "var(--c-ink-2)", lineHeight: 1.55 }}>
            <span style={{ width: 4, height: 4, borderRadius: 999, background: c[tone], marginTop: 8, flexShrink: 0 }} />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
