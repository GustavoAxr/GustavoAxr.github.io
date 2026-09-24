<script setup lang="ts">
// Logo de Clocc (reloj + palomita). Drop-in para `<component :is="icon">`:
// hereda la clase (tamaño) del padre.
withDefaults(defineProps<{ alt?: string }>(), { alt: "Clocc" });
</script>

<template>
  <img
    src="/img/clocc.svg"
    :alt="alt"
    class="object-contain"
    loading="lazy"
    decoding="async"
  />
</template>
