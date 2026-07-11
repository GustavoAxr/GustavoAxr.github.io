// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "shadcn-nuxt", "@nuxtjs/color-mode"],

  css: ["~/assets/css/main.css"],

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
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        // El canonical se define por página en app.vue (antes era fijo a la
        // home y hacía que Google tratara todas las páginas como duplicados).
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
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
    prefix: "",
    componentDir: "./components/ui",
  },
});
