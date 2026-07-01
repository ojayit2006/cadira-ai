"use client";

import { Quote } from "lucide-react";
import { SectionLabel } from "@/components/ui";
import { useReveal } from "@/lib/useReveal";

const testimonials = [
  {
    initials: "SP",
    name: "Saaheer Purav",
    title: "Founder & CEO, ApexLink Digital",
    quote:
      "Cadira AI reached out to us at a point when I genuinely didn't know how we were going to keep the business moving. Our systems were breaking under their own weight, we had already burned through a budget we couldn't really afford, and I was running out of options and confidence. Ojayit and his team never once made me feel like a problem to be managed. They listened first, priced the work fairly instead of taking advantage of how exposed we were, and then delivered exactly when they said they would — no delays, no surprises. There are moments in a founder's life you don't forget, and the week Cadira AI got our systems working again is one of mine. I trust very few people with our operations. I trust them completely.",
  },
  {
    initials: "AG",
    name: "Abhisaar Gupta",
    title: "Co-Founder, FylDrop",
    quote:
      "The research frameworks Cadira AI built for us changed how our strategy team makes decisions. What used to be scattered analysis across spreadsheets is now a single, defensible view of the market we can act on quickly. It reads like something built by an in-house quant desk, not an external partner.",
  },
];

export default function TestimonialsPage() {
  useReveal();

  return (
    <>
      <section className="page-hero reveal">
        <SectionLabel>Testimonials</SectionLabel>
        <h1>What our clients say.</h1>
        <p className="page-hero-copy">
          Cadira AI is built on relationships with the people we serve. Here is some of what they have
          told us.
        </p>
      </section>

      <section className="section section-tight">
        <div className="testimonial-grid">
          {testimonials.map(({ initials, name, title, quote }) => (
            <article className="testimonial-card neo-card reveal" key={name}>
              <Quote size={28} strokeWidth={1.8} />
              <blockquote>{quote}</blockquote>
              <div className="testimonial-attribution">
                <div className="team-avatar" aria-hidden="true">
                  {initials}
                </div>
                <div>
                  <strong>{name}</strong>
                  <span>{title}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
