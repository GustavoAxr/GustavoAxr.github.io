<script setup></script>

<template>
  <div
    class="fixed inset-0 pointer-events-none overflow-hidden z-0 flex items-center justify-center opacity-[0.03] dark:opacity-[0.05]"
  >
    <!-- Logo CODEGAHP difuminado gigante de fondo -->
    <svg
      viewBox="0 0 100 100"
      class="w-[120vw] h-[120vw] max-w-[1000px] max-h-[1000px] text-primary fill-current blur-3xl animate-pulse-slow"
    >
      <!-- Forma de la "C" estilizada basada en el logo -->
      <path
        d="M50 20 C30 20 15 35 15 50 C15 65 30 80 50 80 L70 80 L70 65 L50 65 C40 65 30 58 30 50 C30 42 40 35 50 35 L55 35 L55 45 L65 40 L65 20 Z"
      />
      <rect x="45" y="42" width="10" height="10" rx="1" />
    </svg>
  </div>
</template>

<style scoped>
.animate-pulse-slow {
  animation: pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
  0%,
  100% {
    opacity: 0.03;
    transform: scale(1);
  }
  50% {
    opacity: 0.06;
    transform: scale(1.05);
  }
}
</style>
