"use client";
import React from "react";
import { useApp } from "@/lib/i18n";
import { SectionHead, Reveal, Em } from "@/components/editorial/parts";
import LiveOpsMock from "@/components/home/v2/mocks/LiveOpsMock";

export default function LiveTrace() {
  const { t } = useApp();
  return (
    <section style={{ paddingTop: 70, paddingBottom: 90 }}>
      <div className="edito-container">
        <SectionHead
          eyebrow={t("op_trace_label")}
          title={
            <>
              End-to-end. <Em color="var(--c-ink-2)">Auto-pilot.</Em> No preview needed.
            </>
          }
          desc={t("op_trace_sub")}
        />
        <Reveal delay={1}>
          <LiveOpsMock />
        </Reveal>
        <Reveal delay={2}>
          <p className="t-h3 mt-8 text-center" style={{ color: "var(--c-ink-2)", maxWidth: 740, marginInline: "auto" }}>
            {t("op_trace_kicker")}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
