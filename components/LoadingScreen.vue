<script setup lang="ts">
/**
 * LoadingScreen.vue
 * =================
 * Componente de pantalla de carga inicial.
 *
 * PERSONALIZACIÓN:
 * - Puedes reemplazar todo el contenido del template con tu propia animación
 * - El componente se oculta automáticamente cuando la página está lista
 * - Modifica la variable `minLoadingTime` para ajustar el tiempo mínimo de carga
 */

const isLoading = ref(true);
const isFadingOut = ref(false);

// Tiempo mínimo de carga en ms (ajústalo según tu preferencia)
const minLoadingTime = 1200;

onMounted(() => {
  // Forzar que el loading se muestre inmediatamente
  isLoading.value = true;

  // Espera el tiempo mínimo antes de ocultar
  setTimeout(() => {
    isFadingOut.value = true;
    // Espera a que termine la animación de fade out
    setTimeout(() => {
      isLoading.value = false;
    }, 500);
  }, minLoadingTime);
});
</script>

<template>
  <div
    v-if="isLoading"
    class="loading-screen"
    :class="{ 'fade-out': isFadingOut }"
  >
    <!-- 
      =====================================================
      PERSONALIZA TU ANIMACIÓN DE CARGA AQUÍ
      =====================================================
      Reemplaza todo el contenido dentro de este div con 
      tu propia animación personalizada.
      =====================================================
    -->
    <div class="loading-content">
      <!-- Logo animado -->
      <div class="logo-container">
        <img
          src="~/assets/img/codegahp2-03.png"
          alt="CODEGAHP"
          class="loading-logo"
        />
      </div>

      <!-- Texto de marca -->
      <div class="brand-text">
        <span class="brand-code">CODE</span>
        <span class="brand-gahp">GAHP</span>
      </div>

      <!-- Barra de carga simple -->
      <div class="loading-bar-container">
        <div class="loading-bar"></div>
      </div>
    </div>
    <!-- FIN DE ÁREA PERSONALIZABLE -->
  </div>
</template>

<style scoped>
.loading-screen {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%);
  transition: opacity 0.5s ease-out;
}

.loading-screen.fade-out {
  opacity: 0;
  pointer-events: none;
}

.loading-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.logo-container {
  width: 80px;
  height: 80px;
  animation: pulse 2s ease-in-out infinite;
}

.loading-logo {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.brand-text {
  font-size: 1.5rem;
  font-weight: bold;
  letter-spacing: 0.05em;
}

.brand-code {
  color: #94a3b8;
}

.brand-gahp {
  color: #2dce9a;
}

.loading-bar-container {
  width: 200px;
  height: 3px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 9999px;
  overflow: hidden;
}

.loading-bar {
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #2dce9a, #00dc82);
  border-radius: 9999px;
  animation: loading 1.5s ease-in-out infinite;
  transform-origin: left;
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.8;
  }
}

@keyframes loading {
  0% {
    transform: translateX(-100%);
  }
  50% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(100%);
  }
}
</style>
