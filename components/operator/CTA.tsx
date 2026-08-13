"use client";
import React from "react";
import { useApp } from "@/lib/i18n";
import { CTASection, Em } from "@/components/editorial/parts";

export default function CTA({ launchUrl }: { launchUrl: string }) {
  const { t } = useApp();
  return (
    <CTASection
      tone="violet"
      title={
        <>
          Move your agent fleet onto an{" "}
          <Em color="var(--c-violet)">Ontology.</Em>
        </>
      }
      sub={t("op_cta_title_en")}
      primary={{ href: launchUrl, label: t("op_cta_primary"), external: true }}
      secondary={{ href: "/ontology", label: t("op_cta_secondary") }}
    />
  );
}
