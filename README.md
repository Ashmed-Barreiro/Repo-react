# Simulacre d'examen React (JS) - HealthyBites

Aquest repo està pensat per practicar *el que acostuma a entrar* en un examen pràctic:

- React Router: rutes + menú amb estil actiu
- Fetch de JSON amb `useEffect` + `useState`
- Multimèdia optimitzada (imatges AVIF/WebP, àudio MP3/OGG, vídeo MP4/WebM)
- `useRef` per controlar un element del DOM (focus)
- Accessibilitat (ARIA) + WCAG bàsic
- Responsive bàsic amb breakpoints

## 1) Instal·lació i execució

```bash
npm install
npm run dev
```

## 2) Què hi ha a cada ruta

- `/` (Inici): resum + demo de `useRef` (posar focus)
- `/receptes`: component `LlistatReceptes` carregant dades de `public/receptes.json`
- `/media`: components separats de galeria, àudio i vídeo

## 3) On són les dades i els fitxers multimèdia

- JSON: `public/receptes.json`
- Multimèdia: `public/media/`
  - Imatges: `img1.jpg/webp/avif`, `img2...`, `img3...`
  - Àudio: `demo.mp3` + `demo.ogg`
  - Vídeo: `demo.mp4` + `demo.webm`
  - Poster: `poster.webp`
  - Subtítols: `subs.vtt`

## 4) Notes d'accessibilitat (ARIA + WCAG)

Aplicat al codi:

- Etiquetes semàntiques: `header`, `main`, `footer`, `section`, `article`, `nav`
- `aria-label` en la navegació i en l'input del focus demo
- `aria-labelledby` per associar títols amb seccions
- `alt` a les imatges
- Controls visibles en `audio` i `video`
- `:focus-visible` destacat (veure `src/index.css`)
- Subtítols al vídeo (`track` + `.vtt`)

## 5) Responsive

- Grid de receptes i galeria canvia de columnes amb `md` i `lg` (Tailwind)

## 6) Fitxers importants

- Router i layout: `src/App.jsx`, `src/components/Header.jsx`
- Fetch de receptes: `src/components/LlistatReceptes.jsx`
- Multimèdia: `src/components/Gallery.jsx`, `AudioPlayer.jsx`, `VideoPlayer.jsx`
- useRef: `src/components/FocusDemo.jsx`
