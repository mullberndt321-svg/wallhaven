import { beforeEach, describe, expect, it, vi } from "vitest";
import { $, loadApp, pressKey } from "./helpers.js";

describe("theme toggle", () => {
  beforeEach(async () => {
    await loadApp();
  });

  it("switches between dark and light mode and updates the button icon", () => {
    expect($("#themeBtn").textContent).toBe("☾");
    $("#themeBtn").click();
    expect(document.body.classList.contains("light")).toBe(true);
    expect($("#themeBtn").textContent).toBe("☀");
    $("#themeBtn").click();
    expect(document.body.classList.contains("light")).toBe(false);
    expect($("#themeBtn").textContent).toBe("☾");
  });
});

describe("search shortcut", () => {
  beforeEach(async () => {
    await loadApp();
  });

  it("focuses the search field on Ctrl+K and suppresses the browser default", () => {
    const focus = vi.spyOn($("#search"), "focus");
    const event = pressKey("K", { ctrlKey: true });
    expect(focus).toHaveBeenCalled();
    expect(event.defaultPrevented).toBe(true);
  });

  it("focuses the search field on Meta+K", () => {
    const focus = vi.spyOn($("#search"), "focus");
    pressKey("k", { metaKey: true });
    expect(focus).toHaveBeenCalled();
  });

  it("ignores k without a modifier and other modified keys", () => {
    const focus = vi.spyOn($("#search"), "focus");
    pressKey("k");
    pressKey("j", { ctrlKey: true });
    expect(focus).not.toHaveBeenCalled();
  });
});
