<script setup lang="ts">
// Marco de iPhone realista: chasis de titanio, bisel negro, isla dinámica,
// barra de estado de iOS, botones laterales, indicador de inicio y reflejo del
// cristal. El contenido de la app va en el slot, debajo de la barra de estado.
// La barra de estado y el indicador siguen el tema (negros en claro, blancos en
// oscuro); `screenClass` define el fondo de la pantalla (p. ej. el fondo de la
// app detrás de la barra de estado).
withDefaults(defineProps<{ time?: string; screenClass?: string }>(), {
  time: "9:41",
  screenClass: "bg-white dark:bg-[#0b0b10]",
});
</script>

<template>
  <div class="relative">
    <!-- Botones laterales: acción y volumen (izq.), encendido (der.) -->
    <span
      class="absolute -left-[3px] top-[15%] h-[4.5%] w-[3px] rounded-l-sm bg-gradient-to-b from-[#6b6e76] to-[#2b2d31]"
      aria-hidden="true"
    ></span>
    <span
      class="absolute -left-[3px] top-[23%] h-[8%] w-[3px] rounded-l-sm bg-gradient-to-b from-[#6b6e76] to-[#2b2d31]"
      aria-hidden="true"
    ></span>
    <span
      class="absolute -left-[3px] top-[33%] h-[8%] w-[3px] rounded-l-sm bg-gradient-to-b from-[#6b6e76] to-[#2b2d31]"
      aria-hidden="true"
    ></span>
    <span
      class="absolute -right-[3px] top-[26%] h-[12%] w-[3px] rounded-r-sm bg-gradient-to-b from-[#6b6e76] to-[#2b2d31]"
      aria-hidden="true"
    ></span>

    <!-- Chasis de titanio -->
    <div
      class="rounded-[3.1rem] bg-gradient-to-br from-[#71747c] via-[#2c2e33] to-[#5a5d64] p-[3px] shadow-[0_40px_70px_-20px_rgba(2,6,23,0.6),0_0_0_1px_rgba(255,255,255,0.06)_inset]"
    >
      <!-- Bisel negro -->
      <div class="rounded-[2.95rem] bg-black p-[9px]">
        <!-- Pantalla -->
        <div class="relative overflow-hidden rounded-[2.35rem]" :class="screenClass">
          <!-- Barra de estado -->
          <div
            class="relative z-20 flex h-[40px] items-center justify-between pl-7 pr-6 pt-1 text-slate-900 dark:text-white"
            aria-hidden="true"
          >
            <span class="text-[13px] font-semibold tracking-tight">{{ time }}</span>
            <span class="flex items-center gap-[5px]">
              <!-- señal -->
              <svg viewBox="0 0 18 12" class="h-[10px] w-[15px]" fill="currentColor">
                <rect x="0" y="8" width="3" height="4" rx="0.8" />
                <rect x="5" y="5.5" width="3" height="6.5" rx="0.8" />
                <rect x="10" y="3" width="3" height="9" rx="0.8" />
                <rect x="15" y="0" width="3" height="12" rx="0.8" />
              </svg>
              <!-- wifi -->
              <svg viewBox="0 0 16 12" class="h-[10px] w-[14px]" fill="currentColor">
                <path
                  d="M8 11.6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm-3.5-3.7a4.9 4.9 0 0 1 7 0l1.2-1.2a6.6 6.6 0 0 0-9.4 0l1.2 1.2ZM1.8 5.2a8.7 8.7 0 0 1 12.4 0l1.2-1.2a10.4 10.4 0 0 0-14.8 0l1.2 1.2Z"
                />
              </svg>
              <!-- batería -->
              <svg viewBox="0 0 27 13" class="h-[11px] w-[24px]">
                <rect
                  x="0.5"
                  y="0.5"
                  width="23"
                  height="12"
                  rx="3.6"
                  fill="none"
                  stroke="currentColor"
                  stroke-opacity="0.45"
                />
                <rect x="2" y="2" width="16" height="9" rx="2.2" fill="currentColor" />
                <path
                  d="M25 4.4v4.2c.9-.3 1.4-1.1 1.4-2.1s-.5-1.8-1.4-2.1Z"
                  fill="currentColor"
                  fill-opacity="0.45"
                />
              </svg>
            </span>
          </div>

          <!-- Isla dinámica -->
          <div
            class="absolute left-1/2 top-[9px] z-30 h-[25px] w-[32%] -translate-x-1/2 rounded-full bg-black"
            aria-hidden="true"
          ></div>

          <slot />

          <!-- Indicador de inicio -->
          <div
            class="absolute bottom-[7px] left-1/2 z-30 h-[4px] w-[34%] -translate-x-1/2 rounded-full bg-slate-900/75 dark:bg-white/80"
            aria-hidden="true"
          ></div>

          <!-- Reflejo del cristal -->
          <div
            class="pointer-events-none absolute inset-0 z-40 bg-[linear-gradient(115deg,rgba(255,255,255,0.09)_0%,rgba(255,255,255,0.025)_28%,transparent_42%)]"
            aria-hidden="true"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>
