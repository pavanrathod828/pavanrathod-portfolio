"use client";

// TODO(week-4): replace stub with real project links + metrics

import { useRef } from "react";
import { useSectionReveal } from "@/lib/useSectionReveal";

export default function MlProjectSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  useSectionReveal(sectionRef);

  return (
    <section
      id="ml-project"
      ref={sectionRef}
      aria-labelledby="ml-project-heading"
      className="ml-section"
    >
      <p className="ml-eyebrow" data-reveal>
        PROJECT 02 — IN PROGRESS
      </p>

      <h2 id="ml-project-heading" className="ml-headline" data-reveal>
        Retrieval over <em>product reviews</em> (RAG + evals)
      </h2>

      <p className="ml-framing" data-reveal>
        A small, public retrieval system over an open product-review corpus,
        scored against an eval harness written before any retriever code lands.
      </p>

      <a href="#" className="ml-link" data-reveal>
        Repo →
      </a>
    </section>
  );
}
