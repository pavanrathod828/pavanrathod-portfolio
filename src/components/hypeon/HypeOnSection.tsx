"use client";

import { useRef } from "react";
import type { ReactNode } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { useSectionReveal } from "@/lib/useSectionReveal";

interface HypeOnSectionProps {
  codeBlock?: ReactNode;
}

export default function HypeOnSection({ codeBlock }: HypeOnSectionProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const visualRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(visualRef, { once: true, amount: 0.3 });
  const reduce = useReducedMotion();
  const active = reduce || inView;

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

      {codeBlock && (
        <motion.div
          ref={visualRef}
          className="hypeon-code-wrap"
          initial={reduce ? false : { opacity: 0, y: 8 }}
          animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
          transition={reduce ? { duration: 0 } : { duration: 0.5, ease: "easeOut" as const }}
        >
          {codeBlock}
        </motion.div>
      )}

      <a href="/work/hypeon" className="hypeon-cta" data-reveal>
        Read the case study →
      </a>
    </section>
  );
}
