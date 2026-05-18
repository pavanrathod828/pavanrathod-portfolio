import Hero from "@/components/hero/Hero";
import HeroAbout from "@/components/hero/HeroAbout";
import SkywaysSection from "@/components/skyways/SkywaysSection";

// TODO Phase 4+: rebuild these for dark palette + scrollytelling
// import { AboutSection } from "@/components/sections/AboutSection";
// import { ContactSection } from "@/components/sections/ContactSection";
// import { HeroSection } from "@/components/sections/HeroSection";
// import { ProcessSection } from "@/components/sections/ProcessSection";
// import { ProjectsSection } from "@/components/sections/ProjectsSection";
// import { SkillsSection } from "@/components/sections/SkillsSection";
// TODO Phase 5: redesigned top nav + identity pill replace these
// import { Header } from "@/components/layout/Header";
// import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main id="main" className="relative">
      <Hero />
      <HeroAbout />
      <SkywaysSection />

      {/* TODO Phase 5: rebuild Header for dark palette + scrollytelling */}
      {/* <Header /> */}

      {/* TODO Phase 4+: rebuild HeroSection (legacy) for dark palette + scrollytelling */}
      {/* <HeroSection /> */}

      {/* TODO Phase 4+: rebuild AboutSection for dark palette + scrollytelling */}
      {/* <AboutSection /> */}

      {/* TODO Phase 4+: rebuild ProjectsSection for dark palette + scrollytelling */}
      {/* <ProjectsSection /> */}

      {/* TODO Phase 4+: rebuild SkillsSection for dark palette + scrollytelling */}
      {/* <SkillsSection /> */}

      {/* TODO Phase 4+: rebuild ProcessSection for dark palette + scrollytelling */}
      {/* <ProcessSection /> */}

      {/* TODO Phase 4+: rebuild ContactSection for dark palette + scrollytelling */}
      {/* <ContactSection /> */}

      {/* TODO Phase 5: rebuild Footer for dark palette + scrollytelling */}
      {/* <Footer /> */}
    </main>
  );
}
