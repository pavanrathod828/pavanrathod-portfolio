"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";

const STAGES = ["QUERY", "EMBED", "RETRIEVE", "RERANK", "ANSWER"] as const;

const STAGE_W = 80;
const STAGE_H = 32;
const STAGE_GAP = 20;
const STAGE_FIRST_X = 40;
const STAGE_Y = 96;

const ARROW_W = STAGE_GAP;

const RETRIEVE_INDEX = 2;
const DOC_COUNT = 5;
const DOC_W = 20;
const DOC_H = 2;
const DOC_GAP_Y = 6;
const DOC_FIRST_Y = 36;

const stages = STAGES.map((label, i) => ({
  label,
  x: STAGE_FIRST_X + i * (STAGE_W + STAGE_GAP),
}));

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.15, ease: "easeOut" as const } },
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.03 } },
};

export default function RagPipelineVisual() {
  const ref = useRef<SVGSVGElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduce = useReducedMotion();

  const animate = reduce || inView ? "show" : "hidden";
  const initial = reduce ? "show" : "hidden";

  const retrieve = stages[RETRIEVE_INDEX];
  const docCenterX = retrieve.x + STAGE_W / 2;

  return (
    <motion.svg
      ref={ref}
      viewBox="0 0 640 200"
      role="img"
      aria-label="Diagram of a five-stage retrieval-augmented generation pipeline: query, embed, retrieve, rerank, answer. A stack of document lines sits above the retrieve stage."
      className="ml-visual"
      variants={container}
      initial={initial}
      animate={animate}
    >
      {/* Static arrows between stages (no per-arrow animation) */}
      {stages.slice(0, -1).map((s, i) => {
        const startX = s.x + STAGE_W;
        const endX = startX + ARROW_W;
        const midY = STAGE_Y + STAGE_H / 2;
        return (
          <g key={`arrow-${i}`}>
            <line
              x1={startX}
              y1={midY}
              x2={endX - 4}
              y2={midY}
              stroke="var(--line-strong)"
              strokeWidth="1.5"
            />
            <polyline
              points={`${endX - 6},${midY - 4} ${endX},${midY} ${endX - 6},${midY + 4}`}
              fill="none"
              stroke="var(--line-strong)"
              strokeWidth="1.5"
              strokeLinejoin="miter"
              strokeLinecap="butt"
            />
          </g>
        );
      })}

      {/* Static connector: doc stack down to RETRIEVE stage */}
      <line
        x1={docCenterX}
        y1={DOC_FIRST_Y + DOC_COUNT * DOC_GAP_Y - DOC_GAP_Y + DOC_H + 2}
        x2={docCenterX}
        y2={STAGE_Y}
        stroke="var(--line-strong)"
        strokeWidth="1.5"
      />

      {/* Animated: doc-stack lines (above RETRIEVE) */}
      {Array.from({ length: DOC_COUNT }).map((_, i) => (
        <motion.rect
          key={`doc-${i}`}
          x={docCenterX - DOC_W / 2}
          y={DOC_FIRST_Y + i * DOC_GAP_Y}
          width={DOC_W}
          height={DOC_H}
          fill="var(--line)"
          variants={item}
        />
      ))}

      {/* Animated: stage boxes + labels */}
      {stages.map((s, i) => {
        const isEmbed = s.label === "EMBED";
        const stroke = isEmbed ? "var(--amber)" : "var(--line-strong)";
        return (
          <motion.g key={`stage-${i}`} variants={item}>
            <rect
              x={s.x}
              y={STAGE_Y}
              width={STAGE_W}
              height={STAGE_H}
              rx={2}
              fill="none"
              stroke={stroke}
              strokeWidth="1.5"
            />
            <text
              x={s.x + STAGE_W / 2}
              y={STAGE_Y + STAGE_H / 2 + 1}
              fontFamily="var(--font-jetbrains-mono), ui-monospace, monospace"
              fontSize="10"
              fontWeight="500"
              letterSpacing="0.12em"
              fill="var(--muted)"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              {s.label}
            </text>
          </motion.g>
        );
      })}
    </motion.svg>
  );
}
