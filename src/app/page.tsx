import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { AboutSection } from "@/components/sections/AboutSection";
import { MenuSection } from "@/components/sections/MenuSection";
import { SpaceSection } from "@/components/sections/SpaceSection";
import { CyclingStory } from "@/components/sections/CyclingStory";
import { GallerySection } from "@/components/sections/GallerySection";
import { LocationSection } from "@/components/sections/LocationSection";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background text-cream selection:bg-accent-purple/30 selection:text-cream-pure">
      {/* Background Architectural Noise/Grain Texture (Subtle) */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-[0.035] z-50 mix-blend-screen"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      {/* Sticky Adaptive Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Brand Philosophy & Story */}
      <AboutSection />

      {/* Curated Menu (Coffee, Non-Coffee, Bottle Package, Food, Snacks) */}
      <MenuSection />

      {/* The Physical Environment & Atmosphere */}
      <SpaceSection />

      {/* Signature Cycling Heritage — Jamal Hibatullah */}
      <CyclingStory />

      {/* Asymmetrical Editorial Gallery */}
      <GallerySection />

      {/* Physical Location, Hours & Google Maps Embed */}
      <LocationSection />

      {/* Emotional Final CTA */}
      <ContactCTA />

      {/* Global Footer */}
      <Footer />
    </main>
  );
}
