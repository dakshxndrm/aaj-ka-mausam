const cityEl = document.getElementById("city");
const tempEl = document.getElementById("temperature");
const condEl = document.getElementById("condition");
const humEl = document.getElementById("humidity");
const windEl = document.getElementById("wind");

const hourlyEl = document.getElementById("hourly");
const weeklyEl = document.getElementById("weekly");

const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const unitToggle = document.getElementById("unitToggle");

const suggestionsEl = document.getElementById("suggestions");
const localTimeEl = document.getElementById("localTime");
const gmtTimeEl = document.getElementById("gmtTime");

const greetingEl = document.getElementById("greeting");
const dateText = document.getElementById("dateText");

let unit = "metric";
let currentCity = "Jaipur";

/* DATE + GREETING */
function updateHeader() {
  const now = new Date();
  dateText.innerText = now.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long"
  });

  const hour = now.getHours();
  greetingEl.innerText =
    hour < 12 ? "Good morning" :
    hour < 17 ? "Good afternoon" :
    "Good evening";
}

/* TIME */
function updateTime(offset) {
  const now = new Date();
  const gmt = new Date(now.getTime() + now.getTimezoneOffset() * 60000);
  const local = new Date(gmt.getTime() + offset * 1000);

  localTimeEl.innerText = local.toUTCString().slice(17,22) + " Local";
  gmtTimeEl.innerText = gmt.toUTCString().slice(17,22) + " GMT";
}

/* WEATHER */
async function loadWeather() {
  const data = await fetchWeather(currentCity, unit);

  cityEl.innerText = data.name;
  tempEl.innerText = Math.round(data.main.temp);
  condEl.innerText = data.weather[0].main;
  humEl.innerText = data.main.humidity;
  windEl.innerText = data.wind.speed;

  updateTime(data.timezone);

  clearEffects();
  if (data.weather[0].main.toLowerCase().includes("rain")) rain();

  loadHourly(data.coord.lat, data.coord.lon);
  loadWeekly(data.coord.lat, data.coord.lon);
}

/* EVENTS */
searchBtn.onclick = () => {
  currentCity = cityInput.value.trim();
  suggestionsEl.style.display = "none";
  loadWeather();
};

cityInput.addEventListener("keydown", e => {
  if (e.key === "Enter") {
    currentCity = cityInput.value.trim();
    suggestionsEl.style.display = "none";
    loadWeather();
  }
});

unitToggle.onclick = () => {
  unit = unit === "metric" ? "imperial" : "metric";
  unitToggle.innerText = unit === "metric" ? "°C" : "°F";
  loadWeather();
};

/* INIT */
updateHeader();
loadWeather();
