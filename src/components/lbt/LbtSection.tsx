"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useSectionReveal } from "@/lib/useSectionReveal";

export default function LbtSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [imageFailed, setImageFailed] = useState(false);

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

      <h2 id="lbt-heading" className="project-heading" data-reveal>
        What it costs to ride <em>anonymously</em>.
      </h2>

      <div className="project-body">
        <p data-reveal>
          LBT &amp; The Rider&apos;s Data began as an ENGR 350 ethics
          assignment and turned into a question worth more than a paper: do
          Long Beach Transit and the regional TAP fare system handle rider
          data ethically — especially for the low-income riders who depend on
          transit most? The answer was a fork in the road. Paying cash or
          tapping an unregistered card buys near-anonymity at the same base
          fare. But the discount programs low-income riders rely on — the
          LIFE subsidy, the GoPass student fare — require a registered
          account tied to a real identity. Closing that account forfeits the
          benefit, and the vendors handling the data sit behind §31490 with
          little public accountability.
        </p>
        <p data-reveal>
          The decision was to make the argument, not just write it. LBT
          became a designed, long-form scrollable presentation — dark
          editorial layout, a built-in timer, a running privacy ticker, QR
          codes generated to match the page rather than pasted onto it — so
          the ethics, the design, and the writing all carried equal weight.
          It drew on a friend&apos;s parallel research as a reference point,
          but kept its angle deliberately its own.
        </p>
        <p data-reveal>
          It was built, polished, and delivered in class, and it still lives
          at the link below. The argument closes on four concrete fixes:
          separate eligibility verification from the fare card itself, bring
          data retention down to the two-year standard GoPass already meets,
          publish the vendor list, and offer privacy summaries in the
          languages riders actually speak.
        </p>
      </div>

      <p className="project-punchline" data-reveal>
        Anonymity shouldn&apos;t be something only the full-fare rider can
        afford.
      </p>

      <figure className="project-shot" data-reveal>
        {imageFailed ? (
          <div className="project-shot-fallback">
            LBT &amp; The Rider&apos;s Data — the live presentation
          </div>
        ) : (
          <Image
            src="/lbt/lbt-live.jpg"
            alt="Screenshot of the LBT & The Rider's Data live presentation"
            width={1600}
            height={1000}
            sizes="(max-width: 880px) 100vw, 880px"
            className="project-shot-img"
            onError={() => setImageFailed(true)}
          />
        )}
      </figure>

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
