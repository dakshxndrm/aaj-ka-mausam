# 🌦️ SkySense — A Living Weather Experience

> Not just a weather app.
> A calm, animated, real-time **weather experience** inspired by Google Weather & AccuWeather — built from scratch using **Vanilla JavaScript**.

SkySense doesn’t just *show* the weather.
It **feels** like the weather.

---

## ✨ Why SkySense?

Most weather apps:

* dump numbers
* feel static
* overload the screen

SkySense does the opposite:

* 🧠 **Content-first UI**
* 🌈 **Calm, colorful panels**
* 🌧️ **Weather-reactive animations**
* 🕒 **Real local & GMT time awareness**
* 🎯 **Zero framework magic — pure control**

Built intentionally without React at first — because **understanding > abstraction**.

---

## 🎥 Preview (What You’ll Notice Instantly)

* A **single, premium weather panel**
* Soft gradients that don’t hurt the eyes
* Rain that actually feels like rain
* Information that’s readable at a glance
* Smooth interactions (keyboard + mouse)
* Mobile-first design

This is how modern weather apps *should* feel.

---

## 🚀 Features

### 🌍 Core Weather

* Real-time weather data (OpenWeather API)
* City-based search
* °C / °F toggle
* Humidity & wind speed

### ⌨️ Smart Search

* Press **ENTER** to search
* **Live city suggestions** while typing
* Click a suggestion → instant results

### 🕒 Time Intelligence

* Local time of searched city
* GMT reference time
* Auto-updates with each search

### 🌧️ Weather Animations

* Rain animation (day & night visible)
* Effects don’t interfere with readability
* Performance-friendly DOM animations

### ⏱️ Forecasts

* Hourly forecast (scrollable)
* 7-day weekly forecast
* Clean, compact cards

### 🎨 UI / UX

* Colorful, modern weather panel
* Calm typography & spacing
* Mobile-friendly layout
* Content-first hierarchy

---

## 🛠️ Tech Stack

* **HTML5**
* **CSS3** (custom UI system, no Tailwind)
* **Vanilla JavaScript**
* **OpenWeather API**

> No frameworks.
> No UI libraries.
> Just the browser — fully understood.

---

## 🧠 Why Vanilla JavaScript?

This project intentionally starts without React because:

* Animations are better handled outside virtual DOM
* Weather effects need direct DOM control
* Fundamentals scale better than shortcuts

Frameworks come **after clarity**, not before.

---

## 📂 Project Structure

```
SkySense/
│
├── index.html
├── README.md
│
├── css/
│   └── style.css
│
└── js/
    ├── app.js
    ├── weather.js
    └── animations.js
```

Clean. Modular. Maintainable.

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/skysense-weather.git
cd skysense-weather
```

### 2️⃣ Get an API Key

* Visit 👉 [https://openweathermap.org](https://openweathermap.org)
* Create a free account
* Copy your API key

### 3️⃣ Add API Key

In `js/weather.js`:

```js
const API_KEY = "YOUR_API_KEY_HERE";
```

### 4️⃣ Run the App

* Open `index.html` with **Live Server**
* OR use:

```bash
python -m http.server
```

---

## 🧪 Keyboard Shortcuts

| Action      | Key           |
| ----------- | ------------- |
| Search      | Enter         |
| Change unit | Button toggle |
| Select city | Mouse / Click |

---

## 🎯 What This Project Demonstrates

* Real-world API handling
* Clean state management (without frameworks)
* Animation + UX balance
* Debugging skills
* UI sensibility
* Product thinking

This is not a tutorial clone —
this is **engineering with intent**.

---

## 🔮 Future Enhancements

* 📊 Temperature curve graph
* 🌈 Dynamic background per weather type
* 📱 PWA (installable app)
* ⚛️ React migration (planned)
* 🌍 Auto location detection

---

## 🧑‍💻 Author

**Daksh Mahera**
Frontend Developer • UI/UX Enthusiast

> Built with curiosity, patience, and a refusal to take shortcuts.

---

## ⭐ Final Note

If you’re reading this:

* You’re probably curious
* You probably care about clean UI
* You probably value fundamentals

Then SkySense was built for you.

Feel free to ⭐ the repo or fork it.
Weather deserves better software.
