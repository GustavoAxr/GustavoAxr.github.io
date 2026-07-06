<script setup lang="ts">
// Chispas decorativas estilo Saasfly, pero en la paleta de circuito de CODEGAHP:
// dominan los verdes/teal/cian de la marca con acentos sutiles multicolor.
const sparks = [
  { top: "14%", left: "6%", rot: -38, len: 46, c: "#2DCE9A", d: "0s" },
  { top: "22%", left: "20%", rot: 28, len: 30, c: "#22D3EE", d: "1.2s" },
  { top: "9%", left: "42%", rot: -18, len: 26, c: "#5EDDB5", d: "2.1s" },
  { top: "30%", left: "72%", rot: 40, len: 40, c: "#2DCE9A", d: "0.6s" },
  { top: "16%", left: "86%", rot: -30, len: 34, c: "#38BDF8", d: "1.8s" },
  { top: "48%", left: "4%", rot: 22, len: 28, c: "#40E0D0", d: "2.6s" },
  { top: "58%", left: "90%", rot: -42, len: 44, c: "#2DCE9A", d: "0.3s" },
  { top: "70%", left: "12%", rot: 34, len: 32, c: "#7FFFD4", d: "1.5s" },
  { top: "66%", left: "60%", rot: -26, len: 24, c: "#A855F7", d: "2.9s" },
  { top: "82%", left: "30%", rot: 18, len: 30, c: "#22D3EE", d: "0.9s" },
  { top: "88%", left: "78%", rot: -34, len: 38, c: "#2DCE9A", d: "2.3s" },
  { top: "40%", left: "48%", rot: 44, len: 22, c: "#5EDDB5", d: "1.1s" },
];
</script>

<template>
  <div
    class="pointer-events-none absolute inset-0 overflow-hidden"
    aria-hidden="true"
  >
    <span
      v-for="(s, i) in sparks"
      :key="i"
      class="spark"
      :style="{
        top: s.top,
        left: s.left,
        width: s.len + 'px',
        transform: `rotate(${s.rot}deg)`,
        '--spark-color': s.c,
        animationDelay: s.d,
      }"
    />
  </div>
</template>

<style scoped>
.spark {
  position: absolute;
  height: 2px;
  border-radius: 9999px;
  background: linear-gradient(
    90deg,
    transparent,
    var(--spark-color),
    transparent
  );
  opacity: 0;
  filter: drop-shadow(0 0 4px var(--spark-color));
  animation: sparkTwinkle 6s ease-in-out infinite;
}

@keyframes sparkTwinkle {
  0%,
  100% {
    opacity: 0;
  }
  40%,
  60% {
    opacity: 0.7;
  }
}

@media (prefers-reduced-motion: reduce) {
  .spark {
    animation: none;
    opacity: 0.4;
  }
}
</style>
