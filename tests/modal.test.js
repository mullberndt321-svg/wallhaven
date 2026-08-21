import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { $, loadApp, pressKey, storedFavorites } from "./helpers.js";

const WOLF = "1552053831-71594a27632d";
const WOLF_URL = "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=1000&q=88";

const openCard = id => $(`.card[data-id="${id}"]`).click();

describe("preview modal", () => {
  beforeEach(async () => {
    await loadApp();
  });

  it("fills the modal with the wallpaper details and opens it", () => {
    openCard(WOLF);
    expect($("#modalImg").getAttribute("src")).toBe(WOLF_URL);
    expect($("#modalImg").alt).toBe("Wolf in the wild");
    expect($("#modalTitle").textContent).toBe("Wolf in the wild");
    expect($("#modalCat").textContent).toBe("Tiere");
    expect($("#modalMeta").textContent).toBe("4K Wallpaper · kostenlos für die Demo-Galerie");
    expect($("#modal").classList.contains("open")).toBe(true);
    expect($("#modal").getAttribute("aria-hidden")).toBe("false");
  });

  it("favorites the previewed wallpaper from inside the modal", () => {
    openCard(WOLF);
    $("#favModal").click();
    expect(storedFavorites()).toEqual([WOLF]);
    $("#favModal").click();
    expect(storedFavorites()).toEqual([]);
  });

  it("closes via the close button", () => {
    openCard(WOLF);
    $("#closeModal").click();
    expect($("#modal").classList.contains("open")).toBe(false);
    expect($("#modal").getAttribute("aria-hidden")).toBe("true");
  });

  it("closes when the backdrop is clicked but stays open on clicks inside the card", () => {
    openCard(WOLF);
    $(".modal-card").click();
    expect($("#modal").classList.contains("open")).toBe(true);
    $("#modal").click();
    expect($("#modal").classList.contains("open")).toBe(false);
  });

  it("stays closed for a card whose wallpaper is unknown", () => {
    const card = $(`.card[data-id="${WOLF}"]`);
    card.dataset.id = "does-not-exist";
    card.click();
    expect($("#modal").classList.contains("open")).toBe(false);
    expect($("#modalTitle").textContent).toBe("");
  });

  it("closes on Escape", () => {
    openCard(WOLF);
    pressKey("Escape");
    expect($("#modal").classList.contains("open")).toBe(false);
  });
});

describe("download", () => {
  let click;

  beforeEach(async () => {
    await loadApp();
    click = vi.spyOn(HTMLAnchorElement.prototype, "click").mockImplementation(() => {});
    URL.createObjectURL = vi.fn(() => "blob:wallhaven/1");
    URL.revokeObjectURL = vi.fn();
    vi.spyOn(window, "open").mockImplementation(() => null);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("fetches the image and triggers a download with a slugified file name", async () => {
    const blob = new Blob(["image"], { type: "image/jpeg" });
    vi.stubGlobal("fetch", vi.fn(async () => ({ blob: async () => blob })));

    openCard(WOLF);
    $("#downloadBtn").click();
    await vi.waitFor(() => expect(click).toHaveBeenCalled());

    expect(fetch).toHaveBeenCalledWith(WOLF_URL);
    expect(URL.createObjectURL).toHaveBeenCalledWith(blob);
    const anchor = click.mock.instances[0];
    expect(anchor.download).toBe("wolf-in-the-wild.jpg");
    expect(anchor.getAttribute("href")).toBe("blob:wallhaven/1");
    expect(URL.revokeObjectURL).toHaveBeenCalledWith("blob:wallhaven/1");
    expect(window.open).not.toHaveBeenCalled();
  });

  it("opens the image in a new tab when the fetch fails", async () => {
    vi.stubGlobal("fetch", vi.fn(async () => {
      throw new Error("offline");
    }));

    openCard(WOLF);
    $("#downloadBtn").click();
    await vi.waitFor(() => expect(window.open).toHaveBeenCalledWith(WOLF_URL, "_blank"));

    expect(click).not.toHaveBeenCalled();
  });
});
