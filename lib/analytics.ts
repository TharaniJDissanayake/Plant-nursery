// Typed wrapper around GA4's gtag for custom events.

export type WhatsAppLocation =
  | "plant_card"
  | "navbar"
  | "hero"
  | "home_cta"
  | "shop_cta"
  | "footer"
  | "contact";

export type InstagramLocation = "home_cta" | "footer" | "contact";

/** Every custom event the site sends, with its allowed params. */
export type AnalyticsEvents = {
  whatsapp_order_click: {
    location: WhatsAppLocation;
    plant_name?: string; // plant cards only
    price?: number;      // plant cards only, in LKR
  };
  instagram_click: {
    location: InstagramLocation;
  };
};

export type AnalyticsEventName = keyof AnalyticsEvents;

/** A name + params pair, e.g. for passing an event as a prop. */
export type AnalyticsEvent = {
  [K in AnalyticsEventName]: { name: K; params: AnalyticsEvents[K] };
}[AnalyticsEventName];

type Gtag = (command: "event", name: string, params?: Record<string, unknown>) => void;

declare global {
  interface Window {
    gtag?: Gtag;
  }
}

/**
 * Sends a GA4 event. Does nothing on the server, or when GA isn't loaded
 * (e.g. NEXT_PUBLIC_GA_ID is unset or the script was blocked).
 */
export function trackEvent<K extends AnalyticsEventName>(
  name: K,
  params: AnalyticsEvents[K],
): void {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", name, params);
}
