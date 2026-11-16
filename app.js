(() => {
  "use strict";

  /* ---------- theme toggle ---------- */
  const root = document.documentElement;
  const toggleBtn = document.getElementById("theme-toggle");
  const STORAGE_KEY = "bluecore-theme";

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    toggleBtn.setAttribute("aria-pressed", theme === "light" ? "true" : "false");
  }

  function getPreferredTheme() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "light" || saved === "dark") return saved;
    return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  }

  applyTheme(getPreferredTheme());

  toggleBtn.addEventListener("click", () => {
    const current = root.getAttribute("data-theme") === "light" ? "light" : "dark";
    const next = current === "light" ? "dark" : "light";
    applyTheme(next);
    localStorage.setItem(STORAGE_KEY, next);
  });

  /* ---------- module category tabs ---------- */
  const tabs = document.querySelectorAll(".module-tab");
  const cards = document.querySelectorAll(".module-card");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("is-active"));
      tab.classList.add("is-active");
      const cat = tab.dataset.cat;
      cards.forEach((card) => {
        card.classList.toggle("is-hidden", card.dataset.cat !== cat);
      });
    });
  });

  /* ---------- version picker updates download label ---------- */
  const versionSelect = document.getElementById("version-select");
  const downloadBtn = document.getElementById("download-btn");
  const versionToFile = {
    "1.21.x": "BlueCore_1.4.2.apk",
    "1.20.x": "BlueCore_1.3.1.apk",
    "1.19.x": "BlueCore_1.2.0.apk",
  };

  if (versionSelect && downloadBtn) {
    versionSelect.addEventListener("change", () => {
      const file = versionToFile[versionSelect.value] || versionToFile["1.21.x"];
      downloadBtn.textContent = `${file} indir`;
    });
  }

  /* ---------- nebula starfield background ---------- */
  const canvas = document.getElementById("nebula-canvas");
  const ctx = canvas.getContext("2d");
  let stars = [];
  let width, height;
  let animId = null;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    const count = Math.round((width * height) / 9000);
    stars = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.3 + 0.2,
      baseAlpha: Math.random() * 0.6 + 0.2,
      drift: (Math.random() - 0.5) * 0.04,
      twinkleSpeed: Math.random() * 0.015 + 0.003,
      twinklePhase: Math.random() * Math.PI * 2,
    }));
  }

  function draw(time) {
    ctx.clearRect(0, 0, width, height);

    const grad = ctx.createRadialGradient(
      width * 0.75, height * 0.15, 0,
      width * 0.75, height * 0.15, Math.max(width, height) * 0.8
    );
    grad.addColorStop(0, "rgba(127, 214, 255, 0.18)");
    grad.addColorStop(0.5, "rgba(139, 108, 246, 0.08)");
    grad.addColorStop(1, "rgba(0, 0, 0, 0)");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, width, height);

    for (const s of stars) {
      const twinkle = reduceMotion
        ? s.baseAlpha
        : s.baseAlpha * (0.6 + 0.4 * Math.sin(time * s.twinkleSpeed + s.twinklePhase));
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(234, 246, 255, ${twinkle})`;
      ctx.fill();

      if (!reduceMotion) {
        s.y += s.drift;
        if (s.y < 0) s.y = height;
        if (s.y > height) s.y = 0;
      }
    }

    animId = requestAnimationFrame(draw);
  }

  resize();
  window.addEventListener("resize", resize);
  animId = requestAnimationFrame(draw);

  document.addEventListener("visibilitychange", () => {
    if (document.hidden && animId) {
      cancelAnimationFrame(animId);
      animId = null;
    } else if (!document.hidden && !animId) {
      animId = requestAnimationFrame(draw);
    }
  });
})();
