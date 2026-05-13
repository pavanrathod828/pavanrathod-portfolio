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
    "border-[#1c1a17] bg-[#1c1a17] text-[#faf7f0] hover:border-[#4a3a26] hover:bg-[#4a3a26]",
  secondary:
    "border-[#d9cfb5] bg-transparent text-[#1c1a17] hover:border-[#b8a989] hover:bg-[#ebe4d3]",
  ghost:
    "border-transparent bg-transparent text-[#1c1a17] hover:border-[#d9cfb5] hover:bg-[#ebe4d3]",
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
        "group inline-flex min-h-12 items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1c1a17]",
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
