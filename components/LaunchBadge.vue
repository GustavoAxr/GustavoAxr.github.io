<script setup lang="ts">
// Marcador ligero de lanzamiento oficial en tiendas (App Store / Google Play).
// Se reutiliza en el hero principal y en el hero de LIDIA.
// - Sin imágenes ni peticiones extra (logos en SVG inline) para no afectar el SEO.
// - Usa <time datetime="..."> para dar semántica de fecha a los buscadores.
import { Rocket } from "lucide-vue-next";
</script>

<template>
  <div
    class="inline-flex flex-wrap items-center gap-x-3 gap-y-2 rounded-2xl border border-primary/25 bg-primary/5 dark:bg-primary/10 px-3.5 py-2.5"
  >
    <!-- Etiqueta -->
    <span
      class="inline-flex items-center gap-1.5 rounded-full bg-primary px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-white dark:text-slate-950"
    >
      <span
        class="w-1.5 h-1.5 rounded-full bg-white dark:bg-slate-950 animate-pulse"
      ></span>
      Próximamente
    </span>

    <!-- Fecha -->
    <span
      class="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-700 dark:text-slate-200"
    >
      <Rocket class="w-4 h-4 text-primary" aria-hidden="true" />
      Lanzamiento oficial
      <time
        datetime="2026-08-01"
        class="font-extrabold text-primary-dark dark:text-primary whitespace-nowrap"
      >
        1 de agosto
      </time>
    </span>

    <!-- Tiendas -->
    <span
      class="inline-flex items-center gap-3 text-xs font-medium text-slate-500 dark:text-slate-400"
    >
      <span class="inline-flex items-center gap-1.5">
        <svg
          class="w-3.5 h-3.5"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            d="M17.05 12.04c-.03-2.6 2.12-3.85 2.22-3.9-1.21-1.77-3.1-2.01-3.77-2.04-1.6-.16-3.12.94-3.93.94-.81 0-2.06-.92-3.39-.9-1.74.03-3.35 1.01-4.25 2.57-1.81 3.14-.46 7.78 1.3 10.32.86 1.24 1.89 2.64 3.24 2.59 1.3-.05 1.79-.84 3.36-.84 1.57 0 2.01.84 3.39.81 1.4-.02 2.28-1.27 3.13-2.52.98-1.44 1.39-2.83 1.41-2.9-.03-.01-2.71-1.04-2.74-4.13zM14.53 4.5c.72-.87 1.2-2.08 1.07-3.28-1.03.04-2.28.69-3.02 1.56-.66.77-1.24 2-1.08 3.18 1.15.09 2.32-.59 3.03-1.46z"
          />
        </svg>
        App Store
      </span>
      <span class="inline-flex items-center gap-1.5">
        <svg
          class="w-3 h-3"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 0 1 0 2.594zM1.337.924a1.486 1.486 0 0 0-.112.568v21.017c0 .217.045.419.124.6l11.155-11.087L1.337.924zm12.207 10.065l3.258-3.238L3.45.195a1.466 1.466 0 0 0-.946-.179l11.04 10.973zm0 2.067l-11 10.933c.298.036.612-.016.906-.183l13.324-7.54-3.23-3.21z"
          />
        </svg>
        Google Play
      </span>
    </span>
  </div>
</template>
