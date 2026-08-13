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

const { getServiceBySlug } = useServices();
const service = getServiceBySlug("lidia");

useSeoMeta({
  title: "LIDIA - CODEGAHP | App de Trazabilidad y Administración Ganadera",
  description:
    "LIDIA: la app ganadera que funciona sin señal. Padrón e inventario, sanidad, reproducción, genealogía, movilizaciones REEMO, compra-venta con doble QR y alertas de robo por municipio. Hecha para el campo mexicano.",
  ogTitle: "LIDIA - Trazabilidad Ganadera Offline | CODEGAHP",
  ogDescription:
    "Administra tu rancho desde el celular, haya o no señal: inventario, sanidad, reproducción, movilizaciones, ventas con QR y alertas de robo.",
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
        description:
          "Sistema integral de administración y trazabilidad ganadera offline-first para el campo mexicano.",
        publisher: { "@type": "Organization", name: "CODEGAHP" },
      }),
    },
  ],
});

const quickFacts = [
  { icon: LidiaLogo, label: "Hecho para el campo mexicano" },
  { icon: WifiOff, label: "Funciona sin señal" },
  { icon: Smartphone, label: "iOS y Android" },
  { icon: ShieldCheck, label: "Alineada a SINIIGA y SENASICA" },
];

const offlineSteps = [
  {
    icon: WifiOff,
    title: "Captúralo donde estés",
    desc: "En el potrero, en el corral o en la manga: registra animales, pesos, fotos, partos, sanidad y movilizaciones sin internet.",
  },
  {
    icon: Database,
    title: "Se guarda en tu teléfono",
    desc: "Cada registro queda seguro en el dispositivo y visible al instante, como si nada. Nada se pierde si se va la señal.",
  },
  {
    icon: RefreshCw,
    title: "Se sincroniza solo",
    desc: "Al volver la conexión, LIDIA envía todo en orden y sin duplicados, sin que muevas un dedo. Tú sigues trabajando.",
  },
];

const modules = [
  {
    icon: ClipboardList,
    title: "Padrón e Inventario",
    points: [
      "Cabezas activas, bajas y categorías siempre al día",
      "Arete SINIIGA + arete interno, con historial de cambios",
      "Peso con historial completo y galería de fotos por animal",
    ],
  },
  {
    icon: Zap,
    title: "Captura Rápida en Campo",
    points: [
      "Acciones rápidas: escanear, registrar, REEMO y sanidad",
      "Alta de animales con foto aunque no haya señal",
      "Cola de subida visible, con reintentos automáticos",
    ],
  },
  {
    icon: BarChart3,
    title: "Dashboard que sí se Entiende",
    points: [
      "Balance de sexos y estatus reproductivo del hato",
      "Ingresos del mes, comparativa y evolución de ventas",
      "Números grandes, legibles bajo el sol del potrero",
    ],
  },
  {
    icon: Syringe,
    title: "Sanidad",
    points: [
      "Campañas de vacunación, desparasitación y tratamientos con avance animal por animal",
      "Alertas de vacunas vigentes y gasto sanitario por animal",
      "Cada evento con su MVZ y cédula profesional",
    ],
  },
  {
    icon: Baby,
    title: "Reproducción",
    points: [
      "El parto crea al becerro y actualiza a la madre en un paso",
      "Registro de gestación individual o por lote",
      "Gestantes, lactando, servidas y vacías siempre al día",
    ],
  },
  {
    icon: Dna,
    title: "Genealogía",
    points: [
      "Padres y abuelos en la ficha de cada animal",
      "El linaje viaja con el animal cuando se vende",
      "Tus datos operativos siempre quedan privados",
    ],
  },
  {
    icon: QrCode,
    title: "Compra-Venta con Doble QR",
    points: [
      "Trato firmado entre dos teléfonos, cara a cara",
      "Nada se transfiere hasta acordar, pagar y emitir el comprobante",
      "Venta en pie o a rastro, comprobante PDF y borrador que no se pierde",
    ],
  },
  {
    icon: Truck,
    title: "Movilizaciones (REEMO)",
    points: [
      "Salidas con motivo, UPP de origen y destino",
      "Historial de movimientos en la ficha de cada animal",
      "Se registra sin señal y se envía al reconectar",
    ],
  },
  {
    icon: Siren,
    title: "Alertas de Robo",
    points: [
      "Reporta un robo en 3 pasos desde la app",
      "Aviso push inmediato a los ganaderos de tu municipio",
      "Tú decides qué datos se comparten en el aviso",
    ],
  },
  {
    icon: Warehouse,
    title: "Mi Rancho",
    points: [
      "UPPs con clave SINIIGA y municipio",
      "Fierros, vehículos, parcelas y MVZ con su evidencia",
      "Todo consultable y editable sin internet",
    ],
  },
  {
    icon: Bell,
    title: "Recordatorios y Avisos",
    points: [
      "Recordatorios de vacunas, revisiones y eventos",
      "Notificaciones que abren directo la pantalla correcta",
      "Centro de avisos dentro de la app",
    ],
  },
  {
    icon: Fingerprint,
    title: "Seguridad de tus Datos",
    points: [
      "Desbloqueo con huella, rostro o PIN",
      "Información sensible cifrada en tu teléfono",
      "Cuentas separadas: cada quien ve solo lo suyo",
    ],
  },
];

const qrSteps = [
  {
    title: "Acuerdan",
    desc: "Vendedor y comprador escanean un doble QR firmado, teléfono a teléfono. Los animales quedan apartados, no transferidos.",
  },
  {
    title: "Pagan",
    desc: "El vendedor marca el pago y el comprador lo aprueba. Sin pago aprobado, el trato no avanza.",
  },
  {
    title: "Comprobante",
    desc: "Se genera el comprobante PDF con folio, listo para acompañar la guía oficial de movilización.",
  },
  {
    title: "Transferido",
    desc: "El ganado cambia de dueño con su genealogía completa. El historial operativo de cada quien queda privado.",
  },
];

const videos = [
  {
    key: "identidad",
    src: "/img/lidia/demo-identidad.mp4",
    poster: "/img/lidia/poster-identidad",
    caption: "Ficha del animal: identidad, arete y galería",
  },
  {
    key: "genealogia",
    src: "/img/lidia/demo-genealogia.mp4",
    poster: "/img/lidia/poster-genealogia",
    caption: "Genealogía: padres y abuelos de un vistazo",
  },
  {
    key: "salud",
    src: "/img/lidia/demo-salud.mp4",
    poster: "/img/lidia/poster-salud",
    caption: "Salud: historial sanitario, gasto y MVZ",
  },
];

const screens = [
  { name: "dashboard", caption: "Dashboard: tu hato en números claros" },
  { name: "sanidad", caption: "Campañas sanitarias con avance real" },
  { name: "identidad", caption: "Identidad: SINIIGA, arete interno y peso" },
  { name: "genealogia", caption: "Árbol genealógico de cada animal" },
  { name: "salud", caption: "Timeline de salud con costos y MVZ" },
  { name: "movimientos", caption: "Historial REEMO por animal" },
  { name: "reemo", caption: "Movilidad y comercio en un solo lugar" },
  { name: "ajustes", caption: "Tu rancho: UPPs, fierros y vehículos" },
];

const stats = [
  { value: "100%", label: "de la captura diaria funciona sin internet" },
  { value: "+200", label: "pruebas automatizadas respaldan cada versión" },
  { value: "2,463", label: "municipios INEGI en las alertas de robo" },
  { value: "2", label: "plataformas, iOS y Android, una sola app" },
];

const visionPoints = [
  "Hecha para el ganadero mexicano, no adaptada de otro país",
  "Interfaz simple: números grandes y flujos de dos o tres toques",
  "Pensada para señal débil y planes de datos limitados",
  "Alineada a la operación real: UPP, aretes SINIIGA, REEMO",
  "Soporte que habla tu idioma y conoce el sector",
];

const faqs = [
  {
    q: "¿De verdad funciona sin internet?",
    a: "Sí. Toda la captura diaria — animales, pesos, fotos, sanidad, partos, movilizaciones y catálogos de tu rancho — funciona sin señal y se sincroniza sola al reconectar. Solo la compra-venta con QR requiere conexión, porque cada trato se firma digitalmente en el momento.",
  },
  {
    q: "¿Por qué la primera carga puede tardar?",
    a: "En tu primer inicio de sesión, LIDIA descarga completo tu padrón, tus catálogos y tus fotos para poder trabajar sin internet. Según el tamaño de tu hato y tu señal puede tomar unos minutos — y es la única vez. Después, la app abre y responde al instante, con o sin conexión.",
  },
  {
    q: "¿Qué pasa si se va la señal a media captura?",
    a: "Nada se pierde. El registro queda guardado en tu teléfono, en una cola visible que puedes revisar. Al volver la conexión se envía solo, en orden y sin duplicados. Incluso los borradores — como una venta a medias — se conservan aunque cierres la app.",
  },
  {
    q: "¿Mis datos están seguros?",
    a: "La app se protege con huella, rostro o PIN; la información sensible se guarda cifrada en el dispositivo y cada cuenta está aislada. LIDIA fue auditada bajo estándares internacionales de seguridad móvil (OWASP MASVS) y tus datos se respaldan en la nube al sincronizar.",
  },
  {
    q: "¿Cuándo puedo usarla?",
    a: "LIDIA está en acceso anticipado. Regístrate y te contactamos para sumarte a la lista de espera con beneficios de lanzamiento.",
  },
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
              <span class="text-[#00723F] dark:text-green-500">FUERZA</span><span
                class="text-slate-400 dark:text-slate-500"
                >,</span
              ><br />
              <span class="text-slate-800 dark:text-white">TRADICIÓN</span><span
                class="text-slate-400 dark:text-slate-500"
                >,</span
              ><br />
              <span class="text-[#C8102E] dark:text-red-500">GANADERÍA</span><span
                class="text-slate-800 dark:text-white"
                >.</span
              >
            </h1>
            <div
              class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <NuxtLink to="/contacto">
                <Button
                  size="lg"
                  class="bg-green-700 hover:bg-green-800 dark:bg-green-600 dark:hover:bg-green-500 text-white dark:text-slate-950 text-lg h-12 px-8 shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transition-all transform hover:-translate-y-0.5"
                >
                  Quiero Acceso Anticipado
                  <ArrowRight class="w-5 h-5 ml-2" />
                </Button>
              </NuxtLink>
              <a
                href="#lidia-modules"
                class="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-green-600 dark:hover:text-green-400 transition-colors"
              >
                Ver todo lo que hace ↓
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
            {{ fact.label }}
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
            Esto es de lo que hablamos
          </h2>
          <p class="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Tu hato, animal por animal. En LIDIA cada arete es un expediente
            digital: identidad, peso, sanidad, genealogía y movimientos.
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
                alt="Ganado en el potrero, con arete de identificación SINIIGA"
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
              Arete = identidad digital
            </span>

            <div class="absolute bottom-0 inset-x-0 p-6 sm:p-8">
              <h3
                class="text-2xl sm:text-3xl font-extrabold text-white mb-1.5 [text-shadow:0_2px_14px_rgba(0,0,0,0.5)]"
              >
                De la oreja al celular
              </h3>
              <p
                class="text-slate-100 text-sm sm:text-base max-w-lg [text-shadow:0_1px_10px_rgba(0,0,0,0.45)]"
              >
                Escaneas el arete y tienes todo el historial del animal en la
                mano — con o sin señal.
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
                alt="Vaca en el rancho mirando a cámara"
                loading="lazy"
                decoding="async"
                class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </picture>
            <div class="absolute inset-0 bg-slate-950/25"></div>
            <span
              class="absolute bottom-5 left-5 right-5 text-white font-semibold text-sm sm:text-base [text-shadow:0_1px_10px_rgba(0,0,0,0.5)]"
            >
              Hecho para el campo mexicano
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
            Sin señal,
            <span class="text-green-600 dark:text-green-400">sin pretextos</span>
          </h2>
          <p class="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            LIDIA nació para ranchos donde el internet no llega. Tu trabajo
            nunca se detiene ni se pierde.
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
              {{ step.title }}
            </h3>
            <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {{ step.desc }}
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
              La primera vez tarda un poquito; las demás, vuela
            </h3>
            <p class="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              En tu primer inicio de sesión, LIDIA descarga
              <strong>completo</strong> tu padrón, tus catálogos y tus fotos
              para poder trabajar sin internet. Según el tamaño de tu hato y tu
              señal puede tomar unos minutos —
              <strong>y es la única vez</strong>. A partir de ahí, la app abre
              al instante y responde de inmediato, con o sin conexión: todo
              vive en tu teléfono.
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
            Todo lo que LIDIA hace
            <span class="text-green-600 dark:text-green-400">por tu rancho</span>
          </h2>
          <p class="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            No es una libreta digital: es la operación completa de tu ganadería
            en el celular.
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
                alt="Dashboard de LIDIA"
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
              Ver Dashboard
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
                {{ mod.title }}
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
                  <span>{{ point }}</span>
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
                alt="Movilidad y comercio en LIDIA"
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
              Ver Movilidad y comercio
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
                {{ mod.title }}
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
                  <span>{{ point }}</span>
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
              Función estrella
            </div>
            <h2
              class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4"
            >
              Compra-venta segura,
              <span class="text-green-600 dark:text-green-400">
                teléfono a teléfono
              </span>
            </h2>
            <p class="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              Olvídate de tratos de palabra: el ganado cambia de dueño solo
              cuando los dos cumplieron. El comprador no ve tus animales en su
              inventario hasta que el trato queda en firme.
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
                    {{ step.title }}
                  </h3>
                  <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {{ step.desc }}
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
                  alt="Hub de movilidad y comercio de LIDIA: movilizaciones, compra-venta con doble QR y alertas de robo"
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
                Protección comunitaria
              </span>
            </div>
            <h2
              class="text-3xl md:text-4xl xl:text-5xl font-bold text-slate-900 dark:text-white mb-5 leading-tight"
            >
              Si te roban,
              <span class="text-green-600 dark:text-green-400"
                >tu municipio se entera al instante</span
              >
            </h2>
            <p
              class="text-lg text-slate-600 dark:text-slate-400 leading-relaxed"
            >
              Reporta el robo en tres pasos y LIDIA manda una alerta push a los
              ganaderos de tu municipio — con el catálogo oficial INEGI de 2,463
              municipios. Tú eliges qué datos se comparten; el resto queda
              privado. El animal se marca como <strong>Robado</strong> sin
              alterar tu inventario, y al recuperarlo, el reporte se resuelve.
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
                    Reportas
                  </h3>
                </div>
                <p
                  class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed"
                >
                  Eliges los animales robados y confirmas. Funciona aun sin
                  señal.
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
                    Todos alerta
                  </h3>
                </div>
                <p
                  class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed"
                >
                  Los ganaderos de tu municipio reciben la notificación de
                  inmediato.
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
                    Tú controlas
                  </h3>
                </div>
                <p
                  class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed"
                >
                  Privacidad por campo: compartes solo lo que tú decidas.
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
            <span class="text-green-600 dark:text-green-400">en acción</span>
          </h2>
          <p class="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Así se ve y se siente: pantallas reales de la aplicación.
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
              aria-label="Anterior"
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
                  :aria-label="`Ampliar: ${gallery[galleryIndex].caption}`"
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
                      :alt="gallery[galleryIndex].caption"
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
              aria-label="Siguiente"
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
            {{ gallery[galleryIndex].caption }}
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
              :aria-label="`Ver ${m.caption}`"
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
            aria-label="Cerrar"
            class="absolute top-4 right-4 w-11 h-11 rounded-[5px] bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors [&_svg]:size-5"
            @click="closeLightbox"
          >
            <X class="w-5 h-5" />
          </Button>

          <Button
            variant="bare"
            size="free"
            type="button"
            aria-label="Anterior"
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
                :alt="screens[lightboxIndex].caption"
                class="max-h-[78vh] w-auto rounded-2xl shadow-2xl"
              />
            </picture>
            <figcaption class="mt-4 text-sm text-white/90 text-center max-w-md">
              {{ screens[lightboxIndex].caption }}
              <span class="block text-white/50 mt-1"
                >{{ lightboxIndex + 1 }} / {{ screens.length }}</span
              >
            </figcaption>
          </figure>

          <Button
            variant="bare"
            size="free"
            type="button"
            aria-label="Siguiente"
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
              {{ stat.label }}
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
            Hecha para el
            <span class="text-green-600 dark:text-green-400">campo mexicano</span>
          </h2>
          <p class="text-lg text-slate-600 dark:text-slate-400 mb-10">
            LIDIA nace de la necesidad real del rancho: tecnología que sirve
            con botas puestas, no desde un escritorio.
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
                  {{ visionPoints[visionIndex] }}
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
                :aria-label="`Ver punto ${i + 1}`"
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
            Preguntas
            <span class="text-green-600 dark:text-green-400">frecuentes</span>
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
              {{ faq.q }}
              <ChevronDown
                class="w-5 h-5 flex-shrink-0 text-slate-400 group-open:rotate-180 transition-transform"
              />
            </summary>
            <p
              class="px-5 pb-5 text-sm text-slate-600 dark:text-slate-400 leading-relaxed"
            >
              {{ faq.a }}
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
