"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";

// Generic, company-agnostic schematic. Per Yash boundary (PORTFOLIO_PLAN.md
// §8), this does NOT depict any HypeOn-specific system, product UI, internal
// architecture, or metric — it's a textbook-style diagram of the category of
// work (data points → central transform → organized outputs).
//
// Entrance: three deliberate waves, ~1150ms total.
//   Wave 1 (0 → 350ms):     24 input rects appear
//   Wave 2 (350 → 750ms):   converging lines draw + central circle pops
//   Wave 3 (750 → 1150ms):  diverging lines draw + output bars appear
// Triggered once on viewport entry. Reduced-motion snaps to final state.

const INPUT_COLS = 4;
const INPUT_ROWS = 6;
const INPUT_W = 12;
const INPUT_H = 8;
const INPUT_X = 20;
const INPUT_Y = 50;
const INPUT_GAP_X = 16;
const INPUT_GAP_Y = 18;

const CENTER_X = 300;
const CENTER_Y = 120;
const CENTER_R = 24;

const OUTPUT_COUNT = 6;
const OUTPUT_W = 16;
const OUTPUT_H = 32;
const OUTPUT_GAP = 20;
const OUTPUT_FIRST_X = 470;
const OUTPUT_Y = 104;

const inputs = Array.from({ length: INPUT_ROWS * INPUT_COLS }).map((_, i) => {
  const row = Math.floor(i / INPUT_COLS);
  const col = i % INPUT_COLS;
  return {
    x: INPUT_X + col * INPUT_GAP_X,
    y: INPUT_Y + row * INPUT_GAP_Y,
  };
});

const outputs = Array.from({ length: OUTPUT_COUNT }).map((_, i) => ({
  x: OUTPUT_FIRST_X + i * OUTPUT_GAP,
  y: OUTPUT_Y,
}));

const convergeRows = Array.from({ length: INPUT_ROWS });

const EASE = "easeOut" as const;

const wave1 = {
  hidden: { opacity: 0, y: 8 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: EASE, delay: 0 },
  },
};

const wave2Group = {
  hidden: {},
  show: {
    transition: { delayChildren: 0.35 },
  },
};

const wave2Line = {
  hidden: { pathLength: 0, opacity: 0 },
  show: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 0.4, ease: EASE },
  },
};

const wave2Circle = {
  hidden: { opacity: 0, scale: 0.85 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: EASE },
  },
};

const wave3Group = {
  hidden: {},
  show: {
    transition: { delayChildren: 0.75 },
  },
};

const wave3Line = {
  hidden: { pathLength: 0, opacity: 0 },
  show: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 0.4, ease: EASE },
  },
};

const wave3Rect = {
  hidden: { opacity: 0, y: 4 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: EASE },
  },
};

export default function HypeOnVisual() {
  const ref = useRef<SVGSVGElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const reduce = useReducedMotion();

  const animate = reduce || inView ? "show" : "hidden";
  const initial = reduce ? "show" : "hidden";

  return (
    <svg
      ref={ref}
      viewBox="0 0 600 240"
      role="img"
      aria-label="Abstract diagram: a grid of data points converging into a central node and fanning out into organized outputs."
      className="hypeon-visual"
    >
      {/* Wave 1: 24 input rectangles, animated as a single group (slide + fade) */}
      <motion.g
        variants={wave1}
        initial={initial}
        animate={animate}
      >
        {inputs.map((p, i) => (
          <rect
            key={`in-${i}`}
            x={p.x}
            y={p.y}
            width={INPUT_W}
            height={INPUT_H}
            rx={1}
            fill="var(--line)"
          />
        ))}
      </motion.g>

      {/* Wave 2: converging lines + central circle (delay 350ms) */}
      <motion.g
        variants={wave2Group}
        initial={initial}
        animate={animate}
      >
        {convergeRows.map((_, row) => {
          const sourceY = INPUT_Y + row * INPUT_GAP_Y + INPUT_H / 2;
          return (
            <motion.line
              key={`conv-${row}`}
              x1={INPUT_X + (INPUT_COLS - 1) * INPUT_GAP_X + INPUT_W}
              y1={sourceY}
              x2={CENTER_X - CENTER_R}
              y2={CENTER_Y}
              stroke="var(--line-strong)"
              strokeWidth="1.5"
              variants={wave2Line}
            />
          );
        })}
        <motion.circle
          cx={CENTER_X}
          cy={CENTER_Y}
          r={CENTER_R}
          stroke="var(--teal)"
          strokeWidth="1.5"
          fill="none"
          variants={wave2Circle}
          style={{ transformOrigin: `${CENTER_X}px ${CENTER_Y}px`, transformBox: "fill-box" }}
        />
      </motion.g>

      {/* Wave 3: diverging lines + output bars (delay 750ms) */}
      <motion.g
        variants={wave3Group}
        initial={initial}
        animate={animate}
      >
        {outputs.map((o, i) => (
          <motion.line
            key={`div-${i}`}
            x1={CENTER_X + CENTER_R}
            y1={CENTER_Y}
            x2={o.x + OUTPUT_W / 2}
            y2={o.y}
            stroke="var(--line-strong)"
            strokeWidth="1.5"
            variants={wave3Line}
          />
        ))}
        {outputs.map((o, i) => (
          <motion.rect
            key={`out-${i}`}
            x={o.x}
            y={o.y}
            width={OUTPUT_W}
            height={OUTPUT_H}
            rx={1}
            fill="var(--line-strong)"
            variants={wave3Rect}
          />
        ))}
      </motion.g>
    </svg>
  );
}
