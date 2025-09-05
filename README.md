# 🏡 Neon Estate – Real Estate App

A modern **real estate listing app** built with **React + Vite**, where users can search and explore properties based on **location, price, type, and amenities**.  
This project demonstrates a clean UI, smooth animations, and an integrated interactive map using **Leaflet**.

---

## 📖 Project Overview
Neon Estate is designed to provide users with an intuitive property browsing experience.  
Users can **search, filter, and view detailed listings** complete with images, descriptions, prices, amenities, and agent contact info.  

The app also displays **similar/recommended listings** based on search criteria, helping users discover more relevant properties.

---

## ✨ Key Features
- 🔍 **Search properties** by location (city, ZIP code).  
- 💰 **Filter** by price range, property type (apartment, house, condo), and bedrooms/bathrooms.  
- 🏠 **Property details page**: photos, description, price, amenities, and contact info.  
- 🤝 **Similar/recommended listings** for better discovery.  
- 📱 **Responsive design** for both desktop and mobile devices.  
- 🗺 **Interactive map** integration with Leaflet (property location markers).  

---

## 🛠 Tech Stack
- **Frontend:** [React](https://react.dev/) + [Vite](https://vitejs.dev/)  
- **UI Framework:** [Tailwind CSS](https://tailwindcss.com/) + [HeadlessUI](https://headlessui.com/)  
- **Animations:** [React Spring](https://www.react-spring.dev/)  
- **Routing:** [React Router](https://reactrouter.com/)  
- **Maps API:** [Leaflet](https://leafletjs.com/)  
- **Runtime:** Node.js v24  

---

## 🚀 Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/Jrabara101/neon-estate.git
cd neon-estate

### 2. Install dependencies
```bash
npm install

### 3. Run the dev server
```bash
npm run dev

App will be available at http://localhost:5173

📂 Project Structure
neon-estate/
├── src/
│   ├── components/    # Reusable UI components (cards, navbar, map, etc.)
│   ├── layouts/       # Layout wrappers
│   ├── pages/         # Pages (Home, Listings, Property Detail, Agents)
│   ├── context/       # Context providers (favorites, app state)
│   ├── hooks/         # Custom React hooks
│   ├── utils/         # Helpers, constants, dummy data
│   ├── App.jsx        # App routes
│   └── main.jsx       # Entry point
├── index.html
├── tailwind.config.js
├── package.json
└── README.md

📸 Screenshots

