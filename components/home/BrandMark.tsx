"use client";
import React from "react";
import clsx from "clsx";

type Size = "sm" | "md" | "lg" | "xl";

const sizeMap: Record<Size, number> = {
  sm: 15,
  md: 22,
  lg: 56,
  xl: 80,
};

export default function BrandMark({
  size = "md",
  className,
  style,
}: {
  size?: Size;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <span
      className={clsx("brand-mark", className)}
      style={{ fontSize: sizeMap[size], lineHeight: 1, ...style }}
    >
      allm<sup>2</sup>eta
    </span>
  );
}
