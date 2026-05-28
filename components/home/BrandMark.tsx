"use client";
import React from "react";
import clsx from "clsx";

type Size = "sm" | "md" | "lg" | "xl";

const sizeMap: Record<Size, number> = {
  sm: 20,
  md: 28,
  lg: 64,
  xl: 88,
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
      style={{ fontSize: sizeMap[size], ...style }}
    >
      <img
        src="/allmeta-white.png"
        alt="allm²eta"
        className="brand-mark-img brand-mark-img-light"
        draggable={false}
      />
      <img
        src="/allmeta-black.jpg"
        alt="allm²eta"
        className="brand-mark-img brand-mark-img-dark"
        aria-hidden="true"
        draggable={false}
      />
    </span>
  );
}
