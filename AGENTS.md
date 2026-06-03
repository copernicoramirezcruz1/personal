# AGENTS.md — Copérnico Portfolio

## Comandos
- `npm run dev` — servidor de desarrollo Vite
- `npm run build` — build a `dist/`
- `npm run preview` — previsualizar build localmente
- No hay scripts de test, lint ni typecheck configurados

## Stack
- **Vue 3** con `<script setup>` SFCs, sin TypeScript, sin Vue Router, sin Pinia
- **Vite 8** + `@vitejs/plugin-vue`
- **Tailwind CSS 4** via `@tailwindcss/vite` (no PostCSS cli, no tailwind.config — la configuración del tema está en `src/style.css` con `@theme`)
- **Path alias**: `@` → `src/` (configurado en `vite.config.js`)
- **SPA pura**: una sola página con secciones divididas en componentes bajo `src/components/sections/`, navegación por scroll a anchors

## Arquitectura
- `src/main.js` — entry point
- `src/App.vue` — layout raíz con scroll reveal inline
- `src/data/cv.js` — **toda la data** del portafolio (personal, skills, experiencia, proyectos)
- `src/composables/` — `useDarkMode`, `useScrollReveal`, `useIntersectionObserver`
- `src/components/layout/` — AppHeader, AppFooter, LoadingScreen, CustomCursor
- `src/components/ui/` — componentes reutilizables (ProjectCard, SkillBar, TimelineItem, etc.)
- `public/` — assets estáticos (imágenes, favicon, CV PDF)
- El contenido está en **español**

## Dark mode
- Por defecto `dark`, persiste en `localStorage.theme`
- Composable `useDarkMode` en `src/composables/useDarkMode.js`
- Script inline en `index.html` para evitar flash

## Scroll reveal
- Implementación manual: clase `.reveal` con opacidad/transform, se añade `.visible` vía scroll listener en `App.vue`
- Delays predefinidos: `.reveal-delay-1` a `.reveal-delay-5`

## Deploy
- Desplegado en **Vercel** con SPA rewrites (`vercel.json`)
- `.vercel/` excluido en `.gitignore`

## Notas
- No hay generación de código, migraciones, ni servicios externos requeridos para desarrollo
- El CV en PDF está en `public/cv.pdf`
