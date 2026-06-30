"use client";

import React, { useState } from "react";
import { PRODUCTS, Product } from "@/data/products";
import { useCart } from "@/context/cart-context";
import { Heart, ShoppingBag, Star, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export function BestSellers() {
  const { addItem } = useCart();
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});

  const bestSellers = PRODUCTS.filter((p) => p.isBestSeller);

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

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
    <section id="cakes" className="py-20 md:py-28 bg-cream/20">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-xl space-y-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent-green">
              Crowd Favorites
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground">
              Our Best Sellers
            </h2>
            <p className="text-sm text-paragraph font-light">
              Carefully baked with love and premium ingredients. These are the sweet masterpieces our clients can never get enough of.
            </p>
          </div>
          <a
            href="#menu"
            className="text-xs font-semibold uppercase tracking-wider text-primary underline-animation self-start md:mb-1"
          >
            Browse Full Menu
          </a>
        </div>

        {/* Best Sellers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {bestSellers.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group hover-zoom-container hover-lift flex flex-col justify-between bg-white rounded-xl border border-border-brand/50 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              {/* Product Image */}
              <div className="relative aspect-square w-full bg-cream/30 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="hover-zoom-img object-cover"
                  sizes="(max-width: 768px) 100vw, 30vw"
                />
                
                {/* Hot Label */}
                <div className="absolute top-4 left-4">
                  <span className="bg-primary/95 text-white backdrop-blur-sm border border-primary/20 px-3 py-1.5 rounded text-[10px] font-semibold uppercase tracking-wider shadow-sm flex items-center gap-1">
                    <Sparkles className="h-3 w-3" /> Spotlight
                  </span>
                </div>

                {/* Favorite Toggle button */}
                <button
                  onClick={() => toggleFavorite(product.id)}
                  className="absolute top-4 right-4 rounded-full bg-white/95 backdrop-blur-sm p-2 text-paragraph hover:text-red-500 shadow-sm transition-colors border border-border-brand/60"
                >
                  <Heart
                    className={`h-4.5 w-4.5 transition-all ${
                      favorites[product.id] ? "fill-red-500 text-red-500 scale-110" : "text-paragraph"
                    }`}
                  />
                </button>
              </div>

              {/* Product Info */}
              <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold uppercase tracking-widest text-accent-green">
                      {product.category}
                    </span>
                    <span className="font-semibold text-gold flex items-center gap-0.5">
                      <Star className="h-3 w-3 fill-gold text-gold" /> {product.rating.toFixed(1)}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl text-foreground mt-1 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs text-paragraph leading-relaxed font-light">
                    {product.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border-brand/40">
                  <span className="font-serif text-xl text-foreground font-bold">
                    ₹{product.price}
                  </span>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="rounded-full bg-primary py-3 px-6 text-xs font-semibold uppercase tracking-wider text-white hover:bg-primary/95 transition-all duration-300 shadow-lg shadow-primary/10 flex items-center gap-1.5"
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
export default BestSellers;
