import Link from "next/link";
import { Zap } from "lucide-react";

export function SectionLabel({ children }) {
  return <p className="section-label status-badge">{children}</p>;
}

export function FloatDemo() {
  return (
    <Link className="float-demo" href="/contact">
      <Zap size={18} /> Book Demo
    </Link>
  );
}
