import { describe, expect, it } from "vitest";
import { BUSINESS, whatsappLink } from "@/config/business";

describe("whatsappLink", () => {
  const base = `https://wa.me/${BUSINESS.whatsapp}`;

  it("returns the bare wa.me link when there is no message", () => {
    expect(whatsappLink()).toBe(base);
  });

  it("URL-encodes the message into the text param", () => {
    const message = "Hi! I'd like Monstera (LKR 1,800) & a pot? 🌿";
    const url = whatsappLink(message);

    expect(url).toBe(`${base}?text=${encodeURIComponent(message)}`);
    // Characters that would break the query string must be escaped
    expect(url.split("?text=")[1]).not.toMatch(/[ &?#]/);
  });

  it("round-trips back to the original message", () => {
    const message = "Order: Pothos (Golden) — LKR 650\nDeliver Saturday";
    const parsed = new URL(whatsappLink(message));

    expect(parsed.origin + parsed.pathname).toBe(base);
    expect(parsed.searchParams.get("text")).toBe(message);
  });
});
