"use client";
import React from "react";
import { useApp } from "@/lib/i18n";
import Container from "@/components/shared/Container";
import SectionLabel from "@/components/shared/SectionLabel";

export default function RecordToActions() {
  const { t } = useApp();
  return (
    <section style={{ paddingTop: 70, paddingBottom: 60 }}>
      <Container>
        <SectionLabel tone="amber">FROM RECORDS · TO ACTIONS</SectionLabel>

        <div className="mt-8 mb-10">
          <h2 className="h-chunky h-display-md">
            <span style={{ color: "var(--c-ink-3)" }} className="italic-en"><i>{t("home_sysrec_title")}</i></span>
            <br />
            <span className="italic-en" style={{ color: "var(--c-ink-1)" }}>
              <i>But it does </i>
              <i className="hl-coral" style={{ color: "var(--c-coral)" }}>not</i>
              <i> Operate.</i>
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          <div className="panel" style={{ padding: "22px 24px", borderLeft: "3px solid var(--c-ink-4)" }}>
            <div className="f-mono" style={{ fontSize: 10.5, letterSpacing: "0.14em", color: "var(--c-ink-3)", textTransform: "uppercase", marginBottom: 12 }}>
              {t("home_sysrec_label")}
            </div>
            <div className="f-display" style={{ fontSize: 22, fontWeight: 700, color: "var(--c-ink-1)", letterSpacing: "-0.01em", marginBottom: 14 }}>
              {t("home_sysrec_caption")}
            </div>
            <div className="f-mono space-y-1" style={{ fontSize: 12, color: "var(--c-ink-3)", letterSpacing: "0.04em" }}>
              <div>Transactions</div>
              <div>Compliance</div>
              <div>Audit &amp; Reporting</div>
            </div>
          </div>

          <div className="panel relative overflow-hidden" style={{ padding: "22px 24px", borderLeft: "3px solid var(--c-lime)", boxShadow: "0 0 0 1px var(--c-lime-line), 0 0 36px -10px color-mix(in oklab, var(--c-lime) 60%, transparent)" }}>
            <div className="absolute inset-0 pointer-events-none" style={{
              background: "radial-gradient(ellipse 60% 50% at 100% 0%, var(--c-lime-bg), transparent 60%)",
              opacity: 0.65,
            }} />
            <div className="relative">
              <div className="f-mono" style={{ fontSize: 10.5, letterSpacing: "0.14em", color: "var(--c-lime)", textTransform: "uppercase", marginBottom: 12 }}>
                {t("home_sysact_label")}
              </div>
              <div className="f-display" style={{ fontSize: 22, fontWeight: 700, color: "var(--c-ink-1)", letterSpacing: "-0.01em", marginBottom: 14 }}>
                {t("home_sysact_sub")}
              </div>
              <div className="italic-en" style={{ fontSize: 13, color: "var(--c-ink-3)", lineHeight: 1.6 }}>
                {t("home_sysact_caption")}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
