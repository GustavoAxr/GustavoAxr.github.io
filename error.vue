<script setup lang="ts">
import { Home, MessageCircle, TerminalSquare } from "lucide-vue-next";
import type { NuxtError } from "#app";

const props = defineProps<{ error: NuxtError }>();

const is404 = computed(() => props.error?.statusCode === 404);

useSeoMeta({
  title: computed(() =>
    is404.value
      ? "404 — Ruta no encontrada | CODEGAHP"
      : "Error | CODEGAHP",
  ),
  robots: "noindex",
});

const handleClearError = () => clearError({ redirect: "/" });
</script>

<template>
  <div
    class="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 px-4"
  >
    <div class="max-w-xl w-full text-center">
      <!-- Terminal card -->
      <div
        class="text-left rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl shadow-primary/5 bg-white dark:bg-slate-900 mb-8"
      >
        <div
          class="flex items-center gap-2 px-4 py-3 bg-slate-100 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-700"
        >
          <span class="w-3 h-3 rounded-full bg-red-400" aria-hidden="true"></span>
          <span class="w-3 h-3 rounded-full bg-amber-400" aria-hidden="true"></span>
          <span class="w-3 h-3 rounded-full bg-green-400" aria-hidden="true"></span>
          <span
            class="ml-3 text-xs font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1.5"
          >
            <TerminalSquare class="w-3.5 h-3.5" aria-hidden="true" />
            codegahp — zsh
          </span>
        </div>
        <div class="p-6 font-mono text-sm space-y-2">
          <p class="text-slate-500 dark:text-slate-400">
            <span class="text-primary">$</span> curl codegahp.com{{
              $route.fullPath
            }}
          </p>
          <p class="text-red-500 font-semibold">
            Error {{ error?.statusCode || 500 }}:
            {{
              is404
                ? "esta ruta no existe (todavía)."
                : "algo se descompuso de nuestro lado."
            }}
          </p>
          <p class="text-slate-500 dark:text-slate-400">
            <span class="text-primary">$</span> sugerencia
            <span class="animate-pulse">▊</span>
          </p>
          <p class="text-slate-700 dark:text-slate-300">
            {{
              is404
                ? "Puede que el enlace esté mal escrito, o que esta página aún esté en nuestro backlog."
                : "Ya quedó registrado. Mientras lo arreglamos, volvamos a terreno conocido."
            }}
          </p>
        </div>
      </div>

      <h1 class="sr-only">
        Error {{ error?.statusCode || 500 }}
      </h1>

      <div class="flex flex-col sm:flex-row justify-center gap-3">
        <button
          @click="handleClearError"
          class="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-white dark:text-slate-950 font-semibold hover:bg-primary-dark transition-colors"
        >
          <Home class="w-4 h-4" aria-hidden="true" />
          Volver al inicio
        </button>
        <a
          href="https://wa.me/529381065606?text=Hola%2C%20encontr%C3%A9%20un%20error%20en%20su%20sitio%20web."
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-semibold hover:border-primary hover:text-primary transition-colors"
        >
          <MessageCircle class="w-4 h-4" aria-hidden="true" />
          Reportar por WhatsApp
        </a>
      </div>
    </div>
  </div>
</template>
