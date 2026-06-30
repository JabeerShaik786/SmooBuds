"use client";

import React, { useState } from "react";
import { Instagram, Facebook, Twitter, ArrowRight, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail("");
      }, 2000);
    }
  };

  return (
    <footer className="bg-primary text-cream py-16 md:py-24 border-t border-primary/20">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 pb-16 border-b border-white/10">
          
          {/* Logo & Blurb - 4 columns */}
          <div className="md:col-span-4 space-y-6">
            <svg
              className="h-14 w-auto text-cream fill-current"
              viewBox="0 0 160 80"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Handwritten style "Smoo" */}
              <text
                x="15"
                y="35"
                fontFamily="'DM Serif Display', Georgia, serif"
                fontSize="38"
                fontWeight="normal"
                fontStyle="italic"
                className="fill-cream"
              >
                Smoo
              </text>
              {/* Bold sans "BUDS" */}
              <text
                x="45"
                y="58"
                fontFamily="'Inter', sans-serif"
                fontSize="22"
                fontWeight="800"
                letterSpacing="4"
                className="fill-cream"
              >
                BUDS
              </text>
              {/* Tagline "Perfectly Baked" */}
              <text
                x="15"
                y="72"
                fontFamily="'Inter', sans-serif"
                fontSize="8"
                fontWeight="500"
                letterSpacing="1"
                className="fill-accent-green"
              >
                PERFECTLY BAKED
              </text>
              {/* Leaf branch detail */}
              <path
                d="M 125 15 C 130 18, 138 18, 142 15 C 136 22, 128 22, 125 15 M 128 18 C 131 22, 137 23, 140 21 M 125 15 C 120 18, 115 22, 118 24 C 121 21, 125 18, 125 15"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
                className="text-accent-green"
              />
              <circle cx="125" cy="15" r="1.5" className="fill-accent-green" />
            </svg>
            <p className="text-xs text-cream/75 leading-relaxed font-light max-w-xs">
              A premium, luxury digital bakery & café experience. Delivering freshly baked, handcrafted treats and comforting café classics straight to your doorstep.
            </p>
            {/* Socials */}
            <div className="flex gap-4 pt-2">
              <a
                href="#"
                className="p-2 rounded-full border border-white/10 hover:border-white/40 hover:bg-white/5 transition-all text-cream/80 hover:text-cream"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full border border-white/10 hover:border-white/40 hover:bg-white/5 transition-all text-cream/80 hover:text-cream"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full border border-white/10 hover:border-white/40 hover:bg-white/5 transition-all text-cream/80 hover:text-cream"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Links Grid - 4 columns */}
          <div className="md:col-span-4 grid grid-cols-2 gap-4">
            {/* Column 1 */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-accent-green">
                Navigation
              </h4>
              <ul className="space-y-2 text-xs font-light text-cream/85">
                <li><a href="#home" className="hover:text-cream transition-colors">Home</a></li>
                <li><a href="#menu" className="hover:text-cream transition-colors">Café Menu</a></li>
                <li><a href="#about" className="hover:text-cream transition-colors">Our Story</a></li>
                <li><a href="#gallery" className="hover:text-cream transition-colors">Gallery</a></li>
                <li><a href="#contact" className="hover:text-cream transition-colors">Location</a></li>
              </ul>
            </div>
            {/* Column 2 */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-accent-green">
                Baking Studio
              </h4>
              <ul className="space-y-2 text-xs font-light text-cream/85">
                <li><a href="#cakes" className="hover:text-cream transition-colors">Birthday Cakes</a></li>
                <li><a href="#menu" className="hover:text-cream transition-colors">Belgian Brownies</a></li>
                <li><a href="#hot-bites" className="hover:text-cream transition-colors">Sourdough Bites</a></li>
                <li><a href="#menu" className="hover:text-cream transition-colors">Kyoto Coffee</a></li>
              </ul>
            </div>
          </div>

          {/* Newsletter - 4 columns */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-accent-green">
              Join the Gazette
            </h4>
            <p className="text-xs text-cream/75 font-light leading-relaxed">
              Subscribe to receive recipes, specialty cake launches, and invitation-only café events.
            </p>
            
            <form onSubmit={handleSubscribe} className="relative flex items-center mt-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full bg-white/5 border border-white/10 rounded-full px-5 py-3 text-xs text-cream placeholder:text-cream/40 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all pr-12"
              />
              <button
                type="submit"
                className="absolute right-1.5 p-2 rounded-full bg-cream text-primary hover:bg-white transition-colors"
                aria-label="Subscribe"
              >
                {subscribed ? (
                  <Check className="h-3.5 w-3.5" />
                ) : (
                  <ArrowRight className="h-3.5 w-3.5" />
                )}
              </button>
            </form>
            
            <AnimatePresence>
              {subscribed && (
                <motion.p
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-[10px] text-accent-green font-semibold"
                >
                  Subscription confirmed. Welcome.
                </motion.p>
              )}
            </AnimatePresence>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 text-[10px] text-cream/60 font-light gap-4">
          <p>© {new Date().getFullYear()} Smoo Buds. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-cream transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-cream transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
export default Footer;
