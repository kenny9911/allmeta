"use client";
import React from "react";
import clsx from "clsx";

/** Text-based brand mark with a lime-glowing ² superscript.
 *  Used in nav + footer. Image-based BrandMark is reserved for hero placement. */
export default function BrandText({
  size = "md",
  className,
  style,
}: {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  className?: string;
  style?: React.CSSProperties;
}) {
  const sizeMap = { xs: 14, sm: 18, md: 22, lg: 32, xl: 48 } as const;
  return (
    <span
      className={clsx("brand-mark-text", className)}
      style={{ fontSize: sizeMap[size], ...style }}
    >
      allm<sup>²</sup>eta
    </span>
  );
}
