"use client";

import { Blocks, BrainCircuit, Layers3 } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { siteData } from "@/data/site";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/layout/Container";

const icons = [Layers3, Blocks, BrainCircuit];

export function AboutSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative scroll-mt-24 py-24"
    >
      <Container className="grid gap-10 lg:grid-cols-[0.76fr_1fr] lg:gap-16">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <SectionBadge>About Preview</SectionBadge>
          <h2
            id="about-heading"
            className="mt-5 font-serif text-[clamp(2.25rem,5vw,4rem)] font-normal leading-[1.05] tracking-[-0.015em] text-[#1c1a17]"
          >
            A portfolio shell for verified work, polished interaction, and responsible AI use.
          </h2>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 22 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.65, ease: "easeOut", delay: 0.05 }}
          className="space-y-6"
        >
          {siteData.aboutPreview.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-base leading-8 text-[#1c1a17]">
              {paragraph}
            </p>
          ))}

          <div className="grid gap-3 sm:grid-cols-3">
            {siteData.aboutPreview.focusAreas.map((item, index) => {
              const Icon = icons[index] ?? Layers3;

              return (
                <Card key={item.title} className="rounded-3xl">
                  <span className="inline-flex size-9 items-center justify-center rounded-xl bg-[#ebe4d3]">
                    <Icon aria-hidden="true" className="size-5 text-[#6b5638]" />
                  </span>
                  <h3 className="mt-4 text-sm font-semibold text-[#1c1a17]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#5a544c]">{item.description}</p>
                </Card>
              );
            })}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
