# Orchard Code Test

A modular Webpack project featuring a dynamic **Cards Block** and **Gallery Block** with:

- JSON-driven content for cards
- Clickable gallery & card images with accessible lightbox
- Responsive grid layouts
- Semantic links in cards with console logging
- Modular CSS & JS
- Accessible modal using ARIA roles and keyboard support

---

## 🛠 Setup Instructions

1. **Clone the repository**

```bash
git clone https://github.com/jemworth/orchard.git
cd orchard
```

2. **Install dependencies**

```bash
npm install
```

3. **Run development server**
- Before run, remove this line in webpack.common.js `publicPath: '/orchard/',`.

```bash
npm run dev
```

- Opens `http://localhost:3000/` with hot-reloading.

4. **Build for production**

```bash
npm run build
```

- Compiled files will be output to `dist/`.
- Minified JS and CSS ready for deployment.

---

## 📂 Project Structure

```
orchard/
├── dist/                  # Webpack build output
├── src/                   # Source files
│   ├── components/
│   │   └── lightbox.js    # Accessible lightbox modal
│   ├── data/
│   │   └── cards.json     # JSON content for cards
│   ├── images/
│   │   ├── taste-colours-red.webp
│   │   ├── taste-colours-green.webp
│   │   ├── taste-colours-white.webp
│   │   ├── cooking1.webp
│   │   ├── cooking2.webp
│   │   └── cooking3.webp
│   ├── pages/
│   │   └── home.js        # Home page JS
│   │   └── home.css       # Home page CSS
│   ├── styles/
│   │   ├── main.css
│   ├── app.js             # Entry point
│   └── index.html         # Base HTML template
├── package.json
├── webpack.config.js
└── README.md
```

---

## 🖼 Features

### Gallery Block
- Clicking any image opens a modal/lightbox.
- Modal has a close button, ESC key support, and ARIA roles (`role="dialog"`, `aria-modal`, `aria-labelledby`, `aria-describedby`).

### Cards Block
- Cards use semantic `<a>` links with valid `href`.
- Links open in a new tab using `target="_blank"` and `rel="noopener noreferrer"`.
- Clicking a card link logs the click to the console.
- Card images are also clickable and open in the lightbox.

### Responsive Design
- Cards grid: 1 → 2 → 3 columns depending on viewport width.
- Gallery grid adapts to screen size with hover effects.

---

## 🌐 Hosting

You can host this project using **GitHub Pages** or **Netlify**:

- **GitHub Pages:** Push your `dist` folder or use `gh-pages` branch.
- **Netlify:** Drag & drop the `dist` folder or link your GitHub repository for automatic deploys.

**Example hosted URL:**  
[https://jemworth.github.io/orchard/](https://jemworth.github.io/orchard/)

---

## ⚡ Notes / Code Quality

- Modular JS and CSS for maintainability
- Lightbox in `components/lightbox.js`
- Cards and gallery rendered dynamically from JSON
- Fully accessible modal with proper ARIA roles
- Meaningful comments in CSS and JS explain logic
- Consistent naming and formatting throughout