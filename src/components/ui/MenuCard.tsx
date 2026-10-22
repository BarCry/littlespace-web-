"use client";

import React from "react";
import { MenuItem } from "@/types";
import { ImagePlaceholder } from "./ImagePlaceholder";

interface MenuCardProps {
  item: MenuItem;
}

export const MenuCard: React.FC<MenuCardProps> = ({ item }) => {
  const isPlaceholderItem = item.id.includes("placeholder");

  return (
    <div
      className={`group relative flex flex-col justify-between rounded-xl bg-surface-card border border-border-subtle p-4 sm:p-5 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-border-active hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] ${
        isPlaceholderItem ? "opacity-70 border-dashed" : ""
      }`}
    >
      <div>
        {/* Product Image Area */}
        <div className="relative mb-4 overflow-hidden rounded-lg">
          <ImagePlaceholder
            label={item.name}
            sublabel={item.volume ? `Bottle: ${item.volume}` : "Handcrafted beverage"}
            aspectRatio="aspect-[4/3]"
            theme={item.category === "Coffee" ? "coffee" : "default"}
            badge={item.tag}
            className="transition-transform duration-500 ease-out group-hover:scale-105"
          />
        </div>

        {/* Product Info */}
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-sans text-base sm:text-lg font-medium text-cream group-hover:text-cream-pure transition-colors">
              {item.name}
            </h3>
            {item.volume && (
              <span className="inline-block mt-0.5 font-mono text-[11px] text-accent-purple">
                Volume: {item.volume}
              </span>
            )}
          </div>
          
          <span className="font-mono text-sm sm:text-base font-semibold text-cream shrink-0">
            {item.priceFormatted}
          </span>
        </div>

        <p className="mt-2 text-xs sm:text-sm text-cream-muted leading-relaxed line-clamp-2">
          {item.description}
        </p>
      </div>

      {/* Card Footer Accent line */}
      <div className="mt-4 pt-3 border-t border-border-subtle flex items-center justify-between text-[11px] font-mono text-cream-muted/70">
        <span className="uppercase tracking-wider">{item.category}</span>
        <span className="text-[10px] text-accent-purple/80 group-hover:text-accent-purple transition-colors">
          Fresh Daily
        </span>
      </div>
    </div>
  );
};
