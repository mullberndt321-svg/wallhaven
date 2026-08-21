import { beforeEach, describe, expect, it } from "vitest";
import { $, $$, cards, clickChip, loadApp } from "./helpers.js";

const CATEGORIES = ["Tiere", "Autos", "Natur", "Space", "Gaming", "Abstrakt"];

describe("wallpaper data", () => {
  beforeEach(async () => {
    await loadApp();
  });

  it("contains 120 wallpapers", () => {
    for (let i = 0; i < 8; i++) $("#loadMore").click();
    expect(cards()).toHaveLength(120);
  });

  it("contains 20 wallpapers per category", () => {
    for (const category of CATEGORIES) {
      clickChip(category);
      expect(cards(), category).toHaveLength(20);
    }
  });

  it("gives every wallpaper a title and an image id", () => {
    for (let i = 0; i < 8; i++) $("#loadMore").click();
    for (const card of cards()) {
      expect(card.dataset.id).toMatch(/^[a-z0-9-]+$/);
      expect(card.querySelector(".card-title").textContent.trim()).not.toBe("");
    }
  });

  it("uses the same image for a category tile as for its first wallpaper", () => {
    const tile = $$(".category")[0];
    expect(tile.style.backgroundImage).toContain("photo-1552053831-71594a27632d");
  });
});
