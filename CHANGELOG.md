# Proyecto: Portfolio Fullstack Senior — Copérnico Ramírez Cruz

## Stack

- **Framework:** Vue 3 (Composition API)
- **Bundler:** Vite
- **Estilos:** TailwindCSS v4
- **Utilidades:** @vueuse/core
- **Hosting:** Vercel

## URL de producción

**https://vue-03-three.vercel.app**

## Estructura del proyecto

```
vue_03/
├── index.html                          # SEO + Open Graph + Google Fonts
├── package.json
├── vercel.json                         # SPA rewrites para Vercel
├── vite.config.js                      # Aliases + TailwindCSS plugin
├── public/
│   ├── copernico.jpeg                  # Foto principal
│   ├── copernico_min.jpg               # Foto secundaria
│   ├── copernico_01.jpeg               # Foto terciaria
│   ├── cv.pdf                          # CV descargable
│   └── favicon.svg
└── src/
    ├── main.js
    ├── style.css                       # Tailwind + utilidades glassmorphism, glow, etc.
    ├── App.vue                         # Layout principal + IntersectionObserver reveal
    ├── data/
    │   └── cv.js                       # Datos extraídos del CV (personal, skills, experiencia, proyectos)
    ├── composables/
    │   ├── useIntersectionObserver.js   # Detección de visibilidad para animaciones
    │   ├── useScrollReveal.js           # Tracking del scroll
    │   └── useDarkMode.js              # Toggle modo oscuro con localStorage
    └── components/
        ├── layout/
        │   ├── AppHeader.vue           # Nav sticky glassmorphism + responsive
        │   ├── AppFooter.vue           # Footer con redes sociales
        │   ├── LoadingScreen.vue       # Spinner de carga inicial
        │   └── CustomCursor.vue        # Cursor personalizado (desktop)
        ├── sections/
        │   ├── HeroSection.vue         # Foto, typing effect, partículas, CTAs
        │   ├── AboutSection.vue        # Bio, stats animados, formación académica
        │   ├── SkillsSection.vue       # 6 categorías con barras de progreso
        │   ├── ExperienceSection.vue   # Timeline con 13 posiciones laborales
        │   ├── ProjectsSection.vue     # Cards con filtros por categoría
        │   └── ContactSection.vue      # Formulario + datos de contacto + redes
        └── ui/
            ├── SectionTitle.vue        # Título de sección reutilizable
            ├── AnimatedBackground.vue  # Partículas flotantes
            ├── SkillBar.vue            # Barra de progreso animada
            ├── StatCounter.vue         # Contador numérico animado
            ├── TimelineItem.vue        # Item de timeline profesional
            ├── SkillCard.vue           # Card de categoría de skills
            └── ProjectCard.vue         # Card de proyecto con tecnologías y links
```

## Features implementadas

- Modo oscuro con toggle persistente
- Cursor personalizado sutil (solo desktop)
- Loading screen animada al entrar
- Typing effect en el Hero para el título profesional
- Contadores animados con IntersectionObserver (36+ años, 200+ proyectos, etc.)
- Timeline interactiva con los 13 puestos laborales del CV
- Filtros de proyectos por categoría (Fullstack, Backend, Enterprise, IA)
- Barras de skill con animación y hover
- Glassmorphism, gradientes dinámicos, glow effects
- Reveal animations al hacer scroll
- Navegación sticky con smooth scrolling
- Completamente responsive mobile-first
- SEO básico: meta tags, Open Graph, descripción
- SPA routing configurado en Vercel con `vercel.json`

## Scripts

```bash
npm install          # Instalar dependencias
npm run dev          # Desarrollo local (http://localhost:5173)
npm run build        # Build de producción (output: dist/)
npm run preview      # Previsualizar build
```

## Despliegue en Vercel

```bash
vercel login         # Solo la primera vez
vercel --prod        # Desplegar a producción
```

## Datos del CV

Extraídos del PDF `curriculum copernico-imprimir.pdf` usando `pdftotext`:

- **Nombre:** Copérnico Ramírez Cruz
- **Profesión:** Ingeniero Informático
- **Email:** copernico_rc@hotmail.com
- **Teléfono:** +591 76106148
- **Ubicación:** Bolivia
- **Experiencia:** 1990 – presente (36+ años)
- **Idioma:** Español nativo, Mojeño Trinitario

### Skills agrupadas

| Categoría     | Tecnologías                                      |
|---------------|--------------------------------------------------|
| Frontend      | JavaScript, PHP, HTML/CSS, Diseño Responsive     |
| Backend       | Python, Django, PHP/Laravel, APIs RESTful        |
| Bases de Datos| PostgreSQL, Diseño relacional, SQL avanzado      |
| DevOps        | Git/GitHub, Linux, Control de versiones          |
| Herramientas  | Android Studio, C/C++, PIC, IoT                  |
| IA & Datos    | Redes Neuronales, Python + Keras, ML             |

### Experiencia laboral

1. Programador III — SENASAG Nacional (2022 - Presente)
2. Profesional en Administración de Sistemas — SENASAG Nacional (2022)
3. Docente Universitario — Universidad Privada Domingo Savio (2021)
4. Jefe de Unidad II Estadística — GAD Beni (2021)
5. Técnico Departamental de Sistemas — FPS (2013 - 2020)
6. Docente Universitario — Universidad Amazónica de Pando (2015 - 2020)
7. Técnico Departamental de Sistemas & Docente — FPS / UAB (2007 - 2012)
8. Gerente Propietario — Multiservicios La Solución (2005 - 2007)
9. Soporte Departamental de Sistemas — FPS (2001 - 2004)
10. Consultor Informático — ENLACE S.R.L. / ONG SEMILLA (1999 - 2001)
11. Gerente Propietario — DATA-SOFT (1997 - 1999)
12. Técnico en Radio y Televisión — Electrónica Central (1992 - 1996)
13. Operador de Computadoras — ONG SEMILLA (1990 - 1991)

### Formación académica

- Maestría en Innovación y Tecnología Educativa — UAGRM (en curso)
- Especialidad en Gestión del Aprendizaje — UAGRM
- Diplomado en Metodología de la Investigación Científica — UAP
- Diplomado en Educación Superior — UABJB
- Ingeniería Informática — UAGRM (1996)

## Fixes aplicados

1. **Bug HTML:** `<button>` cerrado con `</a>` en HeroSection.vue:106 — corregido a `</button>`
2. **Imágenes no visibles en Vercel:** Las fotos estaban en `src/assets/images/` (no accesibles públicamente). Se movieron a `public/` y se actualizaron las rutas en `src/data/cv.js`

## Notas

- Las imágenes referenciadas en `public/` son servidas como archivos estáticos.
- El CV descargable está en `public/cv.pdf`.
- Las redes sociales usan URLs placeholder que deben actualizarse con las cuentas reales.
