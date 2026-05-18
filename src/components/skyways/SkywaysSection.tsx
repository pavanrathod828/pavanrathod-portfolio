"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const useIsoLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

const REVEAL_EASE: [number, number, number, number] = [0.165, 0.84, 0.44, 1];
const REVEAL_DURATION = 0.7;

export default function SkywaysSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const headerRef = useRef<HTMLHeadingElement | null>(null);
  const reducedMotion = useReducedMotion();

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

  const fadeIn = reducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-80px" },
        transition: { duration: REVEAL_DURATION, ease: REVEAL_EASE },
      };

  return (
    <section
      id="skyways"
      ref={sectionRef}
      aria-labelledby="skyways-heading"
      className="skyways-section"
    >
      <div className="skyways-meta" aria-hidden="true">
        <span>WORK</span>
        <span className="skyways-meta-divider">/</span>
        <span>PROJECT 01</span>
      </div>

      <motion.p className="skyways-spec" {...fadeIn}>
        MARKETING SITE · DIRECT BOOKING · LIVE
      </motion.p>

      <h2 id="skyways-heading" ref={headerRef} className="skyways-heading">
        <em>Skyways</em>
      </h2>

      <div className="skyways-body">
        <motion.p {...fadeIn}>
          An independent hotel half a mile from LAX, competing against the
          chains and dependent on booking aggregators that took a commission on
          every reservation — with no presence it actually owned.
        </motion.p>
        <motion.p {...fadeIn}>
          The decision was a fast marketing site with one job: turn a search
          into a direct booking, no aggregator in the middle. Most of the work
          was restraint — every section pointed at the booking flow, nothing
          decorative left in the way. The result is a live site the hotel
          owns, honest about what it offers and pointed at one action.
        </motion.p>
      </div>

      <motion.p className="skyways-punchline" {...fadeIn}>
        A booking the hotel actually keeps.
      </motion.p>

      <motion.a
        href="https://skyways-hotel.vercel.app"
        target="_blank"
        rel="noopener noreferrer"
        className="skyways-link"
        {...fadeIn}
      >
        <span>Visit the live site</span>
        <ArrowUpRight className="skyways-link-icon" aria-hidden="true" />
      </motion.a>
    </section>
  );
}
