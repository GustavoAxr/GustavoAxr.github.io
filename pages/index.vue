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

const { t, locale } = useI18n({ useScope: "local" });

// SEO Meta Tags para la página principal
useSeoMeta({
  title: t("seo.title"),
  description: t("seo.description"),
  ogTitle: t("seo.ogTitle"),
  ogDescription: t("seo.ogDescription"),
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
              availableLanguage: ["es", "en"],
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
            inLanguage: locale.value === "en" ? "en-US" : "es-MX",
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
              {{ t("hero.titleLine1") }}<br />
              {{ t("hero.titleLine2") }}
            </h1>

            <p
              class="mt-6 text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              {{ t("hero.subtitle") }}
            </p>

            <div
              class="mt-8 flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4"
            >
              <NuxtLinkLocale to="/servicios/lidia">
                <Button
                  variant="bare"
                  size="lg"
                  class="bg-primary text-white hover:bg-primary-dark text-lg h-12 px-8 shadow-lg shadow-primary/25"
                >
                  {{ t("hero.ctaLidia") }}
                </Button>
              </NuxtLinkLocale>

              <NuxtLinkLocale to="/contacto">
                <Button
                  variant="outline"
                  size="lg"
                  class="border-primary/40 text-primary hover:bg-primary/10 text-lg h-12 px-8 backdrop-blur-sm bg-transparent"
                >
                  {{ t("hero.ctaContact") }}
                </Button>
              </NuxtLinkLocale>
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
              >{{ t("hero.socialProof") }}
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

<i18n lang="json">
{
  "es": {
    "seo": {
      "title": "Inicio - CODEGAHP | Desarrollo de software y automatizaciones perpetuas",
      "description": "Agencia de desarrollo, Inteligencia artificial y automatizaciones, hardware y más.",
      "ogTitle": "CODEGAHP | Desarrollo de Software Profesional",
      "ogDescription": "Desarrollamos soluciones de software escalables y robustas. Transformamos ideas en productos digitales que impulsan el crecimiento de tu negocio."
    },
    "hero": {
      "titleLine1": "Software que aguanta",
      "titleLine2": "el trabajo real",
      "subtitle": "Desarrollo web, software y automatización para tu negocio.",
      "ctaLidia": "Conoce LIDIA",
      "ctaContact": "Hablemos",
      "socialProof": ", nuestra app de trazabilidad ganadera offline, está en acceso anticipado. También hacemos software y soporte a la medida."
    }
  },
  "en": {
    "seo": {
      "title": "Home - CODEGAHP | Software development and perpetual automations",
      "description": "Development agency, artificial intelligence and automations, hardware and more.",
      "ogTitle": "CODEGAHP | Professional Software Development",
      "ogDescription": "We build scalable, robust software solutions. We turn ideas into digital products that drive your business growth."
    },
    "hero": {
      "titleLine1": "Software that holds up",
      "titleLine2": "to real work",
      "subtitle": "Web development, software and automation for your business.",
      "ctaLidia": "Meet LIDIA",
      "ctaContact": "Let's talk",
      "socialProof": ", our offline livestock traceability app, is in early access. We also build custom software and support."
    }
  }
}
</i18n>
