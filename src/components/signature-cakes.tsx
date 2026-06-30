"use client";

import React from "react";
import { motion } from "framer-motion";
import { Leaf, Award, Heart, Sparkles } from "lucide-react";
import Image from "next/image";

export function SignatureCakes() {
  const pillars = [
    {
      icon: <Leaf className="h-5 w-5 text-primary" />,
      title: "Madagascar Vanilla & Belgian Cocoa",
      description: "We use only real Madagascar vanilla bean caviar and 64% Belgian Callebaut chocolates. No artificial syrups or cheap cocoa substitutes.",
    },
    {
      icon: <Award className="h-5 w-5 text-primary" />,
      title: "100% Sourdough & Fresh Butter",
      description: "Our bread and pizzas use a 48-hour slow fermented sourdough starter, and our pastries are laminated with rich farm-churned butter.",
    },
    {
      icon: <Heart className="h-5 w-5 text-primary" />,
      title: "Bespoke Customization",
      description: "Every celebration cake is baked fresh to order and customized to your visual and dietary preferences, including organic eggless variants.",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-white border-t border-border-brand/60">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Editorial layout: Split Screen */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Text/Story Side - 7 Cols */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-accent-green">
                Our Philosophy
              </span>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight">
                Crafted Differently.<br />
                <span className="italic text-primary">Sourced Responsibly.</span>
              </h2>
            </div>
            
            <p className="text-sm md:text-base text-paragraph font-light leading-relaxed max-w-2xl">
              At Smoo Buds, we believe baking is a fine art. We reject the mass-produced, chemically-stabilized methods of commercial bakeries. Instead, we embrace a luxury, editorial approach to food—combining traditional French baking techniques, slow fermentation, and the highest grade global ingredients.
            </p>

            <div className="border-t border-border-brand pt-8 space-y-6">
              {pillars.map((pillar, idx) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-cream/40">
                    {pillar.icon}
                  </div>
                  <div>
                    <h4 className="font-serif text-lg text-foreground font-semibold">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-paragraph leading-relaxed mt-1 font-light">
                      {pillar.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Graphic Side - 5 Cols */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-cream/15 border border-border-brand/40 shadow-xl">
              <Image
                src="/images/cafe_interior.png"
                alt="Inside the Smoo Buds minimalist cafe kitchen"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              
              {/* Floating aesthetic stamp card */}
              <div className="absolute -bottom-6 -left-6 bg-cream border border-border-brand p-6 rounded-lg shadow-xl max-w-xs hidden sm:block">
                <span className="text-[10px] font-bold uppercase tracking-widest text-accent-green block mb-1">
                  Quality Statement
                </span>
                <p className="font-serif text-sm text-foreground italic leading-relaxed">
                  \"We never freeze our dough, and we never use pre-mixes. Every bite is baked fresh the very day you order it.\""
                </p>
                <div className="flex items-center gap-2 mt-4 text-[10px] uppercase tracking-wider font-semibold text-primary">
                  <Sparkles className="h-3 w-3" /> Smoo Buds Bakery
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
export default SignatureCakes;
