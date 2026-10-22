"use client";

import React, { useState, useEffect } from "react";
import { siteConfig, navigationLinks } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { InstagramIcon } from "@/components/ui/Icons";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const handleLinkClick = (e: React.MouseEvent<HTMLElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
          isScrolled
            ? "bg-background/85 backdrop-blur-md border-b border-border-subtle py-3.5 shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
            : "bg-transparent border-b border-transparent py-5 md:py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, "#hero")}
            className="flex items-center gap-3 group focus-visible:outline-none"
          >
            <div className="w-8 h-8 rounded-full border border-border-light bg-surface flex items-center justify-center group-hover:border-accent-purple transition-colors">
              <span className="font-mono text-xs font-bold text-cream">L</span>
            </div>
            <div className="flex flex-col">
              <span className="font-sans text-sm font-semibold tracking-wider text-cream group-hover:text-cream-pure transition-colors">
                LITTLESPACE<span className="text-accent-purple">.CO</span>
              </span>
              <span className="font-mono text-[9px] uppercase tracking-widest text-cream-muted/70">
                Sumedang 1.0
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navigationLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="font-mono text-xs uppercase tracking-widest text-cream-muted hover:text-cream transition-colors relative py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-accent-purple transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Action Button & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <Button
                variant="outline"
                size="sm"
                href="#location"
                onClick={(e) => handleLinkClick(e, "#location")}
              >
                Visit Us
              </Button>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-lg border border-border-light bg-surface/80 text-cream hover:bg-surface-hover transition-colors focus-visible:outline-none"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-cream" />
              ) : (
                <Menu className="w-5 h-5 text-cream" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Slide-Down Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl lg:hidden flex flex-col justify-between pt-24 pb-8 px-6 overflow-y-auto"
          >
            <div className="space-y-6">
              <p className="font-mono text-[11px] uppercase tracking-widest text-accent-purple border-b border-border-subtle pb-3">
                Navigation
              </p>
              <div className="flex flex-col space-y-4">
                {navigationLinks.map((link, idx) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04 }}
                    className="font-sans text-2xl font-normal text-cream hover:text-accent-purple transition-colors flex items-center justify-between group py-1"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-4 h-4 text-cream-muted/50 group-hover:text-accent-purple transition-colors" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Mobile Drawer Bottom Info */}
            <div className="pt-8 border-t border-border-subtle mt-8 space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-cream-muted">
                <span>HOURS: 07.00 – 22.00</span>
                <span>SUMEDANG, ID</span>
              </div>
              <div className="flex gap-3 pt-2">
                <Button
                  variant="primary"
                  size="md"
                  className="flex-1"
                  href={siteConfig.whatsappUrl}
                  external
                >
                  WhatsApp LittleSpace
                </Button>
                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-border-light bg-surface text-cream rounded flex items-center justify-center hover:border-accent-purple transition-colors"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
