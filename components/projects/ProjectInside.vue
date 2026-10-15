<script setup lang="ts">
// "Lo que hace por dentro" del programa abierto en /proyectos. A la izquierda,
// fija al hacer scroll, la idea del producto y su pantalla real (el panel de
// Clocc según el tema, o la app de LIDIA en un teléfono); a la derecha, sus
// funciones numeradas y unidas por una línea punteada, sin cards. Cada
// programa usa su propio color: cian→verde para Clocc, verde campo para LIDIA.
import {
  WifiOff,
  QrCode,
  Siren,
  Syringe,
  Baby,
  ClipboardList,
  Clock,
  Building2,
  MapPin,
  CalendarCheck,
  UserCog,
  Send,
} from "lucide-vue-next";

const props = defineProps<{ project: "clocc" | "lidia" }>();
const { t } = useI18n({ useScope: "local" });

const ICONS = {
  clocc: [Clock, Building2, MapPin, CalendarCheck, UserCog, Send],
  lidia: [WifiOff, ClipboardList, Syringe, Baby, QrCode, Siren],
};

const features = computed(() =>
  ICONS[props.project].map((icon, i) => ({
    icon,
    n: String(i + 1).padStart(2, "0"),
    title: t(`${props.project}.f${i + 1}.title`),
    desc: t(`${props.project}.f${i + 1}.desc`),
  })),
);

const accent = computed(() =>
  props.project === "clocc"
    ? {
        text: "text-sky-600 dark:text-sky-400",
        gradient: "from-sky-500 to-green-500",
        tile: "border-sky-500/20",
        line: "border-sky-500/30",
        glow: "from-sky-500/15 to-green-500/15",
      }
    : {
        text: "text-emerald-700 dark:text-emerald-400",
        gradient: "from-emerald-600 to-lime-500",
        tile: "border-emerald-600/20",
        line: "border-emerald-600/30",
        glow: "from-emerald-500/15 to-lime-500/10",
      },
);
</script>

<template>
  <section
    class="relative overflow-hidden border-t border-slate-100 bg-white py-20 dark:border-slate-900 dark:bg-slate-950 lg:py-28"
  >
    <!-- retícula tenue + resplandor del color del programa -->
    <div
      class="pointer-events-none absolute inset-0 bg-[radial-gradient(rgb(15_23_42/0.06)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)] dark:bg-[radial-gradient(rgb(255_255_255/0.05)_1px,transparent_1px)]"
      aria-hidden="true"
    ></div>
    <div
      class="pointer-events-none absolute -left-40 top-10 h-[30rem] w-[30rem] rounded-full bg-gradient-to-br blur-[120px]"
      :class="accent.glow"
      aria-hidden="true"
    ></div>

    <div
      class="relative grid gap-14 px-6 sm:px-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-20 lg:px-20"
    >
      <!-- La idea + la pantalla real -->
      <div class="self-start lg:sticky lg:top-28">
        <p
          class="mb-4 text-xs font-semibold uppercase tracking-[0.2em]"
          :class="accent.text"
        >
          {{ t("eyebrow") }}
        </p>
        <h2
          class="text-3xl font-black leading-[1.05] tracking-tight text-slate-900 dark:text-white sm:text-4xl xl:text-5xl"
        >
          {{ t(`${project}.title`) }}
          <span
            class="bg-gradient-to-r bg-clip-text text-transparent"
            :class="accent.gradient"
            >{{ t(`${project}.titleHighlight`) }}</span
          >
        </h2>
        <p
          class="mt-5 max-w-md text-lg leading-relaxed text-slate-600 dark:text-slate-400"
        >
          {{ t(`${project}.desc`) }}
        </p>

        <!-- Clocc: su panel, claro u oscuro según el tema -->
        <figure
          v-if="project === 'clocc'"
          class="mt-10 overflow-hidden rounded-xl bg-white shadow-2xl shadow-slate-900/15 ring-1 ring-slate-900/10 dark:bg-slate-900 dark:shadow-black/50 dark:ring-white/10"
        >
          <div
            class="flex h-7 items-center gap-1.5 border-b border-slate-200/80 bg-slate-50 px-3 dark:border-white/5 dark:bg-slate-800/80"
            aria-hidden="true"
          >
            <span class="h-2.5 w-2.5 rounded-full bg-[#ff5f57]"></span>
            <span class="h-2.5 w-2.5 rounded-full bg-[#febc2e]"></span>
            <span class="h-2.5 w-2.5 rounded-full bg-[#28c840]"></span>
          </div>
          <img
            src="/img/clocc/panel-claro.webp"
            :alt="t('clocc.alt')"
            width="1600"
            height="751"
            loading="lazy"
            decoding="async"
            class="block w-full dark:hidden"
          />
          <img
            src="/img/clocc/panel-oscuro.webp"
            :alt="t('clocc.alt')"
            width="1600"
            height="751"
            loading="lazy"
            decoding="async"
            class="hidden w-full dark:block"
          />
        </figure>

        <!-- LIDIA: la app en el teléfono, ligeramente girado -->
        <div v-else class="mt-10 flex justify-center">
          <div
            class="w-56 rotate-[-4deg] rounded-[2.6rem] bg-gradient-to-br from-[#71747c] via-[#2c2e33] to-[#5a5d64] p-[3px] shadow-[0_40px_70px_-20px_rgba(2,6,23,0.55)] transition-transform duration-500 hover:rotate-0 sm:w-64"
          >
            <div class="rounded-[2.45rem] bg-black p-2">
              <img
                src="/img/lidia/pantalla-dashboard.webp"
                :alt="t('lidia.alt')"
                width="739"
                height="1600"
                loading="lazy"
                decoding="async"
                class="block w-full rounded-[2rem]"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Funciones, numeradas y unidas por la línea punteada -->
      <div>
        <ol class="relative">
          <span
            class="absolute bottom-10 left-7 top-10 border-l-2 border-dashed"
            :class="accent.line"
            aria-hidden="true"
          ></span>
          <li
            v-for="f in features"
            :key="f.n"
            class="inside-item group relative flex gap-6 py-6"
          >
            <span
              class="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border bg-white shadow-sm transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-md dark:bg-slate-900"
              :class="accent.tile"
            >
              <component :is="f.icon" class="h-6 w-6" :class="accent.text" />
            </span>
            <div class="pt-1">
              <span
                class="text-xs font-bold tabular-nums tracking-widest"
                :class="accent.text"
                >{{ f.n }}</span
              >
              <h3
                class="mt-1 text-lg font-bold text-slate-900 dark:text-white sm:text-xl"
              >
                {{ f.title }}
              </h3>
              <p
                class="mt-1.5 max-w-lg leading-relaxed text-slate-500 dark:text-slate-400"
              >
                {{ f.desc }}
              </p>
            </div>
          </li>
        </ol>

        <p class="mt-6 pl-20 text-sm text-slate-400 dark:text-slate-500">
          {{ t(`${project}.footnote`) }}
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Cada función aparece al entrar en pantalla, ligada al scroll. Donde el
   navegador no lo soporta, simplemente se ven desde el inicio. */
@supports (animation-timeline: view()) {
  @media (prefers-reduced-motion: no-preference) {
    .inside-item {
      animation: inside-in linear both;
      animation-timeline: view();
      animation-range: entry 10% cover 30%;
    }
  }
}
@keyframes inside-in {
  from {
    opacity: 0;
    transform: translateY(28px);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
</style>

<i18n lang="json">
{
  "es": {
    "eyebrow": "Lo que hace por dentro",
    "clocc": {
      "title": "Todo lo que pasa entre la entrada",
      "titleHighlight": "y la salida",
      "desc": "No es solo un checador: es el control completo de la asistencia y el cumplimiento de tu personal, en una sola cuenta.",
      "alt": "Panel de asistencia de Clocc: horas trabajadas, retardos, faltas y tiempo extra",
      "footnote": "…y también el estado de cada reloj y agente, reportes y correos automáticos.",
      "f1": { "title": "Registro de asistencia", "desc": "Entradas y salidas desde los relojes que ya tienes, con el historial de cada persona." },
      "f2": { "title": "Varias razones sociales", "desc": "Cada empresa con sus datos aislados: el registro es de quien emplea a la persona." },
      "f3": { "title": "Home office con geocerca", "desc": "Registro remoto dentro del área que tú defines en el mapa." },
      "f4": { "title": "Vacaciones y permisos", "desc": "Solicitud, autorización de RRHH con firma y comprobante en PDF por correo." },
      "f5": { "title": "Expediente del empleado", "desc": "Datos, adscripciones y cómo registra cada quien, en un solo lugar." },
      "f6": { "title": "Asistente en Telegram", "desc": "Pregunta por tu equipo y recibe reportes en PDF, Excel o Word en el chat." }
    },
    "lidia": {
      "title": "Del potrero al celular,",
      "titleHighlight": "sin perder un dato",
      "desc": "No es una libreta digital: es la operación completa de tu ganadería en el celular, funcione o no la señal.",
      "alt": "Pantalla de inicio de LIDIA: padrón de ganado, estatus reproductivo y acciones rápidas",
      "footnote": "…y también REEMO, genealogía y seguridad biométrica.",
      "f1": { "title": "Offline-first", "desc": "Captura sin señal y sincroniza sola al reconectar." },
      "f2": { "title": "Padrón e inventario", "desc": "Aretes SINIIGA, pesos con historial y galería por animal." },
      "f3": { "title": "Sanidad", "desc": "Campañas y tratamientos, cada evento con su MVZ." },
      "f4": { "title": "Reproducción", "desc": "El parto crea al becerro y actualiza a la madre." },
      "f5": { "title": "Compra-venta con QR", "desc": "Trato firmado entre dos teléfonos, con comprobante." },
      "f6": { "title": "Alertas de robo", "desc": "Aviso push a los ganaderos de tu municipio." }
    }
  },
  "en": {
    "eyebrow": "What it does under the hood",
    "clocc": {
      "title": "Everything between clock-in",
      "titleHighlight": "and clock-out",
      "desc": "It's not just a time clock: it's complete control of your staff's attendance and compliance, in a single account.",
      "alt": "Clocc attendance dashboard: hours worked, late arrivals, absences and overtime",
      "footnote": "…and also the status of every clock and agent, reports and automatic emails.",
      "f1": { "title": "Attendance records", "desc": "Clock-ins and clock-outs from the devices you already have, with each person's history." },
      "f2": { "title": "Several legal entities", "desc": "Each company with its data isolated: the record belongs to whoever employs the person." },
      "f3": { "title": "Home office with geofence", "desc": "Remote records inside the area you define on the map." },
      "f4": { "title": "Vacations and permits", "desc": "Request, HR approval with signature and a PDF receipt by email." },
      "f5": { "title": "Employee file", "desc": "Data, assignments and how each person checks in, in one place." },
      "f6": { "title": "Telegram assistant", "desc": "Ask about your team and get PDF, Excel or Word reports in the chat." }
    },
    "lidia": {
      "title": "From pasture to phone,",
      "titleHighlight": "without losing a record",
      "desc": "It's not a digital notebook: it's your entire livestock operation on your phone, with or without signal.",
      "alt": "LIDIA home screen: herd registry, reproductive status and quick actions",
      "footnote": "…and also REEMO, genealogy and biometric security.",
      "f1": { "title": "Offline-first", "desc": "Capture without signal and sync automatically when you reconnect." },
      "f2": { "title": "Registry and inventory", "desc": "SINIIGA ear tags, weights with history and a gallery per animal." },
      "f3": { "title": "Health", "desc": "Campaigns and treatments, each event with its vet." },
      "f4": { "title": "Breeding", "desc": "Calving creates the calf and updates the mother." },
      "f5": { "title": "QR buy-sell", "desc": "A deal signed between two phones, with a receipt." },
      "f6": { "title": "Theft alerts", "desc": "Push notification to ranchers in your municipality." }
    }
  }
}
</i18n>
