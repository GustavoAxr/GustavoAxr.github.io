<script setup lang="ts">
// Página "Sobre mí" — en construcción. Pronto irá la historia y el CV.
useSeoMeta({
  title: "Sobre mí - CODEGAHP",
  description: "Experiencia, trayectoria y CV.",
});
</script>

<template>
  <div class="min-h-screen bg-white dark:bg-slate-950">
    <div
      class="container max-w-3xl mx-auto px-4 pt-28 pb-24 min-h-screen flex flex-col items-center justify-center text-center"
    >
      <span
        class="inline-flex items-center gap-2 rounded-full border border-[#409028]/25 bg-[#409028]/5 px-4 py-1.5 text-sm font-medium text-[#409028] dark:text-[#79C5A6]"
      >
        <span class="relative flex h-2 w-2">
          <span
            class="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#409028] opacity-60"
          />
          <span class="relative inline-flex h-2 w-2 rounded-full bg-[#409028]" />
        </span>
        En construcción
      </span>

      <h1
        class="mt-6 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white"
      >
        Agregando mi historia
      </h1>
      <p class="mt-3 text-lg text-slate-500 dark:text-slate-400">
        Solo 1 día más.
      </p>
    </div>
  </div>
</template>
