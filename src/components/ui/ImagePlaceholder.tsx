"use client";

import React from "react";
import { Camera, Bike, Coffee, MapPin, Sparkles } from "lucide-react";

interface ImagePlaceholderProps {
  label: string;
  sublabel?: string;
  aspectRatio?: string; // e.g. "aspect-[16/9]", "aspect-[4/5]", "aspect-square"
  theme?: "coffee" | "cycling" | "interior" | "location" | "default";
  className?: string;
  badge?: string;
}

export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  label,
  sublabel = "Replaceable placeholder for LittleSpace.co photography",
  aspectRatio = "aspect-[16/9]",
  theme = "default",
  className = "",
  badge,
}) => {
  const getThemeIcon = () => {
    switch (theme) {
      case "cycling":
        return <Bike className="w-8 h-8 text-accent-green/80 stroke-[1.5]" />;
      case "coffee":
        return <Coffee className="w-8 h-8 text-accent-purple/80 stroke-[1.5]" />;
      case "location":
        return <MapPin className="w-8 h-8 text-cream-muted stroke-[1.5]" />;
      case "interior":
        return <Sparkles className="w-8 h-8 text-cream-muted stroke-[1.5]" />;
      default:
        return <Camera className="w-8 h-8 text-cream-muted/70 stroke-[1.5]" />;
    }
  };

  return (
    <div
      className={`relative overflow-hidden w-full ${aspectRatio} bg-surface-card border border-border-subtle group ${className}`}
    >
      {/* Background Architectural Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(244, 239, 234, 0.4) 1px, transparent 0)`,
          backgroundSize: "24px 24px"
        }}
      />

      {/* Subtle Ambient Vignette & Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-surface/30 to-background/20" />

      {/* Badge if provided */}
      {badge && (
        <div className="absolute top-4 left-4 z-10">
          <span className="px-2.5 py-1 text-[10px] font-mono uppercase tracking-widest bg-background/80 backdrop-blur-md border border-border-light text-cream-muted rounded-full">
            {badge}
          </span>
        </div>
      )}

      {/* Center Informational Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
        <div className="p-3 mb-3 rounded-full bg-surface-subtle/80 border border-border-subtle transition-transform duration-500 group-hover:scale-105">
          {getThemeIcon()}
        </div>
        
        <p className="font-mono text-xs uppercase tracking-widest text-cream font-medium max-w-[85%] leading-relaxed">
          {label}
        </p>
        
        {sublabel && (
          <p className="text-[11px] text-cream-muted/60 mt-1 max-w-[75%] font-sans">
            {sublabel}
          </p>
        )}
      </div>

      {/* Corner Registration Marks (Awwwards / Editorial Style) */}
      <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-border-light" />
      <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-border-light" />
      <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-border-light" />
      <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-border-light" />
    </div>
  );
};
