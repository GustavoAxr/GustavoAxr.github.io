<script setup lang="ts">
// Un icono de los sprites estáticos de public/img/iconos: el navegador los baja
// una vez y los guarda en caché para todas las páginas, así no pesan en el
// HTML ni en el JS. "mi-*" son de Lidia (Material Round); el resto, de Clocc.
import { computed } from "vue";

const props = defineProps<{ n: string; c?: string }>();
const href = computed(
  () => `/img/iconos/${props.n.startsWith("mi-") ? "lidia" : "clocc"}.svg#${props.n}`,
);
</script>

<template>
  <svg class="i" :class="c" aria-hidden="true"><use :href="href" /></svg>
</template>
