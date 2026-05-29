"use client";

import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  Check,
  Code2,
  DatabaseZap,
  Mail,
  MapPin,
  Menu,
  MousePointer2,
  Send,
  Sparkles,
  Workflow,
  X,
  Zap,
} from "lucide-react";

const navItems = [
  ["About", "about"],
  ["Services", "services"],
  ["Process", "process"],
  ["Clients", "clients"],
  ["Contact", "contact"],
];

const services = [
  {
    title: "AI Software Development",
    copy: "Custom AI systems, internal tools, and automation products built around your operations.",
    icon: Code2,
  },
  {
    title: "Data Intelligence",
    copy: "Structured and unstructured data analysis that turns noise into decisions your team can use.",
    icon: DatabaseZap,
  },
  {
    title: "Workflow Automation",
    copy: "AI-powered process redesign that removes repetitive work and gives time back to operators.",
    icon: Workflow,
  },
  {
    title: "Conversion Systems",
    copy: "Customer journey optimization using behavioral data, funnel logic, and intelligent triggers.",
    icon: MousePointer2,
  },
  {
    title: "Lead Intelligence",
    copy: "Data extraction, enrichment, and ranking systems for sharper acquisition and faster follow-up.",
    icon: Sparkles,
  },
];

const process = [
  ["Understand", "Map the operation, pressure points, data quality, and the exact outcome worth building for."],
  ["Build", "Prototype the AI system with tight loops, measurable behavior, and practical integrations."],
  ["Deploy", "Ship into the real workflow, connect the stack, train the team, and remove friction."],
  ["Scale", "Monitor usage, tune performance, and expand the system as the business grows."],
];

const reasons = [
  "Fast execution",
  "AI-first architecture",
  "Custom-built systems",
  "Scalable infrastructure",
];

const metrics = [
  ["5+", "AI Solutions Delivered"],
  ["2+", "Clients Served"],
  ["100%", "Custom Architecture"],
  ["10x", "Productivity Potential"],
];

function Logo() {
  return (
    <a className="logo" href="#hero" aria-label="Cadira AI home">
      <span className="logo-mark" aria-hidden="true">
        C
      </span>
      <span>Cadira AI</span>
    </a>
  );
}

function Marquee({ children, reverse = false, label }) {
  return (
    <div className="marquee" aria-label={label}>
      <div className={`marquee-track ${reverse ? "reverse" : ""}`}>
        <div className="marquee-set">{children}</div>
        <div className="marquee-set" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}

function SectionLabel({ children }) {
  return <p className="section-label">{children}</p>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);

  const marqueeStats = useMemo(
    () =>
      metrics.map(([value, label]) => (
        <span className="marquee-item" key={label}>
          <strong>{value}</strong>
          <span>{label}</span>
        </span>
      )),
    []
  );

  useEffect(() => {
    const navbar = document.querySelector(".site-nav");
    const hero = document.querySelector(".hero-lockup");
    const reveals = document.querySelectorAll(".reveal");

    const onScroll = () => {
      const progress = Math.min(window.scrollY / 520, 1);
      document.documentElement.style.setProperty("--hero-scale", `${1 + progress * 0.18}`);
      document.documentElement.style.setProperty("--hero-opacity", `${1 - progress * 0.92}`);
      navbar?.classList.toggle("scrolled", window.scrollY > 24);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -48px 0px" }
    );

    reveals.forEach((node) => observer.observe(node));
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      reveals.forEach((node) => observer.unobserve(node));
      hero?.removeAttribute("style");
    };
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <nav className="site-nav">
        <div className="nav-inner">
          <Logo />
          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            {navItems.map(([label, id]) => (
              <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>
                {label}
              </a>
            ))}
          </div>
          <div className="nav-actions">
            <a className="btn btn-ghost" href="#booking">
              Book Demo
            </a>
            <a className="btn btn-primary" href="#contact">
              Start
            </a>
          </div>
          <button
            className="menu-button"
            type="button"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <main id="main">
        <section className="hero" id="hero">
          <div className="hero-lockup">
            <p className="eyebrow">Intelligent Automation / Data Intelligence / AI Systems</p>
            <h1>
              AI Systems
              <span>For Smarter</span>
              Businesses
            </h1>
            <p className="hero-copy">
              Cadira AI builds sharp, custom automation systems that help businesses move faster,
              decide smarter, and scale with less operational drag.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary btn-large" href="#contact">
                Get Started <ArrowRight size={22} />
              </a>
              <a className="btn btn-outline btn-large" href="#booking">
                Book a Demo <CalendarDays size={22} />
              </a>
            </div>
          </div>
          <div className="hero-number" aria-hidden="true">
            01
          </div>
        </section>

        <Marquee label="Cadira AI capabilities marquee">
          <span>Automate the work</span>
          <span>Decode the data</span>
          <span>Ship the system</span>
          <span>Scale the outcome</span>
        </Marquee>

        <section className="about section" id="about">
          <div className="wide-grid">
            <div className="reveal">
              <SectionLabel>About Us</SectionLabel>
              <h2>Built on intelligence. Driven by outcomes.</h2>
            </div>
            <div className="about-copy reveal">
              <p>
                Cadira AI is an early-stage AI systems company focused on practical automation,
                useful data intelligence, and scalable custom software.
              </p>
              <p>
                We do not sell generic software. We design systems around your actual workflows,
                your constraints, and the business result that needs to move.
              </p>
            </div>
          </div>
          <div className="principle-grid reveal">
            {["AI-first architecture", "Measurable outcomes", "Built to compound"].map((item, index) => (
              <article className="principle-card" key={item}>
                <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <h3>{item}</h3>
              </article>
            ))}
          </div>
        </section>

        <section className="section services" id="services">
          <div className="section-heading reveal">
            <SectionLabel>What We Do</SectionLabel>
            <h2>Systems that replace drag with velocity.</h2>
          </div>
          <div className="service-grid">
            {services.map(({ title, copy, icon: Icon }, index) => (
              <article className="service-card reveal" key={title}>
                <span className="card-number" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <Icon size={34} strokeWidth={1.8} />
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="stats-band" aria-label="Cadira AI metrics">
          <Marquee label="Cadira AI stats marquee" reverse>
            {marqueeStats}
          </Marquee>
        </section>

        <section className="section process" id="process">
          <div className="section-heading reveal">
            <SectionLabel>How We Work</SectionLabel>
            <h2>Clear process. Loud results.</h2>
          </div>
          <div className="process-stack">
            {process.map(([title, copy], index) => (
              <article className="process-card reveal" key={title}>
                <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section why" id="why">
          <div className="why-panel reveal">
            <div>
              <SectionLabel>Why Cadira AI</SectionLabel>
              <h2>The competitive edge that compounds.</h2>
            </div>
            <div className="reason-list">
              {reasons.map((reason) => (
                <div className="reason" key={reason}>
                  <Check size={22} />
                  <span>{reason}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="clients" id="clients">
          <SectionLabel>Trusted By</SectionLabel>
          <Marquee label="Client names marquee">
            <span>ApexLink AI</span>
            <span>FylDrop</span>
            <span>Forward-thinking businesses</span>
            <span>Automation-led teams</span>
          </Marquee>
        </section>

        <section className="section booking" id="booking">
          <div className="booking-copy reveal">
            <SectionLabel>Book a Session</SectionLabel>
            <h2>Ready to build something intelligent?</h2>
            <p>
              Schedule a 30-minute discovery call. We will map your operation, identify automation
              opportunities, and outline a path forward.
            </p>
            <a className="btn btn-primary btn-large" href="https://calendly.com/ojayittelang/30min" target="_blank">
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
            <SectionLabel>Get in Touch</SectionLabel>
            <h2>Let's talk about your business.</h2>
            <p>
              Have a specific project in mind or want to explore what AI can do for your operations?
              Send us a message.
            </p>
            <a href="mailto:ojayittelang@gmail.com">
              <Mail size={22} /> ojayittelang@gmail.com
            </a>
            <span>
              <MapPin size={22} /> Mumbai
            </span>
          </div>
          <form className="contact-form reveal" onSubmit={handleSubmit}>
            <label htmlFor="name">Your Name</label>
            <input id="name" name="name" type="text" placeholder="John Smith" required />
            <label htmlFor="email">Email Address</label>
            <input id="email" name="email" type="email" placeholder="john@company.com" required />
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Tell us what you are trying to solve" required />
            <button className="btn btn-primary btn-large" type="submit" disabled={sent}>
              {sent ? "Message Ready" : "Send Message"} <Send size={22} />
            </button>
          </form>
        </section>
      </main>

      <footer>
        <div className="footer-top">
          <Logo />
          <p>AI systems for smarter businesses. Built custom. Built sharp. Built to scale.</p>
        </div>
        <div className="footer-bottom">
          <span>2026 Cadira AI. All rights reserved.</span>
          <span>Founder: Ojayit Telang / Co-Founder: Gurjeev Kohli</span>
        </div>
      </footer>

      <a className="float-demo" href="#booking">
        <Zap size={18} /> Book Demo
      </a>
    </>
  );
}
