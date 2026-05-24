"use client";

import type { CSSProperties, ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

import { cn } from "@/lib/utils";

type AnimatedGradientTextProps = {
  children: ReactNode;
  className?: string;
};

const gradientStyle: CSSProperties = {
  backgroundImage:
    "linear-gradient(90deg, var(--teal), var(--amber), var(--teal))",
  backgroundSize: "200% 100%",
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  color: "transparent",
  WebkitTextFillColor: "transparent",
};

export function AnimatedGradientText({
  children,
  className,
}: AnimatedGradientTextProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <span
        className={cn("inline", className)}
        style={{ ...gradientStyle, backgroundPosition: "0% 50%" }}
      >
        {children}
      </span>
    );
  }

  return (
    <motion.span
      className={cn("inline", className)}
      style={gradientStyle}
      initial={{ backgroundPosition: "0% 50%" }}
      animate={{ backgroundPosition: "100% 50%" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.span>
  );
}
