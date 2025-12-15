const API_KEY = "9fdc9f90b85c1245e1f69f334725084f";

async function fetchWeather(city, unit) {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${API_KEY}`
  );
  return res.json();
}

async function fetchHourly(lat, lon, unit) {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=${unit}&appid=${API_KEY}`
  );
  return res.json();
}

async function fetchWeekly(lat, lon, unit) {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&units=${unit}&appid=${API_KEY}`
  );
  return res.json();
}
