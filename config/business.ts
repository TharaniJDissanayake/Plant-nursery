// ─── EDIT THESE VALUES BEFORE DEPLOYING ───────────────────────────────────────
export const BUSINESS = {
  name: "Petal & Leaf",
  tagline: "Fresh Plants Delivered to Your Door in Kadawatha & Colombo",
  description:
    "We grow and deliver beautiful indoor and outdoor plants right to your doorstep across Kadawatha, Colombo and surrounding areas. Every plant is healthy, well-rooted, and packed with care.",
  whatsapp: "94XXXXXXXXX",          // e.g. "94771234567" — no + or spaces
  instagram: "@your_handle",        // e.g. "@petalandleaf.lk"
  facebook: "your-page-name",       // e.g. "petalandleaflk"
  email: "",                        // optional
  deliveryAreas: "Kadawatha, Kelaniya, Peliyagoda, Wattala, Ja-Ela, Colombo and surrounding areas",
  deliveryDays: "Tuesday, Thursday & Saturday",
  deliveryNote: "Orders placed before 8 PM will be dispatched the next available delivery day.",
  currency: "LKR",
};

export const WA_BASE = `https://wa.me/${BUSINESS.whatsapp}`;
export const IG_URL  = `https://instagram.com/${BUSINESS.instagram.replace("@", "")}`;
export const FB_URL  = `https://facebook.com/${BUSINESS.facebook}`;
