"use client";
import React from "react";
import { useApp } from "@/lib/i18n";
import Container from "@/components/shared/Container";
import SectionLabel from "@/components/shared/SectionLabel";

const traceLog = [
  { ts: "14:18:02", label: "resume parsed", delta: "+1.2s" },
  { ts: "14:18:04", label: "candidate created", delta: "+0.4s" },
  { ts: "14:18:05", label: "rules evaluated (5/5)", delta: "+0.8s" },
  { ts: "14:18:06", label: "match.score = 92.0", delta: "+0.6s" },
  { ts: "14:18:07", label: "auto-invite sent", delta: "+0.3s" },
  { ts: "14:18:07", label: "interview slot proposed", delta: "+0.2s" },
];

export default function LiveTrace() {
  const { t } = useApp();
  return (
    <section style={{ paddingTop: 60, paddingBottom: 60 }}>
      <Container size="wide">
        <SectionLabel tone="lime">{t("op_trace_label")}</SectionLabel>

        <div className="mt-8 mb-3">
          <h2 className="h-chunky h-display-md">{t("op_trace_title")}</h2>
        </div>
        <p className="italic-en mb-10" style={{ fontSize: 15, color: "var(--c-ink-3)", lineHeight: 1.6, maxWidth: 700, fontStyle: "italic" }}>
          {t("op_trace_sub")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Candidate panel */}
          <div className="panel" style={{ padding: 28, boxShadow: "inset 0 3px 0 0 var(--c-cyan)" }}>
            <div className="f-mono mb-3" style={{ fontSize: 11, color: "var(--c-cyan)", letterSpacing: "0.14em", textTransform: "uppercase" }}>
              {t("op_trace_candidate")}
            </div>
            <div className="f-display" style={{ fontSize: 28, fontWeight: 700, color: "var(--c-ink-1)", letterSpacing: "-0.02em", lineHeight: 1.1, marginBottom: 4 }}>
              {t("op_trace_candidate_name")}
            </div>
            <div className="f-mono mb-6" style={{ fontSize: 12, color: "var(--c-ink-3)", letterSpacing: "0.04em" }}>
              {t("op_trace_candidate_role")}
            </div>

            <div className="grid grid-cols-2 gap-y-4">
              <Row label={t("op_trace_match")} value={<span style={{ color: "var(--c-lime)", fontWeight: 700 }}>92 / 100</span>} />
              <Row label={t("op_trace_rule")} value={<span style={{ color: "var(--c-lime)" }}>✓ passed (5/5)</span>} />
              <Row label={t("op_trace_skill")} value="Go · Kafka · K8s · MySQL" mono />
              <Row label={t("op_trace_next")} value={<span style={{ color: "var(--c-amber)", fontWeight: 700 }}>{t("op_trace_next_val")}</span>} />
            </div>
          </div>

          {/* Trace log */}
          <div className="panel" style={{ padding: 28, boxShadow: "inset 0 3px 0 0 var(--c-amber)" }}>
            <div className="f-mono mb-4" style={{ fontSize: 11, color: "var(--c-amber)", letterSpacing: "0.14em", textTransform: "uppercase" }}>
              {t("op_trace_log_title")}
            </div>
            <div className="space-y-2 f-mono" style={{ fontSize: 12.5, lineHeight: 1.6 }}>
              {traceLog.map((line, i) => (
                <div key={i} className="grid grid-cols-[120px_1fr_auto] items-center gap-3">
                  <span style={{ color: "var(--c-ink-3)" }}>[{line.ts}]</span>
                  <span style={{ color: "var(--c-ink-1)" }}>{line.label}</span>
                  <span style={{ color: "var(--c-lime)" }}>✓ ok {line.delta}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-line flex items-center justify-between">
              <span className="f-mono" style={{ fontSize: 12, color: "var(--c-ink-3)" }}>{t("op_trace_total")}</span>
              <span className="f-display tabular-nums" style={{ fontSize: 22, fontWeight: 700, color: "var(--c-amber)", letterSpacing: "-0.02em" }}>3.5s</span>
            </div>
            <div className="mt-3 flex items-center gap-3 f-mono" style={{ fontSize: 11.5 }}>
              <span style={{ color: "var(--c-lime)" }}>● no human interrupt</span>
              <span style={{ color: "var(--c-violet)" }}>● trust the matching</span>
            </div>
          </div>
        </div>

        <p className="mt-8 f-display text-center italic" style={{ fontSize: "clamp(15px, 1.5vw, 18px)", color: "var(--c-amber)", fontStyle: "italic", fontWeight: 600 }}>
          {t("op_trace_kicker")}
        </p>
      </Container>
    </section>
  );
}

function Row({ label, value, mono }: { label: string; value: React.ReactNode; mono?: boolean }) {
  return (
    <>
      <div className="f-mono" style={{ fontSize: 11.5, color: "var(--c-ink-3)", letterSpacing: "0.04em" }}>
        {label}
      </div>
      <div className={mono ? "f-mono" : "f-display"} style={{ fontSize: 13, color: "var(--c-ink-1)", letterSpacing: mono ? "0.02em" : "-0.005em", textAlign: "right" }}>
        {value}
      </div>
    </>
  );
}
