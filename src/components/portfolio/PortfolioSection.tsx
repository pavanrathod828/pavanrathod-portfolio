"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useSectionReveal } from "@/lib/useSectionReveal";

export default function PortfolioSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [imageFailed, setImageFailed] = useState(false);

  useSectionReveal(sectionRef);

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      aria-labelledby="portfolio-heading"
      className="project-section"
    >
      <div className="project-meta" aria-hidden="true" data-reveal>
        <span>WORK</span>
        <span className="project-meta-divider">/</span>
        <span>PROJECT 02</span>
      </div>

      <h2
        id="portfolio-heading"
        className="project-heading"
        data-reveal
      >
        The one project a recruiter <em>always</em> opens.
      </h2>

      <div className="project-body">
        <p data-reveal>
          Every other project here is something a recruiter might look at. This
          one they always do — and they read it twice over, as writing and as
          engineering. pavanrathod.com had to serve as the canonical hub, the
          single place a contact lands, while also standing on its own as a
          project worth showing.
        </p>
        <p data-reveal>
          Two calls shaped it. The first was restraint: the homepage surfaces
          three project cards, not every project ever built — recruiters skim,
          and a short list reads as editorial confidence rather than a backlog.
          The second was treating accessibility as a design constraint from the
          first commit — reduced-motion gating, managed focus, a mobile-nav
          focus trap, AA contrast on every section — not a pass bolted on at
          the end. The build itself was AI-paired, but every generated line
          was reviewed before it was committed.
        </p>
        <p data-reveal>
          It shipped. DNS propagated faster than expected, Vercel reported a
          valid configuration and provisioned the certificate on its own, and
          the site went live over HTTPS. The only scare was self-inflicted —
          a stale local DNS cache kept serving the old parked page in one
          browser long after the site was live for everyone else. One cache
          flush, and that was that.
        </p>
      </div>

      <p className="project-punchline" data-reveal>
        A portfolio&apos;s hardest decision is what to leave off — and you&apos;re
        reading its next draft.
      </p>

      <figure className="project-shot" data-reveal>
        {imageFailed ? (
          <div className="project-shot-fallback">
            pavanrathod.com — the live portfolio
          </div>
        ) : (
          <Image
            src="/portfolio/portfolio-live.jpg"
            alt="Screenshot of the live pavanrathod.com portfolio"
            width={1600}
            height={1000}
            sizes="(max-width: 880px) 100vw, 880px"
            className="project-shot-img"
            onError={() => setImageFailed(true)}
          />
        )}
      </figure>

      <a
        href="https://github.com/pavanrathod828/pavanrathod-portfolio"
        target="_blank"
        rel="noopener noreferrer"
        className="project-link"
        data-reveal
      >
        <span>View the source on GitHub</span>
        <ArrowUpRight className="project-link-icon" aria-hidden="true" />
      </a>
    </section>
  );
}
