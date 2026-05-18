"use client";

import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { useSectionReveal } from "@/lib/useSectionReveal";

interface ContactSectionProps {
  hasResume: boolean;
}

export default function ContactSection({ hasResume }: ContactSectionProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  useSectionReveal(sectionRef);

  return (
    <section
      id="contact"
      ref={sectionRef}
      aria-labelledby="contact-heading"
      className="contact-section"
    >
      <div className="contact-meta" aria-hidden="true" data-reveal>
        <span>CONTACT</span>
        <span className="contact-meta-divider">/</span>
        <span>LET&apos;S TALK</span>
      </div>

      <h2 id="contact-heading" className="contact-heading" data-reveal>
        Open to what&apos;s <em>next</em>.
      </h2>

      <p className="contact-body" data-reveal>
        Currently interning through summer 2026 — and open to Summer 2027
        software engineering internships. Best reached by email.
      </p>

      <div className="contact-links" data-reveal>
        <a
          href="mailto:pavanrwork@gmail.com"
          className="contact-link"
        >
          <span>Email</span>
          <ArrowUpRight className="contact-link-icon" aria-hidden="true" />
        </a>
        <a
          href="https://www.linkedin.com/in/pavan-rathod-64b0b7254/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <span>LinkedIn</span>
          <ArrowUpRight className="contact-link-icon" aria-hidden="true" />
        </a>
        <a
          href="https://github.com/pavanrathod828"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <span>GitHub</span>
          <ArrowUpRight className="contact-link-icon" aria-hidden="true" />
        </a>
        {hasResume ? (
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <span>Resume</span>
            <ArrowUpRight className="contact-link-icon" aria-hidden="true" />
          </a>
        ) : (
          <span className="contact-link contact-link--inert" aria-disabled="true">
            Resume — coming soon
          </span>
        )}
      </div>
    </section>
  );
}
