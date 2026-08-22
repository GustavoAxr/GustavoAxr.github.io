<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import {
  WifiOff,
  ClipboardList,
  Syringe,
  Baby,
  QrCode,
  Siren,
  Truck,
  ArrowRight,
  Smartphone,
  ShieldCheck,
} from "lucide-vue-next";

const { t } = useI18n({ useScope: "local" });

const isVisible = ref(false);
let observer: IntersectionObserver | null = null;

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          isVisible.value = true;
          observer?.disconnect();
        }
      });
    },
    // threshold 0: en móvil la sección es muy alta y 0.15 no se alcanzaba,
    // dejando el contenido en opacity-0 (invisible).
    { threshold: 0 },
  );
  const el = document.getElementById("proud-products");
  if (el) observer.observe(el);
});
onUnmounted(() => observer?.disconnect());

// Funciones REALES de LIDIA
const features = [
  {
    icon: WifiOff,
    title: t("features.offline.title"),
    desc: t("features.offline.desc"),
  },
  {
    icon: ClipboardList,
    title: t("features.registry.title"),
    desc: t("features.registry.desc"),
  },
  {
    icon: Syringe,
    title: t("features.health.title"),
    desc: t("features.health.desc"),
  },
  {
    icon: Baby,
    title: t("features.breeding.title"),
    desc: t("features.breeding.desc"),
  },
  {
    icon: QrCode,
    title: t("features.trade.title"),
    desc: t("features.trade.desc"),
  },
  {
    icon: Siren,
    title: t("features.theft.title"),
    desc: t("features.theft.desc"),
  },
];

const stats = [
  { icon: WifiOff, value: "100%", label: t("stats.offline") },
  { icon: ShieldCheck, value: "2,463", label: t("stats.municipalities") },
  { icon: Smartphone, value: "iOS + Android", label: t("stats.oneApp") },
];
</script>

<template>
  <section
    id="proud-products"
    class="relative overflow-hidden py-10 lg:py-10 bg-slate-50 dark:bg-slate-950"
  >
    <!-- Glows de marca (solo desktop: el blur de 130px es pesado en móvil) -->
    <div
      class="hidden md:block absolute top-10 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[130px] pointer-events-none"
    ></div>
    <div
      class="hidden md:block absolute bottom-10 right-1/4 w-96 h-96 bg-circuit-cyan/10 rounded-full blur-[130px] pointer-events-none"
    ></div>

    <div class="container max-w-7xl mx-auto px-4 relative z-10">
      <!-- Encabezado -->
      <div
        class="text-center max-w-3xl mx-auto mb-16 transition-all duration-700"
        :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
      >
       
       
        <h2
          class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-[1.05] mb-5"
        >
        <span class="text-primary">

          LIDIA
        </span>
          {{ t("tagline") }}
        </h2>
        
      </div>

      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <!-- Teléfonos -->
        <div
          class="relative flex justify-center transition-all duration-700"
          :class="isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'"
        >
          <div class="relative w-[300px] sm:w-[360px] h-[420px] sm:h-[500px]">
            <!-- Teléfono trasero -->
            <div
              class="absolute right-0 top-8 w-[150px] sm:w-[180px] rotate-6"
              aria-hidden="true"
            >
              <picture>
                <source srcset="/img/lidia/pantalla-reemo.webp" type="image/webp" />
                <img
                  src="/img/lidia/pantalla-reemo.jpg"
                  alt=""
                  width="739"
                  height="1600"
                  loading="lazy"
                  decoding="async"
                  class="w-full rounded-[1.75rem] border-[5px] border-slate-900 dark:border-slate-700 shadow-2xl"
                />
              </picture>
            </div>
            <!-- Teléfono frontal -->
            <div class="absolute left-0 top-0 w-[165px] sm:w-[200px] -rotate-3">
              <div
                class="absolute -inset-4 bg-primary/20 rounded-full blur-2xl"
              ></div>
              <picture>
                <source
                  srcset="/img/lidia/pantalla-dashboard.webp"
                  type="image/webp"
                />
                <img
                  src="/img/lidia/pantalla-dashboard.jpg"
                  :alt="t('dashboardAlt')"
                  width="739"
                  height="1600"
                  loading="lazy"
                  decoding="async"
                  class="relative w-full rounded-[1.75rem] border-[5px] border-slate-900 dark:border-slate-700 shadow-2xl"
                />
              </picture>
            </div>
            <!-- Chip flotante -->
            <div
              class="absolute left-2 bottom-2 flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/90 dark:bg-slate-800/90 backdrop-blur border border-slate-200 dark:border-slate-700 shadow-lg text-xs font-semibold text-slate-700 dark:text-slate-200 z-10"
            >
              <WifiOff class="w-3.5 h-3.5 text-primary" />
              {{ t("chip") }}
            </div>
          </div>
        </div>

        <!-- Bento de funciones -->
        <div
          class="transition-all duration-700"
          :class="isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'"
        >
          <div class="grid sm:grid-cols-2 gap-3">
            <div
              v-for="f in features"
              :key="f.title"
              class="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-5 hover:border-primary/40 hover:shadow-lg transition-all duration-300"
            >
              <div
                class="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3"
              >
                <component :is="f.icon" class="w-5 h-5 text-primary" />
              </div>
              <h3 class="font-bold text-slate-900 dark:text-white text-sm">
                {{ f.title }}
              </h3>
              <p class="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                {{ f.desc }}
              </p>
            </div>
          </div>

          <!-- Movilizaciones + CTA -->
          <div class="mt-4 flex flex-col sm:flex-row items-center gap-4">
            <span
              class="inline-flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400"
            >
              <Truck class="w-4 h-4 text-primary" />
              {{ t("more") }}
            </span>
          </div>

          <Button as-child variant="bare" size="free" class="[&_svg]:size-5">
            <NuxtLinkLocale
              to="/servicios/lidia"
              class="mt-6 group inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 h-12 rounded-[5px] bg-primary hover:bg-primary-dark text-white dark:text-slate-950 font-bold shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all"
            >
              {{ t("cta") }}
              <ArrowRight class="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </NuxtLinkLocale>
          </Button>
        </div>
      </div>

      <!-- Franja de datos -->
      <div
        class="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto"
      >
       
      
      </div>
    </div>
  </section>
</template>

<i18n lang="json">
{
  "es": {
    "tagline": ", la app que aguanta el campo",
    "chip": "Sin señal · Guardado ✓",
    "dashboardAlt": "Pantalla principal de LIDIA con el padrón de ganado",
    "more": "…y también movilizaciones REEMO y genealogía.",
    "cta": "Conoce LIDIA a fondo",
    "features": {
      "offline": {
        "title": "Funciona sin señal",
        "desc": "Captura en el potrero y se sincroniza sola al reconectar."
      },
      "registry": {
        "title": "Padrón e inventario",
        "desc": "Aretes SINIIGA, pesos, fotos y categorías siempre al día."
      },
      "health": {
        "title": "Sanidad",
        "desc": "Campañas de vacunación y tratamientos con su MVZ y cédula."
      },
      "breeding": {
        "title": "Reproducción",
        "desc": "El parto crea al becerro y actualiza a la madre en un paso."
      },
      "trade": {
        "title": "Compra-venta con QR",
        "desc": "Trato firmado entre dos teléfonos, con comprobante PDF."
      },
      "theft": {
        "title": "Alertas de robo",
        "desc": "Aviso push a los ganaderos de tu municipio al instante."
      }
    },
    "stats": {
      "offline": "de la captura, sin internet",
      "municipalities": "municipios en alertas de robo",
      "oneApp": "una sola app"
    }
  },
  "en": {
    "tagline": ", the app built for ranch life",
    "chip": "No signal · Saved ✓",
    "dashboardAlt": "LIDIA main screen with the cattle registry",
    "more": "…plus REEMO movements and genealogy.",
    "cta": "Explore LIDIA in depth",
    "features": {
      "offline": {
        "title": "Works with no signal",
        "desc": "Capture out in the pasture and it syncs on its own once you reconnect."
      },
      "registry": {
        "title": "Registry and inventory",
        "desc": "SINIIGA ear tags, weights, photos and categories always up to date."
      },
      "health": {
        "title": "Animal health",
        "desc": "Vaccination campaigns and treatments with your MVZ and license number."
      },
      "breeding": {
        "title": "Breeding",
        "desc": "Calving creates the calf and updates the mother in a single step."
      },
      "trade": {
        "title": "Buy/sell with QR",
        "desc": "A deal signed between two phones, with a PDF receipt."
      },
      "theft": {
        "title": "Theft alerts",
        "desc": "An instant push alert to the ranchers in your municipality."
      }
    },
    "stats": {
      "offline": "of data capture, offline",
      "municipalities": "municipalities on theft alerts",
      "oneApp": "one single app"
    }
  }
}
</i18n>
