<script setup lang="ts">
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  WifiOff,
  QrCode,
  Siren,
  Syringe,
  Baby,
  ClipboardList,
  Truck,
  CheckCircle2,
  MessageCircle,
} from "lucide-vue-next";

useSeoMeta({
  title: "Proyectos - CODEGAHP | LIDIA, nuestro producto insignia",
  description:
    "LIDIA es nuestro producto insignia: una app de trazabilidad ganadera que funciona sin señal — inventario, sanidad, reproducción y compra-venta con QR. Construimos software que aguanta el trabajo real.",
  ogTitle: "Proyectos | CODEGAHP — LIDIA, trazabilidad ganadera offline",
  ogDescription:
    "Nuestro producto insignia LIDIA: trazabilidad ganadera que funciona sin señal, hecha para el rancho mexicano.",
  ogImage: "https://codegahp.com/img/lidia/pantalla-dashboard.jpg",
});

const tech = ["Flutter", "NestJS", "PostgreSQL", "Firebase"];

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
    desc: "Captura en el rancho aunque no haya señal; sincroniza al reconectar.",
  },
  {
    icon: ClipboardList,
    title: "Padrón e inventario",
    desc: "Aretes SINIIGA, pesos con historial y galería por animal.",
  },
  {
    icon: Syringe,
    title: "Sanidad",
    desc: "Campañas de vacunación y tratamientos, cada evento con su MVZ.",
  },
  {
    icon: Baby,
    title: "Reproducción",
    desc: "El parto crea al becerro y actualiza a la madre en un paso.",
  },
  {
    icon: QrCode,
    title: "Compra-venta con QR",
    desc: "Trato firmado entre dos teléfonos, con comprobante en PDF.",
  },
  {
    icon: Siren,
    title: "Alertas de robo",
    desc: "Aviso push a los ganaderos de tu municipio al instante.",
  },
];

</script>

<template>
  <div class="min-h-screen bg-slate-50 dark:bg-slate-950 relative overflow-hidden">

    <div class="container max-w-7xl mx-auto px-4 relative z-10 py-20 lg:py-28">
      <!-- Encabezado -->
      <div class="max-w-3xl mx-auto text-center animate-fade-in-up">
        <div
          class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
        >
          <Sparkles class="w-4 h-4 text-primary" aria-hidden="true" />
          <span
            class="text-primary-dark dark:text-primary font-semibold text-sm uppercase tracking-widest"
          >
            Portafolio
          </span>
        </div>
        <h1
          class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-[1.05] mb-5"
        >
          Un producto real,
          <span
            class="text-primary"
          >
            hecho para el campo
          </span>
        </h1>
        <p class="text-lg lg:text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
          No presumimos portafolios inflados. Presumimos algo mejor: LIDIA,
          nuestro producto insignia, diseñado para el trabajo real del rancho
          mexicano.
        </p>
      </div>

      <!-- Caso LIDIA -->
      <div
        class="mt-16 rounded-[2rem] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 backdrop-blur overflow-hidden shadow-xl"
      >
        <div class="h-1 bg-primary"></div>
        <div class="p-6 sm:p-10 lg:p-12">
          <div class="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <!-- Info -->
            <div>
              <div class="flex items-center gap-3 flex-wrap mb-5">
                <div
                  class="w-14 h-14 rounded-2xl bg-white dark:bg-white flex items-center justify-center shadow-lg shadow-primary/25 p-2"
                >
                  <LidiaLogo class="w-full h-full" />
                </div>
                <div>
                  <div class="flex items-center gap-2">
                    <h2 class="text-3xl font-extrabold text-slate-900 dark:text-white">
                      LIDIA
                    </h2>
                    <span
                      class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10 text-primary-dark dark:text-primary text-xs font-bold"
                    >
                      <span class="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                      Acceso anticipado
                    </span>
                  </div>
                  <p class="text-slate-500 dark:text-slate-400 font-medium">
                    Trazabilidad ganadera offline-first
                  </p>
                </div>
              </div>

              <p class="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                La app que administra el rancho desde el celular, haya o no
                señal: padrón e inventario con aretes SINIIGA, sanidad,
                reproducción, movilizaciones REEMO, compra-venta con doble QR
                firmado y alertas de robo por municipio con notificación push.
              </p>

              <!-- Stack -->
              <div class="flex flex-wrap gap-2 mb-6">
                <span
                  v-for="t in tech"
                  :key="t"
                  class="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                >
                  {{ t }}
                </span>
              </div>

              <NuxtLink
                to="/servicios/lidia"
                class="group inline-flex items-center gap-2 px-8 h-12 rounded-xl bg-primary hover:bg-primary-dark text-white dark:text-slate-950 font-bold shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all"
              >
                Conoce LIDIA a fondo
                <ArrowRight class="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </NuxtLink>
            </div>

            <!-- Datos clave (reemplaza la galería de capturas) -->
            <div class="grid grid-cols-2 gap-3 sm:gap-4">
              <div
                v-for="st in stats"
                :key="st.label"
                class="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 p-5 text-center"
              >
                <div class="text-2xl lg:text-3xl font-extrabold text-primary mb-1">
                  {{ st.value }}
                </div>
                <p class="text-xs text-slate-500 dark:text-slate-400 leading-snug">
                  {{ st.label }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bento de funciones -->
      <div class="mt-14">
        <h2 class="text-2xl lg:text-3xl font-bold text-center text-slate-900 dark:text-white mb-8">
          Lo que hace LIDIA <span class="text-primary">por dentro</span>
        </h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div
            v-for="f in features"
            :key="f.title"
            class="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-5 hover:border-primary/40 hover:shadow-lg transition-all duration-300"
          >
            <div class="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
              <component :is="f.icon" class="w-5 h-5 text-primary" />
            </div>
            <h3 class="font-bold text-slate-900 dark:text-white">{{ f.title }}</h3>
            <p class="text-sm text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
              {{ f.desc }}
            </p>
          </div>
        </div>
        <p class="mt-6 text-center text-sm text-slate-500 dark:text-slate-400 inline-flex items-center gap-2 w-full justify-center">
          <Truck class="w-4 h-4 text-primary" />
          …y también movilizaciones REEMO, genealogía y seguridad biométrica.
        </p>
      </div>

      <!-- CTA honesto -->
      <div
        class="mt-16 rounded-3xl border border-primary/20 bg-primary/5 dark:bg-slate-900 p-8 lg:p-12 text-center"
      >
        <h2 class="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-3">
          ¿Tu proyecto podría ser el siguiente?
        </h2>
        <p class="text-slate-600 dark:text-slate-400 max-w-xl mx-auto mb-6">
          Construimos software a la medida — web, nube, automatización — con el
          mismo cuidado que le pusimos a LIDIA. Cuéntanos qué necesitas.
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-3">
          <NuxtLink
            to="/contacto"
            class="inline-flex items-center justify-center gap-2 px-8 h-12 rounded-xl bg-primary hover:bg-primary-dark text-white dark:text-slate-950 font-bold shadow-lg shadow-primary/25 transition-all"
          >
            <MessageCircle class="w-5 h-5" />
            Hablemos de tu idea
          </NuxtLink>
          <NuxtLink
            to="/servicios"
            class="inline-flex items-center justify-center gap-2 px-8 h-12 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold hover:border-primary hover:text-primary transition-all"
          >
            Ver servicios
            <ArrowUpRight class="w-5 h-5" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
}
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
