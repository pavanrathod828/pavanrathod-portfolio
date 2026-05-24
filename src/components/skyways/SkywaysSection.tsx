"use client";

import { useRef } from "react";
import { useSectionReveal } from "@/lib/useSectionReveal";

export default function SkywaysSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  useSectionReveal(sectionRef);

  return (
    <section
      id="skyways"
      ref={sectionRef}
      aria-labelledby="skyways-heading"
      className="skyways-strip"
    >
      <p className="skyways-strip-eyebrow" data-reveal>
        PROJECT 03 — SHIPPED
      </p>

      <div className="skyways-strip-content" data-reveal>
        <h2 id="skyways-heading" className="skyways-strip-headline">
          <em>Skyways</em>
        </h2>
        <p className="skyways-strip-blurb">
          A booking the hotel actually keeps.
        </p>
      </div>

      <a
        href="https://skyways-hotel.vercel.app"
        target="_blank"
        rel="noopener noreferrer"
        className="skyways-strip-link"
        data-reveal
      >
        Live site →
      </a>
    </section>
  );
}
