"use client";

import React, { useState } from "react";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import BestSellers from "@/components/best-sellers";
import MenuSection from "@/components/menu-section";
import Specials from "@/components/specials";
import HotBites from "@/components/hot-bites";
import SignatureCakes from "@/components/signature-cakes";
import CustomCakes from "@/components/custom-cakes";
import CafeExperience from "@/components/cafe-experience";
import Testimonials from "@/components/testimonials";
import Instagram from "@/components/instagram";
import VisitUs from "@/components/visit-us";
import Footer from "@/components/footer";
import CartDrawer from "@/components/cart-drawer";
import CustomCakeBuilder from "@/components/custom-cake-builder";

export default function Home() {
  const [isCustomBuilderOpen, setIsCustomBuilderOpen] = useState(false);

  return (
    <main className="relative min-h-screen w-full flex flex-col bg-background overflow-x-hidden">
      {/* Sticky Navigation bar */}
      <Navbar onOpenCustomBuilder={() => setIsCustomBuilderOpen(true)} />

      {/* Main Sections */}
      <Hero />
      <BestSellers />
      
      {/* Coordinator for shop by category & filtration */}
      <MenuSection onOpenCustomBuilder={() => setIsCustomBuilderOpen(true)} />
      
      <Specials />
      <HotBites />
      
      {/* Storytelling & Bespoke CTAs */}
      <SignatureCakes />
      <CustomCakes onOpenCustomBuilder={() => setIsCustomBuilderOpen(true)} />
      
      {/* Experience, Social & Location */}
      <CafeExperience />
      <Testimonials />
      <Instagram />
      <VisitUs />
      
      <Footer />

      {/* Slide-over interactive Cart drawer */}
      <CartDrawer />

      {/* Interactive Custom Cake designer studio modal */}
      <CustomCakeBuilder
        isOpen={isCustomBuilderOpen}
        onClose={() => setIsCustomBuilderOpen(false)}
      />
    </main>
  );
}
