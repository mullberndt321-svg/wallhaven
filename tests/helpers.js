import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { vi } from "vitest";

const html = readFileSync(resolve(import.meta.dirname, "../index.html"), "utf8");
const markup = html
  .match(/<body[^>]*>([\s\S]*)<\/body>/i)[1]
  .replace(/<script[\s\S]*?<\/script>/gi, "");

export const FAV_KEY = "wall-favs";

/** Rebuilds the document from index.html and runs script.js against it. */
export async function loadApp({ favorites } = {}) {
  document.body.className = "";
  document.body.innerHTML = markup;
  localStorage.clear();
  if (favorites) localStorage.setItem(FAV_KEY, JSON.stringify(favorites));
  Element.prototype.scrollIntoView = vi.fn();
  vi.resetModules();
  await import("../script.js");
}

export const $ = selector => document.querySelector(selector);
export const $$ = selector => [...document.querySelectorAll(selector)];

export const cards = () => $$(".card");
export const cardIds = () => cards().map(c => c.dataset.id);
export const cardTitles = () => $$(".card-title").map(t => t.textContent);

export function clickChip(name) {
  $(`.chip[data-cat="${name}"]`).click();
}

export function search(term) {
  const input = $("#search");
  input.value = term;
  input.dispatchEvent(new Event("input"));
}

export function selectSort(value) {
  const sort = $("#sort");
  sort.value = value;
  sort.dispatchEvent(new Event("change"));
}

export function pressKey(key, init = {}) {
  const event = new KeyboardEvent("keydown", { key, bubbles: true, cancelable: true, ...init });
  document.dispatchEvent(event);
  return event;
}

export function storedFavorites() {
  return JSON.parse(localStorage.getItem(FAV_KEY) || "[]");
}
