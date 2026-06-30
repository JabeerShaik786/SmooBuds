"use client";

import React from "react";
import { Star, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export function Testimonials() {
  const reviews = [
    {
      quote: "The Madagascar vanilla cake was unbelievably light and flavorful. Not overly sweet, just pure bean caviar aroma. An absolute masterpiece!",
      author: "Kabir Shaik",
      location: "Ramanayyapeta, Kakinada",
      rating: 5,
    },
    {
      quote: "Easily the best sourdough pizza in the region. The crust has that perfect woodfire char and chewy bite. And the gold leaf brownie is pure luxury.",
      author: "Ananya Rao",
      location: "Bank Colony, Kakinada",
      rating: 5,
    },
    {
      quote: "Aesthetic interiors, great slow-drip cold coffee, and warm service. Smoo Buds is a gorgeous spot to read a book and enjoy a raspberry tart.",
      author: "Dr. Suresh K.",
      location: "Pithapuram Road",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white border-t border-border-brand/60">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Title */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16">
          <div className="max-w-xl space-y-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent-green">
              Client Feedback
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground">
              What Our Guests Say
            </h2>
          </div>

          {/* Google rating summary */}
          <div className="flex items-center gap-3 bg-cream/25 border border-border-brand/60 p-4 rounded-lg self-start">
            <div className="flex flex-col">
              <div className="flex items-center gap-0.5 text-gold">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-foreground mt-1">
                4.9/5 • 420+ Google Reviews
              </span>
            </div>
            <ShieldCheck className="h-8 w-8 text-accent-green" />
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <motion.div
              key={rev.author}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="p-8 rounded-xl border border-border-brand/50 bg-cream/5 flex flex-col justify-between space-y-6 hover:border-accent-green hover:shadow-sm transition-all duration-300"
            >
              {/* Rating stars */}
              <div className="flex items-center gap-0.5 text-gold">
                {[...Array(rev.rating)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />
                ))}
              </div>

              {/* Quote */}
              <p className="font-serif text-lg text-foreground italic leading-relaxed font-light">
                \"{rev.quote}\"
              </p>

              {/* Author info */}
              <div className="flex items-center gap-3 pt-4 border-t border-border-brand/40">
                <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center text-sm font-semibold text-primary font-serif">
                  {rev.author[0]}
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground">
                    {rev.author}
                  </h4>
                  <span className="text-[10px] text-paragraph block">
                    {rev.location}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Testimonials;
