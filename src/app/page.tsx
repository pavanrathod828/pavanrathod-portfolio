import { existsSync } from "node:fs";
import path from "node:path";

import Hero from "@/components/hero/Hero";
import HeroAbout from "@/components/hero/HeroAbout";
import NowSection from "@/components/now/NowSection";
import SkywaysSection from "@/components/skyways/SkywaysSection";
import PortfolioSection from "@/components/portfolio/PortfolioSection";
import LbtSection from "@/components/lbt/LbtSection";
import ContactSection from "@/components/contact/ContactSection";
import SiteNav from "@/components/chrome/SiteNav";
import SiteFooter from "@/components/chrome/SiteFooter";

// TODO Phase 8+: rebuild these for dark palette + scrollytelling
// import { AboutSection } from "@/components/sections/AboutSection";
// import { ContactSection as LegacyContactSection } from "@/components/sections/ContactSection";
// import { HeroSection } from "@/components/sections/HeroSection";
// import { ProcessSection } from "@/components/sections/ProcessSection";
// import { ProjectsSection } from "@/components/sections/ProjectsSection";
// import { SkillsSection } from "@/components/sections/SkillsSection";
// import { Header } from "@/components/layout/Header";
// import { Footer } from "@/components/layout/Footer";

// Build-time check: only render Resume links when /public/resume.pdf exists.
// If the file is added later, a re-deploy picks it up with no code change.
const hasResume = existsSync(path.join(process.cwd(), "public", "resume.pdf"));

export default function Home() {
  return (
    <>
      <SiteNav hasResume={hasResume} />

      <main id="main" className="relative">
        <Hero />
        <HeroAbout />
        <NowSection />
        <SkywaysSection />
        <PortfolioSection />
        <LbtSection />
        <ContactSection hasResume={hasResume} />
      </main>

      <SiteFooter hasResume={hasResume} />
    </>
  );
}
