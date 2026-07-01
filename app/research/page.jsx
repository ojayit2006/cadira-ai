"use client";

import Link from "next/link";
import { FileText, Newspaper } from "lucide-react";
import { SectionLabel } from "@/components/ui";
import { useReveal } from "@/lib/useReveal";

const research = [
  {
    category: "Financial Markets",
    title: "Quantifying Instability: Bubble Signals in Financial Markets",
    abstract:
      "A quantitative framework for detecting early instability patterns across equity and credit markets using structural and behavioral indicators.",
  },
  {
    category: "Industry Research",
    title: "Industry Intelligence Reports",
    abstract:
      "Sector-level research covering competitive positioning, structural shifts, and demand signals across priority industries.",
  },
  {
    category: "AI Systems",
    title: "AI & Financial Systems Research",
    abstract:
      "Applied research on how large language models and agentic systems are reshaping financial analysis and decision workflows.",
  },
  {
    category: "Macroeconomics",
    title: "Macroeconomic Dashboards",
    abstract:
      "Live tracking frameworks for inflation, rates, employment, and growth indicators built for strategic decision-making.",
  },
  {
    category: "Market Structure",
    title: "Market Structure Analysis",
    abstract:
      "Research on liquidity, order flow, and structural shifts across public markets and their impact on execution and risk.",
  },
];

export default function ResearchPage() {
  useReveal();

  return (
    <>
      <section className="page-hero reveal">
        <SectionLabel>Research &amp; Insights</SectionLabel>
        <h1>Original research behind every system we build.</h1>
        <p className="page-hero-copy">
          Cadira AI publishes quantitative research and analytical frameworks covering financial markets,
          artificial intelligence, and strategic decision-making.
        </p>
      </section>

      <section className="section">
        <div className="feature-banner reveal">
          <div className="feature-banner-inner">
            <h2>
              Original Research. <br />
              Built with Data. <br />
              Powered by <em>AI</em>.
            </h2>
            <p>
              Cadira AI publishes quantitative research and analytical frameworks covering financial
              markets, artificial intelligence, and strategic decision-making.
            </p>
          </div>
        </div>
      </section>

      <section className="section research">
        <div className="section-heading reveal">
          <SectionLabel>Publications</SectionLabel>
          <h2>Research &amp; Insights.</h2>
        </div>
        <div className="research-grid">
          {research.map((item) => (
            <article className="research-card neo-card reveal" key={item.title}>
              <div className="research-card-top">
                <span className="status-badge">{item.category}</span>
                <Newspaper size={20} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.abstract}</p>
              <Link className="read-report" href="/contact">
                Read Report <FileText size={16} />
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
