<script setup lang="ts">
import { ref, onMounted } from 'vue'

// Definición de líneas basadas en el diseño original (estética correcta)
// Usamos coordenadas relativas para poder moverlas dinámicamente si es necesario
const originalPaths = [
  // Línea 1 - Principal vertical con quiebre
  "M160 0 L160 80 L100 140 L100 250",
  // Línea 2 - Larga con múltiples quiebres
  "M180 50 L180 120 L120 180 L120 280 L80 320 L80 450",
  // Línea 3 - Corta lateral
  "M100 250 L60 290 L60 380",
  // Línea 4 - Compleja central
  "M140 0 L140 60 L180 100 L180 200 L140 240 L140 380 L100 420 L100 550",
  // Línea 5 - Izquierda superior
  "M40 100 L40 180 L80 220 L80 320",
  // Línea 6 - Conexión inferior
  "M60 380 L40 400 L40 500 L80 540 L80 650",
  // Línea 7 - Larga derecha
  "M120 280 L160 320 L160 480 L120 520 L120 680",
  // Línea 8 - Final inferior
  "M100 550 L60 590 L60 700 L100 740 L100 800",
  // Línea 9 - Derecha media
  "M180 200 L180 380 L140 420 L140 580",
  // Línea 10 - Cierre
  "M120 680 L160 720 L160 800"
]

interface ActiveLine {
  id: number
  d: string
  gradient: string
  width: number
  duration: number
  drawDelay: number
  particleDelay: number
}

const lines = ref<ActiveLine[]>([])

function initLines() {
  lines.value = originalPaths.map((path, index) => {
    // Aleatoriedad controlada para que sea dinámico pero mantenga el diseño
    const gradients = ['circuitGradient1', 'circuitGradient2', 'circuitGradient3']
    const randomGradient = gradients[Math.floor(Math.random() * gradients.length)]
    
    return {
      id: index,
      d: path,
      gradient: randomGradient,
      width: 1.5 + Math.random() * 0.5, // Variación sutil de grosor
      duration: 15 + Math.random() * 10, // Muy lento: 15-25s
      drawDelay: Math.random() * 3, // Inicio de dibujo escalonado
      particleDelay: 2 + Math.random() * 2 // La partícula espera a que se dibuje un poco
    }
  })
}

onMounted(() => {
  initLines()
})
</script>

<template>
  <div class="circuit-container">
    <svg
      class="circuit-svg"
      viewBox="0 0 200 800"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <!-- Gradientes originales (Turquesa/Cyan) -->
        <linearGradient id="circuitGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#2DCE9A" stop-opacity="0.8" />
          <stop offset="50%" stop-color="#00CED1" stop-opacity="0.6" />
          <stop offset="100%" stop-color="#40E0D0" stop-opacity="0.2" />
        </linearGradient>
        <linearGradient id="circuitGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#40E0D0" stop-opacity="0.2" />
          <stop offset="50%" stop-color="#2DCE9A" stop-opacity="0.6" />
          <stop offset="100%" stop-color="#48D1CC" stop-opacity="0.8" />
        </linearGradient>
        <linearGradient id="circuitGradient3" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#00CED1" stop-opacity="0.3" />
          <stop offset="100%" stop-color="#2DCE9A" stop-opacity="0.7" />
        </linearGradient>
        
        <!-- Glow para partículas -->
        <radialGradient id="particleGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#FFFFFF" stop-opacity="1" />
          <stop offset="40%" stop-color="#2DCE9A" stop-opacity="0.8" />
          <stop offset="100%" stop-color="#00CED1" stop-opacity="0" />
        </radialGradient>
        
        <!-- Filtros -->
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g v-for="line in lines" :key="line.id">
        <!-- Línea que se dibuja -->
        <path
          :id="'path-' + line.id"
          :d="line.d"
          :stroke="'url(#' + line.gradient + ')'"
          :stroke-width="line.width"
          stroke-linecap="round"
          class="draw-line"
          :style="{ animationDelay: line.drawDelay + 's' }"
        />

        <!-- Partícula única fluyendo lento (sin nodos estáticos) -->
        <circle r="3" fill="url(#particleGlow)" filter="url(#glow)">
          <animateMotion 
            :dur="line.duration + 's'" 
            repeatCount="indefinite"
            :begin="(line.drawDelay + line.particleDelay) + 's'"
          >
            <mpath :href="'#path-' + line.id" />
          </animateMotion>
        </circle>
        
        <!-- Segunda partícula opcional en líneas largas para flujo continuo -->
        <circle v-if="line.duration > 20" r="2" fill="#00CED1" opacity="0.6" filter="url(#glow)">
          <animateMotion 
            :dur="line.duration + 's'" 
            repeatCount="indefinite"
            :begin="(line.drawDelay + line.particleDelay + (line.duration/2)) + 's'"
          >
            <mpath :href="'#path-' + line.id" />
          </animateMotion>
        </circle>
      </g>
    </svg>
  </div>
</template>

<style scoped>
.circuit-container {
  position: fixed;
  right: 0;
  top: 0;
  width: 200px; /* Ancho original */
  height: 100vh;
  pointer-events: none;
  z-index: 1;
  opacity: 0.8;
}

.circuit-svg {
  width: 100%;
  height: 100%;
}

.draw-line {
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: drawLine 3s ease-out forwards; /* Dibujo suave */
}

@keyframes drawLine {
  to {
    stroke-dashoffset: 0;
  }
}

@media (max-width: 768px) {
  .circuit-container {
    width: 100px;
    opacity: 0.4;
  }
}
</style>