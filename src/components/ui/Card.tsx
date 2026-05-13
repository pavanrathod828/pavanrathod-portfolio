import type { ElementType, HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type CardProps = HTMLAttributes<HTMLElement> & {
  as?: ElementType;
  hoverLift?: boolean;
  children?: ReactNode;
};

export function Card({
  as: Component = "div",
  hoverLift = false,
  className,
  children,
  ...props
}: CardProps) {
  return (
    <Component
      className={cn(
        "rounded-[1.75rem] border border-[#d9cfb5] bg-[#faf7f0] p-5 shadow-[0_10px_30px_-18px_rgba(28,26,23,0.18)]",
        hoverLift &&
          "transition duration-300 hover:-translate-y-1 hover:border-[#b8a989] hover:bg-[#ebe4d3] motion-reduce:transform-none motion-reduce:transition-none",
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
