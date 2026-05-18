"use client";

import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { useSectionReveal } from "@/lib/useSectionReveal";

export default function PortfolioSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  useSectionReveal(sectionRef);

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      aria-labelledby="portfolio-heading"
      className="project-section"
    >
      <div className="project-meta" aria-hidden="true" data-reveal>
        <span>WORK</span>
        <span className="project-meta-divider">/</span>
        <span>PROJECT 02</span>
      </div>

      <p className="project-spec" data-reveal>
        NEXT.JS 16 · TYPESCRIPT · TAILWIND V4 · WCAG AA
      </p>

      <h2 id="portfolio-heading" className="project-heading" data-reveal>
        The one project a recruiter <em>always</em> opens.
      </h2>

      <div className="project-body">
        <p data-reveal>
          The one project a recruiter always opens — and reads twice, as
          writing and as engineering. pavanrathod.com had to be the canonical
          hub a contact lands on, while standing on its own as a project worth
          showing.
        </p>
        <p data-reveal>
          Two calls shaped it. Restraint — three project cards on the
          homepage, not every project ever built, because a short list reads
          as confidence rather than a backlog. And accessibility as a design
          constraint from the first commit — reduced-motion gating, managed
          focus, a mobile-nav focus trap, AA contrast throughout — not a pass
          bolted on at the end. The build was AI-paired, but every generated
          line was reviewed before commit.
        </p>
      </div>

      <p className="project-punchline" data-reveal>
        A portfolio&apos;s hardest decision is what to leave off — and you&apos;re
        reading its next draft.
      </p>

      <a
        href="https://github.com/pavanrathod828/pavanrathod-portfolio"
        target="_blank"
        rel="noopener noreferrer"
        className="project-link"
        data-reveal
      >
        <span>View the source on GitHub</span>
        <ArrowUpRight className="project-link-icon" aria-hidden="true" />
      </a>
    </section>
  );
}
