"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { siteData } from "@/data/site";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    firstLinkRef.current?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
        return;
      }
      if (event.key !== "Tab" || !panelRef.current) return;

      const focusables = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])',
      );
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement as HTMLElement | null;

      if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  useEffect(() => {
    if (!open) {
      triggerRef.current?.focus();
    }
  }, [open]);

  const slideDuration = reduceMotion ? 0 : 0.3;

  return (
    <div className="md:hidden">
      <button
        ref={triggerRef}
        type="button"
        aria-label="Open menu"
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        onClick={() => setOpen(true)}
        className="inline-flex size-11 items-center justify-center rounded-full text-[#1c1a17] transition hover:bg-[#ebe4d3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1c1a17]"
      >
        <Menu aria-hidden="true" className="size-5" />
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            key="mobile-nav-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: slideDuration }}
            className="fixed inset-0 z-[60] bg-[rgba(28,26,23,0.4)] backdrop-blur-sm"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
        ) : null}
        {open ? (
          <motion.div
            key="mobile-nav-panel"
            id="mobile-nav-panel"
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            initial={reduceMotion ? { opacity: 0 } : { x: "100%" }}
            animate={reduceMotion ? { opacity: 1 } : { x: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { x: "100%" }}
            transition={{ duration: slideDuration, ease: "easeOut" }}
            className="fixed inset-y-0 right-0 z-[70] flex w-full max-w-sm flex-col border-l border-[#d9cfb5] bg-[#faf7f0] px-6 py-6 shadow-[0_20px_60px_-15px_rgba(28,26,23,0.25)]"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold tracking-[0.24em] text-[#1c1a17] uppercase">
                Menu
              </span>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="inline-flex size-11 items-center justify-center rounded-full text-[#1c1a17] transition hover:bg-[#ebe4d3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1c1a17]"
              >
                <X aria-hidden="true" className="size-5" />
              </button>
            </div>

            <nav aria-label="Mobile" className="mt-8 flex flex-1 flex-col gap-1">
              {siteData.navItems.map((item, index) => (
                <a
                  key={item.href}
                  ref={index === 0 ? firstLinkRef : undefined}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-12 items-center rounded-2xl px-4 text-lg font-medium text-[#1c1a17] transition hover:bg-[#ebe4d3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1c1a17]"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex min-h-12 items-center justify-center rounded-full bg-[#1c1a17] px-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#faf7f0] transition hover:bg-[#4a3a26] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1c1a17]"
            >
              Contact
            </a>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
