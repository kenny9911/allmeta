"use client";
import React from "react";
import clsx from "clsx";

type Size = "sm" | "md" | "lg" | "xl" | "2xl";

const sizeClass: Record<Size, string> = {
  sm: "orb-sm",
  md: "orb-md",
  lg: "orb-lg",
  xl: "orb-xl",
  "2xl": "orb-2xl",
};

/** Glowing AI orb — the replacement for the pulse dot.
 *  Multi-layer radial + conic gradients with breathing + rotation. */
export default function Orb({
  size = "md",
  className,
  style,
  "aria-label": ariaLabel = "AI",
}: {
  size?: Size;
  className?: string;
  style?: React.CSSProperties;
  "aria-label"?: string;
}) {
  return (
    <span
      role="img"
      aria-label={ariaLabel}
      className={clsx("ai-orb", sizeClass[size], className)}
      style={style}
    />
  );
}
