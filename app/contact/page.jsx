"use client";

import { useState } from "react";
import { CalendarDays, Mail, MapPin, Send } from "lucide-react";
import { SectionLabel } from "@/components/ui";
import { useReveal } from "@/lib/useReveal";

export default function ContactPage() {
  useReveal();
  const [sent, setSent] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <>
      <section className="page-hero reveal">
        <SectionLabel>Get in Touch</SectionLabel>
        <h1>Let&apos;s talk about your business.</h1>
        <p className="page-hero-copy">
          Have an AI system to build or a market you need to understand better? Send us a message or
          book a discovery call.
        </p>
      </section>

      <section className="section booking" id="booking">
        <div className="booking-copy reveal">
          <SectionLabel>Book a Session</SectionLabel>
          <h2>Ready to build something intelligent?</h2>
          <p>
            Schedule a 30-minute discovery call. We will map your operation, identify automation
            opportunities, and outline a path forward.
          </p>
          <a className="btn btn-primary btn-large neo-btn" href="https://calendly.com/ojayittelang/30min" target="_blank" rel="noreferrer">
            Open Scheduler <CalendarDays size={22} />
          </a>
        </div>
        <div className="calendly-frame reveal">
          <iframe
            src="https://calendly.com/ojayittelang/30min"
            title="Book a Demo with Cadira AI"
            loading="lazy"
          />
        </div>
      </section>

      <section className="section contact" id="contact">
        <div className="contact-copy reveal">
          <SectionLabel>Contact</SectionLabel>
          <h2>Send us a message.</h2>
          <p>
            Have a specific project in mind or want to explore what AI and decision intelligence can do
            for your organization? Send us a message.
          </p>
          <a href="mailto:ojayittelang@gmail.com">
            <Mail size={22} /> ojayittelang@gmail.com
          </a>
          <span>
            <MapPin size={22} /> Mumbai
          </span>
        </div>
        <form className="contact-form neo-card reveal" onSubmit={handleSubmit}>
          <label htmlFor="name">Your Name</label>
          <input id="name" name="name" type="text" placeholder="John Smith" required />
          <label htmlFor="email">Email Address</label>
          <input id="email" name="email" type="email" placeholder="john@company.com" required />
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="Tell us what you are trying to solve" required />
          <button className="btn btn-primary btn-large neo-btn" type="submit" disabled={sent}>
            {sent ? "Message Ready" : "Send Message"} <Send size={22} />
          </button>
        </form>
      </section>
    </>
  );
}
