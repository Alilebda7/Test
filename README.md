# 📖 Quran Verse of the Day – Web App

A simple, fast-loading HTML/JS website that displays a new **Qur'anic verse each day**, with the ability to **favorite** verses using local storage — no backend or database needed.

---

## 🌟 Features

- 🕋 **Verse of the Day**: Fetches a verse from a Qur’an API with both Arabic and English text.
- 📅 **Hijri & Gregorian Date Display**.
- 💡 **Right-to-left (RTL)** support for Arabic.
- ❤️ **Favorites Toggle**: Double-click the heart icon to save or remove a verse.
- 🗂️ **Favorites List Viewer**: View all saved verses inside a collapsible `<details>` section.
- 🌓 **Dark Mode** (Optional toggle if added).
- 🔒 **LocalStorage-based**: All data is saved in the browser — no account required.

---

## 🔧 How It Works

### Favorite a Verse

- Double-click the heart icon to save the currently displayed verse.
- The verse is saved with a **unique reference** like `(2:153)` — combining the surah and ayah number.
- If already saved, the next double-click removes it from favorites.

### View Saved Favorites

- Open the `<details>` section labeled **"⭐ Favorites"** to view your saved verses.
- Each item shows the reference, Arabic verse text, and a **🗑️ Remove** button.
- Removed items are instantly updated in both the list and local storage.

---

## 💻 Tech Stack

- **HTML + CSS + JavaScript**
- Uses `localStorage` for persistent favorites
- Optional icons via **Font Awesome** or any preferred icon library
- No external frameworks (e.g., no React or jQuery)

---
