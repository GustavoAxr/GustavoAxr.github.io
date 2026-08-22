<script setup lang="ts">
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Baby,
  BarChart3,
  Bell,
  Camera,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  Clock,
  Database,
  Dna,
  Fingerprint,
  MapPin,
  Play,
  QrCode,
  RefreshCw,
  ShieldCheck,
  Siren,
  Smartphone,
  Syringe,
  Tag,
  Truck,
  Warehouse,
  WifiOff,
  X,
  Zap,
  ZoomIn,
} from "lucide-vue-next";
import LidiaLogo from "@/components/LidiaLogo.vue";

const { t, locale } = useI18n({ useScope: "local" });

const { getServiceBySlug } = useServices();
const service = getServiceBySlug("lidia");

useSeoMeta({
  title: () => t("seo.title"),
  description: () => t("seo.description"),
  ogTitle: () => t("seo.ogTitle"),
  ogDescription: () => t("seo.ogDescription"),
  ogImage: "https://codegahp.com/img/lidia/pantalla-dashboard.jpg",
});

useHead({
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "LIDIA",
        applicationCategory: "BusinessApplication",
        operatingSystem: "iOS, Android",
        description: t("seo.jsonLdDesc"),
        inLanguage: locale.value === "en" ? "en-US" : "es-MX",
        publisher: { "@type": "Organization", name: "CODEGAHP" },
      }),
    },
  ],
});

const quickFacts = [
  { icon: LidiaLogo, label: "qf.mexican" },
  { icon: WifiOff, label: "qf.offline" },
  { icon: Smartphone, label: "qf.platforms" },
  { icon: ShieldCheck, label: "qf.standards" },
];

const offlineSteps = [
  {
    icon: WifiOff,
    title: "offline.step1.title",
    desc: "offline.step1.desc",
  },
  {
    icon: Database,
    title: "offline.step2.title",
    desc: "offline.step2.desc",
  },
  {
    icon: RefreshCw,
    title: "offline.step3.title",
    desc: "offline.step3.desc",
  },
];

const modules = [
  {
    icon: ClipboardList,
    title: "modules.m1.title",
    points: ["modules.m1.p1", "modules.m1.p2", "modules.m1.p3"],
  },
  {
    icon: Zap,
    title: "modules.m2.title",
    points: ["modules.m2.p1", "modules.m2.p2", "modules.m2.p3"],
  },
  {
    icon: BarChart3,
    title: "modules.m3.title",
    points: ["modules.m3.p1", "modules.m3.p2", "modules.m3.p3"],
  },
  {
    icon: Syringe,
    title: "modules.m4.title",
    points: ["modules.m4.p1", "modules.m4.p2", "modules.m4.p3"],
  },
  {
    icon: Baby,
    title: "modules.m5.title",
    points: ["modules.m5.p1", "modules.m5.p2", "modules.m5.p3"],
  },
  {
    icon: Dna,
    title: "modules.m6.title",
    points: ["modules.m6.p1", "modules.m6.p2", "modules.m6.p3"],
  },
  {
    icon: QrCode,
    title: "modules.m7.title",
    points: ["modules.m7.p1", "modules.m7.p2", "modules.m7.p3"],
  },
  {
    icon: Truck,
    title: "modules.m8.title",
    points: ["modules.m8.p1", "modules.m8.p2", "modules.m8.p3"],
  },
  {
    icon: Siren,
    title: "modules.m9.title",
    points: ["modules.m9.p1", "modules.m9.p2", "modules.m9.p3"],
  },
  {
    icon: Warehouse,
    title: "modules.m10.title",
    points: ["modules.m10.p1", "modules.m10.p2", "modules.m10.p3"],
  },
  {
    icon: Bell,
    title: "modules.m11.title",
    points: ["modules.m11.p1", "modules.m11.p2", "modules.m11.p3"],
  },
  {
    icon: Fingerprint,
    title: "modules.m12.title",
    points: ["modules.m12.p1", "modules.m12.p2", "modules.m12.p3"],
  },
];

const qrSteps = [
  {
    title: "qr.s1.title",
    desc: "qr.s1.desc",
  },
  {
    title: "qr.s2.title",
    desc: "qr.s2.desc",
  },
  {
    title: "qr.s3.title",
    desc: "qr.s3.desc",
  },
  {
    title: "qr.s4.title",
    desc: "qr.s4.desc",
  },
];

const videos = [
  {
    key: "identidad",
    src: "/img/lidia/demo-identidad.mp4",
    poster: "/img/lidia/poster-identidad",
    caption: "vid.identidad",
  },
  {
    key: "genealogia",
    src: "/img/lidia/demo-genealogia.mp4",
    poster: "/img/lidia/poster-genealogia",
    caption: "vid.genealogia",
  },
  {
    key: "salud",
    src: "/img/lidia/demo-salud.mp4",
    poster: "/img/lidia/poster-salud",
    caption: "vid.salud",
  },
];

const screens = [
  { name: "dashboard", caption: "scr.dashboard" },
  { name: "sanidad", caption: "scr.sanidad" },
  { name: "identidad", caption: "scr.identidad" },
  { name: "genealogia", caption: "scr.genealogia" },
  { name: "salud", caption: "scr.salud" },
  { name: "movimientos", caption: "scr.movimientos" },
  { name: "reemo", caption: "scr.reemo" },
  { name: "ajustes", caption: "scr.ajustes" },
];

const stats = [
  { value: "100%", label: "stats.s1" },
  { value: "+200", label: "stats.s2" },
  { value: "2,463", label: "stats.s3" },
  { value: "2", label: "stats.s4" },
];

const visionPoints = [
  "vision.vp1",
  "vision.vp2",
  "vision.vp3",
  "vision.vp4",
  "vision.vp5",
];

const faqs = [
  { q: "faq.q1", a: "faq.a1" },
  { q: "faq.q2", a: "faq.a2" },
  { q: "faq.q3", a: "faq.a3" },
  { q: "faq.q4", a: "faq.a4" },
  { q: "faq.q5", a: "faq.a5" },
];

const visibleSections = ref<Set<string>>(new Set());

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) visibleSections.value.add(entry.target.id);
      });
    },
    { threshold: 0.1 },
  );
  document
    .querySelectorAll("[data-animate]")
    .forEach((el) => observer.observe(el));
  onUnmounted(() => observer.disconnect());
});

// --- Galería "LIDIA en acción": videos + capturas en un solo carrusel ---
const gallery = [
  ...videos.map((v) => ({
    kind: "video" as const,
    src: v.src,
    poster: `${v.poster}.jpg`,
    posterWebp: `${v.poster}.webp`,
    caption: v.caption,
    name: "",
    screenIdx: -1,
  })),
  ...screens.map((s, k) => ({
    kind: "image" as const,
    src: "",
    poster: "",
    posterWebp: "",
    name: s.name,
    caption: s.caption,
    screenIdx: k,
  })),
];
const galleryIndex = ref(0);
const galleryNext = () => {
  galleryIndex.value = (galleryIndex.value + 1) % gallery.length;
};
const galleryPrev = () => {
  galleryIndex.value = (galleryIndex.value - 1 + gallery.length) % gallery.length;
};

// --- Galería / lightbox de pantallas ---
const lightboxIndex = ref<number | null>(null);
const openLightbox = (i: number) => {
  lightboxIndex.value = i;
  document.body.style.overflow = "hidden";
};
const closeLightbox = () => {
  lightboxIndex.value = null;
  document.body.style.overflow = "";
};
const nextShot = () => {
  if (lightboxIndex.value === null) return;
  lightboxIndex.value = (lightboxIndex.value + 1) % screens.length;
};
const prevShot = () => {
  if (lightboxIndex.value === null) return;
  lightboxIndex.value =
    (lightboxIndex.value - 1 + screens.length) % screens.length;
};

onMounted(() => {
  const onKey = (e: KeyboardEvent) => {
    if (lightboxIndex.value === null) return;
    if (e.key === "Escape") closeLightbox();
    else if (e.key === "ArrowRight") nextShot();
    else if (e.key === "ArrowLeft") prevShot();
  };
  window.addEventListener("keydown", onKey);
  onUnmounted(() => window.removeEventListener("keydown", onKey));
});

// Carrusel de texto de "Hecha para el campo mexicano" (rota con fundido)
const visionIndex = ref(0);
onMounted(() => {
  const id = setInterval(() => {
    visionIndex.value = (visionIndex.value + 1) % visionPoints.length;
  }, 3400);
  onUnmounted(() => clearInterval(id));
});
</script>

<template>
  <div v-if="service" class="min-h-screen">
    <!-- Hero -->
    <section
      class="relative overflow-hidden flex items-center min-h-[calc(100svh-5rem)] py-12"
    >
      <div
        class="absolute inset-0 bg-primary/5 dark:bg-primary/10"
      ></div>

      <!-- Bandera de México ondeando desde la esquina inferior izquierda -->
      <MexicanFlagWave />

      <div class="container mx-auto px-4 relative z-10 animate-fade-in-up">
        <div class="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          <div class="text-center lg:text-left">
            <h1
              class="text-5xl md:text-6xl xl:text-7xl font-black tracking-tight leading-[1.02] mb-8"
            >
              <span class="text-[#00723F] dark:text-green-500">{{ t('hero.word1') }}</span><span
                class="text-slate-400 dark:text-slate-500"
                >,</span
              ><br />
              <span class="text-slate-800 dark:text-white">{{ t('hero.word2') }}</span><span
                class="text-slate-400 dark:text-slate-500"
                >,</span
              ><br />
              <span class="text-[#C8102E] dark:text-red-500">{{ t('hero.word3') }}</span><span
                class="text-slate-800 dark:text-white"
                >.</span
              >
            </h1>
            <div
              class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <NuxtLinkLocale to="/contacto">
                <Button
                  size="lg"
                  class="bg-green-700 hover:bg-green-800 dark:bg-green-600 dark:hover:bg-green-500 text-white dark:text-slate-950 text-lg h-12 px-8 shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transition-all transform hover:-translate-y-0.5"
                >
                  {{ t('hero.cta') }}
                  <ArrowRight class="w-5 h-5 ml-2" />
                </Button>
              </NuxtLinkLocale>
              <a
                href="#lidia-modules"
                class="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-green-600 dark:hover:text-green-400 transition-colors"
              >
                {{ t('hero.seeAll') }}
              </a>
            </div>

            <!-- Marcador de lanzamiento oficial en tiendas -->
            <div class="mt-8 flex justify-center lg:justify-start">
              <LaunchBadge />
            </div>
          </div>

          <!-- Carrusel coverflow de pantallas de LIDIA -->
          <div class="relative flex justify-center lg:justify-end">
            <LidiaPhoneCarousel />
          </div>
        </div>

      </div>
    </section>

    <!-- Quick facts (barra bajo el hero, fuera de la primera pantalla) -->
    <section
      class="border-y border-slate-100 dark:border-slate-800/60 bg-white/60 dark:bg-slate-900/40 py-5"
    >
      <div
        class="container mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-3 max-w-4xl"
      >
        <div
          v-for="fact in quickFacts"
          :key="fact.label"
          class="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-white/70 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800"
        >
          <component
            :is="fact.icon"
            class="w-4 h-4 text-green-600 dark:text-green-400 flex-shrink-0"
          />
          <span
            class="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300"
          >
            {{ t(fact.label) }}
          </span>
        </div>
      </div>
    </section>

    <!-- Contexto visual: "esto es de lo que hablamos" (fotos reales del hato) -->
    <section class="py-16 lg:py-24 bg-slate-50 dark:bg-slate-900/50">
      <div class="container max-w-7xl mx-auto px-4">
        <div class="text-center max-w-2xl mx-auto mb-10">
          <h2
            class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-3"
          >
            {{ t('context.title') }}
          </h2>
          <p class="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            {{ t('context.subtitle') }}
          </p>
        </div>

        <div class="grid lg:grid-cols-12 gap-4 sm:gap-5">
          <!-- Rebaño con arete (vaca2) -->
          <div
            class="group relative lg:col-span-8 rounded-3xl overflow-hidden min-h-[320px] sm:min-h-[440px] ring-1 ring-black/5 dark:ring-white/10"
          >
            <picture>
              <source srcset="/img/vaca2.webp" type="image/webp" />
              <img
                src="/img/vaca2.jpg"
                :alt="t('context.altHerd')"
                loading="lazy"
                decoding="async"
                class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </picture>
            <div class="absolute inset-0 bg-slate-950/35"></div>

            <!-- Chip anotación: el arete real → identidad digital -->
            <span
              class="absolute top-5 left-5 inline-flex items-center gap-1.5 rounded-lg bg-amber-300 text-amber-950 text-xs font-bold px-2.5 py-1.5 shadow-lg ring-1 ring-amber-500/30"
            >
              <Tag class="w-3.5 h-3.5" aria-hidden="true" />
              {{ t('context.chip') }}
            </span>

            <div class="absolute bottom-0 inset-x-0 p-6 sm:p-8">
              <h3
                class="text-2xl sm:text-3xl font-extrabold text-white mb-1.5 [text-shadow:0_2px_14px_rgba(0,0,0,0.5)]"
              >
                {{ t('context.cardTitle') }}
              </h3>
              <p
                class="text-slate-100 text-sm sm:text-base max-w-lg [text-shadow:0_1px_10px_rgba(0,0,0,0.45)]"
              >
                {{ t('context.cardText') }}
              </p>
            </div>
          </div>

          <!-- Retrato (vaca1) -->
          <div
            class="group relative lg:col-span-4 rounded-3xl overflow-hidden min-h-[320px] sm:min-h-[440px] ring-1 ring-black/5 dark:ring-white/10"
          >
            <picture>
              <source srcset="/img/vaca1.webp" type="image/webp" />
              <img
                src="/img/vaca1.jpg"
                :alt="t('context.altPortrait')"
                loading="lazy"
                decoding="async"
                class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </picture>
            <div class="absolute inset-0 bg-slate-950/25"></div>
            <span
              class="absolute bottom-5 left-5 right-5 text-white font-semibold text-sm sm:text-base [text-shadow:0_1px_10px_rgba(0,0,0,0.5)]"
            >
              {{ t('context.badge') }}
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- Offline first -->
    <section
      id="lidia-offline"
      data-animate
      class="py-20 bg-slate-50 dark:bg-slate-900/50 transition-all duration-700"
      :class="
        visibleSections.has('lidia-offline')
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      "
    >
      <div class="container max-w-7xl px-4 mx-auto">
        <div class="text-center mb-12">
          <h2
            class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4"
          >
            {{ t('offline.title1') }}
            <span class="text-green-600 dark:text-green-400">{{ t('offline.title2') }}</span>
          </h2>
          <p class="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            {{ t('offline.subtitle') }}
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-6 mb-8">
          <div
            v-for="(step, i) in offlineSteps"
            :key="step.title"
            class="relative p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50"
          >
            <div
              class="absolute top-6 right-6 text-5xl font-black text-green-600/10 dark:text-green-400/10 select-none"
            >
              {{ i + 1 }}
            </div>
            <div
              class="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4"
            >
              <component
                :is="step.icon"
                class="w-6 h-6 text-green-600 dark:text-green-400"
              />
            </div>
            <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2">
              {{ t(step.title) }}
            </h3>
            <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {{ t(step.desc) }}
            </p>
          </div>
        </div>

        <!-- Primera carga -->
        <div
          class="p-6 sm:p-8 rounded-2xl border border-green-600/20 bg-gradient-to-br from-green-50 to-lime-50/50 dark:from-green-900/20 dark:to-lime-900/10 flex flex-col sm:flex-row gap-5 items-start"
        >
          <div
            class="w-12 h-12 rounded-xl bg-green-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-green-600/30"
          >
            <Clock class="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2">
              {{ t('offline.firstLoad.title') }}
            </h3>
            <p class="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              {{ t('offline.firstLoad.p1') }}
              <strong>{{ t('offline.firstLoad.strong1') }}</strong>
              {{ t('offline.firstLoad.p2') }}
              <strong>{{ t('offline.firstLoad.strong2') }}</strong
              >{{ t('offline.firstLoad.p3') }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Módulos -->
    <section
      id="lidia-modules"
      data-animate
      class="py-20 transition-all duration-700"
      :class="
        visibleSections.has('lidia-modules')
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      "
    >
      <div class="container max-w-7xl px-4 mx-auto">
        <div class="text-center mb-12">
          <h2
            class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4"
          >
            {{ t('modules.title1') }}
            <span class="text-green-600 dark:text-green-400">{{ t('modules.title2') }}</span>
          </h2>
          <p class="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            {{ t('modules.subtitle') }}
          </p>
        </div>

        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 grid-flow-row-dense"
        >
          <!-- Vista de teléfono (Dashboard) — abre la galería -->
          <Button
            variant="bare"
            size="free"
            type="button"
            @click="openLightbox(0)"
            class="group relative row-span-2 min-h-[320px] rounded-[5px] overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-900 shadow-md hover:shadow-xl transition-shadow text-left"
          >
            <picture>
              <source
                srcset="/img/lidia/pantalla-dashboard.webp"
                type="image/webp"
              />
              <img
                src="/img/lidia/pantalla-dashboard.jpg"
                :alt="t('modules.altDashboard')"
                width="739"
                height="1600"
                loading="lazy"
                decoding="async"
                class="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
            </picture>
            <span
              class="absolute left-3 bottom-3 inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-slate-950/60 backdrop-blur px-2.5 py-1.5 rounded-lg"
            >
              <ZoomIn class="w-3.5 h-3.5" aria-hidden="true" />
              {{ t('modules.viewDashboard') }}
            </span>
          </Button>

          <!-- Primeros módulos -->
          <div
            v-for="mod in modules.slice(0, 6)"
            :key="mod.title"
            class="relative overflow-hidden p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 hover:border-green-500/50 hover:shadow-lg hover:shadow-green-500/5 transition-all duration-300 group"
          >
            <component
              :is="mod.icon"
              class="pointer-events-none absolute -right-4 -bottom-4 w-28 h-28 text-green-600/[0.06] dark:text-green-400/[0.09]"
            />
            <div class="relative">
              <div
                class="w-11 h-11 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4 text-green-600 dark:text-green-400 group-hover:bg-green-200 dark:group-hover:bg-green-900/50 transition-colors"
              >
                <component :is="mod.icon" class="w-5 h-5" />
              </div>
              <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-3">
                {{ t(mod.title) }}
              </h3>
              <ul class="space-y-2">
                <li
                  v-for="point in mod.points"
                  :key="point"
                  class="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed"
                >
                  <CheckCircle2
                    class="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5"
                  />
                  <span>{{ t(point) }}</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Vista de teléfono (Movilidad y comercio) — abre la galería -->
          <Button
            variant="bare"
            size="free"
            type="button"
            @click="openLightbox(6)"
            class="group relative row-span-2 min-h-[320px] rounded-[5px] overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-900 shadow-md hover:shadow-xl transition-shadow text-left"
          >
            <picture>
              <source srcset="/img/lidia/pantalla-reemo.webp" type="image/webp" />
              <img
                src="/img/lidia/pantalla-reemo.jpg"
                :alt="t('modules.altReemo')"
                width="739"
                height="1600"
                loading="lazy"
                decoding="async"
                class="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
            </picture>
            <span
              class="absolute left-3 bottom-3 inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-slate-950/60 backdrop-blur px-2.5 py-1.5 rounded-lg"
            >
              <ZoomIn class="w-3.5 h-3.5" aria-hidden="true" />
              {{ t('modules.viewReemo') }}
            </span>
          </Button>

          <!-- Resto de módulos -->
          <div
            v-for="mod in modules.slice(6)"
            :key="mod.title"
            class="relative overflow-hidden p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 hover:border-green-500/50 hover:shadow-lg hover:shadow-green-500/5 transition-all duration-300 group"
          >
            <component
              :is="mod.icon"
              class="pointer-events-none absolute -right-4 -bottom-4 w-28 h-28 text-green-600/[0.06] dark:text-green-400/[0.09]"
            />
            <div class="relative">
              <div
                class="w-11 h-11 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4 text-green-600 dark:text-green-400 group-hover:bg-green-200 dark:group-hover:bg-green-900/50 transition-colors"
              >
                <component :is="mod.icon" class="w-5 h-5" />
              </div>
              <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-3">
                {{ t(mod.title) }}
              </h3>
              <ul class="space-y-2">
                <li
                  v-for="point in mod.points"
                  :key="point"
                  class="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed"
                >
                  <CheckCircle2
                    class="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5"
                  />
                  <span>{{ t(point) }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Compra-venta doble QR -->
    <section
      id="lidia-qr"
      data-animate
      class="py-20 bg-slate-50 dark:bg-slate-900/50 transition-all duration-700"
      :class="
        visibleSections.has('lidia-qr')
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      "
    >
      <div class="container max-w-7xl px-4 mx-auto">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div
              class="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-6"
            >
              <QrCode class="w-4 h-4" />
              {{ t('qr.badge') }}
            </div>
            <h2
              class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4"
            >
              {{ t('qr.title1') }}
              <span class="text-green-600 dark:text-green-400">
                {{ t('qr.title2') }}
              </span>
            </h2>
            <p class="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              {{ t('qr.subtitle') }}
            </p>
            <div class="space-y-4">
              <div
                v-for="(step, i) in qrSteps"
                :key="step.title"
                class="flex items-start gap-4"
              >
                <div
                  class="w-8 h-8 rounded-full bg-green-700 dark:bg-green-600 text-white dark:text-slate-950 text-sm font-bold flex items-center justify-center flex-shrink-0 shadow-md shadow-green-600/30"
                >
                  {{ i + 1 }}
                </div>
                <div>
                  <h3 class="font-bold text-slate-900 dark:text-white">
                    {{ t(step.title) }}
                  </h3>
                  <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {{ t(step.desc) }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="flex justify-center">
            <div class="relative w-[240px] sm:w-[280px]">
              <div
                class="absolute -inset-6 bg-green-500/10 rounded-full blur-3xl"
              ></div>
              <picture>
                <source srcset="/img/lidia/pantalla-reemo.webp" type="image/webp" />
                <img
                  src="/img/lidia/pantalla-reemo.jpg"
                  :alt="t('qr.altPhone')"
                  width="739"
                  height="1600"
                  loading="lazy"
                  decoding="async"
                  class="relative w-full h-auto rounded-[2rem] border-[6px] border-slate-900 dark:border-slate-700 shadow-2xl"
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Alertas de robo -->
    <section
      id="lidia-robo"
      data-animate
      class="py-20 transition-all duration-700"
      :class="
        visibleSections.has('lidia-robo')
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      "
    >
      <div class="container max-w-6xl px-4 mx-auto">
        <div class="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <!-- Mensaje -->
          <div>
            <div class="inline-flex items-center gap-2.5 mb-5">
              <span
                class="w-9 h-9 rounded-xl bg-red-100 dark:bg-red-900/30 flex items-center justify-center"
              >
                <Siren class="w-4 h-4 text-red-500" />
              </span>
              <span
                class="text-sm font-semibold text-red-600 dark:text-red-400"
              >
                {{ t('robo.badge') }}
              </span>
            </div>
            <h2
              class="text-3xl md:text-4xl xl:text-5xl font-bold text-slate-900 dark:text-white mb-5 leading-tight"
            >
              {{ t('robo.title1') }}
              <span class="text-green-600 dark:text-green-400"
                >{{ t('robo.title2') }}</span
              >
            </h2>
            <p
              class="text-lg text-slate-600 dark:text-slate-400 leading-relaxed"
            >
              {{ t('robo.p1') }} <strong>{{ t('robo.strong') }}</strong> {{ t('robo.p2') }}
            </p>
          </div>

          <!-- Los 3 pasos, en lista -->
          <div class="space-y-3">
            <div
              class="flex items-start gap-4 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 hover:border-green-500/40 hover:shadow-md transition-all duration-300"
            >
              <div
                class="w-12 h-12 rounded-xl bg-red-100 dark:bg-red-900/30 flex items-center justify-center shrink-0"
              >
                <Siren class="w-6 h-6 text-red-500" />
              </div>
              <div>
                <div class="flex items-baseline gap-2 mb-1">
                  <span
                    class="text-xs font-black text-slate-300 dark:text-slate-600"
                    >01</span
                  >
                  <h3 class="font-bold text-slate-900 dark:text-white">
                    {{ t('robo.s1.title') }}
                  </h3>
                </div>
                <p
                  class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed"
                >
                  {{ t('robo.s1.desc') }}
                </p>
              </div>
            </div>

            <div
              class="flex items-start gap-4 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 hover:border-green-500/40 hover:shadow-md transition-all duration-300"
            >
              <div
                class="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center shrink-0"
              >
                <Bell class="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <div class="flex items-baseline gap-2 mb-1">
                  <span
                    class="text-xs font-black text-slate-300 dark:text-slate-600"
                    >02</span
                  >
                  <h3 class="font-bold text-slate-900 dark:text-white">
                    {{ t('robo.s2.title') }}
                  </h3>
                </div>
                <p
                  class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed"
                >
                  {{ t('robo.s2.desc') }}
                </p>
              </div>
            </div>

            <div
              class="flex items-start gap-4 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 hover:border-green-500/40 hover:shadow-md transition-all duration-300"
            >
              <div
                class="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center shrink-0"
              >
                <ShieldCheck
                  class="w-6 h-6 text-green-600 dark:text-green-400"
                />
              </div>
              <div>
                <div class="flex items-baseline gap-2 mb-1">
                  <span
                    class="text-xs font-black text-slate-300 dark:text-slate-600"
                    >03</span
                  >
                  <h3 class="font-bold text-slate-900 dark:text-white">
                    {{ t('robo.s3.title') }}
                  </h3>
                </div>
                <p
                  class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed"
                >
                  {{ t('robo.s3.desc') }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- La app en acción -->
    <section
      id="lidia-accion"
      data-animate
      class="py-20 bg-slate-50 dark:bg-slate-900/50 transition-all duration-700"
      :class="
        visibleSections.has('lidia-accion')
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      "
    >
      <div class="container max-w-7xl px-4 mx-auto">
        <div class="text-center mb-12">
          <h2
            class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4"
          >
            LIDIA
            <span class="text-green-600 dark:text-green-400">{{ t('accion.title2') }}</span>
          </h2>
          <p class="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            {{ t('accion.subtitle') }}
          </p>
        </div>

        <!-- Galería: escenario (izq) + miniaturas (der en desktop) -->
        <div
          class="max-w-5xl mx-auto flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-10"
        >
          <!-- Escenario -->
          <div class="lg:flex-1 min-w-0 flex flex-col items-center">
            <div class="flex items-center justify-center gap-2 sm:gap-6">
            <Button
              variant="bare"
              size="free"
              type="button"
              :aria-label="t('common.prev')"
              class="shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-[5px] bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-md flex items-center justify-center text-slate-700 dark:text-slate-200 hover:border-green-500/50 hover:text-green-600 dark:hover:text-green-400 transition-colors [&_svg]:size-5"
              @click="galleryPrev"
            >
              <ChevronLeft class="w-5 h-5" />
            </Button>

            <!-- Escenario (teléfono) -->
            <div class="relative w-[220px] sm:w-[280px] shrink-0">
              <div
                class="rounded-[2.2rem] overflow-hidden border-[6px] border-slate-900 dark:border-slate-700 shadow-2xl bg-slate-900"
              >
                <video
                  v-if="gallery[galleryIndex].kind === 'video'"
                  :key="'v' + galleryIndex"
                  :src="gallery[galleryIndex].src"
                  :poster="gallery[galleryIndex].poster"
                  controls
                  muted
                  loop
                  playsinline
                  width="540"
                  height="1168"
                  class="w-full h-auto block bg-slate-900"
                ></video>
                <Button
                  v-else
                  variant="bare"
                  size="free"
                  type="button"
                  :aria-label="`${t('accion.zoom')}: ${t(gallery[galleryIndex].caption)}`"
                  class="group relative block w-full [&_svg]:size-5"
                  @click="openLightbox(gallery[galleryIndex].screenIdx)"
                >
                  <picture>
                    <source
                      :srcset="`/img/lidia/pantalla-${gallery[galleryIndex].name}.webp`"
                      type="image/webp"
                    />
                    <img
                      :src="`/img/lidia/pantalla-${gallery[galleryIndex].name}.jpg`"
                      :alt="t(gallery[galleryIndex].caption)"
                      width="739"
                      height="1600"
                      class="w-full h-auto block"
                    />
                  </picture>
                  <span
                    class="absolute inset-0 flex items-center justify-center bg-slate-950/0 group-hover:bg-slate-950/25 transition-colors"
                  >
                    <span
                      class="w-11 h-11 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <ZoomIn class="w-5 h-5 text-slate-900" aria-hidden="true" />
                    </span>
                  </span>
                </Button>
              </div>
            </div>

            <Button
              variant="bare"
              size="free"
              type="button"
              :aria-label="t('common.next')"
              class="shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-[5px] bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-md flex items-center justify-center text-slate-700 dark:text-slate-200 hover:border-green-500/50 hover:text-green-600 dark:hover:text-green-400 transition-colors [&_svg]:size-5"
              @click="galleryNext"
            >
              <ChevronRight class="w-5 h-5" />
            </Button>
          </div>

          <!-- Leyenda + contador -->
          <p
            class="mt-5 text-center text-sm font-medium text-slate-600 dark:text-slate-400"
          >
            {{ t(gallery[galleryIndex].caption) }}
            <span class="text-slate-400 dark:text-slate-500"
              >· {{ galleryIndex + 1 }}/{{ gallery.length }}</span
            >
          </p>
          </div>

          <!-- Miniaturas: abajo en móvil, a la derecha en desktop -->
          <div
            class="media-strip lg:flex-1 min-w-0 mt-6 lg:mt-0 flex gap-2.5 overflow-x-auto pb-2 sm:justify-center lg:grid lg:grid-cols-3 lg:gap-3 lg:overflow-x-visible lg:overflow-y-auto lg:max-h-[540px] lg:pb-0 lg:pr-1"
          >
            <Button
              v-for="(m, i) in gallery"
              :key="i"
              variant="bare"
              size="free"
              type="button"
              :aria-label="`${t('accion.view')} ${t(m.caption)}`"
              class="relative block shrink-0 w-12 sm:w-14 lg:w-full rounded-[5px] overflow-hidden border-2 transition-all [&_svg]:size-3.5"
              :class="
                i === galleryIndex
                  ? 'border-green-500'
                  : 'border-transparent opacity-50 hover:opacity-100'
              "
              @click="galleryIndex = i"
            >
              <picture>
                <source
                  :srcset="
                    m.kind === 'video'
                      ? m.posterWebp
                      : `/img/lidia/pantalla-${m.name}.webp`
                  "
                  type="image/webp"
                />
                <img
                  :src="
                    m.kind === 'video' ? m.poster : `/img/lidia/pantalla-${m.name}.jpg`
                  "
                  alt=""
                  width="739"
                  height="1600"
                  loading="lazy"
                  class="w-full h-auto block"
                />
              </picture>
              <span
                v-if="m.kind === 'video'"
                class="absolute inset-0 flex items-center justify-center bg-slate-950/40"
              >
                <Play class="w-3.5 h-3.5 text-white" />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>

    <!-- Lightbox de la galería: foto en grande con anterior / siguiente -->
    <Teleport to="body">
      <Transition name="lb-fade">
        <div
          v-if="lightboxIndex !== null"
          class="fixed inset-0 z-[100] bg-slate-950/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          @click.self="closeLightbox"
        >
          <Button
            variant="bare"
            size="free"
            type="button"
            :aria-label="t('common.close')"
            class="absolute top-4 right-4 w-11 h-11 rounded-[5px] bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors [&_svg]:size-5"
            @click="closeLightbox"
          >
            <X class="w-5 h-5" />
          </Button>

          <Button
            variant="bare"
            size="free"
            type="button"
            :aria-label="t('common.prev')"
            class="absolute left-3 sm:left-6 w-11 h-11 rounded-[5px] bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors [&_svg]:size-6"
            @click="prevShot"
          >
            <ChevronLeft class="w-6 h-6" />
          </Button>

          <figure class="flex flex-col items-center max-w-full">
            <picture>
              <source
                :srcset="`/img/lidia/pantalla-${screens[lightboxIndex].name}.webp`"
                type="image/webp"
              />
              <img
                :src="`/img/lidia/pantalla-${screens[lightboxIndex].name}.jpg`"
                :alt="t(screens[lightboxIndex].caption)"
                class="max-h-[78vh] w-auto rounded-2xl shadow-2xl"
              />
            </picture>
            <figcaption class="mt-4 text-sm text-white/90 text-center max-w-md">
              {{ t(screens[lightboxIndex].caption) }}
              <span class="block text-white/50 mt-1"
                >{{ lightboxIndex + 1 }} / {{ screens.length }}</span
              >
            </figcaption>
          </figure>

          <Button
            variant="bare"
            size="free"
            type="button"
            :aria-label="t('common.next')"
            class="absolute right-3 sm:right-6 w-11 h-11 rounded-[5px] bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors [&_svg]:size-6"
            @click="nextShot"
          >
            <ChevronRight class="w-6 h-6" />
          </Button>
        </div>
      </Transition>
    </Teleport>

    <!-- Números -->
    <section
      id="lidia-numeros"
      data-animate
      class="py-16 transition-all duration-700"
      :class="
        visibleSections.has('lidia-numeros')
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      "
    >
      <div class="container max-w-7xl px-4 mx-auto">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="stat in stats" :key="stat.label" class="text-center">
            <div
              class="text-4xl md:text-5xl font-extrabold text-green-600 dark:text-green-400 mb-2"
            >
              {{ stat.value }}
            </div>
            <p class="text-sm text-slate-600 dark:text-slate-400 leading-snug">
              {{ t(stat.label) }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Visión -->
    <section
      id="lidia-vision"
      data-animate
      class="py-20 bg-slate-50 dark:bg-slate-900/50 transition-all duration-700"
      :class="
        visibleSections.has('lidia-vision')
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      "
    >
      <div class="container mx-auto px-4">
        <div class="max-w-2xl mx-auto text-center">
          <h2
            class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4"
          >
            {{ t('vision.title1') }}
            <span class="text-green-600 dark:text-green-400">{{ t('vision.title2') }}</span>
          </h2>
          <p class="text-lg text-slate-600 dark:text-slate-400 mb-10">
            {{ t('vision.subtitle') }}
          </p>
          <!-- Carrusel de texto: rota los puntos con fundido, ancho pequeño -->
          <div class="max-w-md mx-auto">
            <div
              class="min-h-[5.5rem] sm:min-h-[4.5rem] flex items-center justify-center"
            >
              <Transition name="vision-fade" mode="out-in">
                <p
                  :key="visionIndex"
                  class="text-lg md:text-xl font-medium text-slate-800 dark:text-slate-100 leading-relaxed"
                >
                  {{ t(visionPoints[visionIndex]) }}
                </p>
              </Transition>
            </div>

            <!-- Puntos de navegación -->
            <div class="mt-6 flex justify-center gap-2.5">
              <Button
                v-for="(point, i) in visionPoints"
                :key="point"
                variant="bare"
                size="free"
                type="button"
                :aria-label="`${t('vision.viewPoint')} ${i + 1}`"
                class="h-2 rounded-full transition-all duration-300"
                :class="
                  i === visionIndex
                    ? 'w-6 bg-green-600 dark:bg-green-400'
                    : 'w-2 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-600'
                "
                @click="visionIndex = i"
              ></Button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section
      id="lidia-faq"
      data-animate
      class="py-20 transition-all duration-700"
      :class="
        visibleSections.has('lidia-faq')
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      "
    >
      <div class="container max-w-3xl px-4 mx-auto">
        <div class="text-center mb-12">
          <h2
            class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4"
          >
            {{ t('faq.title1') }}
            <span class="text-green-600 dark:text-green-400">{{ t('faq.title2') }}</span>
          </h2>
        </div>
        <div class="space-y-3">
          <details
            v-for="faq in faqs"
            :key="faq.q"
            class="group rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 overflow-hidden"
          >
            <summary
              class="flex items-center justify-between gap-4 p-5 cursor-pointer list-none font-semibold text-slate-900 dark:text-white hover:text-green-600 dark:hover:text-green-400 transition-colors [&::-webkit-details-marker]:hidden"
            >
              {{ t(faq.q) }}
              <ChevronDown
                class="w-5 h-5 flex-shrink-0 text-slate-400 group-open:rotate-180 transition-transform"
              />
            </summary>
            <p
              class="px-5 pb-5 text-sm text-slate-600 dark:text-slate-400 leading-relaxed"
            >
              {{ t(faq.a) }}
            </p>
          </details>
        </div>
      </div>
    </section>

  </div>
</template>

<style scoped>
.media-strip {
  scrollbar-width: none;
}
.media-strip::-webkit-scrollbar {
  display: none;
}

/* Lightbox: fundido de entrada/salida */
.lb-fade-enter-active,
.lb-fade-leave-active {
  transition: opacity 0.2s ease;
}
.lb-fade-enter-from,
.lb-fade-leave-to {
  opacity: 0;
}

/* Carrusel de texto de la visión: fundido con leve desplazamiento */
.vision-fade-enter-active,
.vision-fade-leave-active {
  transition:
    opacity 0.45s ease,
    transform 0.45s ease;
}
.vision-fade-enter-from {
  opacity: 0;
  transform: translateY(8px);
}
.vision-fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>

<i18n lang="json">
{
  "es": {
    "seo": {
      "title": "LIDIA - CODEGAHP | App de Trazabilidad y Administración Ganadera",
      "description": "LIDIA: la app ganadera que funciona sin señal. Padrón e inventario, sanidad, reproducción, genealogía, movilizaciones REEMO, compra-venta con doble QR y alertas de robo por municipio. Hecha para el campo mexicano.",
      "ogTitle": "LIDIA - Trazabilidad Ganadera Offline | CODEGAHP",
      "ogDescription": "Administra tu rancho desde el celular, haya o no señal: inventario, sanidad, reproducción, movilizaciones, ventas con QR y alertas de robo.",
      "jsonLdDesc": "Sistema integral de administración y trazabilidad ganadera offline-first para el campo mexicano."
    },
    "common": {
      "prev": "Anterior",
      "next": "Siguiente",
      "close": "Cerrar"
    },
    "hero": {
      "word1": "FUERZA",
      "word2": "TRADICIÓN",
      "word3": "GANADERÍA",
      "cta": "Quiero Acceso Anticipado",
      "seeAll": "Ver todo lo que hace ↓"
    },
    "qf": {
      "mexican": "Hecho para el campo mexicano",
      "offline": "Funciona sin señal",
      "platforms": "iOS y Android",
      "standards": "Alineada a SINIIGA y SENASICA"
    },
    "context": {
      "title": "Esto es de lo que hablamos",
      "subtitle": "Tu hato, animal por animal. En LIDIA cada arete es un expediente digital: identidad, peso, sanidad, genealogía y movimientos.",
      "altHerd": "Ganado en el potrero, con arete de identificación SINIIGA",
      "chip": "Arete = identidad digital",
      "cardTitle": "De la oreja al celular",
      "cardText": "Escaneas el arete y tienes todo el historial del animal en la mano — con o sin señal.",
      "altPortrait": "Vaca en el rancho mirando a cámara",
      "badge": "Hecho para el campo mexicano"
    },
    "offline": {
      "title1": "Sin señal,",
      "title2": "sin pretextos",
      "subtitle": "LIDIA nació para ranchos donde el internet no llega. Tu trabajo nunca se detiene ni se pierde.",
      "step1": {
        "title": "Captúralo donde estés",
        "desc": "En el potrero, en el corral o en la manga: registra animales, pesos, fotos, partos, sanidad y movilizaciones sin internet."
      },
      "step2": {
        "title": "Se guarda en tu teléfono",
        "desc": "Cada registro queda seguro en el dispositivo y visible al instante, como si nada. Nada se pierde si se va la señal."
      },
      "step3": {
        "title": "Se sincroniza solo",
        "desc": "Al volver la conexión, LIDIA envía todo en orden y sin duplicados, sin que muevas un dedo. Tú sigues trabajando."
      },
      "firstLoad": {
        "title": "La primera vez tarda un poquito; las demás, vuela",
        "p1": "En tu primer inicio de sesión, LIDIA descarga",
        "strong1": "completo",
        "p2": "tu padrón, tus catálogos y tus fotos para poder trabajar sin internet. Según el tamaño de tu hato y tu señal puede tomar unos minutos —",
        "strong2": "y es la única vez",
        "p3": ". A partir de ahí, la app abre al instante y responde de inmediato, con o sin conexión: todo vive en tu teléfono."
      }
    },
    "modules": {
      "title1": "Todo lo que LIDIA hace",
      "title2": "por tu rancho",
      "subtitle": "No es una libreta digital: es la operación completa de tu ganadería en el celular.",
      "altDashboard": "Dashboard de LIDIA",
      "viewDashboard": "Ver Dashboard",
      "altReemo": "Movilidad y comercio en LIDIA",
      "viewReemo": "Ver Movilidad y comercio",
      "m1": {
        "title": "Padrón e Inventario",
        "p1": "Cabezas activas, bajas y categorías siempre al día",
        "p2": "Arete SINIIGA + arete interno, con historial de cambios",
        "p3": "Peso con historial completo y galería de fotos por animal"
      },
      "m2": {
        "title": "Captura Rápida en Campo",
        "p1": "Acciones rápidas: escanear, registrar, REEMO y sanidad",
        "p2": "Alta de animales con foto aunque no haya señal",
        "p3": "Cola de subida visible, con reintentos automáticos"
      },
      "m3": {
        "title": "Dashboard que sí se Entiende",
        "p1": "Balance de sexos y estatus reproductivo del hato",
        "p2": "Ingresos del mes, comparativa y evolución de ventas",
        "p3": "Números grandes, legibles bajo el sol del potrero"
      },
      "m4": {
        "title": "Sanidad",
        "p1": "Campañas de vacunación, desparasitación y tratamientos con avance animal por animal",
        "p2": "Alertas de vacunas vigentes y gasto sanitario por animal",
        "p3": "Cada evento con su MVZ y cédula profesional"
      },
      "m5": {
        "title": "Reproducción",
        "p1": "El parto crea al becerro y actualiza a la madre en un paso",
        "p2": "Registro de gestación individual o por lote",
        "p3": "Gestantes, lactando, servidas y vacías siempre al día"
      },
      "m6": {
        "title": "Genealogía",
        "p1": "Padres y abuelos en la ficha de cada animal",
        "p2": "El linaje viaja con el animal cuando se vende",
        "p3": "Tus datos operativos siempre quedan privados"
      },
      "m7": {
        "title": "Compra-Venta con Doble QR",
        "p1": "Trato firmado entre dos teléfonos, cara a cara",
        "p2": "Nada se transfiere hasta acordar, pagar y emitir el comprobante",
        "p3": "Venta en pie o a rastro, comprobante PDF y borrador que no se pierde"
      },
      "m8": {
        "title": "Movilizaciones (REEMO)",
        "p1": "Salidas con motivo, UPP de origen y destino",
        "p2": "Historial de movimientos en la ficha de cada animal",
        "p3": "Se registra sin señal y se envía al reconectar"
      },
      "m9": {
        "title": "Alertas de Robo",
        "p1": "Reporta un robo en 3 pasos desde la app",
        "p2": "Aviso push inmediato a los ganaderos de tu municipio",
        "p3": "Tú decides qué datos se comparten en el aviso"
      },
      "m10": {
        "title": "Mi Rancho",
        "p1": "UPPs con clave SINIIGA y municipio",
        "p2": "Fierros, vehículos, parcelas y MVZ con su evidencia",
        "p3": "Todo consultable y editable sin internet"
      },
      "m11": {
        "title": "Recordatorios y Avisos",
        "p1": "Recordatorios de vacunas, revisiones y eventos",
        "p2": "Notificaciones que abren directo la pantalla correcta",
        "p3": "Centro de avisos dentro de la app"
      },
      "m12": {
        "title": "Seguridad de tus Datos",
        "p1": "Desbloqueo con huella, rostro o PIN",
        "p2": "Información sensible cifrada en tu teléfono",
        "p3": "Cuentas separadas: cada quien ve solo lo suyo"
      }
    },
    "qr": {
      "badge": "Función estrella",
      "title1": "Compra-venta segura,",
      "title2": "teléfono a teléfono",
      "subtitle": "Olvídate de tratos de palabra: el ganado cambia de dueño solo cuando los dos cumplieron. El comprador no ve tus animales en su inventario hasta que el trato queda en firme.",
      "altPhone": "Hub de movilidad y comercio de LIDIA: movilizaciones, compra-venta con doble QR y alertas de robo",
      "s1": {
        "title": "Acuerdan",
        "desc": "Vendedor y comprador escanean un doble QR firmado, teléfono a teléfono. Los animales quedan apartados, no transferidos."
      },
      "s2": {
        "title": "Pagan",
        "desc": "El vendedor marca el pago y el comprador lo aprueba. Sin pago aprobado, el trato no avanza."
      },
      "s3": {
        "title": "Comprobante",
        "desc": "Se genera el comprobante PDF con folio, listo para acompañar la guía oficial de movilización."
      },
      "s4": {
        "title": "Transferido",
        "desc": "El ganado cambia de dueño con su genealogía completa. El historial operativo de cada quien queda privado."
      }
    },
    "robo": {
      "badge": "Protección comunitaria",
      "title1": "Si te roban,",
      "title2": "tu municipio se entera al instante",
      "p1": "Reporta el robo en tres pasos y LIDIA manda una alerta push a los ganaderos de tu municipio — con el catálogo oficial INEGI de 2,463 municipios. Tú eliges qué datos se comparten; el resto queda privado. El animal se marca como",
      "strong": "Robado",
      "p2": "sin alterar tu inventario, y al recuperarlo, el reporte se resuelve.",
      "s1": {
        "title": "Reportas",
        "desc": "Eliges los animales robados y confirmas. Funciona aun sin señal."
      },
      "s2": {
        "title": "Todos alerta",
        "desc": "Los ganaderos de tu municipio reciben la notificación de inmediato."
      },
      "s3": {
        "title": "Tú controlas",
        "desc": "Privacidad por campo: compartes solo lo que tú decidas."
      }
    },
    "accion": {
      "title2": "en acción",
      "subtitle": "Así se ve y se siente: pantallas reales de la aplicación.",
      "zoom": "Ampliar",
      "view": "Ver"
    },
    "vid": {
      "identidad": "Ficha del animal: identidad, arete y galería",
      "genealogia": "Genealogía: padres y abuelos de un vistazo",
      "salud": "Salud: historial sanitario, gasto y MVZ"
    },
    "scr": {
      "dashboard": "Dashboard: tu hato en números claros",
      "sanidad": "Campañas sanitarias con avance real",
      "identidad": "Identidad: SINIIGA, arete interno y peso",
      "genealogia": "Árbol genealógico de cada animal",
      "salud": "Timeline de salud con costos y MVZ",
      "movimientos": "Historial REEMO por animal",
      "reemo": "Movilidad y comercio en un solo lugar",
      "ajustes": "Tu rancho: UPPs, fierros y vehículos"
    },
    "stats": {
      "s1": "de la captura diaria funciona sin internet",
      "s2": "pruebas automatizadas respaldan cada versión",
      "s3": "municipios INEGI en las alertas de robo",
      "s4": "plataformas, iOS y Android, una sola app"
    },
    "vision": {
      "title1": "Hecha para el",
      "title2": "campo mexicano",
      "subtitle": "LIDIA nace de la necesidad real del rancho: tecnología que sirve con botas puestas, no desde un escritorio.",
      "viewPoint": "Ver punto",
      "vp1": "Hecha para el ganadero mexicano, no adaptada de otro país",
      "vp2": "Interfaz simple: números grandes y flujos de dos o tres toques",
      "vp3": "Pensada para señal débil y planes de datos limitados",
      "vp4": "Alineada a la operación real: UPP, aretes SINIIGA, REEMO",
      "vp5": "Soporte que habla tu idioma y conoce el sector"
    },
    "faq": {
      "title1": "Preguntas",
      "title2": "frecuentes",
      "q1": "¿De verdad funciona sin internet?",
      "a1": "Sí. Toda la captura diaria — animales, pesos, fotos, sanidad, partos, movilizaciones y catálogos de tu rancho — funciona sin señal y se sincroniza sola al reconectar. Solo la compra-venta con QR requiere conexión, porque cada trato se firma digitalmente en el momento.",
      "q2": "¿Por qué la primera carga puede tardar?",
      "a2": "En tu primer inicio de sesión, LIDIA descarga completo tu padrón, tus catálogos y tus fotos para poder trabajar sin internet. Según el tamaño de tu hato y tu señal puede tomar unos minutos — y es la única vez. Después, la app abre y responde al instante, con o sin conexión.",
      "q3": "¿Qué pasa si se va la señal a media captura?",
      "a3": "Nada se pierde. El registro queda guardado en tu teléfono, en una cola visible que puedes revisar. Al volver la conexión se envía solo, en orden y sin duplicados. Incluso los borradores — como una venta a medias — se conservan aunque cierres la app.",
      "q4": "¿Mis datos están seguros?",
      "a4": "La app se protege con huella, rostro o PIN; la información sensible se guarda cifrada en el dispositivo y cada cuenta está aislada. LIDIA fue auditada bajo estándares internacionales de seguridad móvil (OWASP MASVS) y tus datos se respaldan en la nube al sincronizar.",
      "q5": "¿Cuándo puedo usarla?",
      "a5": "LIDIA está en acceso anticipado. Regístrate y te contactamos para sumarte a la lista de espera con beneficios de lanzamiento."
    }
  },
  "en": {
    "seo": {
      "title": "LIDIA - CODEGAHP | Livestock Traceability & Management App",
      "description": "LIDIA: the ranching app that works without signal. Registry and inventory, animal health, breeding, genealogy, REEMO movements, dual-QR buy-sell and municipality-wide theft alerts. Built for the Mexican countryside.",
      "ogTitle": "LIDIA - Offline Livestock Traceability | CODEGAHP",
      "ogDescription": "Run your ranch from your phone, with or without signal: inventory, health, breeding, movements, QR sales and theft alerts.",
      "jsonLdDesc": "Comprehensive offline-first livestock management and traceability system for the Mexican countryside."
    },
    "common": {
      "prev": "Previous",
      "next": "Next",
      "close": "Close"
    },
    "hero": {
      "word1": "STRENGTH",
      "word2": "TRADITION",
      "word3": "RANCHING",
      "cta": "I Want Early Access",
      "seeAll": "See everything it does ↓"
    },
    "qf": {
      "mexican": "Built for the Mexican countryside",
      "offline": "Works with no signal",
      "platforms": "iOS and Android",
      "standards": "Aligned with SINIIGA and SENASICA"
    },
    "context": {
      "title": "This is what we're talking about",
      "subtitle": "Your herd, animal by animal. In LIDIA every ear tag is a digital file: identity, weight, health, genealogy and movements.",
      "altHerd": "Cattle in the pasture, with a SINIIGA identification ear tag",
      "chip": "Ear tag = digital identity",
      "cardTitle": "From the ear to the phone",
      "cardText": "You scan the ear tag and have the animal's whole history in hand — with or without signal.",
      "altPortrait": "Cow on the ranch looking at the camera",
      "badge": "Built for the Mexican countryside"
    },
    "offline": {
      "title1": "No signal,",
      "title2": "no excuses",
      "subtitle": "LIDIA was born for ranches where the internet doesn't reach. Your work never stops and never gets lost.",
      "step1": {
        "title": "Capture it wherever you are",
        "desc": "In the pasture, the corral or the chute: record animals, weights, photos, births, health and movements without internet."
      },
      "step2": {
        "title": "It's saved on your phone",
        "desc": "Every record stays safe on the device and visible instantly, no problem. Nothing is lost if the signal drops."
      },
      "step3": {
        "title": "It syncs on its own",
        "desc": "When the connection comes back, LIDIA sends everything in order and without duplicates, without you lifting a finger. You keep working."
      },
      "firstLoad": {
        "title": "The first time takes a moment; every time after, it flies",
        "p1": "On your first login, LIDIA downloads your",
        "strong1": "entire",
        "p2": "registry, your catalogs and your photos so you can work without internet. Depending on the size of your herd and your signal it may take a few minutes —",
        "strong2": "and it's the only time",
        "p3": ". From then on, the app opens instantly and responds immediately, with or without a connection: everything lives on your phone."
      }
    },
    "modules": {
      "title1": "Everything LIDIA does",
      "title2": "for your ranch",
      "subtitle": "It's not a digital notebook: it's your entire cattle operation on your phone.",
      "altDashboard": "LIDIA dashboard",
      "viewDashboard": "View Dashboard",
      "altReemo": "Mobility and trade in LIDIA",
      "viewReemo": "View Mobility and trade",
      "m1": {
        "title": "Registry & Inventory",
        "p1": "Active head, culls and categories always up to date",
        "p2": "SINIIGA ear tag + internal tag, with a change history",
        "p3": "Weight with full history and a photo gallery per animal"
      },
      "m2": {
        "title": "Fast Field Capture",
        "p1": "Quick actions: scan, register, REEMO and health",
        "p2": "Add animals with a photo even with no signal",
        "p3": "Visible upload queue, with automatic retries"
      },
      "m3": {
        "title": "A Dashboard You Actually Get",
        "p1": "Sex balance and reproductive status of the herd",
        "p2": "Monthly income, comparisons and sales trends",
        "p3": "Big numbers, readable under the pasture sun"
      },
      "m4": {
        "title": "Health",
        "p1": "Vaccination, deworming and treatment campaigns with progress animal by animal",
        "p2": "Alerts for active vaccines and health spending per animal",
        "p3": "Every event with its MVZ and professional license"
      },
      "m5": {
        "title": "Reproduction",
        "p1": "A birth creates the calf and updates the mother in one step",
        "p2": "Gestation logging individually or by batch",
        "p3": "Pregnant, lactating, bred and open always up to date"
      },
      "m6": {
        "title": "Genealogy",
        "p1": "Sire and grandsires on every animal's profile",
        "p2": "The lineage travels with the animal when it's sold",
        "p3": "Your operational data always stays private"
      },
      "m7": {
        "title": "Buy & Sell with Dual QR",
        "p1": "A deal signed between two phones, face to face",
        "p2": "Nothing transfers until you agree, pay and issue the receipt",
        "p3": "Sale on the hoof or to slaughter, PDF receipt and a draft that isn't lost"
      },
      "m8": {
        "title": "Movements (REEMO)",
        "p1": "Departures with reason, origin and destination UPP",
        "p2": "Movement history on each animal's profile",
        "p3": "Logged offline and sent on reconnect"
      },
      "m9": {
        "title": "Theft Alerts",
        "p1": "Report a theft in 3 steps from the app",
        "p2": "Instant push alert to the ranchers in your municipality",
        "p3": "You decide what data is shared in the alert"
      },
      "m10": {
        "title": "My Ranch",
        "p1": "UPPs with SINIIGA code and municipality",
        "p2": "Brands, vehicles, plots and MVZ with their evidence",
        "p3": "All viewable and editable without internet"
      },
      "m11": {
        "title": "Reminders & Notices",
        "p1": "Reminders for vaccines, checkups and events",
        "p2": "Notifications that open the right screen directly",
        "p3": "Notice center inside the app"
      },
      "m12": {
        "title": "Your Data's Security",
        "p1": "Unlock with fingerprint, face or PIN",
        "p2": "Sensitive information encrypted on your phone",
        "p3": "Separate accounts: each person sees only their own"
      }
    },
    "qr": {
      "badge": "Star feature",
      "title1": "Secure buy and sell,",
      "title2": "phone to phone",
      "subtitle": "Forget handshake deals: cattle change owner only when both sides deliver. The buyer doesn't see your animals in their inventory until the deal is final.",
      "altPhone": "LIDIA mobility and trade hub: movements, buy-and-sell with dual QR and theft alerts",
      "s1": {
        "title": "They agree",
        "desc": "Seller and buyer scan a signed dual QR, phone to phone. The animals are set aside, not transferred."
      },
      "s2": {
        "title": "They pay",
        "desc": "The seller marks the payment and the buyer approves it. Without an approved payment, the deal doesn't move forward."
      },
      "s3": {
        "title": "Receipt",
        "desc": "A PDF receipt with a folio number is generated, ready to accompany the official movement permit."
      },
      "s4": {
        "title": "Transferred",
        "desc": "The cattle change owner with their full genealogy. Each party's operational history stays private."
      }
    },
    "robo": {
      "badge": "Community protection",
      "title1": "If you're robbed,",
      "title2": "your municipality knows instantly",
      "p1": "Report the theft in three steps and LIDIA sends a push alert to the ranchers in your municipality — with the official INEGI catalog of 2,463 municipalities. You choose what data is shared; the rest stays private. The animal is marked as",
      "strong": "Stolen",
      "p2": "without altering your inventory, and when you recover it, the report is resolved.",
      "s1": {
        "title": "You report",
        "desc": "You pick the stolen animals and confirm. It works even with no signal."
      },
      "s2": {
        "title": "Everyone alerted",
        "desc": "The ranchers in your municipality get the notification right away."
      },
      "s3": {
        "title": "You're in control",
        "desc": "Field-level privacy: you share only what you decide."
      }
    },
    "accion": {
      "title2": "in action",
      "subtitle": "This is how it looks and feels: real screens from the app.",
      "zoom": "Zoom in",
      "view": "View"
    },
    "vid": {
      "identidad": "Animal profile: identity, ear tag and gallery",
      "genealogia": "Genealogy: sires and grandsires at a glance",
      "salud": "Health: medical history, spending and MVZ"
    },
    "scr": {
      "dashboard": "Dashboard: your herd in clear numbers",
      "sanidad": "Health campaigns with real progress",
      "identidad": "Identity: SINIIGA, internal tag and weight",
      "genealogia": "Family tree for every animal",
      "salud": "Health timeline with costs and MVZ",
      "movimientos": "REEMO history per animal",
      "reemo": "Mobility and trade in one place",
      "ajustes": "Your ranch: UPPs, brands and vehicles"
    },
    "stats": {
      "s1": "of daily capture works without internet",
      "s2": "automated tests back every release",
      "s3": "INEGI municipalities in the theft alerts",
      "s4": "platforms, iOS and Android, one single app"
    },
    "vision": {
      "title1": "Built for the",
      "title2": "Mexican countryside",
      "subtitle": "LIDIA is born from the ranch's real needs: technology that works with your boots on, not from a desk.",
      "viewPoint": "View point",
      "vp1": "Built for the Mexican rancher, not adapted from another country",
      "vp2": "Simple interface: big numbers and two- or three-tap flows",
      "vp3": "Designed for weak signal and limited data plans",
      "vp4": "Aligned with real operations: UPP, SINIIGA ear tags, REEMO",
      "vp5": "Support that speaks your language and knows the industry"
    },
    "faq": {
      "title1": "Frequently asked",
      "title2": "questions",
      "q1": "Does it really work without internet?",
      "a1": "Yes. All daily capture — animals, weights, photos, health, births, movements and your ranch catalogs — works with no signal and syncs on its own when you reconnect. Only the QR buy-and-sell needs a connection, because each deal is digitally signed on the spot.",
      "q2": "Why can the first load take a while?",
      "a2": "On your first login, LIDIA downloads your full registry, your catalogs and your photos so you can work without internet. Depending on the size of your herd and your signal it may take a few minutes — and it's the only time. After that, the app opens and responds instantly, with or without a connection.",
      "q3": "What happens if the signal drops mid-capture?",
      "a3": "Nothing is lost. The record is saved on your phone, in a visible queue you can review. When the connection returns it sends on its own, in order and without duplicates. Even drafts — like a half-finished sale — are kept even if you close the app.",
      "q4": "Is my data secure?",
      "a4": "The app is protected with fingerprint, face or PIN; sensitive information is stored encrypted on the device and each account is isolated. LIDIA was audited under international mobile security standards (OWASP MASVS) and your data is backed up to the cloud when you sync.",
      "q5": "When can I use it?",
      "a5": "LIDIA is in early access. Sign up and we'll contact you to add you to the waitlist with launch benefits."
    }
  }
}
</i18n>
