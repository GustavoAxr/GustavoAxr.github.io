<script setup lang="ts">
// Escenario del hero principal. En el centro está el núcleo CODEGAHP, del que
// salen pistas de circuito con pulsos de luz hacia los productos reales: el
// teléfono con LIDIA, el panel de Clocc y los servicios. Tiene profundidad con
// el cursor (paralaje por capas) y se sincroniza con la frase giratoria del
// titular vía `active`: 0 todo, 1 LIDIA, 2 Clocc, 3 servicios. Al pasar el
// cursor sobre un producto se emite `hover` para que el titular lo siga.
// Sin movimiento si el usuario prefiere movimiento reducido.
import {
  WifiOff,
  Fingerprint,
  Code2,
  Cloud,
  Headset,
} from "lucide-vue-next";

const props = defineProps<{ active: number }>();
const emit = defineEmits<{ hover: [index: number | null] }>();

const { t } = useI18n({ useScope: "local" });

// Servicios (satélites del núcleo)
const services = [
  { key: "web", icon: Code2, to: "/servicios/landing-page", pos: "left-[77%] top-[62%]" },
  { key: "cloud", icon: Cloud, to: "/servicios/aws", pos: "left-[80%] top-[77.8%]" },
  { key: "support", icon: Headset, to: "/servicios/equipos", pos: "left-[76%] top-[93.3%]" },
];

// Pistas de circuito en un lienzo de 1000×900 (mismo aspecto que el escenario).
// Todas nacen en el núcleo, así que los pulsos viajan hacia afuera.
const traces = [
  { key: "lidia", target: 1, d: "M585 690 H430 L390 650 H304" },
  { key: "clocc", target: 2, d: "M640 632 V520 L610 490 V452" },
  { key: "web", target: 3, d: "M698 662 L738 622 V558 H768" },
  { key: "cloud", target: 3, d: "M700 700 H798" },
  { key: "support", target: 3, d: "M698 738 L738 778 V840 H758" },
];

const lit = (target: number) => props.active === 0 || props.active === target;

// Paralaje: dos variables CSS (--mx, --my) suavizadas con requestAnimationFrame
const stage = ref<HTMLElement | null>(null);
const parallax = ref(false);
let tx = 0;
let ty = 0;
let cx = 0;
let cy = 0;
let raf = 0;

function step() {
  cx += (tx - cx) * 0.08;
  cy += (ty - cy) * 0.08;
  stage.value?.style.setProperty("--mx", cx.toFixed(4));
  stage.value?.style.setProperty("--my", cy.toFixed(4));
  raf =
    Math.abs(tx - cx) + Math.abs(ty - cy) > 0.001
      ? requestAnimationFrame(step)
      : 0;
}
function kick() {
  if (!raf) raf = requestAnimationFrame(step);
}
function onMove(e: PointerEvent) {
  if (!parallax.value || !stage.value) return;
  const r = stage.value.getBoundingClientRect();
  tx = ((e.clientX - r.left) / r.width) * 2 - 1;
  ty = ((e.clientY - r.top) / r.height) * 2 - 1;
  kick();
}
function onLeave() {
  tx = 0;
  ty = 0;
  kick();
  emit("hover", null);
}

onMounted(() => {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  parallax.value =
    !reduce && window.matchMedia("(min-width: 1024px) and (pointer: fine)").matches;
});
onBeforeUnmount(() => cancelAnimationFrame(raf));

// Capa con profundidad: se desplaza más cuanto mayor es `d`
const depth = (d: number) => ({ "--d": d }) as Record<string, number>;
</script>

<template>
  <div
    ref="stage"
    class="hs-stage relative mx-auto aspect-[10/9] w-full max-w-[640px] select-none"
    @pointermove="onMove"
    @pointerleave="onLeave"
  >
    <!-- resplandor de fondo -->
    <div
      class="pointer-events-none absolute inset-[8%] rounded-full bg-gradient-to-tr from-primary/25 via-circuit-cyan/10 to-sky-500/20 blur-3xl"
      aria-hidden="true"
    ></div>

    <div class="hs-tilt absolute inset-0">
      <!-- ===== Pistas de circuito ===== -->
      <div class="hs-layer absolute inset-0" :style="depth(0.5)" aria-hidden="true">
        <svg viewBox="0 0 1000 900" class="h-full w-full overflow-visible">
          <g
            v-for="tr in traces"
            :key="tr.key"
            class="transition-opacity duration-700"
            :class="lit(tr.target) ? 'opacity-100' : 'opacity-25'"
          >
            <path
              :d="tr.d"
              fill="none"
              class="stroke-primary/30"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              :d="tr.d"
              fill="none"
              pathLength="1000"
              class="hs-pulse stroke-primary"
              :class="active === tr.target ? 'hs-pulse-fast' : ''"
              stroke-width="3.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <!-- vías (puntos de soldadura) al final de cada pista -->
          <g class="fill-primary">
            <circle cx="304" cy="650" r="6" />
            <circle cx="610" cy="452" r="6" />
            <circle cx="768" cy="558" r="5" />
            <circle cx="798" cy="700" r="5" />
            <circle cx="758" cy="840" r="5" />
          </g>
        </svg>
      </div>

      <!-- ===== Clocc: panel real ===== -->
      <div
        class="hs-layer absolute left-[30%] top-[4.4%] w-[68%]"
        :style="depth(0.7)"
      >
        <NuxtLinkLocale
          to="/servicios/clocc"
          :aria-label="t('aria.clocc')"
          class="hs-float-b block origin-center transition-all duration-700"
          :class="
            active === 2
              ? 'scale-[1.04]'
              : active === 0
                ? ''
                : 'scale-[0.98] opacity-45'
          "
          @pointerenter="emit('hover', 2)"
        >
          <figure
            class="overflow-hidden rounded-xl bg-white shadow-2xl shadow-slate-900/20 ring-1 ring-slate-900/10 transition-shadow duration-700 dark:bg-slate-900 dark:shadow-black/50 dark:ring-white/10"
            :class="active === 2 ? 'ring-2 !ring-sky-400/60 shadow-sky-500/20' : ''"
          >
            <div
              class="flex h-6 items-center gap-1.5 border-b border-slate-200/80 bg-slate-50 px-3 dark:border-white/5 dark:bg-slate-800/80"
              aria-hidden="true"
            >
              <span class="h-2 w-2 rounded-full bg-[#ff5f57]"></span>
              <span class="h-2 w-2 rounded-full bg-[#febc2e]"></span>
              <span class="h-2 w-2 rounded-full bg-[#28c840]"></span>
            </div>
            <img
              src="/img/clocc/panel-claro.webp"
              alt=""
              width="1600"
              height="887"
              class="block w-full dark:hidden"
            />
            <img
              src="/img/clocc/panel-oscuro.webp"
              alt=""
              width="1600"
              height="887"
              class="hidden w-full dark:block"
            />
          </figure>
        </NuxtLinkLocale>
      </div>

      <!-- ===== Núcleo CODEGAHP ===== -->
      <div
        class="hs-layer absolute left-[64%] top-[76.7%] w-[12%] -translate-x-1/2 -translate-y-1/2"
        :style="depth(0.9)"
        aria-hidden="true"
      >
        <div class="relative aspect-square">
          <span class="hs-ring absolute inset-0 rounded-2xl border-2 border-primary/50"></span>
          <span
            class="hs-ring absolute inset-0 rounded-2xl border-2 border-primary/40 [animation-delay:1.2s]"
          ></span>
          <div
            class="relative grid h-full w-full place-items-center rounded-2xl border border-primary/30 bg-white p-[18%] shadow-xl shadow-primary/30 dark:bg-slate-900"
          >
            <img src="/logo-code.svg" alt="" class="h-full w-full" />
          </div>
        </div>
      </div>

      <!-- ===== LIDIA: teléfono real ===== -->
      <div
        class="hs-layer absolute left-[5%] top-[27.8%] w-[25%]"
        :style="depth(1.2)"
      >
        <NuxtLinkLocale
          to="/servicios/lidia"
          :aria-label="t('aria.lidia')"
          class="hs-float-a block origin-center transition-all duration-700"
          :class="
            active === 1
              ? 'scale-[1.07]'
              : active === 0
                ? ''
                : 'scale-[0.97] opacity-45'
          "
          @pointerenter="emit('hover', 1)"
        >
          <picture>
            <source srcset="/img/lidia/pantalla-dashboard.webp" type="image/webp" />
            <img
              src="/img/lidia/pantalla-dashboard.jpg"
              alt=""
              width="739"
              height="1600"
              class="block w-full -rotate-3 rounded-[1.4rem] border-[5px] border-slate-900 shadow-2xl shadow-slate-900/30 transition-shadow duration-700 dark:border-slate-700"
              :class="active === 1 ? 'shadow-green-500/40' : ''"
            />
          </picture>
        </NuxtLinkLocale>
      </div>

      <!-- ===== Chip de LIDIA ===== -->
      <div
        class="hs-layer absolute left-[1%] top-[20%] z-20"
        :style="depth(1.6)"
        aria-hidden="true"
      >
        <div
          class="hs-float-c hs-chip flex items-center gap-2.5 border-slate-200/80 bg-white/90 shadow-xl shadow-slate-900/15 transition-all duration-700 dark:border-white/10 dark:bg-slate-900/85 dark:shadow-black/50"
          :class="active === 2 || active === 3 ? 'opacity-75' : ''"
        >
          <LidiaLogo class="h-6 w-6" />
          <div class="leading-tight">
            <p class="text-xs font-bold text-slate-900 dark:text-white">LIDIA</p>
            <p class="flex items-center gap-1 text-[11px] text-slate-500 dark:text-slate-400">
              <WifiOff class="h-3 w-3 text-primary" /> {{ t("lidiaChip") }}
            </p>
          </div>
        </div>
      </div>

      <!-- ===== Chip de Clocc ===== -->
      <div
        class="hs-layer absolute left-[40%] top-0 z-20 -translate-y-1/2"
        :style="depth(1.4)"
        aria-hidden="true"
      >
        <div
          class="hs-float-a hs-chip flex items-center gap-2.5 border-slate-200/80 bg-white/90 shadow-xl shadow-slate-900/15 transition-all duration-700 dark:border-white/10 dark:bg-slate-900/85 dark:shadow-black/50"
          :class="active === 1 || active === 3 ? 'opacity-75' : ''"
        >
          <CloccLogo class="h-6 w-6" />
          <div class="leading-tight">
            <p class="text-xs font-bold text-slate-900 dark:text-white">Clocc</p>
            <p class="flex items-center gap-1 text-[11px] text-slate-500 dark:text-slate-400">
              <Fingerprint class="h-3 w-3 text-sky-500" /> {{ t("cloccChip") }}
            </p>
          </div>
        </div>
      </div>

      <!-- ===== Servicios (satélites) ===== -->
      <div
        v-for="(s, i) in services"
        :key="s.key"
        class="hs-layer absolute z-20 hidden -translate-y-1/2 sm:block"
        :class="s.pos"
        :style="depth(1.3 + i * 0.15)"
      >
        <NuxtLinkLocale
          :to="s.to"
          class="hs-chip hs-chip-sm flex items-center gap-2 whitespace-nowrap border-slate-200/80 bg-white/90 shadow-lg shadow-slate-900/10 transition-all duration-700 hover:border-primary/60 dark:border-white/10 dark:bg-slate-900/85 dark:shadow-black/40"
          :class="[
            i === 0 ? 'hs-float-b' : i === 1 ? 'hs-float-c' : 'hs-float-a',
            active === 3 ? 'scale-110 border-primary/60 shadow-primary/20' : active === 0 ? '' : 'opacity-75',
          ]"
          @pointerenter="emit('hover', 3)"
        >
          <component :is="s.icon" class="h-3.5 w-3.5 text-primary" />
          <span class="text-[11px] font-semibold text-slate-700 dark:text-slate-200">{{
            t(`services.${s.key}`)
          }}</span>
        </NuxtLinkLocale>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Inclinación general del escenario y desplazamiento por capas */
.hs-stage {
  perspective: 1800px;
}
.hs-tilt {
  transform: rotateY(calc(var(--mx, 0) * 4deg)) rotateX(calc(var(--my, 0) * -3deg));
  transform-style: preserve-3d;
}
.hs-layer {
  translate: calc(var(--mx, 0) * var(--d, 1) * 14px)
    calc(var(--my, 0) * var(--d, 1) * 10px);
}

/* Chips de cristal: forma aquí; los colores (claro/oscuro) van con clases
   dark: de Tailwind, porque `:global(.dark) .x` en un style scoped compila a
   una regla sobre `.dark` (toda la página) y pierde el selector del chip. */
.hs-chip {
  border-radius: 0.85rem;
  border-width: 1px;
  padding: 0.5rem 0.8rem;
  backdrop-filter: blur(10px);
}
.hs-chip-sm {
  padding: 0.35rem 0.7rem;
  border-radius: 999px;
}

/* Flotación suave (fases distintas) */
@keyframes hs-float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
}
.hs-float-a {
  animation: hs-float 6s ease-in-out infinite;
}
.hs-float-b {
  animation: hs-float 7s ease-in-out -2.5s infinite;
}
.hs-float-c {
  animation: hs-float 5.5s ease-in-out -1s infinite;
}

/* Pulso de luz que recorre cada pista desde el núcleo */
@keyframes hs-pulse {
  from {
    stroke-dashoffset: 1000;
  }
  to {
    stroke-dashoffset: 0;
  }
}
.hs-pulse {
  stroke-dasharray: 90 1000;
  animation: hs-pulse 2.6s linear infinite;
  filter: drop-shadow(0 0 4px rgb(45 206 154 / 0.8));
}
.hs-pulse-fast {
  animation-duration: 1.3s;
}

/* Ondas del núcleo */
@keyframes hs-ring {
  0% {
    transform: scale(1);
    opacity: 0.7;
  }
  100% {
    transform: scale(1.6);
    opacity: 0;
  }
}
.hs-ring {
  animation: hs-ring 2.4s ease-out infinite;
}

@media (prefers-reduced-motion: reduce) {
  .hs-float-a,
  .hs-float-b,
  .hs-float-c,
  .hs-pulse,
  .hs-ring {
    animation: none;
  }
  .hs-pulse {
    stroke-dasharray: none;
    opacity: 0.5;
  }
}
</style>

<i18n lang="json">
{
  "es": {
    "lidiaChip": "Funciona sin señal",
    "cloccChip": "Registro en vivo · 08:02",
    "services": {
      "web": "Desarrollo web",
      "cloud": "Nube AWS",
      "support": "Soporte TI"
    },
    "aria": {
      "lidia": "LIDIA: trazabilidad ganadera que funciona sin señal",
      "clocc": "Clocc: asistencia y cumplimiento del personal"
    }
  },
  "en": {
    "lidiaChip": "Works without signal",
    "cloccChip": "Live record · 08:02",
    "services": {
      "web": "Web development",
      "cloud": "AWS Cloud",
      "support": "IT support"
    },
    "aria": {
      "lidia": "LIDIA: livestock traceability that works without signal",
      "clocc": "Clocc: staff attendance and compliance"
    }
  }
}
</i18n>
