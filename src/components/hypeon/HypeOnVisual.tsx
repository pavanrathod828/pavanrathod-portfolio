"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";

// Generic, company-agnostic schematic. Per Yash boundary (PORTFOLIO_PLAN.md
// §8), this does NOT depict any HypeOn-specific system, product UI, internal
// architecture, or metric — it's a textbook-style diagram of the category of
// work (data points → central transform → organized outputs).

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

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.1, ease: "easeOut" as const } },
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.01 } },
};

export default function HypeOnVisual() {
  const ref = useRef<SVGSVGElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduce = useReducedMotion();

  const animate = reduce || inView ? "show" : "hidden";
  const initial = reduce ? "show" : "hidden";

  return (
    <motion.svg
      ref={ref}
      viewBox="0 0 600 240"
      role="img"
      aria-label="Abstract diagram: a grid of data points converging into a central node and fanning out into organized outputs."
      className="hypeon-visual"
      variants={container}
      initial={initial}
      animate={animate}
    >
      {/* Static connecting lines — render once, no per-element animation */}
      {Array.from({ length: INPUT_ROWS }).map((_, row) => {
        const sourceY = INPUT_Y + row * INPUT_GAP_Y + INPUT_H / 2;
        return (
          <line
            key={`conv-${row}`}
            x1={INPUT_X + (INPUT_COLS - 1) * INPUT_GAP_X + INPUT_W}
            y1={sourceY}
            x2={CENTER_X - CENTER_R}
            y2={CENTER_Y}
            stroke="var(--line-strong)"
            strokeWidth="1.5"
          />
        );
      })}
      {outputs.map((o, i) => (
        <line
          key={`div-${i}`}
          x1={CENTER_X + CENTER_R}
          y1={CENTER_Y}
          x2={o.x + OUTPUT_W / 2}
          y2={o.y}
          stroke="var(--line-strong)"
          strokeWidth="1.5"
        />
      ))}

      {/* Animated: input grid */}
      {inputs.map((p, i) => (
        <motion.rect
          key={`in-${i}`}
          x={p.x}
          y={p.y}
          width={INPUT_W}
          height={INPUT_H}
          rx={1}
          fill="var(--line)"
          variants={item}
        />
      ))}

      {/* Animated: central node */}
      <motion.circle
        cx={CENTER_X}
        cy={CENTER_Y}
        r={CENTER_R}
        stroke="var(--teal)"
        strokeWidth="1.5"
        fill="none"
        variants={item}
      />

      {/* Animated: output bars */}
      {outputs.map((o, i) => (
        <motion.rect
          key={`out-${i}`}
          x={o.x}
          y={o.y}
          width={OUTPUT_W}
          height={OUTPUT_H}
          rx={1}
          fill="var(--line-strong)"
          variants={item}
        />
      ))}
    </motion.svg>
  );
}
