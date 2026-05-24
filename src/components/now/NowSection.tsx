"use client";

import { useRef } from "react";
import { useSectionReveal } from "@/lib/useSectionReveal";

interface NowSectionProps {
  hasResume: boolean;
}

export default function NowSection({ hasResume }: NowSectionProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  useSectionReveal(sectionRef);

  return (
    <section
      id="now"
      ref={sectionRef}
      aria-labelledby="now-heading"
      className="now-section"
    >
      <p className="now-eyebrow" data-reveal>
        NOW
      </p>

      <h2 id="now-heading" className="now-status" data-reveal>
        Software Engineer Intern at HypeOn AI. Python and Flask backend.
      </h2>

      <div className="now-links" data-reveal>
        <a
          href="https://github.com/pavanrathod828"
          target="_blank"
          rel="noopener noreferrer"
          className="now-link"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/pavanrathod828"
          target="_blank"
          rel="noopener noreferrer"
          className="now-link"
        >
          LinkedIn
        </a>
        {hasResume ? (
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="now-link"
          >
            Resume
          </a>
        ) : (
          <span className="now-link" aria-disabled="true">
            Resume — coming soon
          </span>
        )}
      </div>
    </section>
  );
}
