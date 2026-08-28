/**
 * Monthsary layer: letter, timer, gallery lightbox, hearts, headphone welcome.
 * Playlist playback stays in script.js.
 */
const TOGETHER_SINCE = new Date("2026-04-18T00:00:00");

const LETTER =
  "To My Favorite Matcha & Mayor,\n\n" +
  "Happy 1st Monthsary, My Baby!" +
  " Aesthetic na to kasi alam mo namang gagawin ko ang lahat para mapangiti ka." +
  " Akala ko dati, Online Games at school lang ang bubuo ng araw ko," +
  " pero nung dumating ka, mas naging maganda ang buhay ko. " +
  " Thank you for being constant," +
  " lalo na nung mga araw na hirap tayo sa cramps mo at sa init ng panahon." +
  " Kahit malayo tayo, ramdam ko yung pagmamahal mo palagi. ," +
  " One month with you already feels like a lifetime I would choose again and again. " +
  "Happy 1 month sa atin, Mayor ko!" +
  " Cheers to more movie dates, gaming nights, and sleep calls. I love you so much and I miss you more! \n" +
  "*You make ordinary days feel like home.*\n" +
  "\n" +
  "Forever yours.";

(function initHeadphoneModal() {
  const modal = document.getElementById("headphone-modal");
  const card = document.getElementById("headphone-card");
  const btn = document.getElementById("headphone-dismiss");
  if (!modal || !card || !btn) return;

  function open() {
    modal.removeAttribute("aria-hidden");
    modal.classList.remove("opacity-0", "pointer-events-none");
    modal.classList.add("opacity-100", "pointer-events-auto");
    requestAnimationFrame(() => {
      card.classList.remove("scale-95", "opacity-0");
      card.classList.add("scale-100", "opacity-100");
    });
  }

  function close() {
    card.classList.add("scale-95", "opacity-0");
    card.classList.remove("scale-100", "opacity-100");
    modal.classList.add("opacity-0", "pointer-events-none");
    modal.classList.remove("opacity-100", "pointer-events-auto");
    setTimeout(() => {
      modal.setAttribute("aria-hidden", "true");
    }, 400);
  }

  btn.addEventListener("click", close);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) close();
  });

  requestAnimationFrame(open);
})();

function pad(n) {
  return String(n).padStart(2, "0");
}

function updateTimer() {
  const now = Date.now();
  const start = TOGETHER_SINCE.getTime();
  const diff = Math.max(0, now - start);

  const sec = Math.floor(diff / 1000) % 60;
  const min = Math.floor(diff / 60000) % 60;
  const hr = Math.floor(diff / 3600000) % 24;
  const day = Math.floor(diff / 86400000);

  const el = (id) => document.getElementById(id);
  if (!el("d-days")) return;
  el("d-days").textContent = day;
  el("d-hours").textContent = pad(hr);
  el("d-mins").textContent = pad(min);
  el("d-secs").textContent = pad(sec);

  const label = document.getElementById("since-label");
  if (label) {
    label.textContent =
      "Since " +
      TOGETHER_SINCE.toLocaleDateString(undefined, {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });
  }
}

setInterval(updateTimer, 1000);
updateTimer();

(function typewriter() {
  const out = document.getElementById("typewriter");
  const cursor = document.getElementById("typewriter-cursor");
  if (!out) return;
  let i = 0;
  const speed = 38;

  function tick() {
    if (i < LETTER.length) {
      const ch = LETTER[i];
      if (ch === "\n") {
        out.appendChild(document.createElement("br"));
      } else {
        out.appendChild(document.createTextNode(ch));
      }
      i++;
      setTimeout(tick, speed);
    } else if (cursor) {
      cursor.classList.add("hidden");
    }
  }

  setTimeout(tick, 600);
})();

(function floatingHearts() {
  const layer = document.querySelector(".hearts-layer");
  if (!layer) return;

  const hearts = ["🩷", "♡", "🩵", "🧸", "♡", "🐰"];
  const types = ["sky", "pink", "pink", "sky"];

  function spawn() {
    const el = document.createElement("span");
    el.className = "heart " + types[Math.floor(Math.random() * types.length)];
    el.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    el.style.left = Math.random() * 100 + "%";
    el.style.animationDuration = 12 + Math.random() * 10 + "s";
    el.style.animationDelay = Math.random() * 4 + "s";
    layer.appendChild(el);
    setTimeout(() => el.remove(), 20000);
  }

  for (let k = 0; k < 8; k++) spawn();
  setInterval(spawn, 1000);
})();

(function galleryFallback() {
  document.querySelectorAll("img.gallery-img[data-fallback]").forEach((img) => {
    img.addEventListener("error", () => {
      img.alt = "Add your photo";
      img.removeAttribute("src");
      img.classList.add("is-placeholder");
      const svg = encodeURIComponent(
        '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">' +
          '<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">' +
          '<stop offset="0%" stop-color="#87CEEB"/><stop offset="100%" stop-color="#FFB6C1"/></linearGradient></defs>' +
          '<rect width="400" height="400" fill="url(#g)" opacity="0.35"/>' +
          '<text x="200" y="200" text-anchor="middle" fill="#64748b" font-family="system-ui" font-size="18">' +
          "Coming Soon!</text></svg>"
      );
      img.src = "data:image/svg+xml," + svg;
    });
  });
})();

(function galleryLightbox() {
  const GALLERY_ALBUMS = {
    movie: ["gallery/movie.jpg", "gallery/movie2.jpg"],
    games: [
      "gallery/game.jpg",
      "gallery/nte1.jpg",
      "gallery/nte.jpg",
      "gallery/game2.jpg",
      "gallery/nte chiz.jpg",
    ],
    calls: [
      "gallery/vc.jpg",
      "gallery/vc1.jpg",
      "gallery/vc2.png",
      "gallery/vc3.jpg",
      "gallery/vc4.jpg",
    ],
    etc: ["gallery/meetsoon.jpg"],
    Coming: ["gallery/sleepsoon.jpg"],
  };

  const ALBUM_TITLES = {
    movie: "Movie Nights",
    games: "Games",
    calls: "Video calls",
    etc: "Etc",
    Coming: "Coming Soon",
  };

  const PLACEHOLDER_SVG =
    "data:image/svg+xml," +
    encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">' +
        '<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">' +
        '<stop offset="0%" stop-color="#87CEEB"/><stop offset="100%" stop-color="#FFB6C1"/></linearGradient></defs>' +
        '<rect width="400" height="400" fill="url(#g)" opacity="0.35"/>' +
        '<text x="200" y="200" text-anchor="middle" fill="#64748b" font-family="system-ui" font-size="18">' +
        "Coming Soon</text></svg>"
    );

  const root = document.getElementById("gallery-lightbox");
  const scroller = document.getElementById("gallery-lightbox-scroller");
  const titleEl = document.getElementById("gallery-lightbox-title");
  const counterEl = document.getElementById("gallery-lightbox-counter");
  const dotsEl = document.getElementById("gallery-lightbox-dots");
  const closeBtn = document.getElementById("gallery-lightbox-close");
  const prevBtn = document.getElementById("gallery-lightbox-prev");
  const nextBtn = document.getElementById("gallery-lightbox-next");
  if (!root || !scroller || !titleEl || !counterEl || !dotsEl || !closeBtn) return;

  let slideCount = 0;
  let scrollRaf = 0;

  function wireImgFallback(img) {
    img.addEventListener("error", () => {
      img.onerror = null;
      img.src = PLACEHOLDER_SVG;
      img.alt = "Coming Soon!";
      img.classList.add("is-placeholder");
    });
  }

  function getSlideIndex() {
    const w = scroller.clientWidth;
    if (!w) return 0;
    return Math.min(slideCount - 1, Math.max(0, Math.round(scroller.scrollLeft / w)));
  }

  function updateChrome() {
    const idx = slideCount ? getSlideIndex() : 0;
    counterEl.textContent = slideCount ? `${idx + 1} / ${slideCount}` : "0 / 0";
    dotsEl.querySelectorAll("button").forEach((d, i) => {
      d.classList.toggle("is-active", i === idx);
      d.setAttribute("aria-current", i === idx ? "true" : "false");
    });
  }

  function scrollToIndex(i, smooth) {
    const w = scroller.clientWidth;
    if (!w || !slideCount) return;
    const clamped = Math.min(slideCount - 1, Math.max(0, i));
    scroller.scrollTo({
      left: clamped * w,
      behavior: smooth ? "smooth" : "auto",
    });
  }

  function open(albumKey, startIndex) {
    const paths = GALLERY_ALBUMS[albumKey];
    if (!paths || !paths.length) return;
    slideCount = paths.length;
    titleEl.textContent = ALBUM_TITLES[albumKey] || albumKey;

    scroller.replaceChildren();
    paths.forEach((src) => {
      const slide = document.createElement("div");
      slide.className = "gallery-lightbox-slide";
      const img = document.createElement("img");
      img.src = src;
      img.alt = (ALBUM_TITLES[albumKey] || albumKey) + " photo";
      img.className = "gallery-lightbox-img";
      img.decoding = "async";
      img.loading = "eager";
      wireImgFallback(img);
      slide.appendChild(img);
      scroller.appendChild(slide);
    });

    dotsEl.replaceChildren();
    paths.forEach((_, i) => {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = "gallery-lightbox-dot";
      dot.setAttribute("aria-label", "Photo " + (i + 1));
      dot.addEventListener("click", () => scrollToIndex(i, true));
      dotsEl.appendChild(dot);
    });

    root.classList.remove("hidden");
    root.classList.add("is-open");
    document.body.classList.add("gallery-lightbox-open");

    const start = Math.min(paths.length - 1, Math.max(0, startIndex | 0));
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        scrollToIndex(start, false);
        updateChrome();
        scroller.focus({ preventScroll: true });
      });
    });
  }

  function close() {
    root.classList.add("hidden");
    root.classList.remove("is-open");
    document.body.classList.remove("gallery-lightbox-open");
    slideCount = 0;
    scroller.replaceChildren();
    dotsEl.replaceChildren();
  }

  document.querySelectorAll(".gallery-tap").forEach((btn) => {
    btn.addEventListener("click", () => {
      const album = btn.getAttribute("data-gallery-album");
      const raw = btn.getAttribute("data-gallery-start");
      const start = parseInt(raw == null ? "0" : raw, 10) || 0;
      if (album && GALLERY_ALBUMS[album]) open(album, start);
    });
  });

  closeBtn.addEventListener("click", close);

  scroller.addEventListener("scroll", () => {
    if (scrollRaf) cancelAnimationFrame(scrollRaf);
    scrollRaf = requestAnimationFrame(updateChrome);
  });

  window.addEventListener("keydown", (e) => {
    if (!root.classList.contains("is-open")) return;
    if (e.key === "Escape") {
      e.preventDefault();
      close();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      scrollToIndex(getSlideIndex() + 1, true);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      scrollToIndex(getSlideIndex() - 1, true);
    }
  });

  if (prevBtn) prevBtn.addEventListener("click", () => scrollToIndex(getSlideIndex() - 1, true));
  if (nextBtn) nextBtn.addEventListener("click", () => scrollToIndex(getSlideIndex() + 1, true));

  window.addEventListener("resize", () => {
    if (!root.classList.contains("is-open")) return;
    const idx = getSlideIndex();
    scrollToIndex(idx, false);
    updateChrome();
  });
})();

(function surpriseConfetti() {
  const trigger = document.getElementById("surprise-trigger");
  if (!trigger) return;

  const pieces = ["🧋", "🍵", "♥", "💗", "🩵", "♥", "✨"];

  trigger.addEventListener("click", () => {
    const n = 55;
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    for (let i = 0; i < n; i++) {
      const el = document.createElement("span");
      el.className = "confetti-piece";
      el.textContent = pieces[Math.floor(Math.random() * pieces.length)];
      el.style.left = Math.random() * vw + "px";
      el.style.top = Math.random() * vh * 0.35 + "px";
      const dur = 2.2 + Math.random() * 1.8;
      el.style.animationDuration = dur + "s";
      const tx = (Math.random() - 0.5) * 200 + "px";
      const ty = vh * 0.5 + Math.random() * vh * 0.5 + "px";
      const rot = (Math.random() - 0.5) * 720 + "deg";
      el.style.setProperty("--tx", tx);
      el.style.setProperty("--ty", ty);
      el.style.setProperty("--rot", rot);
      document.body.appendChild(el);
      setTimeout(() => el.remove(), dur * 1000 + 100);
    }
  });
})();

(function teaserSurpriseModal() {
  const btn = document.getElementById("teaser-surprise-btn");
  const modal = document.getElementById("teaser-modal");
  const card = document.getElementById("teaser-modal-card");
  const closeBtn = document.getElementById("teaser-modal-close");
  if (!btn || !modal || !card || !closeBtn) return;

  function open() {
    modal.removeAttribute("aria-hidden");
    modal.classList.remove("opacity-0", "pointer-events-none");
    modal.classList.add("opacity-100", "pointer-events-auto");
    document.body.classList.add("teaser-modal-open");
    requestAnimationFrame(() => {
      card.classList.remove("scale-95", "opacity-0");
      card.classList.add("scale-100", "opacity-100");
    });
    closeBtn.focus();
  }

  function close() {
    card.classList.add("scale-95", "opacity-0");
    card.classList.remove("scale-100", "opacity-100");
    modal.classList.add("opacity-0", "pointer-events-none");
    modal.classList.remove("opacity-100", "pointer-events-auto");
    document.body.classList.remove("teaser-modal-open");
    setTimeout(() => {
      modal.setAttribute("aria-hidden", "true");
    }, 320);
    btn.focus();
  }

  btn.addEventListener("click", open);
  closeBtn.addEventListener("click", close);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) close();
  });

  window.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    if (!modal.classList.contains("pointer-events-auto")) return;
    close();
  });
})();

(function popupWelcomeIconFallback() {
  const img = document.getElementById("popup-welcome-img");
  if (!img) return;
  const fallbackSvg =
    "data:image/svg+xml," +
    encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80"><defs><radialGradient id="g" cx="35%" cy="35%" r="65%"><stop stop-color="#fce7f3"/><stop offset="1" stop-color="#f472b6"/></radialGradient></defs><circle cx="40" cy="40" r="36" fill="url(#g)"/><text x="40" y="46" text-anchor="middle" font-size="26" fill="#9f1239" opacity="0.85">♪</text></svg>'
    );
  img.addEventListener("error", () => {
    img.onerror = null;
    if (!img.src.startsWith("data:")) img.src = fallbackSvg;
  });
})();

(function monthsaryPlaylistBridges() {
  const openPlaylist = document.getElementById("months-open-playlist");
  const playDaisies = document.getElementById("months-play-daisies");

  if (openPlaylist) {
    openPlaylist.addEventListener("click", () => {
      const nav = document.querySelector('[data-view="home"]');
      if (nav) nav.click();
    });
  }

  if (playDaisies) {
    playDaisies.addEventListener("click", () => {
      if (typeof playSong === "function" && typeof songs !== "undefined") {
        const song =
          songs.find((s) => s.id === "song-daisies") ||
          songs.find((s) => (s.title || "").toLowerCase().includes("daisies"));
        if (song) playSong(song.id);
      }
    });
  }
})();
