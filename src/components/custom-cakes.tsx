"use client";

import React from "react";
import { Sparkles, Calendar, Heart, ShieldAlert, Award } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export function CustomCakes({ onOpenCustomBuilder }: { onOpenCustomBuilder: () => void }) {
  const customCategories = [
    {
      title: "Bespoke Weddings",
      description: "Multi-tiered elegant cakes adorned with gold leaf, fresh organic florals, and customized sponge and cream profiles.",
      image: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&q=80&w=600",
    },
    {
      title: "Artisanal Birthdays",
      description: "Minimalist pastel aesthetics, hand-painted buttercream texturing, and custom fondant models representing personal stories.",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=600",
    },
    {
      title: "Theme & Anniversary",
      description: "Sophisticated modern designs for brand launches, golden anniversaries, and abstract geometry themes.",
      image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&q=80&w=600",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-cream/20 border-t border-border-brand/60">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        
        {/* Split Section: Text Left, Cards Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Text Column - 4 cols */}
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-accent-green">
                Custom Orders
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-tight">
                Bespoke Creations
              </h2>
            </div>
            
            <p className="text-sm text-paragraph leading-relaxed font-light">
              Make your special occasions unforgettable. From wedding masterpieces to modern birthday designs, our culinary artists work with you to draft, bake, and decorate the cake of your dreams.
            </p>

            <div className="pt-4">
              <button
                onClick={onOpenCustomBuilder}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-xs font-semibold uppercase tracking-wider text-white hover:bg-primary/95 transition-all duration-300 shadow-lg shadow-primary/10"
              >
                <Sparkles className="h-4 w-4" /> Design Your Cake
              </button>
            </div>
          </div>

          {/* Right Cards Column - 8 cols */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {customCategories.map((cat, idx) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="group hover-zoom-container hover-lift bg-white rounded-xl border border-border-brand/50 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div className="relative aspect-[4/5] w-full bg-cream/30 overflow-hidden">
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    className="hover-zoom-img object-cover"
                    sizes="(max-width: 640px) 100vw, 25vw"
                  />
                </div>
                <div className="p-5 space-y-2 flex-grow flex flex-col justify-between">
                  <div className="space-y-1">
                    <h3 className="font-serif text-lg text-foreground group-hover:text-primary transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-[11px] text-paragraph leading-relaxed font-light">
                      {cat.description}
                    </p>
                  </div>
                  <button
                    onClick={onOpenCustomBuilder}
                    className="text-[10px] font-bold uppercase tracking-wider text-primary hover:text-primary/80 transition-colors pt-3 border-t border-border-brand/40 text-left"
                  >
                    Customize Now →
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
export default CustomCakes;
