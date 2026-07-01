"use client";

import { ArrowRight } from "lucide-react";
import { SectionLabel } from "@/components/ui";
import { useReveal } from "@/lib/useReveal";

const team = [
  { initials: "OT", name: "Ojayit Telang", title: "CEO & Founder" },
  { initials: "GK", name: "Gurjeev Kohli", title: "Co-Founder & CFO" },
  { initials: "PS", name: "Prathamesh Sonawane", title: "Director of Marketing & People Operations" },
  { initials: "PR", name: "Pranav Sapkale", title: "Executive Director of Research & Intelligence" },
];

export default function CareersPage() {
  useReveal();

  return (
    <>
      <section className="page-hero reveal">
        <SectionLabel>Careers</SectionLabel>
        <h1>Meet our leadership team.</h1>
        <p className="page-hero-copy">
          The people building Cadira AI — and the team we&apos;re looking to grow alongside them.
        </p>
      </section>

      <section className="section section-tight">
        <div className="team-grid">
          {team.map(({ initials, name, title }) => (
            <article className="team-card neo-card reveal" key={name}>
              <div className="team-avatar" aria-hidden="true">
                {initials}
              </div>
              <h3>{name}</h3>
              <p className="team-title">{title}</p>
            </article>
          ))}
        </div>

        <div className="join-panel neo-card reveal">
          <SectionLabel>We&apos;re Hiring</SectionLabel>
          <h2>We are looking forward to expanding our team.</h2>
          <p>
            Cadira AI is growing, and we are formally accepting applications from individuals who share
            our commitment to rigorous engineering and institutional-quality research. We are
            particularly interested in AI and machine learning engineers, quantitative researchers and
            analysts, full-stack developers comfortable operating across the AI and data stack, and
            operations professionals who can help us scale responsibly. If you take pride in precise,
            well-reasoned work and want to help build both intelligent software and the research behind
            it, we would welcome your application.
          </p>
          <a
            className="btn btn-primary btn-large neo-btn"
            href="https://forms.gle/DK5RQD21J17KVfdY7"
            target="_blank"
            rel="noreferrer"
          >
            Apply Here <ArrowRight size={22} />
          </a>
        </div>
      </section>
    </>
  );
}
