<script setup lang="ts">
// Logo de LIDIA — reemplaza el icono de tractor en todo el sitio.
// Es drop-in para `<component :is="icon">` porque hereda la clase (tamaño) del padre.
withDefaults(defineProps<{ alt?: string }>(), { alt: "LIDIA" });
</script>

<template>
  <img
    src="/img/lidia_logo.png"
    :alt="alt"
    class="object-contain"
    loading="lazy"
    decoding="async"
  />
</template>
