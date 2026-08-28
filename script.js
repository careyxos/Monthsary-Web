/* ═══════════════════════════════════════════════════════════════════════════
   MY BABY CIARA PLAYLIST — JAVASCRIPT ENGINE 🎀💖
   Playback · IndexedDB · Mascot · Love Notes · Scrapbook · Wheel · Virtual Pet 🐰
   ═══════════════════════════════════════════════════════════════════════════ */

const STORAGE_KEY = 'monthsary-playlist-v1';
const HERO_KEY = 'monthsary-hero-v1';
const LIKED_KEY = 'monthsary-liked-v1';
const LOVE_NOTES_KEY = 'monthsary-love-notes-v1';
const MEMORIES_KEY = 'monthsary-memories-v2';
const CALLSIGN_KEY = 'monthsary-callsign-v1';
const PET_KEY = 'monthsary-pet-v1';
const DB_NAME = 'monthsary-media';
const DB_VERSION = 1;
const IDB_PREFIX = 'idb://';

const DEFAULT_LOVE_NOTES = [
  "Mahal na mahal kita baby Ciara ko! Ikaw ang pinakamagandang melody sa buhay ko araw-araw. 💖",
  "Thank you for being my peace, my home, and my favorite person in the whole universe. 🌸",
  "Palagi kitang pipiliin, sa lahat ng araw at sa every beat ng heart ko. ✨",
  "Kahit anong mangyari, andito lang si Baby bear mo na laging susuporta at magmamahal sayo nang buong-buo. 🍓",
  "Your smile is the prettiest thing I have ever seen. Never forget that you're so precious to me, my baby girl! 🎀",
  "Araw-araw kitang mamahalin nang higit pa sa kahapon, my baby ChiCha. 💕",
  "Pagod ka man o masaya, yayakapin kita nang mahigpit palagi. 🧸",
  "Forever and always tayong dalawa, my Baby girl. Happy every day with you! 💖"
];

const DEFAULT_MEMORIES = [
  {
    id: 'mem-1',
    imagePath: 'assets/nte chiz.jpg',
    caption: 'Everness and ever 💕',
    date: 'Date with My Cia',
    sticker: '🎀'
  },
  {
    id: 'mem-2',
    imagePath: 'assets/Gojo Heart Cia.png',
    caption: 'Gojo Heart for Cia 💖',
    date: 'Together Forever',
    sticker: '🍓'
  },
  {
    id: 'mem-3',
    imagePath: 'assets/gojo made by my Cia.png',
    caption: 'Gojo Drawing made by my Cia 🎨✨',
    date: 'Art by My Baby',
    sticker: '✨'
  },
  {
    id: 'mem-4',
    imagePath: 'assets/Cia icon.jpg',
    caption: 'Cutie Baby Ciara 🌸',
    date: 'pretty pouty',
    sticker: '🐰'
  },
  {
    id: 'mem-5',
    imagePath: 'assets/video call Icon.png',
    caption: 'Late Night Video Calls 📱💕',
    date: 'Always Connected',
    sticker: '💖'
  },
  {
    id: 'mem-6',
    imagePath: 'assets/Video Games icon.png',
    caption: 'Gaming Together 🎮💖',
    date: 'Player 1 & Player 2',
    sticker: '🎀'
  },
  {
    id: 'mem-7',
    imagePath: 'assets/Movie icon.png',
    caption: 'Movie Date Nights 🍿🎬',
    date: 'Cozy Moments',
    sticker: '✨'
  },
  {
    id: 'mem-8',
    imagePath: 'assets/nte1.jpg',
    caption: 'Prettiest Girl in the Universe ✨',
    date: 'Forever with You',
    sticker: '🌸'
  },
  {
    id: 'mem-9',
    imagePath: 'assets/nte.jpg',
    caption: 'Sweet Memories with You 🧸',
    date: 'Carey & Ciara',
    sticker: '💖'
  },
  {
    id: 'mem-10',
    imagePath: 'assets/IMG_2252.PNG',
    caption: 'Us Always & Forever 💖',
    date: 'Happy Monthsary',
    sticker: '🎀'
  }
];

const MELO_QUOTES = [
  "Carey loves you so much baby Ciara! 💖",
  "Ganda naman ng baby ChiCha ko palagi! 🌸",
  "Enjoy the sweet music, my forever Darling!! 🍓",
  "Pindutin mo yung Love Notes 💌 may secret letters si Hubby para sayo!",
  "Gusto mo ng kiss at hug? *gives tight warm hugs!* 🎀",
  "Bawal mag-tampo ha, mahal na mahal kita! 🥰",
  "You are the sweetest melody in Carey's life 🎶✨",
  "Pakiss nga sa pinakamagandang girlfriend sa buong universe! 💖",
  "Smile ka na baby, cute cute mo eh! 🐰✨"
];

const WHEEL_OPTIONS = [
  { label: 'LOML 💖', color: '#FFB7C5', text: '#831843' },
  { label: 'ASAWA KO 💍', color: '#FFE4E8', text: '#9D174D' },
  { label: 'Mosh 🍓', color: '#FFF0F5', text: '#BE185D' },
  { label: 'BABE 🎀', color: '#FCE7F3', text: '#9D174D' },
  { label: 'Mahal Ko 🌸', color: '#E0F2FE', text: '#0369A1' },
  { label: 'Baby Bear 🧸', color: '#FEF3C7', text: '#92400E' },
  { label: 'Honeybunch 🍯', color: '#FFEDD5', text: '#9A3412' },
  { label: 'My Princess 👑', color: '#F3E8FF', text: '#6B21A8' },
  { label: 'Cutiepie 🧁', color: '#E8D7F1', text: '#581C87' },
  { label: 'Customize ✍️', color: '#FED7AA', text: '#7C2D12' },
];

/* ─── VIRTUAL PET WARDROBE CATALOGUE 👗 ─── */
const PET_ITEMS = {
  hats: [
    {
      id: 'pink-bow',
      name: 'Pink Ribbon Bow',
      icon: '🎀',
      svg: `
        <!-- Pink Ribbon Bow on Head -->
        <path d="M 94 65 C 75 50, 70 76, 94 70 Z" fill="#FF4D6D" stroke="#D81B60" stroke-width="1.2" />
        <path d="M 126 65 C 145 50, 150 76, 126 70 Z" fill="#FF4D6D" stroke="#D81B60" stroke-width="1.2" />
        <circle cx="110" cy="68" r="7" fill="#FF8DA1" stroke="#D81B60" stroke-width="1.2" />
        <circle cx="110" cy="68" r="3" fill="#FFFFFF" />
      `
    },
    {
      id: 'strawberry-hat',
      name: 'Strawberry Beret',
      icon: '🍓',
      svg: `
        <!-- Strawberry Beret Hat -->
        <ellipse cx="110" cy="60" rx="34" ry="18" fill="#FF4D6D" stroke="#C2185B" stroke-width="1.5" />
        <path d="M 110 42 Q 106 36 100 38 Q 110 32 110 42" fill="#4CAF50" stroke="#2E7D32" stroke-width="1.2" />
        <circle cx="98" cy="58" r="1.5" fill="#FFE082" />
        <circle cx="112" cy="56" r="1.5" fill="#FFE082" />
        <circle cx="124" cy="62" r="1.5" fill="#FFE082" />
      `
    },
    {
      id: 'flower-crown',
      name: 'Flower Crown',
      icon: '🌸',
      svg: `
        <!-- Flower Crown -->
        <ellipse cx="88" cy="66" rx="7" ry="7" fill="#FFB7C5" />
        <circle cx="88" cy="66" r="3" fill="#FFF59D" />
        <ellipse cx="110" cy="62" rx="8" ry="8" fill="#FF8DA1" />
        <circle cx="110" cy="62" r="3.5" fill="#FFF59D" />
        <ellipse cx="132" cy="66" rx="7" ry="7" fill="#B388FF" />
        <circle cx="132" cy="66" r="3" fill="#FFF59D" />
      `
    },
    {
      id: 'tiara',
      name: 'Princess Tiara',
      icon: '👑',
      svg: `
        <!-- Princess Tiara -->
        <path d="M 88 72 L 95 56 L 110 65 L 125 56 L 132 72 Z" fill="#FFD54F" stroke="#FFA000" stroke-width="1.5" />
        <circle cx="95" cy="56" r="3" fill="#FF4081" />
        <circle cx="110" cy="50" r="4" fill="#E91E63" />
        <circle cx="125" cy="56" r="3" fill="#FF4081" />
        <circle cx="110" cy="68" r="2.5" fill="#E040FB" />
      `
    },
    {
      id: 'chef-hat',
      name: 'Baker Chef Hat',
      icon: '👨‍🍳',
      svg: `
        <!-- Chef Hat -->
        <path d="M 86 68 Q 80 44 98 40 Q 110 28 122 40 Q 140 44 134 68 Z" fill="#FFFFFF" stroke="#E0E0E0" stroke-width="1.5" />
        <rect x="88" y="64" width="44" height="8" rx="2" fill="#FF8DA1" />
      `
    },
    {
      id: 'gojo-hair',
      name: 'Gojo Satoru Hair & Shades 🕶️',
      icon: '🤍',
      svg: `
        <!-- Gojo Spiky White Hair -->
        <path d="M 76 74 L 66 48 L 80 54 L 88 38 L 100 52 L 110 30 L 120 52 L 132 38 L 140 54 L 154 48 L 144 74 Z" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.8" />
        <!-- Round Dark Sunglasses with Blue Flare -->
        <circle cx="88" cy="74" r="8" fill="#1E293B" stroke="#0F172A" stroke-width="1.5" />
        <circle cx="132" cy="74" r="8" fill="#1E293B" stroke="#0F172A" stroke-width="1.5" />
        <line x1="96" y1="74" x2="124" y2="74" stroke="#0F172A" stroke-width="2" />
        <!-- Cyan Eye Glow Sparkle -->
        <circle cx="86" cy="72" r="2.5" fill="#38BDF8" />
        <circle cx="130" cy="72" r="2.5" fill="#38BDF8" />
      `
    },
    {
      id: 'fusion-crown',
      name: 'CareyChi Celestial Crown 👑✨',
      icon: '👑',
      svg: `
        <!-- Supreme Fusion Couple Crown with Star & Wings -->
        <path d="M 84 70 L 92 50 L 102 60 L 110 42 L 118 60 L 128 50 L 136 70 Z" fill="#FBBF24" stroke="#D97706" stroke-width="1.5" />
        <circle cx="92" cy="50" r="2.5" fill="#38BDF8" />
        <circle cx="110" cy="42" r="3.5" fill="#FF4D6D" />
        <circle cx="128" cy="50" r="2.5" fill="#38BDF8" />
        <circle cx="110" cy="58" r="2" fill="#FFFFFF" />
      `
    },
    { id: 'none', name: 'None', icon: '🚫', svg: '' }
  ],
  outfits: [
    {
      id: 'gojo-suit',
      name: 'Jujutsu High Uniform 🥋',
      icon: '🥋',
      svg: `
        <!-- Gojo Dark Navy Sorcerer Jacket -->
        <path d="M 76 140 Q 110 132 144 140 L 154 182 Q 110 188 66 182 Z" fill="#1E1B4B" stroke="#0F172A" stroke-width="1.5" />
        <!-- High Collar -->
        <path d="M 94 138 L 100 128 L 120 128 L 126 138 Z" fill="#1E1B4B" stroke="#312E81" stroke-width="1.2" />
        <line x1="110" y1="138" x2="110" y2="182" stroke="#312E81" stroke-width="1.8" />
        <!-- Silver Button -->
        <circle cx="110" cy="148" r="2.5" fill="#E2E8F0" />
      `
    },
    {
      id: 'pink-dress',
      name: 'Pink Princess Dress',
      icon: '👗',
      svg: `
        <!-- Princess Gown -->
        <path d="M 80 142 Q 110 134 140 142 L 156 182 Q 110 192 64 182 Z" fill="#FF8DA1" stroke="#E91E63" stroke-width="1.5" />
        <path d="M 94 140 L 110 156 L 126 140" stroke="#FFFFFF" stroke-width="2" fill="none" />
        <circle cx="110" cy="156" r="3" fill="#FF4081" />
        <path d="M 70 180 Q 110 186 150 180" stroke="#FFFFFF" stroke-width="3" stroke-dasharray="4,3" fill="none" />
      `
    },
    {
      id: 'maid-dress',
      name: 'Strawberry Maid Dress',
      icon: '🎀',
      svg: `
        <!-- Maid Dress with Apron & Frills -->
        <path d="M 78 142 Q 110 134 142 142 L 158 182 Q 110 192 62 182 Z" fill="#212121" stroke="#000000" stroke-width="1.5" />
        <!-- White Apron -->
        <path d="M 90 142 L 130 142 L 138 180 Q 110 186 82 180 Z" fill="#FFFFFF" stroke="#ECEFF1" stroke-width="1.2" />
        <!-- Red Ribbon -->
        <circle cx="110" cy="146" r="3.5" fill="#FF4D6D" />
        <path d="M 104 146 Q 110 152 110 146 Q 110 152 116 146" stroke="#FF4D6D" stroke-width="1.5" fill="none" />
      `
    },
    {
      id: 'sweater',
      name: 'Lavender Cozy Sweater',
      icon: '🧥',
      svg: `
        <!-- Cozy Sweater -->
        <path d="M 74 140 Q 110 132 146 140 L 156 182 Q 110 188 64 182 Z" fill="#D1C4E9" stroke="#9575CD" stroke-width="1.5" />
        <line x1="110" y1="140" x2="110" y2="182" stroke="#B39DDB" stroke-width="2" />
        <circle cx="110" cy="150" r="2.5" fill="#FFF59D" />
        <circle cx="110" cy="162" r="2.5" fill="#FFF59D" />
        <circle cx="110" cy="174" r="2.5" fill="#FFF59D" />
      `
    },
    {
      id: 'pajamas',
      name: 'Starry Pajamas',
      icon: '🌟',
      svg: `
        <!-- Starry Night Pajamas -->
        <path d="M 76 140 Q 110 132 144 140 L 154 182 Q 110 188 66 182 Z" fill="#3949AB" stroke="#283593" stroke-width="1.5" />
        <!-- Tiny Stars -->
        <polygon points="92,150 94,154 98,154 95,157 96,161 92,158 88,161 89,157 86,154 90,154" fill="#FFEB3B" />
        <polygon points="128,154 130,158 134,158 131,161 132,165 128,162 124,165 125,161 122,158 126,158" fill="#FFEB3B" />
        <polygon points="106,166 108,170 112,170 109,173 110,177 106,174 102,177 103,173 100,170 104,170" fill="#FFEB3B" />
      `
    },
    {
      id: 'angel',
      name: 'Angel Gown & Wings',
      icon: '🪽',
      svg: `
        <!-- Angel Wings Behind -->
        <path d="M 72 135 C 40 110, 30 160, 72 155 Z" fill="#FFFFFF" stroke="#E1BEE7" stroke-width="1.5" />
        <path d="M 148 135 C 180 110, 190 160, 148 155 Z" fill="#FFFFFF" stroke="#E1BEE7" stroke-width="1.5" />
        <!-- White Glowing Gown -->
        <path d="M 78 142 Q 110 134 142 142 L 156 182 Q 110 190 64 182 Z" fill="#FFFFFF" stroke="#E1BEE7" stroke-width="1.5" />
        <!-- Golden Halo on Head -->
        <ellipse cx="110" cy="40" rx="26" ry="6" fill="none" stroke="#FFD54F" stroke-width="3" />
      `
    },
    {
      id: 'fusion-robe',
      name: 'MayorChi Yin-Yang Robe 🥋🎀',
      icon: '✨',
      svg: `
        <!-- Half Sky-Blue Bear / Half Pink Melody Kimono Robe -->
        <path d="M 76 140 Q 110 132 110 140 L 110 188 Q 80 188 66 182 Z" fill="#38BDF8" stroke="#0284C7" stroke-width="1.2" />
        <path d="M 110 140 Q 110 132 144 140 L 154 182 Q 130 188 110 188 Z" fill="#FF8DA1" stroke="#E11D48" stroke-width="1.2" />
        <path d="M 94 140 L 110 156 L 126 140" stroke="#FFFFFF" stroke-width="2" fill="none" />
        <circle cx="110" cy="156" r="3.5" fill="#FFE082" stroke="#D97706" stroke-width="1" />
      `
    },
    { id: 'none', name: 'None (Natural Fur)', icon: '🚫', svg: '' }
  ],
  handhelds: [
    {
      id: 'heart-pillow',
      name: 'Love Heart Pillow',
      icon: '💖',
      svg: `
        <!-- Plush Heart Pillow -->
        <path d="M 110 160 C 110 148, 86 142, 86 160 C 86 172, 110 182, 110 182 C 110 182, 134 172, 134 160 C 134 142, 110 148, 110 160 Z" fill="#FF4081" stroke="#C2185B" stroke-width="1.5" />
        <circle cx="98" cy="154" r="2.5" fill="#FFFFFF" />
      `
    },
    {
      id: 'boba',
      name: 'Boba Milk Tea',
      icon: '🧋',
      svg: `
        <!-- Boba Cup -->
        <path d="M 124 150 L 138 150 L 135 178 L 127 178 Z" fill="#D7CCC8" stroke="#8D6E63" stroke-width="1.2" />
        <rect x="122" y="148" width="18" height="3" rx="1.5" fill="#A1887F" />
        <!-- Straw -->
        <line x1="131" y1="140" x2="131" y2="152" stroke="#FF8DA1" stroke-width="2.5" stroke-linecap="round" />
        <!-- Pearls -->
        <circle cx="129" cy="174" r="1.5" fill="#3E2723" />
        <circle cx="133" cy="174" r="1.5" fill="#3E2723" />
        <circle cx="131" cy="170" r="1.5" fill="#3E2723" />
      `
    },
    {
      id: 'teddy',
      name: 'Cuddle Teddy Bear',
      icon: '🧸',
      svg: `
        <!-- Cute Teddy Bear -->
        <circle cx="86" cy="162" r="12" fill="#BCAAA4" stroke="#8D6E63" stroke-width="1.2" />
        <circle cx="86" cy="150" r="8" fill="#BCAAA4" stroke="#8D6E63" stroke-width="1.2" />
        <circle cx="80" cy="144" r="3" fill="#8D6E63" />
        <circle cx="92" cy="144" r="3" fill="#8D6E63" />
        <circle cx="84" cy="149" r="1" fill="#3E2723" />
        <circle cx="88" cy="149" r="1" fill="#3E2723" />
        <circle cx="86" cy="152" r="1" fill="#FF8DA1" />
      `
    },
    {
      id: 'carrot',
      name: 'Crispy Carrot',
      icon: '🥕',
      svg: `
        <!-- Fresh Carrot -->
        <path d="M 126 156 L 142 168 L 124 178 Z" fill="#FF7043" stroke="#D84315" stroke-width="1.2" />
        <path d="M 122 152 Q 118 144 114 148 M 122 152 Q 124 142 126 146" stroke="#4CAF50" stroke-width="2" stroke-linecap="round" fill="none" />
      `
    },
    {
      id: 'star-wand',
      name: 'Magic Star Wand',
      icon: '✨',
      svg: `
        <!-- Star Wand -->
        <line x1="126" y1="178" x2="136" y2="148" stroke="#FFD54F" stroke-width="2.5" stroke-linecap="round" />
        <polygon points="136,140 138,144 143,145 139,148 140,153 136,150 131,153 133,148 129,145 134,144" fill="#FFEE58" stroke="#FFA000" stroke-width="1.2" />
      `
    },
    {
      id: 'my-melody-plushie',
      name: 'My Melody Plushie',
      icon: '🎀',
      svg: `
        <!-- My Melody Style Plushie -->
        <!-- Body -->
        <ellipse cx="80" cy="163" rx="13" ry="11" fill="#FFFFFF" stroke="#FFB7C5" stroke-width="1.2" />
        <!-- Hood -->
        <path d="M 67 160 Q 67 147 80 146 Q 93 147 93 160 Z" fill="#FF8DA1" stroke="#E91E63" stroke-width="1.2" />
        <!-- Bunny Ears on Hood -->
        <ellipse cx="72" cy="147" rx="4" ry="8" fill="#FF8DA1" stroke="#E91E63" stroke-width="1" />
        <ellipse cx="88" cy="147" rx="4" ry="8" fill="#FF8DA1" stroke="#E91E63" stroke-width="1" />
        <!-- Inner ear pink -->
        <ellipse cx="72" cy="148" rx="2" ry="5" fill="#FFD6E4" />
        <ellipse cx="88" cy="148" rx="2" ry="5" fill="#FFD6E4" />
        <!-- Face: tiny eyes & dot nose -->
        <circle cx="77" cy="157" r="1.5" fill="#2B1822" />
        <circle cx="83" cy="157" r="1.5" fill="#2B1822" />
        <ellipse cx="80" cy="160" rx="1.5" ry="1" fill="#FF4D6D" />
        <!-- Pink bow on side -->
        <path d="M 89 155 C 87 153, 84 155, 86 157 C 84 157, 87 159, 89 157 C 91 159, 94 157, 92 155 C 94 153, 91 153, 89 155 Z" fill="#FF4D6D" />
      `
    },
    {
      id: 'hello-kitty-plushie',
      name: 'Hello Kitty Plushie',
      icon: '🐱',
      svg: `
        <!-- Hello Kitty Style Plushie -->
        <!-- Body -->
        <ellipse cx="80" cy="165" rx="11" ry="13" fill="#FFFFFF" stroke="#FFB7C5" stroke-width="1.2" />
        <!-- Head -->
        <circle cx="80" cy="151" r="11" fill="#FFFFFF" stroke="#FFB7C5" stroke-width="1.2" />
        <!-- Ears -->
        <polygon points="70,143 73,135 77,143" fill="#FFFFFF" stroke="#FFB7C5" stroke-width="1.2" />
        <polygon points="83,143 87,135 90,143" fill="#FFFFFF" stroke="#FFB7C5" stroke-width="1.2" />
        <!-- Eyes: tiny ovals -->
        <ellipse cx="76" cy="150" rx="1.8" ry="2" fill="#2B1822" />
        <ellipse cx="84" cy="150" rx="1.8" ry="2" fill="#2B1822" />
        <!-- Shine in eyes -->
        <circle cx="75.5" cy="149.5" r="0.7" fill="#FFFFFF" />
        <circle cx="83.5" cy="149.5" r="0.7" fill="#FFFFFF" />
        <!-- No-mouth (classic HK) -->
        <!-- Nose dot -->
        <circle cx="80" cy="152.5" r="1" fill="#FF8DA1" />
        <!-- Yellow bow -->
        <path d="M 84 145 C 83 143, 80 145, 82 146.5 C 80 146.5, 83 148, 84 146 C 86 148, 89 146.5, 87 145 C 89 143, 86 143, 84 145 Z" fill="#FFEB3B" stroke="#FFA000" stroke-width="0.8" />
        <!-- Arm-like paws -->
        <ellipse cx="69" cy="163" rx="4" ry="5" fill="#FFFFFF" stroke="#FFB7C5" stroke-width="1" />
        <ellipse cx="91" cy="163" rx="4" ry="5" fill="#FFFFFF" stroke="#FFB7C5" stroke-width="1" />
      `
    },
    {
      id: 'fusion-wand',
      name: 'Matcha Strawberry Star Wand 🍵🍓✨',
      icon: '🪄',
      svg: `
        <!-- Cosmic Dual Wand -->
        <line x1="126" y1="178" x2="136" y2="148" stroke="#38BDF8" stroke-width="2.5" stroke-linecap="round" />
        <circle cx="136" cy="144" r="8" fill="#FF4D6D" />
        <circle cx="136" cy="144" r="4" fill="#7CB342" />
        <circle cx="136" cy="144" r="2" fill="#FFFFFF" />
      `
    },
    { id: 'none', name: 'None', icon: '🚫', svg: '' }
  ],
  auras: [
    {
      id: 'pink-aura',
      name: 'Sakura Pink Aura',
      icon: '🌸',
      colors: ['#FFB7C5', '#FF8DA1', '#FF4D6D'],
      svg: `
        <!-- Sakura Pink Aura — animated radial glow behind bunny -->
        <defs>
          <radialGradient id="aura-pink" cx="50%" cy="60%" r="55%">
            <stop offset="0%" stop-color="#FF8DA1" stop-opacity="0.55" />
            <stop offset="55%" stop-color="#FFB7C5" stop-opacity="0.25" />
            <stop offset="100%" stop-color="#FFD6E4" stop-opacity="0" />
          </radialGradient>
          <radialGradient id="aura-pink-inner" cx="50%" cy="60%" r="30%">
            <stop offset="0%" stop-color="#FF4D6D" stop-opacity="0.5" />
            <stop offset="100%" stop-color="#FF8DA1" stop-opacity="0" />
          </radialGradient>
        </defs>
        <ellipse cx="110" cy="145" rx="95" ry="85" fill="url(#aura-pink)" />
        <ellipse cx="110" cy="130" rx="55" ry="55" fill="url(#aura-pink-inner)" />
        <!-- Floating sakura sparkles -->
        <circle cx="52" cy="80" r="3" fill="#FF8DA1" opacity="0.6" />
        <circle cx="168" cy="75" r="2.5" fill="#FFB7C5" opacity="0.55" />
        <circle cx="40" cy="140" r="2" fill="#FF4D6D" opacity="0.45" />
        <circle cx="178" cy="130" r="3" fill="#FF8DA1" opacity="0.5" />
        <circle cx="85" cy="30" r="2" fill="#FF4D6D" opacity="0.4" />
        <circle cx="138" cy="25" r="2.5" fill="#FFB7C5" opacity="0.45" />
        <!-- Tiny heart sparks -->
        <text x="48" y="60" font-size="8" opacity="0.55" fill="#FF4D6D">♡</text>
        <text x="162" y="55" font-size="8" opacity="0.5" fill="#FF8DA1">♡</text>
        <text x="28" y="115" font-size="7" opacity="0.4" fill="#FFB7C5">✦</text>
        <text x="183" y="110" font-size="7" opacity="0.4" fill="#FF4D6D">✦</text>
      `
    },
    {
      id: 'purple-aura',
      name: 'Lavender Purple Aura',
      icon: '💜',
      colors: ['#D8B4FE', '#A855F7', '#7C3AED'],
      svg: `
        <defs>
          <radialGradient id="aura-purple" cx="50%" cy="60%" r="55%">
            <stop offset="0%" stop-color="#C084FC" stop-opacity="0.55" />
            <stop offset="55%" stop-color="#DDD6FE" stop-opacity="0.25" />
            <stop offset="100%" stop-color="#EDE9FE" stop-opacity="0" />
          </radialGradient>
          <radialGradient id="aura-purple-inner" cx="50%" cy="60%" r="30%">
            <stop offset="0%" stop-color="#A855F7" stop-opacity="0.5" />
            <stop offset="100%" stop-color="#C084FC" stop-opacity="0" />
          </radialGradient>
        </defs>
        <ellipse cx="110" cy="145" rx="95" ry="85" fill="url(#aura-purple)" />
        <ellipse cx="110" cy="130" rx="55" ry="55" fill="url(#aura-purple-inner)" />
        <circle cx="52" cy="80" r="3" fill="#C084FC" opacity="0.6" />
        <circle cx="168" cy="75" r="2.5" fill="#DDD6FE" opacity="0.55" />
        <circle cx="40" cy="140" r="2" fill="#A855F7" opacity="0.45" />
        <circle cx="178" cy="130" r="3" fill="#C084FC" opacity="0.5" />
        <circle cx="85" cy="30" r="2" fill="#7C3AED" opacity="0.4" />
        <circle cx="138" cy="25" r="2.5" fill="#DDD6FE" opacity="0.45" />
        <text x="48" y="60" font-size="8" opacity="0.55" fill="#A855F7">✦</text>
        <text x="162" y="55" font-size="8" opacity="0.5" fill="#C084FC">★</text>
        <text x="28" y="115" font-size="7" opacity="0.4" fill="#DDD6FE">✦</text>
        <text x="183" y="110" font-size="7" opacity="0.4" fill="#A855F7">♡</text>
      `
    },
    {
      id: 'sky-aura',
      name: 'Sky Blue Aura',
      icon: '☁️',
      colors: ['#BAE6FD', '#38BDF8', '#0EA5E9'],
      svg: `
        <defs>
          <radialGradient id="aura-sky" cx="50%" cy="60%" r="55%">
            <stop offset="0%" stop-color="#38BDF8" stop-opacity="0.5" />
            <stop offset="55%" stop-color="#BAE6FD" stop-opacity="0.22" />
            <stop offset="100%" stop-color="#E0F2FE" stop-opacity="0" />
          </radialGradient>
          <radialGradient id="aura-sky-inner" cx="50%" cy="60%" r="30%">
            <stop offset="0%" stop-color="#0EA5E9" stop-opacity="0.45" />
            <stop offset="100%" stop-color="#38BDF8" stop-opacity="0" />
          </radialGradient>
        </defs>
        <ellipse cx="110" cy="145" rx="95" ry="85" fill="url(#aura-sky)" />
        <ellipse cx="110" cy="130" rx="55" ry="55" fill="url(#aura-sky-inner)" />
        <circle cx="52" cy="80" r="3" fill="#38BDF8" opacity="0.6" />
        <circle cx="168" cy="75" r="2.5" fill="#BAE6FD" opacity="0.55" />
        <circle cx="40" cy="140" r="2" fill="#0EA5E9" opacity="0.45" />
        <circle cx="178" cy="130" r="3" fill="#38BDF8" opacity="0.5" />
        <circle cx="85" cy="30" r="2" fill="#0EA5E9" opacity="0.4" />
        <circle cx="138" cy="25" r="2.5" fill="#BAE6FD" opacity="0.45" />
        <text x="48" y="60" font-size="8" opacity="0.55" fill="#0EA5E9">✦</text>
        <text x="162" y="55" font-size="8" opacity="0.5" fill="#38BDF8">❄</text>
        <text x="28" y="115" font-size="7" opacity="0.4" fill="#BAE6FD">✦</text>
        <text x="183" y="110" font-size="7" opacity="0.4" fill="#0EA5E9">☆</text>
      `
    },
    {
      id: 'fusion-aura',
      name: 'Infinite Couple Fusion Aura 💖🌌',
      icon: '🔮',
      colors: ['#FF8DA1', '#38BDF8', '#FDE047'],
      svg: `
        <defs>
          <radialGradient id="aura-fusion" cx="50%" cy="55%" r="60%">
            <stop offset="0%" stop-color="#FF4D6D" stop-opacity="0.6" />
            <stop offset="50%" stop-color="#38BDF8" stop-opacity="0.4" />
            <stop offset="85%" stop-color="#FDE047" stop-opacity="0.2" />
            <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0" />
          </radialGradient>
        </defs>
        <ellipse cx="110" cy="145" rx="98" ry="88" fill="url(#aura-fusion)" />
        <circle cx="45" cy="70" r="3.5" fill="#38BDF8" opacity="0.8" />
        <circle cx="175" cy="70" r="3.5" fill="#FF4D6D" opacity="0.8" />
        <circle cx="110" cy="20" r="4" fill="#FDE047" opacity="0.9" />
        <text x="36" y="100" font-size="10" opacity="0.7" fill="#38BDF8">🧸</text>
        <text x="170" y="100" font-size="10" opacity="0.7" fill="#FF4D6D">🐰</text>
        <text x="105" y="32" font-size="9" opacity="0.9" fill="#FDE047">✨</text>
      `
    },
    { id: 'none', name: 'No Aura', icon: '🚫', svg: '' }
  ]
};

const DEFAULT_SONGS = [
  {
    id: 'song-daisies',
    title: 'Daisies',
    artist: 'Justin Bieber',
    audioPath: 'audio/DAISIES.mp3',
    imagePath: 'images/Cia icon.jpg',
    mayorPick: true,
    lyrics: ['♪ Daisies ♪', 'For my Mayor 🐰', 'Happy monthsary, baby.'],
  },
];
let songs = [];
let loveNotes = [];
let memories = [];
const mediaCache = new Map();

const state = {
  currentId: null,
  isPlaying: false,
  shuffle: false,
  repeat: 'off',
  liked: new Set(),
  shuffledQueue: [],
  lyricsOpen: false,
  currentView: 'monthsary',
  pendingDeleteId: null,
  addAudioFile: null,
  addCoverFile: null,
  addMemoryFile: null,
  currentNoteIndex: 0,
  activeCallsign: 'LOML 💖',
  wheelAngle: 0,
  isSpinning: false,
};

const petState = {
  name: 'Chi-Bunny 💖',
  hunger: 85,
  love: 90,
  energy: 95,
  level: 1,
  xp: 20,
  isSleeping: false,
  equipped: {
    hat: 'pink-bow',
    outfit: 'pink-dress',
    handheld: 'heart-pillow',
    aura: 'none'
  }
};

/* ═══════════════════════════════════════════════════════════════════════════
   DOM REFERENCES
   ═══════════════════════════════════════════════════════════════════════════ */

const audio = document.getElementById('audio');
const heroImage = document.getElementById('hero-image');
const songGrid = document.getElementById('song-grid');
const likedGrid = document.getElementById('liked-grid');
const likedEmpty = document.getElementById('liked-empty');
const searchResults = document.getElementById('search-results');
const searchInput = document.getElementById('search-input');
const mayorFavorites = document.getElementById('mayor-favorites');
const songCount = document.getElementById('song-count');
const toast = document.getElementById('toast');

const playerArt = document.getElementById('player-art');
const playerTitle = document.getElementById('player-title');
const playerArtist = document.getElementById('player-artist');
const playerLike = document.getElementById('player-like');
const vinylContainer = document.getElementById('vinyl-container');

const btnPlay = document.getElementById('btn-play');
const iconPlay = document.getElementById('icon-play');
const iconPause = document.getElementById('icon-pause');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
const btnShuffle = document.getElementById('btn-shuffle');
const btnRepeat = document.getElementById('btn-repeat');
const btnMute = document.getElementById('btn-mute');
const iconVolume = document.getElementById('icon-volume');
const iconMuted = document.getElementById('icon-muted');

const seekBarDesktop = document.getElementById('seek-bar-desktop');
const seekBarMobile = document.getElementById('seek-bar-mobile');
const volumeBar = document.getElementById('volume-bar');

const timeCurrentDesktop = document.getElementById('time-current-desktop');
const timeTotalDesktop = document.getElementById('time-total-desktop');
const timeCurrentMobile = document.getElementById('time-current-mobile');
const timeTotalMobile = document.getElementById('time-total-mobile');

const visualizer = document.getElementById('visualizer');
const playerBar = document.getElementById('player-bar');

const lyricsPanel = document.getElementById('lyrics-panel');
const lyricsContent = document.getElementById('lyrics-content');
const lyricsTrackTitle = document.getElementById('lyrics-track-title');
const lyricsTrackArtist = document.getElementById('lyrics-track-artist');

// Mascot DOM
const meloCompanion = document.getElementById('melo-companion');
const meloAvatarBtn = document.getElementById('melo-avatar-btn');
const meloSpeech = document.getElementById('melo-speech');

// Callsign DOM
const callsignDisplayBadge = document.getElementById('callsign-display-badge');
const currentCallsignText = document.getElementById('current-callsign-text');
const heroCallsignBadge = document.getElementById('hero-callsign-badge');

// Spin Wheel DOM
const btnOpenWheel = document.getElementById('btn-open-wheel');
const btnMobileWheel = document.getElementById('btn-mobile-wheel');
const wheelCanvas = document.getElementById('wheel-canvas');
const btnSpinHub = document.getElementById('btn-spin-hub');
const btnSpinAgain = document.getElementById('btn-spin-again');
const wheelResultContainer = document.getElementById('wheel-result-container');
const wheelWinnerText = document.getElementById('wheel-winner-text');
const btnApplyCallsign = document.getElementById('btn-apply-callsign');
const customCallsignBox = document.getElementById('custom-callsign-box');
const customCallsignInput = document.getElementById('custom-callsign-input');
const btnSaveCustomCallsign = document.getElementById('btn-save-custom-callsign');

// Love Notes DOM
const loveCardMessage = document.getElementById('love-card-message');
const loveCardCounter = document.getElementById('love-card-counter');
const loveCardDisplay = document.getElementById('love-card-display');
const btnOpenLoveNotes = document.getElementById('btn-open-love-notes');
const btnMobileLoveNotes = document.getElementById('btn-mobile-love-notes');
const btnPrevNote = document.getElementById('btn-prev-note');
const btnNextNote = document.getElementById('btn-next-note');
const btnRandomNote = document.getElementById('btn-random-note');
const newLoveNoteInput = document.getElementById('new-love-note-input');
const btnSaveLoveNote = document.getElementById('btn-save-love-note');

// Scrapbook DOM
const scrapbookGrid = document.getElementById('scrapbook-grid');
const btnAddMemory = document.getElementById('btn-add-memory');
const btnMemoryUpload = document.getElementById('btn-memory-upload');
const inputMemoryFile = document.getElementById('input-memory-file');
const memoryFileName = document.getElementById('memory-file-name');
const memoryCaption = document.getElementById('memory-caption');
const memoryDate = document.getElementById('memory-date');
const btnSaveMemory = document.getElementById('btn-save-memory');

// Virtual Bunny Pet DOM
const petRoomCard = document.getElementById('pet-room-card');
const petNameDisplay = document.getElementById('pet-name-display');
const petLevelBadge = document.getElementById('pet-level-badge');
const petHungerText = document.getElementById('pet-hunger-text');
const petHungerFill = document.getElementById('pet-hunger-fill');
const petLoveText = document.getElementById('pet-love-text');
const petLoveFill = document.getElementById('pet-love-fill');
const petEnergyText = document.getElementById('pet-energy-text');
const petEnergyFill = document.getElementById('pet-energy-fill');
const petSpeechBox = document.getElementById('pet-speech-box');
const bunnyStage = document.getElementById('bunny-stage');
const bunnyFigure = document.getElementById('bunny-figure');
const petZzzIndicator = document.getElementById('pet-zzz-indicator');
const layerHat = document.getElementById('layer-hat');
const layerOutfit = document.getElementById('layer-outfit');
const layerHandheld = document.getElementById('layer-handheld');
const layerEyes = document.getElementById('layer-eyes');
const layerAura = document.getElementById('layer-aura');
const foodTray = document.getElementById('food-tray');
const btnPetFeed = document.getElementById('btn-pet-feed');
const btnPetWardrobe = document.getElementById('btn-pet-wardrobe');
const btnPetHug = document.getElementById('btn-pet-hug');
const btnPetBath = document.getElementById('btn-pet-bath');
const btnPetSleepToggle = document.getElementById('btn-pet-sleep-toggle');
const wardrobeHatsGrid = document.getElementById('wardrobe-hats-grid');
const wardrobeOutfitsGrid = document.getElementById('wardrobe-outfits-grid');
const wardrobeHandheldsGrid = document.getElementById('wardrobe-handhelds-grid');

// Confetti Particle Overlay
const particleCanvas = document.getElementById('particle-canvas');

let seekRAF = null;
let toastTimer = null;
let meloSpeechTimer = null;
let petSpeechTimer = null;

/* ═══════════════════════════════════════════════════════════════════════════
   INDEXEDDB
   ═══════════════════════════════════════════════════════════════════════════ */

function openDB() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onupgradeneeded = (e) => e.target.result.createObjectStore('media', { keyPath: 'key' });
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

async function saveToIDB(key, blob) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('media', 'readwrite');
    tx.objectStore('media').put({ key, blob, type: blob.type });
    tx.oncomplete = () => resolve(`${IDB_PREFIX}${key}`);
    tx.onerror = () => reject(tx.error);
  });
}

async function deleteFromIDB(key) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('media', 'readwrite');
    tx.objectStore('media').delete(key);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

async function resolveMediaPath(path) {
  if (!path) return '';
  if (!path.startsWith(IDB_PREFIX)) return path;
  const key = path.slice(IDB_PREFIX.length);
  if (mediaCache.has(key)) return mediaCache.get(key);

  const db = await openDB();
  const blob = await new Promise((resolve, reject) => {
    const tx = db.transaction('media', 'readonly');
    const req = tx.objectStore('media').get(key);
    req.onsuccess = () => resolve(req.result?.blob || null);
    req.onerror = () => reject(req.error);
  });

  if (!blob) return path;
  const url = URL.createObjectURL(blob);
  mediaCache.set(key, url);
  return url;
}

function isIdbPath(path) {
  return path && path.startsWith(IDB_PREFIX);
}

function idbKeyFromPath(path) {
  return path.slice(IDB_PREFIX.length);
}

/* ═══════════════════════════════════════════════════════════════════════════
   AUDIO SFX SYNTHESIZER (Web Audio API)
   ═══════════════════════════════════════════════════════════════════════════ */

let audioCtx = null;
function getAudioContext() {
  if (!audioCtx) {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (AudioCtx) audioCtx = new AudioCtx();
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

function playCuteChime(type = 'sparkle') {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime;

    if (type === 'sparkle') {
      const freqs = [523.25, 659.25, 783.99, 1046.5];
      freqs.forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + i * 0.05);

        gain.gain.setValueAtTime(0.06, now + i * 0.05);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.05 + 0.3);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + i * 0.05);
        osc.stop(now + i * 0.05 + 0.3);
      });
    } else if (type === 'pop') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.1);

      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.1);
    } else if (type === 'munch') {
      [280, 320, 240].forEach((f, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(f, now + i * 0.08);
        gain.gain.setValueAtTime(0.07, now + i * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.08 + 0.07);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + i * 0.08);
        osc.stop(now + i * 0.08 + 0.07);
      });
    } else if (type === 'bubble') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(500, now);
      osc.frequency.exponentialRampToValueAtTime(1200, now + 0.12);
      gain.gain.setValueAtTime(0.06, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.12);
    } else if (type === 'tick') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, now);
      gain.gain.setValueAtTime(0.04, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.04);
    } else if (type === 'fanfare') {
      const notes = [523.25, 659.25, 783.99, 1046.5, 1318.5];
      notes.forEach((f, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(f, now + i * 0.08);
        gain.gain.setValueAtTime(0.08, now + i * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.08 + 0.4);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + i * 0.08);
        osc.stop(now + i * 0.08 + 0.4);
      });
    }
  } catch {
    // Ignored
  }
}

/* Cute Chipmunk / Animal Crossing Synthesized Voice for Chi-Bunny 🐰🎶 */
function playChipmunkVoice() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime;
    const notesCount = Math.floor(Math.random() * 3) + 4; // 4 to 6 sweet chirpy syllables
    const baseFreqs = [880, 987.77, 1046.5, 1174.66, 1318.51, 1567.98, 1760.0];

    for (let i = 0; i < notesCount; i++) {
      const startTime = now + i * 0.065;
      const duration = 0.055;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      // Formant & pitch modulation
      osc.type = Math.random() > 0.4 ? 'triangle' : 'sine';
      const freq = baseFreqs[Math.floor(Math.random() * baseFreqs.length)] + (Math.random() - 0.5) * 70;
      osc.frequency.setValueAtTime(freq, startTime);
      osc.frequency.exponentialRampToValueAtTime(freq * (1 + (Math.random() - 0.5) * 0.35), startTime + duration);

      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(freq * 1.25, startTime);
      filter.Q.setValueAtTime(3.2, startTime);

      gain.gain.setValueAtTime(0.001, startTime);
      gain.gain.linearRampToValueAtTime(0.075, startTime + 0.012);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      osc.start(startTime);
      osc.stop(startTime + duration);
    }
  } catch {
    // Ignored
  }
}

/* ═══════════════════════════════════════════════════════════════════════════
   PERSISTENCE & STATE
   ═══════════════════════════════════════════════════════════════════════════ */

function savePlaylist() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(songs));
}

function saveLiked() {
  localStorage.setItem(LIKED_KEY, JSON.stringify([...state.liked]));
}

function saveHero(path) {
  localStorage.setItem(HERO_KEY, path);
}

function saveLoveNotes() {
  localStorage.setItem(LOVE_NOTES_KEY, JSON.stringify(loveNotes));
}

function saveMemories() {
  localStorage.setItem(MEMORIES_KEY, JSON.stringify(memories));
}

function saveCallsign(val) {
  state.activeCallsign = val;
  localStorage.setItem(CALLSIGN_KEY, val);
  updateCallsignUI();
}

function savePet() {
  localStorage.setItem(PET_KEY, JSON.stringify(petState));
}

function updateCallsignUI() {
  if (currentCallsignText) currentCallsignText.textContent = state.activeCallsign;
  if (heroCallsignBadge) heroCallsignBadge.textContent = `Callsign: ${state.activeCallsign}`;
}

function loadPlaylist() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    songs = saved ? JSON.parse(saved) : [...DEFAULT_SONGS];
    DEFAULT_SONGS.forEach((def) => {
      const exists = songs.some(
        (s) => s.id === def.id || (s.title === def.title && s.artist === def.artist)
      );
      if (!exists) songs.unshift(def);
    });
  } catch {
    songs = [...DEFAULT_SONGS];
  }
}

function loadLiked() {
  try {
    const saved = localStorage.getItem(LIKED_KEY);
    if (saved) state.liked = new Set(JSON.parse(saved));
  } catch {
    state.liked = new Set();
  }
}

function loadHero() {
  return localStorage.getItem(HERO_KEY) || 'assets/mymelody_banner.jpg';
}

function loadLoveNotes() {
  try {
    const saved = localStorage.getItem(LOVE_NOTES_KEY);
    loveNotes = saved ? JSON.parse(saved) : [...DEFAULT_LOVE_NOTES];
  } catch {
    loveNotes = [...DEFAULT_LOVE_NOTES];
  }
}

function loadMemories() {
  try {
    const saved = localStorage.getItem(MEMORIES_KEY);
    memories = saved ? JSON.parse(saved) : [...DEFAULT_MEMORIES];
  } catch {
    memories = [...DEFAULT_MEMORIES];
  }
}

function loadCallsign() {
  state.activeCallsign = localStorage.getItem(CALLSIGN_KEY) || 'LOML 💖';
  updateCallsignUI();
}

function loadPet() {
  try {
    const saved = localStorage.getItem(PET_KEY);
    if (saved) {
      Object.assign(petState, JSON.parse(saved));
    }
  } catch {
    // Keep defaults
  }
  updatePetUI();
}

function generateId(prefix = 'song') {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
}

/* ═══════════════════════════════════════════════════════════════════════════
   UTILITIES
   ═══════════════════════════════════════════════════════════════════════════ */

function formatTime(seconds) {
  if (!seconds || isNaN(seconds) || !isFinite(seconds)) return '0:00';
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
}

function updateSliderFill(slider, percent) {
  slider.style.setProperty('--fill', `${percent}%`);
}

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function getSongIndex(id) {
  return songs.findIndex((s) => s.id === id);
}

function getCurrentSong() {
  return songs.find((s) => s.id === state.currentId) || null;
}

function getQueue() {
  const ids = songs.map((s) => s.id);
  if (state.shuffle) {
    if (state.shuffledQueue.length !== ids.length) {
      state.shuffledQueue = shuffleArray(ids);
    }
    return state.shuffledQueue;
  }
  return ids;
}

function heartSVG() {
  return `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`;
}

function deleteSVG() {
  return `<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2m3 0v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6h14z"/></svg>`;
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2800);
}

function openModal(id) {
  document.getElementById(id).classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeModal(id) {
  document.getElementById(id).classList.add('hidden');
  if (!document.querySelector('.modal-overlay:not(.hidden)')) {
    document.body.style.overflow = '';
  }
}

function escapeHtml(str) {
  if (!str) return '';
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

const FALLBACK_COVER = 'assets/mymelody_mascot.png';

/* ═══════════════════════════════════════════════════════════════════════════
   RENDER SONG ROWS
   ═══════════════════════════════════════════════════════════════════════════ */

function createSongRow(song, showIndex = true, showDelete = true) {
  const index = getSongIndex(song.id);
  const isLiked = state.liked.has(song.id);
  const isCurrent = state.currentId === song.id;
  const isActive = isCurrent && state.isPlaying;

  const row = document.createElement('div');
  row.className = `song-row${isCurrent ? ' current' : ''}${isActive ? ' playing' : ''}`;
  row.dataset.id = song.id;

  row.innerHTML = `
    ${showIndex ? `
      <span class="song-index">${index + 1}</span>
      <span class="playing-indicator">
        <span class="eq-bar"></span>
        <span class="eq-bar"></span>
        <span class="eq-bar"></span>
      </span>
    ` : '<span></span>'}
    <img class="song-cover" src="${escapeHtml(song.imagePath)}" alt="${escapeHtml(song.title)}" loading="lazy"
      onerror="this.src='${FALLBACK_COVER}'" />
    <div class="min-w-0">
      <p class="song-title text-sm font-semibold truncate font-cute">${escapeHtml(song.title)}</p>
      <p class="text-xs text-pink-500 font-medium truncate">${escapeHtml(song.artist)}</p>
    </div>
    <span class="song-duration text-xs text-pink-400 hidden sm:block tabular-nums font-semibold">—</span>
    <button class="heart-btn${isLiked ? ' liked' : ''}" data-like="${song.id}" aria-label="Like ${escapeHtml(song.title)}">
      ${heartSVG()}
    </button>
    ${showDelete ? `<button class="delete-btn" data-delete="${song.id}" aria-label="Delete ${escapeHtml(song.title)}">${deleteSVG()}</button>` : ''}
  `;

  resolveMediaPath(song.imagePath).then((url) => {
    const img = row.querySelector('.song-cover');
    if (img && url) img.src = url;
  });

  row.addEventListener('click', (e) => {
    if (e.target.closest('.heart-btn') || e.target.closest('.delete-btn')) return;
    playSong(song.id);
  });

  row.querySelector('.heart-btn').addEventListener('click', (e) => {
    e.stopPropagation();
    toggleLike(song.id);
    e.currentTarget.classList.add('heart-pop');
    spawnHeartBurst(e.clientX, e.clientY);
    playCuteChime('sparkle');
    setTimeout(() => e.currentTarget.classList.remove('heart-pop'), 400);
  });

  const delBtn = row.querySelector('.delete-btn');
  if (delBtn) {
    delBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      confirmDeleteSong(song.id);
    });
  }

  return row;
}

function renderSongGrid() {
  songGrid.innerHTML = '';
  if (songs.length === 0) {
    songGrid.innerHTML = `
      <div class="text-center py-12 px-4 rounded-3xl bg-white/70 border-2 border-dashed border-pink-200">
        <div class="text-4xl mb-2">🎀</div>
        <p class="text-base font-bold text-gray-700 font-cute">Walang songs pa si baby Ciara!</p>
        <p class="text-xs text-pink-500 mt-1 font-medium">Click <strong>Add Song</strong> sa taas para maglagay ng favorite sweet music niyo! 💖</p>
      </div>
    `;
  } else {
    songs.forEach((song) => songGrid.appendChild(createSongRow(song)));
  }
  songCount.textContent = `${songs.length} song${songs.length !== 1 ? 's' : ''}`;
}

function renderLikedGrid() {
  likedGrid.innerHTML = '';
  const likedSongs = songs.filter((s) => state.liked.has(s.id));

  if (likedSongs.length === 0) {
    likedGrid.appendChild(likedEmpty);
    likedEmpty.style.display = 'block';
    return;
  }

  likedEmpty.style.display = 'none';
  likedSongs.forEach((song) => likedGrid.appendChild(createSongRow(song, false, false)));
}

function renderMayorFavorites() {
  mayorFavorites.innerHTML = '';
  const favs = songs.filter((s) => s.mayorPick);
  if (favs.length === 0) {
    mayorFavorites.innerHTML = '<p class="text-[11px] text-pink-400 px-3 py-1 italic font-medium">No picks added yet 🍵</p>';
    return;
  }

  favs.forEach((song) => {
    const item = document.createElement('div');
    item.className = `flex items-center gap-2.5 px-3 py-2 rounded-xl cursor-pointer hover:bg-pink-50 text-xs text-gray-700 font-semibold transition-all${state.currentId === song.id ? ' text-pink-600 bg-pink-100/70' : ''}`;
    item.innerHTML = `
      <img src="${escapeHtml(song.imagePath)}" alt="" class="w-7 h-7 rounded-lg object-cover shadow-sm border border-pink-200" onerror="this.src='${FALLBACK_COVER}'" />
      <span class="truncate font-cute">${escapeHtml(song.title)}</span>
    `;
    resolveMediaPath(song.imagePath).then((url) => {
      const img = item.querySelector('img');
      if (img && url) img.src = url;
    });
    item.addEventListener('click', () => playSong(song.id));
    mayorFavorites.appendChild(item);
  });
}

/* ─── SCRAPBOOK RENDERER WITH DELETE SUPPORT 📸 ─── */
function renderScrapbookGrid() {
  scrapbookGrid.innerHTML = '';
  if (memories.length === 0) {
    scrapbookGrid.innerHTML = `
      <div class="col-span-full text-center py-12 px-4 rounded-3xl bg-white/70 border-2 border-dashed border-pink-200">
        <div class="text-4xl mb-2">📸</div>
        <p class="text-base font-bold text-gray-700 font-cute">No memories in the scrapbook yet!</p>
        <p class="text-xs text-pink-500 mt-1 font-medium">Click <strong>Add Photo</strong> to put sweet polaroids of Carey & Ciara! 🎀</p>
      </div>
    `;
    return;
  }

  memories.forEach((mem) => {
    const card = document.createElement('div');
    card.className = 'polaroid-card group';
    card.innerHTML = `
      <div class="polaroid-tape"></div>
      <button class="polaroid-delete-btn" data-delete-mem="${mem.id}" aria-label="Delete photo" title="Delete memory">
        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12"/></svg>
      </button>
      <img src="${escapeHtml(mem.imagePath)}" alt="${escapeHtml(mem.caption)}" class="polaroid-img" onerror="this.src='${FALLBACK_COVER}'" />
      <p class="polaroid-caption">${escapeHtml(mem.caption)}</p>
      <p class="polaroid-date font-cute">${escapeHtml(mem.date || 'Sweet Moment')}</p>
      <span class="polaroid-sticker">${escapeHtml(mem.sticker || '🎀')}</span>
    `;

    resolveMediaPath(mem.imagePath).then((url) => {
      const img = card.querySelector('.polaroid-img');
      if (img && url) img.src = url;
    });

    const delBtn = card.querySelector('.polaroid-delete-btn');
    if (delBtn) {
      delBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        deleteMemory(mem.id);
      });
    }

    card.addEventListener('click', (e) => {
      if (e.target.closest('.polaroid-delete-btn')) return;
      spawnHeartBurst(e.clientX, e.clientY);
      playCuteChime('sparkle');
      triggerMeloSpeech(`"Ang ganda ng memory na 'to! Mahal na mahal ka ni Baby bear mo baby! 💖"`);
    });

    scrapbookGrid.appendChild(card);
  });
}

async function deleteMemory(id) {
  const mem = memories.find((m) => m.id === id);
  if (!mem) return;

  if (isIdbPath(mem.imagePath)) {
    await deleteFromIDB(idbKeyFromPath(mem.imagePath));
    mediaCache.delete(idbKeyFromPath(mem.imagePath));
  }

  memories = memories.filter((m) => m.id !== id);
  saveMemories();
  renderScrapbookGrid();
  showToast('Polaroid memory deleted 🗑️');
  playCuteChime('pop');
}

function refreshAllRows() {
  renderSongGrid();
  renderLikedGrid();
  renderMayorFavorites();
  renderScrapbookGrid();
  updatePlayerLikeBtn();
}

/* ═══════════════════════════════════════════════════════════════════════════
   PLAYBACK LOGIC
   ═══════════════════════════════════════════════════════════════════════════ */

async function playSong(id) {
  const song = songs.find((s) => s.id === id);
  if (!song) return;

  state.currentId = id;
  const src = await resolveMediaPath(song.audioPath);
  audio.src = src;
  audio.load();

  audio.play().then(() => {
    state.isPlaying = true;
    updatePlayButton();
    updatePlayerInfo();
    updateLyricsPanel();
    refreshAllRows();
    setVisualizer(true);
    setMeloCompanionState('dancing');
    triggerMeloSpeech(`Now playing for baby Ciara: "${song.title}" 🍓🎶`);
  }).catch(() => {
    state.isPlaying = false;
    updatePlayButton();
    updatePlayerInfo();
    refreshAllRows();
    setMeloCompanionState('sleepy');
    showToast('Hindi ma-play ang audio — subukang mag-upload ng MP3');
  });
}

function togglePlay() {
  if (!state.currentId && songs.length > 0) {
    playSong(songs[0].id);
    return;
  }
  if (!state.currentId) {
    showToast('Mag-add muna ng song baby! 💖');
    return;
  }

  if (state.isPlaying) {
    audio.pause();
    state.isPlaying = false;
    setVisualizer(false);
    setMeloCompanionState('sleepy');
  } else {
    audio.play().then(() => {
      state.isPlaying = true;
      setVisualizer(true);
      setMeloCompanionState('dancing');
    }).catch(() => { });
  }
  updatePlayButton();
  refreshAllRows();
}

function playNext() {
  if (!state.currentId) return;
  const queue = getQueue();
  const pos = queue.indexOf(state.currentId);

  if (state.repeat === 'one') {
    audio.currentTime = 0;
    audio.play();
    return;
  }

  if (pos < queue.length - 1) {
    playSong(queue[pos + 1]);
  } else if (state.repeat === 'all' && queue.length > 0) {
    playSong(queue[0]);
  } else {
    state.isPlaying = false;
    updatePlayButton();
    setVisualizer(false);
    setMeloCompanionState('sleepy');
    refreshAllRows();
  }
}

function playPrev() {
  if (!state.currentId) return;

  if (audio.currentTime > 3) {
    audio.currentTime = 0;
    return;
  }

  const queue = getQueue();
  const pos = queue.indexOf(state.currentId);

  if (pos > 0) {
    playSong(queue[pos - 1]);
  } else if (state.repeat === 'all') {
    playSong(queue[queue.length - 1]);
  }
}

function updatePlayButton() {
  iconPlay.classList.toggle('hidden', state.isPlaying);
  iconPause.classList.toggle('hidden', !state.isPlaying);
  if (vinylContainer) {
    vinylContainer.classList.toggle('spinning', state.isPlaying);
  }
}

async function updatePlayerInfo() {
  const song = getCurrentSong();
  if (!song) {
    playerTitle.textContent = 'No song playing';
    playerArtist.textContent = '—';
    playerArt.src = FALLBACK_COVER;
    return;
  }

  playerTitle.textContent = song.title;
  playerArtist.textContent = song.artist;
  const coverUrl = await resolveMediaPath(song.imagePath);
  playerArt.src = coverUrl || FALLBACK_COVER;
  playerArt.alt = song.title;
}

function setVisualizer(active) {
  visualizer.classList.toggle('active', active);
  playerBar.classList.toggle('visualizer-glow', active);
}

/* ═══════════════════════════════════════════════════════════════════════════
   SEEK & TIME
   ═══════════════════════════════════════════════════════════════════════════ */

function updateProgress() {
  const current = audio.currentTime;
  const duration = audio.duration || 0;
  const percent = duration ? (current / duration) * 100 : 0;

  seekBarDesktop.value = percent;
  seekBarMobile.value = percent;
  updateSliderFill(seekBarDesktop, percent);
  updateSliderFill(seekBarMobile, percent);

  const formatted = formatTime(current);
  const total = formatTime(duration);

  timeCurrentDesktop.textContent = formatted;
  timeCurrentMobile.textContent = formatted;
  timeTotalDesktop.textContent = total;
  timeTotalMobile.textContent = total;

  updateActiveLyric(current, duration);

  if (state.isPlaying) {
    seekRAF = requestAnimationFrame(updateProgress);
  }
}

function seekTo(percent) {
  if (audio.duration) {
    audio.currentTime = (percent / 100) * audio.duration;
  }
}

function bindSeekBar(bar) {
  bar.addEventListener('input', () => {
    seekTo(parseFloat(bar.value));
    updateSliderFill(bar, bar.value);
  });
}

/* ═══════════════════════════════════════════════════════════════════════════
   VOLUME
   ═══════════════════════════════════════════════════════════════════════════ */

function setVolume(val) {
  audio.volume = val / 100;
  updateSliderFill(volumeBar, val);
  const muted = val === 0;
  iconVolume.classList.toggle('hidden', muted);
  iconMuted.classList.toggle('hidden', !muted);
}

/* ═══════════════════════════════════════════════════════════════════════════
   LIKES
   ═══════════════════════════════════════════════════════════════════════════ */

function toggleLike(id) {
  if (state.liked.has(id)) {
    state.liked.delete(id);
    showToast('Removed from Liked Songs 💔');
  } else {
    state.liked.add(id);
    showToast('Added to Baby Ciara Liked Songs! 💖');
  }
  saveLiked();
  refreshAllRows();
}

function updatePlayerLikeBtn() {
  if (!playerLike || !state.currentId) return;
  const liked = state.liked.has(state.currentId);
  playerLike.classList.toggle('text-melo-red', liked);
  playerLike.classList.toggle('text-pink-200', !liked);
}

playerLike.addEventListener('click', (e) => {
  if (state.currentId) {
    toggleLike(state.currentId);
    spawnHeartBurst(e.clientX, e.clientY);
    playCuteChime('sparkle');
  }
});

/* ═══════════════════════════════════════════════════════════════════════════
   LYRICS PANEL
   ═══════════════════════════════════════════════════════════════════════════ */

function updateLyricsPanel() {
  const song = getCurrentSong();
  if (!song) {
    lyricsTrackTitle.textContent = '—';
    lyricsTrackArtist.textContent = '—';
    lyricsContent.innerHTML = '<p class="text-pink-300 text-sm font-medium">Select a sweet song to see the lyrics 🎵</p>';
    return;
  }

  lyricsTrackTitle.textContent = song.title;
  lyricsTrackArtist.textContent = song.artist;

  const lines = song.lyrics && song.lyrics.length ? song.lyrics : ['No lyrics added yet ♪'];
  lyricsContent.innerHTML = lines
    .map((line, i) => `<p class="lyrics-line font-cute" data-line="${i}">${escapeHtml(line)}</p>`)
    .join('');
}

function updateActiveLyric(current, duration) {
  const song = getCurrentSong();
  if (!song || !duration || !song.lyrics?.length) return;

  const lines = lyricsContent.querySelectorAll('.lyrics-line');
  if (!lines.length) return;

  const lineIndex = Math.min(
    Math.floor((current / duration) * song.lyrics.length),
    song.lyrics.length - 1
  );

  lines.forEach((el, i) => {
    el.classList.toggle('active', i === lineIndex);
    if (i === lineIndex) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  });
}

function toggleLyricsPanel() {
  state.lyricsOpen = !state.lyricsOpen;
  lyricsPanel.classList.toggle('open', state.lyricsOpen);
  lyricsPanel.classList.toggle('closed', !state.lyricsOpen);
}

document.getElementById('toggle-lyrics-desktop').addEventListener('click', toggleLyricsPanel);
document.getElementById('toggle-lyrics-mobile').addEventListener('click', toggleLyricsPanel);
document.getElementById('close-lyrics').addEventListener('click', toggleLyricsPanel);

/* ═══════════════════════════════════════════════════════════════════════════
   CHANGE COVER PHOTO
   ═══════════════════════════════════════════════════════════════════════════ */

async function applyHeroImage(path) {
  const src = await resolveMediaPath(path);
  heroImage.src = src;
  saveHero(path);
}

document.getElementById('btn-change-photo').addEventListener('click', () => {
  openModal('modal-change-photo');
});

document.getElementById('btn-hero-upload').addEventListener('click', () => {
  document.getElementById('input-hero-file').click();
});

document.getElementById('input-hero-file').addEventListener('change', async (e) => {
  const file = e.target.files[0];
  if (!file) return;
  const key = `hero-${Date.now()}`;
  const path = await saveToIDB(key, file);
  await applyHeroImage(path);
  closeModal('modal-change-photo');
  showToast('Cover photo updated! 💖');
  e.target.value = '';
});

/* ═══════════════════════════════════════════════════════════════════════════
   ADD SONG
   ═══════════════════════════════════════════════════════════════════════════ */

function resetAddForm() {
  document.getElementById('add-title').value = '';
  document.getElementById('add-artist').value = '';
  document.getElementById('add-lyrics').value = '';
  document.getElementById('add-audio-name').textContent = 'No file chosen';
  document.getElementById('add-cover-name').textContent = 'No file chosen';
  document.getElementById('add-mayor-pick').checked = false;
  state.addAudioFile = null;
  state.addCoverFile = null;
}

document.getElementById('btn-add-song').addEventListener('click', () => {
  resetAddForm();
  openModal('modal-add-song');
});

document.getElementById('btn-add-audio-upload').addEventListener('click', () => {
  document.getElementById('input-song-audio').click();
});

document.getElementById('btn-add-cover-upload').addEventListener('click', () => {
  document.getElementById('input-song-cover').click();
});

document.getElementById('input-song-audio').addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (file) {
    state.addAudioFile = file;
    document.getElementById('add-audio-name').textContent = file.name;
  }
});

document.getElementById('input-song-cover').addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (file) {
    state.addCoverFile = file;
    document.getElementById('add-cover-name').textContent = file.name;
  }
});

document.getElementById('btn-add-save').addEventListener('click', async () => {
  const title = document.getElementById('add-title').value.trim();
  const artist = document.getElementById('add-artist').value.trim();
  const lyricsRaw = document.getElementById('add-lyrics').value.trim();
  const mayorPick = document.getElementById('add-mayor-pick').checked;

  if (!title || !artist) {
    showToast('Ilagay ang title at artist baby! 🌸');
    return;
  }

  if (!state.addAudioFile) {
    showToast('Please upload an audio file (MP3) 🎵');
    return;
  }

  const id = generateId('song');
  let finalAudio = '';
  let finalImage = FALLBACK_COVER;

  try {
    finalAudio = await saveToIDB(`audio-${id}`, state.addAudioFile);

    if (state.addCoverFile) {
      finalImage = await saveToIDB(`image-${id}`, state.addCoverFile);
    }

    const lyrics = lyricsRaw
      ? lyricsRaw.split('\n').map((l) => l.trim()).filter(Boolean)
      : ['♪ ♪ ♪'];

    songs.push({ id, title, artist, audioPath: finalAudio, imagePath: finalImage, mayorPick, lyrics });
    savePlaylist();
    state.shuffledQueue = [];

    closeModal('modal-add-song');
    resetAddForm();
    refreshAllRows();
    showToast(`"${title}" added with love! 💖`);
    playCuteChime('sparkle');

    if (!state.currentId) {
      playSong(id);
    }
  } catch (err) {
    console.error(err);
    showToast('May error sa pag-save — subukan ulit');
  }
});

/* ═══════════════════════════════════════════════════════════════════════════
   DELETE SONG
   ═══════════════════════════════════════════════════════════════════════════ */

function confirmDeleteSong(id) {
  const song = songs.find((s) => s.id === id);
  if (!song) return;

  state.pendingDeleteId = id;
  document.getElementById('delete-song-name').textContent = `"${song.title}"`;
  openModal('modal-delete');
}

async function deleteSong(id) {
  const song = songs.find((s) => s.id === id);
  if (!song) return;

  if (isIdbPath(song.audioPath)) {
    await deleteFromIDB(idbKeyFromPath(song.audioPath));
    mediaCache.delete(idbKeyFromPath(song.audioPath));
  }
  if (isIdbPath(song.imagePath)) {
    await deleteFromIDB(idbKeyFromPath(song.imagePath));
    mediaCache.delete(idbKeyFromPath(song.imagePath));
  }

  songs = songs.filter((s) => s.id !== id);
  state.liked.delete(id);
  state.shuffledQueue = [];
  savePlaylist();
  saveLiked();

  if (state.currentId === id) {
    audio.pause();
    state.isPlaying = false;
    state.currentId = songs.length > 0 ? songs[0].id : null;
    setVisualizer(false);
    setMeloCompanionState('sleepy');
    updatePlayButton();

    if (state.currentId) {
      const src = await resolveMediaPath(songs[0].audioPath);
      audio.src = src;
      audio.load();
    } else {
      audio.src = '';
    }
    updatePlayerInfo();
    updateLyricsPanel();
  }

  refreshAllRows();
  showToast('Song deleted');
}

document.getElementById('btn-delete-confirm').addEventListener('click', async () => {
  if (state.pendingDeleteId) {
    await deleteSong(state.pendingDeleteId);
    state.pendingDeleteId = null;
  }
  closeModal('modal-delete');
});

/* ═══════════════════════════════════════════════════════════════════════════
   SPIN THE WHEEL (Next Month's Call Sign 🎡)
   ═══════════════════════════════════════════════════════════════════════════ */

function drawWheel() {
  if (!wheelCanvas) return;
  const ctxW = wheelCanvas.getContext('2d');
  const width = wheelCanvas.width;
  const height = wheelCanvas.height;
  const centerX = width / 2;
  const centerY = height / 2;
  const radius = width / 2 - 12;
  const numSegments = WHEEL_OPTIONS.length;
  const anglePerSegment = (Math.PI * 2) / numSegments;

  ctxW.clearRect(0, 0, width, height);

  ctxW.save();
  ctxW.translate(centerX, centerY);
  ctxW.rotate(state.wheelAngle);

  ctxW.beginPath();
  ctxW.arc(0, 0, radius + 8, 0, Math.PI * 2);
  ctxW.fillStyle = '#FFB7C5';
  ctxW.fill();

  for (let i = 0; i < numSegments; i++) {
    const startAngle = i * anglePerSegment;
    const endAngle = (i + 1) * anglePerSegment;
    const opt = WHEEL_OPTIONS[i];

    ctxW.beginPath();
    ctxW.moveTo(0, 0);
    ctxW.arc(0, 0, radius, startAngle, endAngle);
    ctxW.closePath();
    ctxW.fillStyle = opt.color;
    ctxW.fill();
    ctxW.lineWidth = 2;
    ctxW.strokeStyle = '#FFFFFF';
    ctxW.stroke();

    ctxW.save();
    ctxW.rotate(startAngle + anglePerSegment / 2);
    ctxW.textAlign = 'right';
    ctxW.fillStyle = opt.text;
    ctxW.font = 'bold 13px Quicksand, Fredoka, sans-serif';
    ctxW.fillText(opt.label, radius - 20, 5);
    ctxW.restore();
  }

  ctxW.restore();
}

function spinWheel() {
  if (state.isSpinning) return;
  state.isSpinning = true;
  wheelResultContainer.classList.add('hidden');
  customCallsignBox.classList.add('hidden');

  const numSegments = WHEEL_OPTIONS.length;
  const segmentAngle = (Math.PI * 2) / numSegments;

  const winningIndex = Math.floor(Math.random() * numSegments);
  const fullRotations = (Math.floor(Math.random() * 4) + 6) * Math.PI * 2;
  const segmentTargetOffset = winningIndex * segmentAngle + segmentAngle / 2;
  const targetAngle = fullRotations + (Math.PI * 1.5 - segmentTargetOffset);

  const startAngle = state.wheelAngle % (Math.PI * 2);
  const totalChange = targetAngle - startAngle;
  const duration = 4200;
  const startTime = performance.now();
  let lastTickIndex = -1;

  function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
  }

  function animateSpin(now) {
    const elapsed = now - startTime;
    const progress = Math.min(1, elapsed / duration);
    const eased = easeOutCubic(progress);

    state.wheelAngle = startAngle + totalChange * eased;
    drawWheel();

    const currentAngleNorm = (state.wheelAngle % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2);
    const currentSegment = Math.floor(currentAngleNorm / segmentAngle);
    if (currentSegment !== lastTickIndex) {
      playCuteChime('tick');
      lastTickIndex = currentSegment;
    }

    if (progress < 1) {
      requestAnimationFrame(animateSpin);
    } else {
      state.isSpinning = false;
      const winner = WHEEL_OPTIONS[winningIndex];
      handleWheelWin(winner);
    }
  }

  requestAnimationFrame(animateSpin);
}

function handleWheelWin(winner) {
  playCuteChime('fanfare');
  spawnHeartBurst(window.innerWidth / 2, window.innerHeight / 2, 20);

  wheelResultContainer.classList.remove('hidden');
  wheelWinnerText.textContent = winner.label;

  if (winner.label.includes('Customize')) {
    customCallsignBox.classList.remove('hidden');
    customCallsignInput.focus();
  } else {
    customCallsignBox.classList.add('hidden');
  }

  triggerMeloSpeech(`"Yay! Next call sign natin: ${winner.label} 💖"`);
}

btnApplyCallsign.addEventListener('click', () => {
  const winner = wheelWinnerText.textContent;
  if (!winner.includes('Customize')) {
    saveCallsign(winner);
    showToast(`Call sign updated to: ${winner}! 💕`);
    closeModal('modal-spin-wheel');
    playCuteChime('sparkle');
  }
});

btnSaveCustomCallsign.addEventListener('click', () => {
  const customVal = customCallsignInput.value.trim();
  if (!customVal) {
    showToast('Mag-type ng custom callsign! 💖');
    return;
  }
  const formatted = `${customVal} 💖`;
  saveCallsign(formatted);
  wheelWinnerText.textContent = formatted;
  showToast(`Custom call sign updated: ${formatted}! 💕`);
  closeModal('modal-spin-wheel');
  playCuteChime('sparkle');
});

btnSpinHub.addEventListener('click', spinWheel);
btnSpinAgain.addEventListener('click', spinWheel);

function openWheelModal() {
  openModal('modal-spin-wheel');
  drawWheel();
  playCuteChime('sparkle');
}

btnOpenWheel.addEventListener('click', openWheelModal);
if (btnMobileWheel) btnMobileWheel.addEventListener('click', openWheelModal);
if (callsignDisplayBadge) callsignDisplayBadge.addEventListener('click', openWheelModal);

/* ═══════════════════════════════════════════════════════════════════════════
   LOVE LETTERS FOR CIARA 💌
   ═══════════════════════════════════════════════════════════════════════════ */

function displayLoveNote(index) {
  if (loveNotes.length === 0) return;
  state.currentNoteIndex = (index + loveNotes.length) % loveNotes.length;
  loveCardMessage.textContent = `"${loveNotes[state.currentNoteIndex]}"`;
  loveCardCounter.textContent = `Note ${state.currentNoteIndex + 1} of ${loveNotes.length}`;

  loveCardDisplay.style.transform = 'scale(0.95)';
  setTimeout(() => {
    loveCardDisplay.style.transform = 'scale(1)';
  }, 120);
}

btnOpenLoveNotes.addEventListener('click', (e) => {
  displayLoveNote(state.currentNoteIndex);
  openModal('modal-love-notes');
  spawnHeartBurst(e.clientX, e.clientY);
  playCuteChime('sparkle');
});

btnMobileLoveNotes.addEventListener('click', (e) => {
  displayLoveNote(state.currentNoteIndex);
  openModal('modal-love-notes');
  spawnHeartBurst(e.clientX, e.clientY);
  playCuteChime('sparkle');
});

btnPrevNote.addEventListener('click', () => {
  displayLoveNote(state.currentNoteIndex - 1);
  playCuteChime('pop');
});

btnNextNote.addEventListener('click', () => {
  displayLoveNote(state.currentNoteIndex + 1);
  playCuteChime('pop');
});

btnRandomNote.addEventListener('click', (e) => {
  const rnd = Math.floor(Math.random() * loveNotes.length);
  displayLoveNote(rnd);
  spawnHeartBurst(e.clientX, e.clientY);
  playCuteChime('sparkle');
});

btnSaveLoveNote.addEventListener('click', () => {
  const text = newLoveNoteInput.value.trim();
  if (!text) {
    showToast('Pakilagay ang sweet love note message! 💖');
    return;
  }

  loveNotes.push(text);
  saveLoveNotes();
  newLoveNoteInput.value = '';
  displayLoveNote(loveNotes.length - 1);
  showToast('Sweet note added to Ciara’s capsule! 💌');
  playCuteChime('sparkle');
});

/* ═══════════════════════════════════════════════════════════════════════════
   SCRAPBOOK / MEMORIES 📸
   ═══════════════════════════════════════════════════════════════════════════ */

btnAddMemory.addEventListener('click', () => {
  memoryCaption.value = '';
  memoryDate.value = '';
  memoryFileName.textContent = 'No file chosen';
  state.addMemoryFile = null;
  openModal('modal-add-memory');
});

btnMemoryUpload.addEventListener('click', () => {
  inputMemoryFile.click();
});

inputMemoryFile.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (file) {
    state.addMemoryFile = file;
    memoryFileName.textContent = file.name;
  }
});

btnSaveMemory.addEventListener('click', async () => {
  const caption = memoryCaption.value.trim();
  const date = memoryDate.value.trim() || 'Sweet Memory';
  const stickerEl = document.querySelector('input[name="sticker-choice"]:checked');
  const sticker = stickerEl ? stickerEl.value : '🎀';

  if (!caption) {
    showToast('Lagyan ng sweet caption ang photo! 💖');
    return;
  }

  if (!state.addMemoryFile) {
    showToast('Pumili ng cute couple photo niyo! 📸');
    return;
  }

  const id = generateId('mem');
  try {
    const imgPath = await saveToIDB(`memory-${id}`, state.addMemoryFile);
    memories.unshift({ id, imagePath: imgPath, caption, date, sticker });
    saveMemories();
    renderScrapbookGrid();
    closeModal('modal-add-memory');
    showToast('Polaroid memory added to Scrapbook! 📸💖');
    playCuteChime('sparkle');
  } catch (err) {
    console.error(err);
    showToast('Error uploading photo');
  }
});

/* ═══════════════════════════════════════════════════════════════════════════
   VIRTUAL PINK BUNNY PET ENGINE 🐰💖 (Interactive Dress Up & Feed)
   ═══════════════════════════════════════════════════════════════════════════ */

const BUNNY_QUOTES = [
  "Hello Mommy Ciara! Carey loves you so much! 💖🎀",
  "Nom nom nom! Yummy snack galing kay mommy! 🍓",
  "Cute ba ng outfit at accessories ko today, Mommy Ciara? ✨",
  "Yakapin mo pa ako please! *wiggles ears happily* 🐰💕",
  "Sabi ni Daddy Carey ikaw daw pinakamagandang girl sa buong universe! 🌸",
  "Happy Monthsary Mommy & Daddy! Forever tayong tatlo! 💖🧸"
];

function renderBunnyWardrobeLayers() {
  // 0. Aura Layer (behind everything)
  const currentAura = PET_ITEMS.auras.find((a) => a.id === petState.equipped.aura);
  if (layerAura) layerAura.innerHTML = currentAura && currentAura.svg ? currentAura.svg : '';

  // 1. Hat Layer
  const currentHat = PET_ITEMS.hats.find((h) => h.id === petState.equipped.hat);
  if (layerHat) layerHat.innerHTML = currentHat && currentHat.svg ? currentHat.svg : '';

  // 2. Outfit Layer
  const currentOutfit = PET_ITEMS.outfits.find((o) => o.id === petState.equipped.outfit);
  if (layerOutfit) layerOutfit.innerHTML = currentOutfit && currentOutfit.svg ? currentOutfit.svg : '';

  // 3. Handheld Item Layer
  const currentHandheld = PET_ITEMS.handhelds.find((h) => h.id === petState.equipped.handheld);
  if (layerHandheld) layerHandheld.innerHTML = currentHandheld && currentHandheld.svg ? currentHandheld.svg : '';

  // 4. Eyes Layer (Awake vs Sleeping Closed Eyes u__u)
  renderBunnyEyes();
}

function renderBunnyEyes(eyeMode = null) {
  if (!layerEyes) return;
  const isSleep = eyeMode === 'sleep' || petState.isSleeping;
  const isHappy = eyeMode === 'happy';

  if (isSleep) {
    // Closed peaceful sleeping curved eyes with eyelashes (u__u)
    layerEyes.innerHTML = `
      <path d="M 76 106 Q 84 114 92 106" stroke="#4A2835" stroke-width="2.6" stroke-linecap="round" fill="none" />
      <path d="M 75 107 L 72 104" stroke="#4A2835" stroke-width="2" stroke-linecap="round" />
      <path d="M 128 106 Q 136 114 144 106" stroke="#4A2835" stroke-width="2.6" stroke-linecap="round" fill="none" />
      <path d="M 145 107 L 148 104" stroke="#4A2835" stroke-width="2" stroke-linecap="round" />
    `;
  } else if (isHappy) {
    // Joyful closed smiles (^__^) with sparkling star reflections
    layerEyes.innerHTML = `
      <path d="M 76 108 Q 84 98 92 108" stroke="#4A2835" stroke-width="2.8" stroke-linecap="round" fill="none" />
      <path d="M 128 108 Q 136 98 144 108" stroke="#4A2835" stroke-width="2.8" stroke-linecap="round" fill="none" />
    `;
  } else {
    // Wide sparkling dark anime eyes with shiny white highlights
    layerEyes.innerHTML = `
      <ellipse cx="84" cy="105" rx="8" ry="9" fill="#2B1822" />
      <circle cx="81" cy="102" r="3.2" fill="#FFFFFF" />
      <circle cx="86" cy="108" r="1.5" fill="#FFFFFF" />

      <ellipse cx="136" cy="105" rx="8" ry="9" fill="#2B1822" />
      <circle cx="133" cy="102" r="3.2" fill="#FFFFFF" />
      <circle cx="138" cy="108" r="1.5" fill="#FFFFFF" />
    `;
  }
}

function updatePetUI() {
  petNameDisplay.textContent = petState.name;
  petLevelBadge.textContent = `Lv. ${petState.level} Baby 🌸`;

  petHungerText.textContent = `${petState.hunger}%`;
  petHungerFill.style.width = `${petState.hunger}%`;

  petLoveText.textContent = `${petState.love}%`;
  petLoveFill.style.width = `${petState.love}%`;

  petEnergyText.textContent = `${petState.energy}%`;
  petEnergyFill.style.width = `${petState.energy}%`;

  if (petState.isSleeping) {
    petZzzIndicator.classList.remove('hidden');
  } else {
    petZzzIndicator.classList.add('hidden');
  }

  renderBunnyWardrobeLayers();
  savePet();
}

function triggerPetSpeech(customText = null) {
  const text = customText || BUNNY_QUOTES[Math.floor(Math.random() * BUNNY_QUOTES.length)];
  petSpeechBox.querySelector('span').textContent = text;
  petSpeechBox.style.transform = 'scale(1.06)';
  setTimeout(() => { petSpeechBox.style.transform = 'scale(1)'; }, 180);

  if (!petState.isSleeping) {
    playChipmunkVoice();
    bunnyFigure.classList.add('bunny-talking');
    renderBunnyEyes('happy');
    const mouth = document.getElementById('bunny-mouth');
    if (mouth) mouth.classList.add('mouth-talking');

    setTimeout(() => {
      bunnyFigure.classList.remove('bunny-talking');
      if (mouth) mouth.classList.remove('mouth-talking');
      renderBunnyEyes(petState.isSleeping ? 'sleep' : null);
    }, 1500);
  }

  clearTimeout(petSpeechTimer);
  petSpeechTimer = setTimeout(() => {
    petSpeechBox.querySelector('span').textContent = `Chi-Bunny loves Mommy Ciara & Daddy Carey! 💖`;
  }, 5000);
}

/* ─── Feeding Action ─── */
btnPetFeed.addEventListener('click', () => {
  foodTray.classList.toggle('hidden');
  playCuteChime('pop');
});

document.querySelectorAll('.food-btn').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const foodType = btn.dataset.food;
    feedBunny(foodType, btn.textContent, e.clientX, e.clientY);
  });
});

function feedBunny(foodType, emoji, x, y) {
  if (petState.isSleeping) {
    showToast('Tulog pa si Chi-Bunny baby! Gisingin muna siya 🌙');
    return;
  }

  if (petState.hunger >= 100) {
    showToast('Busog na si Chi-Bunny baby! 🐰💖');
    triggerPetSpeech(`"Busog na po ako Mommy Ciara! Thank you po! 🍓"`);
    return;
  }

  // Animate falling snack into mouth
  const dropEl = document.createElement('div');
  dropEl.className = 'food-drop-anim';
  dropEl.textContent = emoji;
  dropEl.style.left = `${bunnyStage.offsetLeft + bunnyStage.offsetWidth / 2 - 15}px`;
  dropEl.style.top = `${bunnyStage.offsetTop + 10}px`;
  petRoomCard.appendChild(dropEl);

  setTimeout(() => dropEl.remove(), 900);

  // Trigger Chewing Animation
  bunnyFigure.classList.add('bunny-eating');
  renderBunnyEyes('happy');
  playCuteChime('munch');

  setTimeout(() => {
    bunnyFigure.classList.remove('bunny-eating');
    bunnyFigure.classList.add('bunny-happy');
    spawnHeartBurst(window.innerWidth / 2, window.innerHeight / 2, 8);
    playCuteChime('sparkle');

    setTimeout(() => {
      bunnyFigure.classList.remove('bunny-happy');
      renderBunnyEyes(petState.isSleeping ? 'sleep' : null);
    }, 1200);
  }, 900);

  // Increase stats
  petState.hunger = Math.min(100, petState.hunger + 25);
  petState.love = Math.min(100, petState.love + 8);
  petState.xp += 15;
  checkPetLevelUp();

  updatePetUI();
  triggerPetSpeech(`"Yummy ${emoji}! Ang sarap Mommy Ciara! 💖"`);
  showToast(`Fed Chi-Bunny with ${emoji}! 🍓`);
}

/* ─── Pet & Hug Action ─── */
function petBunny(e) {
  if (petState.isSleeping) {
    showToast('Natutulog nang mahimbing si Chi-Bunny... *gentle strokes* 💤');
    spawnHeartBurst(e ? e.clientX : window.innerWidth / 2, e ? e.clientY : window.innerHeight / 2, 4);
    playCuteChime('sparkle');
    return;
  }

  bunnyFigure.classList.add('bunny-happy');
  renderBunnyEyes('happy');
  playCuteChime('sparkle');
  spawnHeartBurst(e ? e.clientX : window.innerWidth / 2, e ? e.clientY : window.innerHeight / 2, 10);

  petState.love = Math.min(100, petState.love + 10);
  petState.xp += 10;
  checkPetLevelUp();
  updatePetUI();

  triggerPetSpeech();

  setTimeout(() => {
    bunnyFigure.classList.remove('bunny-happy');
    renderBunnyEyes(petState.isSleeping ? 'sleep' : null);
  }, 1400);
}

bunnyStage.addEventListener('click', petBunny);
btnPetHug.addEventListener('click', petBunny);

/* ─── Bubble Bath Action ─── */
btnPetBath.addEventListener('click', (e) => {
  if (petState.isSleeping) {
    showToast('Tulog pa si Chi-Bunny baby! Gisingin muna siya para maligo 🫧');
    return;
  }

  bunnyFigure.classList.add('bunny-happy');
  renderBunnyEyes('happy');
  playCuteChime('bubble');

  for (let i = 0; i < 8; i++) {
    setTimeout(() => {
      spawnHeartBurst(
        bunnyStage.offsetLeft + Math.random() * bunnyStage.offsetWidth,
        bunnyStage.offsetTop + Math.random() * bunnyStage.offsetHeight,
        3
      );
    }, i * 100);
  }

  petState.love = Math.min(100, petState.love + 15);
  petState.energy = Math.min(100, petState.energy + 5);
  petState.xp += 15;
  checkPetLevelUp();
  updatePetUI();

  triggerPetSpeech(`"Bango bango na ni Chi-Bunny! Thank you Mommy Ciara! 🫧🎀"`);
  showToast('Gave Chi-Bunny a sweet bubble bath! 🫧💖');

  setTimeout(() => {
    bunnyFigure.classList.remove('bunny-happy');
    renderBunnyEyes(petState.isSleeping ? 'sleep' : null);
  }, 1400);
});

/* ─── Sleep Toggle Action (Closed Eyes u__u) ─── */
btnPetSleepToggle.addEventListener('click', () => {
  petState.isSleeping = !petState.isSleeping;
  petRoomCard.classList.toggle('pet-room-night', petState.isSleeping);
  bunnyFigure.classList.toggle('bunny-sleeping', petState.isSleeping);

  if (petState.isSleeping) {
    petZzzIndicator.classList.remove('hidden');
    btnPetSleepToggle.textContent = '☀️ Wake Up';
    playCuteChime('sparkle');
    petState.energy = 100;
    triggerPetSpeech(`"Good night Mommy Ciara & Daddy Carey! Zzz... 🌙✨"`);
    showToast('Chi-Bunny closed its eyes and is sleeping peacefully... 🌙💤');
  } else {
    petZzzIndicator.classList.add('hidden');
    btnPetSleepToggle.textContent = '🌙 Sleep Mode';
    playCuteChime('pop');
    triggerPetSpeech(`"Good morning Mommy Ciara! Gising na po ako! 🌸"`);
    showToast('Chi-Bunny opened its cute eyes! ☀️💖');
  }
  updatePetUI();
});

function checkPetLevelUp() {
  const reqXP = petState.level * 60;
  if (petState.xp >= reqXP) {
    petState.level++;
    petState.xp = 0;
    playCuteChime('fanfare');
    spawnHeartBurst(window.innerWidth / 2, window.innerHeight / 2, 20);
    showToast(`Level Up! Chi-Bunny is now Level ${petState.level}! 🎉💖`);
    triggerPetSpeech(`"Level Up! Chi-Bunny is now Lv. ${petState.level}! Thank you Mommy Ciara! 👑✨"`);
  }
}

/* ─── Wardrobe Closet Rendering & Modals ─── */
function renderWardrobeModal() {
  // 1. Hats Grid
  wardrobeHatsGrid.innerHTML = '';
  PET_ITEMS.hats.forEach((item) => {
    const isEq = petState.equipped.hat === item.id;
    const card = document.createElement('div');
    card.className = `wardrobe-item-card${isEq ? ' equipped' : ''}`;
    card.innerHTML = `
      <div class="text-2xl mb-1">${item.icon}</div>
      <p class="text-xs font-bold text-gray-800 font-cute truncate">${item.name}</p>
      <span class="text-[10px] font-semibold text-pink-500">${isEq ? '✓ Equipped' : 'Wear'}</span>
    `;
    card.addEventListener('click', () => {
      petState.equipped.hat = item.id;
      playCuteChime('sparkle');
      renderWardrobeModal();
      updatePetUI();
    });
    wardrobeHatsGrid.appendChild(card);
  });

  // 2. Outfits Grid
  wardrobeOutfitsGrid.innerHTML = '';
  PET_ITEMS.outfits.forEach((item) => {
    const isEq = petState.equipped.outfit === item.id;
    const card = document.createElement('div');
    card.className = `wardrobe-item-card${isEq ? ' equipped' : ''}`;
    card.innerHTML = `
      <div class="text-2xl mb-1">${item.icon}</div>
      <p class="text-xs font-bold text-gray-800 font-cute truncate">${item.name}</p>
      <span class="text-[10px] font-semibold text-pink-500">${isEq ? '✓ Equipped' : 'Wear'}</span>
    `;
    card.addEventListener('click', () => {
      petState.equipped.outfit = item.id;
      playCuteChime('sparkle');
      renderWardrobeModal();
      updatePetUI();
    });
    wardrobeOutfitsGrid.appendChild(card);
  });

  // 3. Handhelds Grid
  wardrobeHandheldsGrid.innerHTML = '';
  PET_ITEMS.handhelds.forEach((item) => {
    const isEq = petState.equipped.handheld === item.id;
    const card = document.createElement('div');
    card.className = `wardrobe-item-card${isEq ? ' equipped' : ''}`;
    card.innerHTML = `
      <div class="text-2xl mb-1">${item.icon}</div>
      <p class="text-xs font-bold text-gray-800 font-cute truncate">${item.name}</p>
      <span class="text-[10px] font-semibold text-pink-500">${isEq ? '✓ Equipped' : 'Hold'}</span>
    `;
    card.addEventListener('click', () => {
      petState.equipped.handheld = item.id;
      playCuteChime('sparkle');
      renderWardrobeModal();
      updatePetUI();
    });
    wardrobeHandheldsGrid.appendChild(card);
  });

  // 4. Auras Grid
  const wardrobeAurasGrid = document.getElementById('wardrobe-auras-grid');
  if (wardrobeAurasGrid) {
    wardrobeAurasGrid.innerHTML = '';
    PET_ITEMS.auras.forEach((item) => {
      const isEq = petState.equipped.aura === item.id;
      const card = document.createElement('div');
      card.className = `wardrobe-item-card${isEq ? ' equipped' : ''}`;
      // Show a gradient preview circle for auras
      const previewStyle = item.colors
        ? `background: radial-gradient(circle, ${item.colors[0]}, ${item.colors[1]}, ${item.colors[2]});`
        : 'background: #f3f4f6;';
      card.innerHTML = `
        <div class="w-8 h-8 rounded-full mb-1 mx-auto" style="${previewStyle}"></div>
        <p class="text-xs font-bold text-gray-800 font-cute truncate">${item.name}</p>
        <span class="text-[10px] font-semibold text-pink-500">${isEq ? '✓ Active' : item.id === 'none' ? 'Off' : 'Activate'}</span>
      `;
      card.addEventListener('click', () => {
        petState.equipped.aura = item.id;
        playCuteChime('sparkle');
        renderWardrobeModal();
        updatePetUI();
      });
      wardrobeAurasGrid.appendChild(card);
    });
  }
}

btnPetWardrobe.addEventListener('click', () => {
  renderWardrobeModal();
  openModal('modal-pet-wardrobe');
  playCuteChime('sparkle');
});

/* ═══════════════════════════════════════════════════════════════════════════
   BUNNY STRAWBERRY RUNNER MINI GAME ENGINE 🎮🍓 (Delta-Time Normalized)
   ═══════════════════════════════════════════════════════════════════════════ */

const GAME_HIGHSCORE_KEY = 'monthsary-bunny-game-high-v2';
const btnPetGame = document.getElementById('btn-pet-game');
const gameCanvas = document.getElementById('bunny-game-canvas');
const gameStartOverlay = document.getElementById('game-start-overlay');
const gameOverOverlay = document.getElementById('game-over-overlay');
const gameLiveHud = document.getElementById('game-live-hud');
const gameLiveScore = document.getElementById('game-live-score');
const gameBerriesCount = document.getElementById('game-berries-count');
const gameHighscoreEl = document.getElementById('game-highscore');
const btnGameStart = document.getElementById('btn-game-start');
const btnGameRestart = document.getElementById('btn-game-restart');
const gameFinalScore = document.getElementById('game-final-score');
const gameFinalBerries = document.getElementById('game-final-berries');
const gameFinalXp = document.getElementById('game-final-xp');
const btnMobileJump = document.getElementById('btn-mobile-jump');

let gameHighScore = parseInt(localStorage.getItem(GAME_HIGHSCORE_KEY)) || 0;
let gameRAF = null;
let gameCtx = null;
let lastRunnerTime = 0;

const gojoMascotImg = new Image();
gojoMascotImg.src = 'assets/gojo_bunny.jpg';

const runner = {
  active: false,
  width: 600,
  height: 300,
  groundY: 245,
  score: 0,
  scoreAcc: 0,
  berries: 0,
  speed: 2.8,
  frame: 0,
  nextObstacleIn: 90,
  nextCollectibleIn: 45,
  isMidnight: false,
  midnightProgress: 0,
  midnightBannerTimer: 0,
  hasTriggeredMidnight: false,
  bunny: {
    x: 75,
    y: 195,
    width: 44,
    height: 48,
    vy: 0,
    gravity: 0.46,
    jumpForce: -9.8,
    isGrounded: true,
    jumps: 0,
    maxJumps: 2,
    rotation: 0
  },
  obstacles: [],
  collectibles: [],
  clouds: [
    { x: 50, y: 40, speed: 0.5, size: 45 },
    { x: 220, y: 65, speed: 0.35, size: 35 },
    { x: 450, y: 30, speed: 0.6, size: 55 }
  ],
  gojoCheer: {
    x: 350,
    y: 55,
    floatSpeed: 0.04,
    flagText: 'Cia 💖'
  },
  shootingStars: [],
  midnightFireflies: [],
  gameParticles: []
};

function initGameCanvas() {
  if (!gameCanvas) return;
  gameCtx = gameCanvas.getContext('2d');
  gameCanvas.width = runner.width;
  gameCanvas.height = runner.height;
  if (gameHighscoreEl) gameHighscoreEl.textContent = gameHighScore;
}

function openBunnyGame() {
  if (petState.isSleeping) {
    showToast('Natutulog pa si Chi-Bunny! Gisingin muna siya para makapaglaro 🌙');
    return;
  }
  if (petState.energy < 20) {
    showToast('Pagod na si Chi-Bunny (Energy < 20%)! Patulugin muna siya sa Sleep Mode para mag-recharge 🌙💤');
    triggerPetSpeech(`"Mommy Ciara, pagod na po ako... patulugin mo muna po ako para magka-energy ulit! 🌙💤"`);
    return;
  }
  if (petState.hunger < 15) {
    showToast('Gutom na si Chi-Bunny (Hunger < 15%)! Pakainin muna siya ng snacks bago tumakbo 🍓✨');
    triggerPetSpeech(`"Mommy Ciara, gutom na po ako... pakainin mo muna po ako ng strawberry! 🍓"`);
    return;
  }
  initGameCanvas();
  gameStartOverlay.classList.remove('hidden');
  gameOverOverlay.classList.add('hidden');
  gameLiveHud.classList.add('hidden');
  openModal('modal-bunny-game');
  drawGameStaticPreview();
}

function startRunnerGame() {
  if (petState.energy < 20) {
    showToast('Pagod na si Chi-Bunny! Patulugin muna siya sa Sleep Mode 🌙💤');
    closeModal('modal-bunny-game');
    switchView('pet');
    return;
  }
  if (petState.hunger < 15) {
    showToast('Gutom na si Chi-Bunny! Pakainin muna siya 🍓✨');
    closeModal('modal-bunny-game');
    switchView('pet');
    foodTray.classList.remove('hidden');
    return;
  }
  gameStartOverlay.classList.add('hidden');
  gameOverOverlay.classList.add('hidden');
  gameLiveHud.classList.remove('hidden');
  runner.active = true;
  runner.score = 0;
  runner.scoreAcc = 0;
  runner.berries = 0;
  runner.speed = 2.8;
  runner.frame = 0;
  runner.nextObstacleIn = 95;
  runner.nextCollectibleIn = 30;
  runner.isMidnight = false;
  runner.midnightProgress = 0;
  runner.midnightBannerTimer = 0;
  runner.hasTriggeredMidnight = false;
  runner.obstacles = [];
  runner.collectibles = [];
  runner.shootingStars = [];
  runner.midnightFireflies = [];
  runner.gameParticles = [];
  runner.bunny.y = runner.groundY - runner.bunny.height;
  runner.bunny.vy = 0;
  runner.bunny.gravity = 0.46;
  runner.bunny.jumpForce = -9.8;
  runner.bunny.isGrounded = true;
  runner.bunny.jumps = 0;
  runner.bunny.rotation = 0;
  if (gameLiveScore) gameLiveScore.textContent = '0';
  if (gameBerriesCount) gameBerriesCount.textContent = '0';
  playCuteChime('sparkle');
  lastRunnerTime = performance.now();
  cancelAnimationFrame(gameRAF);
  gameLoop(performance.now());
}

function bunnyJump() {
  if (!runner.active) return;
  if (runner.bunny.jumps < runner.bunny.maxJumps) {
    runner.bunny.vy = runner.bunny.jumpForce;
    runner.bunny.jumps++;
    runner.bunny.isGrounded = false;
    playCuteChime(runner.bunny.jumps === 1 ? 'pop' : 'sparkle');
    spawnGameDust(runner.bunny.x + 20, runner.bunny.y + runner.bunny.height);
  }
}

function spawnGameDust(x, y) {
  for (let i = 0; i < 4; i++) {
    runner.gameParticles.push({
      x,
      y,
      vx: (Math.random() - 0.5) * 2 - 1.5,
      vy: (Math.random() - 0.5) * 1.5,
      size: Math.random() * 4 + 3,
      alpha: 0.8,
      color: runner.isMidnight ? '#C084FC' : '#FFCCD5'
    });
  }
}

function spawnGameSparkle(x, y, color = '#FFD54F') {
  for (let i = 0; i < 6; i++) {
    runner.gameParticles.push({
      x,
      y,
      vx: (Math.random() - 0.5) * 4,
      vy: (Math.random() - 0.5) * 4,
      size: Math.random() * 5 + 3,
      alpha: 1,
      color
    });
  }
}

function gameLoop(timestamp) {
  if (!runner.active) return;
  if (!timestamp) timestamp = performance.now();
  const elapsed = timestamp - (lastRunnerTime || timestamp);
  lastRunnerTime = timestamp;
  const dt = Math.min(2.0, Math.max(0.2, elapsed / 16.667));
  runner.frame += dt;
  runner.scoreAcc += dt;
  if (runner.scoreAcc >= 3) {
    const add = Math.floor(runner.scoreAcc / 3);
    runner.score += add;
    runner.scoreAcc %= 3;
    if (gameLiveScore) gameLiveScore.textContent = runner.score;
  }
  updateGamePhysics(dt);
  drawGameScene();
  gameRAF = requestAnimationFrame(gameLoop);
}

function updateGamePhysics(dt) {
  if (runner.score >= 1900) {
    runner.midnightProgress = Math.min(1, (runner.score - 1900) / 100);
  }
  if (runner.score >= 2000) {
    runner.isMidnight = true;
    if (!runner.hasTriggeredMidnight) {
      runner.hasTriggeredMidnight = true;
      runner.midnightBannerTimer = 180;
      playCuteChime('fanfare');
      spawnHeartBurst(window.innerWidth / 2, window.innerHeight / 2, 25);
      showToast('✨ 2000 PTS! Midnight Celestial Mode Unlocked! 🌙🌌');
    }
  }
  if (runner.midnightBannerTimer > 0) {
    runner.midnightBannerTimer -= dt;
  }
  if (runner.speed < 3.8) {
    runner.speed += 0.0003 * dt;
  }
  runner.bunny.vy += runner.bunny.gravity * dt;
  runner.bunny.y += runner.bunny.vy * dt;
  if (runner.bunny.y >= runner.groundY - runner.bunny.height) {
    runner.bunny.y = runner.groundY - runner.bunny.height;
    runner.bunny.vy = 0;
    runner.bunny.isGrounded = true;
    runner.bunny.jumps = 0;
    runner.bunny.rotation = 0;
  } else {
    runner.bunny.rotation = Math.min(0.25, Math.max(-0.35, runner.bunny.vy * 0.03));
  }
  runner.clouds.forEach((cloud) => {
    cloud.x -= cloud.speed * 0.7 * dt;
    if (cloud.x + cloud.size * 2 < 0) {
      cloud.x = runner.width + Math.random() * 80;
      cloud.y = Math.random() * 70 + 20;
    }
  });
  runner.gojoCheer.x -= 0.25 * dt;
  if (runner.gojoCheer.x < -80) {
    runner.gojoCheer.x = runner.width + 120;
    runner.gojoCheer.y = Math.random() * 60 + 35;
  }
  if (runner.isMidnight && Math.random() < 0.04 * dt) {
    runner.shootingStars.push({
      x: Math.random() * runner.width + 100,
      y: Math.random() * 80,
      len: Math.random() * 40 + 30,
      speed: Math.random() * 5 + 6,
      alpha: 1
    });
  }
  for (let i = runner.shootingStars.length - 1; i >= 0; i--) {
    const s = runner.shootingStars[i];
    s.x -= s.speed * dt;
    s.y += s.speed * 0.45 * dt;
    s.alpha -= 0.035 * dt;
    if (s.alpha <= 0 || s.x < -50) {
      runner.shootingStars.splice(i, 1);
    }
  }
  if (runner.isMidnight && runner.midnightFireflies.length < 12 && Math.random() < 0.1 * dt) {
    runner.midnightFireflies.push({
      x: Math.random() * runner.width,
      y: runner.groundY - Math.random() * 60,
      vy: -Math.random() * 0.5 - 0.2,
      vx: (Math.random() - 0.5) * 0.6,
      alpha: 0,
      maxAlpha: Math.random() * 0.8 + 0.2,
      size: Math.random() * 2.5 + 1.5
    });
  }
  for (let i = runner.midnightFireflies.length - 1; i >= 0; i--) {
    const f = runner.midnightFireflies[i];
    f.x += f.vx * dt;
    f.y += f.vy * dt;
    f.alpha = Math.min(f.maxAlpha, f.alpha + 0.02 * dt);
    if (f.y < runner.groundY - 120) {
      runner.midnightFireflies.splice(i, 1);
    }
  }
  runner.nextObstacleIn -= dt;
  if (runner.nextObstacleIn <= 0) {
    const types = ['rock', 'fence', 'mushroom'];
    const type = types[Math.floor(Math.random() * types.length)];
    const w = type === 'fence' ? 26 : (type === 'mushroom' ? 28 : 32);
    const h = type === 'fence' ? 34 : (type === 'mushroom' ? 28 : 26);
    runner.obstacles.push({
      x: runner.width + 20,
      y: runner.groundY - h,
      width: w,
      height: h,
      type
    });
    runner.nextObstacleIn = Math.floor(Math.random() * 50 + 95);
  }
  runner.nextCollectibleIn -= dt;
  if (runner.nextCollectibleIn <= 0) {
    const rand = Math.random();
    let itemType = '🍓';
    let points = runner.isMidnight ? 25 : 15;
    if (rand > 0.88) {
      itemType = '🌌';
      points = 100;
    } else if (rand > 0.70) {
      itemType = '⭐';
      points = runner.isMidnight ? 50 : 30;
    } else if (rand > 0.55) {
      itemType = '🍬';
      points = 40;
    }
    const floatHeight = runner.groundY - (Math.random() * 75 + 40);
    runner.collectibles.push({
      x: runner.width + 30,
      y: floatHeight,
      size: itemType === '🌌' ? 32 : 26,
      type: itemType,
      points
    });
    runner.nextCollectibleIn = Math.floor(Math.random() * 45 + 35);
  }
  for (let i = runner.obstacles.length - 1; i >= 0; i--) {
    const obs = runner.obstacles[i];
    obs.x -= runner.speed * dt;
    const padding = 10;
    if (
      runner.bunny.x + padding < obs.x + obs.width - padding &&
      runner.bunny.x + runner.bunny.width - padding > obs.x + padding &&
      runner.bunny.y + padding < obs.y + obs.height &&
      runner.bunny.y + runner.bunny.height > obs.y + padding
    ) {
      triggerGameOver();
      return;
    }
    if (obs.x + obs.width < -20) {
      runner.obstacles.splice(i, 1);
    }
  }
  for (let i = runner.collectibles.length - 1; i >= 0; i--) {
    const item = runner.collectibles[i];
    item.x -= runner.speed * dt;
    if (
      runner.bunny.x < item.x + item.size &&
      runner.bunny.x + runner.bunny.width > item.x &&
      runner.bunny.y < item.y + item.size &&
      runner.bunny.y + runner.bunny.height > item.y
    ) {
      runner.score += item.points;
      if (item.type === '🍓' || item.type === '🌌') {
        runner.berries += item.type === '🌌' ? 5 : 1;
        if (gameBerriesCount) gameBerriesCount.textContent = runner.berries;
      }
      playCuteChime(item.type === '🌌' ? 'fanfare' : 'sparkle');
      spawnGameSparkle(item.x, item.y, item.type === '🌌' ? '#818CF8' : (item.type === '🍓' ? '#FF4D6D' : '#FFD54F'));
      runner.collectibles.splice(i, 1);
      continue;
    }
    if (item.x + item.size < -20) {
      runner.collectibles.splice(i, 1);
    }
  }
  for (let i = runner.gameParticles.length - 1; i >= 0; i--) {
    const p = runner.gameParticles[i];
    p.x += p.vx * dt;
    p.y += p.vy * dt;
    p.alpha -= 0.035 * dt;
    if (p.alpha <= 0) {
      runner.gameParticles.splice(i, 1);
    }
  }
}

function drawGameScene() {
  if (!gameCtx) return;
  const ctx = gameCtx;
  const w = runner.width;
  const h = runner.height;
  ctx.clearRect(0, 0, w, h);
  if (runner.midnightProgress <= 0) {
    const skyGrad = ctx.createLinearGradient(0, 0, 0, runner.groundY);
    skyGrad.addColorStop(0, '#E0F2FE');
    skyGrad.addColorStop(0.7, '#FFF0F5');
    skyGrad.addColorStop(1, '#FFE4EC');
    ctx.fillStyle = skyGrad;
    ctx.fillRect(0, 0, w, runner.groundY);
    ctx.beginPath();
    ctx.arc(520, 50, 24, 0, Math.PI * 2);
    ctx.fillStyle = '#FFE082';
    ctx.fill();
  } else {
    const skyGrad = ctx.createLinearGradient(0, 0, 0, runner.groundY);
    skyGrad.addColorStop(0, '#090A1A');
    skyGrad.addColorStop(0.5, '#1B1033');
    skyGrad.addColorStop(1, '#2D1445');
    ctx.fillStyle = skyGrad;
    ctx.fillRect(0, 0, w, runner.groundY);
    ctx.save();
    ctx.beginPath();
    ctx.arc(520, 55, 34, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(253, 224, 71, 0.2)';
    ctx.fill();
    ctx.beginPath();
    ctx.arc(520, 55, 22, 0, Math.PI * 2);
    ctx.fillStyle = '#FEF08A';
    ctx.fill();
    ctx.beginPath();
    ctx.arc(528, 50, 19, 0, Math.PI * 2);
    ctx.fillStyle = '#1B1033';
    ctx.fill();
    ctx.restore();
    ctx.fillStyle = '#FFFFFF';
    for (let i = 0; i < 22; i++) {
      const starX = (i * 37 + (runner.frame * 0.1)) % w;
      const starY = (i * 19) % (runner.groundY - 50);
      const twinkle = Math.sin(runner.frame * 0.1 + i) * 0.5 + 0.5;
      ctx.globalAlpha = twinkle * 0.9;
      ctx.fillRect(starX, starY, 2, 2);
    }
    ctx.globalAlpha = 1;
    runner.shootingStars.forEach((s) => {
      ctx.save();
      ctx.strokeStyle = `rgba(192, 132, 252, ${s.alpha})`;
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.moveTo(s.x, s.y);
      ctx.lineTo(s.x + s.len, s.y - s.len * 0.45);
      ctx.stroke();
      ctx.restore();
    });
  }
  ctx.fillStyle = runner.isMidnight ? 'rgba(76, 29, 149, 0.4)' : 'rgba(255, 255, 255, 0.85)';
  runner.clouds.forEach((c) => {
    ctx.beginPath();
    ctx.arc(c.x, c.y, c.size * 0.45, 0, Math.PI * 2);
    ctx.arc(c.x + c.size * 0.35, c.y - c.size * 0.2, c.size * 0.5, 0, Math.PI * 2);
    ctx.arc(c.x + c.size * 0.75, c.y, c.size * 0.4, 0, Math.PI * 2);
    ctx.fill();
  });
  ctx.fillStyle = runner.isMidnight ? '#3B1A5C' : '#FFCCD5';
  ctx.beginPath();
  ctx.arc(140, 260, 160, Math.PI, 0);
  ctx.arc(380, 270, 180, Math.PI, 0);
  ctx.arc(590, 255, 140, Math.PI, 0);
  ctx.fill();
  drawGojoBackgroundMascot(ctx);
  const groundGrad = ctx.createLinearGradient(0, runner.groundY, 0, h);
  if (runner.isMidnight) {
    groundGrad.addColorStop(0, '#064E3B');
    groundGrad.addColorStop(0.3, '#047857');
    groundGrad.addColorStop(1, '#022C22');
  } else {
    groundGrad.addColorStop(0, '#A7F3D0');
    groundGrad.addColorStop(0.15, '#6EE7B7');
    groundGrad.addColorStop(1, '#34D399');
  }
  ctx.fillStyle = groundGrad;
  ctx.fillRect(0, runner.groundY, w, h - runner.groundY);
  ctx.fillStyle = runner.isMidnight ? '#34D399' : '#10B981';
  ctx.fillRect(0, runner.groundY, w, 4);
  if (runner.isMidnight) {
    runner.midnightFireflies.forEach((f) => {
      ctx.save();
      ctx.globalAlpha = f.alpha;
      ctx.fillStyle = '#6EE7B7';
      ctx.beginPath();
      ctx.arc(f.x, f.y, f.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    });
  }
  for (let fx = 20; fx < w; fx += 55) {
    const animOffset = (fx - (runner.frame * runner.speed) % 55);
    ctx.font = '10px sans-serif';
    ctx.fillText(runner.isMidnight ? '✨' : '🌸', animOffset, runner.groundY + 22);
  }
  runner.obstacles.forEach((obs) => {
    if (obs.type === 'fence') {
      ctx.fillStyle = runner.isMidnight ? '#78350F' : '#D97706';
      ctx.fillRect(obs.x + 4, obs.y, 6, obs.height);
      ctx.fillRect(obs.x + obs.width - 10, obs.y, 6, obs.height);
      ctx.fillRect(obs.x, obs.y + 8, obs.width, 5);
      ctx.fillRect(obs.x, obs.y + 22, obs.width, 5);
    } else if (obs.type === 'mushroom') {
      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(obs.x + 10, obs.y + 12, 10, obs.height - 12);
      ctx.beginPath();
      ctx.arc(obs.x + 15, obs.y + 12, 15, Math.PI, 0);
      ctx.fillStyle = runner.isMidnight ? '#9333EA' : '#EF4444';
      ctx.fill();
      ctx.fillStyle = '#FFFFFF';
      ctx.beginPath();
      ctx.arc(obs.x + 11, obs.y + 7, 2.5, 0, Math.PI * 2);
      ctx.arc(obs.x + 19, obs.y + 7, 2.5, 0, Math.PI * 2);
      ctx.fill();
    } else {
      ctx.beginPath();
      ctx.ellipse(obs.x + obs.width / 2, obs.y + obs.height / 2, obs.width / 2, obs.height / 2, 0, 0, Math.PI * 2);
      ctx.fillStyle = runner.isMidnight ? '#C084FC' : '#F472B6';
      ctx.fill();
      ctx.font = '12px sans-serif';
      ctx.fillText('💖', obs.x + 7, obs.y + 18);
    }
  });
  runner.collectibles.forEach((item) => {
    if (item.type === '🌌') {
      ctx.save();
      const glow = Math.sin(runner.frame * 0.2) * 6 + 18;
      ctx.beginPath();
      ctx.arc(item.x + item.size / 2, item.y + item.size / 2, glow, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(129, 140, 248, 0.35)';
      ctx.fill();
      ctx.font = '26px sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('🌌', item.x + item.size / 2, item.y + item.size / 2);
      ctx.restore();
    } else {
      ctx.font = '22px sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(item.type, item.x + item.size / 2, item.y + item.size / 2);
    }
  });
  runner.gameParticles.forEach((p) => {
    ctx.save();
    ctx.globalAlpha = p.alpha;
    ctx.fillStyle = p.color;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  });
  drawRunnerBunny(ctx);
  if (runner.midnightBannerTimer > 0) {
    ctx.save();
    ctx.fillStyle = 'rgba(15, 23, 42, 0.85)';
    ctx.beginPath();
    ctx.roundRect(w / 2 - 170, 18, 340, 42, [14]);
    ctx.fill();
    ctx.strokeStyle = '#A855F7';
    ctx.lineWidth = 2.5;
    ctx.stroke();
    ctx.font = 'bold 14px Quicksand, Fredoka, sans-serif';
    ctx.fillStyle = '#F0ABFC';
    ctx.textAlign = 'center';
    ctx.fillText('✨🌙 1000 PTS: MIDNIGHT UNLOCKED! 🌌✨', w / 2, 44);
    ctx.restore();
  }
}

function drawGojoBackgroundMascot(ctx) {
  const g = runner.gojoCheer;
  const floatBounce = Math.sin(runner.frame * 0.08) * 6;
  ctx.save();
  ctx.translate(g.x, g.y + floatBounce);
  ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
  ctx.beginPath();
  ctx.arc(0, 18, 22, 0, Math.PI * 2);
  ctx.arc(-16, 20, 16, 0, Math.PI * 2);
  ctx.arc(16, 20, 16, 0, Math.PI * 2);
  ctx.fill();
  if (gojoMascotImg.complete && gojoMascotImg.naturalWidth > 0) {
    ctx.save();
    ctx.beginPath();
    ctx.arc(0, 0, 22, 0, Math.PI * 2);
    ctx.clip();
    ctx.drawImage(gojoMascotImg, -22, -22, 44, 44);
    ctx.restore();
  } else {
    ctx.fillStyle = '#FFF5F8';
    ctx.beginPath();
    ctx.arc(0, 0, 18, 0, Math.PI * 2);
    ctx.fill();
    // Spiky White Hair
    ctx.fillStyle = '#F8FAFC';
    ctx.beginPath();
    ctx.arc(0, -6, 18, Math.PI, 0);
    ctx.fill();
    // Shades
    ctx.fillStyle = '#1E293B';
    ctx.beginPath();
    ctx.arc(-6, 0, 5, 0, Math.PI * 2);
    ctx.arc(6, 0, 5, 0, Math.PI * 2);
    ctx.fill();
  }

  // Heart Balloon Floating above Gojo
  ctx.font = '16px sans-serif';
  ctx.fillText('🎈💖', 18, -18);

  ctx.restore();
}

function drawRunnerBunny(ctx) {
  const b = runner.bunny;
  const runBounce = b.isGrounded ? Math.sin(runner.frame * 0.35) * 3.5 : 0;

  ctx.save();
  ctx.translate(b.x + b.width / 2, b.y + b.height / 2 + runBounce);
  ctx.rotate(b.rotation);

  // Midnight Mode Aura Glow
  if (runner.isMidnight) {
    ctx.beginPath();
    ctx.arc(0, 0, 28, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(192, 132, 252, 0.35)';
    ctx.fill();
  }

  // Bunny Shadow
  ctx.beginPath();
  ctx.ellipse(0, b.height / 2 + 2 - runBounce, 18, 5, 0, 0, Math.PI * 2);
  ctx.fillStyle = runner.isMidnight ? 'rgba(168, 85, 247, 0.4)' : 'rgba(255, 77, 109, 0.25)';
  ctx.fill();

  // Ears
  const earTwitch = Math.sin(runner.frame * 0.25) * 4;
  ctx.fillStyle = '#FFE4EC';
  // Left Ear
  ctx.beginPath();
  ctx.ellipse(-10 + earTwitch * 0.3, -22, 6, 16, -0.2, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#FF8DA1';
  ctx.beginPath();
  ctx.ellipse(-10 + earTwitch * 0.3, -21, 3.5, 11, -0.2, 0, Math.PI * 2);
  ctx.fill();

  // Right Ear
  ctx.fillStyle = '#FFE4EC';
  ctx.beginPath();
  ctx.ellipse(10 - earTwitch * 0.3, -22, 6, 16, 0.2, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#FF8DA1';
  ctx.beginPath();
  ctx.ellipse(10 - earTwitch * 0.3, -21, 3.5, 11, 0.2, 0, Math.PI * 2);
  ctx.fill();

  // Body
  ctx.fillStyle = '#FFF5F8';
  ctx.beginPath();
  ctx.ellipse(0, 4, 18, 16, 0, 0, Math.PI * 2);
  ctx.fill();

  // Head
  ctx.beginPath();
  ctx.arc(0, -6, 17, 0, Math.PI * 2);
  ctx.fill();

  // Cheeks Blush
  ctx.fillStyle = 'rgba(255, 77, 109, 0.6)';
  ctx.beginPath();
  ctx.ellipse(-11, -2, 4.5, 3, 0, 0, Math.PI * 2);
  ctx.ellipse(11, -2, 4.5, 3, 0, 0, Math.PI * 2);
  ctx.fill();

  // Anime Eyes
  ctx.fillStyle = '#2B1822';
  ctx.beginPath();
  ctx.ellipse(-6, -7, 2.8, 3.5, 0, 0, Math.PI * 2);
  ctx.ellipse(6, -7, 2.8, 3.5, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#FFFFFF';
  ctx.beginPath();
  ctx.arc(-7, -8, 1.2, 0, Math.PI * 2);
  ctx.arc(5, -8, 1.2, 0, Math.PI * 2);
  ctx.fill();

  // Nose
  ctx.fillStyle = '#FF4D6D';
  ctx.beginPath();
  ctx.arc(0, -3, 1.5, 0, Math.PI * 2);
  ctx.fill();

  // Little Paws running animation
  const leg1 = Math.sin(runner.frame * 0.4) * 8;
  const leg2 = -leg1;
  ctx.fillStyle = '#FFCCD5';
  ctx.beginPath();
  ctx.ellipse(-6 + leg1 * 0.4, 16 + leg1 * 0.3, 5, 4, 0, 0, Math.PI * 2);
  ctx.ellipse(6 + leg2 * 0.4, 16 + leg2 * 0.3, 5, 4, 0, 0, Math.PI * 2);
  ctx.fill();

  // Equipped Hat Badge on head
  const hatItem = PET_ITEMS.hats.find((h) => h.id === petState.equipped.hat);
  if (hatItem && hatItem.icon && hatItem.id !== 'none') {
    ctx.font = '16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(hatItem.icon, 0, -22);
  }

  ctx.restore();
}

function drawGameStaticPreview() {
  if (!gameCtx) return;
  runner.bunny.y = runner.groundY - runner.bunny.height;
  runner.obstacles = [{ x: 380, y: runner.groundY - 32, width: 30, height: 32, type: 'mushroom' }];
  runner.collectibles = [{ x: 260, y: 160, size: 26, type: '🍓', points: 10 }];
  drawGameScene();
}

function triggerGameOver() {
  runner.active = false;
  cancelAnimationFrame(gameRAF);

  playCuteChime('pop');

  // Stats consumption & XP gains (-20% Energy, -15% Hunger, +15% Love)
  petState.energy = Math.max(0, petState.energy - 20);
  petState.hunger = Math.max(0, petState.hunger - 15);
  petState.love = Math.min(100, petState.love + 15);

  const earnedXp = 25 + Math.floor(runner.score / 6) + (runner.berries * 5);
  petState.xp += earnedXp;
  checkPetLevelUp();
  updatePetUI();

  // High score check
  if (runner.score > gameHighScore) {
    gameHighScore = runner.score;
    localStorage.setItem(GAME_HIGHSCORE_KEY, gameHighScore.toString());
    if (gameHighscoreEl) gameHighscoreEl.textContent = gameHighScore;
    playCuteChime('fanfare');
    spawnHeartBurst(window.innerWidth / 2, window.innerHeight / 2, 20);
    showToast(`New High Score! ${gameHighScore} pts! 🏆🎉`);
  }

  if (gameFinalScore) gameFinalScore.textContent = runner.score;
  if (gameFinalBerries) gameFinalBerries.textContent = `${runner.berries} 🍓`;
  if (gameFinalXp) gameFinalXp.textContent = `+${earnedXp} ⭐`;

  // Energy / Hunger Exhaustion Guidance
  if (petState.energy < 20) {
    if (btnGameRestart) {
      btnGameRestart.textContent = '🌙 Patulugin si Bunny (Recharge)';
    }
  } else if (petState.hunger < 15) {
    if (btnGameRestart) {
      btnGameRestart.textContent = '🍓 Pakainin si Bunny muna';
    }
  } else {
    if (btnGameRestart) {
      btnGameRestart.textContent = '🔄 Play Again';
    }
  }

  gameOverOverlay.classList.remove('hidden');
  gameLiveHud.classList.add('hidden');
}

// Game Event Listeners
if (btnPetGame) btnPetGame.addEventListener('click', openBunnyGame);
if (btnGameStart) btnGameStart.addEventListener('click', startRunnerGame);
if (btnGameRestart) {
  btnGameRestart.addEventListener('click', () => {
    if (petState.energy < 20) {
      showToast('Patulugin muna si Chi-Bunny para mag-recharge! 🌙💤');
      closeModal('modal-bunny-game');
      switchView('pet');
      if (!petState.isSleeping) togglePetSleep();
      return;
    }
    if (petState.hunger < 15) {
      showToast('Pakainin muna si Chi-Bunny ng snacks! 🍓✨');
      closeModal('modal-bunny-game');
      switchView('pet');
      foodTray.classList.remove('hidden');
      return;
    }
    startRunnerGame();
  });
}

if (gameCanvas) {
  gameCanvas.addEventListener('pointerdown', (e) => {
    e.preventDefault();
    if (runner.active) {
      bunnyJump();
    }
  });
}

if (btnMobileJump) {
  btnMobileJump.addEventListener('pointerdown', (e) => {
    e.preventDefault();
    if (runner.active) {
      bunnyJump();
    }
  });
}

window.addEventListener('keydown', (e) => {
  if (runner.active && (e.code === 'Space' || e.code === 'ArrowUp')) {
    e.preventDefault();
    bunnyJump();
  }
});

/* ═══════════════════════════════════════════════════════════════════════════
   CHI-BUNNY KAWAII BASKETBALL HOOPS SHOOTOUT 🏀🎀 (Physics & Arcade Engine)
   ═══════════════════════════════════════════════════════════════════════════ */

const HOOPS_HIGHSCORE_KEY = 'monthsary-hoops-high-v1';
const btnPetHoops = document.getElementById('btn-pet-hoops');
const hoopsCanvas = document.getElementById('hoops-game-canvas');
const hoopsStartOverlay = document.getElementById('hoops-start-overlay');
const hoopsOverOverlay = document.getElementById('hoops-over-overlay');
const hoopsLiveHud = document.getElementById('hoops-live-hud');
const hoopsLiveScore = document.getElementById('hoops-live-score');
const hoopsSwishBadge = document.getElementById('hoops-swish-badge');
const hoopsStreakEl = document.getElementById('hoops-streak');
const hoopsTimerEl = document.getElementById('hoops-timer');
const hoopsHighscoreEl = document.getElementById('hoops-highscore');
const btnHoopsStart = document.getElementById('btn-hoops-start');
const btnHoopsRestart = document.getElementById('btn-hoops-restart');
const hoopsFinalScore = document.getElementById('hoops-final-score');
const hoopsFinalBaskets = document.getElementById('hoops-final-baskets');
const hoopsFinalXp = document.getElementById('hoops-final-xp');

let hoopsHighScore = parseInt(localStorage.getItem(HOOPS_HIGHSCORE_KEY)) || 0;
let hoopsRAF = null;
let hoopsCtx = null;
let hoopsTimerInterval = null;
let lastHoopsTime = 0;

// Hoops game uses fully vector-drawn kawaii bunny — no image assets needed!

const hoops = {
  active: false,
  width: 600,
  height: 360,
  score: 0,
  baskets: 0,
  streak: 1,
  timeLeft: 45,
  frame: 0,
  aiming: false,
  dragStart: { x: 0, y: 0 },
  dragCurrent: { x: 0, y: 0 },
  groundY: 310,
  hoop: {
    x: 460,
    y: 130,
    baseY: 130,
    rimWidth: 58,
    backboardX: 500,
    backboardY: 60,
    backboardW: 16,
    backboardH: 80,
    netRipple: 0
  },
  ball: {
    x: 120,
    y: 225,
    radius: 17,
    vx: 0,
    vy: 0,
    state: 'ready', // 'ready', 'flying', 'scored', 'resetting'
    rotation: 0,
    hasPassedRim: false
  },
  particles: []
};

function initHoopsCanvas() {
  if (!hoopsCanvas) return;
  hoopsCtx = hoopsCanvas.getContext('2d');
  hoopsCanvas.width = hoops.width;
  hoopsCanvas.height = hoops.height;
  if (hoopsHighscoreEl) hoopsHighscoreEl.textContent = hoopsHighScore;
}

function openHoopsGame() {
  if (petState.isSleeping) {
    showToast('Natutulog pa si Chi-Bunny! Gisingin muna siya para makapaglaro 🌙');
    return;
  }

  if (petState.energy < 20) {
    showToast('Pagod na si Chi-Bunny (Energy < 20%)! Patulugin muna siya sa Sleep Mode para mag-recharge 🌙💤');
    triggerPetSpeech(`"Mommy Ciara, pagod na po ako... patulugin mo muna po ako para magka-energy ulit! 🌙💤"`);
    return;
  }

  if (petState.hunger < 15) {
    showToast('Gutom na si Chi-Bunny (Hunger < 15%)! Pakainin muna siya ng snacks 🍓✨');
    triggerPetSpeech(`"Mommy Ciara, gutom na po ako... pakainin mo muna po ako bago mag-shoot! 🍓"`);
    return;
  }

  initHoopsCanvas();
  hoopsStartOverlay.classList.remove('hidden');
  hoopsOverOverlay.classList.add('hidden');
  hoopsLiveHud.classList.add('hidden');
  openModal('modal-hoops-game');
  drawHoopsScene();
}

function startHoopsGame() {
  if (petState.energy < 20) {
    showToast('Pagod na si Chi-Bunny! Patulugin muna siya sa Sleep Mode 🌙💤');
    closeModal('modal-hoops-game');
    switchView('pet');
    return;
  }

  if (petState.hunger < 15) {
    showToast('Gutom na si Chi-Bunny! Pakainin muna siya 🍓✨');
    closeModal('modal-hoops-game');
    switchView('pet');
    foodTray.classList.remove('hidden');
    return;
  }

  hoopsStartOverlay.classList.add('hidden');
  hoopsOverOverlay.classList.add('hidden');
  hoopsLiveHud.classList.remove('hidden');

  hoops.active = true;
  hoops.score = 0;
  hoops.baskets = 0;
  hoops.streak = 1;
  hoops.timeLeft = 45;
  hoops.frame = 0;
  hoops.aiming = false;
  hoops.particles = [];

  resetHoopsBall();

  if (hoopsLiveScore) hoopsLiveScore.textContent = '0';
  if (hoopsStreakEl) hoopsStreakEl.textContent = 'x1';
  if (hoopsTimerEl) hoopsTimerEl.textContent = '45s';

  clearInterval(hoopsTimerInterval);
  hoopsTimerInterval = setInterval(() => {
    if (!hoops.active) {
      clearInterval(hoopsTimerInterval);
      return;
    }
    hoops.timeLeft--;
    if (hoopsTimerEl) hoopsTimerEl.textContent = `${hoops.timeLeft}s`;

    if (hoops.timeLeft <= 0) {
      clearInterval(hoopsTimerInterval);
      triggerHoopsGameOver();
    }
  }, 1000);

  playCuteChime('sparkle');
  lastHoopsTime = performance.now();
  cancelAnimationFrame(hoopsRAF);
  hoopsLoop(performance.now());
}

function resetHoopsBall() {
  hoops.ball.x = 120;
  hoops.ball.y = 225;
  hoops.ball.vx = 0;
  hoops.ball.vy = 0;
  hoops.ball.state = 'ready';
  hoops.ball.hasPassedRim = false;
}

function hoopsLoop(timestamp) {
  if (!hoops.active) return;
  if (!timestamp) timestamp = performance.now();
  const elapsed = timestamp - (lastHoopsTime || timestamp);
  lastHoopsTime = timestamp;

  const dt = Math.min(2.0, Math.max(0.2, elapsed / 16.667));

  hoops.frame += dt;
  updateHoopsPhysics(dt);
  drawHoopsScene();

  hoopsRAF = requestAnimationFrame(hoopsLoop);
}

function updateHoopsPhysics(dt) {
  // Oscillating Moving Hoop when score >= 12
  if (hoops.score >= 12) {
    hoops.hoop.y = hoops.hoop.baseY + Math.sin(hoops.frame * 0.04) * 25;
  } else {
    hoops.hoop.y = hoops.hoop.baseY;
  }

  // Net ripple dampening
  if (hoops.hoop.netRipple > 0) {
    hoops.hoop.netRipple -= 0.08 * dt;
  }

  // Ball Flying Physics
  if (hoops.ball.state === 'flying' || hoops.ball.state === 'scored') {
    hoops.ball.x += hoops.ball.vx * dt;
    hoops.ball.y += hoops.ball.vy * dt;
    hoops.ball.vy += 0.42 * dt; // Soft parabolic gravity
    hoops.ball.rotation += hoops.ball.vx * 0.06 * dt;

    // Trail particles when on a streak
    if (hoops.streak >= 2 && Math.random() < 0.45 * dt) {
      hoops.particles.push({
        x: hoops.ball.x + (Math.random() - 0.5) * 8,
        y: hoops.ball.y + (Math.random() - 0.5) * 8,
        vx: -hoops.ball.vx * 0.2,
        vy: -hoops.ball.vy * 0.2,
        size: Math.random() * 5 + 3,
        alpha: 0.9,
        color: hoops.streak >= 4 ? '#FF4D6D' : '#FBBF24'
      });
    }

    const b = hoops.ball;
    const h = hoops.hoop;
    const rimLeft = h.x - h.rimWidth / 2;
    const rimRight = h.x + h.rimWidth / 2;

    // 1. Backboard Collision
    if (
      b.x + b.radius >= h.backboardX &&
      b.x - b.radius <= h.backboardX + h.backboardW &&
      b.y >= h.y - 45 &&
      b.y <= h.y + 40
    ) {
      b.vx = -Math.abs(b.vx) * 0.65;
      b.x = h.backboardX - b.radius;
      playCuteChime('pop');
    }

    // 2. Rim Pegs Bounce (Left & Right Pegs)
    const checkPegBounce = (pegX, pegY) => {
      const dx = b.x - pegX;
      const dy = b.y - pegY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < b.radius + 4) {
        const nx = dx / dist;
        const ny = dy / dist;
        const dot = b.vx * nx + b.vy * ny;
        b.vx = (b.vx - 1.6 * dot * nx) * 0.75;
        b.vy = (b.vy - 1.6 * dot * ny) * 0.75;
        b.x = pegX + nx * (b.radius + 4);
        b.y = pegY + ny * (b.radius + 4);
        playCuteChime('pop');
      }
    };

    checkPegBounce(rimLeft, h.y);
    checkPegBounce(rimRight, h.y);

    // 3. Basket Score Detection
    if (
      !b.hasPassedRim &&
      b.vy > 0 &&
      b.y >= h.y - 4 &&
      b.y <= h.y + 16 &&
      b.x >= rimLeft + 5 &&
      b.x <= rimRight - 5
    ) {
      b.hasPassedRim = true;
      b.state = 'scored';
      h.netRipple = 1.0;

      const isSwish = Math.abs(b.x - h.x) < 12;
      const basePts = isSwish ? 3 : 2;
      const earned = basePts * hoops.streak;

      hoops.score += earned;
      hoops.baskets++;
      hoops.streak = Math.min(5, hoops.streak + 1);

      if (hoopsLiveScore) hoopsLiveScore.textContent = hoops.score;
      if (hoopsStreakEl) hoopsStreakEl.textContent = `x${hoops.streak}`;

      if (isSwish && hoopsSwishBadge) {
        hoopsSwishBadge.classList.remove('hidden');
        setTimeout(() => hoopsSwishBadge.classList.add('hidden'), 1200);
      }

      playCuteChime('fanfare');
      spawnHoopsConfetti(h.x, h.y + 20);
      spawnHoopsSwishRing(h.x, h.y + 10);
    }

    // 4. Ball Trail & Fire Effects
    if (hoops.ball.state === 'flying') {
      if (hoops.streak >= 2 && Math.random() < 0.85) {
        const colors = hoops.streak >= 4
          ? ['#FF0055', '#FF7700', '#FFDD00', '#FFFFFF']
          : ['#FF4D6D', '#FFB7C5', '#FBBF24'];
        hoops.particles.push({
          x: b.x - b.vx * 0.3 + (Math.random() - 0.5) * 6,
          y: b.y - b.vy * 0.3 + (Math.random() - 0.5) * 6,
          vx: (Math.random() - 0.5) * 1.5,
          vy: (Math.random() - 0.5) * 1.5,
          size: Math.random() * 5 + 3,
          alpha: 0.9,
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }
    }

    // 5. Ball Hits Ground / Exits Screen
    if (b.y > hoops.groundY + 20 || b.x > hoops.width + 40 || b.x < -40) {
      if (b.state !== 'scored') {
        hoops.streak = 1;
        if (hoopsStreakEl) hoopsStreakEl.textContent = 'x1';
      }
      b.state = 'resetting';
      setTimeout(resetHoopsBall, 350);
    }
  }

  // Update particles
  for (let i = hoops.particles.length - 1; i >= 0; i--) {
    const p = hoops.particles[i];
    p.x += p.vx * dt;
    p.y += p.vy * dt;
    p.alpha -= (p.isRing ? 0.04 : 0.028) * dt;
    if (p.isRing) p.size += 2.5 * dt;
    if (p.alpha <= 0) {
      hoops.particles.splice(i, 1);
    }
  }
}

function spawnHoopsSwishRing(x, y) {
  hoops.particles.push({
    x,
    y,
    vx: 0,
    vy: 0,
    size: 8,
    alpha: 1,
    color: '#FF4D6D',
    isRing: true
  });
  hoops.particles.push({
    x,
    y,
    vx: 0,
    vy: 0,
    size: 5,
    alpha: 0.8,
    color: '#FBBF24',
    isRing: true
  });
}

function spawnHoopsConfetti(x, y) {
  const colors = ['#FF4D6D', '#FFB7C5', '#FBBF24', '#C084FC', '#38BDF8', '#34D399'];
  for (let i = 0; i < 28; i++) {
    hoops.particles.push({
      x,
      y,
      vx: (Math.random() - 0.5) * 9,
      vy: -Math.random() * 7 - 2,
      size: Math.random() * 6 + 3,
      alpha: 1,
      color: colors[Math.floor(Math.random() * colors.length)]
    });
  }
}

function drawHoopsScene() {
  if (!hoopsCtx) return;
  const ctx = hoopsCtx;
  const w = hoops.width;
  const h = hoops.height;

  ctx.clearRect(0, 0, w, h);

  // 1. Twilight / Romantic Sunset Arena Backdrop
  const skyGrad = ctx.createLinearGradient(0, 0, 0, hoops.groundY);
  skyGrad.addColorStop(0, '#2D124D');
  skyGrad.addColorStop(0.35, '#5B21B6');
  skyGrad.addColorStop(0.65, '#9D174D');
  skyGrad.addColorStop(0.9, '#F472B6');
  skyGrad.addColorStop(1, '#FDE68A');
  ctx.fillStyle = skyGrad;
  ctx.fillRect(0, 0, w, hoops.groundY);

  // ── Dual Stadium Floodlights & Volumetric Beams ──
  ctx.save();
  // Left light beam
  const leftBeam = ctx.createRadialGradient(20, 10, 5, 120, 240, 260);
  leftBeam.addColorStop(0, 'rgba(255, 245, 205, 0.45)');
  leftBeam.addColorStop(0.5, 'rgba(255, 182, 193, 0.15)');
  leftBeam.addColorStop(1, 'rgba(255, 182, 193, 0)');
  ctx.fillStyle = leftBeam;
  ctx.beginPath();
  ctx.moveTo(10, 0); ctx.lineTo(260, hoops.groundY); ctx.lineTo(0, hoops.groundY);
  ctx.fill();

  // Right light beam onto the hoop
  const rightBeam = ctx.createRadialGradient(w - 20, 10, 5, hoops.hoop.x, hoops.hoop.y, 280);
  rightBeam.addColorStop(0, 'rgba(255, 245, 205, 0.45)');
  rightBeam.addColorStop(0.5, 'rgba(255, 182, 193, 0.18)');
  rightBeam.addColorStop(1, 'rgba(255, 182, 193, 0)');
  ctx.fillStyle = rightBeam;
  ctx.beginPath();
  ctx.moveTo(w - 10, 0); ctx.lineTo(w, hoops.groundY); ctx.lineTo(hoops.hoop.x - 120, hoops.groundY);
  ctx.fill();

  // Floodlight Lamps fixtures
  ctx.fillStyle = '#FFFFFF';
  ctx.shadowColor = '#FFE4A0';
  ctx.shadowBlur = 16;
  ctx.beginPath();
  ctx.arc(22, 14, 9, 0, Math.PI * 2);
  ctx.arc(w - 22, 14, 9, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();

  // ── Festive Twinkling Fairy Lights Garland across ceiling ──
  ctx.save();
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.35)';
  ctx.lineWidth = 1.2;
  ctx.beginPath();
  ctx.moveTo(0, 25);
  ctx.quadraticCurveTo(w * 0.25, 42, w * 0.5, 28);
  ctx.quadraticCurveTo(w * 0.75, 42, w, 25);
  ctx.stroke();

  const bulbColors = ['#FDE047', '#FF8DA1', '#67E8F9', '#F472B6', '#A7F3D0', '#FDE047'];
  for (let i = 0; i < 18; i++) {
    const t = i / 17;
    const bx = t * w;
    const by = (t < 0.5)
      ? 25 + Math.sin(t * Math.PI * 2) * 15
      : 28 + Math.sin((t - 0.5) * Math.PI * 2) * 14;
    const bulbColor = bulbColors[i % bulbColors.length];
    const glow = (Math.sin(hoops.frame * 0.1 + i) + 1) * 0.4 + 0.6;

    ctx.fillStyle = bulbColor;
    ctx.shadowColor = bulbColor;
    ctx.shadowBlur = 8 * glow;
    ctx.beginPath();
    ctx.arc(bx, by + 4, 3.2, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.restore();

  // ── Cheering Chibi Stadium Bleachers / Stands in Backdrop ──
  ctx.save();
  // Bleacher platform silhouette
  ctx.fillStyle = 'rgba(40, 15, 65, 0.65)';
  ctx.beginPath();
  ctx.roundRect(140, 160, 230, 48, [12, 12, 0, 0]);
  ctx.fill();

  // Cheering Chibis & Fans
  const chibis = [
    { x: 160, y: 155, emo: '🧸', label: 'Carey' },
    { x: 195, y: 152, emo: '🎀', label: 'Melo' },
    { x: 230, y: 156, emo: '🕶️', label: 'Gojo' },
    { x: 265, y: 153, emo: '🍓', label: 'Berry' },
    { x: 300, y: 156, emo: '🍵', label: 'Matcha' },
    { x: 335, y: 153, emo: '🐰', label: 'Bun' }
  ];
  chibis.forEach((c, idx) => {
    const jump = Math.sin(hoops.frame * 0.15 + idx * 0.8) * 4;
    ctx.font = '16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(c.emo, c.x, c.y + jump);

    // Glowing cheer sticks
    if (idx % 2 === 0) {
      ctx.fillStyle = idx === 0 ? '#38BDF8' : '#F472B6';
      ctx.shadowColor = ctx.fillStyle;
      ctx.shadowBlur = 6;
      ctx.fillRect(c.x + 8, c.y - 6 + jump, 3, 12);
    }
  });

  // Glowing Fan Banner
  ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
  ctx.shadowColor = '#FF4D6D';
  ctx.shadowBlur = 10;
  ctx.beginPath();
  ctx.roundRect(165, 178, 180, 22, [8]);
  ctx.fill();
  ctx.fillStyle = '#E11D48';
  ctx.font = 'bold 10px Fredoka, Quicksand, sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('💖 GO MOMMY CIARA! #1 🏀', 255, 189);
  ctx.restore();

  // ── Ambient Floating Sakura Petals ──
  ctx.save();
  for (let i = 0; i < 6; i++) {
    const px = (hoops.frame * 0.6 + i * 110) % (w + 40) - 20;
    const py = 50 + Math.sin(hoops.frame * 0.03 + i) * 35 + (i * 38) % 180;
    ctx.fillStyle = 'rgba(255, 182, 193, 0.6)';
    ctx.beginPath();
    ctx.ellipse(px, py, 4, 2.5, hoops.frame * 0.02 + i, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.restore();

  // 2. Shiny Parquet Hardwood Gym Court Floor
  const floorH = h - hoops.groundY;
  const floorGrad = ctx.createLinearGradient(0, hoops.groundY, 0, h);
  floorGrad.addColorStop(0, '#F59E0B');
  floorGrad.addColorStop(0.3, '#D97706');
  floorGrad.addColorStop(0.7, '#B45309');
  floorGrad.addColorStop(1, '#78350F');
  ctx.fillStyle = floorGrad;
  ctx.fillRect(0, hoops.groundY, w, floorH);

  // Parquet Planks horizontal stripe lines
  ctx.strokeStyle = 'rgba(254, 243, 199, 0.18)';
  ctx.lineWidth = 1;
  for (let y = hoops.groundY + 8; y < h; y += 9) {
    ctx.beginPath();
    ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
  }

  // Parquet vertical plank cuts
  ctx.strokeStyle = 'rgba(0, 0, 0, 0.12)';
  for (let x = 20; x < w; x += 45) {
    ctx.beginPath();
    ctx.moveTo(x, hoops.groundY); ctx.lineTo(x, h); ctx.stroke();
  }

  // Polished Gloss Specular Light Sheen
  const glossGrad = ctx.createLinearGradient(0, hoops.groundY, 0, hoops.groundY + 25);
  glossGrad.addColorStop(0, 'rgba(255, 255, 255, 0.45)');
  glossGrad.addColorStop(0.5, 'rgba(255, 255, 255, 0.15)');
  glossGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');
  ctx.fillStyle = glossGrad;
  ctx.fillRect(0, hoops.groundY, w, 25);

  // Crisp Court Markings (Baseline, 3-Point Arc, Key, Center Circle)
  ctx.save();
  ctx.strokeStyle = '#FFFFFF';
  ctx.lineWidth = 2.5;

  // Baseline
  ctx.beginPath();
  ctx.moveTo(0, hoops.groundY); ctx.lineTo(w, hoops.groundY);
  ctx.stroke();

  // 3-point curved arc
  ctx.beginPath();
  ctx.ellipse(hoops.hoop.x + 10, hoops.groundY, 150, 42, 0, Math.PI, Math.PI * 2);
  ctx.stroke();

  // Free throw key circle
  ctx.beginPath();
  ctx.ellipse(hoops.hoop.x - 70, hoops.groundY + 22, 38, 14, 0, 0, Math.PI * 2);
  ctx.stroke();
  ctx.restore();

  // 3. Draw Kawaii Hoop & Backboard 🏀
  drawKawaiiHoop(ctx);

  // 4. Draw Basketball Player Bunny (Jersey #7 🐰)
  drawBasketballBunny(ctx);

  // 5. Draw Aiming Trajectory Dots
  if (hoops.aiming && hoops.ball.state === 'ready') {
    drawAimingTrajectory(ctx);
  }

  // 6. Draw Basketball (Heart & Strawberry pattern + Fire Glow)
  drawBasketballBall(ctx);

  // 7. Draw Particles & Swish Rings
  hoops.particles.forEach((p) => {
    ctx.save();
    ctx.globalAlpha = Math.max(0, p.alpha);
    if (p.isRing) {
      ctx.strokeStyle = p.color;
      ctx.lineWidth = 3.5;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.stroke();
    } else {
      ctx.fillStyle = p.color;
      ctx.shadowColor = p.color;
      ctx.shadowBlur = hoops.streak >= 3 ? 8 : 0;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();
  });
}

function drawKawaiiHoop(ctx) {
  const hp = hoops.hoop;

  ctx.save();
  // Pole Stand
  ctx.fillStyle = '#E2E8F0';
  ctx.fillRect(hp.backboardX + 10, hp.y - 20, 12, hoops.groundY - (hp.y - 20));

  // Backboard (Pastel Pink with Rounded Corners)
  ctx.fillStyle = '#FFF1F2';
  ctx.beginPath();
  ctx.roundRect(hp.backboardX - 4, hp.y - 50, 18, 90, [8]);
  ctx.fill();
  ctx.strokeStyle = '#FF8DA1';
  ctx.lineWidth = 3;
  ctx.stroke();

  // Backboard Target Box
  ctx.strokeStyle = '#FF4D6D';
  ctx.lineWidth = 2.5;
  ctx.strokeRect(hp.backboardX - 3, hp.y - 22, 4, 34);

  // Rim Connector Bar
  ctx.fillStyle = '#F43F5E';
  ctx.fillRect(hp.x + hp.rimWidth / 2, hp.y - 3, (hp.backboardX - (hp.x + hp.rimWidth / 2)), 6);

  // Net (Animated Ripple on swish!)
  const ripple = Math.sin(hoops.frame * 0.3) * (hp.netRipple * 14);
  ctx.strokeStyle = '#FFFFFF';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(hp.x - hp.rimWidth / 2 + 3, hp.y);
  ctx.quadraticCurveTo(hp.x - 12 + ripple, hp.y + 36, hp.x - 8 + ripple, hp.y + 50);
  ctx.lineTo(hp.x + 8 + ripple, hp.y + 50);
  ctx.quadraticCurveTo(hp.x + 12 + ripple, hp.y + 36, hp.x + hp.rimWidth / 2 - 3, hp.y);
  ctx.stroke();

  // Net Weave lines
  ctx.strokeStyle = 'rgba(255, 141, 161, 0.4)';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(hp.x - hp.rimWidth / 2 + 8, hp.y + 12);
  ctx.lineTo(hp.x + hp.rimWidth / 2 - 8, hp.y + 40);
  ctx.moveTo(hp.x + hp.rimWidth / 2 - 8, hp.y + 12);
  ctx.lineTo(hp.x - hp.rimWidth / 2 + 8, hp.y + 40);
  ctx.stroke();

  // Glowing Orange/Pink Metallic Rim
  ctx.strokeStyle = '#FB7185';
  ctx.lineWidth = 4.5;
  ctx.beginPath();
  ctx.ellipse(hp.x, hp.y, hp.rimWidth / 2, 8, 0, 0, Math.PI * 2);
  ctx.stroke();

  ctx.restore();
}

function drawBasketballBunny(ctx) {
  const bx = 100;
  const by = 265;
  const bounce = Math.sin(hoops.frame * 0.12) * 3; // Idle bounce animation

  ctx.save();

  // ── Ground Shadow ──
  ctx.beginPath();
  ctx.ellipse(bx, hoops.groundY - 4, 28, 7, 0, 0, Math.PI * 2);
  const shadowGrad = ctx.createRadialGradient(bx, hoops.groundY - 4, 0, bx, hoops.groundY - 4, 28);
  shadowGrad.addColorStop(0, 'rgba(255, 77, 109, 0.28)');
  shadowGrad.addColorStop(1, 'rgba(255, 77, 109, 0)');
  ctx.fillStyle = shadowGrad;
  ctx.fill();

  ctx.translate(bx, by + bounce);

  // ── Cute Long Ears ──
  // Left ear outer
  ctx.fillStyle = '#FFD6E4';
  ctx.beginPath();
  ctx.ellipse(-13, -46, 7, 20, -0.18, 0, Math.PI * 2);
  ctx.fill();
  // Left ear inner
  ctx.fillStyle = '#FF8DA1';
  ctx.beginPath();
  ctx.ellipse(-13, -45, 4, 14, -0.18, 0, Math.PI * 2);
  ctx.fill();

  // Right ear outer
  ctx.fillStyle = '#FFD6E4';
  ctx.beginPath();
  ctx.ellipse(13, -46, 7, 20, 0.18, 0, Math.PI * 2);
  ctx.fill();
  // Right ear inner
  ctx.fillStyle = '#FF8DA1';
  ctx.beginPath();
  ctx.ellipse(13, -45, 4, 14, 0.18, 0, Math.PI * 2);
  ctx.fill();

  // ── Body ── (cute chubby teardrop shape)
  ctx.fillStyle = '#FFF0F5';
  ctx.beginPath();
  ctx.ellipse(0, 14, 20, 24, 0, 0, Math.PI * 2);
  ctx.fill();

  // ── Head ──
  ctx.fillStyle = '#FFF0F5';
  ctx.beginPath();
  ctx.arc(0, -12, 22, 0, Math.PI * 2);
  ctx.fill();

  // ── Pink #7 Sports Jersey Bib ──
  // Gradient jersey
  const jerseyGrad = ctx.createLinearGradient(-18, -2, 18, 30);
  jerseyGrad.addColorStop(0, '#FF8DA1');
  jerseyGrad.addColorStop(1, '#E95275');
  ctx.fillStyle = jerseyGrad;
  ctx.beginPath();
  ctx.roundRect(-17, -3, 34, 36, [4, 4, 8, 8]);
  ctx.fill();

  // Jersey number "7"
  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 13px Fredoka, Quicksand, sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('7', 0, 14);

  // ── Cute White Headband ──
  ctx.fillStyle = '#FFFFFF';
  ctx.beginPath();
  ctx.roundRect(-22, -24, 44, 8, [4]);
  ctx.fill();

  // Tiny heart bow on headband
  ctx.fillStyle = '#FF4D6D';
  ctx.font = '9px sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('🎀', 0, -20);

  // ── Rosy Blush Cheeks ──
  ctx.fillStyle = 'rgba(255, 77, 109, 0.45)';
  ctx.beginPath();
  ctx.ellipse(-14, -6, 5.5, 3.5, 0, 0, Math.PI * 2);
  ctx.ellipse(14, -6, 5.5, 3.5, 0, 0, Math.PI * 2);
  ctx.fill();

  // ── Shiny Black Anime Eyes ──
  ctx.fillStyle = '#2B1822';
  ctx.beginPath();
  ctx.ellipse(-7.5, -13, 3.5, 4.5, 0, 0, Math.PI * 2);
  ctx.ellipse(7.5, -13, 3.5, 4.5, 0, 0, Math.PI * 2);
  ctx.fill();

  // Eye shine sparkles
  ctx.fillStyle = '#FFFFFF';
  ctx.beginPath();
  ctx.arc(-8.5, -15, 1.4, 0, Math.PI * 2);
  ctx.arc(6.5, -15, 1.4, 0, Math.PI * 2);
  ctx.fill();

  // ── Tiny Pink Nose ──
  ctx.fillStyle = '#FF4D6D';
  ctx.beginPath();
  ctx.ellipse(0, -7, 2.5, 2, 0, 0, Math.PI * 2);
  ctx.fill();

  // Smile
  ctx.strokeStyle = '#E95275';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.arc(0, -5, 4, 0.2, Math.PI - 0.2);
  ctx.stroke();

  // ── Little Chubby Legs / Sneakers ──
  ctx.fillStyle = '#FFD6E4';
  // Left leg
  ctx.beginPath();
  ctx.ellipse(-9, 34, 7, 10, 0, 0, Math.PI * 2);
  ctx.fill();
  // Right leg
  ctx.beginPath();
  ctx.ellipse(9, 34, 7, 10, 0, 0, Math.PI * 2);
  ctx.fill();

  // Pink sneaker tips
  ctx.fillStyle = '#FF8DA1';
  ctx.beginPath();
  ctx.ellipse(-10, 41, 8, 5, 0.2, 0, Math.PI * 2);
  ctx.ellipse(10, 41, 8, 5, -0.2, 0, Math.PI * 2);
  ctx.fill();

  // White sneaker stripe
  ctx.strokeStyle = '#FFFFFF';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(-14, 40); ctx.lineTo(-6, 39);
  ctx.moveTo(6, 39); ctx.lineTo(14, 40);
  ctx.stroke();

  // ── Little Arms (holding a heart pose) ──
  ctx.fillStyle = '#FFD6E4';
  // Left arm
  ctx.beginPath();
  ctx.ellipse(-22, 6, 5, 12, -0.4, 0, Math.PI * 2);
  ctx.fill();
  // Right arm reaching out (shooting pose!)
  ctx.beginPath();
  ctx.ellipse(22, 4, 5, 12, 0.55, 0, Math.PI * 2);
  ctx.fill();

  ctx.restore();
}

function drawBasketballBall(ctx) {
  const b = hoops.ball;

  // ── Floor Shadow (drawn BEFORE translate, so it stays at floor level) ──
  if (b.state === 'flying' || b.state === 'scored') {
    const shadowAlpha = Math.max(0.04, 0.3 - (hoops.groundY - b.y) * 0.0012);
    const shadowWidth = Math.max(6, 16 - (hoops.groundY - b.y) * 0.03);
    ctx.save();
    const shadowGrad = ctx.createRadialGradient(
      b.x, hoops.groundY - 2, 0,
      b.x, hoops.groundY - 2, shadowWidth + 4
    );
    shadowGrad.addColorStop(0, `rgba(200, 40, 70, ${shadowAlpha})`);
    shadowGrad.addColorStop(1, 'rgba(200, 40, 70, 0)');
    ctx.fillStyle = shadowGrad;
    ctx.beginPath();
    ctx.ellipse(b.x, hoops.groundY - 2, shadowWidth + 4, (shadowWidth + 4) * 0.35, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  } else {
    // Resting shadow under the ball
    ctx.save();
    const shadowGrad = ctx.createRadialGradient(b.x, b.y + b.radius + 2, 0, b.x, b.y + b.radius + 2, 16);
    shadowGrad.addColorStop(0, 'rgba(200, 40, 70, 0.22)');
    shadowGrad.addColorStop(1, 'rgba(200, 40, 70, 0)');
    ctx.fillStyle = shadowGrad;
    ctx.beginPath();
    ctx.ellipse(b.x, b.y + b.radius + 3, 16, 5, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  // ── Ball body (rotates) ──
  ctx.save();
  ctx.translate(b.x, b.y);
  ctx.rotate(b.rotation);

  // Outer glow for streak!
  if (hoops.streak >= 3) {
    const glowAlpha = 0.3 + Math.sin(hoops.frame * 0.3) * 0.15;
    ctx.beginPath();
    ctx.arc(0, 0, b.radius + 5, 0, Math.PI * 2);
    ctx.fillStyle = hoops.streak >= 5
      ? `rgba(255, 77, 109, ${glowAlpha})`
      : `rgba(251, 191, 36, ${glowAlpha})`;
    ctx.fill();
  }

  // Ball Body (Cute Pink/Strawberry Gradient)
  const ballGrad = ctx.createRadialGradient(-5, -5, 1, 0, 0, b.radius);
  ballGrad.addColorStop(0, '#FFC4C4');
  ballGrad.addColorStop(0.4, '#FF6B8A');
  ballGrad.addColorStop(1, '#C2185B');
  ctx.fillStyle = ballGrad;
  ctx.beginPath();
  ctx.arc(0, 0, b.radius, 0, Math.PI * 2);
  ctx.fill();

  // Subtle rim stroke
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.arc(0, 0, b.radius, 0, Math.PI * 2);
  ctx.stroke();

  // Basketball Seam lines (curved, kawaii style)
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.85)';
  ctx.lineWidth = 1.6;
  // Horizontal seam
  ctx.beginPath();
  ctx.moveTo(-b.radius + 2, 0);
  ctx.bezierCurveTo(-b.radius * 0.5, -b.radius * 0.35, b.radius * 0.5, -b.radius * 0.35, b.radius - 2, 0);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(-b.radius + 2, 0);
  ctx.bezierCurveTo(-b.radius * 0.5, b.radius * 0.35, b.radius * 0.5, b.radius * 0.35, b.radius - 2, 0);
  ctx.stroke();
  // Vertical seam
  ctx.beginPath();
  ctx.moveTo(0, -b.radius + 2);
  ctx.bezierCurveTo(b.radius * 0.3, -b.radius * 0.5, b.radius * 0.3, b.radius * 0.5, 0, b.radius - 2);
  ctx.stroke();

  // Center Strawberry Icon
  ctx.font = '10px sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('🍓', 0, 0);

  // Shine highlight
  ctx.fillStyle = 'rgba(255, 255, 255, 0.55)';
  ctx.beginPath();
  ctx.ellipse(-5, -5, 5, 3.5, -0.6, 0, Math.PI * 2);
  ctx.fill();

  ctx.restore();
}

function drawAimingTrajectory(ctx) {
  const pullDx = hoops.dragStart.x - hoops.dragCurrent.x;
  const pullDy = hoops.dragStart.y - hoops.dragCurrent.y;

  const vx = Math.min(13.5, Math.max(3.0, pullDx * 0.14));
  const vy = Math.min(-3.5, Math.max(-15.5, -Math.abs(pullDy) * 0.14 - 5));

  ctx.save();
  for (let t = 2; t < 26; t += 2) {
    const px = hoops.ball.x + vx * t;
    const py = hoops.ball.y + vy * t + 0.5 * 0.42 * t * t;
    if (py > hoops.groundY + 10) break;

    ctx.fillStyle = (t % 4 === 0) ? '#FF4D6D' : '#FBBF24';
    ctx.beginPath();
    ctx.arc(px, py, Math.max(1.5, 4.5 - t * 0.12), 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.restore();
}

function triggerHoopsGameOver() {
  hoops.active = false;
  clearInterval(hoopsTimerInterval);
  cancelAnimationFrame(hoopsRAF);

  playCuteChime('fanfare');

  // Stats consumption & XP gains (-15% Energy, -10% Hunger, +20% Love, +35 XP)
  petState.energy = Math.max(0, petState.energy - 15);
  petState.hunger = Math.max(0, petState.hunger - 10);
  petState.love = Math.min(100, petState.love + 20);

  const earnedXp = 35 + Math.floor(hoops.score * 1.5);
  petState.xp += earnedXp;
  checkPetLevelUp();
  updatePetUI();

  // High score check
  if (hoops.score > hoopsHighScore) {
    hoopsHighScore = hoops.score;
    localStorage.setItem(HOOPS_HIGHSCORE_KEY, hoopsHighScore.toString());
    if (hoopsHighscoreEl) hoopsHighscoreEl.textContent = hoopsHighScore;
    spawnHeartBurst(window.innerWidth / 2, window.innerHeight / 2, 25);
    showToast(`New Hoops Record! ${hoopsHighScore} pts! 🏆🏀`);
  }

  if (hoopsFinalScore) hoopsFinalScore.textContent = hoops.score;
  if (hoopsFinalBaskets) hoopsFinalBaskets.textContent = `${hoops.baskets} 🏀`;
  if (hoopsFinalXp) hoopsFinalXp.textContent = `+${earnedXp} ⭐`;

  // Energy / Hunger Exhaustion Guidance
  if (petState.energy < 20) {
    if (btnHoopsRestart) {
      btnHoopsRestart.textContent = '🌙 Patulugin si Bunny (Recharge)';
    }
  } else if (petState.hunger < 15) {
    if (btnHoopsRestart) {
      btnHoopsRestart.textContent = '🍓 Pakainin si Bunny muna';
    }
  } else {
    if (btnHoopsRestart) {
      btnHoopsRestart.textContent = '🔄 Shoot Again';
    }
  }

  hoopsOverOverlay.classList.remove('hidden');
  hoopsLiveHud.classList.add('hidden');
}

// Hoops Drag & Shoot Pointer & Touch Events (Mobile & Desktop)
function getHoopsCanvasPoint(e) {
  const rect = hoopsCanvas.getBoundingClientRect();
  const scaleX = hoops.width / rect.width;
  const scaleY = hoops.height / rect.height;

  let clientX = e.clientX;
  let clientY = e.clientY;

  if (e.touches && e.touches.length > 0) {
    clientX = e.touches[0].clientX;
    clientY = e.touches[0].clientY;
  } else if (e.changedTouches && e.changedTouches.length > 0) {
    clientX = e.changedTouches[0].clientX;
    clientY = e.changedTouches[0].clientY;
  }

  return {
    x: (clientX - rect.left) * scaleX,
    y: (clientY - rect.top) * scaleY
  };
}

if (hoopsCanvas) {
  const onHoopsStart = (e) => {
    if (e.cancelable) e.preventDefault();
    if (!hoops.active || hoops.ball.state !== 'ready') return;
    const pt = getHoopsCanvasPoint(e);
    hoops.aiming = true;
    hoops.dragStart = pt;
    hoops.dragCurrent = pt;
  };

  const onHoopsMove = (e) => {
    if (!hoops.active || !hoops.aiming) return;
    if (e.cancelable) e.preventDefault();
    hoops.dragCurrent = getHoopsCanvasPoint(e);
  };

  const onHoopsEnd = (e) => {
    if (!hoops.active || !hoops.aiming) return;
    hoops.aiming = false;

    if (e.changedTouches && e.changedTouches.length > 0) {
      hoops.dragCurrent = getHoopsCanvasPoint(e);
    }

    const pullDx = hoops.dragStart.x - hoops.dragCurrent.x;
    const pullDy = hoops.dragStart.y - hoops.dragCurrent.y;

    if (pullDx > 12 || Math.abs(pullDy) > 12) {
      const vx = Math.min(13.5, Math.max(3.0, pullDx * 0.14));
      const vy = Math.min(-3.5, Math.max(-15.5, -Math.abs(pullDy) * 0.14 - 5));

      hoops.ball.vx = vx;
      hoops.ball.vy = vy;
      hoops.ball.state = 'flying';
      hoops.ball.hasPassedRim = false;
      playCuteChime('pop');
    }
  };

  hoopsCanvas.addEventListener('pointerdown', onHoopsStart, { passive: false });
  window.addEventListener('pointermove', onHoopsMove, { passive: false });
  window.addEventListener('pointerup', onHoopsEnd);
  window.addEventListener('pointercancel', onHoopsEnd);

  // Direct Touch Event Fallbacks for iOS Safari / Android Touch
  hoopsCanvas.addEventListener('touchstart', onHoopsStart, { passive: false });
  window.addEventListener('touchmove', onHoopsMove, { passive: false });
  window.addEventListener('touchend', onHoopsEnd);
  window.addEventListener('touchcancel', onHoopsEnd);
}

// Hoops Button Listeners
if (btnPetHoops) btnPetHoops.addEventListener('click', openHoopsGame);
if (btnHoopsStart) btnHoopsStart.addEventListener('click', startHoopsGame);
if (btnHoopsRestart) {
  btnHoopsRestart.addEventListener('click', () => {
    if (petState.energy < 20) {
      showToast('Patulugin muna si Chi-Bunny para mag-recharge! 🌙💤');
      closeModal('modal-hoops-game');
      switchView('pet');
      if (!petState.isSleeping) togglePetSleep();
      return;
    }
    if (petState.hunger < 15) {
      showToast('Pakainin muna si Chi-Bunny ng snacks! 🍓✨');
      closeModal('modal-hoops-game');
      switchView('pet');
      foodTray.classList.remove('hidden');
      return;
    }
    startHoopsGame();
  });
}

/* ═══════════════════════════════════════════════════════════════════════════
   MY MELODY ASSISTIVE TOUCH FLOATING BALL (Melo-chan 🎀)
   ═══════════════════════════════════════════════════════════════════════════ */

const MELO_POS_KEY = 'monthsary-melo-pos-v2';
let isDraggingMelo = false;
let meloDragStartX = 0;
let meloDragStartY = 0;
let meloInitialX = 0;
let meloInitialY = 0;
let hasMovedMelo = false;
let meloIdleTimer = null;

function setMeloCompanionState(mascotState) {
  if (!meloCompanion) return;
  meloCompanion.classList.toggle('dancing', mascotState === 'dancing');
  meloCompanion.classList.toggle('sleepy', mascotState === 'sleepy');
}

function triggerMeloSpeech(customText = null) {
  if (!meloSpeech) return;
  resetMeloIdle();
  const text = customText || MELO_QUOTES[Math.floor(Math.random() * MELO_QUOTES.length)];
  meloSpeech.querySelector('span').textContent = text;
  meloSpeech.style.opacity = '1';
  meloSpeech.style.transform = 'scale(1) translateY(0)';

  clearTimeout(meloSpeechTimer);
  meloSpeechTimer = setTimeout(() => {
    meloSpeech.style.opacity = '0.92';
  }, 4500);
}

function resetMeloIdle() {
  if (!meloCompanion) return;
  meloCompanion.classList.remove('idle-dim');
  clearTimeout(meloIdleTimer);
  meloIdleTimer = setTimeout(() => {
    if (!isDraggingMelo) {
      meloCompanion.classList.add('idle-dim');
    }
  }, 4000);
}

function initMeloAssistiveBall() {
  if (!meloCompanion) return;

  // Restore saved position or use default bottom-right
  const savedPos = localStorage.getItem(MELO_POS_KEY);
  if (savedPos) {
    try {
      const { x, y } = JSON.parse(savedPos);
      applyMeloPosition(x, y, false);
    } catch {
      setDefaultMeloPosition();
    }
  } else {
    setDefaultMeloPosition();
  }

  resetMeloIdle();

  // Mouse / Touch Dragging Handlers
  meloAvatarBtn.addEventListener('pointerdown', onMeloPointerDown);
  window.addEventListener('pointermove', onMeloPointerMove);
  window.addEventListener('pointerup', onMeloPointerUp);
  window.addEventListener('pointercancel', onMeloPointerUp);

  meloCompanion.addEventListener('mouseenter', resetMeloIdle);
}

function setDefaultMeloPosition() {
  const isMobile = window.innerWidth < 768;
  const initialX = window.innerWidth - (isMobile ? 70 : 88);
  const initialY = window.innerHeight - (isMobile ? 180 : 150);
  applyMeloPosition(initialX, initialY, false);
}

function applyMeloPosition(x, y, animate = true) {
  const ballSize = meloAvatarBtn.offsetWidth || 60;
  const paddingX = 10;
  const minTop = 65; // Below header
  const maxBottom = window.innerHeight - (window.innerWidth < 768 ? 140 : 110); // Above player / mobile nav

  // Clamping
  const clampedX = Math.max(paddingX, Math.min(window.innerWidth - ballSize - paddingX, x));
  const clampedY = Math.max(minTop, Math.min(maxBottom, y));

  // Determine left vs right docking for speech bubble direction
  const isDockLeft = clampedX < (window.innerWidth - ballSize) / 2;
  meloCompanion.classList.toggle('dock-left', isDockLeft);

  if (animate) {
    meloCompanion.style.transition = 'left 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275), top 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.3s ease';
  } else {
    meloCompanion.style.transition = 'none';
  }

  meloCompanion.style.left = `${clampedX}px`;
  meloCompanion.style.top = `${clampedY}px`;
  meloCompanion.style.right = 'auto';
  meloCompanion.style.bottom = 'auto';

  localStorage.setItem(MELO_POS_KEY, JSON.stringify({ x: clampedX, y: clampedY }));
}

function onMeloPointerDown(e) {
  isDraggingMelo = true;
  hasMovedMelo = false;
  meloDragStartX = e.clientX;
  meloDragStartY = e.clientY;

  const rect = meloCompanion.getBoundingClientRect();
  meloInitialX = rect.left;
  meloInitialY = rect.top;

  meloCompanion.classList.add('dragging');
  meloCompanion.classList.remove('idle-dim');
  meloAvatarBtn.setPointerCapture?.(e.pointerId);
}

function onMeloPointerMove(e) {
  if (!isDraggingMelo) return;
  const dx = e.clientX - meloDragStartX;
  const dy = e.clientY - meloDragStartY;

  if (Math.abs(dx) > 4 || Math.abs(dy) > 4) {
    hasMovedMelo = true;
  }

  const currentX = meloInitialX + dx;
  const currentY = meloInitialY + dy;

  meloCompanion.style.transition = 'none';
  meloCompanion.style.left = `${currentX}px`;
  meloCompanion.style.top = `${currentY}px`;
}

function onMeloPointerUp(e) {
  if (!isDraggingMelo) return;
  isDraggingMelo = false;
  meloCompanion.classList.remove('dragging');

  const rect = meloCompanion.getBoundingClientRect();
  const ballSize = meloAvatarBtn.offsetWidth || 60;
  const paddingX = 12;

  // Snap to nearest screen edge (Left or Right) like iOS AssistiveTouch
  const isLeftHalf = rect.left + ballSize / 2 < window.innerWidth / 2;
  const targetX = isLeftHalf ? paddingX : window.innerWidth - ballSize - paddingX;
  const targetY = rect.top;

  applyMeloPosition(targetX, targetY, true);
  resetMeloIdle();

  // If user just tapped without dragging, trigger click interaction
  if (!hasMovedMelo) {
    spawnHeartBurst(e.clientX, e.clientY);
    playCuteChime('sparkle');
    triggerMeloSpeech();
  }
}

/* ═══════════════════════════════════════════════════════════════════════════
   LAG-FREE GPU PRE-CACHED PARTICLE ENGINE 🚀
   ═══════════════════════════════════════════════════════════════════════════ */

const ctx = particleCanvas.getContext('2d');
let particles = [];
const MAX_ACTIVE_PARTICLES = 65;

function resizeCanvas() {
  particleCanvas.width = window.innerWidth;
  particleCanvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

const EMOJI_LIST = ['💖', '🎀', '🍓', '✨', '🌸', '🐰', '💕', '🧁'];
const emojiSpriteCache = new Map();

function getEmojiSprite(emoji, size = 32) {
  const key = `${emoji}-${size}`;
  if (emojiSpriteCache.has(key)) return emojiSpriteCache.get(key);

  const off = document.createElement('canvas');
  off.width = size;
  off.height = size;
  const offCtx = off.getContext('2d');
  offCtx.font = `${size * 0.75}px sans-serif`;
  offCtx.textAlign = 'center';
  offCtx.textBaseline = 'middle';
  offCtx.fillText(emoji, size / 2, size / 2 + 2);

  emojiSpriteCache.set(key, off);
  return off;
}

function spawnHeartBurst(x, y, count = 10) {
  if (particles.length > MAX_ACTIVE_PARTICLES) return;
  for (let i = 0; i < count; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = Math.random() * 4 + 2;
    const emoji = EMOJI_LIST[Math.floor(Math.random() * EMOJI_LIST.length)];
    const size = Math.floor(Math.random() * 12 + 22);

    particles.push({
      x,
      y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - 2,
      sprite: getEmojiSprite(emoji, 36),
      size,
      alpha: 1,
      rotation: Math.random() * 360,
      vRot: (Math.random() - 0.5) * 8,
      gravity: 0.14,
      decay: 0.022,
    });
  }
}

function renderParticles() {
  if (particles.length > 0) {
    ctx.clearRect(0, 0, particleCanvas.width, particleCanvas.height);

    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.gravity;
      p.rotation += p.vRot;
      p.alpha -= p.decay;

      if (p.alpha <= 0 || p.y > window.innerHeight + 50) {
        particles.splice(i, 1);
        continue;
      }

      ctx.save();
      ctx.globalAlpha = Math.max(0, p.alpha);
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.drawImage(p.sprite, -p.size / 2, -p.size / 2, p.size, p.size);
      ctx.restore();
    }
  }

  requestAnimationFrame(renderParticles);
}
renderParticles();

document.addEventListener('click', (e) => {
  if (e.target.closest('input') || e.target.closest('textarea')) return;
  spawnHeartBurst(e.clientX, e.clientY, 4);
});

/* ═══════════════════════════════════════════════════════════════════════════
   NAVIGATION
   ═══════════════════════════════════════════════════════════════════════════ */

function switchView(view) {
  state.currentView = view;

  document.querySelectorAll('.view-panel').forEach((el) => el.classList.add('hidden'));
  const targetView = document.getElementById(`view-${view}`);
  if (targetView) targetView.classList.remove('hidden');

  const hero = document.getElementById('hero-banner-section');
  if (hero) hero.classList.toggle('hidden', view === 'monthsary');

  document.querySelectorAll('.nav-item, .mobile-nav-item').forEach((btn) => {
    const isActive = btn.dataset.view === view;
    btn.classList.toggle('active-nav', isActive);
    if (btn.classList.contains('mobile-nav-item')) {
      btn.classList.toggle('text-pastel', isActive);
      btn.classList.toggle('text-gray-400', !isActive);
    }
  });

  if (view === 'scrapbook') {
    renderScrapbookGrid();
  } else if (view === 'pet') {
    updatePetUI();
    triggerPetSpeech(`"Hello Mommy Ciara! Alagaan mo po ako! 🐰💖"`);
  }
}

document.querySelectorAll('[data-view]').forEach((btn) => {
  btn.addEventListener('click', () => switchView(btn.dataset.view));
});

/* ═══════════════════════════════════════════════════════════════════════════
   SEARCH
   ═══════════════════════════════════════════════════════════════════════════ */

searchInput.addEventListener('input', () => {
  const query = searchInput.value.trim().toLowerCase();
  searchResults.innerHTML = '';

  if (!query) return;

  const matches = songs.filter(
    (song) =>
      song.title.toLowerCase().includes(query) ||
      song.artist.toLowerCase().includes(query)
  );

  if (matches.length === 0) {
    searchResults.innerHTML = '<p class="text-sm text-pink-400 font-medium text-center py-8">Walang nahanap na song for baby Ciara 🌸</p>';
    return;
  }

  matches.forEach((song) => searchResults.appendChild(createSongRow(song)));
});

/* ═══════════════════════════════════════════════════════════════════════════
   SHUFFLE & REPEAT
   ═══════════════════════════════════════════════════════════════════════════ */

btnShuffle.addEventListener('click', () => {
  state.shuffle = !state.shuffle;
  btnShuffle.classList.toggle('active', state.shuffle);
  if (state.shuffle) {
    state.shuffledQueue = shuffleArray(songs.map((s) => s.id));
    showToast('Shuffle Mode: ON 🔀');
  } else {
    showToast('Shuffle Mode: OFF');
  }
});

btnRepeat.addEventListener('click', () => {
  const modes = ['off', 'all', 'one'];
  state.repeat = modes[(modes.indexOf(state.repeat) + 1) % modes.length];
  btnRepeat.classList.toggle('active', state.repeat !== 'off');
  btnRepeat.classList.toggle('repeat-one', state.repeat === 'one');
  showToast(`Repeat Mode: ${state.repeat.toUpperCase()} 🔁`);
});

/* ═══════════════════════════════════════════════════════════════════════════
   AUDIO EVENTS
   ═══════════════════════════════════════════════════════════════════════════ */

audio.addEventListener('loadedmetadata', () => {
  const total = formatTime(audio.duration);
  timeTotalDesktop.textContent = total;
  timeTotalMobile.textContent = total;
});

audio.addEventListener('play', () => {
  cancelAnimationFrame(seekRAF);
  seekRAF = requestAnimationFrame(updateProgress);
  setMeloCompanionState('dancing');
});

audio.addEventListener('pause', () => {
  cancelAnimationFrame(seekRAF);
  setMeloCompanionState('sleepy');
});

audio.addEventListener('ended', () => playNext());

/* ═══════════════════════════════════════════════════════════════════════════
   CONTROL BINDINGS
   ═══════════════════════════════════════════════════════════════════════════ */

btnPlay.addEventListener('click', togglePlay);
btnPrev.addEventListener('click', playPrev);
btnNext.addEventListener('click', playNext);

bindSeekBar(seekBarDesktop);
bindSeekBar(seekBarMobile);

volumeBar.addEventListener('input', () => setVolume(parseFloat(volumeBar.value)));

btnMute.addEventListener('click', () => {
  if (audio.volume > 0) {
    volumeBar.dataset.prev = volumeBar.value;
    setVolume(0);
    volumeBar.value = 0;
  } else {
    const prev = volumeBar.dataset.prev || 80;
    volumeBar.value = prev;
    setVolume(parseFloat(prev));
  }
});

/* ═══════════════════════════════════════════════════════════════════════════
   MODAL CLOSE HANDLERS
   ═══════════════════════════════════════════════════════════════════════════ */

document.querySelectorAll('[data-close]').forEach((btn) => {
  btn.addEventListener('click', () => closeModal(btn.dataset.close));
});

document.querySelectorAll('.modal-overlay').forEach((overlay) => {
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal(overlay.id);
  });
});

/* ═══════════════════════════════════════════════════════════════════════════
   INIT
   ═══════════════════════════════════════════════════════════════════════════ */

async function init() {
  loadPlaylist();
  loadLiked();
  loadLoveNotes();
  loadMemories();
  loadCallsign();
  loadPet();
  setVolume(80);

  const heroPath = loadHero();
  await applyHeroImage(heroPath);

  if (songs.length > 0) {
    state.currentId = songs[0].id;
    const src = await resolveMediaPath(songs[0].audioPath);
    audio.src = src;
    audio.load();
    updatePlayerInfo();
    updateLyricsPanel();
  } else {
    updatePlayerInfo();
  }

  refreshAllRows();
  initMeloAssistiveBall();
  switchView('monthsary');
  triggerMeloSpeech("Welcome to Fusion, baby Ciara! Monthsary + playlist, all for you 💖🎀");
}

init();
