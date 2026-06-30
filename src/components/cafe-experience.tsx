"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export function CafeExperience() {
  const images = [
    {
      src: "/SmooBuds/images/cafe_interior.png",
      alt: "Minimalist oak wood and concrete interior of Smoo Buds Cafe",
      aspect: "aspect-[4/5]",
    },
    {
      src: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=500",
      alt: "Freshly poured caffe latte art",
      aspect: "aspect-square",
    },
    {
      src: "/SmooBuds/images/garlic_bread.png",
      alt: "Confit garlic and rosemary bread pulled fresh from the woodfire oven",
      aspect: "aspect-[3/4]",
    },
    {
      src: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=500",
      alt: "Warm golden croissants sitting on baker parchment",
      aspect: "aspect-[3/4]",
    },
    {
      src: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&q=80&w=500",
      alt: "Friends sharing dessert and laughs at a wood table",
      aspect: "aspect-video",
    },
    {
      src: "/SmooBuds/images/sourdough_pizza.png",
      alt: "Fresh wood-fired sourdough pizza ready to slice",
      aspect: "aspect-square",
    },
    {
      src: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&q=80&w=500",
      alt: "Belgian chocolate cake and double fudge brownie dessert platter",
      aspect: "aspect-square",
    },
    {
      src: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=500",
      alt: "Barista preparing a refreshing cucumber mint mojito under ambient light",
      aspect: "aspect-[4/5]",
    },
    {
      src: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&q=80&w=500",
      alt: "Gourmet brown butter chocolate chunk cookies on a cooling rack",
      aspect: "aspect-[3/2]",
    },
    {
      src: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=500",
      alt: "Gourmet double cheddar brioche burger plated with confit dip",
      aspect: "aspect-[4/3]",
    },
  ];

  return (
    <section id="gallery" className="py-20 md:py-28 bg-cream/20 border-t border-border-brand/60">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-xl space-y-2 mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent-green">
            The Ambiance
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground">
            The Café Experience
          </h2>
          <p className="text-sm text-paragraph font-light">
            Step into our sanctuary of warm wood, soft sunlight, and freshly pulled coffee. A space designed to let you unwind, gather, and celebrate.
          </p>
        </div>

        {/* Masonry Columns - Mobile 2-cols, Desktop 3-cols - 100% gap-free */}
        <div className="columns-2 md:columns-3 gap-4 md:gap-6 space-y-4 md:space-y-6">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: (idx % 3) * 0.1 }}
              className={`break-inside-avoid relative overflow-hidden rounded-xl border border-border-brand/40 bg-white shadow-sm hover:shadow-md transition-all duration-500 group ${img.aspect}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-103 transition-transform duration-700 brightness-[0.97]"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              {/* Soft overlay on hover with text reveal */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 md:p-6">
                <p className="text-[10px] md:text-xs font-medium text-white/90 tracking-wide leading-relaxed font-sans">
                  {img.alt}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default CafeExperience;
