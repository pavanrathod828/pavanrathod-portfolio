"use client";

import { GitBranch, Link as LinkIcon, Mail, Send } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { siteData } from "@/data/site";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";

const socialIcons = {
  Email: Mail,
  GitHub: GitBranch,
  LinkedIn: LinkIcon,
};

export function ContactSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-24 py-24 lg:pt-32"
    >
      <Container>
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-[#1c1a17] p-6 text-[#faf7f0] shadow-[0_30px_80px_-30px_rgba(28,26,23,0.35)] sm:p-10 lg:p-14"
        >
          <div className="relative grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#d9cfb5]/20 bg-[#faf7f0]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[#d9cfb5]">
                <Send aria-hidden="true" className="size-3.5" />
                Contact
              </div>
              <h2
                id="contact-heading"
                className="mt-5 max-w-3xl font-serif text-[clamp(2.25rem,5vw,4rem)] font-normal italic leading-[1.05] tracking-[-0.015em] text-[#faf7f0]"
              >
                {siteData.contactCta.heading}
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-[#d9cfb5]">
                {siteData.contactCta.body}
              </p>
              <p className="mt-4 text-sm leading-7 text-[#8a8278]">
                {siteData.email.startsWith("PLACEHOLDER")
                  ? "Email available on request — see links below."
                  : siteData.email}
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {siteData.socialLinks.map((link) => {
                const Icon = socialIcons[link.label as keyof typeof socialIcons] ?? Mail;

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className={cn(
                      "group inline-flex min-h-12 w-full items-center justify-start gap-2 rounded-full border border-[#faf7f0]/15 bg-[#faf7f0] px-5 py-3 text-sm font-semibold text-[#1c1a17] transition duration-300 hover:bg-[#ebe4d3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#faf7f0] motion-reduce:transition-none",
                    )}
                  >
                    <Icon aria-hidden="true" className="size-4 shrink-0" />
                    <span>{link.label}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
