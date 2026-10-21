import { existsSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { plants } from "@/data/plants";

describe("plant catalogue", () => {
  it("has at least one plant", () => {
    expect(plants.length).toBeGreaterThan(0);
  });

  it("uses unique ids", () => {
    const ids = plants.map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  describe.each(plants)("$id", (plant) => {
    it("has a name", () => {
      expect(plant.name.trim()).not.toBe("");
    });

    it("has a positive price", () => {
      expect(Number.isFinite(plant.price)).toBe(true);
      expect(plant.price).toBeGreaterThan(0);
    });

    it("has an image file that exists in /public", () => {
      expect(plant.image).toMatch(/^\/images\/plants\//);
      expect(existsSync(path.join(process.cwd(), "public", plant.image))).toBe(true);
    });

    it("has alt text for its image", () => {
      expect(plant.imageAlt.trim()).not.toBe("");
    });
  });
});
