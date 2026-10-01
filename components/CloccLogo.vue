<script setup lang="ts">
// Logo original de Clocc, el mismo dibujo que usa la app: el aro del reloj,
// abierto a las tres, y las manecillas que forman una palomita, con el
// degradado de la marca. El viewBox va ajustado a la caja real del trazo
// (91–421, contando los extremos redondeados) y no al lienzo de 512: así el
// logo llena su caja en lugar de verse chico y con 36 % de aire alrededor.
// `mono` lo pinta del color del texto (p. ej. blanco sobre fondos de marca),
// como el icono de la app. El degradado lleva id único por instancia para que
// dos logos en la misma página no se lo roben.
withDefaults(defineProps<{ alt?: string; mono?: boolean }>(), {
  alt: "Clocc",
  mono: false,
});
const id = `clocc-logo-${useId()}`;
</script>

<template>
  <svg
    viewBox="91 91 330 330"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    :aria-label="alt"
  >
    <defs v-if="!mono">
      <linearGradient :id="id" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0ea5e9" />
        <stop offset="100%" stop-color="#22c55e" />
      </linearGradient>
    </defs>
    <g
      fill="none"
      :stroke="mono ? 'currentColor' : `url(#${id})`"
      stroke-width="50"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M 235 118 A 140 140 0 1 0 394 280" />
      <path d="M 256 116 L 256 256 L 355 355" />
    </g>
  </svg>
</template>
