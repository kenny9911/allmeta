"use client";
import React from "react";
import PageShell from "@/components/site/PageShell";
import Hero from "./Hero";
import Runtime from "./Runtime";
import AgentRoster from "./AgentRoster";
import Capabilities from "./Capabilities";
import LiveTrace from "./LiveTrace";
import CTA from "./CTA";

export default function OperatorContent({ launchUrl }: { launchUrl: string }) {
  return (
    <PageShell launchUrl={launchUrl}>
      <Hero launchUrl={launchUrl} />
      <Runtime />
      <AgentRoster />
      <Capabilities />
      <LiveTrace />
      <CTA launchUrl={launchUrl} />
    </PageShell>
  );
}
