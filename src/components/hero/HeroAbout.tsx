"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HeroAbout() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const headerRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
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
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="who"
      ref={sectionRef}
      aria-labelledby="about-heading"
      className="about-section"
    >
      <div className="about-meta" aria-hidden="true">
        <span>ABOUT</span>
        <span className="about-meta-divider">/</span>
        <span>NOTE 01</span>
      </div>

      <h2 id="about-heading" ref={headerRef} className="about-heading">
        About
      </h2>

      <div className="about-body">
        <p>
          Some of the best lessons in software come from watching the wrong
          audience try to use it. The relative who screenshots every screen
          &ldquo;in case.&rdquo; The shop owner running operations from a phone
          while the dashboard was clearly designed on a 27-inch monitor. The
          student finishing registration at 11:58 PM and giving up because the
          page rendered three seconds late.
        </p>
        <p>
          Most software gets built for the room where it was demoed. The work
          that lasts pays attention to whoever opens it on a Tuesday morning,
          alone, with no one to ask.
        </p>
        <p>Most of building it is removing things that get in the way.</p>
      </div>
    </section>
  );
}
