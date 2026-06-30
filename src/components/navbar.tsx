"use client";

import React, { useState, useEffect } from "react";
import { useCart } from "@/context/cart-context";
import { ShoppingBag, Menu as MenuIcon, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar({ onOpenCustomBuilder }: { onOpenCustomBuilder: () => void }) {
  const { cartCount, setIsCartOpen } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll handler for navbar glass effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Menu", href: "#menu" },
    { name: "Cakes", href: "#cakes" },
    { name: "Hot Bites", href: "#hot-bites" },
    { name: "About", href: "#about" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? "glass-effect py-3 shadow-sm"
            : "bg-transparent py-5"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 md:px-12 flex items-center justify-between">
          {/* Brand Logo - Recreated SVG matching the upload */}
          <a href="#home" className="flex items-center gap-1 group">
            <svg
              className="h-12 w-auto text-primary fill-current"
              viewBox="0 0 160 80"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Handwritten style "Smoo" */}
              <text
                x="15"
                y="35"
                fontFamily="'DM Serif Display', Georgia, serif"
                fontSize="38"
                fontWeight="normal"
                fontStyle="italic"
                className="fill-primary"
              >
                Smoo
              </text>
              {/* Bold sans "BUDS" */}
              <text
                x="45"
                y="58"
                fontFamily="'Inter', sans-serif"
                fontSize="22"
                fontWeight="800"
                letterSpacing="4"
                className="fill-primary"
              >
                BUDS
              </text>
              {/* Tagline "Perfectly Baked" */}
              <text
                x="15"
                y="72"
                fontFamily="'Inter', sans-serif"
                fontSize="8"
                fontWeight="500"
                letterSpacing="1"
                className="fill-accent-green"
              >
                PERFECTLY BAKED
              </text>
              {/* Leaf branch detail on top right */}
              <path
                d="M 125 15 C 130 18, 138 18, 142 15 C 136 22, 128 22, 125 15 M 128 18 C 131 22, 137 23, 140 21 M 125 15 C 120 18, 115 22, 118 24 C 121 21, 125 18, 125 15"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
                className="text-accent-green"
              />
              <circle cx="125" cy="15" r="1.5" className="fill-accent-green" />
            </svg>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-semibold uppercase tracking-wider text-foreground/80 hover:text-primary transition-colors underline-animation"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions: Cart, Order Now, Mobile Toggle */}
          <div className="flex items-center gap-4">
            {/* Custom Cake Button (Outlined primary green style) */}
            <button
              onClick={onOpenCustomBuilder}
              className="hidden sm:inline-flex text-xs font-semibold uppercase tracking-wider text-primary border border-primary/50 hover:bg-primary hover:text-white px-4 py-2.5 rounded-full transition-all duration-300"
            >
              Design A Cake
            </button>

            {/* Order Now Button */}
            <a
              href="#menu"
              className="hidden md:inline-flex text-xs font-semibold uppercase tracking-wider text-white bg-primary hover:bg-primary/95 px-6 py-2.5 rounded-full transition-all duration-300 shadow-md shadow-primary/10"
            >
              Order Now
            </a>

            {/* Shopping Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 rounded-full bg-cream/60 hover:bg-cream text-foreground transition-all duration-300 border border-border-brand/40"
              aria-label="Open basket"
            >
              <ShoppingBag className="h-4.5 w-4.5" />
              {cartCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 bg-gold text-white text-[10px] font-bold h-5 w-5 rounded-full flex items-center justify-center border border-background shadow-sm"
                >
                  {cartCount}
                </motion.span>
              )}
            </button>

            {/* Mobile Menu Icon */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-foreground hover:bg-cream/40 rounded-full transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Slidedown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[70px] z-30 lg:hidden glass-effect shadow-lg border-t border-border-brand/40 px-6 py-8 flex flex-col gap-6"
          >
            <div className="flex flex-col gap-4 text-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="text-sm font-semibold uppercase tracking-wider text-foreground hover:text-primary transition-colors py-2 border-b border-border-brand/30 last:border-0"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-3 mt-2">
              <button
                onClick={() => {
                  handleLinkClick();
                  onOpenCustomBuilder();
                }}
                className="w-full text-center text-xs font-semibold uppercase tracking-wider text-primary border border-primary/50 py-3 rounded-full hover:bg-primary hover:text-white transition-all duration-300"
              >
                Design A Cake
              </button>
              <a
                href="#menu"
                onClick={handleLinkClick}
                className="w-full text-center text-xs font-semibold uppercase tracking-wider text-white bg-primary py-3 rounded-full"
              >
                Order Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
export default Navbar;
