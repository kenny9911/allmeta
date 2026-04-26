"use client";
import React from "react";
import { useApp } from "@/lib/i18n";
import { Ic, type IcName } from "@/components/shared/Ic";

export default function ProductCard({
  href,
  icon,
  titleKey,
  subtitleKey,
  descKey,
  index,
}: {
  href: string;
  icon: IcName;
  titleKey: string;
  subtitleKey: string;
  descKey: string;
  index: string;
}) {
  const { t } = useApp();
  const IconNode = Ic[icon];

  return (
    <a
      href={href}
      className="product-card group flex flex-col bg-surface border border-line rounded-lg shadow-sh-1 no-underline"
      style={{ padding: 28, minHeight: 280 }}
    >
      <div className="flex items-start justify-between" style={{ marginBottom: 22 }}>
        <div
          className="inline-flex items-center justify-center"
          style={{
            width: 44,
            height: 44,
            borderRadius: 10,
            background: "var(--c-accent-bg)",
            color: "var(--c-accent)",
            border: "1px solid var(--c-accent-line)",
          }}
        >
          <IconNode width={22} height={22} />
        </div>
        <div
          className="hint"
          style={{ fontSize: 10, letterSpacing: "0.12em" }}
        >
          {index}
        </div>
      </div>

      <div
        className="font-medium uppercase text-ink-3"
        style={{ fontSize: 10.5, letterSpacing: "0.14em", marginBottom: 8 }}
      >
        {t(subtitleKey)}
      </div>

      <h2
        className="font-semibold text-ink-1"
        style={{ fontSize: 22, letterSpacing: "-0.01em", marginBottom: 12 }}
      >
        {t(titleKey)}
      </h2>

      <p
        className="text-ink-2"
        style={{ fontSize: 13, lineHeight: 1.6, marginBottom: 22, flex: 1 }}
      >
        {t(descKey)}
      </p>

      <div className="flex items-center justify-between">
        <span
          className="inline-flex items-center gap-1.5 font-medium"
          style={{ color: "var(--c-accent)", fontSize: 12.5 }}
        >
          {t("cta_launch")}
          <span
            className="transition-transform group-hover:translate-x-0.5"
            style={{ display: "inline-flex" }}
          >
            <Ic.arrowR />
          </span>
        </span>
        <span
          className="hint mono"
          style={{ fontSize: 10, color: "var(--c-ink-4)" }}
        >
          {hostnameOf(href)}
        </span>
      </div>
    </a>
  );
}

function hostnameOf(url: string): string {
  try {
    const u = new URL(url);
    return u.host;
  } catch {
    return url;
  }
}
