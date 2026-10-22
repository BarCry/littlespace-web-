"use client";

import React from "react";
import { siteConfig, navigationLinks } from "@/data/site";
import { MessageCircle, Mail, ArrowUp } from "lucide-react";
import { InstagramIcon } from "@/components/ui/Icons";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border-subtle bg-background pt-16 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-border-subtle">
        {/* Brand identity column */}
        <div className="md:col-span-5 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full border border-border-light bg-surface flex items-center justify-center">
              <span className="font-mono text-xs font-bold text-cream">L</span>
            </div>
            <span className="font-sans text-base font-semibold tracking-wider text-cream">
              LITTLESPACE<span className="text-accent-purple">.CO</span>
            </span>
          </div>

          <p className="font-mono text-xs uppercase tracking-widest text-accent-green">
            Coffee × Cycling × Good Space
          </p>

          <p className="text-sm text-cream-muted max-w-sm leading-relaxed">
            &ldquo;Start from the little things.&rdquo; A sanctuary for coffee drinkers, road cyclists, and creative minds in Sumedang, West Java.
          </p>

          <div className="pt-2 text-xs font-mono text-cream-muted/70 space-y-1">
            <p>Hours: {siteConfig.openingHours.days} — {siteConfig.openingHours.time}</p>
            <p>Email: {siteConfig.email}</p>
          </div>
        </div>

        {/* Navigation Column */}
        <div className="md:col-span-4 space-y-3">
          <p className="font-mono text-xs uppercase tracking-widest text-cream">
            Index
          </p>
          <div className="grid grid-cols-2 gap-2 text-xs font-mono">
            {navigationLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-cream-muted hover:text-cream transition-colors py-1"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Social & Connect Column */}
        <div className="md:col-span-3 space-y-4">
          <p className="font-mono text-xs uppercase tracking-widest text-cream">
            Connect
          </p>
          <div className="space-y-2 text-xs font-mono">
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-cream-muted hover:text-accent-purple transition-colors py-1"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>{siteConfig.instagramHandle}</span>
            </a>
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-cream-muted hover:text-accent-green transition-colors py-1"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{siteConfig.whatsappFormatted}</span>
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-2 text-cream-muted hover:text-cream transition-colors py-1"
            >
              <Mail className="w-4 h-4" />
              <span>{siteConfig.email}</span>
            </a>
          </div>

          <div className="pt-2">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-cream-muted hover:text-cream transition-colors"
            >
              Back to Top <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Copyright & Technical Credit */}
      <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-cream-muted/60">
        <p>© 2026 LittleSpace.co. All rights reserved.</p>
        <p>Location: {siteConfig.location.city}, {siteConfig.location.province}</p>
      </div>
    </footer>
  );
};
