// ─── EDIT THESE VALUES BEFORE DEPLOYING ───────────────────────────────────────
// Every contact and delivery detail on the site is read from here.
export const BUSINESS = {
  name: "Petal & Leaf",
  tagline: "Fresh Plants Delivered to Your Door in Kadawatha & Colombo",
  description:
    "We grow and deliver beautiful indoor and outdoor plants right to your doorstep across Kadawatha, Colombo and surrounding areas. Every plant is healthy, well-rooted, and packed with care.",
  isDemo: true,                     // shows a "Demo site" note in the footer; set false with real details
  whatsapp: "94XXXXXXXXX",          // e.g. "94771234567" — no + or spaces
  instagram: "@your_handle",        // e.g. "@petalandleaf.lk"
  facebook: "your-page-name",       // e.g. "petalandleaflk"
  email: "",                        // optional
  serviceArea: "Kadawatha, Colombo", // short form, followed by "& surrounding areas"
  deliveryAreas: "Kadawatha, Kelaniya, Peliyagoda, Wattala, Ja-Ela, Colombo and surrounding areas",
  deliveryDays: "Tuesday, Thursday & Saturday",
  deliveryNote: "Orders placed before 8 PM will be dispatched the next available delivery day.",
  currency: "LKR",
};

/** wa.me link to the shop's WhatsApp, with an optional pre-filled message. */
export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${BUSINESS.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const IG_URL  = `https://instagram.com/${BUSINESS.instagram.replace("@", "")}`;
export const FB_URL  = `https://facebook.com/${BUSINESS.facebook}`;
