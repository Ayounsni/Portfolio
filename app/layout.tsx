// app/layout.tsx
import type { Metadata } from "next";
import { inter, jetbrain_mono } from "@/app/fonts";
import "./globals.css";
import { ThemeProvider } from "@/app/ThemeProvider";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { FaHome, FaUser, FaBriefcase, FaCode } from "react-icons/fa";
import StickyIcons from "@/components/sections/StickyIcons";
import Footer from "@/components/sections/Footer";
import { Analytics } from "@vercel/analytics/react"

export const metadata = {
  title: "Snini Ayoub",
  description: "Portfolio personnel de Snini Ayoub",
};

const navItems = [
  {
    name: "Accueil",
    link: "#home",
    icon: <FaHome />,
  },
  {
    name: "Propos",
    link: "#about",
    icon: <FaUser />,
  },
  {
    name: "Project",
    link: "#projects",
    icon: <FaCode />,
  },
  {
    name: "Travail",
    link: "#work",
    icon: <FaBriefcase />,
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="./ayoub.jpg"
        />
        <meta property="og:title" content="Portfolio de Snini Ayoub" />
        <meta
          property="og:description"
          content="Développeur passionné par la création de solutions web innovantes et l'analyse de données."
        />
        <meta property="og:url" content="https://sniniayoub.dev" />
        <meta
          property="og:image"
          content="https://sniniayoub.dev/images/portfolio_preview.png"
        />
        <script dangerouslySetInnerHTML={{
          __html: `
            if (window.location.href === "https://krishnavalliappan.github.io/portfolio-website/") {
              window.location.replace("https://www.krishnakumar.dev");
            }
          `
        }} />
        <meta property="og:type" content="website" />
      </head>
      <body
        className={`${jetbrain_mono.variable} ${inter.variable} font-mono antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <FloatingNav navItems={navItems} />
          <StickyIcons />
          {children}
          <Footer />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
