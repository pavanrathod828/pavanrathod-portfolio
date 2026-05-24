"use client";

// TODO(week-4): replace stub with real project links + metrics

import { useRef } from "react";
import type { ReactNode } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { useSectionReveal } from "@/lib/useSectionReveal";

interface MlProjectSectionProps {
  codeBlock?: ReactNode;
}

export default function MlProjectSection({ codeBlock }: MlProjectSectionProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const visualRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(visualRef, { once: true, amount: 0.3 });
  const reduce = useReducedMotion();
  const active = reduce || inView;

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

      {codeBlock && (
        <motion.div
          ref={visualRef}
          className="ml-code-wrap"
          initial={reduce ? false : { opacity: 0, y: 8 }}
          animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
          transition={reduce ? { duration: 0 } : { duration: 0.5, ease: "easeOut" as const }}
        >
          {codeBlock}
        </motion.div>
      )}

      <a href="#" className="ml-link" data-reveal>
        Repo →
      </a>
    </section>
  );
}
