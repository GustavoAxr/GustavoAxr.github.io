<script setup lang="ts">
import {
  QrCode,
  Siren,
  LayoutTemplate,
  Server,
  Workflow,
  ArrowUpRight,
  WifiOff,
  Phone,
  PhoneIcon,
  PhoneIncoming,
  PhoneCall,
  Camera,
} from "lucide-vue-next";

const { t } = useI18n({ useScope: "local" });

// Bento de categorías de servicio — mantiene todo el catálogo al frente,
// con "Software Especializado" (productos propios) como tarjeta destacada.
const cards = [
  {
    key: "negocio",
    title: t("cards.negocio.title"),
    desc: t("cards.negocio.desc"),
    icon: LayoutTemplate,
    to: "/servicios/landing-page",
    accent: "text-primary bg-primary/10",
    items: ["ERP", "SaaS", t("cards.negocio.item3")],
  },
  {
    key: "infra",
    title: t("cards.infra.title"),
    desc: t("cards.infra.desc"),
    icon: Server,
    to: "/servicios/aws",
    accent: "text-primary bg-primary/10",
    items: [t("cards.infra.item1"), "HTTPS", t("cards.infra.item3")],
  },
];
</script>

<template>
  <div class="grid grid-cols-2 gap-3 sm:gap-4">
    <!-- Tarjeta destacada: LIDIA (nuestro producto) -->
    <NuxtLinkLocale
      to="/servicios/lidia"
      class="group relative col-span-2 sm:col-span-1 sm:row-span-2 flex flex-col overflow-hidden rounded-2xl border border-primary/20 bg-white dark:bg-slate-900 p-5 shadow-sm transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1"
    >
      <div class="flex items-center justify-between">
        <span
          class="text-[11px] font-semibold uppercase tracking-wide text-primary"
        >
          {{ t("flagship") }}
        </span>
        <ArrowUpRight
          class="w-5 h-5 text-primary/60 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
        />
      </div>

      <div class="mt-4">
        <div
          class="w-11 h-11 rounded-xl bg-primary/15 flex items-center justify-center mb-3 p-1.5"
        >
          <LidiaLogo class="w-full h-full" />
        </div>
        <p class="text-lg font-bold text-slate-900 dark:text-white">LIDIA</p>
        <p class="text-sm text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
          {{ t("lidiaBefore") }}
          <span class="font-semibold text-primary">{{ t("lidiaHighlight") }}</span>
          {{ t("lidiaAfter") }}
        </p>
      </div>

      <!-- Chips de funciones reales -->
      <div class="mt-4 flex flex-wrap gap-2">
        <span
          class="inline-flex items-center gap-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 rounded-lg px-2.5 py-1.5"
        >
          <QrCode class="w-3.5 h-3.5 text-primary" />
          {{ t("chipQr") }}
        </span>
        <span
          class="inline-flex items-center gap-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 rounded-lg px-2.5 py-1.5"
        >
          <Siren class="w-3.5 h-3.5 text-red-500" />
          {{ t("chipTheft") }}
        </span>
        <span
          class="inline-flex items-center gap-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 rounded-lg px-2.5 py-1.5"
        >
          <Camera class="w-3.5 h-3.5 text-blue-500" />
          {{ t("chipCamera") }}
        </span>
      </div>

      <!-- Teléfono LIDIA asomándose (solo donde hay altura para lucirlo) -->
      <div
        class="relative mt-auto hidden sm:block pt-5 -mb-5 overflow-hidden"
        aria-hidden="true"
      >
        <div
          class="absolute -left-2 bottom-3 flex items-center gap-1.5 text-[10px] font-semibold text-slate-500 dark:text-slate-400 z-10"
        >
          <WifiOff class="w-3 h-3 text-primary" />
          {{ t("worksOffline") }}
        </div>
        <picture>
          <source
            srcset="/img/lidia/pantalla-dashboard.webp"
            type="image/webp"
          />
          <img
            src="/img/lidia/pantalla-dashboard.jpg"
            alt=""
            width="739"
            height="1600"
            loading="lazy"
            decoding="async"
            class="ml-auto w-28 rounded-t-xl border-4 border-b-0 border-slate-900 dark:border-slate-700 shadow-2xl translate-y-4 group-hover:translate-y-2 transition-transform duration-500"
          />
        </picture>
      </div>
    </NuxtLinkLocale>

    <!-- Tarjetas de categoría -->
    <NuxtLinkLocale
      v-for="card in cards"
      :key="card.key"
      :to="card.to"
      class="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-5 shadow-sm transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:-translate-y-1"
      :class="card.key === 'soporte' ? 'col-span-2' : ''"
    >
      <div class="flex items-start justify-between">
        <div
          class="w-10 h-10 rounded-xl flex items-center justify-center"
          :class="card.accent"
        >
          <component :is="card.icon" class="w-5 h-5" />
        </div>
        <ArrowUpRight
          class="w-4 h-4 text-slate-300 dark:text-slate-600 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
        />
      </div>
      <div class="mt-3">
        <p class="text-base font-bold text-slate-900 dark:text-white">
          {{ card.title }}
        </p>
        <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">
          {{ card.desc }}
        </p>
      </div>
      <!-- Servicios de la categoría -->
      <div class="mt-auto pt-4 flex flex-wrap gap-1.5">
        <span
          v-for="item in card.items"
          :key="item"
          class="text-[11px] font-medium text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 rounded-md px-2 py-1"
        >
          {{ item }}
        </span>
      </div>
    </NuxtLinkLocale>
  </div>
</template>

<i18n lang="json">
{
  "es": {
    "flagship": "Nuestro producto insignia",
    "lidiaBefore": "Trazabilidad ganadera que funciona",
    "lidiaHighlight": "sin señal",
    "lidiaAfter": "— inventario, sanidad y compra-venta desde el celular.",
    "chipQr": "Compra-venta QR",
    "chipTheft": "Alertas de robo",
    "chipCamera": "Busqueda por IA a través de cámara",
    "worksOffline": "Funciona sin señal",
    "cards": {
      "negocio": {
        "title": "Lo que se te ocurra, nosotros lo creamos para tí",
        "desc": "La complejidad no existe para nosotros",
        "item3": "Siempre creando herramientas para tí"
      },
      "infra": {
        "title": "Infraestructura",
        "desc": "Siempre en línea, sin sobrecostos",
        "item1": "Hosting premium",
        "item3": "Nube AWS"
      }
    }
  },
  "en": {
    "flagship": "Our flagship product",
    "lidiaBefore": "Livestock traceability that works",
    "lidiaHighlight": "without signal",
    "lidiaAfter": "— inventory, health and buying-selling from your phone.",
    "chipQr": "QR buy-sell",
    "chipTheft": "Theft alerts",
    "chipCamera": "AI search via camera",
    "worksOffline": "Works without signal",
    "cards": {
      "negocio": {
        "title": "Whatever you can imagine, we build it for you",
        "desc": "Complexity doesn't exist for us",
        "item3": "Always creating tools for you"
      },
      "infra": {
        "title": "Infrastructure",
        "desc": "Always online, no overspending",
        "item1": "Premium hosting",
        "item3": "AWS Cloud"
      }
    }
  }
}
</i18n>
