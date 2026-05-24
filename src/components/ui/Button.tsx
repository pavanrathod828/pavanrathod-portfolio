import Link from "next/link";
import type {
  ButtonHTMLAttributes,
  ComponentPropsWithoutRef,
  ReactNode,
} from "react";

import { cn } from "@/lib/utils";

type Variant = "default" | "outline";

type ButtonBaseProps = {
  variant?: Variant;
  className?: string;
  children: ReactNode;
};

type ButtonAsLinkProps = ButtonBaseProps &
  Omit<ComponentPropsWithoutRef<typeof Link>, keyof ButtonBaseProps>;

type ButtonAsButtonProps = ButtonBaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> & {
    href?: never;
  };

type ButtonProps = ButtonAsLinkProps | ButtonAsButtonProps;

const base =
  "inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-medium min-h-12 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-[color:var(--amber)] motion-reduce:transition-none";

const variants: Record<Variant, string> = {
  default:
    "bg-[color:var(--teal)] text-[color:var(--bg)] hover:bg-[color:var(--teal-soft)] hover:text-[color:var(--text)]",
  outline:
    "border border-[color:var(--line-strong)] bg-transparent text-[color:var(--text)] hover:border-[color:var(--teal)] hover:text-[color:var(--teal)]",
};

export function Button(props: ButtonProps) {
  const { variant = "default", className, children, ...rest } = props;
  const classes = cn(base, variants[variant], className);

  if ("href" in rest && rest.href !== undefined) {
    return (
      <Link
        className={classes}
        {...(rest as ComponentPropsWithoutRef<typeof Link>)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
