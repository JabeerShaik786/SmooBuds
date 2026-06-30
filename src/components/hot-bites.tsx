"use client";

import React from "react";
import { PRODUCTS, Product } from "@/data/products";
import { useCart } from "@/context/cart-context";
import { ShoppingBag, Star, Flame } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export function HotBites() {
  const { addItem } = useCart();
  const hotBites = PRODUCTS.filter((p) => p.category === "hot-bites");

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
    <section id="hot-bites" className="py-20 md:py-28 bg-cream/10 border-t border-border-brand/60">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        
        {/* Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-xl space-y-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent-green">
              Warm Savory Classics
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground">
              Hot Bites & Savoury
            </h2>
            <p className="text-sm text-paragraph font-light">
              Prepared to order using woodfire ovens, home-grown herbs, and sourdough culture. The perfect companion to your hot cup of coffee.
            </p>
          </div>
          <a
            href="#menu"
            className="text-xs font-semibold uppercase tracking-wider text-primary underline-animation self-start md:mb-1"
          >
            Explore Savoury Menu
          </a>
        </div>

        {/* Hot Bites Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hotBites.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group hover-zoom-container hover-lift flex flex-col justify-between bg-white rounded-xl border border-border-brand/50 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              {/* Product Image */}
              <div className="relative aspect-video w-full bg-cream/30 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="hover-zoom-img object-cover"
                  sizes="(max-width: 768px) 100vw, 30vw"
                />
                
                {/* Chef recommendation tag */}
                {item.isChefSpecial && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white border border-primary/20 px-2.5 py-1 rounded text-[10px] font-semibold uppercase tracking-wider shadow-sm flex items-center gap-1">
                      <Flame className="h-2.5 w-2.5" /> Popular
                    </span>
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-accent-green">Savoury</span>
                    <span className="font-semibold text-gold flex items-center gap-0.5">
                      <Star className="h-3 w-3 fill-gold text-gold" /> {item.rating.toFixed(1)}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl text-foreground group-hover:text-primary transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs text-paragraph leading-relaxed font-light line-clamp-2">
                    {item.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border-brand/40">
                  <span className="font-serif text-lg text-foreground font-bold">
                    ₹{item.price}
                  </span>
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="rounded-full bg-primary/5 hover:bg-primary text-primary hover:text-white border border-primary/20 hover:border-primary px-5 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-300 flex items-center gap-1.5"
                  >
                    <ShoppingBag className="h-3.5 w-3.5" /> Add to Order
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
export default HotBites;
