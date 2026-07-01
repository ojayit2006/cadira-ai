"use client";

import Link from "next/link";
import { ArrowRight, Bot, LineChart, Workflow } from "lucide-react";
import { SectionLabel } from "@/components/ui";
import { useReveal } from "@/lib/useReveal";

const cases = [
  {
    category: "Enterprise AI",
    title: "Agentic Workflow Automation",
    copy: "Deploying autonomous agents to handle multi-step operational workflows, reducing manual handoffs between systems.",
    icon: Bot,
  },
  {
    category: "Enterprise AI",
    title: "Internal Enterprise Copilot",
    copy: "An assistant embedded in internal tools, giving teams direct access to institutional knowledge and documentation.",
    icon: Workflow,
  },
  {
    category: "Strategic Intelligence",
    title: "Market Intelligence Dashboard",
    copy: "A live decision-support dashboard tracking market signals and risk indicators for a leadership team.",
    icon: LineChart,
  },
];

export default function CaseStudiesPage() {
  useReveal();

  return (
    <>
      <section className="page-hero reveal">
        <SectionLabel>Case Studies</SectionLabel>
        <h1>Engagements across enterprise AI and strategic intelligence.</h1>
        <p className="page-hero-copy">
          Cadira AI is an early-stage practice. Below are representative engagement types we take on —
          detailed write-ups are shared directly with prospective partners.
        </p>
      </section>

      <section className="section">
        <div className="case-grid">
          {cases.map(({ category, title, copy, icon: Icon }) => (
            <article className="case-card neo-card reveal" key={title}>
              <span className="status-badge">{category}</span>
              <Icon size={30} strokeWidth={1.8} color="var(--orange)" />
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
        <Link className="btn btn-primary btn-large neo-btn" href="/contact" style={{ marginTop: "3rem" }}>
          Discuss Your Project <ArrowRight size={22} />
        </Link>
      </section>
    </>
  );
}
