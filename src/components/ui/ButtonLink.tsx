import type { AnchorHTMLAttributes } from "react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  variant?: "primary" | "secondary" | "ghost";
};

const variants = {
  primary:
    "border-cyan-300/70 bg-cyan-300 text-slate-950 shadow-[0_0_36px_rgba(103,232,249,0.28)] hover:border-cyan-200 hover:bg-cyan-200",
  secondary:
    "border-white/15 bg-white/[0.07] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] hover:border-white/30 hover:bg-white/[0.12]",
  ghost:
    "border-transparent bg-transparent text-slate-300 hover:border-white/15 hover:bg-white/[0.06] hover:text-white",
};

export function ButtonLink({
  className,
  children,
  icon: Icon,
  iconPosition = "right",
  variant = "secondary",
  ...props
}: ButtonLinkProps) {
  const icon = Icon ? <Icon aria-hidden="true" className="size-4 shrink-0" /> : null;

  return (
    <a
      className={cn(
        "group inline-flex min-h-12 items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300",
        "motion-reduce:transition-none",
        variants[variant],
        className,
      )}
      {...props}
    >
      {iconPosition === "left" ? icon : null}
      <span>{children}</span>
      {iconPosition === "right" ? icon : null}
    </a>
  );
}
