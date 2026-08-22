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

const { t } = useI18n({ useScope: "local" });

useSeoMeta({
  title: () => t("seo.title"),
  description: () => t("seo.description"),
  ogTitle: () => t("seo.ogTitle"),
  ogDescription: () => t("seo.ogDescription"),
  ogImage: "https://codegahp.com/img/lidia/pantalla-dashboard.jpg",
});

const stats = [
  { value: "100%", label: t("stats.offline") },
  { value: "2,463", label: t("stats.municipios") },
  { value: "+200", label: t("stats.pruebas") },
  { value: "iOS + Android", label: t("stats.app") },
];

const features = [
  {
    icon: WifiOff,
    title: t("features.offlineTitle"),
    desc: t("features.offlineDesc"),
  },
  {
    icon: ClipboardList,
    title: t("features.padronTitle"),
    desc: t("features.padronDesc"),
  },
  {
    icon: Syringe,
    title: t("features.sanidadTitle"),
    desc: t("features.sanidadDesc"),
  },
  {
    icon: Baby,
    title: t("features.reproduccionTitle"),
    desc: t("features.reproduccionDesc"),
  },
  {
    icon: QrCode,
    title: t("features.qrTitle"),
    desc: t("features.qrDesc"),
  },
  {
    icon: Siren,
    title: t("features.roboTitle"),
    desc: t("features.roboDesc"),
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
          :alt="t('heroImgAlt')"
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
          {{ t("kicker") }}
        </p>

        <p
          class="text-lg sm:text-2xl text-slate-100 leading-relaxed max-w-3xl mb-9 [text-shadow:0_1px_12px_rgba(0,0,0,0.55)]"
        >
          {{ t("heroDesc") }}
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
          <Button as-child variant="bare" size="free" class="[&_svg]:size-5">
            <NuxtLinkLocale
              to="/servicios/lidia"
              class="group inline-flex items-center justify-center gap-2 h-12 px-8 rounded-[5px] bg-white text-slate-900 font-bold shadow-lg hover:-translate-y-0.5 transition-transform self-start"
            >
              {{ t("ctaPrimary") }}
              <ArrowRight
                class="w-5 h-5 group-hover:translate-x-1 transition-transform"
              />
            </NuxtLinkLocale>
          </Button>
          <NuxtLinkLocale
            to="/contacto"
            class="inline-flex items-center gap-2 text-white/90 font-medium hover:text-white transition-colors"
          >
            {{ t("ctaSecondary") }}
            <ArrowUpRight class="w-4 h-4" />
          </NuxtLinkLocale>
        </div>
      </div>
    </section>

    <!-- Lo que hace por dentro, a lo ancho -->
    <section class="bg-white dark:bg-slate-950 py-16 lg:py-24">
      <div class="px-6 sm:px-10 lg:px-20">
        <h2
          class="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-2"
        >
          {{ t("insideTitle") }}
        </h2>
        <p class="text-slate-600 dark:text-slate-400 mb-10 max-w-2xl">
          {{ t("insideDesc") }}
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
          {{ t("insideFootnote") }}
        </p>
      </div>
    </section>
  </div>
</template>

<i18n lang="json">
{
  "es": {
    "seo": {
      "title": "Proyectos - CODEGAHP | LIDIA, nuestro producto insignia",
      "description": "LIDIA es nuestro producto insignia: una app de trazabilidad ganadera que funciona sin señal — inventario, sanidad, reproducción y compra-venta con QR.",
      "ogTitle": "Proyectos | CODEGAHP — LIDIA, trazabilidad ganadera offline",
      "ogDescription": "Nuestro producto insignia LIDIA: trazabilidad ganadera que funciona sin señal, hecha para el rancho mexicano."
    },
    "heroImgAlt": "Ganado en el potrero con arete de identificación SINIIGA",
    "kicker": "Trazabilidad ganadera offline-first · Acceso anticipado",
    "heroDesc": "La app que administra el rancho desde el celular, haya o no señal: padrón, sanidad, reproducción, movilizaciones REEMO, compra-venta con QR y alertas de robo.",
    "ctaPrimary": "Conoce LIDIA a fondo",
    "ctaSecondary": "¿Tienes un proyecto? Hablemos",
    "insideTitle": "Lo que hace por dentro",
    "insideDesc": "No es una libreta digital: es la operación completa de tu ganadería en el celular.",
    "insideFootnote": "…y también REEMO, genealogía y seguridad biométrica.",
    "stats": {
      "offline": "de la captura funciona sin internet",
      "municipios": "municipios en las alertas de robo",
      "pruebas": "pruebas automatizadas por versión",
      "app": "una sola app"
    },
    "features": {
      "offlineTitle": "Offline-first",
      "offlineDesc": "captura sin señal y sincroniza al reconectar.",
      "padronTitle": "Padrón e inventario",
      "padronDesc": "aretes SINIIGA, pesos con historial y galería por animal.",
      "sanidadTitle": "Sanidad",
      "sanidadDesc": "campañas y tratamientos, cada evento con su MVZ.",
      "reproduccionTitle": "Reproducción",
      "reproduccionDesc": "el parto crea al becerro y actualiza a la madre.",
      "qrTitle": "Compra-venta con QR",
      "qrDesc": "trato firmado entre dos teléfonos, con comprobante.",
      "roboTitle": "Alertas de robo",
      "roboDesc": "aviso push a los ganaderos de tu municipio."
    }
  },
  "en": {
    "seo": {
      "title": "Projects - CODEGAHP | LIDIA, our flagship product",
      "description": "LIDIA is our flagship product: a livestock traceability app that works without signal — inventory, health, breeding and QR buy-sell.",
      "ogTitle": "Projects | CODEGAHP — LIDIA, offline livestock traceability",
      "ogDescription": "Our flagship product LIDIA: livestock traceability that works without signal, built for the Mexican ranch."
    },
    "heroImgAlt": "Cattle in the pasture with a SINIIGA identification ear tag",
    "kicker": "Offline-first livestock traceability · Early access",
    "heroDesc": "The app that runs the ranch from your phone, with or without signal: registry, health, breeding, REEMO movements, QR buy-sell and theft alerts.",
    "ctaPrimary": "Get to know LIDIA in depth",
    "ctaSecondary": "Have a project? Let's talk",
    "insideTitle": "What it does under the hood",
    "insideDesc": "It's not a digital notebook: it's your entire livestock operation on your phone.",
    "insideFootnote": "…and also REEMO, genealogy and biometric security.",
    "stats": {
      "offline": "of data capture works without internet",
      "municipios": "municipalities covered by theft alerts",
      "pruebas": "automated tests per release",
      "app": "a single app"
    },
    "features": {
      "offlineTitle": "Offline-first",
      "offlineDesc": "capture without signal and sync when you reconnect.",
      "padronTitle": "Registry and inventory",
      "padronDesc": "SINIIGA ear tags, weights with history and a gallery per animal.",
      "sanidadTitle": "Health",
      "sanidadDesc": "campaigns and treatments, each event with its vet.",
      "reproduccionTitle": "Breeding",
      "reproduccionDesc": "calving creates the calf and updates the mother.",
      "qrTitle": "QR buy-sell",
      "qrDesc": "a deal signed between two phones, with a receipt.",
      "roboTitle": "Theft alerts",
      "roboDesc": "push notification to ranchers in your municipality."
    }
  }
}
</i18n>
