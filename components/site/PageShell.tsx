"use client";
import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import type { LaunchMap } from "@/lib/products";

/** Wraps every page in the standard nav + content + footer chrome.
 *  Backgrounds are intentionally minimal — depth comes from typography
 *  and product mockups, not noisy grid overlays. The aurora layer is
 *  applied per-section where it earns its keep (hero, closing). */
export default function PageShell({
  children,
  launchUrl,
  launch,
}: {
  children: React.ReactNode;
  launchUrl?: string;
  /** Resolved suite URLs, so the nav's Products menu can launch directly. */
  launch?: LaunchMap;
}) {
  return (
    <div className="relative min-h-screen flex flex-col bg-bg">
      <NavBar launchUrl={launchUrl} launch={launch} />
      <main className="relative z-10 flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
