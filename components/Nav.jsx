"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navItems = [
  ["Home", "/"],
  ["AI Solutions", "/ai-solutions"],
  ["Strategic Intelligence", "/strategic-intelligence"],
  ["Research", "/research"],
  ["Testimonials", "/testimonials"],
  ["About", "/about"],
  ["Careers", "/careers"],
  ["Contact", "/contact"],
];

export function Logo() {
  return (
    <Link className="logo" href="/" aria-label="Cadira AI home">
      <span className="logo-mark" aria-hidden="true">
        C
      </span>
      <span>Cadira AI</span>
    </Link>
  );
}

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const navbar = document.querySelector(".site-nav");
    const onScroll = () => navbar?.classList.toggle("scrolled", window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <nav className="site-nav">
      <div className="nav-inner">
        <Logo />
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          {navItems.map(([label, href]) => (
            <Link key={href} href={href} className={pathname === href ? "active" : ""}>
              {label}
            </Link>
          ))}
        </div>
        <div className="nav-actions">
          <Link className="btn btn-ghost neo-btn" href="/contact">
            Book Demo
          </Link>
          <Link className="btn btn-primary neo-btn" href="/contact">
            Start a Project
          </Link>
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
  );
}
