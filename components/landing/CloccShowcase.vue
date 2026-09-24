<script setup lang="ts">
// Vitrina del panel de Clocc en el hero. La captura real (clara u oscura según
// el tema) va dentro de una ventana con inclinación 3D que sigue al cursor,
// flotación suave y un destello que la recorre. Alrededor flotan chips a
// distintas profundidades con funciones reales: registros en vivo, el latido
// de un reloj y la geocerca de home office. Los eventos son ilustrativos y no
// llevan nombres de personas. Sin movimiento si el usuario lo prefiere así.
import {
  Fingerprint,
  MapPin,
  Clock,
  CalendarCheck,
  LogOut,
} from "lucide-vue-next";

const { t } = useI18n({ useScope: "local" });

type Tone = "ok" | "late" | "info";

const events = computed(() => [
  { icon: Fingerprint, key: "e1", time: "08:02", tone: "ok" as Tone },
  { icon: MapPin, key: "e2", time: "08:15", tone: "ok" as Tone },
  { icon: Clock, key: "e3", time: "08:21", tone: "late" as Tone },
  { icon: CalendarCheck, key: "e4", time: "12:40", tone: "info" as Tone },
  { icon: LogOut, key: "e5", time: "17:31", tone: "ok" as Tone },
]);
const toneClass: Record<Tone, string> = {
  ok: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  late: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  info: "bg-sky-500/10 text-sky-600 dark:text-sky-400",
};

const current = ref(0);
const event = computed(() => events.value[current.value]!);
const beat = ref(1);

// Inclinación 3D siguiendo al cursor, suavizada con requestAnimationFrame
const stage = ref<HTMLElement | null>(null);
const canTilt = ref(false);
const tilt = reactive({ x: 0, y: 0 });
let target = { x: 0, y: 0 };
let raf = 0;

const tiltStyle = computed(() =>
  canTilt.value
    ? {
        transform: `rotateY(${-10 + tilt.x * 6}deg) rotateX(${3 - tilt.y * 4}deg)`,
      }
    : undefined,
);

function step() {
  tilt.x += (target.x - tilt.x) * 0.08;
  tilt.y += (target.y - tilt.y) * 0.08;
  const moving =
    Math.abs(target.x - tilt.x) + Math.abs(target.y - tilt.y) > 0.001;
  raf = moving ? requestAnimationFrame(step) : 0;
}
function kick() {
  if (!raf) raf = requestAnimationFrame(step);
}
function onMove(e: PointerEvent) {
  if (!canTilt.value || !stage.value) return;
  const r = stage.value.getBoundingClientRect();
  target = {
    x: ((e.clientX - r.left) / r.width) * 2 - 1,
    y: ((e.clientY - r.top) / r.height) * 2 - 1,
  };
  kick();
}
function onLeave() {
  target = { x: 0, y: 0 };
  kick();
}

let feedTimer: ReturnType<typeof setInterval> | undefined;
let beatTimer: ReturnType<typeof setInterval> | undefined;

onMounted(() => {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) return;
  canTilt.value = window.matchMedia(
    "(min-width: 1024px) and (pointer: fine)",
  ).matches;
  feedTimer = setInterval(() => {
    current.value = (current.value + 1) % events.value.length;
  }, 3200);
  beatTimer = setInterval(() => {
    beat.value = beat.value >= 9 ? 1 : beat.value + 1;
  }, 1000);
});

onBeforeUnmount(() => {
  cancelAnimationFrame(raf);
  clearInterval(feedTimer);
  clearInterval(beatTimer);
});
</script>

<template>
  <!-- Hasta 2xl la ventana se sale y la recorta el borde de la pantalla; en
       monitores grandes se queda dentro del contenedor para no desbalancear -->
  <div
    ref="stage"
    class="relative lg:-mr-24 xl:-mr-40 2xl:mr-0"
    @pointermove="onMove"
    @pointerleave="onLeave"
  >
    <div
      class="pointer-events-none absolute -inset-6 rounded-[2.5rem] bg-gradient-to-tr from-sky-500/25 via-teal-400/10 to-green-500/25 blur-3xl"
    ></div>

    <div class="relative [perspective:2000px]">
      <div
        class="relative [transform-style:preserve-3d] lg:[transform:rotateY(-10deg)_rotateX(3deg)]"
        :style="tiltStyle"
      >
        <!-- Ventana con la captura real -->
        <figure
          class="clocc-float relative overflow-hidden rounded-xl bg-white shadow-2xl shadow-slate-900/15 ring-1 ring-slate-900/10 dark:bg-slate-900 dark:shadow-black/50 dark:ring-white/10"
        >
          <div
            class="flex h-9 items-center gap-2 border-b border-slate-200/80 bg-slate-50 px-4 dark:border-white/5 dark:bg-slate-800/80"
            aria-hidden="true"
          >
            <span class="h-3 w-3 rounded-full bg-[#ff5f57]"></span>
            <span class="h-3 w-3 rounded-full bg-[#febc2e]"></span>
            <span class="h-3 w-3 rounded-full bg-[#28c840]"></span>
          </div>
          <img
            src="/img/clocc/panel-claro.webp"
            :alt="t('alt')"
            width="1600"
            height="887"
            decoding="async"
            class="block w-full dark:hidden"
          />
          <img
            src="/img/clocc/panel-oscuro.webp"
            :alt="t('alt')"
            width="1600"
            height="887"
            decoding="async"
            class="hidden w-full dark:block"
          />
          <!-- destello que recorre el cristal -->
          <div
            class="clocc-shine pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent dark:via-white/10"
            aria-hidden="true"
          ></div>
        </figure>

        <!-- Chip: registros en vivo -->
        <div
          class="absolute -bottom-8 left-3 z-20 lg:-left-10 lg:bottom-auto lg:top-[22%] [transform:translateZ(70px)]"
        >
          <div
            class="clocc-float-a w-[17.5rem] rounded-xl border border-slate-200/80 bg-white/85 p-3 shadow-xl shadow-slate-900/10 backdrop-blur-md dark:border-white/10 dark:bg-slate-900/80 dark:shadow-black/40 sm:w-[19rem]"
          >
            <div
              class="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400"
            >
              <span class="relative flex h-2 w-2">
                <span
                  class="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70 motion-reduce:animate-none"
                ></span>
                <span class="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
              </span>
              {{ t("feed.live") }}
            </div>
            <Transition name="clocc-feed" mode="out-in">
              <div :key="current" class="mt-2 flex items-center gap-3">
                <div
                  class="grid h-9 w-9 shrink-0 place-items-center rounded-lg"
                  :class="toneClass[event.tone]"
                >
                  <component :is="event.icon" class="h-4 w-4" />
                </div>
                <div class="min-w-0 flex-1">
                  <p class="truncate text-[13px] font-semibold text-slate-900 dark:text-white">
                    {{ t(`feed.${event.key}.title`) }}
                  </p>
                  <p class="truncate text-xs text-slate-500 dark:text-slate-400">
                    {{ t(`feed.${event.key}.meta`) }}
                  </p>
                </div>
                <span class="text-xs tabular-nums text-slate-400">{{ event.time }}</span>
              </div>
            </Transition>
          </div>
        </div>

        <!-- Chip: reloj en línea con latido -->
        <div
          class="absolute -top-6 right-3 z-20 lg:-bottom-7 lg:left-[16%] lg:right-auto lg:top-auto [transform:translateZ(90px)]"
        >
          <div
            class="clocc-float-b flex items-center gap-3 rounded-xl border border-slate-200/80 bg-white/85 px-3.5 py-2.5 shadow-xl shadow-slate-900/10 backdrop-blur-md dark:border-white/10 dark:bg-slate-900/80 dark:shadow-black/40"
          >
            <span class="relative flex h-2.5 w-2.5">
              <span
                class="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70 motion-reduce:animate-none"
              ></span>
              <span class="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
            </span>
            <div>
              <p class="text-xs font-semibold text-slate-900 dark:text-white">
                {{ t("beat.title") }}
              </p>
              <p class="text-[11px] tabular-nums text-slate-500 dark:text-slate-400">
                {{ t("beat.meta", { s: beat }) }}
              </p>
            </div>
            <!-- trazo de latido -->
            <svg viewBox="0 0 60 20" class="h-5 w-14 text-emerald-500" aria-hidden="true">
              <polyline
                class="clocc-ecg"
                points="0,10 14,10 18,4 22,16 26,2 30,18 34,10 60,10"
                fill="none"
                stroke="currentColor"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>

        <!-- Chip: geocerca de home office -->
        <div
          class="absolute -top-6 right-[22%] z-20 hidden lg:block [transform:translateZ(50px)]"
        >
          <div
            class="clocc-float-c flex items-center gap-3 rounded-xl border border-slate-200/80 bg-white/85 px-3.5 py-2.5 shadow-xl shadow-slate-900/10 backdrop-blur-md dark:border-white/10 dark:bg-slate-900/80 dark:shadow-black/40"
          >
            <span class="relative grid h-8 w-8 place-items-center">
              <span
                class="clocc-radar absolute inset-0 rounded-full border border-primary/50"
              ></span>
              <MapPin class="relative h-4 w-4 text-primary" />
            </span>
            <div>
              <p class="text-xs font-semibold text-slate-900 dark:text-white">
                {{ t("geo.title") }}
              </p>
              <p class="text-[11px] text-slate-500 dark:text-slate-400">
                {{ t("geo.meta") }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes clocc-float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
}
.clocc-float {
  animation: clocc-float 7s ease-in-out infinite;
}
.clocc-float-a {
  animation: clocc-float 6s ease-in-out -2s infinite;
}
.clocc-float-b {
  animation: clocc-float 6.5s ease-in-out -4s infinite;
}
.clocc-float-c {
  animation: clocc-float 5.5s ease-in-out -1s infinite;
}

@keyframes clocc-shine {
  0% {
    transform: translateX(0) skewX(-18deg);
  }
  45%,
  100% {
    transform: translateX(450%) skewX(-18deg);
  }
}
.clocc-shine {
  animation: clocc-shine 7s ease-in-out 1.5s infinite;
}

@keyframes clocc-radar {
  0% {
    transform: scale(0.55);
    opacity: 0.9;
  }
  100% {
    transform: scale(1.6);
    opacity: 0;
  }
}
.clocc-radar {
  animation: clocc-radar 2.4s ease-out infinite;
}

@keyframes clocc-ecg {
  0% {
    stroke-dashoffset: 120;
  }
  100% {
    stroke-dashoffset: 0;
  }
}
.clocc-ecg {
  stroke-dasharray: 60 60;
  animation: clocc-ecg 1s linear infinite;
}

.clocc-feed-enter-active,
.clocc-feed-leave-active {
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}
.clocc-feed-enter-from {
  opacity: 0;
  transform: translateY(8px);
}
.clocc-feed-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

@media (prefers-reduced-motion: reduce) {
  .clocc-float,
  .clocc-float-a,
  .clocc-float-b,
  .clocc-float-c,
  .clocc-shine,
  .clocc-radar,
  .clocc-ecg {
    animation: none;
  }
  .clocc-shine {
    display: none;
  }
}
</style>

<i18n lang="json">
{
  "es": {
    "alt": "Panel de asistencia de Clocc: horas trabajadas, retardos, faltas y tiempo extra de la quincena",
    "feed": {
      "live": "Registros en vivo",
      "e1": { "title": "Entrada registrada", "meta": "Reloj de planta · puntual" },
      "e2": { "title": "Registro remoto", "meta": "Dentro de la geocerca" },
      "e3": { "title": "Retardo detectado", "meta": "Reloj de oficinas · 6 min" },
      "e4": { "title": "Vacaciones autorizadas", "meta": "RRHH firmó la solicitud" },
      "e5": { "title": "Salida registrada", "meta": "Reloj de planta" }
    },
    "beat": {
      "title": "Reloj de planta en línea",
      "meta": "Último latido hace {s} s"
    },
    "geo": {
      "title": "Geocerca de home office",
      "meta": "Solo registra dentro del área"
    }
  },
  "en": {
    "alt": "Clocc attendance dashboard: hours worked, late arrivals, absences and overtime for the pay period",
    "feed": {
      "live": "Live records",
      "e1": { "title": "Clock-in recorded", "meta": "Plant time clock · on time" },
      "e2": { "title": "Remote check-in", "meta": "Inside the geofence" },
      "e3": { "title": "Late arrival detected", "meta": "Office time clock · 6 min" },
      "e4": { "title": "Vacation approved", "meta": "HR signed the request" },
      "e5": { "title": "Clock-out recorded", "meta": "Plant time clock" }
    },
    "beat": {
      "title": "Plant time clock online",
      "meta": "Last heartbeat {s}s ago"
    },
    "geo": {
      "title": "Home office geofence",
      "meta": "Check-in only inside the area"
    }
  }
}
</i18n>
