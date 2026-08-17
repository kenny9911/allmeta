"use client";
import React from "react";
import PageShell from "@/components/site/PageShell";
import type { LaunchMap } from "@/lib/products";
import Hero from "./Hero";
import WhatItIs from "./WhatItIs";
import AutoGen from "./AutoGen";
import Builders from "./Builders";
import Capabilities from "./Capabilities";
import FirstPrinciple from "./FirstPrinciple";
import Pillars from "./Pillars";
import Decoupling from "./Decoupling";
import Position from "./Position";
import OntologyInMotion from "./OntologyInMotion";
import CTA from "./CTA";

export default function OntologyContent({
  launchUrl,
  launch,
}: {
  launchUrl: string;
  launch?: LaunchMap;
}) {
  return (
    <PageShell launchUrl={launchUrl} launch={launch}>
      <Hero launchUrl={launchUrl} />
      <WhatItIs />
      <AutoGen />
      <Builders />
      <Capabilities />
      <FirstPrinciple />
      <Pillars />
      <Decoupling />
      <Position />
      <OntologyInMotion />
      <CTA launchUrl={launchUrl} />
    </PageShell>
  );
}
