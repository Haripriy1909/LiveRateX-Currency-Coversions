# 💱 LiveRateX - Currency Coversions

**LiveRateX** is a modern **Currency Converter and Exchange Rate Dashboard** built using **React.js, Tailwind CSS, GSAP animations, and ExchangeRate API**.
The application allows users to convert currencies in real-time and visualize currency trends with an interactive UI.

---

# 🚀 Features

### 💱 Currency Converter

* Convert currencies instantly using **live exchange rates**.
* Supports multiple currencies like **USD, EUR, INR, GBP, JPY, AUD, CAD, CNY, KRW**.
* Simple and user-friendly interface.

### 📊 Live Exchange Rate Dashboard

* Displays exchange rates in **modern currency cards**.
* Shows **live currency trends** using a dynamic line chart.
* Rates update automatically every **5 seconds**.

### 🔄 Currency Swap

* Swap **From** and **To** currencies instantly with one click.

### 🕓 Conversion History

* Stores the **last 10 currency conversions**.
* Shows conversion rate and time of conversion.

### 🎨 Smooth Animations

* Uses **GSAP** for smooth UI animations and transitions.

### 📱 Responsive Design

* Fully responsive interface built with **Tailwind CSS**.
* Works across **mobile, tablet, and desktop devices**.

---

# 🛠️ Technologies Used

## ⚛️ React.js

React.js is used to build the application UI using **component-based architecture**.

Key React features used:

* Functional Components
* React Hooks (`useState`, `useEffect`)
* Dynamic rendering
* State management

---

## 🎨 Tailwind CSS

Tailwind CSS is used for modern UI design.

Benefits:

* Utility-first CSS framework
* Fast styling
* Fully responsive layouts
* Clean and minimal design

---

## ✨ GSAP (GreenSock Animation Platform)

GSAP is used for creating smooth and high-performance animations.

Examples:

* Page load animations
* Smooth UI transitions
* Interactive element effects

---

## 🌐 ExchangeRate API

The application fetches **real-time currency exchange rates** using the ExchangeRate API.

API Endpoint used:

```
https://api.exchangerate-api.com/v4/latest/{BASE_CURRENCY}
```

Example request:

```
https://api.exchangerate-api.com/v4/latest/USD
```

Example API response:

```
{
 "base": "USD",
 "rates": {
   "EUR": 0.85,
   "INR": 83.20,
   "GBP": 0.73
 }
}
```

The application uses these rates to calculate currency conversions dynamically.

---

# 📊 Live Chart Feature

The project includes a **custom SVG-based live chart**.

Features:

* Displays **USD → INR trend**
* Stores the **last 50 exchange rate values**
* Updates every **5 seconds**
* Shows real-time currency movement visually

---

# ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```
git clone https://github.com/yourusername/LiveRateX-Currency-Coversions.git
```

### 2️⃣ Navigate to project directory

```
cd LiveRateX-Currency-Coversions
```

### 3️⃣ Install dependencies

```
npm install
```

### 4️⃣ Start development server

```
npm run dev
```

Application will run at:

```
http://localhost:5173
```

---

# 🔮 Future Improvements

* Add **real-time WebSocket currency updates**
* Add **multi-currency comparison charts**
* Add **currency favorites**
* Add **dark/light theme toggle**
* Support **150+ global currencies**

---

# 👨‍💻 Author

Developed by **Your Name**

---

# 📄 License

This project is licensed under the **MIT License**.
