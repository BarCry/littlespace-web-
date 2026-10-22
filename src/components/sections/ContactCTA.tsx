"use client";

import React from "react";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import { InstagramIcon } from "@/components/ui/Icons";

export const ContactCTA: React.FC = () => {
  return (
    <section
      id="contact"
      className="relative py-28 sm:py-36 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-border-subtle overflow-hidden"
    >
      <div className="relative rounded-3xl overflow-hidden bg-surface-card border border-border-light p-8 sm:p-12 md:p-16 text-center">
        {/* Subtle Background Glows */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 right-1/4 w-80 h-80 bg-accent-green/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
          <span className="inline-block px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-widest text-accent-purple bg-surface border border-border-light">
            Welcome Anytime
          </span>

          <h2 className="editorial-subtitle font-sans font-medium text-cream uppercase tracking-tight text-balance">
            See You At LittleSpace.
          </h2>

          <p className="text-base sm:text-xl text-cream-muted font-normal max-w-xl mx-auto leading-relaxed text-balance">
            Come for the coffee. Stay for the space. Take a break from the everyday rush.
          </p>

          {/* Action CTAs */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Button
              variant="primary"
              size="lg"
              href="#location"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#location")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Visit Us in Sumedang
            </Button>

            <Button
              variant="secondary"
              size="lg"
              href={siteConfig.whatsappUrl}
              external
            >
              <MessageCircle className="w-4 h-4 mr-2 text-accent-green" />
              WhatsApp
            </Button>

            <Button
              variant="secondary"
              size="lg"
              href={siteConfig.instagramUrl}
              external
            >
              <InstagramIcon className="w-4 h-4 mr-2 text-accent-purple" />
              Instagram
            </Button>
          </div>

          {/* Bottom Atmosphere Visual Placeholder */}
          <div className="pt-10 max-w-xl mx-auto">
            <ImagePlaceholder
              label="FINAL ATMOSPHERIC SHOT: LITTLESPACE EVENING LIGHT"
              sublabel="Warm cozy interior lights glowing in the dusk, peaceful closing atmosphere (21:9)"
              aspectRatio="aspect-[21/9]"
              theme="interior"
              badge="CLOSING AMBIENCE • 21:9"
              className="rounded-xl border-border-subtle"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
