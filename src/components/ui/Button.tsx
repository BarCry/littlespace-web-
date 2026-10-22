"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

interface ButtonProps {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
  icon?: boolean;
  children: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  href,
  external = false,
  icon = false,
  children,
  className = "",
  onClick,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-mono text-xs uppercase tracking-widest transition-all duration-300 ease-out select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-purple active:scale-[0.98]";

  const sizeStyles = {
    sm: "px-4 py-2.5 min-h-[38px] text-[11px]",
    md: "px-6 py-3.5 min-h-[46px] text-xs",
    lg: "px-8 py-4 min-h-[52px] text-xs font-semibold",
  };

  const variantStyles = {
    primary:
      "bg-cream text-background hover:bg-cream-pure shadow-sm hover:shadow-[0_0_20px_rgba(244,239,234,0.18)] hover:-translate-y-0.5",
    secondary:
      "bg-surface text-cream border border-border-light hover:border-border-active hover:bg-surface-hover hover:-translate-y-0.5",
    outline:
      "bg-transparent text-cream border border-border-light hover:border-cream/60 hover:bg-cream/5",
    ghost:
      "bg-transparent text-cream-muted hover:text-cream hover:bg-surface-subtle",
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        className={combinedClasses}
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        <span>{children}</span>
        {icon && (
          <ArrowUpRight className="w-3.5 h-3.5 ml-2 opacity-70 group-hover:opacity-100 transition-opacity" />
        )}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      <span>{children}</span>
      {icon && (
        <ArrowUpRight className="w-3.5 h-3.5 ml-2 opacity-70 group-hover:opacity-100 transition-opacity" />
      )}
    </button>
  );
};
