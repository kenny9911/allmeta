"use client";
import React from "react";
import clsx from "clsx";

/** Scroll-triggered fade-up. Adds `in` class once intersecting; idempotent.
 *  Honors prefers-reduced-motion via the .reveal CSS (no transform there). */
export default function Reveal({
  children,
  delay = 0,
  className,
  as: As = "div",
  threshold = 0.12,
}: {
  children: React.ReactNode;
  delay?: 1 | 2 | 3 | 4 | 0;
  className?: string;
  as?: React.ElementType;
  threshold?: number;
}) {
  const ref = React.useRef<HTMLElement>(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("in");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add("in");
            io.unobserve(el);
          }
        });
      },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return (
    <As
      ref={ref as React.Ref<HTMLElement>}
      className={clsx("reveal", className)}
      data-delay={delay > 0 ? String(delay) : undefined}
    >
      {children}
    </As>
  );
}
