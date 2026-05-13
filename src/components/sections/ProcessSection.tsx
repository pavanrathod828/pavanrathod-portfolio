"use client";

import { CheckCircle2, Code2, ListChecks, Rocket } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { siteData } from "@/data/site";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/layout/Container";

const icons = [ListChecks, Code2, CheckCircle2, Rocket];

export function ProcessSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="py-24"
    >
      <Container>
        <Card className="rounded-[2rem] p-5 shadow-2xl shadow-black/25 sm:p-8 lg:p-10">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="grid gap-8 lg:grid-cols-[0.72fr_1fr]"
          >
            <div>
              <SectionBadge>AI Workflow</SectionBadge>
              <h2
                id="process-heading"
                className="mt-5 text-3xl font-semibold leading-tight text-white sm:text-5xl"
              >
                Responsible AI-assisted development, with human review in the loop.
              </h2>
            </div>
            <div className="space-y-5 text-base leading-8 text-slate-300">
              {siteData.processIntro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </motion.div>

          <div className="mt-12 grid gap-4 md:grid-cols-4">
            {siteData.processSteps.map((step, index) => {
              const Icon = icons[index] ?? ListChecks;

              return (
                <motion.div
                  key={step.title}
                  initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                  whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.05 }}
                >
                  <Card className="relative h-full overflow-hidden rounded-3xl bg-slate-950/60">
                    <div className="flex size-11 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-100">
                      <Icon aria-hidden="true" className="size-5" />
                    </div>
                    <p className="mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                      Step {index + 1}
                    </p>
                    <h3 className="mt-2 text-lg font-semibold text-white">{step.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-400">{step.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </Card>
      </Container>
    </section>
  );
}
