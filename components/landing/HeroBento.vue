<script setup lang="ts">
import { LayoutTemplate, Server, ArrowUpRight } from "lucide-vue-next";

const { t } = useI18n({ useScope: "local" });

// Portada del hero sin tarjetas (mismo lenguaje que el resto del sitio):
// arriba las dos insignias (LIDIA y Clocc) y abajo las categorías de servicio.
const categories = [
  {
    key: "negocio",
    title: t("cards.negocio.title"),
    desc: t("cards.negocio.desc"),
    icon: LayoutTemplate,
    to: "/servicios/landing-page",
  },
  {
    key: "infra",
    title: t("cards.infra.title"),
    desc: t("cards.infra.desc"),
    icon: Server,
    to: "/servicios/aws",
  },
];
</script>

<template>
  <div class="grid grid-cols-2 gap-x-6 gap-y-12 sm:gap-x-10">
    <!-- Insignia: LIDIA -->
    <NuxtLinkLocale
      to="/servicios/lidia"
      class="group flex flex-col items-center text-center"
    >
      <div
        class="grid h-20 w-20 place-items-center rounded-2xl border border-primary/20 bg-white p-3.5 shadow-sm transition-transform duration-300 group-hover:-translate-y-1 dark:bg-slate-900"
      >
        <LidiaLogo class="h-full w-full" />
      </div>
      <span
        class="mt-4 text-[11px] font-semibold uppercase tracking-wider text-primary"
      >
        {{ t("flagship") }}
      </span>
      <p class="mt-1 text-lg font-bold text-slate-900 dark:text-white">LIDIA</p>
      <p
        class="mt-1 max-w-[17rem] text-sm leading-relaxed text-slate-600 dark:text-slate-400"
      >
        {{ t("lidiaBefore") }}
        <span class="font-semibold text-primary">{{ t("lidiaHighlight") }}</span>
        {{ t("lidiaAfter") }}
      </p>
      <span
        class="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary"
      >
        {{ t("more") }}
        <ArrowUpRight
          class="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      </span>
    </NuxtLinkLocale>

    <!-- Insignia: Clocc -->
    <NuxtLinkLocale
      to="/servicios/clocc"
      class="group flex flex-col items-center text-center"
    >
      <div
        class="grid h-20 w-20 place-items-center rounded-2xl border border-primary/20 bg-white p-3.5 shadow-sm transition-transform duration-300 group-hover:-translate-y-1 dark:bg-slate-900"
      >
        <CloccLogo class="h-full w-full" />
      </div>
      <span
        class="mt-4 text-[11px] font-semibold uppercase tracking-wider text-primary"
      >
        {{ t("cloccBadge") }}
      </span>
      <p class="mt-1 text-lg font-bold text-slate-900 dark:text-white">Clocc</p>
      <p
        class="mt-1 max-w-[17rem] text-sm leading-relaxed text-slate-600 dark:text-slate-400"
      >
        {{ t("cloccBefore") }}
        <span class="font-semibold text-primary">{{ t("cloccHighlight") }}</span>
        {{ t("cloccAfter") }}
      </p>
      <span
        class="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary"
      >
        {{ t("more") }}
        <ArrowUpRight
          class="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      </span>
    </NuxtLinkLocale>

    <!-- Categorías de servicio -->
    <NuxtLinkLocale
      v-for="c in categories"
      :key="c.key"
      :to="c.to"
      class="group flex flex-col items-center text-center"
    >
      <div
        class="grid h-16 w-16 place-items-center rounded-2xl border border-primary/20 bg-white shadow-sm transition-transform duration-300 group-hover:-translate-y-1 dark:bg-slate-900"
      >
        <component :is="c.icon" class="h-7 w-7 text-primary" />
      </div>
      <p
        class="mt-4 max-w-[16rem] text-base font-bold text-slate-900 transition-colors group-hover:text-primary dark:text-white"
      >
        {{ c.title }}
      </p>
      <p class="mt-1 text-sm text-slate-500 dark:text-slate-400">
        {{ c.desc }}
      </p>
    </NuxtLinkLocale>
  </div>
</template>

<i18n lang="json">
{
  "es": {
    "flagship": "Producto insignia",
    "lidiaBefore": "Trazabilidad ganadera que funciona",
    "lidiaHighlight": "sin señal",
    "lidiaAfter": "— inventario, sanidad y compra-venta desde el celular.",
    "cloccBadge": "Nuevo producto",
    "cloccBefore": "Control de tiempo y cumplimiento",
    "cloccHighlight": "sin cambiar tu infraestructura",
    "cloccAfter": "— supervisa a tu personal en gabinete o home office.",
    "more": "Conocer más",
    "cards": {
      "negocio": {
        "title": "Lo que se te ocurra, nosotros lo creamos para tí",
        "desc": "La complejidad no existe para nosotros"
      },
      "infra": {
        "title": "Infraestructura",
        "desc": "Siempre en línea, sin sobrecostos"
      }
    }
  },
  "en": {
    "flagship": "Flagship product",
    "lidiaBefore": "Livestock traceability that works",
    "lidiaHighlight": "without signal",
    "lidiaAfter": "— inventory, health and buying-selling from your phone.",
    "cloccBadge": "New product",
    "cloccBefore": "Time and compliance control",
    "cloccHighlight": "without changing your infrastructure",
    "cloccAfter": "— supervise your staff on-site or working from home.",
    "more": "Learn more",
    "cards": {
      "negocio": {
        "title": "Whatever you can imagine, we build it for you",
        "desc": "Complexity doesn't exist for us"
      },
      "infra": {
        "title": "Infrastructure",
        "desc": "Always online, no overspending"
      }
    }
  }
}
</i18n>
