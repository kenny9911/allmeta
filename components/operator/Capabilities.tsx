"use client";
import React from "react";
import { useApp } from "@/lib/i18n";
import { SectionHead, Reveal } from "@/components/editorial/parts";

const caps = ["1", "2", "3", "4", "5", "6", "7"];

export default function Capabilities() {
  const { t } = useApp();
  return (
    <section style={{ paddingTop: 70, paddingBottom: 90 }}>
      <div className="edito-container">
        <SectionHead
          eyebrow={t("op_caps_label")}
          title={<>Seven core capabilities.</>}
        />

        {/* Editorial numbered list — two columns, hairline dividers */}
        <div className="hairline" style={{ padding: 0, overflow: "hidden" }}>
          <div className="grid grid-cols-1 md:grid-cols-2">
            {caps.map((n, i) => (
              <Reveal key={n} delay={(Math.min(3, (i % 3) + 1)) as 1 | 2 | 3}>
                <div
                  className="flex items-start gap-5"
                  style={{
                    padding: "22px 26px",
                    borderBottom: "1px solid color-mix(in oklab, var(--c-ink-4) 12%, transparent)",
                    borderRight: i % 2 === 0 ? "1px solid color-mix(in oklab, var(--c-ink-4) 12%, transparent)" : "none",
                  }}
                >
                  <span className="f-mono tabular-nums" style={{ fontSize: 12, color: "var(--c-ink-4)", letterSpacing: "0.06em", paddingTop: 3 }}>
                    0{n}
                  </span>
                  <div>
                    <div className="h-sans" style={{ fontSize: 18, fontWeight: 500, letterSpacing: "-0.02em", color: "var(--c-ink-1)", marginBottom: 5 }}>
                      {t(`op_cap${n}_t`)}
                    </div>
                    <div style={{ fontSize: 13, color: "var(--c-ink-3)", lineHeight: 1.55 }}>
                      {t(`op_cap${n}_d`)}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
