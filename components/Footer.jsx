import { Logo } from "./Nav";

export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <Logo />
        <p>Enterprise AI engineering and quantitative intelligence, built for institutional decisions.</p>
      </div>
      <div className="footer-bottom">
        <span>2026 Cadira AI. All rights reserved.</span>
        <span>Founder: Ojayit Telang / Co-Founder: Gurjeev Kohli</span>
      </div>
    </footer>
  );
}
