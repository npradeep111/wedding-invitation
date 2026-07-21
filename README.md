# Pavan & Keerthana — Wedding Invitation Website

A premium, animated, single-page wedding invitation website built with
**React 19**, **Vite**, **Tailwind CSS**, and **Framer Motion**. Designed
around a luxury *Gold & Ivory* Indian-wedding aesthetic with glassmorphism
panels, floating petals, golden sparkles, scroll reveals and a floral
"opening gate" intro animation.

> This is a fully static site — no backend, no database, no API keys.
> Everything runs in the browser and can be hosted for free.

---

## ✨ Features

- **Opening invitation animation** — gilded gate panels part open on
  "Open Invitation" tap
- **Parallax hero** with the couple's names, dates and a live countdown
- **Save the Date** cards for both ceremonies
- **Our Story** section with framed bride & groom portraits
- **Wedding Events timeline** with alternating cards and center markers
- **Photo gallery** with hover zoom and a lightbox
- **Venue cards** with direct Google Maps buttons
- **Blessings** wall
- **Thank-you footer**
- **Floating background music player** (play/pause + mute)
- Ambient **floating petals** and **golden sparkles**
- Fully **responsive**, mobile-first layout
- Respects `prefers-reduced-motion`

---

## 🧱 Tech Stack

| Tool | Purpose |
|---|---|
| React 19 | UI |
| Vite | Build tool / dev server |
| Tailwind CSS | Styling |
| Framer Motion | Animation |
| React Icons | Iconography |

---

## 📁 Project Structure

```
wedding-invitation/
├── public/
│   ├── images/              # Replaceable placeholder photos (see README inside)
│   │   ├── bride.jpg
│   │   ├── groom.jpg
│   │   ├── gallery1.jpg … gallery4.jpg
│   │   └── hero-bg.jpg
│   └── music/
│       └── background.mp3   # Replaceable placeholder instrumental track
├── src/
│   ├── assets/               # (Reserved for local fonts/icons if needed)
│   ├── components/           # Reusable UI: OpeningGate, MusicPlayer, Countdown,
│   │                          # Sparkles, PetalsOverlay, ScrollReveal, PhotoFrame, …
│   ├── sections/              # Page sections: Hero, SaveTheDate, OurStory,
│   │                          # Events, Gallery, Venue, Blessings, Footer
│   ├── hooks/                 # useCountdown, useLockBodyScroll
│   ├── utils/                 # weddingData.js — all editable event/couple data
│   ├── styles/                # (Reserved for extra global styles)
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── package.json
└── .github/workflows/deploy.yml   # GitHub Pages CI/CD
```

---

## 🚀 Getting Started (Local Development)

**Requirements:** Node.js 18+ (Node 20 recommended) and npm.

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Open the printed local URL (usually http://localhost:5173)
```

Any change you save is reflected instantly (hot module reload).

```bash
# Build a production bundle into /dist
npm run build

# Preview the production build locally
npm run preview
```

---

## ✏️ Customizing Content

Everything text/date/venue related lives in **one file**:

```
src/utils/weddingData.js
```

Edit the `couple` and `events` objects there to change names, dates, times,
venues, descriptions, or Google Maps links — the whole site updates
automatically since every section imports from this file.

### Replacing Photos

Drop your own images into `public/images/`, using the **same filenames**
listed in `public/images/README.md`. No code changes needed.

### Replacing Music

Drop your own instrumental MP3 into `public/music/background.mp3` (same
filename), or edit the `<source>` path in
`src/components/MusicPlayer.jsx` if you want a different filename.

### Adjusting Colors / Fonts

Open `tailwind.config.js` — the palette (`gold`, `ivory`, `beige`,
`forest`, `rosegold`) and font families (`heading` = Cinzel, `script` =
Great Vibes, `body` = Poppins) are defined there and used throughout.

---

## 🌐 Deployment

The project builds to a plain static `dist/` folder and is pre-configured
for four popular hosts. `vite.config.js` uses a **relative base path**
(`base: './'`) so the build works from any sub-path without extra config.

### GitHub Pages

A ready-to-use GitHub Actions workflow is included at
`.github/workflows/deploy.yml`. It builds the site and publishes `dist/`
to GitHub Pages automatically on every push to `main`.

1. Push this project to a GitHub repository.
2. In the repo, go to **Settings → Pages → Build and deployment → Source**
   and select **GitHub Actions**.
3. Push to `main` — the workflow builds and deploys automatically.
4. Your site will be live at `https://<username>.github.io/<repo>/`.

Alternatively, you can deploy manually with the `gh-pages` package that's
already included in `devDependencies`:

```bash
npm run deploy
```

### Netlify

A `netlify.toml` is included with the build command and publish directory
pre-configured (`npm run build` → `dist`). Just connect your repository in
the Netlify dashboard, or drag-and-drop the `dist/` folder after running
`npm run build`.

### Vercel

A `vercel.json` is included. Import the repository in the Vercel
dashboard — the build command (`npm run build`) and output directory
(`dist`) are detected automatically.

### Cloudflare Pages

No extra config file is required. When creating the project in the
Cloudflare Pages dashboard, set:
- **Build command:** `npm run build`
- **Build output directory:** `dist`

---

## ♿ Accessibility & Performance Notes

- Honors `prefers-reduced-motion` (animations are shortened/disabled).
- All interactive elements have visible focus states and `aria-label`s.
- Images use `loading="lazy"` where appropriate.
- Placeholder images are optimized JPEGs; replace with similarly
  compressed photos to keep load times fast.

---

## 📄 License

This project was generated for personal use (Pavan & Keerthana's wedding).
Feel free to adapt it for your own celebration.
