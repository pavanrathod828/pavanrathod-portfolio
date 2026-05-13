import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#faf7f0] text-[#1c1a17]">
      <Header />

      <main id="main">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ProcessSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
