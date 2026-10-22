"use client";

import React from "react";

interface SectionHeadingProps {
  tag?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  tag,
  title,
  subtitle,
  align = "left",
  className = "",
}) => {
  const isCenter = align === "center";

  return (
    <div
      className={`mb-12 md:mb-16 ${
        isCenter ? "text-center mx-auto max-w-3xl" : "max-w-2xl"
      } ${className}`}
    >
      {tag && (
        <div
          className={`flex items-center gap-2 mb-4 ${
            isCenter ? "justify-center" : "justify-start"
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent-purple" />
          <span className="font-mono text-[11px] uppercase tracking-widest text-accent-purple">
            {tag}
          </span>
        </div>
      )}

      <h2 className="editorial-subtitle font-sans font-medium text-cream tracking-tight text-balance uppercase">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 text-base md:text-lg text-cream-muted font-normal leading-relaxed text-balance">
          {subtitle}
        </p>
      )}
    </div>
  );
};
