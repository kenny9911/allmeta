"use client";
import React from "react";
import { useApp } from "@/lib/i18n";
import { SectionHead, Reveal, Em } from "@/components/editorial/parts";
import LiveOpsMock from "@/components/home/v2/mocks/LiveOpsMock";

export default function OntologyInMotion() {
  const { t } = useApp();
  return (
    <section style={{ paddingTop: 100, paddingBottom: 90 }}>
      <div className="edito-container">
        <SectionHead
          eyebrow={t("onto_demo_label")}
          title={
            <>
              <Em color="var(--c-ink-1)">Eight agents.</Em> One ontology.
            </>
          }
          desc={t("onto_demo_subtitle")}
        />
        <Reveal delay={1}>
          <LiveOpsMock />
        </Reveal>
        <Reveal delay={2}>
          <p className="t-body mt-6 text-center" style={{ color: "var(--c-ink-3)", maxWidth: 760, marginInline: "auto" }}>
            Every agent operates the same Ontology — not a database. What we
            monitor is its reads and writes, not a code stack.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
