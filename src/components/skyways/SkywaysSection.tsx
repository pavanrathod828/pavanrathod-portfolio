"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useSectionReveal } from "@/lib/useSectionReveal";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const useIsoLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default function SkywaysSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const headerRef = useRef<HTMLHeadingElement | null>(null);

  // Enter-once reveals for non-heading targets (SSR-safe, gated inside the hook).
  // The heading is intentionally NOT a data-reveal target — GSAP owns its transform via the scrub below.
  useSectionReveal(sectionRef);

  // GSAP header scrub — unchanged. The 3rd-and-final scrub in the budget.
  useIsoLayoutEffect(() => {
    if (typeof window === "undefined") return;

    const mm = window.matchMedia(
      "(min-width: 1024px) and (prefers-reduced-motion: no-preference)"
    );
    if (!mm.matches) return;

    const section = sectionRef.current;
    const header = headerRef.current;
    if (!section || !header) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        header,
        { yPercent: 0 },
        {
          yPercent: 40,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
            invalidateOnRefresh: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="skyways"
      ref={sectionRef}
      aria-labelledby="skyways-heading"
      className="skyways-section"
    >
      <div className="skyways-meta" aria-hidden="true" data-reveal>
        <span>WORK</span>
        <span className="skyways-meta-divider">/</span>
        <span>PROJECT 01</span>
      </div>

      <p className="skyways-spec" data-reveal>
        MARKETING SITE · DIRECT BOOKING · LIVE
      </p>

      <h2 id="skyways-heading" ref={headerRef} className="skyways-heading">
        <em>Skyways</em>
      </h2>

      <div className="skyways-body">
        <p data-reveal>
          An independent hotel half a mile from LAX, competing against the
          chains and dependent on booking aggregators that took a commission on
          every reservation — with no presence it actually owned.
        </p>
        <p data-reveal>
          The decision was a fast marketing site with one job: turn a search
          into a direct booking, no aggregator in the middle. Most of the work
          was restraint — every section pointed at the booking flow, nothing
          decorative left in the way. The result is a live site the hotel
          owns, honest about what it offers and pointed at one action.
        </p>
      </div>

      <p className="skyways-punchline" data-reveal>
        A booking the hotel actually keeps.
      </p>

      <a
        href="https://skyways-hotel.vercel.app"
        target="_blank"
        rel="noopener noreferrer"
        className="skyways-link"
        data-reveal
      >
        <span>Visit the live site</span>
        <ArrowUpRight className="skyways-link-icon" aria-hidden="true" />
      </a>
    </section>
  );
}
