import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
});

export const metadata = {
  title: "Cadira AI | AI Systems for Smarter Businesses",
  description:
    "Cadira AI builds intelligent automation systems, data intelligence pipelines, and AI-powered tools for modern businesses.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.variable}>{children}</body>
    </html>
  );
}
