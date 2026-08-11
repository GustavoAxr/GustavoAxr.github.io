<script setup lang="ts">
// Banner de LIDIA: split editorial. Panel verde de marca con el mensaje y la
// CTA; a un lado, la foto del hato "anotada" como la ve LIDIA (arete, peso,
// sanidad) — comunica la trazabilidad real en vez de un texto sobre foto.
// El marco se adapta a claro/oscuro; el panel verde es constante en ambos.
import { ArrowRight, Tag, Weight, Syringe } from "lucide-vue-next";
// Imágenes servidas desde /public (sin import): evita errores de tipos y es
// consistente con el resto del sitio.
const ganado = "/img/ganado.jpg";
</script>

<template>
  <section class="py-20 lg:py-24 bg-slate-50 dark:bg-slate-900">
    <div class="container max-w-7xl mx-auto px-4">
      <div
        class="grid lg:grid-cols-2 rounded-3xl overflow-hidden shadow-xl ring-1 ring-black/5 dark:ring-white/10"
      >
        <!-- Panel de mensaje (verde de marca, constante en ambos modos) -->
        <div
          class="relative order-2 lg:order-1 bg-primary p-8 sm:p-12 lg:p-14 flex flex-col justify-center overflow-hidden"
        >
          <!-- Logo LIDIA gigante como marca de fondo, detrás del texto -->
          <img
            src="/img/lidia_logo.png"
            alt=""
            aria-hidden="true"
            class="pointer-events-none select-none absolute top-1/2 top-[60%] -translate-y-1/2 -translate-x-1/4 h-[80%] w-auto max-w-none opacity-20"
          />

          <div class="relative">
            <h2
              class="text-3xl md:text-4xl xl:text-5xl font-extrabold text-white leading-[1.1] mb-4"
            >
              Cada animal, con su historia completa
            </h2>
            <p
              class="text-emerald-50/90 text-base md:text-lg leading-relaxed mb-8 max-w-md"
            >
              LIDIA le da identidad digital a tu hato: arete SINIIGA, peso,
              sanidad, genealogía y compra-venta con QR — desde el celular y
              aunque no haya señal.
            </p>

            <NuxtLink
              to="/servicios/lidia"
              class="group inline-flex items-center gap-2 h-12 px-8 rounded-xl bg-white text-[#2f6a1e] font-bold shadow-lg hover:bg-emerald-50 hover:-translate-y-0.5 transition-all self-start"
            >
              Conoce LIDIA
              <ArrowRight
                class="w-5 h-5 group-hover:translate-x-1 transition-transform"
              />
            </NuxtLink>

            <div
              class="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-medium text-white/75"
            >
              <span>Funciona sin señal</span>
              <span class="text-white/40" aria-hidden="true">•</span>
              <span>iOS y Android</span>
              <span class="text-white/40" aria-hidden="true">•</span>
              <span>Hecha para el campo mexicano</span>
            </div>
          </div>
        </div>

        <!-- Foto del hato "anotada" por LIDIA -->
        <div
          class="relative order-1 lg:order-2 min-h-[360px] bg-cover bg-center"
          :style="{ backgroundImage: `url(${ganado})` }"
        >
          <!-- Velo sólido tenue para que las etiquetas resalten -->
          <div class="absolute inset-0 bg-slate-950/25"></div>

          <!-- Etiqueta tipo arete SINIIGA (amarillo, como el arete real) -->
          <div
            class="absolute top-5 right-5 inline-flex items-center gap-1.5 rounded-lg bg-amber-300 text-amber-950 text-xs font-bold px-2.5 py-1.5 shadow-lg ring-1 ring-amber-500/30"
          >
            <Tag class="w-3.5 h-3.5" aria-hidden="true" />
            SINIIGA · 04-0421
          </div>

          <!-- Peso (tarjeta glass) -->
          <div
            class="hidden sm:inline-flex absolute top-1/2 -translate-y-1/2 left-5 items-center gap-2 rounded-xl bg-white/90 dark:bg-slate-900/85 backdrop-blur text-slate-800 dark:text-white text-xs font-semibold px-3 py-2 shadow-lg ring-1 ring-black/5 dark:ring-white/10"
          >
            <span
              class="w-6 h-6 rounded-md bg-primary/15 text-primary flex items-center justify-center"
            >
              <Weight class="w-3.5 h-3.5" aria-hidden="true" />
            </span>
            312 kg
            <span class="text-primary font-bold">↑</span>
          </div>

          <!-- Sanidad (tarjeta glass) -->
          <div
            class="absolute bottom-5 left-5 inline-flex items-center gap-2 rounded-xl bg-white/90 dark:bg-slate-900/85 backdrop-blur text-slate-800 dark:text-white text-xs font-semibold px-3 py-2 shadow-lg ring-1 ring-black/5 dark:ring-white/10"
          >
            <span
              class="w-6 h-6 rounded-md bg-primary/15 text-primary flex items-center justify-center"
            >
              <Syringe class="w-3.5 h-3.5" aria-hidden="true" />
            </span>
            Vacunas al día
            <span class="text-primary font-bold">✓</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
