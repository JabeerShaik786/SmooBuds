export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  isBestSeller?: boolean;
  isChefSpecial?: boolean;
  isLimitedTime?: boolean;
  rating: number;
  tags?: string[];
}

export const CATEGORIES = [
  { id: "cakes", name: "Birthday Cakes", icon: "🍰" },
  { id: "brownies", name: "Brownies", icon: "🍫" },
  { id: "pastries", name: "Pastries", icon: "🥐" },
  { id: "cupcakes", name: "Cupcakes", icon: "🧁" },
  { id: "cookies", name: "Cookies", icon: "🍪" },
  { id: "hot-bites", name: "Hot Bites", icon: "🍔" },
  { id: "coffee", name: "Coffee", icon: "☕" },
  { id: "shakes", name: "Shakes", icon: "🥤" },
  { id: "mocktails", name: "Mocktails", icon: "🍸" },
  { id: "ice-cream", name: "Ice Cream", icon: "🍨" },
  { id: "custom-cakes", name: "Custom Cakes", icon: "✨" },
  { id: "combos", name: "Combos", icon: "📦" },
];

export const PRODUCTS: Product[] = [
  // BEST SELLERS (Cakes, Brownies, Coffee)
  {
    id: "bs-cake",
    name: "Classic Madagascar Vanilla Cake",
    price: 1200,
    category: "cakes",
    image: "/images/hero_cake.png",
    description: "Moist sponge infused with organic Madagascar vanilla bean caviar, layered with lightweight vanilla whipped ganache.",
    isBestSeller: true,
    rating: 4.9,
    tags: ["Signature", "Eggless Available"],
  },
  {
    id: "bs-brownie",
    name: "Edible Gold Double Fudge Brownie",
    price: 320,
    category: "brownies",
    image: "/images/fudge_brownie.png",
    description: "An ultra-dense Belgian chocolate fudge brownie, topped with hand-pressed 24k edible gold leaf and French sea salt flakes.",
    isBestSeller: true,
    rating: 4.8,
    tags: ["Best Seller", "Indulgent"],
  },
  {
    id: "bs-coffee",
    name: "Slow-Drip Kyoto Cold Brew",
    price: 240,
    category: "coffee",
    image: "/images/cold_brew.png",
    description: "Single-origin Arabica beans slow-steeped for 18 hours in cold spring water, offering a clean, whiskey-like chocolate profile.",
    isBestSeller: true,
    rating: 4.9,
    tags: ["Specialty", "Cold Brew"],
  },

  // CAKES (Birthday Cakes, Party Cakes)
  {
    id: "cake-1",
    name: "Salted Caramel Pecan Cake",
    price: 1350,
    category: "cakes",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=600",
    description: "Dark chocolate sponge layers drenched in house-made amber caramel, toasted pecans, and fleur de sel buttercream.",
    rating: 4.8,
    tags: ["Premium", "Contains Nuts"],
  },
  {
    id: "cake-2",
    name: "Wild Raspberry & Pistachio Cake",
    price: 1450,
    category: "cakes",
    image: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&q=80&w=600",
    description: "Sicilian pistachio cake layered with a tart wild raspberry compote and silky cream cheese frosting.",
    isChefSpecial: true,
    rating: 5.0,
    tags: ["Chef's Recommendation", "Eggless Available"],
  },
  {
    id: "cake-3",
    name: "Belgian Dark Chocolate Ganache Cake",
    price: 1250,
    category: "cakes",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&q=80&w=600",
    description: "Rich, dense chocolate cake filled with 64% Belgian dark chocolate ganache, finished with dark cocoa dust.",
    rating: 4.7,
    tags: ["Rich", "Eggless Available"],
  },

  // BROWNIES
  {
    id: "brownie-1",
    name: "Hazelnut Praline Brownie",
    price: 180,
    category: "brownies",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&q=80&w=600",
    description: "Fudgy brownie base topped with a layer of caramelized hazelnut praline paste and roasted Turkish hazelnuts.",
    rating: 4.6,
    tags: ["Nuts", "Fudgy"],
  },
  {
    id: "brownie-2",
    name: "Matcha White Chocolate Brownie (Blondie)",
    price: 190,
    category: "brownies",
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=600",
    description: "Uji matcha blondie with swirls of premium Callebaut white chocolate chunks, earthy and sweet.",
    isLimitedTime: true,
    rating: 4.7,
    tags: ["Seasonal", "Matcha"],
  },

  // PASTRIES
  {
    id: "pastry-1",
    name: "Almond Butter Croissant",
    price: 160,
    category: "pastries",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=600",
    description: "Double-baked flaky French laminated pastry filled with sweet frangipane and topped with sliced flaked almonds.",
    rating: 4.8,
    tags: ["Flaky", "Freshly Baked"],
  },
  {
    id: "pastry-2",
    name: "Classic Pain au Chocolat",
    price: 150,
    category: "pastries",
    image: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&q=80&w=600",
    description: "Butter-rich layered pastry wrapped around two batons of premium French dark chocolate.",
    rating: 4.7,
    tags: ["Classic"],
  },

  // CUPCAKES
  {
    id: "cupcake-1",
    name: "Tahitian Vanilla & Raspberry Cupcake",
    price: 110,
    category: "cupcakes",
    image: "https://images.unsplash.com/photo-1614707267537-b85acf00c4b8?auto=format&fit=crop&q=80&w=600",
    description: "Vanilla bean cupcake with a liquid raspberry core, topped with light meringue frosting.",
    rating: 4.5,
  },
  {
    id: "cupcake-2",
    name: "Red Velvet Cream Cheese Cupcake",
    price: 120,
    category: "cupcakes",
    image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&q=80&w=600",
    description: "Deep red cocoa cupcake crowned with a swirl of vanilla-infused cream cheese icing.",
    rating: 4.8,
    tags: ["Popular"],
  },

  // COOKIES
  {
    id: "cookie-1",
    name: "Brown Butter Chocolate Chunk Cookie",
    price: 90,
    category: "cookies",
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&q=80&w=600",
    description: "Toasty brown butter cookie dough packed with huge pools of 70% dark chocolate chunks, crispy edges and soft center.",
    rating: 4.9,
    tags: ["Folk Favorite"],
  },

  // HOT BITES (Savory Café Food)
  {
    id: "hb-pizza",
    name: "Sourdough Burrata Pizza",
    price: 520,
    category: "hot-bites",
    image: "/images/sourdough_pizza.png",
    description: "48-hour slow fermented sourdough crust topped with San Marzano tomato sauce, fresh creamy burrata, and organic basil.",
    rating: 5.0,
    tags: ["Artisanal", "Sourdough"],
  },
  {
    id: "hb-burger",
    name: "Smoo Signature Brioche Burger",
    price: 360,
    category: "hot-bites",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=600",
    description: "Gourmet house patty in a soft butter-toasted brioche bun with mature cheddar, caramelized onions, and black truffle mayo.",
    rating: 4.8,
    tags: ["Gourmet"],
  },
  {
    id: "hb-garlic",
    name: "Confit Garlic & Rosemary Bread",
    price: 220,
    category: "hot-bites",
    image: "/images/garlic_bread.png",
    description: "Woodfired bread rubbed with slow-cooked confit garlic cloves, fresh rosemary, sea salt, and extra virgin olive oil.",
    rating: 4.7,
  },
  {
    id: "hb-pasta",
    name: "Wild Mushroom Truffle Pasta",
    price: 440,
    category: "hot-bites",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=600",
    description: "Tagliatelle tossed in a rich, creamy sauce made of sautéed forest mushrooms, white truffle oil, and aged Parmigiano-Reggiano.",
    isChefSpecial: true,
    rating: 4.9,
    tags: ["Indulgent", "Vegetarian"],
  },
  {
    id: "hb-sandwich",
    name: "Pesto Caprese Focaccia Sandwich",
    price: 290,
    category: "hot-bites",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&q=80&w=600",
    description: "Freshly baked olive focaccia stuffed with heirloom tomatoes, fresh mozzarella, Genovese basil pesto, and aged balsamic glaze.",
    rating: 4.6,
  },
  {
    id: "hb-fries",
    name: "Parmesan Truffle Fries",
    price: 180,
    category: "hot-bites",
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&q=80&w=600",
    description: "Double-fried hand-cut potatoes tossed in white truffle oil, grated Parmigiano, and chopped fresh parsley.",
    rating: 4.7,
  },

  // COFFEE
  {
    id: "coffee-1",
    name: "Spanish Iced Latte",
    price: 220,
    category: "coffee",
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&q=80&w=600",
    description: "Double shot of espresso mixed with chilled organic milk and a touch of sweet condensed milk, served over ice.",
    rating: 4.8,
  },
  {
    id: "coffee-2",
    name: "Classic Flat White",
    price: 190,
    category: "coffee",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=600",
    description: "Velvety microfoam poured over a double shot of ristretto espresso, smooth and balanced.",
    rating: 4.7,
  },

  // SHAKES
  {
    id: "shake-1",
    name: "Salted Caramel Shake",
    price: 210,
    category: "shakes",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&q=80&w=600",
    description: "Creamy vanilla gelato blended with buttery caramel sauce, Himalayan pink salt, topped with fresh whipped cream.",
    rating: 4.6,
  },

  // MOCKTAILS
  {
    id: "mocktail-1",
    name: "Cucumber Mint Mojito",
    price: 180,
    category: "mocktails",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=600",
    description: "A refreshing mocktail with muddled fresh cucumbers, garden mint leaves, lime juice, and sparkling soda.",
    rating: 4.7,
  },

  // ICE CREAM
  {
    id: "icecream-1",
    name: "Madagascar Bourbon Vanilla Gelato",
    price: 150,
    category: "ice-cream",
    image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&q=80&w=600",
    description: "House-churned creamy Italian style gelato made with premium heavy cream and whole vanilla beans.",
    rating: 4.8,
  },

  // COMBOS
  {
    id: "combo-1",
    name: "Café Lunch Combo",
    price: 490,
    category: "combos",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=600",
    description: "Choose any Gourmet Burger or Caprese Focaccia + Parmesan Truffle Fries + Spanish Iced Latte.",
    rating: 4.9,
    tags: ["Best Value", "Full Meal"],
  },

  // CUSTOM CAKES (Representational placeholder for builder reference)
  {
    id: "custom-cake-ref",
    name: "Bespoke Celebration Cake",
    price: 2500,
    category: "custom-cakes",
    image: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&q=80&w=600",
    description: "Fully customized luxury cake designed for your special birthdays, weddings, or anniversaries. Click 'Design Your Cake' below.",
    rating: 5.0,
    tags: ["Made to Order", "Bespoke"],
  },
];
