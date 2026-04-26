"use client";
import React from "react";
import ProductCard from "./ProductCard";

export default function ProductGrid({
  ontologyUrl,
  operatorUrl,
}: {
  ontologyUrl: string;
  operatorUrl: string;
}) {
  return (
    <section
      className="grid mx-auto"
      style={{
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        gap: 20,
        maxWidth: 880,
        width: "100%",
        padding: "0 24px",
      }}
    >
      <ProductCard
        href={ontologyUrl}
        icon="branch"
        titleKey="product_ontology_title"
        subtitleKey="product_ontology_subtitle"
        descKey="product_ontology_desc"
        index="01 / ONTOLOGY"
      />
      <ProductCard
        href={operatorUrl}
        icon="cpu"
        titleKey="product_operator_title"
        subtitleKey="product_operator_subtitle"
        descKey="product_operator_desc"
        index="02 / OPERATOR"
      />
    </section>
  );
}
