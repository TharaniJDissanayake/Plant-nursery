import { afterEach, describe, expect, it, vi } from "vitest";
import { trackEvent } from "@/lib/analytics";

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("trackEvent", () => {
  it("does nothing when not in the browser", () => {
    // Even if a gtag function exists globally, no window means no tracking.
    const gtag = vi.fn();
    vi.stubGlobal("gtag", gtag);
    expect(typeof window).toBe("undefined");

    expect(() =>
      trackEvent("whatsapp_order_click", { location: "navbar" }),
    ).not.toThrow();
    expect(gtag).not.toHaveBeenCalled();
  });

  it("does nothing in the browser when GA isn't loaded", () => {
    vi.stubGlobal("window", {});

    expect(() =>
      trackEvent("instagram_click", { location: "footer" }),
    ).not.toThrow();
  });

  it("sends the event to gtag in the browser", () => {
    const gtag = vi.fn();
    vi.stubGlobal("window", { gtag });

    trackEvent("whatsapp_order_click", {
      location: "plant_card",
      plant_name: "Anthurium",
      price: 2200,
    });

    expect(gtag).toHaveBeenCalledWith("event", "whatsapp_order_click", {
      location: "plant_card",
      plant_name: "Anthurium",
      price: 2200,
    });
  });
});
