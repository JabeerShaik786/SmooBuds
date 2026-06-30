import type { Metadata } from "next";
import { Inter, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/cart-context";
import { LenisProvider } from "@/components/lenis-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-dm-serif",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Smoo Buds | Perfectly Baked Premium Bakery & Café",
  description:
    "From handcrafted celebration cakes and rich brownies to gourmet café classics and specialty coffee, Smoo Buds brings freshly baked delights and comforting cafe favorites under one roof.",
  keywords: [
    "Smoo Buds",
    "Premium Bakery Kakinada",
    "Gourmet Café Andhra Pradesh",
    "Handcrafted Cakes",
    "Perfectly Baked Brownies",
    "Specialty Coffee Shop",
    "Custom Celebration Cakes",
    "Best Bakery Ramanayyapeta",
  ],
  authors: [{ name: "Smoo Buds" }],
  openGraph: {
    title: "Smoo Buds | Perfectly Baked Premium Bakery & Café",
    description:
      "Experience a mix of Apple-style precision and Aesop-style editorial elegance with Smoo Buds' finest cakes, desserts, and hot bites.",
    url: "https://smoobuds.com",
    siteName: "Smoo Buds",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${dmSerifDisplay.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <body
        className="min-h-full flex flex-col bg-background text-foreground font-sans selection:bg-primary selection:text-white"
        suppressHydrationWarning
      >
        <CartProvider>
          <LenisProvider>{children}</LenisProvider>
        </CartProvider>
      </body>
    </html>
  );
}
