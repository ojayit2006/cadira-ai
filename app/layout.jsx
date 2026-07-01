import { DM_Sans } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { FloatDemo } from "@/components/ui";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm",
  display: "swap",
});

export const metadata = {
  title: "Cadira AI | Enterprise AI & Decision Intelligence",
  description:
    "Cadira AI develops enterprise AI solutions and quantitative intelligence platforms that help organizations automate operations, understand markets, and make faster, data-driven decisions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body>
        <div className="bg-fixed" aria-hidden="true" />
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
        <FloatDemo />
      </body>
    </html>
  );
}
