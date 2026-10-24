// =============================================================================
// BIRTHDAY CONFIGURATION & MEMORIES DATA - FOR MERO DIDUUU 💗🎂
// =============================================================================
// A special digital gift celebrating my beloved sister, Diduuu!
// All photos are placed in: /public/images/memories/
// =============================================================================

export const siteConfig = {
  // Recipient details
  nickname: "Diduuu",
  fullName: "Sakshi",
  relationship: "My Wonderful Sister & Best Friend",
  
  // Navigation
  navLinks: [
    { label: "Home", href: "#welcome" },
    { label: "Celebration", href: "#celebration" },
    { label: "Memories", href: "#memories" },
    { label: "Letter", href: "#letter" },
    { label: "Surprise", href: "#surprise" }
  ],

  // Section A: Welcome Screen
  welcome: {
    badge: "✨ Mero Pyari Diduuu • Best Sister 💜",
    greeting: "Someone very special has a birthday today… ♡",
    subGreeting: "(and that's you, Diduuu!) 🥹💜",
    ctaButton: "🎁 Open Your Surprise",
    handwrittenNote: "A little birthday surprise for my amazing Diduuu ♡",
    unbiologicalNote: "To the sweetest, most amazing sister 🪻"
  },

  // Section B: Birthday Celebration
  celebration: {
    crown: "👑",
    title: "Happy Birthday, Mero Diduuu! 🎂💜",
    subtitle: "May your day be as bright and beautiful as you are! 🪻",
    pillButton: "Keep being you 💜",
    cakeCaption: "Click the candles to blow them out and make a wish! ✨",
    wishGrantedMessage: "✨ Make a wish, Diduuu! May every single dream of yours come true this year! 🎂🎉",
    showcaseCard: {
      image: "./images/memories/17.jpeg", // Feature spotlight photo
      caption: "You deserve all the happiness in the world 💜",
      tapeColor: "purple",
      stickyNote: [
        "Kind 🌷",
        "Funny 😂",
        "Beautiful 🪻",
        "Talented & Kind 💜",
        "My Diduuu 💜"
      ]
    }
  },

  // Section C: Memories Scrapbook Gallery (All Photos)
  memoriesSection: {
    title: "Little Moments of My Favourite Diduuu 💜",
    subtitle: "From a naughty little kid to the amazing, wonderful soul you are today! 😂❤️",
    categories: [
      { id: "all", label: "All Memories 📸" },
      { id: "childhood", label: "Naughty Kid Days 🐣" },
      { id: "recent", label: "Growing Beautiful 🌷" },
      { id: "bond", label: "Beautiful Moments 🫶🏻" }
    ],
    items: [
      {
        id: 1,
        src: "./images/memories/1.jpeg",
        title: "The Iconic Little Naughty Kid",
        caption: "The naughty kid (never changed!) 🤪💖",
        category: "childhood",
        rotation: -2.5,
        tape: "purple",
        sticker: "bunny"
      },
      {
        id: 2,
        src: "./images/memories/2.jpeg",
        title: "Pure Innocence & Smiles",
        caption: "That sweet innocent smile that melted everyone's hearts 🥹🌷",
        category: "childhood",
        rotation: 2.1,
        tape: "lavender",
        sticker: "sparkle"
      },
      {
        id: 3,
        src: "./images/memories/3.jpeg",
        title: "Little Explorer",
        caption: "Always curious, always ready for mischief! 😂✨",
        category: "childhood",
        rotation: -1.8,
        tape: "violet",
        sticker: "star"
      },
      {
        id: 4,
        src: "./images/memories/4.jpeg",
        title: "Growing up so fast",
        caption: "Growing up into such a kind and beautiful soul ♡",
        category: "childhood",
        rotation: 2.8,
        tape: "lilac",
        sticker: "heart"
      },
      {
        id: 5,
        src: "./images/memories/5.jpeg",
        title: "Precious Childhood",
        caption: "Golden days we'll always cherish forever 🧸💛",
        category: "childhood",
        rotation: -2.2,
        tape: "plum",
        sticker: "sparkle"
      },
      {
        id: 6,
        src: "./images/memories/6.jpeg",
        title: "The Sibling Bond",
        caption: "No matter how much we tease, you're always looking out for me 🫂💗",
        category: "childhood",
        rotation: 1.5,
        tape: "lavender",
        sticker: "heart"
      },
      {
        id: 7,
        src: "./images/memories/7.jpeg",
        title: "Naughty Smile",
        caption: "Caught in 4K planning the next prank! 🤫✨",
        category: "childhood",
        rotation: -3.0,
        tape: "violet",
        sticker: "bunny"
      },
      {
        id: 8,
        src: "./images/memories/8.jpeg",
        title: "Radiant & Graceful",
        caption: "From cute childhood antics to timeless grace 🌷💫",
        category: "recent",
        rotation: -1.5,
        tape: "purple",
        sticker: "sparkle"
      },
      {
        id: 9,
        src: "./images/memories/9.jpeg",
        title: "That Unmatched Vibe",
        caption: "Still the same goofy you on the inside! 😂❤️",
        category: "recent",
        rotation: 2.4,
        tape: "lilac",
        sticker: "heart"
      },
      {
        id: 10,
        src: "./images/memories/10.jpeg",
        title: "Golden Hour Glow",
        caption: "Lighting up every room just by walking in ✨🌻",
        category: "recent",
        rotation: -2.0,
        tape: "lavender",
        sticker: "star"
      },
      {
        id: 11,
        src: "./images/memories/11.jpeg",
        title: "Precious Smiles",
        caption: "Keep smiling always, Diduuu! Your smile is contagious! 🌷",
        category: "recent",
        rotation: 1.8,
        tape: "purple",
        sticker: "bunny"
      },
      {
        id: 12,
        src: "./images/memories/12.jpeg",
        title: "Pure Aesthetic",
        caption: "Queen of aesthetic poses and effortless charm 👑💅",
        category: "recent",
        rotation: -1.2,
        tape: "violet",
        sticker: "heart"
      },
      {
        id: 13,
        src: "./images/memories/13.jpeg",
        title: "Always Cherished",
        caption: "Smol Diduuu, big sister duties already 🥺🤍",
        category: "recent",
        rotation: 2.6,
        tape: "lilac",
        sticker: "sparkle"
      },
      {
        id: 14,
        src: "./images/memories/14.jpeg",
        title: "Confidence & Beauty",
        caption: "Strong, graceful, and inspiring every single day 💐💖",
        category: "recent",
        rotation: -2.7,
        tape: "plum",
        sticker: "star"
      },
      {
        id: 15,
        src: "./images/memories/15.jpeg",
        title: "Unforgettable Days",
        caption: "Little you, already making every moment special 🥹🎂🤍z",
        category: "recent",
        rotation: 1.4,
        tape: "lavender",
        sticker: "heart"
      },
      {
        id: 16,
        src: "./images/memories/16.jpeg",
        title: "My Favourite Person",
        caption: "So lucky to have a funny, kind sister like you 🫶🏻🌷",
        category: "recent",
        rotation: -1.9,
        tape: "violet",
        sticker: "bunny"
      },
      {
        id: 17,
        src: "./images/memories/17.jpeg",
        title: "Pure Elegance",
        caption: "A heart as beautiful as fresh spring flowers 🌷💖",
        category: "recent",
        rotation: 2.2,
        tape: "purple",
        sticker: "sparkle"
      },
      {
        id: 18,
        src: "./images/memories/18.jpg",
        title: "Sunshine Energy",
        caption: "The brightest smile in the whole universe! 🌷✨",
        category: "bond",
        rotation: -2.4,
        tape: "lilac",
        sticker: "star"
      },
      {
        id: 19,
        src: "./images/memories/19.jpg",
        title: "Ever Joyful",
        caption: "Sadhai yestai sparkling and happy dekhna paam Diduuu! 🌷",
        category: "recent",
        rotation: 1.6,
        tape: "lavender",
        sticker: "sparkle"
      },
      {
        id: 20,
        src: "./images/memories/21.jpg",
        title: "Amazing Sister",
        caption: "Your kindness and cheerful spirit make every day brighter 🫶🏻💖",
        category: "bond",
        rotation: -1.7,
        tape: "purple",
        sticker: "heart"
      },
      {
        id: 21,
        src: "./images/memories/22.jpg",
        title: "Picture Perfect",
        caption: "Memories to cherish for a lifetime and beyond 📸✨",
        category: "recent",
        rotation: 2.5,
        tape: "plum",
        sticker: "star"
      },
      {
        id: 22,
        src: "./images/memories/23.jpg",
        title: "Graceful Queen",
        caption: "Queen of elegance, warmth, and unmatched sweet energy 👑🌷",
        category: "recent",
        rotation: -2.1,
        tape: "violet",
        sticker: "bunny"
      },
      {
        id: 23,
        src: "./images/memories/24.jpg",
        title: "Best Sister Forever",
        caption: "Sadhai sabai bhanda pyari, mero favourite didi! 🫂💗",
        category: "bond",
        rotation: 1.9,
        tape: "lavender",
        sticker: "heart"
      },
      {
        id: 24,
        src: "./images/memories/25.jpg",
        title: "Sweet Moments",
        caption: "A sweet little glimpse of pure joy and warmth 🥹🧸",
        category: "childhood",
        rotation: -1.5,
        tape: "purple",
        sticker: "sparkle"
      },
      {
        id: 25,
        src: "./images/memories/26.jpg",
        title: "Timeless Smile",
        caption: "Sadhai sabai ko pyari, sabailai khusi banaune didi 🌷❤️",
        category: "recent",
        rotation: 2.3,
        tape: "lilac",
        sticker: "bunny"
      },
      {
        id: 26,
        src: "./images/memories/27.jpg",
        title: "Unmatched Support",
        caption: "Thank you for always being there for me, no matter what 🫶🏻💫",
        category: "bond",
        rotation: -2.6,
        tape: "plum",
        sticker: "heart"
      },
      {
        id: 27,
        src: "./images/memories/28.jpg",
        title: "Radiant Tomorrow",
        caption: "Forever cheering for you in every chapter of your life! 🥳💖",
        category: "recent",
        rotation: 1.7,
        tape: "violet",
        sticker: "star"
      },
      {
        id: 28,
        src: "./images/memories/29.jpg",
        title: "Always Appreciated",
        caption: "Hajurko ramailo bani le sabailai khusi banaunxa 🫶🏻🌷",
        category: "bond",
        rotation: -1.8,
        tape: "purple",
        sticker: "sparkle"
      },
      {
        id: 29,
        src: "./images/memories/30.jpeg",
        title: "Cherished Memories",
        caption: "Every single moment spent with you is a treasure! 🌷✨",
        category: "recent",
        rotation: 2.1,
        tape: "lavender",
        sticker: "star"
      },
      {
        id: 30,
        src: "./images/memories/31.jpeg",
        title: "Infinite Joy",
        caption: "Stay smiling, laughing, and shining bright always Diduuu! 💜👑",
        category: "recent",
        rotation: -2.3,
        tape: "lilac",
        sticker: "heart"
      },
      {
        id: 31,
        src: "./images/memories/32.jpeg",
        title: "Best Sister Forever",
        caption: "Mero sweetest Diduuu sadhai mero mutu mai hunuhunxa 🫂💜",
        category: "bond",
        rotation: 1.6,
        tape: "plum",
        sticker: "sparkle"
      }
    ]
  },

  // Section D: Personal Birthday Letter
  letter: {
    sectionHeading: "A Little Letter for You... 💌",
    salutation: "Happy Birthday, Mero Diduuu! 💜",
    paragraphs: [
      "Kaash yrrr aaja hajur sanga bhayera yo special day celebrate garna paauthe! 🥹💜 Dashain vayera bhetauna napaye pani, hajurko birthday ramailo hos haiii!",
      "Hajur ekdam kind, funny ra talented hunuhunxa! Hajur jasto ramro didi paunu mero lagi khusi ko kura ho. 🫶🏻🪻💜",
      "Hajurko life sadhai khusi, safalta ra ramra moments le bharipurna hos. Hajurka sabai sapana pura hun, ani hajur sadhai yestai hasirakhnu haiii! 🌷💫",
      "Chittai bhetera sangai ramailo garnu parxa hai! Teti bela samma ko lagi, yo sano birthday card ra dherai shubhakamana! 🎂💜",
      "Janmadinko dherai dherai shubhakamana, Diduuu! 🎂🎉"
    ],
    closing: "— Hajurko sano bhai💜",
    stickyTag: "Best Didi 💜",
    sidePolaroid: {
      image: "./images/memories/11.jpeg",
      caption: "Keep smiling always! 💜"
    }
  },

  // Section E: Final Sunset Surprise
  surprise: {
    quote1: "Hajurko janmadin dherai ramailo hos! 💜🎂 Hajurko yo naya barsa khusi, safalta ra sundar palharu le bharipurna hos. 💖✨",
    quote2: "Aaja sangai celebrate garna napaye pani, hajurko din ekdam special ra ramailo hos! 🥹🎉",
    quote3: "Chittai bhetera dherai ramailo garnuparxa haiii, Diduuu! 🪻",
    grandTitle: "HAPPY BIRTHDAY, MERO DIDUUUU! 🎂💜",
    subWish: "Sadhai khusi rahanu hos, Mero Pyari Diduuu! 💜",
    psNote: "P.S. Hajurko sano gift pani baki xa haiii! 🎁😂💜",
    hugButton: "Send Birthday Cheer 🎉",
    hugSuccessMessage: "Birthday cheer sent your way! 🎉💜 Hajur jasto kind ra ramailo didi paunu mero lagi ekdam khusi ko kura ho! Sadhai khusi ra safal hunuhos! 🥹🪻"
  },

  // Audio settings
  audio: {
    musicFile: "./audio/bgm.mp3",
    enableSynthesizerFallback: true
  }
};
