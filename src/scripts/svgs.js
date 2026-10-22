// =============================================================================
// VECTOR ILLUSTRATIONS & SCRAPBOOK DOODLE ASSETS - PURPLE & LAVENDER EDITION 💜
// =============================================================================
// Tailored in Diduuu's favourite purple tones: lavender, lilac, violet, & amethyst.
// =============================================================================

export const svgs = {
  // Birthday Cake with animated flickering candles (Chocolate & Vanilla Edition 🍫🍦)
  cake: `
    <svg class="cake-svg" viewBox="0 0 320 280" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Chocolate and Vanilla Birthday Cake with Candles">
      <defs>
        <radialGradient id="cakePlateGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#ffffff" />
          <stop offset="85%" stop-color="#f5f0ff" />
          <stop offset="100%" stop-color="#d8b4fe" stop-opacity="0.6" />
        </radialGradient>
        <!-- Rich Chocolate Sponge Gradient -->
        <linearGradient id="chocCakeGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#542e14" />
          <stop offset="50%" stop-color="#42220c" />
          <stop offset="100%" stop-color="#2c1406" />
        </linearGradient>
        <!-- Creamy Velvety Vanilla Frosting -->
        <linearGradient id="vanillaFrostingGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#ffffff" />
          <stop offset="70%" stop-color="#fffef5" />
          <stop offset="100%" stop-color="#fef9c3" />
        </linearGradient>
        <radialGradient id="flameGrad" cx="50%" cy="80%" r="70%">
          <stop offset="0%" stop-color="#fffbeb" />
          <stop offset="35%" stop-color="#fef08a" />
          <stop offset="70%" stop-color="#fb923c" />
          <stop offset="100%" stop-color="#ef4444" stop-opacity="0" />
        </radialGradient>
        <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      <!-- Plate Stand -->
      <ellipse cx="160" cy="250" rx="140" ry="24" fill="url(#cakePlateGrad)" stroke="#c084fc" stroke-width="2" />
      <ellipse cx="160" cy="247" rx="120" ry="16" fill="#ffffff" fill-opacity="0.9" />

      <!-- Cake Bottom Tier: Rich Chocolate Sponge -->
      <rect x="50" y="160" width="220" height="70" rx="16" fill="url(#chocCakeGrad)" />
      
      <!-- Middle Cream Filling Line (Vanilla cream between chocolate layers) -->
      <line x1="52" y1="195" x2="268" y2="195" stroke="#fef9c3" stroke-width="4" stroke-dasharray="8 3" opacity="0.9" />

      <!-- Frosting Drips Bottom: Velvety Vanilla Buttercream -->
      <path d="M 50 170 
               Q 65 192, 80 170 
               Q 95 198, 110 170 
               Q 130 202, 150 170 
               Q 170 197, 190 170 
               Q 210 202, 230 170 
               Q 245 192, 270 170 
               L 270 160 L 50 160 Z" fill="url(#vanillaFrostingGrad)" />

      <!-- Chocolate Truffles & Vanilla Pearls on Bottom Tier -->
      <circle cx="70" cy="225" r="5" fill="#fef9c3" stroke="#d97706" stroke-width="0.5" />
      <circle cx="110" cy="225" r="4.5" fill="#2a1204" />
      <circle cx="150" cy="225" r="5" fill="#fef9c3" stroke="#d97706" stroke-width="0.5" />
      <circle cx="190" cy="225" r="4.5" fill="#2a1204" />
      <circle cx="230" cy="225" r="5" fill="#fef9c3" stroke="#d97706" stroke-width="0.5" />
      <circle cx="250" cy="225" r="4.5" fill="#2a1204" />

      <!-- Golden Vanilla Script on Chocolate Bottom Tier -->
      <text x="160" y="213" font-family="'Caveat', cursive" font-size="22" font-weight="700" fill="#fef08a" text-anchor="middle">Happy Birthday 🎂✨</text>

      <!-- Cake Top Tier: Chocolate Sponge with Vanilla Frosting -->
      <rect x="85" y="105" width="150" height="60" rx="12" fill="url(#chocCakeGrad)" stroke="#78350f" stroke-width="1.5" />
      
      <!-- Top Tier Vanilla Cream Line -->
      <line x1="86" y1="135" x2="234" y2="135" stroke="#fef9c3" stroke-width="3.5" stroke-dasharray="6 2" opacity="0.85" />

      <!-- Frosting Drips Top: Velvety Vanilla -->
      <path d="M 85 115 
               Q 100 136, 115 115 
               Q 130 142, 145 115 
               Q 160 140, 175 115 
               Q 190 144, 205 115 
               Q 220 134, 235 115 
               L 235 105 L 85 105 Z" fill="url(#vanillaFrostingGrad)" />

      <!-- Whipped Vanilla Cream Dollops on Top Edge -->
      <circle cx="95" cy="105" r="8" fill="#ffffff" stroke="#fef3c7" stroke-width="1.5" />
      <circle cx="120" cy="103" r="8" fill="#ffffff" stroke="#fef3c7" stroke-width="1.5" />
      <circle cx="145" cy="102" r="8.5" fill="#ffffff" stroke="#fef3c7" stroke-width="1.5" />
      <circle cx="160" cy="101" r="9" fill="#ffffff" stroke="#fef3c7" stroke-width="1.5" />
      <circle cx="175" cy="102" r="8.5" fill="#ffffff" stroke="#fef3c7" stroke-width="1.5" />
      <circle cx="200" cy="103" r="8" fill="#ffffff" stroke="#fef3c7" stroke-width="1.5" />
      <circle cx="225" cy="105" r="8" fill="#ffffff" stroke="#fef3c7" stroke-width="1.5" />

      <!-- Gourmet Dark Chocolate Curls on Top -->
      <path d="M 118 95 C 112 90, 110 80, 118 75 C 126 80, 124 90, 118 95 Z" fill="#2c1406" />
      <path d="M 198 95 C 192 90, 190 80, 198 75 C 206 80, 204 90, 198 95 Z" fill="#2c1406" />
      <!-- Chocolate chip accents -->
      <circle cx="107" cy="100" r="2.5" fill="#1f0a02" />
      <circle cx="135" cy="99" r="2.5" fill="#1f0a02" />
      <circle cx="185" cy="99" r="2.5" fill="#1f0a02" />
      <circle cx="212" cy="100" r="2.5" fill="#1f0a02" />

      <!-- 3 Birthday Candles -->
      <!-- Candle 1 (Left - Vanilla Cream Striped) -->
      <g class="candle candle-1" data-candle="1">
        <rect x="117" y="45" width="8" height="40" rx="3" fill="#fef9c3" stroke="#ca8a04" stroke-width="1" />
        <line x1="117" y1="52" x2="125" y2="56" stroke="#9333ea" stroke-width="1.5" />
        <line x1="117" y1="64" x2="125" y2="68" stroke="#9333ea" stroke-width="1.5" />
        <line x1="117" y1="76" x2="125" y2="80" stroke="#9333ea" stroke-width="1.5" />
        <line x1="121" y1="45" x2="121" y2="38" stroke="#451a03" stroke-width="1.5" />
        <!-- Flame -->
        <g class="flame-group">
          <ellipse class="flame flame-glow" cx="121" cy="27" rx="8" ry="14" fill="#fef08a" opacity="0.65" filter="url(#softGlow)" />
          <path class="flame flame-core" d="M 121 16 Q 115 26, 121 34 Q 127 26, 121 16 Z" fill="url(#flameGrad)" />
        </g>
      </g>

      <!-- Candle 2 (Center - Tallest Royal Violet & Gold) -->
      <g class="candle candle-2" data-candle="2">
        <rect x="156" y="35" width="9" height="50" rx="3" fill="#c084fc" stroke="#7c3aed" stroke-width="1" />
        <line x1="156" y1="45" x2="165" y2="49" stroke="#fef08a" stroke-width="1.8" />
        <line x1="156" y1="58" x2="165" y2="62" stroke="#fef08a" stroke-width="1.8" />
        <line x1="156" y1="71" x2="165" y2="75" stroke="#fef08a" stroke-width="1.8" />
        <line x1="160.5" y1="35" x2="160.5" y2="27" stroke="#451a03" stroke-width="1.5" />
        <!-- Flame -->
        <g class="flame-group">
          <ellipse class="flame flame-glow" cx="160.5" cy="16" rx="9" ry="16" fill="#fef08a" opacity="0.75" filter="url(#softGlow)" />
          <path class="flame flame-core" d="M 160.5 4 Q 153 16, 160.5 24 Q 168 16, 160.5 4 Z" fill="url(#flameGrad)" />
        </g>
      </g>

      <!-- Candle 3 (Right - Vanilla Cream Striped) -->
      <g class="candle candle-3" data-candle="3">
        <rect x="195" y="45" width="8" height="40" rx="3" fill="#fef9c3" stroke="#ca8a04" stroke-width="1" />
        <line x1="195" y1="52" x2="203" y2="56" stroke="#9333ea" stroke-width="1.5" />
        <line x1="195" y1="64" x2="203" y2="68" stroke="#9333ea" stroke-width="1.5" />
        <line x1="195" y1="76" x2="203" y2="80" stroke="#9333ea" stroke-width="1.5" />
        <line x1="199" y1="45" x2="199" y2="38" stroke="#451a03" stroke-width="1.5" />
        <!-- Flame -->
        <g class="flame-group">
          <ellipse class="flame flame-glow" cx="199" cy="27" rx="8" ry="14" fill="#fef08a" opacity="0.65" filter="url(#softGlow)" />
          <path class="flame flame-core" d="M 199 16 Q 193 26, 199 34 Q 205 26, 199 16 Z" fill="url(#flameGrad)" />
        </g>
      </g>
    </svg>
  `,

  // Cute Hand-drawn Bunny Doodle in Violet
  doodleBunny: `
    <svg class="doodle-bunny" viewBox="0 0 80 80" width="48" height="48" fill="none" stroke="#7c3aed" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <!-- Ears -->
      <path d="M 28 32 C 22 15, 26 6, 32 8 C 38 10, 36 22, 34 32" fill="#fff" />
      <path d="M 46 32 C 44 22, 42 10, 48 8 C 54 6, 58 15, 52 32" fill="#fff" />
      <!-- Inner ear purple -->
      <path d="M 29 26 C 26 18, 28 12, 32 13 C 34 14, 34 22, 33 26" stroke="#a855f7" fill="#f3e8ff" stroke-width="1.5" />
      <path d="M 47 26 C 46 22, 46 14, 48 13 C 52 12, 54 18, 51 26" stroke="#a855f7" fill="#f3e8ff" stroke-width="1.5" />
      <!-- Head -->
      <circle cx="40" cy="46" r="18" fill="#fff" />
      <!-- Eyes -->
      <circle cx="34" cy="44" r="2" fill="#4c1d95" stroke="none" />
      <circle cx="46" cy="44" r="2" fill="#4c1d95" stroke="none" />
      <!-- Blush -->
      <ellipse cx="30" cy="48" rx="3" ry="1.5" fill="#e9d5ff" stroke="none" />
      <ellipse cx="50" cy="48" rx="3" ry="1.5" fill="#e9d5ff" stroke="none" />
      <!-- Nose & mouth -->
      <path d="M 40 48 L 40 50 M 37 52 Q 40 54, 40 50 Q 40 54, 43 52" stroke="#4c1d95" stroke-width="1.5" />
      <!-- Paws -->
      <path d="M 30 64 C 30 58, 36 58, 36 64" fill="#fff" />
      <path d="M 44 64 C 44 58, 50 58, 50 64" fill="#fff" />
    </svg>
  `,

  // Purple Satin Ribbon Bow
  ribbonBow: `
    <svg class="ribbon-bow-svg" viewBox="0 0 100 60" width="60" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Left loop -->
      <path d="M 48 24 C 30 5, 10 10, 16 28 C 22 42, 44 32, 48 26 Z" fill="#a855f7" stroke="#7c3aed" stroke-width="1.8" />
      <!-- Right loop -->
      <path d="M 52 24 C 70 5, 90 10, 84 28 C 78 42, 56 32, 52 26 Z" fill="#a855f7" stroke="#7c3aed" stroke-width="1.8" />
      <!-- Left tail -->
      <path d="M 46 30 C 35 42, 24 52, 20 58 C 28 54, 38 52, 45 42 Z" fill="#7c3aed" stroke="#6d28d9" stroke-width="1.5" />
      <!-- Right tail -->
      <path d="M 54 30 C 65 42, 76 52, 80 58 C 72 54, 62 52, 55 42 Z" fill="#7c3aed" stroke="#6d28d9" stroke-width="1.5" />
      <!-- Center Knot -->
      <circle cx="50" cy="26" r="7" fill="#d8b4fe" stroke="#6d28d9" stroke-width="2" />
    </svg>
  `,

  // Purple & Lavender Tulips
  tulipBouquet: `
    <svg class="tulip-bouquet-svg" viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Stems -->
      <path d="M 55 60 Q 58 100, 60 135" stroke="#4ade80" stroke-width="3" stroke-linecap="round" />
      <path d="M 75 65 Q 68 100, 62 135" stroke="#22c55e" stroke-width="3.5" stroke-linecap="round" />
      <path d="M 38 75 Q 48 105, 59 135" stroke="#86efac" stroke-width="3" stroke-linecap="round" />
      <!-- Leaves -->
      <path d="M 60 110 C 85 95, 90 70, 88 65 C 80 80, 65 100, 60 110 Z" fill="#86efac" stroke="#22c55e" stroke-width="1.5" />
      <path d="M 55 105 C 30 90, 25 70, 26 65 C 35 78, 50 95, 55 105 Z" fill="#4ade80" stroke="#16a34a" stroke-width="1.5" />
      <!-- Tulip 1 Center (Deep Purple) -->
      <g transform="translate(45, 20)">
        <path d="M 15 45 C 0 35, -2 15, 12 5 C 16 18, 14 35, 15 45 Z" fill="#7c3aed" />
        <path d="M 15 45 C 30 35, 32 15, 18 5 C 14 18, 16 35, 15 45 Z" fill="#8b5cf6" />
        <path d="M 15 45 C 7 30, 7 12, 15 2 C 23 12, 23 30, 15 45 Z" fill="#c084fc" stroke="#7c3aed" stroke-width="1.5" />
      </g>
      <!-- Tulip 2 Left (Lavender) -->
      <g transform="translate(20, 35) rotate(-15)">
        <path d="M 14 40 C 2 30, 0 14, 12 5 C 15 16, 13 32, 14 40 Z" fill="#9333ea" />
        <path d="M 14 40 C 26 30, 28 14, 16 5 C 13 16, 15 32, 14 40 Z" fill="#a855f7" />
        <path d="M 14 40 C 7 28, 7 12, 14 3 C 21 12, 21 28, 14 40 Z" fill="#e9d5ff" stroke="#9333ea" stroke-width="1.5" />
      </g>
      <!-- Tulip 3 Right (Amethyst) -->
      <g transform="translate(68, 30) rotate(15)">
        <path d="M 14 40 C 2 30, 0 14, 12 5 C 15 16, 13 32, 14 40 Z" fill="#6d28d9" />
        <path d="M 14 40 C 26 30, 28 14, 16 5 C 13 16, 15 32, 14 40 Z" fill="#8b5cf6" />
        <path d="M 14 40 C 7 28, 7 12, 14 3 C 21 12, 21 28, 14 40 Z" fill="#ddd6fe" stroke="#6d28d9" stroke-width="1.5" />
      </g>
    </svg>
  `,

  // Surprise Gift Box with tag "For my Diduuu 💜"
  giftBox: `
    <svg class="giftbox-svg" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="boxGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#faf5ff" />
          <stop offset="100%" stop-color="#ede9fe" />
        </linearGradient>
        <linearGradient id="ribbonGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#a855f7" />
          <stop offset="100%" stop-color="#6d28d9" />
        </linearGradient>
        <filter id="giftDropShadow" x="-10%" y="-10%" width="120%" height="130%">
          <feDropShadow dx="0" dy="8" stdDeviation="8" flood-color="#a855f7" flood-opacity="0.35" />
        </filter>
      </defs>

      <!-- Main Box Body -->
      <rect x="35" y="85" width="130" height="95" rx="8" fill="url(#boxGrad)" stroke="#a855f7" stroke-width="2" filter="url(#giftDropShadow)" />
      
      <!-- Vertical Ribbon on Body -->
      <rect x="90" y="85" width="20" height="95" fill="url(#ribbonGrad)" />
      <!-- Horizontal Ribbon on Body -->
      <rect x="35" y="125" width="130" height="18" fill="url(#ribbonGrad)" />

      <!-- Gift Tag Attached to Ribbon -->
      <g class="gift-tag-group" transform="translate(115, 105) rotate(10)">
        <!-- Tag string -->
        <line x1="0" y1="0" x2="8" y2="8" stroke="#7c3aed" stroke-width="1.5" stroke-dasharray="2,2" />
        <!-- Tag paper -->
        <rect x="5" y="6" width="60" height="42" rx="4" fill="#ffffff" stroke="#c084fc" stroke-width="1.5" />
        <circle cx="10" cy="11" r="2" fill="#7c3aed" />
        <text x="35" y="24" font-family="'Caveat', cursive" font-size="13" font-weight="700" fill="#7c3aed" text-anchor="middle">For my</text>
        <text x="35" y="38" font-family="'Caveat', cursive" font-size="14" font-weight="700" fill="#581c87" text-anchor="middle">Diduuu 💜</text>
      </g>

      <!-- Box Lid Group -->
      <g class="gift-lid-group">
        <rect x="28" y="70" width="144" height="22" rx="5" fill="url(#boxGrad)" stroke="#8b5cf6" stroke-width="2" />
        <rect x="90" y="70" width="20" height="22" fill="url(#ribbonGrad)" />
        
        <!-- Big Bow on Lid -->
        <g transform="translate(100, 70)">
          <!-- Left loop -->
          <path d="M 0 0 C -25 -25, -45 -15, -40 5 C -35 20, -10 10, 0 0 Z" fill="#a855f7" stroke="#6d28d9" stroke-width="2" />
          <!-- Right loop -->
          <path d="M 0 0 C 25 -25, 45 -15, 40 5 C 35 20, 10 10, 0 0 Z" fill="#a855f7" stroke="#6d28d9" stroke-width="2" />
          <!-- Bow Knot -->
          <circle cx="0" cy="0" r="7" fill="#e9d5ff" stroke="#6d28d9" stroke-width="2" />
        </g>
      </g>
    </svg>
  `,

  // Pushpin / Paperclip in Violet
  pushPin: `
    <svg class="push-pin" viewBox="0 0 32 32" width="26" height="26" fill="none">
      <ellipse cx="16" cy="12" rx="8" ry="6" fill="#7c3aed" stroke="#581c87" stroke-width="1.5" />
      <rect x="14" y="16" width="4" height="8" rx="2" fill="#581c87" />
      <polygon points="16,28 14,23 18,23" fill="#94a3b8" />
    </svg>
  `,

  // Washi tape snippet with purple palette
  washiTape: (color = 'lavender') => {
    const colors = {
      purple: 'rgba(168, 85, 247, 0.7)',
      lavender: 'rgba(216, 180, 254, 0.75)',
      violet: 'rgba(139, 92, 246, 0.7)',
      lilac: 'rgba(192, 132, 252, 0.7)',
      plum: 'rgba(126, 34, 206, 0.65)',
      cream: 'rgba(254, 243, 199, 0.75)',
      pink: 'rgba(232, 121, 249, 0.7)',
      mint: 'rgba(167, 243, 208, 0.7)',
      yellow: 'rgba(254, 240, 138, 0.75)'
    };
    return `<div class="washi-tape washi-tape-${color}" style="background-color: ${colors[color] || colors.lavender};" aria-hidden="true"></div>`;
  }
};
