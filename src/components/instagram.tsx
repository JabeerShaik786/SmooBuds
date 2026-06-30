"use client";

import React from "react";
import { Instagram as InstaIcon } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export function Instagram() {
  const posts = [
    {
      src: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=400",
      likes: "1.2k",
    },
    {
      src: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=400",
      likes: "940",
    },
    {
      src: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&q=80&w=400",
      likes: "1.8k",
    },
    {
      src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=400",
      likes: "820",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-cream/10 border-t border-border-brand/60">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-xl space-y-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent-green">
              Digital Diary
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground">
              Follow Our Journey
            </h2>
            <p className="text-sm text-paragraph font-light">
              Get behind-the-scenes glimpses of daily bakes, recipes, and cozy café moments. Tag us with <strong className="text-primary">#SmooBuds</strong>.
            </p>
          </div>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white hover:bg-primary/95 transition-all duration-300 shadow-md shadow-primary/10 self-start md:mb-1"
          >
            <InstaIcon className="h-4 w-4" /> Follow @smoobuds
          </a>
        </div>

        {/* Post Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post, idx) => (
            <motion.a
              key={idx}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative aspect-square overflow-hidden rounded-xl border border-border-brand/40 bg-white shadow-sm"
            >
              <Image
                src={post.src}
                alt="Smoo Buds instagram story post"
                fill
                className="object-cover group-hover:scale-103 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              {/* Instagram Hover Icon overlay */}
              <div className="absolute inset-0 bg-primary/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center text-white">
                <InstaIcon className="h-8 w-8 mb-2" />
                <span className="text-xs font-semibold uppercase tracking-widest">{post.likes} Likes</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Instagram;
