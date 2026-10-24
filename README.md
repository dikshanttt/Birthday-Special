# 🎂 Birthday Surprise Website for Diduuu 💜

A cheerful, dreamy purple scrapbook birthday surprise website made to celebrate my sister, **Diduuu**, and our special sibling bond, styled in her favourite shades of purple.

---

## 💜 Features

- **Dreamy Purple Scrapbook Aesthetic**: Tailored in Diduuu's favourite color — featuring dreamy shades of lavender, lilac, violet, amethyst, and royal plum, paired with washi tape, tilted polaroid frames, and hand-drawn doodles.
- **Unbiological Sister Celebration**: Highlights the special, pure sibling bond chosen by heart (*"Blood doesn't make a sister, heart and soul do 🪻"*, *"Mutu ko nata"*).
- **Section A: Welcome Screen**:
  - Special badge: *“✨ Unbiological Sister • Realest Bond by Heart 💖”*
  - Heartfelt greeting: *"Someone very special has a birthday today… ♡ (and that's you, Diduuu!) 🥹❤️"*
  - **"🎁 Open Your Surprise"** button with a celebratory confetti burst and gentle smooth scroll.
- **Section B: Birthday Celebration**:
  - Illustrated layered birthday cake with flickering candle flames.
  - Interactive candle blowing: click or tap the candles to extinguish them, trigger smoke puffs & confetti, and make a wish!
  - Spotlight polaroid frame with pinned memo: *"Kind • Funny • Beautiful • Chosen by Heart • My Diduuu ♡"*.
- **Section C: Memories Scrapbook Gallery (31 Photos)**:
  - Filter tabs: *All Memories 📸*, *Naughty Kid Days 🐣*, *Growing Beautiful 🌷*, *Bond of Hearts 🫶🏻*.
  - Realistic tilted polaroid cards with washi tape, stickers, and captions.
  - **Modern Accessible Lightbox** (Native `<dialog closedby="any">` with light-dismiss, keyboard navigation, and live photo counter `1 / 31`).
- **Section D: Personal Birthday Letter**:
  - Realistic stationery parchment card with a delicate pink ribbon bow.
  - Heartfelt Nepali letter celebrating your unique bond: *"Blood ko nata bhanda mutu ko nata dherai thulo huncha... 🫶🏻🌸"*
  - Pinned heart stamp: *"Mutu ko nata ♡"*.
- **Section E: Final Sunset Surprise**:
  - Dreamy twilight sky with floating stars and warm lights.
  - Heartfelt emotional quotes honoring your chosen sibling bond.
  - Interactive gift box with unwrap effect and pop sound.
  - Playful note: *"P.S. Hajurko sano gift pani baki cha haiii! 🎁😂💗"*.
  - **"Send You One More Hug 🫂"** button with full-screen floating hearts shower and warm sibling toast.
- **Ambient Music Controller**:
  - Zero-config music box synthesizer playing a gentle lullaby rendition of "Happy Birthday".
  - If you drop your own `bgm.mp3` into `public/audio/bgm.mp3`, it will play that instead!

---

## 🚀 Running Locally

1. Install dependencies (already completed):
   ```bash
   npm install
   ```

2. Start local development server:
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your browser.

3. Build production static files:
   ```bash
   npm run build
   ```
   The production-ready output will be in the `dist/` directory.

4. Preview the production build locally:
   ```bash
   npm run preview
   ```

---

## 🎨 How to Personalize Photos, Videos & Messages

All content is centralized in **`src/data/config.js`**!

### 1. Adding or Replacing Photos
1. Put your images into `public/images/memories/` (e.g. `1.jpeg`, `my_photo.jpg`).
2. Open [`src/data/config.js`](./src/data/config.js).
3. Find the `memoriesSection.items` array and update the `src`, `title`, and `caption`:
   ```javascript
   {
     id: 1,
     type: "image",
     src: "./images/memories/1.jpeg",
     title: "The Iconic Little Naughty Kid",
     caption: "The naughty kid (never changed!) 🤪💖",
     category: "childhood", // or "recent"
     rotation: -2.5,
     tape: "pink" // "pink" | "lavender" | "mint" | "yellow" | "cream"
   }
   ```

### 2. Changing or Adding Video Clips
1. Put your video into `public/videos/` (e.g. `public/videos/sakshi.mp4`).
2. In [`src/data/config.js`](./src/data/config.js), set `type: "video"` and point `src` to `./videos/your-video.mp4`.

### 3. Adding Background Music
- Drop your favorite song or birthday audio file into `public/audio/bgm.mp3`.
- The website will automatically detect it when Diduuu clicks the music button 🎵!

### 4. Editing the Letter or Messages
- Simply open [`src/data/config.js`](./src/data/config.js) and edit the text under `letter` or `surprise`.
- Run `npm run build` to update the `dist/` folder.

---

## 🌐 Step-by-Step Instructions to Publish Online for Free

### Option 1: Netlify Drop (Easiest — No Git required, takes 1 minute!)
1. Run `npm run build` in your terminal.
2. Go to **[app.netlify.com/drop](https://app.netlify.com/drop)** in your web browser.
3. Drag and drop the **`dist`** folder from `D:\Birthday\dist` onto the page.
4. Netlify will immediately give you a live URL (e.g. `https://diduuu-birthday-surprise.netlify.app`).
5. You can change the subdomain in Netlify site settings to something custom like `happy-birthday-diduuu.netlify.app`.
6. Send the link to Diduuu! 💗

### Option 2: Vercel
1. Install the Vercel CLI: `npm i -g vercel` (or sign up at [vercel.com](https://vercel.com)).
2. In `D:\Birthday`, run:
   ```bash
   npx vercel
   ```
3. Follow the 3 prompts (choose defaults). It will deploy in 20 seconds and give you a free live URL!

### Option 3: GitHub Pages
1. Create a repository on [GitHub](https://github.com) and push this project to its `main` branch:
   ```bash
   git init
   git add .
   git commit -m "Add Diduuu birthday website"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
2. In the repository, open **Settings > Pages** and set **Build and deployment > Source** to **GitHub Actions**.
3. The included `.github/workflows/deploy-pages.yml` workflow builds the Vite site and publishes `dist` whenever you push to `main`. You can also run it from the **Actions** tab.
4. When the workflow finishes, open **Settings > Pages** or the workflow run’s deployment environment to get the live website link. Share that link with Diduuu.

The Vite build uses relative asset paths, so the photos and video also load when GitHub hosts the site under a repository path such as `username.github.io/repository-name/`.

**Photo privacy:** anyone who can access the published site can view its photos and video. Choose the repository visibility and sharing settings with that in mind.
