# Retro Mac Portfolio (Astro + Tailwind)

Portfolio profesional minimalista con estética Macintosh System 6/7/8 “Platinum”. Optimizado para claridad, rendimiento y accesibilidad.

Requisitos
- Node.js 18+
- npm 9+

Instalación
- npm install
- npm run dev

Scripts
- npm run dev: entorno de desarrollo
- npm run build: build de producción (dist/)
- npm run preview: previo al deploy
- npm run deploy:gh: publica dist/ a GitHub Pages (requiere gh-pages y permisos)

Tecnologías
- Astro 4
- Tailwind CSS (sin base
- CSS personalizado retro (src/styles/retro.css)

Estructura
- src/pages/index.astro: Home con Hero, About, Skills y Contact
- src/components/: MenuBar, Window, IconButton, Divider, ToggleRetro
- src/layouts/Base.astro: layout global + metadatos
- public/fonts/: fuentes Chicago-like y VT323 (coloca tus archivos .woff2)
- public/icons/: íconos pixelados SVG
- public/textures/: patrones (dithering)

Personalización
- Edita src/pages/index.astro con tu nombre, bio y enlaces.
- Reemplaza /public/fonts/ChicagoFLF.woff2 y /public/fonts/VT323.woff2 por tus archivos.
- Ajusta colores/relieves en src/styles/retro.css y tailwind.config.cjs.

Accesibilidad
- Navegable por teclado: menús con hover/focus y Escape.
- :focus-visible visible y contraste AA.
- Respeta prefers-reduced-motion.

SEO
- Edita título/descripcion en Base.astro.
- Añade /public/og.png si deseas una imagen OG.

Modo oscuro y retro extra
- Usa el ToggleRetro para activar scanlines/dithering y dark retro.
- Preferencias se persisten en localStorage.

Deploy
Vercel:
- Conecta el repo en Vercel. Build Command: npm run build. Output: dist

GitHub Pages:
- Configura las variables de entorno (opcional):
  - DEPLOY_ENV=gh
  - SITE_URL=https://<tu-usuario>.github.io/<repo>/
  - BASE_PATH=/<repo>/
- npm run build
- npm run deploy:gh
- En Settings > Pages, selecciona la rama y carpeta /root.

Licencias de fuentes/íconos
- Incluye solo fuentes e íconos con licencia compatible. Este proyecto referencia nombres genéricos; añade tus propios archivos.
