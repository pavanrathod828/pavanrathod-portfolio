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
        className="mt-5 font-serif text-[clamp(2.25rem,5vw,4rem)] font-normal leading-[1.05] tracking-[-0.015em] text-[#1c1a17]"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-8 text-[#5a544c]">{description}</p>
      ) : null}
    </div>
  );
}
