import { Link, type To } from "react-router-dom";
import type { ReactNode, MouseEventHandler } from "react";

function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

type Variant = "outline" | "solid" | "text" | "primary";
type Size = "xs" | "sm" | "md" | "lg" | "xl";

type BaseProps = {
  variant?: Variant;
  size?: Size;
  full?: boolean;
  rounded?: "md" | "xl" | "2xl" | "full";
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  className?: string;
  children: ReactNode;
  disabled?: boolean;
};

type ButtonAsButton = BaseProps & {
  kind?: "button";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
};

type ButtonAsAnchor = BaseProps & {
  kind?: "anchor";
  href: string;
  target?: "_self" | "_blank" | "_parent" | "_top";
  rel?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

type ButtonAsRouterLink = BaseProps & {
  kind?: "link";
  to: To;
  replace?: boolean;
  state?: unknown;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

type Props = ButtonAsButton | ButtonAsAnchor | ButtonAsRouterLink;

const sizeCls: Record<Size, string> = {
  xs: "px-2 py-1 text-[11px] leading-none",
  sm: "px-3 py-1.5 text-xs",
  md: "px-4 py-2 text-sm",
  lg: "px-5 py-2.5 text-base",
  xl: "px-6 py-3 text-base",
};

const variantCls: Record<Variant, string> = {
  outline:
    "border p-3 border-amber-100/20 text-orange-100 bg-transparent " +
    "hover:border-amber-100/30 hover:text-amber-100",
  solid:
    "bg-zinc-900/50 p-3 text-orange-100 border border-white/10 hover:bg-zinc-800/70",
  text:
    "bg-transparent p-3 text-orange-100 border border-transparent " +
    "hover:text-amber-100 hover:border-amber-100/30 rounded-md px-3 py-1",

  primary: "bg-amber-100 text-black border border-white/10 hover:bg-amber-200",
};

export default function Button(p: Props) {
  const {
    variant = "outline",
    size = "md",
    full,
    rounded = "xl",
    leftIcon,
    rightIcon,
    className,
    children,
    disabled,
  } = p;

  const base =
    "inline-flex items-center justify-center gap-2 select-none " +
    "transition-colors duration-150 whitespace-nowrap " +
    (disabled ? "opacity-60 pointer-events-none " : "");

  const cls = cn(
    base,
    variantCls[variant],
    sizeCls[size],
    full && "w-full",
    rounded === "md" && "rounded-md",
    rounded === "xl" && "rounded-xl",
    rounded === "2xl" && "rounded-2xl",
    rounded === "full" && "rounded-full",
    className
  );

  if ("to" in p) {
    const { to, replace, state, onClick } = p;
    return (
      <Link
        to={to}
        replace={replace}
        state={state}
        onClick={onClick}
        className={cls}
      >
        {leftIcon && <span className="shrink-0">{leftIcon}</span>}
        <span>{children}</span>
        {rightIcon && <span className="shrink-0">{rightIcon}</span>}
      </Link>
    );
  }

  if ("href" in p) {
    const { href, target, rel, onClick } = p;
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        onClick={onClick}
        className={cls}
      >
        {leftIcon && <span className="shrink-0">{leftIcon}</span>}
        <span>{children}</span>
        {rightIcon && <span className="shrink-0">{rightIcon}</span>}
      </a>
    );
  }

  const { type = "button", onClick } = p;
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={cls}>
      {leftIcon && <span className="shrink-0">{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span className="shrink-0">{rightIcon}</span>}
    </button>
  );
}
