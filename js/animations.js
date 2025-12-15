const effects = document.getElementById("weather-effects");

/* =========================
   CLEAR EFFECTS
========================= */
function clearEffects() {
  effects.innerHTML = "";
  stopSounds();
}

/* =========================
   SOUND CONTROL
========================= */
const rainSound = document.getElementById("rainSound");

function stopSounds() {
  if (rainSound) {
    rainSound.pause();
    rainSound.currentTime = 0;
  }
}

/* =========================
   RAIN
========================= */
function rain() {
  clearEffects();
  if (rainSound) rainSound.play();

  for (let i = 0; i < 160; i++) {
    const drop = document.createElement("div");
    drop.className = "rain-drop";
    drop.style.left = Math.random() * 100 + "%";
    drop.style.animationDelay = Math.random() + "s";
    effects.appendChild(drop);
  }
}

/* =========================
   SNOW
========================= */
function snow() {
  clearEffects();

  for (let i = 0; i < 90; i++) {
    const flake = document.createElement("div");
    flake.className = "snowflake";
    flake.innerText = "❄";
    flake.style.left = Math.random() * 100 + "%";
    flake.style.animationDelay = Math.random() * 5 + "s";
    effects.appendChild(flake);
  }
}

/* =========================
   FOG
========================= */
function fog() {
  clearEffects();
  const fogLayer = document.createElement("div");
  fogLayer.className = "fog";
  effects.appendChild(fogLayer);
}

/* =========================
   THUNDER
========================= */
function thunder() {
  rain();

  document.body.classList.add("flash");
  setTimeout(() => {
    document.body.classList.remove("flash");
  }, 200);
}

/* =========================
   STARS (NIGHT)
========================= */
function createStars() {
  for (let i = 0; i < 80; i++) {
    const star = document.createElement("div");
    star.className = "star";
    star.style.top = Math.random() * 100 + "%";
    star.style.left = Math.random() * 100 + "%";
    star.style.animationDelay = Math.random() * 2 + "s";
    document.body.appendChild(star);
  }
}

function removeStars() {
  document.querySelectorAll(".star").forEach(s => s.remove());
}
