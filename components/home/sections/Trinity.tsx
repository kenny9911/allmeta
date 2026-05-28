"use client";
import React from "react";
import { useApp } from "@/lib/i18n";
import Container from "@/components/shared/Container";
import SectionLabel from "@/components/shared/SectionLabel";

export default function Trinity() {
  const { t } = useApp();
  return (
    <section style={{ paddingTop: 80, paddingBottom: 60 }}>
      <Container>
        <SectionLabel>{t("home_trinity_label")}</SectionLabel>

        <div className="mt-8 mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <h2 className="h-chunky h-display-md">{t("home_trinity_title")}</h2>
          <p className="h-italic" style={{ fontSize: "clamp(15px, 1.4vw, 18px)" }}>
            {t("home_trinity_title_en")}
          </p>
        </div>

        <div className="grid grid-cols-[60px_1fr] gap-x-4 gap-y-3">
          {/* Top — Agent Layer */}
          <SideMarker label={t("home_trinity_top_label")} tone="amber" />
          <TrinityRow
            tone="amber"
            label={t("home_trinity_top_subtitle")}
            title={t("home_trinity_top_title")}
            caption={t("home_trinity_top_caption")}
            note={t("home_trinity_top_note")}
          />

          {/* Middle — Ontology */}
          <SideMarker label={t("home_trinity_mid_label")} tone="lime" />
          <TrinityRow
            tone="lime"
            label={t("home_trinity_mid_subtitle")}
            title={t("home_trinity_mid_title")}
            caption={t("home_trinity_mid_caption")}
            note={t("home_trinity_mid_note")}
            emphasized
          />

          {/* Bottom — Records */}
          <SideMarker label={t("home_trinity_bot_label")} tone="info" />
          <TrinityRow
            tone="info"
            label={t("home_trinity_bot_subtitle")}
            title={t("home_trinity_bot_title")}
            caption={t("home_trinity_bot_caption")}
            note={t("home_trinity_bot_note")}
          />
        </div>

        <p className="mt-10 text-center f-mono italic" style={{ fontSize: 12, color: "var(--c-ink-3)", letterSpacing: "0.05em" }}>
          {t("home_trinity_footer")}
        </p>
      </Container>
    </section>
  );
}

function SideMarker({ label, tone }: { label: string; tone: "lime" | "amber" | "info" }) {
  const c: Record<string, string> = { lime: "var(--c-lime)", amber: "var(--c-amber)", info: "var(--c-info)" };
  return (
    <div className="flex flex-col items-center justify-center f-mono" style={{ color: c[tone], fontSize: 13, letterSpacing: "0.08em", fontWeight: 600 }}>
      {label}
    </div>
  );
}

function TrinityRow({
  tone,
  label,
  title,
  caption,
  note,
  emphasized,
}: {
  tone: "lime" | "amber" | "info";
  label: string;
  title: string;
  caption: string;
  note: string;
  emphasized?: boolean;
}) {
  const c: Record<string, string> = { lime: "var(--c-lime)", amber: "var(--c-amber)", info: "var(--c-info)" };
  return (
    <div
      className="panel grid grid-cols-1 md:grid-cols-[1fr_auto] items-center gap-3"
      style={{
        padding: "20px 24px",
        borderLeft: `3px solid ${c[tone]}`,
        boxShadow: emphasized
          ? `0 0 0 1px ${c[tone]}, 0 0 50px -10px color-mix(in oklab, ${c[tone]} 55%, transparent)`
          : undefined,
      }}
    >
      <div>
        <div className="f-mono" style={{ fontSize: 10.5, color: c[tone], letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 6 }}>
          {label}
        </div>
        <div className="f-display" style={{ fontSize: 22, fontWeight: 700, color: "var(--c-ink-1)", letterSpacing: "-0.01em" }}>
          {title}
        </div>
        <div className="mt-1" style={{ fontSize: 13, color: "var(--c-ink-3)" }}>{caption}</div>
      </div>
      <div className="text-right f-mono italic" style={{ fontSize: 11.5, color: "var(--c-ink-3)", letterSpacing: "0.02em", maxWidth: 300 }}>
        {note}
      </div>
    </div>
  );
}
