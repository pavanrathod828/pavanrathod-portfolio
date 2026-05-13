"use client";

import { Blocks, BrainCircuit, Layers3 } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { siteData } from "@/data/site";
import { SectionBadge } from "@/components/ui/SectionBadge";

const icons = [Layers3, Blocks, BrainCircuit];

export function AboutSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="about" className="relative px-5 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.76fr_1fr] lg:gap-16">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <SectionBadge>About Preview</SectionBadge>
          <h2 className="mt-5 text-3xl font-semibold leading-tight text-white sm:text-5xl">
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
            <p key={paragraph} className="text-base leading-8 text-slate-300">
              {paragraph}
            </p>
          ))}

          <div className="grid gap-3 sm:grid-cols-3">
            {siteData.aboutPreview.focusAreas.map((item, index) => {
              const Icon = icons[index] ?? Layers3;

              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-white/[0.045] p-5 shadow-lg shadow-black/20"
                >
                  <Icon aria-hidden="true" className="size-5 text-cyan-200" />
                  <h3 className="mt-4 text-sm font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{item.description}</p>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
