<script setup lang="ts">
import {
  ArrowRight,
  ArrowUpRight,
  WifiOff,
  QrCode,
  Siren,
  Syringe,
  Baby,
  ClipboardList,
} from "lucide-vue-next";

useSeoMeta({
  title: "Proyectos - CODEGAHP | LIDIA, nuestro producto insignia",
  description:
    "LIDIA es nuestro producto insignia: una app de trazabilidad ganadera que funciona sin señal — inventario, sanidad, reproducción y compra-venta con QR.",
  ogTitle: "Proyectos | CODEGAHP — LIDIA, trazabilidad ganadera offline",
  ogDescription:
    "Nuestro producto insignia LIDIA: trazabilidad ganadera que funciona sin señal, hecha para el rancho mexicano.",
  ogImage: "https://codegahp.com/img/lidia/pantalla-dashboard.jpg",
});

const stats = [
  { value: "100%", label: "de la captura funciona sin internet" },
  { value: "2,463", label: "municipios en las alertas de robo" },
  { value: "+200", label: "pruebas automatizadas por versión" },
  { value: "iOS + Android", label: "una sola app" },
];

const features = [
  {
    icon: WifiOff,
    title: "Offline-first",
    desc: "captura sin señal y sincroniza al reconectar.",
  },
  {
    icon: ClipboardList,
    title: "Padrón e inventario",
    desc: "aretes SINIIGA, pesos con historial y galería por animal.",
  },
  {
    icon: Syringe,
    title: "Sanidad",
    desc: "campañas y tratamientos, cada evento con su MVZ.",
  },
  {
    icon: Baby,
    title: "Reproducción",
    desc: "el parto crea al becerro y actualiza a la madre.",
  },
  {
    icon: QrCode,
    title: "Compra-venta con QR",
    desc: "trato firmado entre dos teléfonos, con comprobante.",
  },
  {
    icon: Siren,
    title: "Alertas de robo",
    desc: "aviso push a los ganaderos de tu municipio.",
  },
];
</script>

<template>
  <div class="bg-slate-950">
    <!-- Hero a pantalla completa -->
    <section
      class="relative min-h-screen flex flex-col justify-end overflow-hidden"
    >
      <picture>
        <source srcset="/img/vaca2.webp" type="image/webp" />
        <img
          src="/img/vaca2.jpg"
          alt="Ganado en el potrero con arete de identificación SINIIGA"
          class="absolute inset-0 w-full h-full object-cover"
        />
      </picture>
      <!-- Velo sólido para legibilidad (sin degradado) -->
      <div class="absolute inset-0 bg-slate-950/45"></div>

      <div
        class="relative z-10 w-full px-6 sm:px-10 lg:px-20 pt-40 pb-14 lg:pb-20"
      >
        <div class="flex items-center gap-4 mb-4">
          <span
            class="w-14 h-14 rounded-2xl bg-white flex items-center justify-center p-2 shadow-lg shrink-0"
          >
            <LidiaLogo class="w-full h-full" />
          </span>
          <h1
            class="text-5xl sm:text-7xl font-black text-white leading-none tracking-tight [text-shadow:0_2px_20px_rgba(0,0,0,0.5)]"
          >
            LIDIA
          </h1>
        </div>

        <p
          class="text-sm font-semibold uppercase tracking-widest text-emerald-300 mb-5 [text-shadow:0_1px_10px_rgba(0,0,0,0.6)]"
        >
          Trazabilidad ganadera offline-first · Acceso anticipado
        </p>

        <p
          class="text-lg sm:text-2xl text-slate-100 leading-relaxed max-w-3xl mb-9 [text-shadow:0_1px_12px_rgba(0,0,0,0.55)]"
        >
          La app que administra el rancho desde el celular, haya o no señal:
          padrón, sanidad, reproducción, movilizaciones REEMO, compra-venta con
          QR y alertas de robo.
        </p>

        <!-- Datos, a lo ancho -->
        <div
          class="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10 max-w-4xl border-t border-white/20 pt-6 mb-9"
        >
          <div v-for="st in stats" :key="st.label">
            <div
              class="text-2xl sm:text-4xl font-extrabold text-white [text-shadow:0_1px_10px_rgba(0,0,0,0.5)]"
            >
              {{ st.value }}
            </div>
            <p class="text-xs sm:text-sm text-slate-300 mt-1 leading-snug">
              {{ st.label }}
            </p>
          </div>
        </div>

        <div class="flex flex-col sm:flex-row sm:items-center gap-x-8 gap-y-4">
          <NuxtLink
            to="/servicios/lidia"
            class="group inline-flex items-center justify-center gap-2 h-12 px-8 rounded-xl bg-white text-slate-900 font-bold shadow-lg hover:-translate-y-0.5 transition-transform self-start"
          >
            Conoce LIDIA a fondo
            <ArrowRight
              class="w-5 h-5 group-hover:translate-x-1 transition-transform"
            />
          </NuxtLink>
          <NuxtLink
            to="/contacto"
            class="inline-flex items-center gap-2 text-white/90 font-medium hover:text-white transition-colors"
          >
            ¿Tienes un proyecto? Hablemos
            <ArrowUpRight class="w-4 h-4" />
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Lo que hace por dentro, a lo ancho -->
    <section class="bg-white dark:bg-slate-950 py-16 lg:py-24">
      <div class="px-6 sm:px-10 lg:px-20">
        <h2
          class="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-2"
        >
          Lo que hace por dentro
        </h2>
        <p class="text-slate-600 dark:text-slate-400 mb-10 max-w-2xl">
          No es una libreta digital: es la operación completa de tu ganadería en
          el celular.
        </p>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-7">
          <div
            v-for="f in features"
            :key="f.title"
            class="flex items-start gap-3"
          >
            <component
              :is="f.icon"
              class="w-6 h-6 text-primary mt-0.5 shrink-0"
            />
            <p class="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              <span class="font-semibold text-slate-900 dark:text-white"
                >{{ f.title }}</span
              >
              — {{ f.desc }}
            </p>
          </div>
        </div>

        <p class="mt-8 text-sm text-slate-400 dark:text-slate-500">
          …y también REEMO, genealogía y seguridad biométrica.
        </p>
      </div>
    </section>
  </div>
</template>
