"use client";

import React from "react";
import { PRODUCTS, Product } from "@/data/products";
import { useCart } from "@/context/cart-context";
import { Star, ShoppingBag, Sparkles, Flame, Clock } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export function Specials() {
  const { addItem } = useCart();

  // Pick some specials
  const specials = PRODUCTS.filter(
    (p) => p.isChefSpecial || p.isLimitedTime || p.id === "combo-1"
  );

  const handleAddToCart = (product: Product) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      category: product.category,
      image: product.image,
      description: product.description,
    });
  };

  return (
    <section className="py-20 md:py-28 bg-white border-t border-border-brand/60">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        
        {/* Title */}
        <div className="max-w-xl space-y-2 mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent-green">
            Limited Creations
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground">
            Today's Specials
          </h2>
          <p className="text-sm text-paragraph font-light">
            Special recipes, fresh ingredients, and unique flavor combinations curated by our chefs for today only.
          </p>
        </div>

        {/* Specials Cards (Horizontal Layout - Aesop Inspired) */}
        <div className="space-y-8">
          {specials.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group flex flex-col md:flex-row items-stretch bg-cream/15 rounded-xl border border-border-brand/50 overflow-hidden hover:border-accent-green hover:shadow-md transition-all duration-500"
            >
              {/* Image side */}
              <div className="relative w-full md:w-1/3 aspect-video md:aspect-auto min-h-[220px] overflow-hidden bg-cream/25">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-102 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 30vw"
                />
                
                {/* Special Tag */}
                <div className="absolute top-4 left-4">
                  {product.isChefSpecial ? (
                    <span className="bg-primary text-white border border-primary/20 px-2.5 py-1 rounded text-[10px] font-semibold uppercase tracking-wider shadow-sm flex items-center gap-1">
                      <Flame className="h-2.5 w-2.5" /> Chef Recommendation
                    </span>
                  ) : product.isLimitedTime ? (
                    <span className="bg-gold text-white border border-gold/20 px-2.5 py-1 rounded text-[10px] font-semibold uppercase tracking-wider shadow-sm flex items-center gap-1">
                      <Clock className="h-2.5 w-2.5" /> Limited Time
                    </span>
                  ) : (
                    <span className="bg-accent-green text-white border border-accent-green/20 px-2.5 py-1 rounded text-[10px] font-semibold uppercase tracking-wider shadow-sm flex items-center gap-1">
                      <Sparkles className="h-2.5 w-2.5" /> Special Combo
                    </span>
                  )}
                </div>
              </div>

              {/* Info side */}
              <div className="flex-1 p-6 md:p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-accent-green">
                      {product.category}
                    </span>
                    <span className="text-xs font-semibold text-gold flex items-center gap-0.5">
                      <Star className="h-3 w-3 fill-gold" /> {product.rating.toFixed(1)}
                    </span>
                  </div>
                  
                  <h3 className="font-serif text-2xl md:text-3xl text-foreground group-hover:text-primary transition-colors leading-tight">
                    {product.name}
                  </h3>
                  
                  <p className="text-xs md:text-sm text-paragraph font-light leading-relaxed max-w-2xl">
                    {product.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border-brand/40">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-paragraph/50 block">Special Price</span>
                    <span className="font-serif text-xl md:text-2xl text-foreground font-bold">
                      ₹{product.price}
                    </span>
                  </div>

                  <button
                    onClick={() => handleAddToCart(product)}
                    className="rounded-full bg-primary/5 hover:bg-primary text-primary hover:text-white border border-primary/20 hover:border-primary px-6 py-3 text-xs font-semibold uppercase tracking-wider transition-all duration-300 flex items-center gap-2"
                  >
                    <ShoppingBag className="h-3.5 w-3.5" /> Add Special
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Specials;
