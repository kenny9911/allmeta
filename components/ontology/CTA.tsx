"use client";
import React from "react";
import { useApp } from "@/lib/i18n";
import { CTASection, Em } from "@/components/editorial/parts";

export default function CTA({ launchUrl }: { launchUrl: string }) {
  const { t } = useApp();
  return (
    <CTASection
      title={
        <>
          Turn your business into an{" "}
          <Em color="var(--c-lime)">agent-callable surface.</Em>
        </>
      }
      sub={t("onto_cta_title_en")}
      primary={{ href: launchUrl, label: t("onto_cta_primary"), external: true }}
      secondary={{ href: "/operator", label: t("onto_cta_secondary") }}
    />
  );
}
