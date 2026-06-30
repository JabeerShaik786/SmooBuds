"use client";

import React, { useState } from "react";
import { useCart } from "@/context/cart-context";
import { X, Plus, Minus, Trash2, ShoppingBag, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export function CartDrawer() {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeItem,
    cartTotal,
    clearCart,
  } = useCart();

  const [checkoutSuccess, setCheckoutSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleCheckout = () => {
    setLoading(true);
    // Simulate API delay
    setTimeout(() => {
      setLoading(false);
      setCheckoutSuccess(true);
    }, 1500);
  };

  const handleCloseSuccess = () => {
    setCheckoutSuccess(false);
    clearCart();
    setIsCartOpen(false);
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-end overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => !checkoutSuccess && setIsCartOpen(false)}
            className="absolute inset-0 bg-foreground/30 backdrop-blur-sm"
          />

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 200 }}
            className="relative z-10 flex h-full w-full max-w-md flex-col bg-background shadow-2xl border-l border-border-brand"
          >
            {!checkoutSuccess ? (
              <>
                {/* Header */}
                <div className="flex items-center justify-between border-b border-border-brand px-6 py-5">
                  <div className="flex items-center gap-2">
                    <ShoppingBag className="h-5 w-5 text-primary" />
                    <h3 className="font-serif text-xl text-foreground">Your Order</h3>
                  </div>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="rounded-full p-2 text-paragraph hover:bg-cream hover:text-foreground transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Items List */}
                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                  {cart.length === 0 ? (
                    <div className="flex h-full flex-col items-center justify-center text-center space-y-3">
                      <div className="rounded-full bg-cream p-4 text-paragraph/60">
                        <ShoppingBag className="h-8 w-8" />
                      </div>
                      <p className="font-serif text-lg text-foreground">Your basket is empty</p>
                      <p className="text-sm text-paragraph max-w-[240px]">
                        Explore our menu and add freshly baked treats to your order.
                      </p>
                      <button
                        onClick={() => setIsCartOpen(false)}
                        className="text-xs font-semibold uppercase tracking-wider text-primary underline-animation mt-2"
                      >
                        Continue Browsing
                      </button>
                    </div>
                  ) : (
                    cart.map((item) => (
                      <div
                        key={item.id}
                        className="flex gap-4 border-b border-border-brand/60 pb-4 last:border-0 last:pb-0"
                      >
                        <div className="relative h-16 w-16 overflow-hidden rounded bg-cream flex-shrink-0">
                          {item.image.startsWith("http") || item.image.startsWith("/") ? (
                            <Image
                              src={item.image}
                              alt={item.name}
                              fill
                              className="object-cover"
                              sizes="64px"
                            />
                          ) : (
                            <div className="w-full h-full bg-accent-green/20 flex items-center justify-center text-xs font-serif text-primary">
                              {item.name[0]}
                            </div>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-medium text-foreground truncate">
                            {item.name}
                          </h4>
                          {item.options && (
                            <p className="text-[11px] text-paragraph truncate mt-0.5">
                              {item.options}
                            </p>
                          )}
                          <div className="flex items-center justify-between mt-2">
                            {/* Quantity Controls */}
                            <div className="flex items-center border border-border-brand rounded-full bg-white">
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="p-1 hover:bg-cream text-paragraph rounded-full"
                              >
                                <Minus className="h-3 w-3" />
                              </button>
                              <span className="text-xs font-semibold px-2 text-foreground">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="p-1 hover:bg-cream text-paragraph rounded-full"
                              >
                                <Plus className="h-3 w-3" />
                              </button>
                            </div>
                            <span className="text-sm font-serif text-foreground font-semibold">
                              ₹{item.price * item.quantity}
                            </span>
                          </div>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-paragraph/40 hover:text-red-500 self-start p-1"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    ))
                  )}
                </div>

                {/* Footer Subtotal & Action */}
                {cart.length > 0 && (
                  <div className="border-t border-border-brand bg-white p-6">
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm text-paragraph">
                        <span>Subtotal</span>
                        <span>₹{cartTotal}</span>
                      </div>
                      <div className="flex justify-between text-sm text-paragraph">
                        <span>Delivery</span>
                        <span className="text-accent-green font-semibold">Free</span>
                      </div>
                      <div className="border-t border-border-brand my-2" />
                      <div className="flex justify-between font-serif text-lg text-foreground font-bold">
                        <span>Total Amount</span>
                        <span>₹{cartTotal}</span>
                      </div>
                    </div>
                    <button
                      onClick={handleCheckout}
                      disabled={loading}
                      className="w-full rounded-full bg-primary py-4 text-center text-sm font-semibold tracking-wider text-white uppercase shadow-lg shadow-primary/20 hover:bg-primary/95 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      {loading ? (
                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      ) : (
                        `Confirm Order (₹${cartTotal})`
                      )}
                    </button>
                  </div>
                )}
              </>
            ) : (
              /* Checkout Success Screen */
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex h-full flex-col items-center justify-center p-6 text-center space-y-6"
              >
                <div className="rounded-full bg-accent-green/10 p-5 text-primary">
                  <CheckCircle className="h-16 w-16" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif text-3xl text-foreground">Order Perfectly Registered</h3>
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent-green">
                    Order Ref: #SB-{Math.floor(1000 + Math.random() * 9000)}
                  </p>
                </div>
                <p className="text-sm text-paragraph max-w-[280px]">
                  Thank you! Your gourmet treats from <strong>Smoo Buds</strong> are scheduled for preparation. We will send updates to your registered mobile number shortly.
                </p>
                <div className="rounded-lg bg-cream/50 border border-border-brand p-4 text-left w-full space-y-2 text-xs">
                  <p className="font-semibold text-foreground">Delivery Coordinates:</p>
                  <p className="text-paragraph">Ramanayyapeta area, Kakinada, Andhra Pradesh</p>
                  <p className="text-paragraph mt-1">Est. Time: 35-45 minutes</p>
                </div>
                <button
                  onClick={handleCloseSuccess}
                  className="w-full rounded-full bg-primary py-3 text-center text-xs font-semibold tracking-wider text-white uppercase shadow-lg shadow-primary/20 hover:bg-primary/95 transition-all duration-300"
                >
                  Return to Café Menu
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
export default CartDrawer;
