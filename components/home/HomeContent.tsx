"use client";
import React from "react";
import TopBar from "./TopBar";
import Hero from "./Hero";
import ProductGrid from "./ProductGrid";
import Footer from "./Footer";
import BackgroundGrid from "./BackgroundGrid";

export default function HomeContent({
  ontologyUrl,
  operatorUrl,
}: {
  ontologyUrl: string;
  operatorUrl: string;
}) {
  return (
    <div className="relative min-h-screen flex flex-col bg-bg overflow-hidden">
      <BackgroundGrid />
      <TopBar />
      <main className="relative z-10 flex-1 flex flex-col items-stretch">
        <Hero />
        <ProductGrid ontologyUrl={ontologyUrl} operatorUrl={operatorUrl} />
      </main>
      <Footer />
    </div>
  );
}
