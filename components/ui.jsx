import Link from "next/link";
import { Zap } from "lucide-react";

export function SectionLabel({ children }) {
  return <p className="section-label status-badge">{children}</p>;
}

export function Marquee({ children, reverse = false, label }) {
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

export function FloatDemo() {
  return (
    <Link className="float-demo" href="/contact">
      <Zap size={18} /> Book Demo
    </Link>
  );
}
