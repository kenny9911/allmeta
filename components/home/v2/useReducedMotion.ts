"use client";
import React from "react";

/** True when the OS has been asked for stillness.
 *
 *  Starts false so server and first client render agree, then flips on mount —
 *  a diagram that reads correctly frozen is the requirement, not one that
 *  never animates. Callers render a deliberate parked frame rather than
 *  dropping the motion layer entirely, because a path with nothing on it
 *  reads as a rendering bug. */
export function useReducedMotion() {
  const [still, setStill] = React.useState(false);
  React.useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setStill(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setStill(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return still;
}
