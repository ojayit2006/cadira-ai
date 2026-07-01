"use client";

import Link from "next/link";
import {
  ArrowRight,
  LineChart,
  Newspaper,
  Mic,
  BarChart3,
  Gauge,
  ShieldCheck,
  Radar,
  Eye,
  Target,
} from "lucide-react";
import { SectionLabel } from "@/components/ui";
import { useReveal } from "@/lib/useReveal";

const offerings = [
  {
    title: "Market Intelligence",
    copy: "Structured monitoring of market movements, positioning, and sentiment across the sectors you operate in.",
    icon: LineChart,
  },
  {
    title: "Industry Research",
    copy: "Sector-level research covering structural shifts, demand signals, and competitive dynamics.",
    icon: Newspaper,
  },
  {
    title: "Earnings Call Analysis",
    copy: "Systematic extraction of signal from earnings transcripts and management commentary.",
    icon: Mic,
  },
  {
    title: "Quantitative Analytics",
    copy: "Statistical and model-driven analysis built on structured and alternative data sets.",
    icon: BarChart3,
  },
  {
    title: "Economic Dashboards",
    copy: "Live dashboards tracking the macroeconomic indicators that matter to your decisions.",
    icon: Gauge,
  },
  {
    title: "Risk Monitoring",
    copy: "Ongoing surveillance of exposure, volatility, and early instability signals.",
    icon: ShieldCheck,
  },
  {
    title: "Alternative Data Analysis",
    copy: "Non-traditional data sources modeled into usable signal for strategic decisions.",
    icon: Radar,
  },
  {
    title: "Competitive Intelligence",
    copy: "Structured tracking of competitor positioning, moves, and market share shifts.",
    icon: Eye,
  },
  {
    title: "Decision Support Systems",
    copy: "Interfaces that bring research, models, and live data together at the point of decision.",
    icon: Target,
  },
];

export default function StrategicIntelligencePage() {
  useReveal();

  return (
    <>
      <section className="page-hero reveal">
        <SectionLabel>Financial &amp; Strategic Intelligence</SectionLabel>
        <h1>Institutional-grade quantitative research and AI-powered market intelligence.</h1>
        <p className="page-hero-copy">
          Cadira AI builds the analytical frameworks and decision infrastructure that let organizations
          understand markets, monitor risk, and act on institutional-quality intelligence.
        </p>
        <Link className="btn btn-primary btn-large neo-btn" href="/contact" style={{ marginTop: "2rem" }}>
          Explore Intelligence <ArrowRight size={22} />
        </Link>
      </section>

      <section className="section">
        <div className="section-heading reveal">
          <SectionLabel>What We Deliver</SectionLabel>
          <h2>Decision intelligence, end to end.</h2>
        </div>
        <div className="offering-grid">
          {offerings.map(({ title, copy, icon: Icon }) => (
            <article className="offering-card neo-card reveal" key={title}>
              <Icon size={30} strokeWidth={1.8} />
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
