// =============================================================
// ELVIS'S ELEGANT CLOSET — CENTRAL BUSINESS CONFIGURATION
// =============================================================
// The business owner should replace all PLACEHOLDER_* values
// with real business information. Everything that appears on
// the website (WhatsApp number, social links, location, etc.)
// is controlled from THIS file.
// =============================================================

const businessConfig = {
  name: "Elvis's Elegant Closet",
  tagline: "Style That Speaks For You",
  description:
    "A fashion retail brand focused on bringing stylish clothing and accessories closer to modern customers.",

  // --- Contact ---
  // Replace with the real WhatsApp number in international format, no "+" or spaces.
  // Example: "256700000000" for Uganda.
  whatsapp: "256778781601",
  phone: "+256778781601",
  email: "elegantcloset@gmail.com",
  location: "Mbalala,Mukono",

  // --- Business hours (array of {day, hours} objects) ---
  hours: [
    { day: "Monday – Friday", hours: "12:00 AM – 11:59 PM" },
    { day: "Saturday", hours: "12:00 AM – 11:59 PM" },
    { day: "Sunday", hours: "12:00 AM – 11:59 PM" },
  ],

  // --- Social media ---
  // Leave as "PLACEHOLDER_URL" to hide a button automatically.
  social: {
    tiktok: "https://wwww.tiktok.com/@elvis.elegantcloset",
    instagram: "PLACEHOLDER_URL",
    facebook: "PLACEHOLDER_URL",
  },

  // --- Currency ---
  currencySymbol: "UGX",
};

// Freeze so accidental mutation doesn't silently change branding at runtime
if (typeof Object.freeze === "function") {
  Object.freeze(businessConfig);
  Object.freeze(businessConfig.social);
}

// Make available to other modules
if (typeof window !== "undefined") {
  window.businessConfig = businessConfig;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { businessConfig };
}

// =============================================================
// ELVIS'S ELEGANT CLOSET — CATEGORY DATA
// =============================================================
// Add / remove / rename categories here. Each category links
// into the Shop page filtering system by matching the `id`
// against product.category values in products.js.
//
// `image` is a URL (use real photos when available).
// =============================================================

const categories = [
  {
    id: "dresses",
    name: "Dresses",
    description: "Stylish dresses for every occasion.",
    gender: "Women",
    image:
      "assets/whitedress.jpg",
  },
  {
    id: "shirts",
    name: "Shirts & T-Shirts",
    description: "Everyday essentials and statement tops.",
    gender: "Unisex",
    image:
      "assets/whiteshirt.jpg",
  },
  {
    id: "two-piece",
    name: "Two-Piece Sets",
    description: "Coordinated outfits that make dressing easy.",
    gender: "Unisex",
    image:
      "https://images.pexels.com/photos/26744884/pexels-photo-26744884.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  },
  {
    id: "jampers",
    name: "Jumpers",
    description: "Layer up in style with premium outerwear.",
    gender: "Unisex",
    image:
      "assets/greyjamp.jpg",
  },
  {
    id: "gentles",
    name: "Gentle Pants",
    description: "Gentles to complete your look.",
    gender: "Unisex",
    image:
      "assets/blackgentletrouser.jpg",
  },
  {
    id: "shorts",
    name: "Shorts",
    description: "Everyday essential shorts",
    gender: "Unisex",
    image:
      "assets/blackshort.jpg",
  },
];

// Master list of all category ids used in the Shop filter sidebar
const allCategoryIds = categories.map((c) => c.id).concat(["jeans","sweatershirts" ,"trousers", "tops", "skirts", "suits", "ties", "officepants", "other"]);

if (typeof window !== "undefined") {
  window.categories = categories;
  window.allCategoryIds = allCategoryIds;
}

// =============================================================
// ELVIS'S ELEGANT CLOSET — DEMO PRODUCT DATA
// =============================================================
// >>> DEMO / SAMPLE DATA <<<
// Replace these entries with Elvis's Elegant Closet's real
// products. To add a new product, simply copy one object in
// the array below and update its fields.
//
// Image URLs below are stock placeholders from Pexels. When
// real product photos are ready, swap the `image` value for
// a path like "assets/images/products/your-photo.jpg".
// =============================================================

const products = [
  // ---- WOMEN ----
  {
    id: 1,
    name: "Elegant Dress",
    description: "An elegant dress perfect for evening occasions and special events.",
    price: 16000,
    oldPrice: 25000,
    category: "dresses",
    gender: "Women",
    image:
      "assets/blackdress.jpg",
    featured: true,
    newArrival: true,
    available: true,
    sizes: [],
    colors: [],
    tags: ["evening", "dress", "elegant"],
  },
  {
    id: 2,
    name: "Floral Two-Piece Set",
    description: "A vibrant floral two-piece outfit for a bold, confident look.",
    price: 45000,
    category: "two-piece",
    gender: "Women",
    image:
      "assets/whiteppiece.jpg",
    featured: true,
    newArrival: true,
    available: true,
    sizes: [],
    colors: [],
    tags: ["two-piece", "floral", "summer"],
  },
  {
    id: 3,
    name: "Shirt",
    description: "Smart shirts for effortless everyday elegance",
    price: 30000,
    category: "shirts",
    gender: "Men",
    image:
      "assets/greyshirt.jpg",
    featured: false,
    newArrival: true,
    available: true,
    sizes: ["S", "M", "L"],
    colors: [],
    tags: ["two-piece", "statement"],
  },
  {
    id: 4,
    name: "Pink Jumper",
    description: "Cozy jumpers for stylish everyday wear",
    price: 15000,
    oldPrice: 25000,
    category: "jampers",
    gender: "Women",
    image:
      "assets/lightpinkjamper.jpg",
    featured: true,
    newArrival: false,
    available: true,
    sizes: [],
    colors: ["Pink"],
    tags: ["suit", "bold", "formal"],
  },
  {
    id: 5,
    name: "Sweater shirt",
    description: "Warm sweater shirts with stylish comfort",
    price: 10000,
    category: "sweatershirts",
    gender: "Unisex",
    image:
      "assets/brownsweatershirt.jpg",
    featured: false,
    newArrival: false,
    available: true,
    sizes: [],
    colors: [],
    tags: ["blazer", "formal", "layer"],
  },
  {
    id: 6,
    name: "Socks",
    description: "Comfortable socks for everyday stylish dressing",
    price: 3000,
    category: "other",
    gender: "Men",
    image:
      "assets/socks.jpg",
    featured: false,
    newArrival: true,
    available: true,
    sizes: [],
    colors: ["White","black"],
    tags: ["skirt", "casual", "urban"],
  },
  {
    id: 7,
    name: "Shorts",
    description: "Comfortable shorts for relaxed everyday style",
    price: 10000,
    category: "other",
    gender: "Men",
    image:
      "assets/greyshort.jpg",
    featured: true,
    newArrival: false,
    available: true,
    sizes: [],
    colors: ["Brown","White","Black","Grey"],
    tags: ["bag", "handbag", "accessory"],
  },
  {
    id: 8,
    name: "Gentle Trouser(Thrift)",
    description: "Stylish pants designed for everyday comfort",
    price: 20000,
    category: "trousers",
    gender: "Men",
    image:
      "assets/navybluetrouser.jpg",
    featured: false,
    newArrival: true,
    available: true,
    sizes: [],
    colors: [],
    tags: ["bag", "leather", "accessory"],
  },

  // ---- MEN ----
  {
    id: 9,
    name: "Office Pant(Thrift)",
    description: "Elegant pants combining comfort and style",
    price: 20000,
    category: "officepants",
    gender: "Women",
    image:
      "assets/greyladypant.jpg",
    featured: true,
    newArrival: true,
    available: true,
    sizes: [],
    colors: ["Blue","White","Black","Grey"],
    tags: ["denim", "casual", "men"],
  },
  {
    id: 10,
    name: "Black Shirt",
    description: "A vibrant shirt for relaxed, confident styling.",
    price: 30000,
    category: "shirts",
    gender: "Men",
    image:
      "assets/blackshirt.jpg",
    featured: true,
    newArrival: false,
    available: true,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black","White","Blue","SkyBlue","Grey"],
    tags: ["shirt", "floral", "casual"],
  },
  {
    id: 11,
    name: "Smart Casual TwoPiece",
    description: "A smart casual look perfect for work or weekend.",
    price: 45000,
    category: "two-piece",
    gender: "Women",
    image:
      "assets/greenpiece.jpg",
    featured: false,
    newArrival: true,
    available: true,
    sizes: [],
    colors: ["Navy","Green","White"],
    tags: ["shirt", "smart", "casual"],
  },
  {
    id: 12,
    name: "T-shirt",
    description: "Bold printed shirt for fashion-forward gentlemen.",
    price: 25000,
    category: "shirts",
    gender: "Men",
    image:
      "assets/blacktshirt.jpg",
    featured: false,
    newArrival: false,
    available: true,
    sizes: ["M", "L", "XL"],
    colors: ["White","Black","Navy","Grey","Blue"],
    tags: ["shirt", "printed", "statement"],
  },
  {
    id: 13,
    name: "Classic Ties",
    description: "Classic ties for polished formal looks",
    price: 15000,
    oldPrice: 20000,
    category: "ties",
    gender: "Men",
    image:
      "assets/blacktie.jpg",
    featured: true,
    newArrival: true,
    available: true,
    sizes: ["M", "L", "XL"],
    colors: ["Red"],
    tags: ["shirt", "holiday", "printed"],
  },
  {
    id: 14,
    name: "Classic Tops",
    description: "Classic Tops designed for everyday comfort",
    price: 20000,
    category: "tops",
    gender: "Women",
    image:
      "assets/brouse11.jpg",
    featured: false,
    newArrival: true,
    available: true,
    sizes: [],
    colors: [],
    tags: ["hoodie", "streetwear", "casual"],
  },
  {
    id: 15,
    name: "Cozy Jumpers",
    description: "Cozy jumpers for stylish everyday wear",
    price: 15000,
    category: "jampers",
    gender: "Unisex",
    image:
      "assets/whitejamper.jpg",
    featured: false,
    newArrival: false,
    available: true,
    sizes: [],
    colors: ["Black","White","Grey","Navy"],
    tags: ["t-shirt", "basic", "casual"],
  },

  // ---- UNISEX ----
  {
    id: 16,
    name: "Stylish Tops",
    description: "Stylish Tops designed for everyday comfort",
    price: 20000,
    oldPrice: 25000,
    category: "tops",
    gender: "Women",
    image:
      "assets/top1.jpg",
    featured: true,
    newArrival: true,
    available: true,
    sizes: [],
    colors: [],
    tags: ["sneakers", "shoes", "streetwear"],
  },
  {
    id: 17,
    name: "Skirt(Thrift)",
    description: "Beautiful skirts for elegant feminine looks",
    price: 10000,
    category: "skirts",
    gender: "Women",
    image:
      "assets/skirt8.jpg",
    featured: false,
    newArrival: true,
    available: true,
    sizes: [],
    colors: [],
    tags: ["sneakers", "shoes", "leather"],
  },
  {
    id: 18,
    name: "Skyblue Classic T-shirt",
    description: "Trendy tees offering comfort and style",
    price: 25000,
    category: "shirts",
    gender: "Men",
    image:
      "assets/skyblueshirt.jpg",
    featured: true,
    newArrival: false,
    available: true,
    sizes: [],
    colors: ["Black","Skyblue","White","Grey"],
    tags: ["sneakers", "shoes", "minimalist"],
  },
  {
    id: 19,
    name: "Classic Shirt",
    description: "Smart shirts for effortless everyday elegance",
    price: 30000,
    category: "shirts",
    gender: "Men",
    image:
      "assets/shirt22.jpg",
    featured: false,
    newArrival: false,
    available: true,
    sizes: [],
    colors: [],
    tags: ["jeans", "denim", "essential"],
  },
  {
    id: 20,
    name: "Classic T-shirt",
    description: "Trendy tees offering comfort and style",
    price: 25000,
    oldPrice: 35000,
    category: "shirts",
    gender: "Men",
    image:
      "assets/spootyshirt.jpg",
    featured: true,
    newArrival: false,
    available: true,
    sizes: ["S", "M", "L", "XL"],
    colors: [],
    tags: ["jacket", "velvet", "formal"],
  },
  {
    id: 21,
    name: "Maroon Shirt",
    description: "Smart shirts for effortless everyday elegance",
    price: 35000,
    category: "shirts",
    gender: "Men",
    image:
      "assets/maroonshirt.jpg",
    featured: false,
    newArrival: true,
    available: true,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "White","Maroon"],
    tags: ["streetwear", "t-shirt", "urban"],
  },
  {
    id: 22,
    name: "Classic Ties",
    description: "Classic ties for polished formal looks",
    price: 15000,
    category: "ties",
    gender: "Men",
    image:
      "assets/ties.jpg",
    featured: false,
    newArrival: false,
    available: true,
    sizes: [],
    colors: ["Pink", "Grey","Blue","Black","White","Cream"],
    tags: ["hoodie", "casual", "comfort"],
  },
  {
    id: 23,
    name: "Elegant Top",
    description: "Stylish tops designed for everyday comfort",
    price: 20000,
    category: "tops",
    gender: "Women",
    image:
      "assets/brouse5.jpg",
    featured: false,
    newArrival: true,
    available: true,
    sizes: [],
    colors: [],
    tags: ["jacket", "denim", "casual"],
  },
  {
    id: 24,
    name: "Elegant Two-Piece",
    description: "A sophisticated outfit with elegant pearl detailing.",
    price: 45000,
    category: "two-piece",
    gender: "Women",
    image:
      "assets/black2piece.jpg",
    featured: true,
    newArrival: false,
    available: true,
    sizes: [],
    colors: ["Black"],
    tags: ["elegant", "pearl", "evening"],
  },
];

if (typeof window !== "undefined") {
  window.products = products;
}

// =============================================================
// ELVIS'S ELEGANT CLOSET — ICONS (inline SVG strings)
// =============================================================

const Icons = {
  cart: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>',
  search: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
  menu: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>',
  close: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
  whatsapp: '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>',
  whatsappLarge: '<svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>',
  phone: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
  mail: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',
  mapPin: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  clock: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>',
  trash: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3,6 5,6 21,6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',
  plus: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>',
  minus: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/></svg>',
  arrowRight: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12,5 19,12 12,19"/></svg>',
  arrowLeft: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12,19 5,12 12,5"/></svg>',
  shoppingBag: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>',
  instagram: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>',
  facebook: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>',
  tiktok: '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>',
  check: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20,6 9,17 4,12"/></svg>',
  sparkles: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l1.5 5L19 9.5 13.5 11 12 16l-1.5-5L5 9.5 10.5 8z"/><path d="M5 20l.7 2L8 22.7 5.7 23.5 5 26l-.7-2.5L2 22.7 4.3 22z"/></svg>',
  truck: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13" rx="1"/><polygon points="16,8 20,8 23,11 23,16 16,16"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>',
  headset: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>',
  layers: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12,2 2,7 12,12 22,7 12,2"/><polyline points="2,17 12,22 22,17"/><polyline points="2,12 12,17 22,12"/></svg>',
  filter: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="22,3 2,3 10,12.46 10,19 14,21 14,12.46"/></svg>',
  chevronRight: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9,18 15,12 9,6"/></svg>',
};

if (typeof window !== "undefined") {
  window.Icons = Icons;
}

// =============================================================
// ELVIS'S ELEGANT CLOSET — WHATSAPP INTEGRATION
// =============================================================
// All WhatsApp message generation and URL opening is
// centralized here. The WhatsApp number comes from
// businessConfig in config.js — do NOT hardcode it.
// =============================================================

(function () {
  const cfg = window.businessConfig;

  /**
   * Build a wa.me URL from a raw message string.
   * @param {string} message
   * @returns {string}
   */
  function buildUrl(message) {
    const number = (cfg.whatsapp || "").replace(/\D/g, "");
    return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
  }

  /**
   * Open WhatsApp in a new tab with the given message.
   * @param {string} message
   */
  function open(message) {
    const url = buildUrl(message);
    window.open(url, "_blank", "noopener,noreferrer");
  }

  /**
   * Format a price using the configured currency symbol.
   * @param {number} price
   * @returns {string}
   */
  function formatPrice(price) {
    return `${cfg.currencySymbol} ${price.toLocaleString("en-US")}`;
  }

  /**
   * Build the full cart order message.
   * @param {Array} cartItems - cart items from cart.js
   * @param {object} customer - { name, phone, location, notes, deliveryDate, contactMethod }
   * @returns {string}
   */
  function buildOrderMessage(cartItems, customer) {
    let msg = `Hello ${cfg.name} \u{1F44B}\nI would like to place an order.\n\n`;
    msg += "ORDER:\n";

    cartItems.forEach((item, i) => {
      msg += `${i + 1}. ${item.name}\n`;
      if (item.size) msg += `   Size: ${item.size}\n`;
      if (item.color) msg += `   Color: ${item.color}\n`;
      msg += `   Quantity: ${item.quantity}\n`;
      msg += `   Price: ${formatPrice(item.price)} each\n`;
    });

    const total = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    msg += `\nEstimated Total: ${formatPrice(total)}\n\n`;

    msg += "CUSTOMER DETAILS\n";
    msg += `Name: ${customer.name || ""}\n`;
    msg += `Phone: ${customer.phone || ""}\n`;
    msg += `Location: ${customer.location || ""}\n`;
    if (customer.deliveryDate) msg += `Preferred Delivery Date: ${customer.deliveryDate}\n`;
    if (customer.contactMethod) msg += `Preferred Contact Method: ${customer.contactMethod}\n`;
    msg += `Additional Notes: ${customer.notes || ""}\n`;

    return msg;
  }

  /**
   * Build a single-product quick order message.
   * @param {object} product
   * @param {object} opts - { quantity, size, color }
   * @returns {string}
   */
  function buildSingleOrderMessage(product, opts) {
    const qty = opts.quantity || 1;
    let msg = `Hello ${cfg.name} \u{1F44B}\nI am interested in ordering:\n\n`;
    msg += `Product: ${product.name}\n`;
    if (opts.size) msg += `Size: ${opts.size}\n`;
    if (opts.color) msg += `Color: ${opts.color}\n`;
    msg += `Quantity: ${qty}\n`;
    msg += `Price: ${formatPrice(product.price)}\n\n`;
    msg += "Please let me know about availability and delivery.\n";
    return msg;
  }

  /**
   * Build a general enquiry message.
   * @returns {string}
   */
  function buildEnquiryMessage() {
    return `Hello ${cfg.name} \u{1F44B}\nI would like to make an enquiry.\n`;
  }

  /**
   * Build a contact form enquiry message.
   * @param {object} data - { name, phone, email, subject, message }
   * @returns {string}
   */
  function buildContactMessage(data) {
    let msg = `Hello ${cfg.name} \u{1F44B}\nI have an enquiry.\n\n`;
    msg += `Name: ${data.name || ""}\n`;
    msg += `Phone: ${data.phone || ""}\n`;
    msg += `Email: ${data.email || ""}\n`;
    msg += `Subject: ${data.subject || ""}\n`;
    msg += `Message: ${data.message || ""}\n`;
    return msg;
  }

  window.WhatsApp = {
    open,
    buildUrl,
    buildOrderMessage,
    buildSingleOrderMessage,
    buildEnquiryMessage,
    buildContactMessage,
    formatPrice,
  };
})();

// =============================================================
// ELVIS'S ELEGANT CLOSET — SHOPPING CART
// =============================================================
// Client-side cart with localStorage persistence.
// Only cart info is stored — never sensitive data.
// =============================================================

(function () {
  const STORAGE_KEY = "elvisElegantClosetCart";

  /** @type {Array<{id:number,name:string,price:number,image:string,size?:string,color?:string,quantity:number}>} */
  let cart = [];

  function load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      cart = raw ? JSON.parse(raw) : [];
      if (!Array.isArray(cart)) cart = [];
    } catch (e) {
      cart = [];
    }
  }

  function save() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
    } catch (e) {
      /* storage may be full or disabled — ignore */
    }
    updateBadge();
  }

  /**
   * Add a product to the cart. If the same product+size+color
   * already exists, the quantity is increased.
   * @param {object} product
   * @param {object} opts - { size?, color?, quantity? }
   */
  function add(product, opts) {
    opts = opts || {};
    const size = opts.size || "";
    const color = opts.color || "";
    const quantity = Math.max(1, parseInt(opts.quantity, 10) || 1);

    const existing = cart.find(
      (item) =>
        item.id === product.id && item.size === size && item.color === color
    );

    if (existing) {
      existing.quantity += quantity;
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        size: size,
        color: color,
        quantity: quantity,
      });
    }
    save();
  }

  /** Remove cart line by index */
  function removeItem(index) {
    if (index >= 0 && index < cart.length) {
      cart.splice(index, 1);
      save();
    }
  }

  /** Change quantity at index (min 1) */
  function setQuantity(index, qty) {
    if (index >= 0 && index < cart.length) {
      cart[index].quantity = Math.max(1, parseInt(qty, 10) || 1);
      save();
    }
  }

  function increment(index) {
    if (index >= 0 && index < cart.length) {
      cart[index].quantity++;
      save();
    }
  }

  function decrement(index) {
    if (index >= 0 && index < cart.length) {
      if (cart[index].quantity > 1) {
        cart[index].quantity--;
        save();
      } else {
        removeItem(index);
      }
    }
  }

  function clear() {
    cart = [];
    save();
  }

  function getItems() {
    return cart.slice();
  }

  function getCount() {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
  }

  function getSubtotal() {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  function updateBadge() {
    const badges = document.querySelectorAll(".cart-count");
    const count = getCount();
    badges.forEach((el) => {
      el.textContent = String(count);
      // The navbar badge is absolutely positioned on the cart icon;
      // inline badges (e.g. mobile menu) use the "inline" class.
      if (el.classList.contains("cart-count-inline")) {
        el.style.display = count > 0 ? "inline-flex" : "none";
      } else {
        el.style.display = count > 0 ? "flex" : "none";
      }
    });
  }

  // Expose API
  window.Cart = {
    add,
    removeItem,
    setQuantity,
    increment,
    decrement,
    clear,
    getItems,
    getCount,
    getSubtotal,
    updateBadge,
    load,
  };
})();

// =============================================================
// ELVIS'S ELEGANT CLOSET — MAIN APPLICATION
// =============================================================
// Handles: routing, navigation, page rendering, and wiring
// up all interactive components.
// =============================================================

(function () {
  "use strict";

  const cfg = window.businessConfig;
  const products = window.products || [];
  const categories = window.categories || [];

  // ---- State ----
  let currentRoute = "home";
  let currentProductId = null;
  let shopState = {
    search: "",
    gender: "all",
    category: "all",
    sort: "featured",
  };

  // ---- DOM refs ----
  const app = document.getElementById("app");
  let pageEl = null;

  // ============================================================
  // UTILITIES
  // ============================================================

  function formatPrice(price) {
    return `${cfg.currencySymbol} ${price.toLocaleString("en-US")}`;
  }

  function getCategoryName(id) {
    const cat = categories.find((c) => c.id === id);
    return cat ? cat.name : id.charAt(0).toUpperCase() + id.slice(1);
  }

  function getProductById(id) {
    return products.find((p) => p.id === parseInt(id, 10));
  }

  function escapeHtml(str) {
    if (!str) return "";
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  function showToast(message) {
    let toast = document.querySelector(".toast");
    if (toast) toast.remove();
    toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = `<span class="toast-icon">${Icons.check}</span>${escapeHtml(message)}`;
    document.body.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add("show"));
    setTimeout(() => {
      toast.classList.remove("show");
      setTimeout(() => toast.remove(), 300);
    }, 2500);
  }

  function imageFallback(img, productName) {
    const fallback = document.createElement("div");
    fallback.style.cssText =
      "width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--color-surface-alt);color:var(--color-muted);font-size:0.8rem;text-align:center;padding:1rem;";
    fallback.textContent = productName || "Image coming soon";
    img.style.display = "none";
    if (img.parentNode) img.parentNode.appendChild(fallback);
  }

  function attachImageFallback(img, productName) {
    img.addEventListener("error", function () {
      imageFallback(img, productName);
    });
  }

  // ============================================================
  // ROUTER
  // ============================================================

  // function navigate(route, params) {
  //   params = params || {};

  //   // Close mobile menu
  //   closeMobileMenu();

  //   currentRoute = route;
  //   if (params.productId) currentProductId = params.productId;
  //   if (params.category) shopState.category = params.category;
  //   if (params.gender) shopState.gender = params.gender;

  //   renderPage();
  //   window.scrollTo({ top: 0, behavior: "instant" });
  //   updateNavActive();
  // }

  function navigate(route,params,fromHistory){
    params = params || {};
    closeMobileMenu();
    if (!fromHistory) {
      const state = {route:route,
        params:params
      };
      history.pushState(state,"",window.location.href);
    }
    currentRoute = route;
    if (params.productId) {
      currentProductId = params.productId;
    }

    if (params.category) {
      shopState.category = params.category;
    }

    if (params.gender) {
     shopState.gender = params.gender ;
    }
    renderPage();
    window.scrollTo({top:0,behavior:"instant"});
    updateNavActive()
  }

  function updateNavActive() {
    document.querySelectorAll(".navbar-link, .mobile-menu-link").forEach((link) => {
      link.classList.toggle("active", link.dataset.route === currentRoute);
    });
  }

  function renderPage() {
    let html = "";
    switch (currentRoute) {
      case "home":
        html = renderHome();
        break;
      case "shop":
        html = renderShop();
        break;
      case "product":
        html = renderProductDetail();
        break;
      case "cart":
        html = renderCart();
        break;
      case "about":
        html = renderAbout();
        break;
      case "contact":
        html = renderContact();
        break;
      default:
        html = renderHome();
    }
    pageEl.innerHTML = `<div class="page-content">${html}</div>`;
    afterRender();
  }

  function afterRender() {
    // Attach image fallbacks
    document.querySelectorAll("img[data-product-name]").forEach((img) => {
      attachImageFallback(img, img.dataset.productName);
    });
    // Update cart badge
    Cart.updateBadge();
  }

  // ============================================================
  // NAVIGATION BAR
  // ============================================================

  function renderNavbar() {
    const navLinks = [
      { route: "home", label: "Home" },
      { route: "shop", label: "Shop" },
      { route: "collections", label: "Collections" },
      { route: "about", label: "About" },
      { route: "contact", label: "Contact" },
    ];

    return `
      <nav class="navbar" id="navbar">
        <div class="navbar-inner">
          <div class="navbar-logo" data-route="home">
            Elvis's <span>Elegant</span> Closet
          </div>
          <div class="navbar-links">
            ${navLinks
              .map(
                (l) =>
                  `<a class="navbar-link" data-route="${l.route === "collections" ? "shop" : l.route}">${l.label}</a>`
              )
              .join("")}
          </div>
          <div class="navbar-actions">
            <div class="navbar-cart" data-route="cart">
              ${Icons.cart}
              <span>Cart</span>
              <span class="cart-count">0</span>
            </div>
            <a class="navbar-whatsapp" id="nav-whatsapp">
              ${Icons.whatsapp}
              <span>WhatsApp</span>
            </a>
            <div class="hamburger" id="hamburger">
              <span></span><span></span><span></span>
            </div>
          </div>
        </div>
      </nav>
      <div class="mobile-menu" id="mobile-menu">
        <div class="mobile-menu-inner">
          ${navLinks
            .map(
              (l) =>
                `<a class="mobile-menu-link" data-route="${l.route === "collections" ? "shop" : l.route}">${l.label}</a>`
            )
            .join("")}
          <div class="mobile-menu-actions">
            <a class="btn btn-primary btn-block" data-route="cart">View Cart <span class="cart-count cart-count-inline" style="margin-left:0.5rem">0</span></a>
            <a class="btn btn-whatsapp btn-block" id="mobile-whatsapp">${Icons.whatsapp} Chat on WhatsApp</a>
          </div>
        </div>
      </div>
    `;
  }

  // ============================================================
  // FOOTER
  // ============================================================

  function renderFooter() {
    const socialHTML = renderSocialLinks("footer");
    return `
      <footer class="footer">
        <div class="container">
          <div class="footer-grid">
            <div class="footer-brand">
              <h3>Elvis's <span>Elegant</span> Closet</h3>
              <p>${escapeHtml(cfg.description)}</p>
            </div>
            <div class="footer-col">
              <h4>Shop</h4>
              <ul>
                <li><a data-route="shop">All Products</a></li>
                <li><a data-route="shop" data-params='{"category":"dresses"}'>Dresses</a></li>
                <li><a data-route="shop" data-params='{"category":"shirts"}'>Shirts & T-Shirts</a></li>
                <li><a data-route="shop" data-params='{"category":"two-piece"}'>Two-Piece Sets</a></li>
                <li><a data-route="shop" data-params='{"category":"accessories"}'>Accessories</a></li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>Company</h4>
              <ul>
                <li><a data-route="about">About Us</a></li>
                <li><a data-route="contact">Contact</a></li>
                <li><a data-route="shop">New Arrivals</a></li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>Connect</h4>
              <div class="social-links" style="margin-top:0.5rem">
                ${socialHTML}
              </div>
            </div>
          </div>
          <div class="footer-bottom">
            &copy; ${new Date().getFullYear()} ${escapeHtml(cfg.name)}. All rights reserved. Developed By AKLON.
          </div>
        </div>
      </footer>
    `;
  }

  function renderSocialLinks(context) {
    const socials = [
      { key: "instagram", icon: Icons.instagram, label: "Instagram" },
      { key: "tiktok", icon: Icons.tiktok, label: "TikTok" },
      { key: "facebook", icon: Icons.facebook, label: "Facebook" },
    ];
    return socials
      .map((s) => {
        const url = cfg.social[s.key];
        const isPlaceholder = !url || url === "PLACEHOLDER_URL";
        if (isPlaceholder) {
          return `<span class="social-link disabled" title="${s.label} — coming soon">${s.icon}</span>`;
        }
        return `<a href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer" class="social-link" title="${s.label}">${s.icon}</a>`;
      })
      .join("");
  }

  // ============================================================
  // FLOATING WHATSAPP BUTTON
  // ============================================================

  function renderFab() {
    return `<div class="fab-whatsapp" id="fab-whatsapp" title="Chat with us on WhatsApp">${Icons.whatsappLarge}</div>`;
  }

  // ============================================================
  // HOME PAGE
  // ============================================================

  function renderHome() {
    const newArrivals = products.filter((p) => p.newArrival).slice(0, 8);
    const featured = products.filter((p) => p.featured).slice(0, 4);

    return `
      <!-- HERO -->
      <section class="hero">
        <img class="hero-image" src="assets/hero.jpg" alt="Fashion model" data-product-name="Fashion">
        <div class="hero-overlay"></div>
        <div class="hero-content">
          <div class="hero-text">
            <div class="hero-eyebrow">${escapeHtml(cfg.name)}</div>
            <h1 class="hero-title">Style That <span class="accent-word">Speaks</span> For You</h1>
            <p class="hero-subtitle">Discover fashionable pieces for every occasion, from everyday looks to elegant outfits.</p>
            <div class="hero-buttons">
              <button class="btn btn-accent" data-route="shop">Shop Now ${Icons.arrowRight}</button>
              <button class="btn btn-outline-light" data-route="shop" data-params='{"category":"two-piece"}'>Explore Collections</button>
              <button href="https://wa.me/256778781601" target="_blank" rel="noopener" class="btn btn-whatsapp" id="hero-whatsapp">${Icons.whatsapp} WhatsApp Us</button>
            </div>
          </div>
        </div>
      </section>

      <!-- FEATURED COLLECTIONS -->
      <section class="section">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">Featured Collections</h2>
            <p class="section-subtitle">Explore our curated fashion categories</p>
          </div>
          <div class="collections-grid">
            ${categories
              .slice(0, 6)
              .map(
                (cat) => `
              <div class="collection-card" data-route="shop" data-params='{"category":"${cat.id}"}'>
                <img src="${cat.image}" alt="${escapeHtml(cat.name)}" data-product-name="${escapeHtml(cat.name)}">
                <div class="collection-overlay">
                  <div class="collection-name">${escapeHtml(cat.name)}</div>
                  <div class="collection-desc">${escapeHtml(cat.description)}</div>
                  <span class="collection-link">Shop Now ${Icons.arrowRight}</span>
                </div>
              </div>
            `
              )
              .join("")}
          </div>
        </div>
      </section>

      <!-- NEW ARRIVALS -->
      <section class="section" style="background:var(--color-surface-alt)">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">New Arrivals</h2>
            <p class="section-subtitle">Fresh styles just landed</p>
          </div>
          <div class="products-grid">
            ${newArrivals.map((p) => renderProductCard(p)).join("")}
          </div>
          <div class="text-center" style="margin-top:2.5rem">
            <button class="btn btn-secondary" data-route="shop">View All Products ${Icons.arrowRight}</button>
          </div>
        </div>
      </section>

      <!-- PROMO BANNER -->
      <section class="promo-banner">
        <div class="promo-banner-content">
          <h2>Your Style. <span class="accent-word">Your Statement.</span></h2>
          <p>Explore our latest fashion pieces.</p>
          <button class="btn btn-accent" data-route="shop">Shop New Arrivals ${Icons.arrowRight}</button>
        </div>
      </section>

      <!-- TRENDING / FEATURED -->
      <section class="section">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">Trending Now</h2>
            <p class="section-subtitle">Our most popular pieces</p>
          </div>
          <div class="products-grid">
            ${featured.map((p) => renderProductCard(p)).join("")}
          </div>
        </div>
      </section>

      <!-- WHY SHOP WITH US -->
      <section class="section" style="background:var(--color-surface-alt)">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">Why Shop With Us</h2>
            <p class="section-subtitle">Fashion made easy</p>
          </div>
          <div class="features-grid">
            ${renderFeatureCard(Icons.sparkles, "Quality Fashion", "Thoughtfully selected clothing and accessories.")}
            ${renderFeatureCard(Icons.whatsapp, "WhatsApp Ordering", "Place your order easily via WhatsApp chat.")}
            ${renderFeatureCard(Icons.layers, "Variety of Styles", "From casual wear to formal looks for everyone.")}
            ${renderFeatureCard(Icons.truck, "Convenient Shopping", "Browse, select, and order from anywhere.")}
          </div>
        </div>
      </section>
    `;
  }

  function renderFeatureCard(icon, title, desc) {
    return `
      <div class="feature-card">
        <div class="feature-icon">${icon}</div>
        <h4>${escapeHtml(title)}</h4>
        <p>${escapeHtml(desc)}</p>
      </div>
    `;
  }

  // ============================================================
  // PRODUCT CARD
  // ============================================================

  function renderProductCard(product) {
    const badges = [];
    if (product.newArrival) badges.push('<span class="product-badge badge-new">New</span>');
    if (product.featured) badges.push('<span class="product-badge badge-featured">Featured</span>');
    if (product.oldPrice) badges.push('<span class="product-badge badge-sale">Sale</span>');

    return `
      <div class="product-card">
        <div class="product-card-image" data-action="view-product" data-product-id="${product.id}">
          <img src="${product.image}" alt="${escapeHtml(product.name)}" data-product-name="${escapeHtml(product.name)}">
          ${badges.length ? `<div class="product-badges">${badges.join("")}</div>` : ""}
        </div>
        <div class="product-card-body">
          <div class="product-card-category">${escapeHtml(getCategoryName(product.category))}</div>
          <div class="product-card-name">${escapeHtml(product.name)}</div>
          <div class="product-card-desc">${escapeHtml(product.description)}</div>
          <div class="product-card-price">
            <span class="price-current">${formatPrice(product.price)}</span>
            ${product.oldPrice ? `<span class="price-old">${formatPrice(product.oldPrice)}</span>` : ""}
          </div>
        </div>
        <div class="product-card-actions">
          <button class="btn btn-secondary btn-sm" data-action="view-product" data-product-id="${product.id}">View</button>
          <button class="btn btn-primary btn-sm" data-action="add-to-cart" data-product-id="${product.id}">Add to Cart</button>
        </div>
      </div>
    `;
  }

  // ============================================================
  // SHOP PAGE
  // ============================================================

  function renderShop() {
    const allCats = [
      "dresses", "shirts", "two-piece", "jackets", "jeans", "trousers",
      "tops", "skirts", "shoes", "suits", "ties", "bags", "accessories", "other",
    ];

    return `
      <section class="section">
        <div class="container">
          <div class="breadcrumbs">
            <a data-route="home">Home</a>
            <span class="sep">/</span>
            <span>Shop</span>
          </div>
          <h1 class="section-title" style="text-align:left;font-size:2.5rem;margin-bottom:0.5rem">Shop</h1>
          <p class="text-muted" style="margin-bottom:2rem">Browse our full collection of fashion pieces</p>

          <button class="filter-toggle" id="filter-toggle">${Icons.filter} Filters</button>

          <div class="shop-layout">
            <!-- Sidebar -->
            <aside class="shop-sidebar" id="shop-sidebar">
              <div class="filter-group">
                <div class="filter-title">Gender</div>
                ${["all", "Women", "Men", "Unisex"]
                  .map(
                    (g) => `
                  <div class="filter-option">
                    <input type="radio" name="gender" value="${g}" id="gender-${g}" ${shopState.gender === g ? "checked" : ""}>
                    <label for="gender-${g}">${g === "all" ? "All" : g}</label>
                  </div>
                `
                  )
                  .join("")}
              </div>
              <div class="filter-group">
                <div class="filter-title">Category</div>
                <div class="filter-option">
                  <input type="radio" name="category" value="all" id="cat-all" ${shopState.category === "all" ? "checked" : ""}>
                  <label for="cat-all">All Categories</label>
                </div>
                ${allCats
                  .map(
                    (c) => `
                  <div class="filter-option">
                    <input type="radio" name="category" value="${c}" id="cat-${c}" ${shopState.category === c ? "checked" : ""}>
                    <label for="cat-${c}">${escapeHtml(getCategoryName(c))}</label>
                  </div>
                `
                  )
                  .join("")}
              </div>
              <button class="btn btn-secondary btn-sm btn-block" id="clear-filters" style="margin-top:0.5rem">Clear Filters</button>
            </aside>

            <!-- Main -->
            <div class="shop-main">
              <div class="shop-toolbar">
                <div class="shop-search">
                  ${Icons.search}
                  <input type="text" id="shop-search" placeholder="Search for dresses, shirts, t-shirts..." value="${escapeHtml(shopState.search)}">
                </div>
                <select class="shop-sort" id="shop-sort">
                  <option value="featured" ${shopState.sort === "featured" ? "selected" : ""}>Featured</option>
                  <option value="newest" ${shopState.sort === "newest" ? "selected" : ""}>Newest</option>
                  <option value="price-low" ${shopState.sort === "price-low" ? "selected" : ""}>Price: Low to High</option>
                  <option value="price-high" ${shopState.sort === "price-high" ? "selected" : ""}>Price: High to Low</option>
                  <option value="name-az" ${shopState.sort === "name-az" ? "selected" : ""}>Name: A-Z</option>
                  <option value="name-za" ${shopState.sort === "name-za" ? "selected" : ""}>Name: Z-A</option>
                </select>
              </div>
              <div class="shop-results-count" id="results-count"></div>
              <div id="shop-results"></div>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  function getFilteredProducts() {
    let filtered = products.slice();

    // Gender filter
    if (shopState.gender !== "all") {
      filtered = filtered.filter((p) => p.gender === shopState.gender);
    }

    // Category filter
    if (shopState.category !== "all") {
      filtered = filtered.filter((p) => p.category === shopState.category);
    }

    // Search
    if (shopState.search.trim()) {
      const q = shopState.search.toLowerCase().trim();
      filtered = filtered.filter((p) => {
        const haystack = [
          p.name,
          p.description,
          p.category,
          getCategoryName(p.category),
          p.gender,
          (p.tags || []).join(" "),
        ]
          .join(" ")
          .toLowerCase();
        return haystack.includes(q);
      });
    }

    // Sort
    switch (shopState.sort) {
      case "newest":
        filtered.sort((a, b) => (b.newArrival ? 1 : 0) - (a.newArrival ? 1 : 0));
        break;
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "name-az":
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-za":
        filtered.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    return filtered;
  }

  function updateShopResults() {
    const resultsContainer = document.getElementById("shop-results");
    const countEl = document.getElementById("results-count");
    if (!resultsContainer) return;

    const filtered = getFilteredProducts();
    countEl.textContent = `${filtered.length} product${filtered.length !== 1 ? "s" : ""} found`;

    if (filtered.length === 0) {
      resultsContainer.innerHTML = `
        <div class="empty-state">
          <div class="empty-state-icon">${Icons.search}</div>
          <h3>No products found</h3>
          <p>Try another search or browse our collections.</p>
          <button class="btn btn-primary" id="reset-search">View All Products</button>
        </div>
      `;
      const resetBtn = document.getElementById("reset-search");
      if (resetBtn) {
        resetBtn.addEventListener("click", () => {
          shopState.search = "";
          shopState.gender = "all";
          shopState.category = "all";
          shopState.sort = "featured";
          renderPage();
          attachShopListeners();
        });
      }
    } else {
      resultsContainer.innerHTML = `<div class="products-grid">${filtered.map((p) => renderProductCard(p)).join("")}</div>`;
      afterRender();
      attachProductCardListeners();
    }
  }

  function attachShopListeners() {
    // Search
    const searchInput = document.getElementById("shop-search");
    if (searchInput) {
      let debounce;
      searchInput.addEventListener("input", (e) => {
        clearTimeout(debounce);
        debounce = setTimeout(() => {
          shopState.search = e.target.value;
          updateShopResults();
        }, 200);
      });
    }

    // Sort
    const sortSelect = document.getElementById("shop-sort");
    if (sortSelect) {
      sortSelect.addEventListener("change", (e) => {
        shopState.sort = e.target.value;
        updateShopResults();
      });
    }

    // Gender radios
    document.querySelectorAll('input[name="gender"]').forEach((radio) => {
      radio.addEventListener("change", (e) => {
        shopState.gender = e.target.value;
        updateShopResults();
      });
    });

    // Category radios
    document.querySelectorAll('input[name="category"]').forEach((radio) => {
      radio.addEventListener("change", (e) => {
        shopState.category = e.target.value;
        updateShopResults();
      });
    });

    // Clear filters
    const clearBtn = document.getElementById("clear-filters");
    if (clearBtn) {
      clearBtn.addEventListener("click", () => {
        shopState.search = "";
        shopState.gender = "all";
        shopState.category = "all";
        shopState.sort = "featured";
        renderPage();
        attachShopListeners();
      });
    }

    // Filter toggle (mobile)
    const filterToggle = document.getElementById("filter-toggle");
    const sidebar = document.getElementById("shop-sidebar");
    if (filterToggle && sidebar) {
      filterToggle.addEventListener("click", () => {
        sidebar.classList.toggle("open");
      });
      // Close sidebar when clicking outside on mobile
      document.addEventListener("click", function closeSidebar(e) {
        if (window.innerWidth > 768) return;
        if (sidebar.classList.contains("open") &&
            !sidebar.contains(e.target) &&
            !filterToggle.contains(e.target)) {
          sidebar.classList.remove("open");
        }
      });
    }

    updateShopResults();
  }

  // ============================================================
  // PRODUCT DETAIL PAGE
  // ============================================================

  // State for the currently viewed product
  let detailState = { selectedSize: null, selectedColor: null, quantity: 1 };

  function renderProductDetail() {
    const product = getProductById(currentProductId);
    if (!product) {
      return `
        <section class="section">
          <div class="container">
            <div class="empty-state">
              <div class="empty-state-icon">${Icons.shoppingBag}</div>
              <h3>Product not found</h3>
              <p>The product you're looking for doesn't exist or may have been removed.</p>
              <button class="btn btn-primary" data-route="shop">Continue Shopping</button>
            </div>
          </div>
        </section>
      `;
    }

    // Reset detail state
    detailState = {
      selectedSize: product.sizes && product.sizes.length ? null : null,
      selectedColor: product.colors && product.colors.length ? null : null,
      quantity: 1,
    };

    const badges = [];
    if (product.newArrival) badges.push('<span class="product-badge badge-new">New Arrival</span>');
    if (product.featured) badges.push('<span class="product-badge badge-featured">Featured</span>');
    if (product.oldPrice) badges.push('<span class="product-badge badge-sale">On Sale</span>');

    return `
      <section class="section">
        <div class="container">
          <div class="breadcrumbs">
            <a data-route="home">Home</a>
            <span class="sep">/</span>
            <a data-route="shop">Shop</a>
            <span class="sep">/</span>
            <span>${escapeHtml(product.name)}</span>
          </div>
          <div class="product-detail">
            <!-- Gallery -->
            <div class="product-gallery">
              <div class="product-gallery-main" id="gallery-main">
                <img src="${product.image}" alt="${escapeHtml(product.name)}" data-product-name="${escapeHtml(product.name)}">
                ${badges.length ? `<div class="product-badges" style="top:1rem;left:1rem">${badges.join("")}</div>` : ""}
              </div>
            </div>

            <!-- Info -->
            <div class="product-info">
              <div class="product-info-category">${escapeHtml(getCategoryName(product.category))}</div>
              <h1 class="product-info-name">${escapeHtml(product.name)}</h1>
              <div class="product-info-price">
                <span class="price-current">${formatPrice(product.price)}</span>
                ${product.oldPrice ? `<span class="price-old">${formatPrice(product.oldPrice)}</span>` : ""}
              </div>
              <p class="product-info-desc">${escapeHtml(product.description)}</p>
              <div class="product-meta">
                <div class="product-meta-item"><strong>Gender:</strong> ${escapeHtml(product.gender)}</div>
                <div class="product-meta-item"><strong>Category:</strong> ${escapeHtml(getCategoryName(product.category))}</div>
              </div>

              ${product.sizes && product.sizes.length ? `
                <div class="selector-group">
                  <div class="selector-label">Size</div>
                  <div class="selector-options" id="size-options">
                    ${product.sizes.map((s) => `<button class="selector-option" data-size="${escapeHtml(s)}">${escapeHtml(s)}</button>`).join("")}
                  </div>
                </div>
              ` : ""}

              ${product.colors && product.colors.length ? `
                <div class="selector-group">
                  <div class="selector-label">Color</div>
                  <div class="selector-options" id="color-options">
                    ${product.colors.map((c) => `<button class="selector-option" data-color="${escapeHtml(c)}">${escapeHtml(c)}</button>`).join("")}
                  </div>
                </div>
              ` : ""}

              <div class="selector-group">
                <div class="selector-label">Quantity</div>
                <div class="quantity-selector">
                  <button class="quantity-btn" id="qty-minus">${Icons.minus}</button>
                  <input type="number" class="quantity-input" id="qty-input" value="1" min="1" max="99">
                  <button class="quantity-btn" id="qty-plus">${Icons.plus}</button>
                </div>
              </div>

              <div class="product-detail-actions">
                <button class="btn btn-primary" id="detail-add-cart">Add to Cart</button>
                <button class="btn btn-whatsapp" id="detail-whatsapp">${Icons.whatsapp} Order on WhatsApp</button>
              </div>

              <div class="product-meta" style="margin-top:1rem;padding-top:1rem;border-top:1px solid var(--color-border)">
                <div class="product-meta-item">${Icons.whatsapp} Order via WhatsApp for quick assistance</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  function attachProductDetailListeners() {
    const product = getProductById(currentProductId);
    if (!product) return;

    // Size selection
    document.querySelectorAll("#size-options .selector-option").forEach((btn) => {
      btn.addEventListener("click", () => {
        document.querySelectorAll("#size-options .selector-option").forEach((b) => b.classList.remove("selected"));
        btn.classList.add("selected");
        detailState.selectedSize = btn.dataset.size;
      });
    });

    // Color selection
    document.querySelectorAll("#color-options .selector-option").forEach((btn) => {
      btn.addEventListener("click", () => {
        document.querySelectorAll("#color-options .selector-option").forEach((b) => b.classList.remove("selected"));
        btn.classList.add("selected");
        detailState.selectedColor = btn.dataset.color;
      });
    });

    // Quantity
    const qtyInput = document.getElementById("qty-input");
    const qtyMinus = document.getElementById("qty-minus");
    const qtyPlus = document.getElementById("qty-plus");

    if (qtyMinus) qtyMinus.addEventListener("click", () => {
      const v = Math.max(1, parseInt(qtyInput.value, 10) - 1);
      qtyInput.value = v;
      detailState.quantity = v;
    });
    if (qtyPlus) qtyPlus.addEventListener("click", () => {
      const v = Math.min(99, parseInt(qtyInput.value, 10) + 1);
      qtyInput.value = v;
      detailState.quantity = v;
    });
    if (qtyInput) qtyInput.addEventListener("change", () => {
      const v = Math.max(1, Math.min(99, parseInt(qtyInput.value, 10) || 1));
      qtyInput.value = v;
      detailState.quantity = v;
    });

    // Add to cart
    const addCartBtn = document.getElementById("detail-add-cart");
    if (addCartBtn) addCartBtn.addEventListener("click", () => {
      if (product.sizes && product.sizes.length && !detailState.selectedSize) {
        showToast("Please select a size");
        return;
      }
      if (product.colors && product.colors.length && !detailState.selectedColor) {
        showToast("Please select a color");
        return;
      }
      Cart.add(product, {
        size: detailState.selectedSize,
        color: detailState.selectedColor,
        quantity: detailState.quantity,
      });
      showToast(`${product.name} added to cart`);
    });

    // Quick WhatsApp order
    const waBtn = document.getElementById("detail-whatsapp");
    if (waBtn) waBtn.addEventListener("click", () => {
      if (product.sizes && product.sizes.length && !detailState.selectedSize) {
        showToast("Please select a size");
        return;
      }
      if (product.colors && product.colors.length && !detailState.selectedColor) {
        showToast("Please select a color");
        return;
      }
      const msg = WhatsApp.buildSingleOrderMessage(product, {
        quantity: detailState.quantity,
        size: detailState.selectedSize,
        color: detailState.selectedColor,
      });
      WhatsApp.open(msg);
    });
  }

  // ============================================================
  // CART PAGE
  // ============================================================

  function renderCart() {
    const items = Cart.getItems();

    if (items.length === 0) {
      return `
        <section class="section">
          <div class="container">
            <div class="empty-state">
              <div class="empty-state-icon">${Icons.shoppingBag}</div>
              <h3>Your cart is empty</h3>
              <p>Discover something you'll love in our collection.</p>
              <button class="btn btn-primary" data-route="shop">Continue Shopping</button>
            </div>
          </div>
        </section>
      `;
    }

    const subtotal = Cart.getSubtotal();

    return `
      <section class="section">
        <div class="container">
          <div class="breadcrumbs">
            <a data-route="home">Home</a>
            <span class="sep">/</span>
            <span>Cart</span>
          </div>
          <h1 class="section-title" style="text-align:left;font-size:2.5rem;margin-bottom:2rem">Your Cart</h1>

          <div class="cart-layout">
            <!-- Items -->
            <div class="cart-items" id="cart-items">
              ${items
                .map(
                  (item, i) => `
                <div class="cart-item">
                  <div class="cart-item-image">
                    <img src="${item.image}" alt="${escapeHtml(item.name)}" data-product-name="${escapeHtml(item.name)}">
                  </div>
                  <div class="cart-item-info">
                    <div class="cart-item-name">${escapeHtml(item.name)}</div>
                    ${item.size ? `<div class="cart-item-variant">Size: ${escapeHtml(item.size)}</div>` : ""}
                    ${item.color ? `<div class="cart-item-variant">Color: ${escapeHtml(item.color)}</div>` : ""}
                    <div class="cart-item-price">${formatPrice(item.price * item.quantity)}</div>
                  </div>
                  <div class="cart-item-controls">
                    <div class="quantity-selector" style="margin-bottom:0.5rem">
                      <button class="quantity-btn" data-action="decrement" data-index="${i}">${Icons.minus}</button>
                      <input type="number" class="quantity-input" value="${item.quantity}" min="1" max="99" data-action="set-qty" data-index="${i}">
                      <button class="quantity-btn" data-action="increment" data-index="${i}">${Icons.plus}</button>
                    </div>
                    <button class="cart-item-remove" data-action="remove-item" data-index="${i}">${Icons.trash} Remove</button>
                  </div>
                </div>
              `
                )
                .join("")}
            </div>

            <!-- Summary -->
            <div class="cart-summary">
              <h3>Order Summary</h3>
              <div class="summary-row">
                <span>Items</span>
                <span>${Cart.getCount()}</span>
              </div>
              <div class="summary-row">
                <span>Subtotal</span>
                <span>${formatPrice(subtotal)}</span>
              </div>
              <div class="summary-total">
                <span>Estimated Total</span>
                <span>${formatPrice(subtotal)}</span>
              </div>

              <!-- Checkout form -->
              <div class="checkout-form">
                <h4>Customer Details</h4>
                <div class="form-field">
                  <label for="cust-name">Full Name <span class="required">*</span></label>
                  <input type="text" id="cust-name" placeholder="Your name">
                  <span class="field-error">Please enter your name</span>
                </div>
                <div class="form-row">
                  <div class="form-field">
                    <label for="cust-phone">Phone Number <span class="required">*</span></label>
                    <input type="tel" id="cust-phone" placeholder="e.g. 0700 000 000">
                    <span class="field-error">Please enter your phone number</span>
                  </div>
                  <div class="form-field">
                    <label for="cust-location">Delivery Location <span class="required">*</span></label>
                    <input type="text" id="cust-location" placeholder="Your area/address">
                    <span class="field-error">Please enter your location</span>
                  </div>
                </div>
                <div class="form-field">
                  <label for="cust-date">Preferred Delivery Date (optional)</label>
                  <input type="date" id="cust-date">
                </div>
                <div class="form-field">
                  <label for="cust-contact">Preferred Contact Method (optional)</label>
                  <select id="cust-contact">
                    <option value="">Select...</option>
                    <option value="WhatsApp">WhatsApp</option>
                    <option value="Phone Call">Phone Call</option>
                    <option value="SMS">SMS</option>
                  </select>
                </div>
                <div class="form-field">
                  <label for="cust-notes">Additional Notes (optional)</label>
                  <textarea id="cust-notes" rows="3" placeholder="Any special instructions..."></textarea>
                </div>
                <button class="btn btn-whatsapp btn-block" id="checkout-whatsapp">${Icons.whatsapp} Checkout on WhatsApp</button>
                <button class="btn btn-secondary btn-block" id="clear-cart" style="margin-top:0.5rem">Clear Cart</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  function attachCartListeners() {
    const items = Cart.getItems();
    if (items.length === 0) return;

    // Increment / decrement / remove
    document.querySelectorAll("[data-action]").forEach((el) => {
      el.addEventListener("click", (e) => {
        const action = el.dataset.action;
        const index = parseInt(el.dataset.index, 10);
        if (action === "increment") {
          Cart.increment(index);
          renderPage();
          attachCartListeners();
        } else if (action === "decrement") {
          Cart.decrement(index);
          renderPage();
          attachCartListeners();
        } else if (action === "remove-item") {
          Cart.removeItem(index);
          renderPage();
          attachCartListeners();
        }
      });
    });

    // Quantity input
    document.querySelectorAll('[data-action="set-qty"]').forEach((input) => {
      input.addEventListener("change", (e) => {
        const index = parseInt(input.dataset.index, 10);
        Cart.setQuantity(index, input.value);
        renderPage();
        attachCartListeners();
      });
    });

    // Clear cart
    const clearBtn = document.getElementById("clear-cart");
    if (clearBtn) {
      clearBtn.addEventListener("click", () => {
        Cart.clear();
        renderPage();
      });
    }

    // WhatsApp checkout
    const checkoutBtn = document.getElementById("checkout-whatsapp");
    if (checkoutBtn) {
      checkoutBtn.addEventListener("click", () => {
        let valid = true;
        const fields = [
          { id: "cust-name", key: "name" },
          { id: "cust-phone", key: "phone" },
          { id: "cust-location", key: "location" },
        ];

        const customer = {};
        fields.forEach((f) => {
          const el = document.getElementById(f.id);
          const fieldEl = el.closest(".form-field");
          if (!el.value.trim()) {
            fieldEl.classList.add("error");
            valid = false;
          } else {
            fieldEl.classList.remove("error");
            customer[f.key] = el.value.trim();
          }
        });

        customer.deliveryDate = (document.getElementById("cust-date") || {}).value || "";
        customer.contactMethod = (document.getElementById("cust-contact") || {}).value || "";
        customer.notes = (document.getElementById("cust-notes") || {}).value || "";

        if (!valid) {
          showToast("Please fill in all required fields");
          return;
        }

        const msg = WhatsApp.buildOrderMessage(Cart.getItems(), customer);
        WhatsApp.open(msg);
      });
    }
  }

  // ============================================================
  // ABOUT PAGE
  // ============================================================

  function renderAbout() {
    return `
      <section class="about-hero">
        <div class="container">
          <h1>About Us</h1>
          <p>${escapeHtml(cfg.description)}</p>
        </div>
      </section>
      <section class="about-content">
        <div class="about-image">
          <img src="assets/Polish_20260930_164458045 (1).jpg" alt="Boutique interior" data-product-name="Boutique">
        </div>
        <h3>Our Story</h3>
        <p>
          Elvis's Elegant Closet is a fashion retail brand focused on bringing stylish
          clothing and accessories closer to modern customers. We believe that great
          style should be accessible, effortless, and fun — whether you're dressing for
          a casual day out, a special occasion, or simply expressing who you are.
        </p>
        <p>
          From everyday essentials to statement pieces, our collections are curated with
          care to offer something for everyone — ladies and gentlemen alike.
        </p>
        <div class="about-placeholder-note">
         We are here to offer you the best of the best, do the rest and  leave your clothing culture to us.
        </div>
        <h3>What We Offer</h3>
        <p>
          Our range includes dresses, shirts, t-shirts, trousers, jeans, two-piece
          outfits, jackets, blazers, shoes, bags, and accessories — with new arrivals
          added regularly.
        </p>
        <h3>How to Order</h3>
        <p>
          Browse our online store, add your favourite pieces to the cart, and send your
          order directly to us via WhatsApp. It's simple, fast, and convenient.
        </p>
        <div class="text-center" style="margin:2.5rem 0">
          <button class="btn btn-primary" data-route="shop">Start Shopping ${Icons.arrowRight}</button>
        </div>
      </section>
    `;
  }

  // ============================================================
  // CONTACT PAGE
  // ============================================================

  function renderContact() {
    const cfg_ = cfg;
    const phoneDisplay = cfg_.phone === "PLACEHOLDER_PHONE" ? "Coming soon" : escapeHtml(cfg_.phone);
    const whatsappDisplay = cfg_.whatsapp === "256700000000" ? "Coming soon" : `+${cfg_.whatsapp}`;
    const emailDisplay = cfg_.email === "PLACEHOLDER_EMAIL" ? "Coming soon" : escapeHtml(cfg_.email);
    const locationDisplay = cfg_.location === "PLACEHOLDER_LOCATION" ? "Business location will be added here." : escapeHtml(cfg_.location);

    return `
      <section class="section">
        <div class="container">
          <div class="breadcrumbs">
            <a data-route="home">Home</a>
            <span class="sep">/</span>
            <span>Contact</span>
          </div>
          <h1 class="section-title" style="text-align:left;font-size:2.5rem;margin-bottom:0.5rem">Get In Touch</h1>
          <p class="text-muted" style="margin-bottom:2rem">We'd love to hear from you. Reach out with any questions or enquiries.</p>

          <div class="contact-layout">
            <!-- Contact Info -->
            <div class="contact-info">
              <div class="contact-card">
                <div class="contact-card-icon">${Icons.phone}</div>
                <div>
                  <h4>Phone</h4>
                  <p>${phoneDisplay}</p>
                </div>
              </div>
              <div class="contact-card">
                <div class="contact-card-icon">${Icons.whatsapp}</div>
                <div>
                  <h4>WhatsApp</h4>
                  <p>${whatsappDisplay}</p>
                </div>
              </div>
              <div class="contact-card">
                <div class="contact-card-icon">${Icons.mail}</div>
                <div>
                  <h4>Email</h4>
                  <p>${emailDisplay}</p>
                </div>
              </div>
              <div class="contact-card">
                <div class="contact-card-icon">${Icons.mapPin}</div>
                <div>
                  <h4>Location</h4>
                  <p>${locationDisplay}</p>
                </div>
              </div>
              <div class="contact-card">
                <div class="contact-card-icon">${Icons.clock}</div>
                <div>
                  <h4>Opening Hours</h4>
                  ${cfg_.hours.map((h) => `<p>${escapeHtml(h.day)}: ${escapeHtml(h.hours)}</p>`).join("")}
                </div>
              </div>

              <div style="margin-top:0.5rem">
                <h4 style="font-family:var(--font-body);font-size:0.875rem;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:0.75rem;color:var(--color-text-secondary)">Follow Us</h4>
                <div class="social-links">
                  ${renderSocialLinks("contact")}
                </div>
              </div>
            </div>

            <!-- Contact Form -->
            <div class="contact-form">
              <h3>Send Us a Message</h3>
              <p class="text-muted" style="font-size:0.875rem;margin-bottom:1rem">Fill in the form below and we'll receive your enquiry on WhatsApp.</p>
              <div class="form-field">
                <label for="contact-name">Name <span class="required">*</span></label>
                <input type="text" id="contact-name" placeholder="Your name">
                <span class="field-error">Please enter your name</span>
              </div>
              <div class="form-row">
                <div class="form-field">
                  <label for="contact-phone">Phone <span class="required">*</span></label>
                  <input type="tel" id="contact-phone" placeholder="Your phone">
                  <span class="field-error">Please enter your phone</span>
                </div>
                <div class="form-field">
                  <label for="contact-email">Email</label>
                  <input type="email" id="contact-email" placeholder="Your email">
                </div>
              </div>
              <div class="form-field">
                <label for="contact-subject">Subject <span class="required">*</span></label>
                <input type="text" id="contact-subject" placeholder="Subject">
                <span class="field-error">Please enter a subject</span>
              </div>
              <div class="form-field">
                <label for="contact-message">Message <span class="required">*</span></label>
                <textarea id="contact-message" rows="5" placeholder="Your message..."></textarea>
                <span class="field-error">Please enter a message</span>
              </div>
              <button class="btn btn-whatsapp btn-block" id="contact-submit">${Icons.whatsapp} Send Enquiry on WhatsApp</button>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  function attachContactListeners() {
    const submitBtn = document.getElementById("contact-submit");
    if (!submitBtn) return;

    submitBtn.addEventListener("click", () => {
      let valid = true;
      const required = [
        { id: "contact-name", key: "name" },
        { id: "contact-phone", key: "phone" },
        { id: "contact-subject", key: "subject" },
        { id: "contact-message", key: "message" },
      ];

      const data = {};
      required.forEach((f) => {
        const el = document.getElementById(f.id);
        const fieldEl = el.closest(".form-field");
        if (!el.value.trim()) {
          fieldEl.classList.add("error");
          valid = false;
        } else {
          fieldEl.classList.remove("error");
          data[f.key] = el.value.trim();
        }
      });

      data.email = (document.getElementById("contact-email") || {}).value || "";

      if (!valid) {
        showToast("Please fill in all required fields");
        return;
      }

      const msg = WhatsApp.buildContactMessage(data);
      WhatsApp.open(msg);
    });
  }

  // ============================================================
  // EVENT DELEGATION & LISTENER ATTACHMENT
  // ============================================================

  function attachProductCardListeners() {
    document.querySelectorAll('[data-action="view-product"]').forEach((el) => {
      el.addEventListener("click", () => {
        const id = el.dataset.productId;
        navigate("product", { productId: id });
        attachProductDetailListeners();
      });
    });

    document.querySelectorAll('[data-action="add-to-cart"]').forEach((el) => {
      el.addEventListener("click", (e) => {
        e.stopPropagation();
        const id = parseInt(el.dataset.productId, 10);
        const product = getProductById(id);
        if (!product) return;

        // If product has sizes/colors, go to product page for selection
        if ((product.sizes && product.sizes.length) || (product.colors && product.colors.length)) {
          navigate("product", { productId: id });
          attachProductDetailListeners();
          showToast("Select size and color to add to cart");
          return;
        }

        Cart.add(product, { quantity: 1 });
        showToast(`${product.name} added to cart`);
      });
    });
  }

  function attachNavigationListeners() {
    // Route-based clicks (data-route)
    document.addEventListener("click", (e) => {
      // Walk up to find the closest [data-route]
      let target = e.target;
      while (target && target !== document.body) {
        if (target.dataset && target.dataset.route) {
          const route = target.dataset.route;
          const paramsStr = target.dataset.params;
          let params = {};
          if (paramsStr) {
            try { params = JSON.parse(paramsStr); } catch (err) { params = {}; }
          }
          navigate(route, params);
          if (route === "shop") attachShopListeners();
          if (route === "product") attachProductDetailListeners();
          if (route === "cart") attachCartListeners();
          if (route === "contact") attachContactListeners();
          e.preventDefault();
          return;
        }
        target = target.parentElement;
      }
    });

    // Navbar scroll effect
    window.addEventListener("scroll", () => {
      const navbar = document.getElementById("navbar");
      if (navbar) {
        navbar.classList.toggle("scrolled", window.scrollY > 20);
      }
    });

    // Hamburger
    const hamburger = document.getElementById("hamburger");
    const mobileMenu = document.getElementById("mobile-menu");
    if (hamburger && mobileMenu) {
      hamburger.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleMobileMenu();
      });
    }

    // WhatsApp buttons (nav + mobile + fab + hero)
    const waElements = [
      { id: "nav-whatsapp", msg: WhatsApp.buildEnquiryMessage() },
      { id: "mobile-whatsapp", msg: WhatsApp.buildEnquiryMessage() },
      { id: "fab-whatsapp", msg: WhatsApp.buildEnquiryMessage() },
      { id: "hero-whatsapp", msg: WhatsApp.buildEnquiryMessage() },
    ];
    waElements.forEach(({ id, msg }) => {
      const el = document.getElementById(id);
      if (el) el.addEventListener("click", () => WhatsApp.open(msg));
    });
  }

  function toggleMobileMenu() {
    const hamburger = document.getElementById("hamburger");
    const mobileMenu = document.getElementById("mobile-menu");
    if (!hamburger || !mobileMenu) return;
    hamburger.classList.toggle("active");
    mobileMenu.classList.toggle("open");
    document.body.classList.toggle("menu-open");
  }

  function closeMobileMenu() {
    const hamburger = document.getElementById("hamburger");
    const mobileMenu = document.getElementById("mobile-menu");
    if (hamburger) hamburger.classList.remove("active");
    if (mobileMenu) mobileMenu.classList.remove("open");
    document.body.classList.remove("menu-open");
  }

  // ============================================================
  // INIT
  // ============================================================

  function init() {
    // Load cart from localStorage
    Cart.load();

    // Build the app shell
    app.innerHTML = `
      ${renderNavbar()}
      <div id="page"></div>
      ${renderFooter()}
      ${renderFab()}
    `;

    // Get page reference now that shell HTML exists
    pageEl = document.getElementById("page");

    // Render initial page
    renderPage();

    // Attach global listeners
    attachNavigationListeners();

    // Attach page-specific listeners
    attachProductCardListeners();
    if (currentRoute === "shop") attachShopListeners();
    if (currentRoute === "product") attachProductDetailListeners();
    if (currentRoute === "cart") attachCartListeners();
    if (currentRoute === "contact") attachContactListeners();

    // Update cart badge
    Cart.updateBadge();
  }

  // Start when DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
