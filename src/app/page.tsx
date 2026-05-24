import { existsSync } from "node:fs";
import path from "node:path";

import Hero from "@/components/hero/Hero";
import HeroAbout from "@/components/hero/HeroAbout";
import NowSection from "@/components/now/NowSection";
import HypeOnSection from "@/components/hypeon/HypeOnSection";
import MlProjectSection from "@/components/ml/MlProjectSection";
import SkywaysSection from "@/components/skyways/SkywaysSection";
import ContactSection from "@/components/contact/ContactSection";
import SiteNav from "@/components/chrome/SiteNav";
import SiteFooter from "@/components/chrome/SiteFooter";

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
        <NowSection hasResume={hasResume} />
        <HypeOnSection />
        <MlProjectSection />
        <SkywaysSection />
        <ContactSection hasResume={hasResume} />
      </main>

      <SiteFooter />
    </>
  );
}
