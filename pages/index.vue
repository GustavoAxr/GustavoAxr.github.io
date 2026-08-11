<script setup lang="ts">
import { ArrowRight } from "lucide-vue-next";
import { Button } from "@/components/ui/button";
import BackgroundLogo from "@/components/BackgroundLogo.vue";
import HeroBento from "@/components/landing/HeroBento.vue";
// Nota: Hero3DLogo y el eslogan lateral se retiraron; el bento ocupa ahora
// la columna derecha del hero.
import AboutHero from "@/components/landing/AboutHero.vue";
import LidiaBanner from "@/components/landing/LidiaBanner.vue";
import LidiaSpotlight from "@/components/landing/LidiaSpotlight.vue";
import BookingSection from "@/components/landing/BookingSection.vue";

// SEO Meta Tags para la página principal
useSeoMeta({
  title:
    "Inicio - CODEGAHP | Desarrollo de software y automatizaciones perpetuas",
  description:
    "Agencia de desarrollo, Inteligencia artificial y automatizaciones, hardware y más.",
  ogTitle:
    "CODEGAHP | Desarrollo de Software Profesional",
  ogDescription:
    "Desarrollamos soluciones de software escalables y robustas. Transformamos ideas en productos digitales que impulsan el crecimiento de tu negocio.",
  ogType: "website",
  twitterCard: "summary_large_image",
});

// Datos estructurados (JSON-LD): identifican la empresa ante Google y ayudan
// a los resultados enriquecidos / panel de conocimiento y a los sitelinks.
useHead({
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Organization",
            "@id": "https://codegahp.com/#organization",
            name: "CODEGAHP",
            url: "https://codegahp.com",
            logo: "https://codegahp.com/logo-code.svg",
            image: "https://codegahp.com/logo-code.svg",
            description:
              "Agencia de desarrollo de software. Aplicaciones web, software a la medida, hosting, dominios y LIDIA (trazabilidad ganadera).",
            email: "contacto@codegahp.com",
            telephone: "+52-938-106-5606",
            foundingLocation: "Ciudad del Carmen, Campeche, México",
            areaServed: "MX",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Ciudad del Carmen",
              addressRegion: "Campeche",
              addressCountry: "MX",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+52-938-106-5606",
              email: "contacto@codegahp.com",
              contactType: "customer service",
              areaServed: "MX",
              availableLanguage: ["es"],
            },
            sameAs: [
              "https://facebook.com/codegahp",
              "https://instagram.com/codegahp",
              "https://linkedin.com/company/codegahp",
              "https://x.com/codegahp",
            ],
          },
          {
            "@type": "WebSite",
            "@id": "https://codegahp.com/#website",
            url: "https://codegahp.com",
            name: "CODEGAHP",
            inLanguage: "es-MX",
            publisher: { "@id": "https://codegahp.com/#organization" },
          },
        ],
      }),
    },
  ],
});

</script>

<template>
  <div class="flex flex-col relative">
    <!-- Fondo decorativo -->
    <BackgroundLogo />

    <!-- Hero a dos columnas (texto + bento), estilo SaaS moderno -->
    <section
      id="hero-section"
      class="min-h-[calc(100svh-5rem)] py-12 flex flex-col justify-center relative z-10 overflow-hidden"
    >
      <div class="container max-w-7xl mx-auto px-4 relative z-10 w-full">
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-10 items-center">
          <!-- Columna de texto -->
          <div class="text-center lg:text-left animate-fade-in-up">
            <h1
              class="text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.05]"
            >
              Software que aguanta<br />
              el trabajo real
            </h1>

            <p
              class="mt-6 text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              Desarrollo web, software y automatización para tu
              negocio.
            </p>

            <div
              class="mt-8 flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4"
            >
              <NuxtLink to="/servicios/lidia">
                <Button
                  size="lg"
                  class="bg-primary hover:bg-primary-dark text-white dark:text-slate-950 text-lg h-12 px-8 shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all transform hover:-translate-y-0.5"
                >
                  Conoce LIDIA
                  <ArrowRight class="w-5 h-5 ml-2" />
                </Button>
              </NuxtLink>

              <NuxtLink to="/contacto">
                <Button
                  variant="outline"
                  size="lg"
                  class="border-primary/40 text-primary hover:bg-primary/10 text-lg h-12 px-8 backdrop-blur-sm bg-transparent"
                >
                  Hablemos
                </Button>
              </NuxtLink>
            </div>

            <!-- Marcador de lanzamiento oficial en tiendas -->
            <div class="mt-6 flex justify-center lg:justify-start">
              <LaunchBadge />
            </div>

            <!-- Prueba social honesta -->
            <p
              class="mt-8 text-sm text-slate-500 dark:text-slate-400 max-w-xl mx-auto lg:mx-0"
            >
              <strong class="font-semibold text-slate-700 dark:text-slate-300"
                >LIDIA</strong
              >, nuestra app de trazabilidad ganadera offline, está en acceso
              anticipado. También hacemos software y soporte a la medida.
            </p>
          </div>

          <!-- Columna bento -->
          <div class="animate-fade-in-up lg:animate-none">
            <HeroBento />
          </div>
        </div>
      </div>
    </section>

    <!-- New Sections -->
    <AboutHero />
    <LidiaBanner />
    <LidiaSpotlight />
    <BookingSection />
  </div>
</template>
