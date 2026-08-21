# Wallhaven – Wallpaper Hub
Moderne responsive Wallpaper-Galerie mit **120 Demo-Wallpapers** in sechs Kategorien.

Kategorien: Tiere, Autos, Natur, Space, Gaming und Abstrakt.

## Start
`index.html` im Browser öffnen.

## Funktionen
- 120 Wallpapers
- Suche und Kategorienfilter
- Masonry-Galerie
- Favoriten via localStorage
- Download
- Vorschau-Modal
- Dark-/Light-Mode
- Mehr laden
- Responsive Design

## Tests
Unit-Tests mit [Vitest](https://vitest.dev) und jsdom. `script.js` wird dabei gegen das echte `index.html`-Markup ausgeführt.

```
npm install
npm test          # Tests ausführen
npm run coverage  # Tests inkl. Coverage-Report
```

Die Demo verwendet Bilder von Unsplash. Für eine echte Plattform können später eigene/lizenzierte Bilder, Backend, Datenbank, Benutzerkonten und CDN ergänzt werden.
