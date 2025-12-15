function setDayNight(sunrise, sunset) {
  const now = Date.now() / 1000;
  document.body.className =
    now > sunrise && now < sunset ? "day" : "night";

  document.getElementById("greeting").innerText =
    document.body.className === "day"
      ? "Good Day ☀️"
      : "Good Evening 🌙";
}

