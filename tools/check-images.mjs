// Validates the wallpaper data in script.js: every Unsplash ID must be unique
// and must resolve to an image. Run with `node tools/check-images.mjs`.
import { readFile } from "node:fs/promises";

const ROW = /^ \["([^"]+)","([^"]+)","([^"]+)"\]/gm;
const CONCURRENCY = 10;

const source = await readFile(new URL("../script.js", import.meta.url), "utf8");
const rows = [...source.matchAll(ROW)].map(([, title, category, id]) => ({ title, category, id }));

if (rows.length === 0) {
  console.error("No wallpaper rows found – has the data format changed?");
  process.exit(1);
}

const errors = [];

const seen = new Map();
for (const row of rows) {
  const previous = seen.get(row.id);
  if (previous) errors.push(`duplicate id ${row.id}: "${previous.title}" and "${row.title}"`);
  else seen.set(row.id, row);
}

const url = id => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=200&q=60`;
const unique = [...seen.values()];
for (let i = 0; i < unique.length; i += CONCURRENCY) {
  await Promise.all(unique.slice(i, i + CONCURRENCY).map(async row => {
    try {
      const response = await fetch(url(row.id));
      if (!response.ok) errors.push(`HTTP ${response.status} for ${row.id} ("${row.title}")`);
    } catch (error) {
      errors.push(`request failed for ${row.id} ("${row.title}"): ${error.message}`);
    }
  }));
}

const categoryUrls = [...source.matchAll(/^  \["[^"]+","[^"]+", "([^"]+)"\]/gm)].map(([, u]) => u);
await Promise.all(categoryUrls.map(async categoryUrl => {
  try {
    const response = await fetch(categoryUrl);
    if (!response.ok) errors.push(`HTTP ${response.status} for category image ${categoryUrl}`);
  } catch (error) {
    errors.push(`request failed for category image ${categoryUrl}: ${error.message}`);
  }
}));

console.log(`Checked ${rows.length} wallpapers (${unique.length} unique ids) and ${categoryUrls.length} category images.`);
if (errors.length) {
  for (const error of errors) console.error(`  ${error}`);
  process.exit(1);
}
console.log("All wallpaper images are unique and reachable.");
