"use client";

import React, { useState, useRef } from "react";
import { PRODUCTS, CATEGORIES, Product } from "@/data/products";
import { useCart } from "@/context/cart-context";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, ShoppingBag, Flame, Sparkles, Clock, Star } from "lucide-react";
import Image from "next/image";

export function MenuSection({ onOpenCustomBuilder }: { onOpenCustomBuilder: () => void }) {
  const [activeCategory, setActiveCategory] = useState("cakes");
  const { addItem } = useCart();
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});
  const scrollRef = useRef<HTMLDivElement>(null);

  const toggleFavorite = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleAddToCart = (product: Product, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (product.category === "custom-cakes") {
      onOpenCustomBuilder();
      return;
    }

    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      category: product.category,
      image: product.image,
      description: product.description,
    });
  };

  // Filter products by category
  const filteredProducts = PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <section id="menu" className="py-20 md:py-28 border-t border-border-brand/60 bg-white">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        
        {/* Section Title */}
        <div className="max-w-xl space-y-2 mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent-green">
            Gourmet Collection
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground">
            Shop By Category
          </h2>
          <p className="text-sm text-paragraph font-light">
            Indulge in our range of freshly baked cakes, luxurious pastries, cookies, and savory hot bites curated by our master bakers.
          </p>
        </div>

        {/* Circular Category Selector (Bakingo-inspired, smooth touch-scroll) */}
        <div className="relative mb-16 select-none">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x cursor-grab active:cursor-grabbing"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className="flex flex-col items-center gap-3 flex-shrink-0 snap-start outline-none group relative"
                >
                  <div className="relative flex h-20 w-20 items-center justify-center rounded-full">
                    {/* Sliding active category highlight bubble */}
                    {isActive && (
                      <motion.div
                        layoutId="activeCategoryBg"
                        className="absolute inset-0 rounded-full border border-primary bg-primary/5 shadow-md shadow-primary/5"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    {/* Inactive state wrapper border */}
                    {!isActive && (
                      <div className="absolute inset-0 rounded-full border border-border-brand bg-cream/10 group-hover:border-accent-green group-hover:bg-cream/30 transition-all duration-300" />
                    )}
                    <span className="relative z-10 text-3xl transition-transform duration-300 group-hover:scale-110">{cat.icon}</span>
                  </div>
                  <span
                    className={`text-xs uppercase tracking-wider font-semibold transition-colors duration-300 ${
                      isActive ? "text-primary font-bold" : "text-paragraph/80"
                    }`}
                  >
                    {cat.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Filtered Products Grid */}
        <div className="min-h-[400px] relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 gap-y-12 gap-x-8 sm:grid-cols-2 lg:grid-cols-3"
            >
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="group hover-zoom-container cursor-pointer flex flex-col justify-between h-full bg-background rounded-xl overflow-hidden border border-border-brand/40 hover:border-border-brand hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative aspect-square w-full bg-cream/30 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="hover-zoom-img object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {/* Category badging / special attributes */}
                    <div className="absolute top-4 left-4 flex flex-col gap-1.5">
                      {product.tags?.map((tag) => (
                        <span
                          key={tag}
                          className="bg-white/95 backdrop-blur-sm border border-border-brand/80 px-2.5 py-1 rounded text-[10px] font-semibold uppercase tracking-wider text-primary shadow-sm flex items-center gap-1"
                        >
                          <Sparkles className="h-2.5 w-2.5" /> {tag}
                        </span>
                      ))}
                      {product.isChefSpecial && (
                        <span className="bg-primary text-white px-2.5 py-1 rounded text-[10px] font-semibold uppercase tracking-wider shadow-sm flex items-center gap-1">
                          <Flame className="h-2.5 w-2.5" /> Chef Special
                        </span>
                      )}
                      {product.isLimitedTime && (
                        <span className="bg-gold text-white px-2.5 py-1 rounded text-[10px] font-semibold uppercase tracking-wider shadow-sm flex items-center gap-1">
                          <Clock className="h-2.5 w-2.5" /> Limited Edition
                        </span>
                      )}
                    </div>

                    {/* Favorite Toggle button */}
                    <button
                      onClick={(e) => toggleFavorite(product.id, e)}
                      className="absolute top-4 right-4 rounded-full bg-white/95 backdrop-blur-sm p-2 text-paragraph hover:text-red-500 shadow-sm transition-colors border border-border-brand/60"
                    >
                      <Heart
                        className={`h-4.5 w-4.5 transition-all ${
                          favorites[product.id] ? "fill-red-500 text-red-500 scale-110" : "text-paragraph"
                        }`}
                      />
                    </button>
                  </div>

                  {/* Info & Buy Details */}
                  <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-accent-green">
                          {product.category}
                        </span>
                        <span className="text-xs font-semibold text-gold flex items-center gap-0.5">
                          <Star className="h-3 w-3 fill-gold" /> {product.rating.toFixed(1)}
                        </span>
                      </div>
                      <h3 className="font-serif text-xl text-foreground group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-xs text-paragraph leading-relaxed font-light line-clamp-2">
                        {product.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-border-brand/40">
                      <span className="font-serif text-lg text-foreground font-bold">
                        ₹{product.price}
                      </span>
                      <button
                        onClick={(e) => handleAddToCart(product, e)}
                        className="rounded-full bg-primary/5 hover:bg-primary text-primary hover:text-white px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all duration-300 flex items-center gap-1.5 border border-primary/20 hover:border-primary shadow-sm"
                      >
                        <ShoppingBag className="h-3.5 w-3.5" />
                        {product.category === "custom-cakes" ? "Design" : "Add"}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
export default MenuSection;
