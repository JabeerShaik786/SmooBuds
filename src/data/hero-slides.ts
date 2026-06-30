export interface HeroSlide {
  id: string;
  category: string;
  badge?: "NEW" | "BEST SELLER" | "LIMITED EDITION" | string;
  heading: string;
  subheading: string;
  ctaText: string;
  ctaLink: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  image: string;
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: "slide-1",
    category: "Signature Collection",
    heading: "Perfectly Baked.",
    subheading: "Freshly baked cakes, handcrafted desserts, premium coffee, and café favourites—all under one roof.",
    ctaText: "Explore Menu",
    ctaLink: "#menu",
    secondaryCtaText: "Order Now",
    secondaryCtaLink: "#menu",
    image: "/SmooBuds/images/hero_cake.png",
  },
  {
    id: "slide-2",
    category: "Birthday Cakes",
    badge: "NEW",
    heading: "Magic in Every Celebration.",
    subheading: "Beautiful custom cakes crafted for birthdays, anniversaries, and every special moment.",
    ctaText: "Order Birthday Cake",
    ctaLink: "#menu",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "slide-3",
    category: "Belgian Brownies",
    badge: "BEST SELLER",
    heading: "Fresh Out of the Oven.",
    subheading: "Rich, fudgy brownies baked daily using premium ingredients.",
    ctaText: "Shop Brownies",
    ctaLink: "#menu",
    image: "/SmooBuds/images/fudge_brownie.png",
  },
  {
    id: "slide-4",
    category: "Hot Bites",
    heading: "More Than Just Desserts.",
    subheading: "Fresh pizzas, burgers, garlic bread, wraps, fries, sandwiches, and café favourites.",
    ctaText: "Explore Hot Bites",
    ctaLink: "#hot-bites",
    image: "/SmooBuds/images/sourdough_pizza.png",
  },
  {
    id: "slide-5",
    category: "Coffee & Drinks",
    heading: "Brewed to Perfection.",
    subheading: "Premium coffee, refreshing mojitos, milkshakes, and handcrafted beverages.",
    ctaText: "View Drinks",
    ctaLink: "#menu",
    image: "/SmooBuds/images/cold_brew.png",
  },
  {
    id: "slide-6",
    category: "Seasonal Specials",
    badge: "LIMITED EDITION",
    heading: "Limited Time Delights.",
    subheading: "Seasonal cakes, festive desserts, and chef's specials available for a limited time.",
    ctaText: "Discover Specials",
    ctaLink: "#menu",
    image: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&q=80&w=1200",
  },
];
