"use client";

import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { motion } from "framer-motion";
import { Compass, Users, Sparkles, Coffee } from "lucide-react";

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      icon: Coffee,
      title: "Mindful Brews",
      desc: "Carefully roasted beans & signature drinks made to refresh your everyday routine.",
    },
    {
      icon: Users,
      title: "Warm Community",
      desc: "A melting pot where creatives, locals, and cyclists gather without pretension.",
    },
    {
      icon: Compass,
      title: "Sumedang Roots",
      desc: "Grounded in local pride, celebrating the quiet beauty and mountain air of West Java.",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-border-subtle"
    >
      <SectionHeading
        tag="01 / PHILOSOPHY"
        title="A Little Space, Made For You."
        subtitle="Not just a place to buy coffee, but a pause between destinations. Built to nurture ideas, candid conversations, and shared passions."
      />

      {/* Editorial Layout: Large Asymmetric Image + Narrative Column */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Column: Visual Placeholder with Subtle Angle */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7"
        >
          <div className="relative group">
            <ImagePlaceholder
              label="ABOUT SECTION: CAFE INTERIOR AMBIENCE"
              sublabel="Recommended photo: Warm natural interior, community seating, raw wood & coffee bar details (4:3)"
              aspectRatio="aspect-[4/3]"
              theme="interior"
              badge="SPACE & AMBIENCE"
              className="rounded-xl"
            />
            
            {/* Small Editorial Quote Box Floating */}
            <div className="mt-4 sm:mt-0 sm:absolute sm:-bottom-8 sm:-right-6 bg-surface-subtle/95 backdrop-blur-md border border-border-light p-5 rounded-lg max-w-xs shadow-xl">
              <Sparkles className="w-4 h-4 text-accent-purple mb-2" />
              <p className="font-serif italic text-sm text-cream leading-snug">
                &ldquo;Start from the little things. A great conversation often begins with a warm cup.&rdquo;
              </p>
              <span className="block mt-2 font-mono text-[10px] uppercase tracking-widest text-cream-muted">
                — LittleSpace Manifesto
              </span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Narrative & Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="lg:col-span-5 space-y-6 pt-4 lg:pt-0"
        >
          <div className="space-y-4 text-cream-muted leading-relaxed">
            <p>
              LittleSpace was born out of a desire for an unhurried corner in Sumedang. Whether you are wrapping up a long morning ride, working on a creative project, or catching up with friends, this space was carved out for your rhythm.
            </p>
            <p>
              Here, sportsmanship and coffee culture converge naturally. Jamal Hibatullah envisioned a destination that reflects the energy of cycling while maintaining the warmth and relaxation of a neighborhood refuge.
            </p>
          </div>

          {/* Pillars List */}
          <div className="pt-4 space-y-4">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-3.5 rounded-lg bg-surface/50 border border-border-subtle hover:border-border-light transition-colors"
                >
                  <div className="p-2 rounded bg-surface-hover text-accent-purple shrink-0 mt-0.5">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-cream font-sans">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-cream-muted mt-1 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
