<script setup lang="ts">
// Animación vectorial de Clocc (reloj ⇄ CLOCC). Cada cuadro del gif original se
// vectorizó a curvas SVG (public/anim/clocc-motion.json) y aquí se reproducen a
// 24 fps con ritmo uniforme: el gif venía de 24 fps convertido a 30 repitiendo
// 1 de cada 5 cuadros, lo que daba tirones; se quitaron esas repeticiones.
// Nítida a cualquier tamaño, sin fondo (sirve en tema claro y oscuro) y ligera.
// Cada cuadro trae un desplazamiento horizontal (dx) que sigue una curva suave
// por tramos y ancla la forma al borde izquierdo: el reloj y la palabra CLOCC
// arrancan en la misma línea que el texto. Se pausa fuera de pantalla y respeta
// prefers-reduced-motion (se queda en el póster).
import {
  CLOCC_MOTION_VIEWBOX,
  CLOCC_MOTION_POSTER,
  CLOCC_MOTION_POSTER_DX,
} from "~/lib/clocc-motion-poster";

withDefaults(defineProps<{ alt?: string }>(), { alt: "Clocc" });

interface MotionData {
  fps: number;
  paths: string[];
  seq: number[];
  dx: number[];
}

const { app } = useRuntimeConfig();
const root = ref<SVGSVGElement | null>(null);
const path = ref<SVGPathElement | null>(null);

let raf = 0;
let io: IntersectionObserver | null = null;

onMounted(async () => {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  let data: MotionData;
  try {
    const res = await fetch(`${app.baseURL}anim/clocc-motion.json`);
    if (!res.ok) return;
    data = await res.json();
  } catch {
    return; // sin datos, se queda el póster
  }

  const frameMs = 1000 / data.fps;
  const total = data.seq.length;
  let start = 0;
  let last = -1;

  const tick = (now: number) => {
    if (!start) start = now;
    const i = Math.floor((now - start) / frameMs) % total;
    if (i !== last && path.value) {
      path.value.setAttribute("d", data.paths[data.seq[i]]);
      path.value.setAttribute("transform", `translate(${data.dx[i]} 0)`);
      last = i;
    }
    raf = requestAnimationFrame(tick);
  };
  const play = () => {
    if (!raf) raf = requestAnimationFrame(tick);
  };
  const pause = () => {
    cancelAnimationFrame(raf);
    raf = 0;
  };

  io = new IntersectionObserver(([entry]) =>
    entry?.isIntersecting ? play() : pause(),
  );
  if (root.value) io.observe(root.value);
});

onBeforeUnmount(() => {
  cancelAnimationFrame(raf);
  io?.disconnect();
});
</script>

<template>
  <svg
    ref="root"
    :viewBox="CLOCC_MOTION_VIEWBOX"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    :aria-label="alt"
    class="block h-auto w-full overflow-visible"
  >
    <defs>
      <linearGradient id="clocc-motion-grad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#0ea5e9" />
        <stop offset="1" stop-color="#22c55e" />
      </linearGradient>
    </defs>
    <path
      ref="path"
      :d="CLOCC_MOTION_POSTER"
      :transform="`translate(${CLOCC_MOTION_POSTER_DX} 0)`"
      fill="url(#clocc-motion-grad)"
      fill-rule="evenodd"
    />
  </svg>
</template>
