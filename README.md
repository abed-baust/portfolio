# Portfolio (Vue 3 + Vite)

- Mobile-first responsive UI
- GitHub Pages–friendly routing using **createWebHashHistory()** so `/portfolio/#/projects` always loads
- Base set to `/portfolio/` in `vite.config.js` for correct asset paths on `abed-baust.github.io/portfolio`

## Local dev
```bash
npm i
npm run dev
```

## Build
```bash
npm run build
```

Artifacts will be in `dist/`. Deploy the `dist/` folder to the `gh-pages` branch, or configure GitHub Pages to use that branch.

> If you prefer history mode, add a `404.html` that copies `index.html` and use `createWebHistory('/portfolio/')`, but hash mode is simplest for Pages.
