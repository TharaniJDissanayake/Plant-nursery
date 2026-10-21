export interface Plant {
  id: string;
  name: string;
  nameSi?: string;          // Sinhala name (optional)
  price: number;
  category: "indoor" | "outdoor" | "flowering" | "edible" | "succulent";
  care: string;
  light: "low" | "medium" | "bright";
  water: "low" | "medium" | "high";
  badge?: string;            // e.g. "Best Seller", "New"
  image: string;             // path under /public, e.g. "/images/plants/anthurium.jpg"
  imageAlt: string;          // describes the photo for screen readers
  inStock?: boolean;         // defaults to true; set false to mark sold out
}

export const plants: Plant[] = [
  {
    id: "monstera-deliciosa",
    name: "Monstera Deliciosa",
    price: 1800,
    category: "indoor",
    care: "Thrives in indirect light. Water every 1–2 weeks. Perfect for living rooms.",
    light: "medium",
    water: "medium",
    badge: "Best Seller",
    image: "/images/plants/monstera-deliciosa.jpg",
    imageAlt: "Monstera deliciosa with large split leaves in a cream pot",
  },
  {
    id: "snake-plant",
    name: "Snake Plant",
    price: 950,
    category: "indoor",
    care: "Extremely low maintenance. Tolerates low light and irregular watering.",
    light: "low",
    water: "low",
    badge: "Easy Care",
    image: "/images/plants/snake-plant.jpg",
    imageAlt: "Person holding a tall green snake plant in a white pot",
  },
  {
    id: "peace-lily",
    name: "Peace Lily",
    price: 1200,
    category: "indoor",
    care: "Loves shade and humidity. Blooms white flowers. Great for bedrooms.",
    light: "low",
    water: "medium",
    image: "/images/plants/peace-lily.jpg",
    imageAlt: "Close-up of a white peace lily flower beside a window",
  },
  {
    id: "pothos-golden",
    name: "Pothos (Golden)",
    price: 650,
    category: "indoor",
    care: "Fast-growing trailer. Tolerates low light. Ideal for shelves and hanging.",
    light: "low",
    water: "low",
    badge: "Popular",
    image: "/images/plants/pothos-golden.jpg",
    imageAlt: "Golden pothos leaves with cream and yellow variegation",
  },
  {
    id: "succulent-set",
    name: "Succulent Set (3 Pots)",
    price: 1500,
    category: "succulent",
    care: "Minimal water needed. Loves bright sun. Perfect for desks and windowsills.",
    light: "bright",
    water: "low",
    badge: "Gift Ready",
    image: "/images/plants/succulent-set.jpg",
    imageAlt: "Small succulents in terracotta pots on a white tray",
  },
  {
    id: "anthurium",
    name: "Anthurium",
    price: 2200,
    category: "flowering",
    care: "Striking red blooms year-round. Needs bright indirect light and humidity.",
    light: "medium",
    water: "medium",
    image: "/images/plants/anthurium.jpg",
    imageAlt: "Glossy red anthurium blooms with yellow spadices among green leaves",
  },
  {
    id: "jasmine-pichcha",
    name: "Jasmine (Pichcha)",
    nameSi: "පිච්ච",
    price: 800,
    category: "flowering",
    care: "Fragrant white flowers beloved in Sri Lanka. Thrives outdoors in full sun.",
    light: "bright",
    water: "medium",
    badge: "Local Favourite",
    image: "/images/plants/jasmine-pichcha.jpg",
    imageAlt: "White jasmine (pichcha) flower growing through a dark iron gate",
  },
  {
    id: "curry-leaf",
    name: "Curry Leaf Plant",
    nameSi: "කරපිංචා",
    price: 750,
    category: "edible",
    care: "Grow your own curry leaves at home. Needs full sun and well-drained soil.",
    light: "bright",
    water: "medium",
    badge: "Edible",
    image: "/images/plants/curry-leaf.jpg",
    imageAlt: "Hand holding fresh sprigs of green curry leaves",
  },
];

export const lightLabel: Record<Plant["light"], string> = {
  low: "Low Light",
  medium: "Indirect Light",
  bright: "Full Sun",
};

export const waterLabel: Record<Plant["water"], string> = {
  low: "Water rarely",
  medium: "Water weekly",
  high: "Water often",
};
