# Birthday Website Audit

Date: 2026-10-21

## Latest Status

- **Production build**: Passed (`npm run build` in 126ms, 0 errors).
- **Colour Palette**: Tailored in Diduuu's favourite colour **Purple** (dreamy shades of lavender, lilac, violet, amethyst, and rich plum).
- **Gallery Media**: 28 photos loaded and verified in `public/images/memories/` and `dist/images/memories/`. All video requirements and files removed per user instruction.
- **Unbiological Sibling Theme**: Integrated heartfelt copy, notes, and captions celebrating the chosen brother-sister bond ("Mutu ko nata", "Blood doesn't make a sister, pure heart and care do").
- **Design & Aesthetics**: Dreamy purple scrapbook styling with lavender washi tape, purple satin bows, violet tulip bouquets, and purple confetti.
- **Navigation & Audio**: Floating glassmorphism navbar (`Home`, `Celebration`, `Memories`, `Letter`, `Surprise`) with active scroll tracking, mobile responsive drawer, and music toggle.
- **Social Metadata**: Added Open Graph tags (`og:title`, `og:description`, `og:image`, `og:type`) for rich previews when shared on WhatsApp, Instagram, or Messenger.
- **Lightbox**: Pure photo gallery lightbox with light-dismiss, keyboard arrows, and a live counter (`1 / 28`).

## Hosting Notes

The Vite configuration uses relative asset paths (`base: './'`), supporting GitHub Pages, Netlify Drop, Vercel, and Cloudflare Pages. The workflow at `.github/workflows/deploy-pages.yml` builds and deploys `dist` automatically on GitHub Pages.
