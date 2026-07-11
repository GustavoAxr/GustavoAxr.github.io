<script setup lang="ts">
import { ArrowRight, Sparkles } from "lucide-vue-next";
import { Button } from "@/components/ui/button";
import BackgroundLogo from "@/components/BackgroundLogo.vue";
import SparkLines from "@/components/SparkLines.vue";
import HeroBento from "@/components/landing/HeroBento.vue";
// Nota: Hero3DLogo y el eslogan lateral se retiraron; el bento ocupa ahora
// la columna derecha del hero.
import AboutHero from "@/components/landing/AboutHero.vue";
import WhatDefinesUs from "@/components/landing/WhatDefinesUs.vue";
import LidiaSpotlight from "@/components/landing/LidiaSpotlight.vue";
import BookingSection from "@/components/landing/BookingSection.vue";

// SEO Meta Tags para la página principal
useSeoMeta({
  title:
    "Inicio - CODEGAHP | Agencia de Desarrollo de Software en Ciudad del Carmen, Campeche",
  description:
    "Agencia de desarrollo de software en Ciudad del Carmen, Campeche.",
  ogTitle:
    "CODEGAHP | Desarrollo de Software Profesional",
  ogDescription:
    "Desarrollamos soluciones de software escalables y robustas. Transformamos ideas en productos digitales que impulsan el crecimiento de tu negocio.",
  ogType: "website",
  twitterCard: "summary_large_image",
});

// =====================================================
// TECNOLOGÍAS - Personaliza los colores y añade más aquí
// =====================================================
const technologies = [
  {
    title: "Vue.js",
    color: "#42b883", // Verde Vue
    textColor: "#42b883",
    glowColor: "rgba(66, 184, 131, 0.4)",
  },
  {
    title: "Nuxt",
    color: "#00DC82", // Verde Nuxt
    textColor: "#00DC82",
    glowColor: "rgba(0, 220, 130, 0.4)",
  },
  {
    title: "TypeScript",
    color: "#3178C6", // Azul TypeScript
    textColor: "#3178C6",
    glowColor: "rgba(49, 120, 198, 0.4)",
  },
  {
    title: "Java",
    color: "#ED8B00", // Naranja Java
    textColor: "#ED8B00",
    glowColor: "rgba(237, 139, 0, 0.4)",
  },
  {
    title: "PHP",
    color: "#777BB4", // Morado PHP
    textColor: "#777BB4",
    glowColor: "rgba(119, 123, 180, 0.4)",
  },
  {
    title: "Laravel",
    color: "#FF2D20", // Rojo Laravel
    textColor: "#FF2D20",
    glowColor: "rgba(255, 45, 32, 0.4)",
  },
  {
    title: "AWS",
    color: "#FF9900", // Naranja AWS
    textColor: "#FF9900",
    glowColor: "rgba(255, 153, 0, 0.4)",
  },
  {
    title: "PostgreSQL",
    color: "#336791", // Azul PostgreSQL
    textColor: "#336791",
    glowColor: "rgba(51, 103, 145, 0.4)",
  },
];
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
      <SparkLines />

      <div class="container max-w-7xl mx-auto px-4 relative z-10 w-full">
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-10 items-center">
          <!-- Columna de texto -->
          <div class="text-center lg:text-left animate-fade-in-up">
            <!-- Píldora de anuncio -->
            <NuxtLink
              to="/servicios/lidia"
              class="group inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 dark:bg-primary/10 pl-1.5 pr-3 py-1.5 text-sm font-medium text-slate-700 dark:text-slate-200 hover:border-primary/60 transition-colors mb-6"
            >
              <span
                class="inline-flex items-center gap-1 rounded-full bg-primary px-2 py-0.5 text-[11px] font-bold text-white dark:text-slate-950"
              >
                <Sparkles class="w-3 h-3" />
                Nuevo
              </span>
              <span>Presentamos LIDIA — trazabilidad ganadera offline</span>
              <ArrowRight
                class="w-4 h-4 text-primary group-hover:translate-x-0.5 transition-transform"
              />
            </NuxtLink>

            <h1
              class="text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.05]"
            >
              Software que aguanta<br />
              <span
                class="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary-light to-circuit-cyan"
              >
                el trabajo real
              </span>
            </h1>

            <p
              class="mt-6 text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
            Soluciones del futuro, Hoy!
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

            <!-- Prueba social honesta -->
            <div
              class="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-2 text-sm text-slate-500 dark:text-slate-400"
            >
              <span class="inline-flex items-center gap-2">
               
                <strong class="font-semibold text-slate-700 dark:text-slate-300">LIDIA</strong>
                en producción en ranchos de México
              </span>
              <span class="inline-flex items-center gap-1.5">
                <span class="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                Software y soporte a la medida
              </span>
            </div>
          </div>

          <!-- Columna bento -->
          <div class="animate-fade-in-up lg:animate-none">
            <HeroBento />
          </div>
        </div>
      </div>
    </section>

    <section
      class="border-y border-slate-100 dark:border-slate-800 py-16 relative z-10 overflow-hidden"
    >
      <div class="container max-w-7xl mx-auto px-4 text-center">
        <p
          class="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-8 uppercase tracking-widest"
        >
          Tecnologías que dominamos
        </p>
        <div class="flex flex-wrap justify-center gap-6 md:gap-12">
          <span
            v-for="tech in technologies"
            :key="tech.title"
            class="tech-item font-bold text-2xl text-slate-700 dark:text-slate-300 cursor-default transition-all duration-300 px-4 py-2 rounded-lg relative group"
            :style="{
              '--tech-color': tech.textColor,
              '--tech-glow': tech.glowColor,
            }"
          >
            {{ tech.title }}
            <!-- Glow effect behind text -->
            <span
              class="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
              :style="{
                background: `radial-gradient(circle, ${tech.glowColor} 0%, transparent 70%)`,
                transform: 'scale(1.5)',
                filter: 'blur(8px)',
              }"
            ></span>
          </span>
        </div>
      </div>
    </section>

    <!-- New Sections -->
    <AboutHero />
    <WhatDefinesUs />
    <LidiaSpotlight />
    <BookingSection />
  </div>
</template>

<style scoped>
/* Efecto de hover para tecnologías con colores de marca */
.tech-item {
  position: relative;
  z-index: 1;
}

.tech-item:hover {
  color: var(--tech-color) !important;
  text-shadow: 0 0 20px var(--tech-glow);
  transform: scale(1.05);
}
</style>
