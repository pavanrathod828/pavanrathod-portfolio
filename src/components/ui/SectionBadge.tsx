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
        "inline-flex w-fit items-center gap-2 rounded-full border border-[#d9cfb5] bg-[#ebe4d3] px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[#6b5638]",
        className,
      )}
      {...props}
    >
      {Icon ? <Icon aria-hidden="true" className="size-3.5 text-[#6b5638]" /> : null}
      {children}
    </div>
  );
}
