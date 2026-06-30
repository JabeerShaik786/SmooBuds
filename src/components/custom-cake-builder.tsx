"use client";

import React, { useState } from "react";
import { useCart } from "@/context/cart-context";
import { X, Check, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface CustomCakeBuilderProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CustomCakeBuilder({ isOpen, onClose }: CustomCakeBuilderProps) {
  const { addItem } = useCart();

  // Selection states
  const [size, setSize] = useState("1.0kg");
  const [shape, setShape] = useState("Round");
  const [flavor, setFlavor] = useState("Belgian Fudge Chocolate");
  const [frosting, setFrosting] = useState("Silky Ganache");
  const [dietary, setDietary] = useState("Regular");
  const [message, setMessage] = useState("");

  // Base prices
  const sizePrices: Record<string, number> = {
    "0.5kg": 1500,
    "1.0kg": 2500,
    "2.0kg": 4500,
  };

  const flavorAdditions: Record<string, number> = {
    "Madagascar Vanilla": 0,
    "Belgian Fudge Chocolate": 200,
    "Red Velvet Velvet": 150,
    "Sicilian Pistachio": 350,
  };

  const dietaryAdditions: Record<string, number> = {
    Regular: 0,
    Eggless: 100,
  };

  // Compute live price
  const basePrice = sizePrices[size];
  const flavorAdd = flavorAdditions[flavor];
  const dietaryAdd = dietaryAdditions[dietary];
  const totalPrice = basePrice + flavorAdd + dietaryAdd;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const optionsText = `${size} | ${shape} | ${flavor} | ${frosting} | ${dietary}${
      message ? ` | Message: "${message}"` : ""
    }`;

    addItem({
      id: `custom-cake-${Date.now()}`,
      name: `Custom ${shape} Cake`,
      price: totalPrice,
      category: "custom-cakes",
      image: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&q=80&w=600",
      description: `Bespoke custom cake configured to order.`,
      options: optionsText,
    });

    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-end overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-foreground/30 backdrop-blur-sm"
          />

          {/* Builder Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 200 }}
            className="relative z-10 flex h-full w-full max-w-xl flex-col bg-background shadow-2xl border-l border-border-brand"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-border-brand px-6 py-5">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-accent-green flex items-center gap-1">
                  <Sparkles className="h-3 w-3" /> Bespoke Studio
                </span>
                <h3 className="font-serif text-2xl text-foreground mt-0.5">Design Your Cake</h3>
              </div>
              <button
                onClick={onClose}
                className="rounded-full p-2 text-paragraph hover:bg-cream hover:text-foreground transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Customization Form */}
            <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6 space-y-8">
              {/* Size Selection (Apple style buttons) */}
              <div className="space-y-3">
                <label className="text-xs font-semibold uppercase tracking-wider text-paragraph">
                  1. Choose Size
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {Object.keys(sizePrices).map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setSize(s)}
                      className={`flex flex-col items-center justify-center rounded-lg border p-4 transition-all ${
                        size === s
                          ? "border-primary bg-primary/5 text-primary"
                          : "border-border-brand bg-white text-paragraph hover:border-accent-green"
                      }`}
                    >
                      <span className="text-sm font-semibold">{s}</span>
                      <span className="text-xs opacity-80 mt-1">₹{sizePrices[s]} base</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Shape Selection */}
              <div className="space-y-3">
                <label className="text-xs font-semibold uppercase tracking-wider text-paragraph">
                  2. Select Shape
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {["Round", "Heart", "Square"].map((sh) => (
                    <button
                      key={sh}
                      type="button"
                      onClick={() => setShape(sh)}
                      className={`flex items-center justify-center rounded-lg border py-3 transition-all ${
                        shape === sh
                          ? "border-primary bg-primary/5 text-primary font-semibold"
                          : "border-border-brand bg-white text-paragraph hover:border-accent-green"
                      }`}
                    >
                      {sh}
                    </button>
                  ))}
                </div>
              </div>

              {/* Flavor Selection (Aesop style list cards) */}
              <div className="space-y-3">
                <label className="text-xs font-semibold uppercase tracking-wider text-paragraph">
                  3. Select Sponge Flavor
                </label>
                <div className="space-y-2">
                  {Object.entries(flavorAdditions).map(([fl, add]) => (
                    <button
                      key={fl}
                      type="button"
                      onClick={() => setFlavor(fl)}
                      className={`flex w-full items-center justify-between rounded-lg border px-4 py-3 text-left transition-all ${
                        flavor === fl
                          ? "border-primary bg-primary/5 text-primary"
                          : "border-border-brand bg-white text-paragraph hover:border-accent-green"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-4 w-4 items-center justify-center rounded-full border ${
                            flavor === fl ? "border-primary bg-primary" : "border-border-brand"
                          }`}
                        >
                          {flavor === fl && <Check className="h-2.5 w-2.5 text-white" />}
                        </div>
                        <span className="text-sm font-medium">{fl}</span>
                      </div>
                      <span className="text-xs font-semibold">
                        {add === 0 ? "Standard" : `+ ₹${add}`}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Frosting Selection */}
              <div className="space-y-3">
                <label className="text-xs font-semibold uppercase tracking-wider text-paragraph">
                  4. Select Frosting Style
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {["Silky Ganache", "Cream Cheese", "Swiss Buttercream"].map((fr) => (
                    <button
                      key={fr}
                      type="button"
                      onClick={() => setFrosting(fr)}
                      className={`rounded-lg border px-3 py-2 text-center text-xs transition-all ${
                        frosting === fr
                          ? "border-primary bg-primary/5 text-primary font-semibold"
                          : "border-border-brand bg-white text-paragraph hover:border-accent-green"
                      }`}
                    >
                      {fr}
                    </button>
                  ))}
                </div>
              </div>

              {/* Dietary Selection */}
              <div className="space-y-3">
                <label className="text-xs font-semibold uppercase tracking-wider text-paragraph">
                  5. Dietary Preference
                </label>
                <div className="flex gap-4">
                  {Object.entries(dietaryAdditions).map(([diet, add]) => (
                    <button
                      key={diet}
                      type="button"
                      onClick={() => setDietary(diet)}
                      className={`flex-1 rounded-lg border py-3 text-center text-sm transition-all ${
                        dietary === diet
                          ? "border-primary bg-primary/5 text-primary font-semibold"
                          : "border-border-brand bg-white text-paragraph hover:border-accent-green"
                      }`}
                    >
                      {diet} {add > 0 && `(+₹${add})`}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message Input */}
              <div className="space-y-3">
                <label className="text-xs font-semibold uppercase tracking-wider text-paragraph">
                  6. Message on Cake (Optional)
                </label>
                <input
                  type="text"
                  maxLength={50}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="e.g. Happy 25th Birthday Kabir!"
                  className="w-full rounded-lg border border-border-brand bg-white px-4 py-3 text-sm text-foreground placeholder:text-paragraph/40 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
            </form>

            {/* Sticky Action Footer */}
            <div className="border-t border-border-brand bg-cream p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="font-serif text-lg text-foreground">Estimated Total</span>
                <span className="font-serif text-2xl text-primary font-bold">₹{totalPrice}</span>
              </div>
              <button
                type="submit"
                onClick={handleSubmit}
                className="w-full rounded-full bg-primary py-4 text-center text-sm font-semibold tracking-wider text-white uppercase shadow-lg shadow-primary/20 hover:bg-primary/95 transition-all duration-300 transform hover:scale-[1.01]"
              >
                Add Custom Cake to Cart
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
export default CustomCakeBuilder;
