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
        "rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-5 shadow-xl shadow-black/20",
        hoverLift &&
          "transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.07] motion-reduce:transform-none motion-reduce:transition-none",
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
