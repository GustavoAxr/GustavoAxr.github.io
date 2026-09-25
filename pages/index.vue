<script setup lang="ts">
import { Button } from "@/components/ui/button";
import BackgroundLogo from "@/components/BackgroundLogo.vue";
import HeroShowcase from "@/components/landing/HeroShowcase.vue";
import AboutHero from "@/components/landing/AboutHero.vue";
import LidiaSpotlight from "@/components/landing/LidiaSpotlight.vue";
import CloccBanner from "@/components/landing/CloccBanner.vue";
import BookingSection from "@/components/landing/BookingSection.vue";

const { t, locale } = useI18n({ useScope: "local" });

// Frase giratoria del titular ("Software que aguanta ___"), sincronizada con
// el escenario del hero: 0 trabajo real, 1 LIDIA, 2 Clocc, 3 servicios.
// Al pasar el cursor por un producto del escenario, la frase lo sigue.
const phrases = computed(() => [
  t("hero.titleLine2"),
  t("hero.rot1"),
  t("hero.rot2"),
  t("hero.rot3"),
]);
const gradients = [
  "from-primary to-circuit-cyan",
  "from-green-500 to-lime-400",
  "from-sky-500 to-green-500",
  "from-circuit-cyan to-primary",
];
const active = ref(0);
let paused = false;
let rotTimer: ReturnType<typeof setInterval> | undefined;

function onStageHover(i: number | null) {
  paused = i !== null;
  if (i !== null) active.value = i;
}

// Producto resaltado en el botón doble (LIDIA | Clocc): sigue a la frase
// cuando habla de uno de los dos y conserva el último en las demás.
const productActive = ref(1);
watch(active, (v) => {
  if (v === 1 || v === 2) productActive.value = v;
});

onMounted(() => {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  rotTimer = setInterval(() => {
    if (!paused) active.value = (active.value + 1) % phrases.value.length;
  }, 3000);
});
onBeforeUnmount(() => clearInterval(rotTimer));

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
            <!-- Titular con frase giratoria (el texto completo va en sr-only
                 para lectores de pantalla y buscadores) -->
            <h1
              class="text-[2.5rem] sm:text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.05]"
            >
              <span class="sr-only"
                >{{ t("hero.titleLine1") }} {{ t("hero.titleLine2") }}</span
              >
              <span aria-hidden="true" class="block">{{
                t("hero.titleLine1")
              }}</span>
              <span
                aria-hidden="true"
                class="relative block h-[1.25em] overflow-hidden"
              >
                <Transition name="hero-rot" mode="out-in">
                  <span
                    :key="active"
                    class="block whitespace-nowrap bg-gradient-to-r bg-clip-text pb-[0.12em] leading-[1.1] text-transparent"
                    :class="gradients[active]"
                    >{{ phrases[active] }}</span
                  >
                </Transition>
              </span>
            </h1>

            <p
              class="mt-6 text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              {{ t("hero.subtitle") }}
            </p>

            <div
              class="mt-8 flex flex-col sm:flex-row sm:flex-wrap items-center lg:items-start justify-center lg:justify-start gap-3"
            >
              <!-- Botón doble de productos: el indicador se desliza al que
                   menciona la frase del titular; al pasar el cursor lo sigue -->
              <div
                class="relative grid w-full grid-cols-2 rounded-[5px] border border-primary/30 bg-white/60 p-1 backdrop-blur-sm sm:w-auto dark:bg-slate-900/40"
              >
                <span
                  class="absolute inset-y-1 left-1 w-[calc(50%-4px)] rounded-[4px] bg-primary shadow-lg shadow-primary/25 transition-transform duration-500 ease-out"
                  :class="productActive === 2 ? 'translate-x-full' : ''"
                  aria-hidden="true"
                ></span>
                <NuxtLinkLocale
                  to="/servicios/lidia"
                  class="relative z-10 flex h-[38px] items-center justify-center gap-1.5 whitespace-nowrap px-3 text-sm font-semibold transition-colors duration-300 sm:gap-2 sm:px-5 sm:text-base"
                  :class="
                    productActive === 1
                      ? 'text-white dark:text-slate-950'
                      : 'text-slate-700 hover:text-primary dark:text-slate-200'
                  "
                  @pointerenter="onStageHover(1)"
                  @pointerleave="onStageHover(null)"
                >
                  <span class="grid h-6 w-6 place-items-center rounded bg-white p-0.5 shadow-sm">
                    <LidiaLogo class="h-full w-full" />
                  </span>
                  {{ t("hero.ctaLidia") }}
                </NuxtLinkLocale>
                <NuxtLinkLocale
                  to="/servicios/clocc"
                  class="relative z-10 flex h-[38px] items-center justify-center gap-1.5 whitespace-nowrap px-3 text-sm font-semibold transition-colors duration-300 sm:gap-2 sm:px-5 sm:text-base"
                  :class="
                    productActive === 2
                      ? 'text-white dark:text-slate-950'
                      : 'text-slate-700 hover:text-primary dark:text-slate-200'
                  "
                  @pointerenter="onStageHover(2)"
                  @pointerleave="onStageHover(null)"
                >
                  <span class="grid h-6 w-6 place-items-center rounded bg-white p-0.5 shadow-sm">
                    <CloccLogo class="h-full w-full" />
                  </span>
                  {{ t("hero.ctaClocc") }}
                </NuxtLinkLocale>
              </div>

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

            <!-- Prueba social honesta -->
            <p
              class="mt-8 text-sm text-slate-500 dark:text-slate-400 max-w-xl mx-auto lg:mx-0"
            >
              <strong class="font-semibold text-slate-700 dark:text-slate-300"
                >LIDIA</strong
              >
              {{ t("hero.socialProofAnd") }}
              <strong class="font-semibold text-slate-700 dark:text-slate-300"
                >Clocc</strong
              >{{ t("hero.socialProof") }}
            </p>
          </div>

          <!-- Escenario: núcleo CODEGAHP + LIDIA + Clocc + servicios -->
          <div class="animate-fade-in-up lg:animate-none">
            <HeroShowcase :active="active" @hover="onStageHover" />
          </div>
        </div>
      </div>
    </section>

    <!-- New Sections -->
    <AboutHero />
    <CloccBanner />
    <LidiaSpotlight />
    <BookingSection />
  </div>
</template>

<style scoped>
/* Cambio de la frase giratoria: sube desde abajo con desenfoque */
.hero-rot-enter-active,
.hero-rot-leave-active {
  transition:
    transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1),
    opacity 0.5s ease,
    filter 0.5s ease;
}
.hero-rot-enter-from {
  transform: translateY(70%);
  opacity: 0;
  filter: blur(8px);
}
.hero-rot-leave-to {
  transform: translateY(-70%);
  opacity: 0;
  filter: blur(8px);
}
</style>

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
      "rot1": "el campo",
      "rot2": "cada auditoría",
      "rot3": "tu día a día",
      "subtitle": "Desarrollo web, software y automatización para tu negocio.",
      "ctaLidia": "Conoce LIDIA",
      "ctaClocc": "Conoce Clocc",
      "ctaContact": "Hablemos",
      "socialProofAnd": "y",
      "socialProof": " son nuestros productos propios. También creamos software y soporte a la medida."
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
      "rot1": "in the field",
      "rot2": "to every audit",
      "rot3": "day after day",
      "subtitle": "Web development, software and automation for your business.",
      "ctaLidia": "Meet LIDIA",
      "ctaClocc": "Meet Clocc",
      "ctaContact": "Let's talk",
      "socialProofAnd": "and",
      "socialProof": " are our own products. We also build custom software and support."
    }
  }
}
</i18n>
