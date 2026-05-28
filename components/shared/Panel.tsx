"use client";
import React from "react";
import clsx from "clsx";

type Tone = "neutral" | "lime" | "violet" | "amber" | "cyan" | "coral" | "info" | "err";

/** Dark-canvas card panel with a colored top bar — mirrors the deck cards. */
export default function Panel({
  children,
  tone = "neutral",
  className,
  style,
  as: As = "div",
  glow,
}: {
  children: React.ReactNode;
  tone?: Tone;
  className?: string;
  style?: React.CSSProperties;
  as?: React.ElementType;
  glow?: boolean;
}) {
  const topBar: Record<Tone, string> = {
    neutral: "var(--c-line-strong)",
    lime: "var(--c-lime)",
    violet: "var(--c-violet)",
    amber: "var(--c-amber)",
    cyan: "var(--c-cyan)",
    coral: "var(--c-coral)",
    info: "var(--c-info)",
    err: "var(--c-err)",
  };
  const ring: Record<Tone, string> = {
    neutral: "transparent",
    lime: "color-mix(in oklab, var(--c-lime) 20%, transparent)",
    violet: "color-mix(in oklab, var(--c-violet) 25%, transparent)",
    amber: "color-mix(in oklab, var(--c-amber) 22%, transparent)",
    cyan: "color-mix(in oklab, var(--c-cyan) 22%, transparent)",
    coral: "color-mix(in oklab, var(--c-coral) 22%, transparent)",
    info: "color-mix(in oklab, var(--c-info) 25%, transparent)",
    err: "color-mix(in oklab, var(--c-err) 25%, transparent)",
  };
  return (
    <As
      className={clsx("panel relative", className)}
      style={{
        boxShadow: `inset 0 3px 0 0 ${topBar[tone]}${glow ? `, 0 0 0 1px ${ring[tone]}, 0 0 40px -8px ${ring[tone]}` : ""}`,
        ...style,
      }}
    >
      {children}
    </As>
  );
}
