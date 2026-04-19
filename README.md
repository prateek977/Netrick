# 🎬 Netrick – Netflix-Inspired Movie App

Netrick is a **Netflix-style movie browsing web application** built with React.
It allows users to search for movies, explore trending content, and interact with a clean, modern UI.

🌐 **Live Demo:** https://netrick.netlify.app/

---

## 🚀 Features

* 🔍 Search movies and series in real-time
* 🎞️ Dynamic movie cards with posters
* ⭐ Featured banner (hero section)
* 🎥 “Play Now” & “More Info” actions
* 📱 Fully responsive design
* 🌙 Dark Netflix-inspired UI

---

## 🛠️ Tech Stack

* **Frontend:** React (Vite)

* **Styling:** CSS

* **Components Architecture**

  * `Navbar.jsx` – Top navigation bar
  * `Home.jsx` – Main landing page
  * `Row.jsx` – Movie row sections
  * `Card.jsx` – Individual movie cards
  * `App.jsx` – Root component

* **Deployment:** Netlify

---

## 📂 Project Structure

```bash
netrick/
├── public/
├── src/
│   ├── App.jsx
│   ├── Home.jsx
│   ├── Navbar.jsx
│   ├── Row.jsx
│   ├── Card.jsx
│   ├── main.jsx
│   ├── index.css
│   └── style.css
├── index.html
├── package.json
├── eslint.config.js
└── README.md
```

---

## ⚙️ Installation & Setup

```bash
git clone https://github.com/prateek977/Netrick.git
cd Netrick
npm install
npm run dev
```

---

## 🔌 API Integration

This project fetches movie data from an external API (e.g., TMDB or OMDb).

> ⚠️ You may need to add your own API key in the project.

Example:

```js
const API_KEY = "your_api_key_here";
```

---

## 🌍 Deployment

Deployed using **Netlify**.

To deploy your own version:

1. Push your repo to GitHub
2. Connect it to Netlify
3. Set build command:

   ```
   npm run build
   ```
4. Set publish directory:

   ```
   dist
   ```
5. Deploy 🚀

---

## ⚠️ Disclaimer

This project is for **educational purposes only**.

* It does **not host any copyrighted content**
* “Play Now” may redirect to third-party sources
* All media content belongs to respective owners

---

## 📸 Screenshots

Add your UI screenshots here 👇
*(homepage, search results, banner, etc.)*

---

## 🤝 Contributing

Feel free to contribute!

1. Fork the repo
2. Create a branch
3. Commit changes
4. Open a pull request

---

## 👨‍💻 Author

**Prateek Jaiswal**

GitHub: https://github.com/prateek977

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!
