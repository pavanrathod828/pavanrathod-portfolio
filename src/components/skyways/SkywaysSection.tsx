"use client";

import { useRef } from "react";
import Image from "next/image";
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
      <Image
        src="/skyways-thumb.png"
        alt="Skyways Hotel booking page"
        width={200}
        height={124}
        sizes="(min-width: 768px) 200px, 100vw"
        priority={false}
        className="h-auto w-full self-center rounded-[2px] border border-[color:var(--line)] md:w-[200px]"
      />

      <div className="flex flex-col gap-2" data-reveal>
        <p className="skyways-strip-eyebrow">PROJECT 03 — SHIPPED</p>
        <div className="skyways-strip-content">
          <h2 id="skyways-heading" className="skyways-strip-headline">
            <em>Skyways</em>
          </h2>
          <p className="skyways-strip-blurb">
            A booking the hotel actually keeps.
          </p>
        </div>
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
