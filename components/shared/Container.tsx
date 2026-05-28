"use client";
import React from "react";
import clsx from "clsx";

/** Page-level horizontal container with consistent gutter + max width. */
export default function Container({
  children,
  className,
  size = "default",
  style,
}: {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "wide" | "narrow";
  style?: React.CSSProperties;
}) {
  const maxWidth = { default: 1200, wide: 1360, narrow: 880 }[size];
  return (
    <div
      className={clsx("mx-auto w-full", className)}
      style={{ maxWidth, paddingLeft: 32, paddingRight: 32, ...style }}
    >
      {children}
    </div>
  );
}
