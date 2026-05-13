import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { siteData } from "@/data/site";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#02040a] text-slate-100">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/55 px-5 py-4 backdrop-blur-xl sm:px-8 lg:px-10">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-5">
          <a
            href="#home"
            className="text-sm font-semibold tracking-[0.24em] text-white uppercase focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
          >
            PR
          </a>
          <div className="hidden items-center gap-1 md:flex">
            {siteData.navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-2 text-xs font-medium uppercase tracking-[0.18em] text-slate-400 transition hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
              >
                {item.label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100 transition hover:border-cyan-200 hover:bg-cyan-300/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
          >
            Contact
          </a>
        </nav>
      </header>

      <main id="main">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ProcessSection />
        <ContactSection />
      </main>

      <footer className="border-t border-white/10 px-5 py-8 text-center text-sm text-slate-500 sm:px-8 lg:px-10">
        <p>{siteData.placeholderNote}</p>
      </footer>
    </div>
  );
}
