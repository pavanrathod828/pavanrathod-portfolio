"use client";

import { useRef } from "react";
import { useSectionReveal } from "@/lib/useSectionReveal";

export default function HypeOnSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  useSectionReveal(sectionRef);

  return (
    <section
      id="hypeon"
      ref={sectionRef}
      aria-labelledby="hypeon-heading"
      className="hypeon-section"
    >
      <p className="hypeon-eyebrow" data-reveal>
        <span>PROJECT 01 — CASE STUDY</span>
      </p>

      <h2 id="hypeon-heading" className="hypeon-headline" data-reveal>
        HypeOn AI — <em>Software Engineer Intern</em>
      </h2>

      <p className="hypeon-lede" data-reveal>
        As Software Engineer Intern, I work on the Python and Flask backend
        that powers{" "}
        <a
          href="https://hypeon.ai"
          target="_blank"
          rel="noopener noreferrer"
        >
          HypeOn
        </a>
        &apos;s products. A deeper writeup of one system is in progress — see
        the case study link below.
      </p>

      <a href="/work/hypeon" className="hypeon-cta" data-reveal>
        Read the case study →
      </a>
    </section>
  );
}
