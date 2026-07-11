<script setup lang="ts">
// Canonical y og:url dinámicos por página. Antes había un canonical fijo a la
// home en nuxt.config, lo que hacía que Google tratara todas las páginas como
// duplicados de la portada y no las indexara por separado.
const SITE = "https://codegahp.com";
const route = useRoute();
const canonical = computed(() => {
  const path = route.path === "/" ? "" : route.path.replace(/\/$/, "");
  return `${SITE}${path}`;
});

useHead({
  link: [{ rel: "canonical", href: canonical }],
});
useSeoMeta({
  ogUrl: canonical,
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
