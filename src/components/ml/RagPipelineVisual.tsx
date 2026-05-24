"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";

// 5-stage RAG pipeline: QUERY → EMBED → RETRIEVE → RERANK → ANSWER.
// Entrance timeline (per A2 brief, ms):
//   Stage rectangles: stagger 120, duration 280, ease easeOut
//     QUERY    delay 0,   t = 0  → 280
//     EMBED    delay 120, t = 120 → 400
//     RETRIEVE delay 240, t = 240 → 520
//     RERANK   delay 360, t = 360 → 640
//     ANSWER   delay 480, t = 480 → 760
//   Arrows draw 80ms after the stage on their LEFT begins
//     arrow 0 (after QUERY)    delay  80, duration 200
//     arrow 1 (after EMBED)    delay 200
//     arrow 2 (after RETRIEVE) delay 320
//     arrow 3 (after RERANK)   delay 440
//   Doc-stack cluster appears 100ms after RETRIEVE — delay 340, duration 240
//   EMBED amber stroke color animates over 200ms starting 100ms after
//     EMBED appears — delay 220
//
// Triggered once on viewport entry. Reduced-motion snaps to final state.

const STAGES = ["QUERY", "EMBED", "RETRIEVE", "RERANK", "ANSWER"] as const;

const STAGE_W = 92;
const STAGE_H = 36;
const STAGE_GAP = 20;
const STAGE_FIRST_X = 24;
const STAGE_Y = 96;
const STAGE_STAGGER = 0.12;
const STAGE_DURATION = 0.28;

const ARROW_DURATION = 0.2;
const ARROW_OFFSET_AFTER_STAGE = 0.08;

const RETRIEVE_INDEX = 2;
const EMBED_INDEX = 1;
const DOC_COUNT = 5;
const DOC_W = 24;
const DOC_H = 2;
const DOC_GAP_Y = 6;
const DOC_FIRST_Y = 28;
const DOC_DELAY_AFTER_RETRIEVE = 0.1;
const DOC_DURATION = 0.24;

const EMBED_HIGHLIGHT_DELAY_AFTER_STAGE = 0.1;
const EMBED_HIGHLIGHT_DURATION = 0.2;

const EASE = "easeOut" as const;

const stages = STAGES.map((label, i) => ({
  label,
  x: STAGE_FIRST_X + i * (STAGE_W + STAGE_GAP),
  delay: i * STAGE_STAGGER,
}));

export default function RagPipelineVisual() {
  const ref = useRef<SVGSVGElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const reduce = useReducedMotion();
  const active = reduce || inView;

  const retrieve = stages[RETRIEVE_INDEX];
  const docCenterX = retrieve.x + STAGE_W / 2;
  const docStackBottom = DOC_FIRST_Y + (DOC_COUNT - 1) * DOC_GAP_Y + DOC_H;
  const docConnectorTop = docStackBottom + 2;
  const docConnectorBottom = STAGE_Y;

  // Reduced-motion: no transitions at all; render final state directly.
  // Otherwise initial = hidden, animate when inView.
  const tx = (delay: number, duration: number) =>
    reduce ? { duration: 0 } : { duration, delay, ease: EASE };

  return (
    <svg
      ref={ref}
      viewBox="0 0 640 200"
      role="img"
      aria-label="Diagram of a five-stage retrieval-augmented generation pipeline: query, embed, retrieve, rerank, answer. A stack of document lines sits above the retrieve stage."
      className="ml-visual"
    >
      {/* Doc-stack lines + connector to RETRIEVE (animated as one group) */}
      <motion.g
        initial={reduce ? false : { opacity: 0, y: 4 }}
        animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 4 }}
        transition={tx(retrieve.delay + DOC_DELAY_AFTER_RETRIEVE, DOC_DURATION)}
      >
        {Array.from({ length: DOC_COUNT }).map((_, i) => (
          <rect
            key={`doc-${i}`}
            x={docCenterX - DOC_W / 2}
            y={DOC_FIRST_Y + i * DOC_GAP_Y}
            width={DOC_W}
            height={DOC_H}
            fill="var(--line)"
          />
        ))}
        <line
          x1={docCenterX}
          y1={docConnectorTop}
          x2={docCenterX}
          y2={docConnectorBottom}
          stroke="var(--line-strong)"
          strokeWidth="1.5"
        />
      </motion.g>

      {/* Arrows: line + chevron, each drawn 80ms after their LEFT stage begins */}
      {stages.slice(0, -1).map((s, i) => {
        const startX = s.x + STAGE_W;
        const endX = startX + STAGE_GAP;
        const midY = STAGE_Y + STAGE_H / 2;
        const arrowDelay = s.delay + ARROW_OFFSET_AFTER_STAGE;
        return (
          <motion.g
            key={`arrow-${i}`}
            initial={reduce ? false : { opacity: 0 }}
            animate={active ? { opacity: 1 } : { opacity: 0 }}
            transition={tx(arrowDelay, ARROW_DURATION)}
          >
            <motion.line
              x1={startX}
              y1={midY}
              x2={endX - 4}
              y2={midY}
              stroke="var(--line-strong)"
              strokeWidth="1.5"
              initial={reduce ? false : { pathLength: 0 }}
              animate={active ? { pathLength: 1 } : { pathLength: 0 }}
              transition={tx(arrowDelay, ARROW_DURATION)}
            />
            <motion.polyline
              points={`${endX - 6},${midY - 4} ${endX},${midY} ${endX - 6},${midY + 4}`}
              fill="none"
              stroke="var(--line-strong)"
              strokeWidth="1.5"
              strokeLinejoin="miter"
              strokeLinecap="butt"
              initial={reduce ? false : { pathLength: 0 }}
              animate={active ? { pathLength: 1 } : { pathLength: 0 }}
              transition={tx(arrowDelay + ARROW_DURATION * 0.6, ARROW_DURATION * 0.5)}
            />
          </motion.g>
        );
      })}

      {/* Stage rectangles + labels (animated per-stage with stagger 120ms) */}
      {stages.map((s, i) => {
        const isEmbed = i === EMBED_INDEX;
        const finalStroke = isEmbed ? "var(--amber)" : "var(--line-strong)";
        const startStroke = "var(--line-strong)";
        return (
          <motion.g
            key={`stage-${i}`}
            initial={reduce ? false : { opacity: 0, y: 6 }}
            animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
            transition={tx(s.delay, STAGE_DURATION)}
          >
            <motion.rect
              x={s.x}
              y={STAGE_Y}
              width={STAGE_W}
              height={STAGE_H}
              rx={2}
              fill="none"
              stroke={isEmbed && !reduce ? startStroke : finalStroke}
              strokeWidth="1.5"
              animate={
                isEmbed && active
                  ? { stroke: finalStroke }
                  : undefined
              }
              transition={
                isEmbed
                  ? tx(
                      s.delay + EMBED_HIGHLIGHT_DELAY_AFTER_STAGE,
                      EMBED_HIGHLIGHT_DURATION,
                    )
                  : undefined
              }
            />
            <text
              x={s.x + STAGE_W / 2}
              y={STAGE_Y + STAGE_H / 2 + 1}
              fontFamily="var(--font-jetbrains-mono), ui-monospace, monospace"
              fontSize="10"
              fontWeight="500"
              letterSpacing="0.12em"
              fill="var(--text)"
              fillOpacity="0.78"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              {s.label}
            </text>
          </motion.g>
        );
      })}
    </svg>
  );
}
