"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useIsoLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

const HEADLINE_LINE_1 = ["Software", "for", "the", "people"];
const HEADLINE_LINE_2 = ["who", "actually", "use", "it."];
const HEADLINE_TEXT = "Software for the people who actually use it.";

export default function Hero() {
  const stageRef = useRef<HTMLElement>(null);

  useIsoLayoutEffect(() => {
    if (typeof window === "undefined") return;

    const mm = window.matchMedia(
      "(min-width: 1024px) and (prefers-reduced-motion: no-preference)"
    );

    const wordInnersAtMount = document.querySelectorAll(".word-inner");

    console.log("[Hero] mount", {
      matchMedia: mm.matches,
      width: window.innerWidth,
      reducedMotion: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
      wordInnerCount: wordInnersAtMount.length,
      heroStage: !!document.getElementById("hero-stage"),
      who: !!document.getElementById("who"),
    });

    if (!mm.matches) {
      console.log("[Hero] matchMedia gate failed — skipping JS animation, CSS fallback handles it");
      return;
    }

    if (wordInnersAtMount.length === 0) {
      console.error("[Hero] no .word-inner elements found in DOM — animation cannot run");
      return;
    }

    const ctx = gsap.context(() => {
      try {
        // Word reveal first — must not be blocked by any ScrollTrigger issue downstream
        gsap.set(".word-inner", { yPercent: 110 });
        gsap.fromTo(
          ".word-inner",
          { yPercent: 110 },
          {
            yPercent: 0,
            duration: 0.9,
            stagger: 0.06,
            ease: "power3.out",
            delay: 0.2,
            onStart: () => console.log("[Hero] word-reveal tween started"),
            onComplete: () => console.log("[Hero] word-reveal tween complete"),
          }
        );

        // Then the scrub timeline
        gsap
          .timeline({
            scrollTrigger: {
              trigger: "#hero-stage",
              start: "top top",
              end: "bottom bottom",
              scrub: 1,
              pin: "#hero-pin",
              pinSpacing: false,
            },
          })
          .to(
            "#hero-content",
            { opacity: 0, y: -50, filter: "blur(6px)", ease: "none" },
            0
          )
          .to("#hero-bg", { scale: 1.12, ease: "none" }, 0)
          .from("#who", { y: 100, opacity: 0, ease: "none" }, 0);

        ScrollTrigger.refresh();
        console.log("[Hero] all animations registered");
      } catch (err) {
        console.error("[Hero] error during animation setup:", err);
        gsap.set(".word-inner", { yPercent: 0 });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="hero-stage" ref={stageRef} className="relative h-[150vh]">
      <div id="hero-pin" className="h-screen w-full overflow-hidden">
        <div
          id="hero-bg"
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% 40%, rgba(42,168,138,0.04), transparent 70%)",
            transformOrigin: "center center",
            willChange: "transform",
          }}
          aria-hidden="true"
        />
        <div
          id="hero-content"
          className="relative z-10 flex h-full flex-col justify-center px-6 md:px-12"
          style={{ willChange: "opacity, transform, filter" }}
        >
          <span className="eyebrow mb-8 md:mb-12">CS STUDENT / CSULB &apos;28</span>
          <h1 className="hero-headline" aria-label={HEADLINE_TEXT}>
            <span className="headline-line" aria-hidden="true">
              {HEADLINE_LINE_1.map((w, i) => (
                <span key={`l1-${i}`} className="word">
                  <span className="word-inner">{w}</span>
                </span>
              ))}
            </span>
            <span className="headline-line" aria-hidden="true">
              {HEADLINE_LINE_2.map((w, i) => (
                <span key={`l2-${i}`} className="word">
                  <span className="word-inner">{w}</span>
                </span>
              ))}
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
}
