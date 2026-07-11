<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";

// Carrusel coverflow 3D de pantallas de LIDIA. Ligero: solo anima transform/
// opacity (GPU), imágenes webp con lazy-load salvo la central. El peso solo
// ocurre en la primera carga; luego quedan en caché del navegador.
const screens = [
  { name: "dashboard", label: "Padrón y balance del hato" },
  { name: "identidad", label: "Identidad de cada animal" },
  { name: "genealogia", label: "Genealogía y descendencia" },
  { name: "salud", label: "Sanidad y tratamientos" },
  { name: "reemo", label: "Movilizaciones y compra-venta" },
];

const active = ref(0);
let timer: ReturnType<typeof setInterval> | null = null;
let reduce = false;

const go = (i: number) => {
  active.value = (i + screens.length) % screens.length;
};
const next = () => go(active.value + 1);

const start = () => {
  if (reduce) return;
  stop();
  timer = setInterval(next, 3600);
};
const stop = () => {
  if (timer) {
    clearInterval(timer);
    timer = null;
  }
};

onMounted(() => {
  reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  start();
});
onBeforeUnmount(stop);

function cardStyle(i: number) {
  const n = screens.length;
  let off = i - active.value;
  if (off > n / 2) off -= n;
  if (off < -n / 2) off += n;
  const abs = Math.abs(off);
  const tx = off * 132;
  const ry = off * -34;
  const tz = -abs * 130;
  const sc = Math.max(0.7, 1 - abs * 0.15);
  return {
    transform: `translateX(${tx}px) translateZ(${tz}px) rotateY(${ry}deg) scale(${sc})`,
    opacity: abs === 0 ? 1 : abs === 1 ? 0.8 : 0.4,
    zIndex: String(10 - abs),
  };
}
</script>

<template>
  <div
    class="cf"
    @mouseenter="stop"
    @mouseleave="start"
    aria-roledescription="carrusel"
    aria-label="Pantallas de la app LIDIA"
  >
    <!-- Glow de fondo -->
    <div
      class="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] rounded-full bg-green-500/15 dark:bg-green-500/10 blur-3xl"
    ></div>

    <div class="cf-stage">
      <button
        v-for="(s, i) in screens"
        :key="s.name"
        type="button"
        class="cf-card"
        :style="cardStyle(i)"
        :aria-hidden="i !== active"
        :aria-label="`Ver ${s.label}`"
        @click="go(i)"
      >
        <div class="cf-phone">
          <picture>
            <source :srcset="`/img/lidia/pantalla-${s.name}.webp`" type="image/webp" />
            <img
              :src="`/img/lidia/pantalla-${s.name}.jpg`"
              :alt="s.label"
              width="739"
              height="1600"
              :loading="i === 0 ? 'eager' : 'lazy'"
              :fetchpriority="i === 0 ? 'high' : 'auto'"
              decoding="async"
              draggable="false"
            />
          </picture>
        </div>
      </button>
    </div>

    <!-- Indicadores -->
    <div class="cf-dots">
      <button
        v-for="(s, i) in screens"
        :key="s.name"
        type="button"
        class="cf-dot"
        :class="{ 'cf-dot--on': i === active }"
        :aria-label="`Ir a ${s.label}`"
        @click="go(i)"
      ></button>
    </div>
  </div>
</template>

<style scoped>
.cf {
  position: relative;
  width: 100%;
  user-select: none;
}

.cf-stage {
  position: relative;
  height: 460px;
  perspective: 1100px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cf-card {
  position: absolute;
  width: 210px;
  padding: 0;
  border: 0;
  background: transparent;
  cursor: pointer;
  transition: transform 0.55s cubic-bezier(0.22, 0.61, 0.36, 1),
    opacity 0.55s ease;
  will-change: transform, opacity;
}

/* Bezel del teléfono — mismo tono en claro y oscuro (evita reglas .dark) */
.cf-phone {
  border-radius: 2rem;
  border: 6px solid #0f172a;
  background: #0f172a;
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.45);
}

.cf-phone :deep(img) {
  display: block;
  width: 100%;
  height: auto;
}

.cf-dots {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  margin-top: 1.25rem;
}

.cf-dot {
  width: 8px;
  height: 8px;
  padding: 0;
  border: 0;
  border-radius: 9999px;
  background: rgb(148 163 184 / 0.45);
  cursor: pointer;
  transition: width 0.3s ease, background-color 0.3s ease;
}

.cf-dot--on {
  width: 22px;
  background: #16a34a;
}

@media (prefers-reduced-motion: reduce) {
  .cf-card {
    transition: none;
  }
}
</style>
