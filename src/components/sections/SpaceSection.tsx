"use client";

import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { motion } from "framer-motion";
import { Coffee, Bike, Palette, MessageSquare } from "lucide-react";

export const SpaceSection: React.FC = () => {
  const spaceFeatures = [
    {
      icon: Coffee,
      title: "Espresso Bar",
      desc: "An open, interactive bar where you can watch every shot pulled and chat with our baristas.",
    },
    {
      icon: Bike,
      title: "Cyclist Haven",
      desc: "Convenient parking, repair tools, and cold hydration ready for riders rolling in from morning loops.",
    },
    {
      icon: Palette,
      title: "Creative Nooks",
      desc: "Generous power outlets, warm acoustic corners, and comfortable seating built for laptop work.",
    },
    {
      icon: MessageSquare,
      title: "Community Tables",
      desc: "Communal wooden benches designed to spark spontaneous dialogues among strangers.",
    },
  ];

  return (
    <section
      id="space"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-border-subtle overflow-hidden"
    >
      <SectionHeading
        tag="03 / THE ENVIRONMENT"
        title="More Than Just Coffee."
        subtitle="Designed with tactile warmth, raw finishes, and breathable geometry. A physical sanctuary in Sumedang where pace slows down and focus returns."
      />

      {/* Asymmetric Architectural Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Large Primary Architectural Shot */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-8"
        >
          <ImagePlaceholder
            label="MAIN SPACE INTERIOR: ARCHITECTURAL PERSPECTIVE"
            sublabel="Wide angle shot: High ceilings, warm downlights, timber benches, and open bar layout (16:10)"
            aspectRatio="aspect-[16/10]"
            theme="interior"
            badge="INTERIOR ATMOSPHERE • 16:10"
            className="rounded-2xl"
          />

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {spaceFeatures.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-surface/40 border border-border-subtle hover:border-border-light transition-all"
                >
                  <div className="w-8 h-8 rounded-lg bg-surface-subtle flex items-center justify-center text-accent-green mb-3">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className="font-sans text-sm font-medium text-cream">
                    {feature.title}
                  </h4>
                  <p className="font-sans text-xs text-cream-muted mt-1 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Right Stacked Detail Shots */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-4 space-y-8"
        >
          <div className="relative">
            <ImagePlaceholder
              label="DETAIL: TEXTURES & COFFEE APPARATUS"
              sublabel="Close-up of espresso group head, tactile ceramic cups, or wooden textures"
              aspectRatio="aspect-[4/5]"
              theme="coffee"
              badge="DETAIL SHOT • 4:5"
              className="rounded-2xl"
            />
          </div>

          <div className="p-6 rounded-2xl bg-surface-card border border-border-light">
            <span className="font-mono text-[10px] uppercase tracking-widest text-accent-green">
              Daily Philosophy
            </span>
            <p className="mt-2 text-sm text-cream font-medium leading-snug">
              Every chair, light source, and acoustic angle is arranged so you feel unpressured. Stay for 15 minutes or 3 hours.
            </p>
            <div className="mt-4 pt-4 border-t border-border-subtle flex items-center justify-between font-mono text-[11px] text-cream-muted">
              <span>WIFI AVAILABLE</span>
              <span>PLUGS AT EVERY TABLE</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
