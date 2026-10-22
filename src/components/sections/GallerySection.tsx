"use client";

import React from "react";
import { galleryItems } from "@/data/gallery";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { motion } from "framer-motion";

export const GallerySection: React.FC = () => {
  return (
    <section
      id="gallery"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-border-subtle"
    >
      <SectionHeading
        tag="05 / VISUAL JOURNAL"
        title="Fragments of Everyday Space."
        subtitle="An ongoing visual chronicle of coffee rituals, evening light, cyclist gatherings, and quiet corners in Sumedang."
      />

      {/* Editorial Asymmetric Masonry Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {galleryItems.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: idx * 0.08 }}
            className={`group relative overflow-hidden rounded-xl bg-surface-card border border-border-subtle transition-all duration-300 hover:border-border-active ${
              idx === 0 ? "sm:col-span-2 sm:row-span-2" : ""
            } ${idx === 3 ? "sm:col-span-2" : ""}`}
          >
            <ImagePlaceholder
              label={item.placeholderLabel}
              sublabel={item.caption}
              aspectRatio={item.aspectRatio}
              theme={item.category === "cycling" ? "cycling" : item.category === "coffee" ? "coffee" : "default"}
              badge={item.category.toUpperCase()}
              className="transition-transform duration-700 ease-out group-hover:scale-105"
            />

            {/* Hover Caption Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 pointer-events-none">
              <span className="font-mono text-[10px] uppercase tracking-widest text-accent-purple mb-1">
                {item.category}
              </span>
              <h4 className="font-sans text-base font-medium text-cream">
                {item.title}
              </h4>
              <p className="text-xs text-cream-muted mt-1 leading-snug">
                {item.caption}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Instagram Community Invitation */}
      <div className="mt-12 text-center">
        <a
          href="https://www.instagram.com/littlespace.co_/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-cream-muted hover:text-accent-purple transition-colors border-b border-border-light pb-1"
        >
          Tag @littlespace.co_ to be featured in our journal &rarr;
        </a>
      </div>
    </section>
  );
};
