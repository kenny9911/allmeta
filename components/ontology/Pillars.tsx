"use client";
import React from "react";
import { useApp } from "@/lib/i18n";
import Container from "@/components/shared/Container";
import SectionLabel from "@/components/shared/SectionLabel";
import { I } from "@/components/shared/IconSet";

export default function Pillars() {
  const { t } = useApp();
  return (
    <section style={{ paddingTop: 80, paddingBottom: 60 }}>
      <Container>
        <SectionLabel tone="violet">{t("onto_pillars_label")}</SectionLabel>
        <div className="mt-8 mb-3">
          <h2 className="h-chunky h-display-md">{t("onto_pillars_title")}</h2>
        </div>
        <p className="italic-en mb-12" style={{ fontSize: 15, color: "var(--c-ink-3)", maxWidth: 700, fontStyle: "italic" }}>
          {t("onto_pillars_sub")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Pillar
            tone="info"
            kw={t("onto_pillars_what")}
            icon={<I.cube />}
            title={t("onto_pillars_obj_title")}
            zh={t("onto_pillars_obj_zh")}
            bullets={[t("onto_pillars_obj_l1"), t("onto_pillars_obj_l2"), t("onto_pillars_obj_l3")]}
          />
          <Pillar
            tone="amber"
            kw={t("onto_pillars_how")}
            icon={<I.bolt />}
            title={t("onto_pillars_act_title")}
            zh={t("onto_pillars_act_zh")}
            bullets={[t("onto_pillars_act_l1"), t("onto_pillars_act_l2"), t("onto_pillars_act_l3")]}
          />
          <Pillar
            tone="lime"
            kw={t("onto_pillars_why")}
            icon={<I.shield />}
            title={t("onto_pillars_rule_title")}
            zh={t("onto_pillars_rule_zh")}
            bullets={[t("onto_pillars_rule_l1"), t("onto_pillars_rule_l2"), t("onto_pillars_rule_l3")]}
          />
        </div>
      </Container>
    </section>
  );
}

function Pillar({
  tone,
  kw,
  icon,
  title,
  zh,
  bullets,
}: {
  tone: "info" | "amber" | "lime";
  kw: string;
  icon: React.ReactNode;
  title: string;
  zh: string;
  bullets: string[];
}) {
  const c: Record<string, string> = { info: "var(--c-info)", amber: "var(--c-amber)", lime: "var(--c-lime)" };
  return (
    <div className="panel" style={{ padding: 28, boxShadow: `inset 0 3px 0 0 ${c[tone]}` }}>
      <div className="flex items-center justify-between mb-5">
        <div
          className="inline-flex items-center justify-center"
          style={{
            width: 40, height: 40, borderRadius: 10,
            background: `color-mix(in oklab, ${c[tone]} 14%, transparent)`,
            color: c[tone],
            border: `1px solid color-mix(in oklab, ${c[tone]} 35%, transparent)`,
          }}
        >
          {icon}
        </div>
        <div className="f-mono" style={{ fontSize: 10.5, color: c[tone], letterSpacing: "0.18em" }}>{kw}</div>
      </div>
      <h3 className="f-display" style={{ fontSize: 28, fontWeight: 700, color: "var(--c-ink-1)", letterSpacing: "-0.02em", lineHeight: 1.05 }}>
        {title}
      </h3>
      <div className="f-mono mt-2 mb-4" style={{ fontSize: 11, color: "var(--c-ink-3)", letterSpacing: "0.06em", textTransform: "uppercase" }}>
        {zh}
      </div>
      <div style={{ borderTop: "1px solid var(--c-line)", paddingTop: 16 }}>
        <ul className="space-y-2.5">
          {bullets.map((b, i) => (
            <li key={i} className="flex gap-2.5 items-start" style={{ fontSize: 13, color: "var(--c-ink-2)", lineHeight: 1.55 }}>
              <span style={{ width: 4, height: 4, borderRadius: 999, background: c[tone], marginTop: 8, flexShrink: 0 }} />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
