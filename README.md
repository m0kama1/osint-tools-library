# OSINT Tools Library

An interactive, searchable library of 150+ open-source intelligence tools organized into 27 categories — built for investigators, journalists, lawyers, cybersecurity researchers, and digital forensics specialists.

**Created by Mohamed Kamal**

---

## Features

- 150+ curated OSINT tools across 27 intelligence categories
- Live search across name, description, category, and tags
- Filter by pricing (Free / Freemium / Paid), difficulty, and platform
- Save favorites locally using localStorage
- Tool detail modal with use cases, tags, and direct links
- Copy tool URL button
- Grid and list view toggle
- Methodology guide for professional OSINT investigations
- Legal & ethical disclaimer
- Responsive design (desktop, tablet, mobile)
- Smooth animations with Framer Motion
- GitHub Pages deployment ready

---

## Tech Stack

- React 18
- Vite 5
- Tailwind CSS 3
- Framer Motion
- Lucide React
- React Router 6 (HashRouter for GitHub Pages)

---

## Installation & Local Development

```bash
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/osint-tools-library.git
cd osint-tools-library

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open in browser
# http://localhost:5173
```

---

## Build for Production

```bash
npm run build
# Output is in the /dist folder
```

---

## Deploy to GitHub Pages

```bash
# 1. Install gh-pages (already in devDependencies)
npm install

# 2. Deploy (builds and pushes to gh-pages branch)
npm run deploy
```

The site will be available at:
`https://YOUR_USERNAME.github.io/osint-tools-library/`

> **Note:** The Vite base is already configured as `/osint-tools-library/` in `vite.config.js`. If your repo name differs, update it there.

---

## How to Add New Tools

Open `src/data/tools.js` and add a new entry to the `tools` array:

```js
{
  id: "unique-tool-id",           // lowercase, hyphen-separated
  name: "Tool Name",
  category: "Username Search",    // must match a category in categories.js
  description: "What this tool does and why it's useful.",
  url: "https://example.com",
  pricing: "Free",                // "Free" | "Freemium" | "Paid"
  tags: ["tag1", "tag2"],
  useCases: ["Use case 1", "Use case 2"],
  difficulty: "Beginner",         // "Beginner" | "Intermediate" | "Advanced"
  platform: "Web",                // "Web" | "CLI" | "Desktop" | "API" | "Mobile" | etc.
},
```

### Available Categories

See `src/data/categories.js` for all 27 category IDs. Use the exact `id` string as the `category` value in your tool entry.

---

## How to Add a New Category

1. Open `src/data/categories.js`
2. Add a new entry:

```js
{
  id: "New Category Name",
  name: "New Category Name",
  icon: "IconName",         // any Lucide icon name (PascalCase)
  color: "bg-blue-600",     // Tailwind background color class
  light: "bg-blue-50 text-blue-700",
}
```

3. Add tools with `category: "New Category Name"` in `tools.js`

---

## Project Structure

```
osint-tools-library/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── BackToTop.jsx
│   │   ├── CategorySidebar.jsx
│   │   ├── DisclaimerBanner.jsx
│   │   ├── FilterPanel.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── SearchBar.jsx
│   │   ├── StatsSection.jsx
│   │   ├── ToolCard.jsx
│   │   └── ToolModal.jsx
│   ├── data/
│   │   ├── categories.js   ← category definitions & icons
│   │   └── tools.js        ← all OSINT tool entries (add new tools here)
│   ├── hooks/
│   │   └── useFavorites.js
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── AllTools.jsx
│   │   ├── Categories.jsx
│   │   ├── DisclaimerPage.jsx
│   │   ├── FavoritesPage.jsx
│   │   ├── Home.jsx
│   │   └── Methodology.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── README.md
```

---

## Legal Disclaimer

This library is provided for educational, research, cybersecurity, and lawful investigation purposes only. Users are responsible for complying with all applicable laws, platform policies, and ethical standards.

---

*Created by Mohamed Kamal*
