<script setup lang="ts">
// Canonical y og:url dinámicos por página (incluye el prefijo /en en inglés).
const SITE = "https://codegahp.com";
const route = useRoute();
const canonical = computed(() => {
  const path = route.path === "/" ? "" : route.path.replace(/\/$/, "");
  return `${SITE}${path}`;
});

// i18n: <html lang>, dir y enlaces hreflang alternos (SEO bilingüe).
const i18nHead = useLocaleHead();

useHead(() => ({
  htmlAttrs: {
    lang: i18nHead.value.htmlAttrs?.lang,
    dir: i18nHead.value.htmlAttrs?.dir,
  },
  link: [
    ...(i18nHead.value.link || []),
    { rel: "canonical", href: canonical.value },
  ],
  meta: [...(i18nHead.value.meta || [])],
}));
useSeoMeta({
  ogUrl: canonical,
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
