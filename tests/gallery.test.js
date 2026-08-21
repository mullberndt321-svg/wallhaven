import { beforeEach, describe, expect, it, vi } from "vitest";
import { $, $$, cardIds, cardTitles, cards, clickChip, loadApp, search, selectSort } from "./helpers.js";

describe("initial render", () => {
  beforeEach(async () => {
    await loadApp();
  });

  it("renders one tile per category with emoji, name and background", () => {
    const tiles = $$(".category");
    expect(tiles.map(t => t.dataset.cat)).toEqual(["Tiere", "Autos", "Natur", "Space", "Gaming", "Abstrakt"]);
    expect(tiles[0].querySelector("strong").textContent).toBe("🐺 Tiere");
    expect(tiles[0].style.backgroundImage).toContain("images.unsplash.com");
  });

  it("renders an 'Alle' chip plus one chip per category, with 'Alle' active", () => {
    expect($$(".chip").map(c => c.dataset.cat)).toEqual(["Alle", "Tiere", "Autos", "Natur", "Space", "Gaming", "Abstrakt"]);
    expect($$(".chip.active").map(c => c.dataset.cat)).toEqual(["Alle"]);
  });

  it("shows the first page of 24 wallpapers and the load-more button", () => {
    expect(cards()).toHaveLength(24);
    expect($("#galleryTitle").textContent).toBe("Alle Wallpapers");
    expect($("#loadMore").style.display).toBe("block");
  });

  it("builds each card from the photo data", () => {
    const card = cards()[0];
    const img = card.querySelector("img");
    expect(card.dataset.id).toBe("1552053831-71594a27632d");
    expect(img.getAttribute("src")).toBe(
      "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=1000&q=88"
    );
    expect(img.getAttribute("loading")).toBe("lazy");
    expect(img.getAttribute("alt")).toBe("Wolf in the wild");
    expect(card.querySelector(".card-title").textContent).toBe("Wolf in the wild");
    expect(card.querySelector(".card-cat").textContent).toBe("Tiere · 4K");
    expect(card.querySelector(".heart").textContent).toBe("♡");
  });
});

describe("category filtering", () => {
  beforeEach(async () => {
    await loadApp();
  });

  it("shows only the chosen category when a chip is clicked", () => {
    clickChip("Space");
    expect(cards()).toHaveLength(20);
    expect($$(".card-cat").every(c => c.textContent.startsWith("Space"))).toBe(true);
    expect($("#galleryTitle").textContent).toBe("Space");
    expect($$(".chip.active").map(c => c.dataset.cat)).toEqual(["Space"]);
    expect($("#loadMore").style.display).toBe("none");
  });

  it("shows a shorter first page and scrolls to the gallery when a category tile is clicked", () => {
    $(`.category[data-cat="Autos"] strong`).click();
    expect(cards()).toHaveLength(12);
    expect($("#galleryTitle").textContent).toBe("Autos");
    expect($("#loadMore").style.display).toBe("block");
    expect($("#wallpapers").scrollIntoView).toHaveBeenCalledWith({ behavior: "smooth" });
  });

  it("ignores clicks on the empty space of the category grid", () => {
    $("#categoryGrid").click();
    expect($("#galleryTitle").textContent).toBe("Alle Wallpapers");
    expect(cards()).toHaveLength(24);
  });

  it("ignores clicks on the empty space of the chip row", () => {
    clickChip("Natur");
    $("#chips").click();
    expect($("#galleryTitle").textContent).toBe("Natur");
  });

  it("resets to all wallpapers via the header button", () => {
    clickChip("Gaming");
    $("#allBtn").click();
    expect($("#galleryTitle").textContent).toBe("Alle Wallpapers");
    expect($$(".chip.active").map(c => c.dataset.cat)).toEqual(["Alle"]);
    expect($("#wallpapers").scrollIntoView).toHaveBeenCalled();
  });
});

describe("search", () => {
  beforeEach(async () => {
    await loadApp();
  });

  it("matches wallpaper titles case-insensitively and ignores surrounding spaces", () => {
    search("  RED FOX ");
    expect(cardTitles()).toEqual(["Red fox"]);
  });

  it("matches category names", () => {
    search("abstrakt");
    expect(cards()).toHaveLength(20);
    expect($$(".card-cat").every(c => c.textContent.startsWith("Abstrakt"))).toBe(true);
  });

  it("combines the search term with the active category", () => {
    clickChip("Natur");
    search("moon");
    expect(cardTitles()).toEqual([]);
    expect($("#wallGrid").textContent).toBe("Keine Wallpapers gefunden.");
  });

  it("clears search and category filter via the reset button", () => {
    clickChip("Tiere");
    search("wolf");
    $("#clearBtn").click();
    expect($("#search").value).toBe("");
    expect($("#galleryTitle").textContent).toBe("Alle Wallpapers");
    expect(cards()).toHaveLength(24);
  });
});

describe("sorting", () => {
  beforeEach(async () => {
    await loadApp();
  });

  it("keeps the data order for the non-random sort options", () => {
    const initial = cardIds();
    selectSort("newest");
    expect(cardIds()).toEqual(initial);
  });

  it("shuffles the same wallpapers when sorting randomly", () => {
    clickChip("Gaming");
    const ordered = cardIds();
    vi.spyOn(Math, "random").mockReturnValue(0);
    selectSort("random");
    const shuffled = cardIds();
    expect(shuffled).not.toEqual(ordered);
    expect([...shuffled].sort()).toEqual([...ordered].sort());
    vi.restoreAllMocks();
  });
});

describe("load more", () => {
  beforeEach(async () => {
    await loadApp();
  });

  it("appends twelve wallpapers per click", () => {
    $("#loadMore").click();
    expect(cards()).toHaveLength(36);
    $("#loadMore").click();
    expect(cards()).toHaveLength(48);
  });

  it("hides the button once every wallpaper is shown", () => {
    for (let i = 0; i < 8; i++) $("#loadMore").click();
    expect(cards()).toHaveLength(120);
    expect($("#loadMore").style.display).toBe("none");
  });
});
