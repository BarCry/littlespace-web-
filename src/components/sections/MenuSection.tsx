"use client";

import React, { useState } from "react";
import { menuItems, menuCategories } from "@/data/menu";
import { MenuCategory } from "@/types";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MenuCard } from "@/components/ui/MenuCard";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";

export const MenuSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", ...menuCategories];

  const filteredItems =
    activeCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <section
      id="menu"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-border-subtle"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <SectionHeading
          tag="02 / CURATED MENU"
          title="Crafted With Intention."
          subtitle="From our signature Es Kopi Susu Aren and specialty single origins to large 1000ml bottle packages designed for sharing."
          className="mb-6 md:mb-0"
        />

        {/* Small note regarding ingredients */}
        <div className="hidden lg:flex items-center gap-2 text-xs font-mono text-cream-muted max-w-xs text-right">
          <Sparkles className="w-3.5 h-3.5 text-accent-purple shrink-0" />
          <span>Locally sourced palm sugar, fresh milk, and premium espresso extracts.</span>
        </div>
      </div>

      {/* Category Tabs Filter */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none border-b border-border-subtle">
        {categories.map((category) => {
          const isActive = activeCategory === category;
          const count =
            category === "All"
              ? menuItems.length
              : menuItems.filter((i) => i.category === category).length;

          return (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`relative px-4 py-2.5 rounded-full font-mono text-xs uppercase tracking-wider transition-all whitespace-nowrap focus-visible:outline-none ${
                isActive
                  ? "bg-cream text-background font-semibold shadow-sm"
                  : "bg-surface-subtle text-cream-muted hover:text-cream hover:bg-surface-hover border border-border-subtle"
              }`}
            >
              <span>{category}</span>
              <span
                className={`ml-2 text-[10px] ${
                  isActive ? "text-background/70 font-bold" : "text-cream-muted/60"
                }`}
              >
                ({count})
              </span>
            </button>
          );
        })}
      </div>

      {/* Product Cards Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
      >
        <AnimatePresence>
          {filteredItems.map((item) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <MenuCard item={item} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Bottom Takeaway / Bottle Package Callout */}
      <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-surface/60 border border-border-light flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <span className="font-mono text-[11px] uppercase tracking-widest text-accent-purple">
            Takeaway & Bottle Packs
          </span>
          <h4 className="font-sans text-lg font-medium text-cream mt-1">
            Need LittleSpace on the road or at the office?
          </h4>
          <p className="text-xs sm:text-sm text-cream-muted mt-1">
            Our 500ml and 1000ml bottle series are sealed airtight to maintain freshness for up to 5 days refrigerated.
          </p>
        </div>

        <a
          href="#location"
          className="shrink-0 font-mono text-xs uppercase tracking-widest px-5 py-3 rounded-lg border border-border-light bg-surface-subtle text-cream hover:border-accent-purple transition-colors"
        >
          Check Ordering Info
        </a>
      </div>
    </section>
  );
};
