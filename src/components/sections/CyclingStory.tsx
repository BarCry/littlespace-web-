"use client";

import React, { useRef, useState, useEffect } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { motion, useScroll, useTransform } from "framer-motion";
import { Bike, Award, Route, Flame } from "lucide-react";

export const CyclingStory: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setReduceMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax translation disabled or dampened when reduced motion is preferred
  const bikeParallaxX = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [-25, 25]
  );

  const cyclingHighlights = [
    {
      icon: Award,
      label: "Jamal Hibatullah",
      desc: "Sumedang native & national champion road cyclist who turned his passion for post-ride coffee into a local institution.",
    },
    {
      icon: Route,
      label: "The Sumedang Climbs",
      desc: "Sumedang's rolling terrain is legendary among cyclists. LittleSpace serves as the official launchpad and debrief point.",
    },
    {
      icon: Flame,
      label: "The Displayed Steed",
      desc: "The authentic racing bike mounted inside belongs to Jamal — a reminder that persistence and relaxation go hand-in-hand.",
    },
  ];

  return (
    <section
      id="cycling"
      ref={containerRef}
      className="relative py-28 sm:py-36 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-border-subtle overflow-hidden"
    >
      {/* Background Subtle Accent Glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent-green/5 rounded-full blur-3xl pointer-events-none" />

      <SectionHeading
        tag="04 / SIGNATURE STORY"
        title="Ride. Relax. Repeat."
        subtitle="Coffee for the pause. Cycling for the journey. LittleSpace for everything in between."
      />

      {/* Main Narrative Banner */}
      <div className="mb-14 max-w-3xl">
        <p className="font-serif italic text-xl sm:text-2xl text-cream/90 leading-snug">
          &ldquo;When you push up steep mountain passes for hours, the thought of a quiet place with good coffee keeps your legs moving. LittleSpace is that destination.&rdquo;
        </p>
        <div className="mt-4 flex items-center gap-3">
          <span className="w-6 h-[1px] bg-accent-green" />
          <span className="font-mono text-xs uppercase tracking-widest text-accent-green">
            Jamal Hibatullah — Founder & Cyclist
          </span>
        </div>
      </div>

      {/* Cinematic Showcase: Parallax Bicycle Display */}
      <div className="relative mb-16">
        <motion.div style={{ x: bikeParallaxX }}>
          <ImagePlaceholder
            label="JAMAL HIBATULLAH'S RACING BICYCLE ON DISPLAY"
            sublabel="Key visual: Jamal's authentic road bike mounted against the dark textured wall, warm spotlighting (16:9)"
            aspectRatio="aspect-[16/9] sm:aspect-[21/9]"
            theme="cycling"
            badge="CENTERPIECE • RACING BICYCLE"
            className="rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] border-accent-green/20"
          />
        </motion.div>
      </div>

      {/* Detail Gallery & Narrative Highlights */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Two complementary detail shots */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <ImagePlaceholder
            label="CYCLING DETAILS & GEAR"
            sublabel="Vintage cycling caps, race numbers, or chainring texture (4:3)"
            aspectRatio="aspect-[4/3]"
            theme="cycling"
            badge="GEAR DETAIL • 4:3"
            className="rounded-xl"
          />
          <ImagePlaceholder
            label="SUMEDANG MORNING ROUTE"
            sublabel="Morning mist and asphalt winding through Sumedang hills (4:3)"
            aspectRatio="aspect-[4/3]"
            theme="cycling"
            badge="LOCAL TERRAIN • 4:3"
            className="rounded-xl"
          />
        </div>

        {/* Right Column: Key Takeaways */}
        <div className="lg:col-span-5 space-y-6">
          {cyclingHighlights.map((highlight, idx) => {
            const Icon = highlight.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-xl bg-surface-card border border-border-subtle hover:border-accent-green/40 transition-colors"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded bg-surface-subtle text-accent-green">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className="font-sans text-sm font-medium text-cream">
                    {highlight.label}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-cream-muted leading-relaxed">
                  {highlight.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
