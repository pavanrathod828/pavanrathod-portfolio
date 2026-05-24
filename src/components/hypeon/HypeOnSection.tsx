"use client";

import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { useSectionReveal } from "@/lib/useSectionReveal";

export default function HypeOnSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  useSectionReveal(sectionRef);

  return (
    <section
      id="hypeon"
      ref={sectionRef}
      aria-labelledby="hypeon-heading"
      className="project-section"
    >
      <div className="project-meta" aria-hidden="true" data-reveal>
        <span>WORK</span>
        <span className="project-meta-divider">/</span>
        <span>PROJECT 01</span>
      </div>

      <p className="project-spec" data-reveal>
        ACTIVE ROLE · CASE STUDY IN PROGRESS
      </p>

      <h2 id="hypeon-heading" className="project-heading" data-reveal>
        HypeOn AI — <em>Software Engineer Intern</em>
      </h2>

      <div className="project-body">
        <p data-reveal>
          <a
            href="https://hypeon.ai"
            target="_blank"
            rel="noopener noreferrer"
          >
            HypeOn AI
          </a>{" "}
          is a pre-seed, bootstrapped startup building an AI Copilot for D2C
          brands. Four product surfaces — Ad Intelligence, ROAS Attribution,
          Review Intelligence, and GEO Demand Mapping — give operators a
          single view of what&apos;s working across their paid, organic, and
          review channels. Backed by Google Cloud, OpenAI, AWS, and Nvidia.
          Growing EU customer base.
        </p>
        <p data-reveal>
          As Software Engineer Intern, I work on the Python and Flask backend
          that powers HypeOn&apos;s products. A deeper writeup of one system
          is in progress — see the case study link below.
        </p>
      </div>

      <div className="now-strip">
        <p className="now-strip-line" data-reveal>
          <span className="now-strip-label">STACK</span>
          {" · "}PYTHON{" · "}FLASK{" · "}REST APIs{" · "}SQL
        </p>
      </div>

      <a href="/work/hypeon" className="project-link" data-reveal>
        <span>Read the case study</span>
        <ArrowUpRight className="project-link-icon" aria-hidden="true" />
      </a>
    </section>
  );
}
