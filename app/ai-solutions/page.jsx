"use client";

import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Boxes,
  Workflow,
  FileSearch,
  ScanEye,
  Mic,
  Database,
  Network,
  Brain,
} from "lucide-react";
import { SectionLabel } from "@/components/ui";
import { useReveal } from "@/lib/useReveal";

const offerings = [
  {
    title: "Agentic AI Systems",
    copy: "Autonomous agents that plan, act, and coordinate across tools to complete multi-step work.",
    icon: Bot,
  },
  {
    title: "Enterprise Copilots",
    copy: "Assistants embedded in your internal tools that give operators direct access to institutional knowledge.",
    icon: Boxes,
  },
  {
    title: "Workflow Automation",
    copy: "Process redesign that removes repetitive work and routes decisions to the right system or person.",
    icon: Workflow,
  },
  {
    title: "RAG Applications",
    copy: "Retrieval-augmented systems that ground model output in your proprietary documents and data.",
    icon: FileSearch,
  },
  {
    title: "Computer Vision",
    copy: "Visual inspection, detection, and monitoring systems built for production environments.",
    icon: ScanEye,
  },
  {
    title: "Voice AI",
    copy: "Speech-driven interfaces and voice agents for support, operations, and field workflows.",
    icon: Mic,
  },
  {
    title: "Data Engineering",
    copy: "Pipelines that clean, structure, and move data reliably from source systems to models.",
    icon: Database,
  },
  {
    title: "AI Integrations",
    copy: "Connecting models and agents to the systems your business already runs on.",
    icon: Network,
  },
  {
    title: "Custom ML Solutions",
    copy: "Purpose-built models for prediction, classification, and optimization problems specific to your operation.",
    icon: Brain,
  },
];

export default function AISolutionsPage() {
  useReveal();

  return (
    <>
      <section className="page-hero reveal">
        <SectionLabel>AI Solutions</SectionLabel>
        <h1>Build production-ready AI systems tailored to your business.</h1>
        <p className="page-hero-copy">
          Cadira AI designs and ships enterprise AI systems — from autonomous agents to computer vision
          pipelines — built around your operations, your data, and the outcome that needs to move.
        </p>
        <Link className="btn btn-primary btn-large neo-btn" href="/contact" style={{ marginTop: "2rem" }}>
          Start a Project <ArrowRight size={22} />
        </Link>
      </section>

      <section className="section">
        <div className="section-heading reveal">
          <SectionLabel>What We Build</SectionLabel>
          <h2>Enterprise AI, end to end.</h2>
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
