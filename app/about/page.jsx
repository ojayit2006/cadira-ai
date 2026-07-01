"use client";

import { ArrowRight } from "lucide-react";
import { SectionLabel } from "@/components/ui";
import { useReveal } from "@/lib/useReveal";

const comparison = [
  { title: "Traditional AI Agencies", result: "Build software." },
  { title: "Research Firms", result: "Produce insights." },
  {
    title: "Cadira AI",
    result: "Builds intelligent software powered by institutional-grade research.",
    highlight: true,
  },
];

const principles = ["AI-first architecture", "Measurable outcomes", "Built to compound"];

export default function AboutPage() {
  useReveal();

  return (
    <>
      <section className="page-hero reveal">
        <SectionLabel>About Cadira</SectionLabel>
        <h1>Engineering and research, under one roof.</h1>
        <p className="page-hero-copy">
          Cadira AI develops intelligent software and quantitative analytics that help organizations
          automate complex workflows, understand markets, and make better strategic decisions.
        </p>
      </section>

      <section className="section about">
        <div className="wide-grid">
          <div className="reveal">
            <SectionLabel>Our Work</SectionLabel>
            <h2>Two disciplines, one practice.</h2>
          </div>
          <div className="about-copy reveal">
            <p>
              Our work spans enterprise AI, machine learning, financial analytics, and decision
              intelligence — bridging cutting-edge engineering with rigorous research.
            </p>
            <p>
              Most firms either build software or conduct research. Cadira AI does both, developing
              AI systems while creating proprietary analytical frameworks for financial and strategic
              decision-making.
            </p>
          </div>
        </div>
        <div className="principle-grid reveal">
          {principles.map((item, index) => (
            <article className="principle-card" key={item}>
              <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              <h3>{item}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="section why">
        <div className="section-heading reveal">
          <SectionLabel>Why Cadira</SectionLabel>
          <h2>AI Engineering Meets Quantitative Research.</h2>
        </div>
        <div className="compare-grid reveal">
          {comparison.map((item) => (
            <article
              className={`compare-card neo-card ${item.highlight ? "highlight" : ""}`}
              key={item.title}
            >
              <h4>{item.title}</h4>
              <ArrowRight size={20} />
              <p>{item.result}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
