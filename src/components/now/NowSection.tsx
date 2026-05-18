"use client";

import { useRef } from "react";
import { useSectionReveal } from "@/lib/useSectionReveal";

export default function NowSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  useSectionReveal(sectionRef);

  return (
    <section
      id="now"
      ref={sectionRef}
      aria-labelledby="now-heading"
      className="now-section"
    >
      <div className="now-meta" aria-hidden="true" data-reveal>
        <span>NOW</span>
        <span className="now-meta-divider">/</span>
        <span>2026</span>
      </div>

      <p className="now-spec" data-reveal>
        SOFTWARE ENGINEER INTERN · SAN FRANCISCO
      </p>

      <h2 id="now-heading" className="now-heading" data-reveal>
        Currently at <em>HypeOn</em>.
      </h2>

      <p className="now-body" data-reveal>
        HypeOn is an AI-powered e-commerce intelligence platform in San
        Francisco — it helps direct-to-consumer brands work out what to sell
        and which ad channels are actually paying off. I&apos;m on the
        engineering team there as a Software Engineer Intern, building and
        testing features on the product, with real users on the other end of
        every change.
      </p>

      <p className="now-punchline" data-reveal>
        No more localhost. Real users now.
      </p>

      <div className="now-strip">
        <p className="now-strip-line" data-reveal>
          <strong className="now-strip-label">STACK</strong> · TYPESCRIPT ·
          NEXT.JS · REACT · PYTHON · FLASK · REST APIs · AWS
        </p>
        <p className="now-strip-line" data-reveal>
          <strong className="now-strip-label">CREDENTIALS</strong> · CSULB
          PRESIDENT&apos;S HONOR LIST · CS + FINANCE
        </p>
      </div>
    </section>
  );
}
