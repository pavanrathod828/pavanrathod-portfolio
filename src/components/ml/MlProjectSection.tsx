"use client";

// PLACEHOLDER section — replace with real project links + metrics
// when the repo ships (PORTFOLIO_PLAN.md §6 Week 4).

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
      className="project-section"
    >
      <div className="project-meta" aria-hidden="true" data-reveal>
        <span>WORK</span>
        <span className="project-meta-divider">/</span>
        <span>PROJECT 02</span>
      </div>

      <p className="project-spec" data-reveal>
        BUILDING — REPO + WRITEUP COMING
      </p>

      <h2
        id="ml-project-heading"
        className="project-heading"
        data-reveal
      >
        Retrieval over <em>product reviews</em> (RAG + evals)
      </h2>

      <div className="project-body">
        <p data-reveal>
          D2C operators read thousands of customer reviews to find
          product-quality patterns, recurring complaints, and language that
          converts. The unsolved part isn&apos;t summarization — it&apos;s
          retrieval that survives evaluation: can the system pull the right
          five reviews when a user asks &ldquo;what do shoppers say about
          sizing on the X model?&rdquo;, and can we prove it?
        </p>
        <p data-reveal>
          A small, public retrieval system over an open product-review
          corpus, scored against an eval harness written before any retriever
          code lands. Goal: ship the smallest defensible version —
          embeddings, retriever, evaluator, writeup. Code and teardown will
          land on GitHub when the first eval pass clears its baseline.
        </p>
      </div>

      <div className="now-strip">
        <p className="now-strip-line" data-reveal>
          <span className="now-strip-label">STACK</span>
          {" · "}PYTHON{" · "}EMBEDDINGS{" · "}EVALS{" · "}RETRIEVAL
        </p>
      </div>

      <p className="project-spec" data-reveal>
        GITHUB REPO COMING SOON
      </p>
    </section>
  );
}
