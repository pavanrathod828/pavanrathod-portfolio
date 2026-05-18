"use client";

import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { useSectionReveal } from "@/lib/useSectionReveal";

export default function LbtSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  useSectionReveal(sectionRef);

  return (
    <section
      id="lbt"
      ref={sectionRef}
      aria-labelledby="lbt-heading"
      className="project-section"
    >
      <div className="project-meta" aria-hidden="true" data-reveal>
        <span>WORK</span>
        <span className="project-meta-divider">/</span>
        <span>PROJECT 03</span>
      </div>

      <p className="project-spec" data-reveal>
        ENGR 350 · TRANSIT PRIVACY ETHICS · LIVE
      </p>

      <h2 id="lbt-heading" className="project-heading" data-reveal>
        What it costs to ride <em>anonymously</em>.
      </h2>

      <div className="project-body">
        <p data-reveal>
          An ENGR 350 ethics assignment that turned into a sharper question:
          do Long Beach Transit and the regional TAP fare system handle rider
          data ethically — especially for the low-income riders most dependent
          on transit? The finding was a fork in the road. Cash or an
          unregistered card buys near-anonymity at the same base fare, but the
          discount programs low-income riders rely on — the LIFE subsidy, the
          GoPass student fare — require a registered, identity-linked account.
        </p>
        <p data-reveal>
          The decision was to make the argument, not just write it. LBT became
          a designed, long-form scrollable presentation — dark editorial
          layout, built-in timer, running privacy ticker, QR codes generated
          to match the page — so the ethics, design, and writing carried
          equal weight. It was built, polished, and delivered in class, and
          closes on four concrete fixes: separate eligibility verification
          from the fare card, cut retention to the two-year GoPass standard,
          publish the vendor list, and offer multilingual privacy summaries.
        </p>
      </div>

      <p className="project-punchline" data-reveal>
        Anonymity shouldn&apos;t be something only the full-fare rider can
        afford.
      </p>

      <a
        href="https://pavanrathodcs.github.io/lbt-rider-data"
        target="_blank"
        rel="noopener noreferrer"
        className="project-link"
        data-reveal
      >
        <span>Explore the live project</span>
        <ArrowUpRight className="project-link-icon" aria-hidden="true" />
      </a>
    </section>
  );
}
