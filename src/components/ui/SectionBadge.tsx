import type { HTMLAttributes } from "react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type SectionBadgeProps = HTMLAttributes<HTMLDivElement> & {
  icon?: LucideIcon;
};

export function SectionBadge({
  className,
  children,
  icon: Icon,
  ...props
}: SectionBadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex w-fit items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-100 shadow-[0_0_24px_rgba(34,211,238,0.08)]",
        className,
      )}
      {...props}
    >
      {Icon ? <Icon aria-hidden="true" className="size-3.5" /> : null}
      {children}
    </div>
  );
}
