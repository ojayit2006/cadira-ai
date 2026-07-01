"use client";

import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  LineChart,
  Check,
  FileText,
  Newspaper,
  Cpu,
  BarChart3,
} from "lucide-react";
import { SectionLabel } from "@/components/ui";
import { useReveal } from "@/lib/useReveal";

const aiTags = [
  "Agentic AI Systems",
  "Enterprise Copilots",
  "Workflow Automation",
  "RAG Applications",
  "Computer Vision",
  "Voice AI",
  "Data Engineering",
  "AI Integrations",
  "Custom ML Solutions",
];

const intelTags = [
  "Market Intelligence",
  "Industry Research",
  "Earnings Call Analysis",
  "Quantitative Analytics",
  "Economic Dashboards",
  "Risk Monitoring",
  "Alternative Data Analysis",
  "Competitive Intelligence",
  "Decision Support Systems",
];

const enterpriseAI = ["AI Agents", "Automation", "LLM Applications", "RAG", "AI Infrastructure", "Computer Vision", "NLP", "Voice Systems"];

const intelligenceSolutions = [
  "Financial Analytics",
  "Market Intelligence",
  "Risk Intelligence",
  "Executive Dashboards",
  "Economic Monitoring",
  "Research Automation",
  "Competitive Intelligence",
  "Predictive Analytics",
];

const comparison = [
  {
    title: "Traditional AI Agencies",
    result: "Build software.",
  },
  {
    title: "Research Firms",
    result: "Produce insights.",
  },
  {
    title: "Cadira AI",
    result: "Builds intelligent software powered by institutional-grade research.",
    highlight: true,
  },
];

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
];

const process = [
  ["Understand the Problem", "Map the operation, the decision being made, and the outcome that needs to move."],
  ["Collect & Engineer Data", "Assemble structured and unstructured data sources and prepare them for modeling."],
  ["Build AI Models", "Develop the AI systems, agents, and analytical models the problem requires."],
  ["Generate Strategic Intelligence", "Translate model output into research, dashboards, and decision-ready intelligence."],
  ["Deploy & Continuously Improve", "Ship into the real workflow and refine the system as conditions change."],
];

export default function Home() {
  useReveal();

  return (
    <>
      <section className="hero" id="hero">
        <div className="hero-lockup">
          <p className="eyebrow status-badge">Enterprise AI / Decision Intelligence / Quantitative Research</p>
          <h1>
            Build Intelligent Systems.
            <span>Drive Better Decisions.</span>
          </h1>
          <p className="hero-copy">
            Cadira AI develops enterprise AI solutions and quantitative intelligence platforms that help
            organizations automate operations, understand markets, and make faster, data-driven decisions.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-primary btn-large neo-btn" href="/contact">
              Start a Project <ArrowRight size={22} />
            </Link>
            <Link className="btn btn-outline btn-large neo-btn" href="/research">
              Explore Research <ArrowUpRight size={22} />
            </Link>
          </div>
        </div>
      </section>

      <div className="hiring-badge-wrap reveal">
        <Link className="hiring-badge neo-btn" href="/careers">
          We&apos;re Hiring <ArrowRight size={16} />
        </Link>
      </div>

      <section className="section section-tight verticals" id="verticals">
        <div className="section-heading reveal">
          <SectionLabel>What We Do</SectionLabel>
          <h2>Two disciplines. One decision advantage.</h2>
        </div>
        <div className="vertical-grid">
          <article className="vertical-card neo-card reveal">
            <div className="vertical-card-head">
              <h3>AI Solutions</h3>
              <Bot size={36} strokeWidth={1.8} />
            </div>
            <p>Build production-ready AI systems tailored to your business.</p>
            <ul className="vertical-tags">
              {aiTags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
            <Link className="btn btn-primary neo-btn" href="/ai-solutions">
              View Services <ArrowRight size={18} />
            </Link>
          </article>

          <article className="vertical-card neo-card reveal">
            <div className="vertical-card-head">
              <h3>Financial &amp; Strategic Intelligence</h3>
              <LineChart size={36} strokeWidth={1.8} />
            </div>
            <p>
              Institutional-grade quantitative research and AI-powered market intelligence for better
              strategic decisions.
            </p>
            <ul className="vertical-tags">
              {intelTags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
            <Link className="btn btn-primary neo-btn" href="/strategic-intelligence">
              Explore Intelligence <ArrowRight size={18} />
            </Link>
          </article>
        </div>
      </section>

      <section className="section capabilities" id="capabilities">
        <div className="section-heading reveal">
          <SectionLabel>Capabilities</SectionLabel>
          <h2>Capabilities at a glance.</h2>
        </div>
        <div className="services-columns reveal">
          <div>
            <div className="services-category-head">
              <Cpu size={26} strokeWidth={1.8} />
              <h3>Enterprise AI</h3>
            </div>
            <ul className="services-list">
              {enterpriseAI.map((item) => (
                <li className="neo-card" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="services-category-head">
              <BarChart3 size={26} strokeWidth={1.8} />
              <h3>Intelligence Solutions</h3>
            </div>
            <ul className="services-list">
              {intelligenceSolutions.map((item) => (
                <li className="neo-card" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section why" id="why">
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

      <section className="section research" id="research">
        <div className="section-heading reveal">
          <SectionLabel>Research &amp; Insights</SectionLabel>
          <h2>Original research behind every system we build.</h2>
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
              <Link className="read-report" href="/research">
                Read Report <FileText size={16} />
              </Link>
            </article>
          ))}
        </div>
        <Link className="btn btn-outline neo-btn" href="/research" style={{ marginTop: "2rem" }}>
          View All Research <ArrowRight size={18} />
        </Link>
      </section>

      <section className="section" id="featured-research">
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

      <section className="section process" id="process">
        <div className="section-heading reveal">
          <SectionLabel>How We Work</SectionLabel>
          <h2>From Data to Decisions.</h2>
        </div>
        <div className="timeline">
          {process.map(([title, copy], index) => (
            <article className="timeline-step neo-card reveal" key={title}>
              <span className="step-number" aria-hidden="true">
                {index + 1}
              </span>
              <div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about section" id="about">
        <div className="wide-grid">
          <div className="reveal">
            <SectionLabel>About Cadira</SectionLabel>
            <h2>Engineering and research, under one roof.</h2>
          </div>
          <div className="about-copy reveal">
            <p>
              Cadira AI develops intelligent software and quantitative analytics that help organizations
              automate complex workflows, understand markets, and make better strategic decisions.
            </p>
            <p>
              Our work spans enterprise AI, machine learning, financial analytics, and decision
              intelligence — bridging cutting-edge engineering with rigorous research.
            </p>
            <Link className="btn btn-outline neo-btn" href="/about">
              More About Cadira <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section booking" id="booking">
        <div className="booking-copy reveal">
          <SectionLabel>Get Started</SectionLabel>
          <h2>Ready to build your decision advantage?</h2>
          <p>
            Tell us about the system you need to build or the intelligence you need to move faster.
            We will map the path from data to decisions.
          </p>
          <Link className="btn btn-primary btn-large neo-btn" href="/contact">
            Start a Project <ArrowRight size={22} />
          </Link>
        </div>
        <div className="reason-list reveal">
          {["Enterprise AI", "Decision Intelligence", "Quantitative Research", "Institutional Research"].map(
            (reason) => (
              <div className="reason" key={reason}>
                <Check size={22} />
                <span>{reason}</span>
              </div>
            )
          )}
        </div>
      </section>
    </>
  );
}
