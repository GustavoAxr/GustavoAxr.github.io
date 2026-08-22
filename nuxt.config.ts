// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "@nuxtjs/color-mode",
    "@nuxtjs/i18n",
    // Módulo inline (después de shadcn-nuxt): shadcn registra `components/ui`
    // con `extensions: []`, que Nuxt interpreta como "extensiones por defecto"
    // (incluye .ts). Eso hacía que `button/index.ts` se escaneara como componente
    // con el nombre de su carpeta ("Button") y chocara con `Button.vue`. Aquí lo
    // restringimos a solo `.vue`, así el barrel `index.ts` deja de ser escaneado.
    (
      _options: Record<string, unknown>,
      nuxt: { hook: (name: string, cb: (dirs: unknown[]) => void) => void },
    ) => {
      nuxt.hook("components:dirs", (dirs: unknown[]) => {
        for (const dir of dirs) {
          if (
            typeof dir === "object" &&
            dir !== null &&
            typeof (dir as { path?: string }).path === "string" &&
            (dir as { path: string }).path.endsWith("components/ui")
          ) {
            (dir as { extensions?: string[] }).extensions = ["vue"];
          }
        }
      });
    },
  ],

  css: ["~/assets/css/main.css"],

  // Bilingüe: español (por defecto, en `/`) e inglés (en `/en/...`). Los textos
  // viven en bloques <i18n> de cada componente/página (autocontenidos). No se
  // redirige por idioma del navegador: ES es el idioma base y EN se elige con
  // el selector del header.
  i18n: {
    strategy: "prefix_except_default",
    defaultLocale: "es",
    locales: [
      { code: "es", language: "es-MX", name: "Español" },
      { code: "en", language: "en-US", name: "English" },
    ],
    detectBrowserLanguage: false,
    bundle: { optimizeTranslationDirective: false },
  },

  // Configuración en runtime. `public` queda expuesto al cliente (el sitio es
  // estático, así que el valor se "hornea" en build). Por defecto apunta al
  // backend de producción; para desarrollo local define NUXT_PUBLIC_API_BASE
  // (p. ej. http://localhost:3003) en tu .env.
  runtimeConfig: {
    public: {
      // Backend NestJS (microservicios-web) — sin barra final (las rutas se
      // arman como `${apiBase}/email/send`, etc.).
      apiBase:
        process.env.NUXT_PUBLIC_API_BASE || "https://api.codegahp.com",
    },
  },

  // SEO Global Configuration
  app: {
    head: {
      htmlAttrs: {
        lang: "es-MX",
      },
      title: "CODEGAHP | Desarrollo de Software Profesional en México",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Somos una empresa de desarrollo de software en México especializada en arquitectura limpia, aplicaciones web escalables y soluciones empresariales con Vue.js, Nuxt, Laravel y Java.",
        },
        {
          name: "keywords",
          content:
            "desarrollo de software, desarrollo web, aplicaciones empresariales, Vue.js, Nuxt, Laravel, Java, México, Ciudad del Carmen, Campeche, arquitectura limpia, SOLID",
        },
        { name: "author", content: "CODEGAHP" },
        { name: "robots", content: "index, follow" },
        { name: "theme-color", content: "#2DCE9A" },

        // Open Graph / Facebook
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: "CODEGAHP" },
        {
          property: "og:title",
          content: "CODEGAHP | Desarrollo de Software Profesional en México",
        },
        {
          property: "og:description",
          content:
            "Desarrollamos soluciones de software escalables y robustas con arquitectura limpia. Transformamos ideas en productos digitales.",
        },
        { property: "og:locale", content: "es_MX" },
        { property: "og:url", content: "https://codegahp.com" },
        {
          property: "og:image",
          content: "https://codegahp.com/img/presentacion.jpg",
        },
        { property: "og:image:width", content: "1920" },
        { property: "og:image:height", content: "1025" },

        // Twitter Cards
        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "twitter:image",
          content: "https://codegahp.com/img/presentacion.jpg",
        },
        {
          name: "twitter:title",
          content: "CODEGAHP | Desarrollo de Software Profesional",
        },
        {
          name: "twitter:description",
          content:
            "Desarrollamos soluciones de software escalables y robustas con arquitectura limpia.",
        },
      ],
      link: [
        // Favicons cuadrados (Google exige cuadrado y elige el mayor válido).
        // El .ico anterior era 256×250 (no cuadrado) y por eso Google mostraba
        // el "mundito" genérico en vez del logo.
        { rel: "icon", type: "image/svg+xml", href: "/logo-code.svg" },
        { rel: "icon", type: "image/png", sizes: "96x96", href: "/favicon-96x96.png" },
        { rel: "icon", type: "image/png", sizes: "192x192", href: "/favicon-192x192.png" },
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
        // Web App Manifest (PWA / instalable; Lighthouse marcaba su ausencia).
        { rel: "manifest", href: "/site.webmanifest" },
        // El canonical se define por página en app.vue (antes era fijo a la
        // home y hacía que Google tratara todas las páginas como duplicados).
        // (Se quitaron los preconnect a Google Fonts: el sitio usa fuentes del
        // sistema, no cargaba ninguna fuente web y solo ensuciaban la red.)
      ],
      // Google Analytics (gtag.js) — se carga en todas las páginas.
      script: [
        {
          src: "https://www.googletagmanager.com/gtag/js?id=G-VNE6EN02MK",
          async: true,
        },
        {
          innerHTML:
            "window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-VNE6EN02MK');",
        },
      ],
    },
  },

  // Performance optimizations
  experimental: {
    payloadExtraction: true,
  },

  // Nitro optimizations for faster loading
  nitro: {
    // Pre-renderiza TODAS las rutas a HTML estático (Google ve el contenido).
    prerender: {
      crawlLinks: true,
      routes: ["/"],
      failOnError: false,
    },
    compressPublicAssets: true,
    minify: true,
  },

  // Vite optimizations
  vite: {
    build: {
      cssMinify: true,
      minify: "terser",
    },
  },

  colorMode: {
    classSuffix: "",
    preference: "system",
    fallback: "light",
  },
  shadcn: {
    // Prefijo "Ui" para los componentes que shadcn-nuxt registra desde su
    // barrel `index.ts` (p. ej. UiButton). Evita la colisión con el componente
    // auto-importado `Button` (de Button.vue). No afecta los imports explícitos
    // `import { Button } from "@/components/ui/button"` (son imports ESM del
    // archivo, no del registro de auto-componentes).
    prefix: "Ui",
    componentDir: "./components/ui",
  },
});
