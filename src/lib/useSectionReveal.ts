"use client";

import { useEffect, useLayoutEffect, type RefObject } from "react";
import { animate } from "motion/react";

const useIsoLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

const REVEAL_EASE: [number, number, number, number] = [0.165, 0.84, 0.44, 1];
const REVEAL_DURATION = 0.7;
const STAGGER_STEP = 0.08;

/**
 * SSR-safe enter-once reveal for section children.
 *
 * Renders plain HTML (visible by default — set in CSS). After mount, gates on
 * matchMedia('(min-width: 1024px) and (prefers-reduced-motion: no-preference)').
 * If the gate passes, the hook hides marked descendants synchronously before
 * paint, then animates them in via motion's imperative `animate()` once the
 * section enters the viewport. Below 1024px or under reduced-motion, the hook
 * returns early — content stays at its CSS-default visible state.
 *
 * Pass a ref to the section element. Children to reveal opt in with a
 * `data-reveal` attribute (default selector). Children animate with an 80ms
 * stagger in DOM order.
 */
export function useSectionReveal(
  sectionRef: RefObject<HTMLElement | null>,
  selector: string = "[data-reveal]"
): void {
  useIsoLayoutEffect(() => {
    if (typeof window === "undefined") return;

    const mm = window.matchMedia(
      "(min-width: 1024px) and (prefers-reduced-motion: no-preference)"
    );
    if (!mm.matches) return;

    const section = sectionRef.current;
    if (!section) return;

    const elements = Array.from(
      section.querySelectorAll<HTMLElement>(selector)
    );
    if (elements.length === 0) return;

    // Hide synchronously before browser paint
    elements.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(20px)";
      el.style.willChange = "opacity, transform";
    });

    const obs = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry || !entry.isIntersecting) return;
        elements.forEach((el, i) => {
          animate(
            el,
            { opacity: 1, y: 0 },
            {
              duration: REVEAL_DURATION,
              ease: REVEAL_EASE,
              delay: i * STAGGER_STEP,
            }
          ).then(() => {
            el.style.willChange = "auto";
          });
        });
        obs.disconnect();
      },
      { rootMargin: "-80px" }
    );
    obs.observe(section);

    return () => obs.disconnect();
  }, [sectionRef, selector]);
}
