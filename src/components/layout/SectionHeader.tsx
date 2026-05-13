import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionBadge } from "@/components/ui/SectionBadge";

type SectionHeaderProps = {
  badge: ReactNode;
  badgeIcon?: LucideIcon;
  headingId?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  badge,
  badgeIcon,
  headingId,
  title,
  description,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn(align === "center" ? "text-center" : "max-w-3xl", className)}>
      <SectionBadge icon={badgeIcon} className={align === "center" ? "mx-auto" : undefined}>
        {badge}
      </SectionBadge>
      <h2
        id={headingId}
        className="mt-5 text-3xl font-semibold leading-tight text-white sm:text-5xl"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-8 text-slate-300">{description}</p>
      ) : null}
    </div>
  );
}
