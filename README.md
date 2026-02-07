# Masters Academy of Science

Website for the Masters Academy of Science project. Built with Vite + React + TypeScript, styled with Tailwind CSS, and uses Three.js via React Three Fiber.

## Requirements
- Node.js 18+ (recommended)
- npm 9+

## Getting Started
Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Deploy
This project is configured for GitHub Pages via `gh-pages`.

```bash
npm run deploy
```

Update the `homepage` field in `package.json` to match your GitHub Pages URL, for example:

```
https://<your-github-username>.github.io/masters-acadmy-of-science/
```

## Project Structure
- `public/` Static assets
- `src/` Application source
- `dist/` Production build output

## Tech Stack
- React 19 + TypeScript
- Vite 7
- Tailwind CSS 4
- React Three Fiber / Drei (Three.js)
- Chart.js + react-chartjs-2
- Framer Motion

## Notes
If you see deployment issues, confirm GitHub Pages is set to deploy from the `gh-pages` branch and that the `homepage` URL is correct.
