"use client";

import React, { useState, useEffect, useRef } from "react";
import { HERO_SLIDES, HeroSlide } from "@/data/hero-slides";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 1 = next, -1 = prev
  const [isHovered, setIsHovered] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  // Handle slide change pagination
  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = HERO_SLIDES.length - 1;
      if (nextIndex >= HERO_SLIDES.length) nextIndex = 0;
      return nextIndex;
    });
  };

  const setSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") paginate(-1);
      if (e.key === "ArrowRight") paginate(1);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex]);

  // Autoplay with pause on hover
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      paginate(1);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, isHovered]);

  // Framer Motion Animation Variants
  const sliderVariants = {
    enter: (dir: number) => ({
      opacity: 0,
      x: shouldReduceMotion ? 0 : dir > 0 ? 30 : -30,
    }),
    center: {
      opacity: 1,
      x: 0,
    },
    exit: (dir: number) => ({
      opacity: 0,
      x: shouldReduceMotion ? 0 : dir < 0 ? 30 : -30,
    }),
  };

  const textVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: custom * 0.15,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    }),
  };

  // Swipe sensitivity calculation
  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const activeSlide = HERO_SLIDES[currentIndex];

  return (
    <section
      id="home"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full h-[70vh] sm:h-[80vh] lg:h-screen min-h-[500px] overflow-hidden bg-cream/15"
    >
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={sliderVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.4}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);
            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
          className="absolute inset-0 w-full h-full flex items-center cursor-grab active:cursor-grabbing select-none"
        >
          {/* Background image component (LCP optimized) */}
          <div className="absolute inset-0 z-0">
            <Image
              src={activeSlide.image}
              alt={activeSlide.heading}
              fill
              priority={currentIndex === 0} // Priority load first slide for LCP optimization
              loading={currentIndex === 0 ? undefined : "lazy"} // Lazy load remaining slides
              className="object-cover object-center scale-[1.01] brightness-[0.9] contrast-[1.01]"
              sizes="100vw"
            />
            {/* Soft dark gradient vignette to provide cinematic backdrop and 100% contrast for white text */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent md:bg-gradient-to-t md:from-black/90 md:via-black/35 md:to-transparent" />
          </div>

          {/* Slide Text & Button content */}
          <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 w-full flex flex-col items-start justify-center pt-16">
            <div className="max-w-2xl space-y-6">
              
              {/* Category / Badge block */}
              <motion.div
                custom={1}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                className="flex items-center gap-3"
              >
                <span className="text-xs font-semibold uppercase tracking-widest text-accent-green">
                  {activeSlide.category}
                </span>
                {activeSlide.badge && (
                  <span className="bg-primary text-white border border-primary/20 px-2 py-0.5 rounded-[4px] text-[9px] font-semibold uppercase tracking-wider shadow-sm flex items-center gap-1">
                    <Sparkles className="h-2 w-2" /> {activeSlide.badge}
                  </span>
                )}
              </motion.div>

              {/* Slide Headline */}
              <motion.h1
                custom={2}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                className="font-serif text-4xl sm:text-6xl lg:text-7xl text-white leading-[1.05] tracking-tight"
              >
                {activeSlide.heading}
              </motion.h1>

              {/* Slide Subheading */}
              <motion.p
                custom={3}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                className="text-sm sm:text-base lg:text-lg text-white/90 leading-relaxed font-light max-w-xl"
              >
                {activeSlide.subheading}
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                custom={4}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-wrap gap-4 pt-2"
              >
                <a
                  href={activeSlide.ctaLink}
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary hover:bg-[#004943] px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-white transition-all duration-300 shadow-lg shadow-primary/10"
                >
                  {activeSlide.ctaText}
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
                
                {activeSlide.secondaryCtaText && activeSlide.secondaryCtaLink && (
                  <a
                    href={activeSlide.secondaryCtaLink}
                    className="inline-flex items-center justify-center rounded-full border border-white/20 hover:border-white/50 bg-white/10 hover:bg-white/20 backdrop-blur-sm px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-white transition-all duration-300"
                  >
                    {activeSlide.secondaryCtaText}
                  </a>
                )}
              </motion.div>

            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Manual Chevron Controls (Glassmorphism) */}
      <div className="absolute bottom-10 right-6 md:right-12 z-20 flex gap-3">
        <button
          onClick={() => paginate(-1)}
          className="p-3 rounded-full border border-white/10 bg-white/10 hover:bg-white text-white hover:text-primary backdrop-blur-md shadow-sm hover:shadow transition-all duration-300"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={() => paginate(1)}
          className="p-3 rounded-full border border-white/10 bg-white/10 hover:bg-white text-white hover:text-primary backdrop-blur-md shadow-sm hover:shadow transition-all duration-300"
          aria-label="Next Slide"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Dot Indicators */}
      <div className="absolute bottom-12 left-6 md:left-12 z-20 flex gap-2">
        {HERO_SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setSlide(idx)}
            className="group relative p-2 focus:outline-none"
            aria-label={`Go to slide ${idx + 1}`}
          >
            <div
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentIndex === idx
                  ? "w-8 bg-white"
                  : "w-2 bg-white/35 group-hover:bg-white/70"
              }`}
            />
          </button>
        ))}
      </div>
    </section>
  );
}
export default Hero;
