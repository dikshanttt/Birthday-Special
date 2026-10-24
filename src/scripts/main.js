// =============================================================================
// MAIN INTERACTION SCRIPT - BIRTHDAY SURPRISE FOR DIDUUU 💗🎂
// =============================================================================

import confetti from 'canvas-confetti';
import { siteConfig } from '../data/config.js';
import { soundController } from './audio.js';
import { svgs } from './svgs.js';

document.addEventListener('DOMContentLoaded', () => {
  initConfiguredContent();
  initDecorations();
  initWelcomeSection();
  initCelebrationSection();
  initMemoriesGallery();
  initLetterSection();
  initSurpriseSection();
  initBackToTop();
  initMusicToggle();
  initFloatingParticles();
});

function initConfiguredContent() {
  const setText = (id, value) => {
    const element = document.getElementById(id);
    if (element && value !== undefined) element.textContent = value;
  };

  setText('welcomeBadge', siteConfig.welcome.badge);
  setText('welcomeGreeting', siteConfig.welcome.greeting.replace(/\s*♡\s*$/, ''));
  setText('welcomeSubGreeting', siteConfig.welcome.subGreeting);
  setText('welcomeHandwrittenNote', siteConfig.welcome.handwrittenNote);
  setText('welcomeUnbiologicalNote', siteConfig.welcome.unbiologicalNote);
  setText('btnOpenSurprise', siteConfig.welcome.ctaButton);

  setText('celebrationTitle', siteConfig.celebration.title);
  setText('celebrationSubtitle', siteConfig.celebration.subtitle);
  setText('btnCelebrationPill', siteConfig.celebration.pillButton);
  setText('candlePromptCopy', siteConfig.celebration.cakeCaption);
  setText('showcaseCaption', siteConfig.celebration.showcaseCard.caption);
  const showcaseImage = document.getElementById('showcaseImage');
  if (showcaseImage) showcaseImage.src = siteConfig.celebration.showcaseCard.image;

  const stickyList = document.querySelector('.sticky-list');
  if (stickyList) {
    stickyList.replaceChildren(...siteConfig.celebration.showcaseCard.stickyNote.map(note => {
      const item = document.createElement('li');
      item.textContent = `• ${note}`;
      return item;
    }));
  }

  setText('memoriesTitle', siteConfig.memoriesSection.title);
  setText('memoriesSubtitle', siteConfig.memoriesSection.subtitle);
  document.querySelectorAll('.filter-btn').forEach(button => {
    const category = siteConfig.memoriesSection.categories.find(item => item.id === button.dataset.category);
    if (category) button.textContent = category.label;
  });

  setText('letterTitle', siteConfig.letter.sectionHeading);
  setText('letterSubtitle', siteConfig.letter.subtitle);
  setText('letterStickyTag', siteConfig.letter.stickyTag);
  const letterSideImage = document.getElementById('letterSideImage');
  if (letterSideImage) letterSideImage.src = siteConfig.letter.sidePolaroid.image;
  setText('letterSideCaption', siteConfig.letter.sidePolaroid.caption);

  setText('surpriseQuote1', siteConfig.surprise.quote1);
  setText('surpriseQuote2', siteConfig.surprise.quote2);
  setText('surpriseQuote3', siteConfig.surprise.quote3);
  setText('surpriseTitle', siteConfig.surprise.grandTitle);
  setText('surpriseSubWish', siteConfig.surprise.subWish);
  setText('surprisePsNote', siteConfig.surprise.psNote);
  setText('btnSendHug', siteConfig.surprise.hugButton);
}

// -----------------------------------------------------------------------------
// 1. Decorative Vectors & SVGs Injection
// -----------------------------------------------------------------------------
function initDecorations() {
  // Inject Hero Cake SVG
  const heroCakeSlot = document.getElementById('heroCakeSlot');
  if (heroCakeSlot) {
    heroCakeSlot.innerHTML = svgs.cake;
  }

  // Inject Celebration Interactive Cake SVG
  const celebrationCakeSlot = document.getElementById('celebrationCakeSlot');
  if (celebrationCakeSlot) {
    celebrationCakeSlot.innerHTML = svgs.cake;
  }

  // Inject Ribbon Bow on Letter
  const letterRibbonSlot = document.getElementById('letterRibbonSlot');
  if (letterRibbonSlot) {
    letterRibbonSlot.innerHTML = svgs.ribbonBow;
  }

  // Inject Tulips Bouquet in side polaroids
  const sideTulipsSlot = document.getElementById('sideTulipsSlot');
  if (sideTulipsSlot) {
    sideTulipsSlot.innerHTML = svgs.tulipBouquet;
  }

  // Inject Interactive Gift Box SVG in final section
  const giftBoxSlot = document.getElementById('giftBoxSlot');
  if (giftBoxSlot) {
    giftBoxSlot.innerHTML = svgs.giftBox;
  }
}

// -----------------------------------------------------------------------------
// 2. Section A: Welcome Screen
// -----------------------------------------------------------------------------
function initWelcomeSection() {
  const openSurpriseBtn = document.getElementById('btnOpenSurprise');
  if (!openSurpriseBtn) return;

  openSurpriseBtn.addEventListener('click', (e) => {
    e.preventDefault();

    // Trigger celebratory confetti burst (Purple edition)
    confetti({
      particleCount: 95,
      spread: 75,
      origin: { y: 0.6 },
      colors: ['#a855f7', '#8b5cf6', '#7c3aed', '#c084fc', '#d8b4fe', '#fef08a']
    });

    // Sound effect
    soundController.playChime();

    // Smooth scroll to celebration section
    const celebrationSec = document.getElementById('celebration');
    if (celebrationSec) {
      celebrationSec.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

// -----------------------------------------------------------------------------
// 3. Section B: Birthday Celebration (Interactive Cake & Candles)
// -----------------------------------------------------------------------------
function initCelebrationSection() {
  const cakeStage = document.getElementById('celebrationCakeSlot');
  const candlePromptCopy = document.getElementById('candlePromptCopy');
  const pillActionBtn = document.getElementById('btnCelebrationPill');

  let candlesBlown = false;

  const toggleCandles = () => {
    candlesBlown = !candlesBlown;

    if (candlesBlown) {
      cakeStage.classList.add('candles-blown');
      soundController.playCandleBlow();

      // Confetti burst for making a wish
      confetti({
        particleCount: 110,
        spread: 90,
        origin: { y: 0.5 },
        colors: ['#c084fc', '#a855f7', '#8b5cf6', '#d8b4fe', '#fef08a', '#ffffff']
      });

      if (candlePromptCopy) {
        candlePromptCopy.textContent = siteConfig.celebration.wishGrantedMessage;
      }

      // Add temporary smoke puffs
      const candles = cakeStage.querySelectorAll('.candle');
      candles.forEach(candle => {
        const puff = document.createElement('div');
        puff.className = 'smoke-puff';
        candle.appendChild(puff);
        setTimeout(() => puff.remove(), 1600);
      });
    } else {
      cakeStage.classList.remove('candles-blown');
      soundController.playPop();
      if (candlePromptCopy) {
        candlePromptCopy.textContent = siteConfig.celebration.cakeCaption;
      }
    }
  };

  if (cakeStage) {
    cakeStage.addEventListener('click', toggleCandles);
    cakeStage.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleCandles();
      }
    });
  }

  if (pillActionBtn) {
    pillActionBtn.addEventListener('click', () => {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#f43f5e', '#ec4899', '#fbcfe8']
      });
      soundController.playPop();
    });
  }
}

// -----------------------------------------------------------------------------
// 4. Section C: Memories Gallery (All Photos, Scrapbook, Lightbox)
// -----------------------------------------------------------------------------
let currentLightboxIndex = 0;
let filteredMemories = siteConfig.memoriesSection.items.filter(item => item.category === 'bond');

function initMemoriesGallery() {
  const grid = document.getElementById('scrapbookGrid');
  const filterButtons = document.querySelectorAll('.filter-btn');

  // Render cards
  const renderMemories = (items) => {
    if (!grid) return;
    grid.innerHTML = '';

    items.forEach((item, index) => {
      const card = document.createElement('article');
      card.className = 'polaroid-card';
      card.dataset.index = index;
      card.style.transform = `rotate(${item.rotation || 0}deg)`;
      card.setAttribute('tabindex', '0');
      card.setAttribute('role', 'button');
      card.setAttribute('aria-label', `View photo: ${item.title}`);

      // Washi tape
      const tapeSnippet = svgs.washiTape(item.tape || 'pink');

      // Photo markup (all items are pure photos now)
      const mediaMarkup = `
        <div class="polaroid-media-wrap">
          <img src="${item.src}" alt="${item.title}" loading="lazy" />
        </div>
      `;

      // Sticker doodle
      let stickerIcon = '🌷';
      if (item.sticker === 'bunny') stickerIcon = '🐰';
      if (item.sticker === 'heart') stickerIcon = '💖';
      if (item.sticker === 'star') stickerIcon = '⭐';
      if (item.sticker === 'sparkle') stickerIcon = '✨';

      card.innerHTML = `
        ${tapeSnippet}
        ${mediaMarkup}
        <div class="polaroid-meta">
          <p class="polaroid-caption">${item.caption}</p>
        </div>
        <span class="polaroid-sticker" aria-hidden="true">${stickerIcon}</span>
      `;

      // Click to open lightbox
      card.addEventListener('click', () => {
        openLightbox(index);
      });

      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openLightbox(index);
        }
      });

      grid.appendChild(card);
    });
  };

  // Initial render
  renderMemories(filteredMemories);

  // Filter Buttons
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');

      const category = btn.dataset.category;
      if (category === 'all') {
        filteredMemories = [...siteConfig.memoriesSection.items];
      } else {
        filteredMemories = siteConfig.memoriesSection.items.filter(item => item.category === category);
      }
      renderMemories(filteredMemories);
    });
  });

  // Setup Lightbox Controls
  setupLightbox();
}

function openLightbox(index) {
  const lightbox = document.getElementById('lightboxModal');
  if (!lightbox) return;

  currentLightboxIndex = index;
  updateLightboxContent();

  if (!lightbox.open) {
    lightbox.showModal();
  }
}

function updateLightboxContent() {
  const lightbox = document.getElementById('lightboxModal');
  const body = document.getElementById('lightboxBody');
  const caption = document.getElementById('lightboxCaption');
  const counter = document.getElementById('lightboxCounter');
  const item = filteredMemories[currentLightboxIndex];

  if (!item || !body || !caption) return;

  body.innerHTML = `
    <img src="${item.src}" alt="${item.title}" />
  `;

  caption.textContent = item.caption;

  if (counter) {
    counter.textContent = `${currentLightboxIndex + 1} / ${filteredMemories.length}`;
  }
}

function setupLightbox() {
  const lightbox = document.getElementById('lightboxModal');
  const closeBtn = document.getElementById('lightboxCloseBtn');
  const prevBtn = document.getElementById('lightboxPrevBtn');
  const nextBtn = document.getElementById('lightboxNextBtn');

  if (!lightbox) return;

  // Modern Web Guidance: Light-dismiss fallback for browsers lacking closedBy
  if (!('closedBy' in HTMLDialogElement.prototype)) {
    lightbox.addEventListener('click', (event) => {
      if (event.target !== lightbox) return;
      const rect = lightbox.getBoundingClientRect();
      const isDialogContent = (
        rect.top <= event.clientY &&
        event.clientY <= rect.top + rect.height &&
        rect.left <= event.clientX &&
        event.clientX <= rect.left + rect.width
      );
      if (isDialogContent) return;
      lightbox.close();
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', () => lightbox.close());
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      currentLightboxIndex = (currentLightboxIndex - 1 + filteredMemories.length) % filteredMemories.length;
      updateLightboxContent();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      currentLightboxIndex = (currentLightboxIndex + 1) % filteredMemories.length;
      updateLightboxContent();
    });
  }

  // Keyboard navigation
  lightbox.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      currentLightboxIndex = (currentLightboxIndex - 1 + filteredMemories.length) % filteredMemories.length;
      updateLightboxContent();
    } else if (e.key === 'ArrowRight') {
      currentLightboxIndex = (currentLightboxIndex + 1) % filteredMemories.length;
      updateLightboxContent();
    }
  });
}

// -----------------------------------------------------------------------------
// 5. Section D: Personal Birthday Letter
// -----------------------------------------------------------------------------
function initLetterSection() {
  const salutationEl = document.getElementById('letterSalutation');
  const bodyEl = document.getElementById('letterBody');
  const signoffEl = document.getElementById('letterSignoff');

  if (salutationEl) {
    salutationEl.textContent = siteConfig.letter.salutation;
  }

  if (bodyEl) {
    bodyEl.innerHTML = siteConfig.letter.paragraphs
      .map(p => `<p class="letter-paragraph">${p}</p>`)
      .join('');
  }

  if (signoffEl) {
    signoffEl.textContent = siteConfig.letter.closing;
  }
}

// -----------------------------------------------------------------------------
// 6. Section E: Final Sunset Surprise & Hug Interaction
// -----------------------------------------------------------------------------
function initSurpriseSection() {
  const giftBox = document.getElementById('giftBoxSlot');
  const btnHug = document.getElementById('btnSendHug');

  // Interactive Gift Box click & keyboard interaction
  const triggerGift = () => {
    confetti({
      particleCount: 95,
      spread: 85,
      origin: { y: 0.6 },
      colors: ['#a855f7', '#8b5cf6', '#c084fc', '#d8b4fe', '#fef08a']
    });
    soundController.playPop();

    // Show little message
    showHugToast("🎁 Sano gift chittai hajur ko haat ma pugcha haiii! Wait for it! 🥳💜");
  };

  if (giftBox) {
    giftBox.addEventListener('click', triggerGift);
  }

  // Send One More Hug Button
  if (btnHug) {
    btnHug.addEventListener('click', () => {
      // 1. Confetti explosion
      confetti({
        particleCount: 130,
        spread: 100,
        origin: { y: 0.7 },
        colors: ['#a855f7', '#7c3aed', '#c084fc', '#d8b4fe', '#fef08a', '#ffffff']
      });

      // 2. Play cheerful chime
      soundController.playChime();

      // 3. Spawn floating hearts & hugs
      spawnHeartShower();

      // 4. Show toast message
      showHugToast(siteConfig.surprise.hugSuccessMessage);
    });
  }
}

function showHugToast(message) {
  const hugToast = document.getElementById('toastHugBanner');
  if (!hugToast) return;

  hugToast.textContent = message;
  hugToast.classList.add('show');

  setTimeout(() => {
    hugToast.classList.remove('show');
  }, 5000);
}

function spawnHeartShower() {
  const container = document.body;
  const emojis = ['🫂', '💜', '✨', '🪻', '🌷', '👑', '🎂', '💌', '🌷'];

  for (let i = 0; i < 28; i++) {
    const el = document.createElement('div');
    el.className = 'floating-particle';
    el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    el.style.left = `${Math.random() * 95}vw`;
    el.style.bottom = '0px';
    el.style.fontSize = `${1.2 + Math.random() * 1.6}rem`;
    el.style.animation = `floatUpward ${6 + Math.random() * 4}s ease-out forwards`;
    el.style.zIndex = '9999';

    container.appendChild(el);
    setTimeout(() => el.remove(), 10000);
  }
}

// -----------------------------------------------------------------------------
// 7. Back to Top
// -----------------------------------------------------------------------------
function initBackToTop() {
  const backToTopBtn = document.getElementById('btnBackToTop');

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

// -----------------------------------------------------------------------------
// 9. Music / Sound Toggle
// -----------------------------------------------------------------------------
function initMusicToggle() {
  const btnMusic = document.getElementById('btnToggleMusic');
  if (!btnMusic) return;

  btnMusic.addEventListener('click', () => {
    const isPlaying = soundController.toggleMusic();
    if (isPlaying) {
      btnMusic.classList.add('active');
      btnMusic.setAttribute('aria-label', 'Pause music');
      btnMusic.textContent = '🎵';
    } else {
      btnMusic.classList.remove('active');
      btnMusic.setAttribute('aria-label', 'Play music');
      btnMusic.textContent = '🔇';
    }
  });
}

// -----------------------------------------------------------------------------
// 10. Floating Background Particles
// -----------------------------------------------------------------------------
function initFloatingParticles() {
  const container = document.getElementById('floatingBg');
  if (!container) return;

  const particleIcons = ['💜', '♡', '✨', '🪻', '✧', '🌷', '🎂', '🧸', '👑'];

  for (let i = 0; i < 22; i++) {
    const p = document.createElement('span');
    p.className = 'floating-particle';
    p.textContent = particleIcons[Math.floor(Math.random() * particleIcons.length)];
    p.style.left = `${Math.random() * 98}vw`;
    p.style.animationDelay = `${Math.random() * 12}s`;
    p.style.animationDuration = `${12 + Math.random() * 10}s`;
    p.style.fontSize = `${0.9 + Math.random() * 1.1}rem`;
    container.appendChild(p);
  }
}
