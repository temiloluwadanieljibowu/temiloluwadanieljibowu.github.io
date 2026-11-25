/* =============================================================================
   Starfield background — a quiet, slowly drifting field of stars with gentle
   twinkle and scroll parallax. Renders once (no animation) when the visitor
   prefers reduced motion, and pauses while the tab is hidden.
   Tweak DENSITY / GOLD_SHARE / SPEED below to taste.
   ========================================================================== */
(function () {
  "use strict";

  const canvas = document.getElementById("starfield");
  if (!canvas || !canvas.getContext) return;
  const ctx = canvas.getContext("2d");

  const DENSITY = 1 / 5600;     // stars per CSS pixel²
  const MAX_STARS = 360;
  const GOLD_SHARE = 0.07;      // fraction of warm gold stars
  const BLUE_SHARE = 0.12;      // fraction of cool blue-white stars
  const SPEED = 0.006;          // horizontal drift (px per ms × depth)
  const PARALLAX = 0.06;        // how much stars move with scroll

  const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  let reduce = motionQuery.matches;
  let w = 0, h = 0, dpr = 1, stars = [], raf = 0, last = 0;

  function makeStars() {
    const count = Math.min(MAX_STARS, Math.round(w * h * DENSITY));
    stars = Array.from({ length: count }, () => {
      const depth = Math.random() * 0.8 + 0.2;
      const roll = Math.random();
      return {
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.pow(Math.random(), 2.4) * 1.35 + 0.3,
        depth,
        alpha: Math.random() * 0.55 + 0.25,
        tw: Math.random() * 0.0012 + 0.0004,
        phase: Math.random() * Math.PI * 2,
        tone: roll < GOLD_SHARE ? "gold" : roll < GOLD_SHARE + BLUE_SHARE ? "blue" : "white",
      };
    });
  }

  // Star colors per theme: bright stars on the dark sky, soft ink specks on the light page.
  const PALETTES = {
    dark: { gold: "255, 216, 140", blue: "200, 218, 255", white: "255, 255, 255", strength: 1 },
    light: { gold: "176, 124, 16", blue: "52, 84, 170", white: "30, 42, 78", strength: 0.32 },
  };
  let palette = PALETTES[document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark"];

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    makeStars();
    draw(performance.now());
  }

  function draw(t) {
    ctx.clearRect(0, 0, w, h);
    const scroll = window.scrollY || 0;
    for (const s of stars) {
      const twinkle = reduce ? 1 : 0.72 + 0.28 * Math.sin(t * s.tw + s.phase);
      const a = s.alpha * twinkle * palette.strength;
      const color = palette[s.tone];
      let y = (s.y - scroll * PARALLAX * s.depth) % h;
      if (y < 0) y += h;
      const x = s.x;
      ctx.beginPath();
      ctx.arc(x, y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${color}, ${a})`;
      ctx.fill();
      if (s.r > 1.2) {
        // soft halo on the brightest stars
        ctx.beginPath();
        ctx.arc(x, y, s.r * 3.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, ${a * 0.09})`;
        ctx.fill();
      }
    }
  }

  function frame(t) {
    raf = requestAnimationFrame(frame);
    if (t - last < 33) return; // ~30 fps is plenty for a background
    const dt = Math.min(t - last, 100);
    last = t;
    for (const s of stars) {
      s.x += SPEED * dt * s.depth;
      if (s.x > w + 2) s.x = -2;
    }
    draw(t);
  }

  function start() {
    cancelAnimationFrame(raf);
    if (reduce || document.hidden) {
      draw(performance.now());
      return;
    }
    last = performance.now();
    raf = requestAnimationFrame(frame);
  }

  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(resize, 150);
  });
  window.addEventListener("scroll", () => { if (reduce) draw(performance.now()); }, { passive: true });
  document.addEventListener("visibilitychange", start);
  motionQuery.addEventListener("change", (e) => { reduce = e.matches; start(); });
  document.addEventListener("themechange", (e) => {
    palette = PALETTES[e.detail === "light" ? "light" : "dark"];
    draw(performance.now());
  });

  resize();
  start();
})();
