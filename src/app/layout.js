import { Geist, Geist_Mono } from "next/font/google";
import { Barlow, Barlow_Condensed, Figtree } from "next/font/google";
import "./globals.css";
import { Agentation } from "agentation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-barlow",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  variable: "--font-display",
});

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
});

export const metadata = {
  title: "Jigar Maru | Project Manager & Software Analyst",
  description:
    "Portfolio of Jigar Maru — Project Manager and Software Analyst based in Jamnagar, Gujarat. Experienced in leading high-budget projects, managing cross-functional teams, and delivering on-time results across diverse industries.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          ${barlow.variable}
          ${barlowCondensed.variable}
          ${figtree.variable}
          antialiased
        `}
      >
        {children}
        {process.env.NODE_ENV === "development" && <Agentation />}
      </body>
    </html>
  );
}
