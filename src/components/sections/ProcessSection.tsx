"use client";

import { ClipboardList, Hammer, Rocket, TestTube } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { siteData } from "@/data/site";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";

const stepIcons = [ClipboardList, Hammer, TestTube, Rocket];

const accents = [
  "bg-[#ebe4d3] text-[#6b5638]",
  "bg-[#ebe4d3] text-[#c4985a]",
];

export function ProcessSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="scroll-mt-24 py-24"
    >
      <Container>
        <div className="rounded-[2rem] bg-[#ebe4d3] p-5 sm:p-8 lg:p-10">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="grid gap-8 lg:grid-cols-[0.72fr_1fr]"
          >
            <div>
              <SectionBadge>{siteData.process.badge}</SectionBadge>
              <h2
                id="process-heading"
                className="mt-5 font-serif text-[clamp(2.25rem,5vw,4rem)] font-normal leading-[1.05] tracking-[-0.015em] text-[#1c1a17]"
              >
                {siteData.process.headline}
              </h2>
            </div>
            <div className="text-base leading-8 text-[#1c1a17]">
              <p>{siteData.process.body}</p>
            </div>
          </motion.div>

          <div className="relative mt-12">
            <div
              aria-hidden="true"
              className="absolute left-[12.5%] right-[12.5%] top-[2.75rem] hidden border-t border-dashed border-[#d9cfb5] opacity-60 md:block"
            />
            <div className="relative grid gap-4 md:grid-cols-4">
              {siteData.process.steps.map((step, index) => {
                const Icon = stepIcons[index] ?? ClipboardList;
                const accent = accents[index % accents.length];

                return (
                  <motion.div
                    key={step.title}
                    initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                    whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.05 }}
                  >
                    <Card className="relative h-full rounded-3xl">
                      <div
                        className={cn(
                          "flex size-11 items-center justify-center rounded-2xl",
                          accent,
                        )}
                      >
                        <Icon aria-hidden="true" className="size-5" />
                      </div>
                      <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#5a544c]">
                        Step {index + 1}
                      </p>
                      <h3 className="mt-2 text-lg font-semibold text-[#1c1a17]">{step.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-[#5a544c]">{step.body}</p>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
