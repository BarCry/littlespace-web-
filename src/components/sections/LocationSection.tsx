"use client";

import React from "react";
import { siteConfig } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { MapPin, Clock, MessageCircle, ExternalLink } from "lucide-react";
import { InstagramIcon } from "@/components/ui/Icons";
import { motion } from "framer-motion";

export const LocationSection: React.FC = () => {
  return (
    <section
      id="location"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-border-subtle"
    >
      <SectionHeading
        tag="06 / VISIT US"
        title="Find Your Little Space."
        subtitle="Nestled in Sumedang, West Java. Stop by for your pre-ride caffeine or wind down with an evening cup."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Essential Store Information */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 space-y-6"
        >
          {/* Card: Hours */}
          <div className="p-6 rounded-2xl bg-surface-card border border-border-subtle">
            <div className="flex items-center gap-3 text-cream mb-2">
              <Clock className="w-5 h-5 text-accent-purple" />
              <h3 className="font-sans font-medium text-base">Opening Hours</h3>
            </div>
            <p className="font-mono text-sm text-cream font-semibold">
              {siteConfig.openingHours.days} — {siteConfig.openingHours.time}
            </p>
            <p className="text-xs text-cream-muted mt-1">
              Fresh espresso, bottle refills, and cyclist hospitality all day.
            </p>
          </div>

          {/* Card: Address / Region */}
          <div className="p-6 rounded-2xl bg-surface-card border border-border-subtle">
            <div className="flex items-center gap-3 text-cream mb-2">
              <MapPin className="w-5 h-5 text-accent-green" />
              <h3 className="font-sans font-medium text-base">Location</h3>
            </div>
            <p className="font-mono text-sm text-cream">
              {siteConfig.location.city}, {siteConfig.location.province}, {siteConfig.location.country}
            </p>
            <div className="mt-2.5 inline-block px-2.5 py-1 rounded bg-surface border border-border-light text-[11px] font-mono text-cream-muted">
              📍 [Exact Street Address Placeholder — to be updated by LittleSpace]
            </div>
          </div>

          {/* Card: Direct Communication Channels */}
          <div className="p-6 rounded-2xl bg-surface-card border border-border-subtle">
            <h3 className="font-sans font-medium text-base text-cream mb-4">
              Direct Inquiries
            </h3>
            <div className="space-y-3">
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-lg bg-surface hover:bg-surface-hover border border-border-subtle transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <MessageCircle className="w-4 h-4 text-accent-green" />
                  <span className="font-mono text-xs text-cream">
                    {siteConfig.whatsappFormatted}
                  </span>
                </div>
                <span className="text-[10px] font-mono uppercase text-cream-muted group-hover:text-cream">
                  WhatsApp &rarr;
                </span>
              </a>

              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-lg bg-surface hover:bg-surface-hover border border-border-subtle transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <InstagramIcon className="w-4 h-4 text-accent-purple" />
                  <span className="font-mono text-xs text-cream">
                    {siteConfig.instagramHandle}
                  </span>
                </div>
                <span className="text-[10px] font-mono uppercase text-cream-muted group-hover:text-cream">
                  Instagram &rarr;
                </span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Google Maps & Exterior Visual Placeholder */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 space-y-6"
        >
          {/* Google Maps Interactive / Embed Placeholder */}
          <div className="relative rounded-2xl overflow-hidden border border-border-light bg-surface-card p-6 flex flex-col justify-between aspect-[16/10]">
            {/* Background Grid Pattern */}
            <div 
              className="absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, #FAF8F5 1px, transparent 0)`,
                backgroundSize: "28px 28px"
              }}
            />

            <div className="relative z-10 flex items-start justify-between">
              <div>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest bg-accent-purple/20 text-accent-purple border border-accent-purple/30">
                  Google Maps Embed Area
                </span>
                <h4 className="font-sans text-lg font-medium text-cream mt-3">
                  Sumedang, West Java
                </h4>
                <p className="text-xs text-cream-muted mt-1 max-w-sm">
                  Interactive Google Maps iframe can be safely embedded here once the exact pin coordinates are linked.
                </p>
              </div>

              <MapPin className="w-8 h-8 text-cream-muted/40" />
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-border-subtle">
              <span className="font-mono text-xs text-cream-muted">
                COORDINATES: SUMEDANG REGENCY
              </span>
              <Button
                variant="outline"
                size="sm"
                href={siteConfig.location.googleMapsPlaceholderUrl}
                external
                icon
              >
                Open in Google Maps
              </Button>
            </div>
          </div>

          {/* Exterior Storefront Photography Placeholder */}
          <ImagePlaceholder
            label="STOREFRONT / EXTERIOR FACADE PLACEHOLDER"
            sublabel="Signage, entrance, bicycle racks, and outdoor seating view (16:9)"
            aspectRatio="aspect-[16/9]"
            theme="location"
            badge="STOREFRONT EXTERIOR"
            className="rounded-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};
