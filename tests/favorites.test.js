import { beforeEach, describe, expect, it } from "vitest";
import { $, $$, cardIds, cardTitles, cards, clickChip, loadApp, storedFavorites } from "./helpers.js";

const WOLF = "1552053831-71594a27632d";
const FOX = "1516934024742-b461fba47600";

const heart = id => $(`.heart[data-id="${id}"]`);

describe("favorites", () => {
  beforeEach(async () => {
    await loadApp();
  });

  it("stores a wallpaper and marks its heart when clicked", () => {
    heart(WOLF).click();
    expect(storedFavorites()).toEqual([WOLF]);
    expect(heart(WOLF).classList.contains("on")).toBe(true);
    expect(heart(WOLF).textContent).toBe("♥");
    expect(heart(FOX).classList.contains("on")).toBe(false);
  });

  it("removes a wallpaper when its heart is clicked again", () => {
    heart(WOLF).click();
    heart(FOX).click();
    heart(WOLF).click();
    expect(storedFavorites()).toEqual([FOX]);
    expect(heart(WOLF).textContent).toBe("♡");
  });

  it("does not open the modal when the heart inside a card is clicked", () => {
    heart(WOLF).click();
    expect($("#modal").classList.contains("open")).toBe(false);
  });
});

describe("favorites view", () => {
  it("restores the stored favorites on load", async () => {
    await loadApp({ favorites: [FOX] });
    expect(heart(FOX).classList.contains("on")).toBe(true);
    expect(heart(WOLF).classList.contains("on")).toBe(false);
  });

  it("shows only favorites, across categories, when the favorites button is clicked", async () => {
    const keyboard = "1587202372775-e229f172b9d7";
    await loadApp({ favorites: [FOX, keyboard] });
    clickChip("Space");
    $("#showFavs").click();
    expect($("#galleryTitle").textContent).toBe("Meine Favoriten");
    expect(cardIds()).toEqual([FOX, keyboard]);
    expect($$(".chip.active").map(c => c.dataset.cat)).toEqual(["Alle"]);
    expect($("#wallpapers").scrollIntoView).toHaveBeenCalled();
  });

  it("shows the empty state when nothing is favorited", async () => {
    await loadApp();
    $("#showFavs").click();
    expect(cards()).toHaveLength(0);
    expect($("#wallGrid").textContent).toBe("Keine Wallpapers gefunden.");
  });

  it("drops a wallpaper from the list when it is unfavorited in the favorites view", async () => {
    await loadApp({ favorites: [WOLF, FOX] });
    $("#showFavs").click();
    expect(cardTitles()).toEqual(["Wolf in the wild", "Red fox"]);
    heart(WOLF).click();
    expect(cardTitles()).toEqual(["Red fox"]);
    expect(storedFavorites()).toEqual([FOX]);
  });
});
