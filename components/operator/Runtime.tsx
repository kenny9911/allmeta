"use client";
import React from "react";
import { useApp } from "@/lib/i18n";
import { Eyebrow, Reveal, Em } from "@/components/editorial/parts";

export default function Runtime() {
  const { t } = useApp();
  return (
    <section className="section">
      <div className="edito-container">
        <Reveal>
          <div className="max-w-4xl">
            <Eyebrow>{t("op_runtime_label")}</Eyebrow>
            <h2 className="t-h2 mt-7">
              Ontology is the brain.{" "}
              <span style={{ color: "var(--c-ink-3)" }}>
                The Operator is what <Em>makes it run.</Em>
              </span>
            </h2>
            <p className="t-lead mt-7" style={{ maxWidth: 640 }}>
              {t("op_runtime_sub")}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
