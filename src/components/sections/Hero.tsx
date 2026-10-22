"use client";

import React from "react";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { motion } from "framer-motion";
import { ArrowDown, Bike, Coffee, Sparkles } from "lucide-react";

export const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex flex-col justify-between pt-32 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Top Narrative & Editorial Headings */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl pt-4 sm:pt-8"
      >
        {/* Location & Status Label */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-border-light bg-surface/70 backdrop-blur-md mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
          <span className="font-mono text-[11px] uppercase tracking-widest text-cream">
            {siteConfig.location.city}, {siteConfig.location.province}
          </span>
          <span className="text-border-light">•</span>
          <span className="font-mono text-[10px] uppercase tracking-widest text-cream-muted">
            Open 07.00 – 22.00
          </span>
        </motion.div>

        {/* Main Editorial Headline */}
        <motion.h1
          variants={itemVariants}
          className="editorial-title font-sans font-medium text-cream uppercase tracking-tight text-balance"
        >
          Your Little Space <br className="hidden sm:inline" />
          Between <span className="text-cream/70 italic font-serif">Coffee</span> &{" "}
          <span className="text-accent-purple">Life.</span>
        </motion.h1>

        {/* Subheadline & Story Concept */}
        <motion.p
          variants={itemVariants}
          className="mt-6 text-lg sm:text-xl text-cream-muted font-normal max-w-2xl leading-relaxed text-balance"
        >
          Coffee, conversations, and a little space to slow down. Founded by cyclist{" "}
          <span className="text-cream font-medium">Jamal Hibatullah</span> in the heart of Sumedang.
        </motion.p>

        {/* Action CTAs */}
        <motion.div
          variants={itemVariants}
          className="mt-8 flex flex-wrap items-center gap-4"
        >
          <Button
            variant="primary"
            size="lg"
            href="#menu"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#menu")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Explore Menu
          </Button>

          <Button
            variant="secondary"
            size="lg"
            href="#location"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#location")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Visit LittleSpace
          </Button>
        </motion.div>
      </motion.div>

      {/* Cinematic Hero Placeholder Image Area */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
        className="mt-14 w-full relative"
      >
        <ImagePlaceholder
          label="PRIMARY HERO PHOTOGRAPHY PLACEHOLDER"
          sublabel="Optimal image: Wide cinematic LittleSpace interior / barista brewing ritual / morning ambience (16:9)"
          aspectRatio="aspect-[16/9] sm:aspect-[21/9]"
          theme="interior"
          badge="HERO VISUAL • 21:9 CINEMATIC"
          className="rounded-xl shadow-2xl"
        />

        {/* Floating Brand Pillars Badge Overlay */}
        <div className="absolute -bottom-5 right-4 sm:right-8 bg-surface-card/90 backdrop-blur-md border border-border-light py-2.5 px-4 rounded-lg hidden sm:flex items-center gap-4 text-xs font-mono text-cream-muted shadow-lg">
          <span className="flex items-center gap-1.5 text-cream">
            <Coffee className="w-3.5 h-3.5 text-accent-purple" /> Coffee
          </span>
          <span className="text-border-light">•</span>
          <span className="flex items-center gap-1.5 text-cream">
            <Bike className="w-3.5 h-3.5 text-accent-green" /> Cycling
          </span>
          <span className="text-border-light">•</span>
          <span className="flex items-center gap-1.5 text-cream">
            <Sparkles className="w-3.5 h-3.5 text-cream-muted" /> Community
          </span>
        </div>
      </motion.div>

      {/* Bottom Scroll Indicator */}
      <div className="pt-10 flex items-center justify-between text-xs font-mono text-cream-muted/60 border-t border-border-subtle mt-10">
        <span>EST. SUMEDANG 1.0</span>
        <a
          href="#about"
          className="flex items-center gap-1.5 hover:text-cream transition-colors text-[11px] uppercase tracking-wider"
        >
          Scroll Down <ArrowDown className="w-3 h-3 animate-bounce" />
        </a>
        <span className="hidden sm:inline">07.00 – 22.00 WIB</span>
      </div>
    </section>
  );
};
