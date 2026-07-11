<script setup lang="ts">
// Bandera de México ondeando — fondo decorativo en la esquina inferior
// izquierda del hero de LIDIA. Ondeo de tela real con SVG (feTurbulence +
// feDisplacementMap animados) que también hace ondear al escudo. Se funde con
// el fondo con una máscara de desvanecido + opacidad (sin mix-blend-mode ni
// sombras, para no generar veladuras y verse bien en claro y oscuro).
</script>

<template>
  <div class="flag-wrap opacity-90 dark:opacity-60" aria-hidden="true">
    <svg
      class="flag"
      viewBox="0 0 360 206"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <!-- Ondeo de tela LIGERO: la turbulencia es ESTÁTICA (generarla en cada
             frame era lo pesado); solo animamos la escala del desplazamiento,
             que es mucho más barato y da el ondeo. -->
        <filter
          id="mx-wave"
          x="-12%"
          y="-12%"
          width="124%"
          height="124%"
          color-interpolation-filters="sRGB"
        >
          <feTurbulence
            type="turbulence"
            baseFrequency="0.01 0.016"
            numOctaves="2"
            seed="8"
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="18"
            xChannelSelector="R"
            yChannelSelector="G"
          >
            <animate
              attributeName="scale"
              dur="5.5s"
              values="12; 24; 15; 12"
              keyTimes="0; 0.4; 0.7; 1"
              calcMode="spline"
              keySplines="0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1"
              repeatCount="indefinite"
            />
          </feDisplacementMap>
        </filter>

        <!-- Sombreado que simula los pliegues de la tela -->
        <linearGradient id="mx-fold" x1="0" y1="0" x2="1" y2="0.15">
          <stop offset="0%" stop-color="#000" stop-opacity="0.16" />
          <stop offset="12%" stop-color="#fff" stop-opacity="0.18" />
          <stop offset="26%" stop-color="#000" stop-opacity="0.12" />
          <stop offset="40%" stop-color="#fff" stop-opacity="0.14" />
          <stop offset="55%" stop-color="#000" stop-opacity="0.14" />
          <stop offset="70%" stop-color="#fff" stop-opacity="0.12" />
          <stop offset="85%" stop-color="#000" stop-opacity="0.16" />
          <stop offset="100%" stop-color="#fff" stop-opacity="0.08" />
        </linearGradient>

        <!-- Desvanecido suave: sólido en la esquina, se disuelve hacia arriba
             y a la derecha para fundirse con el fondo -->
        <linearGradient id="mx-fade" x1="0.1" y1="0.9" x2="1" y2="0.05">
          <stop offset="0%" stop-color="#fff" stop-opacity="1" />
          <stop offset="70%" stop-color="#fff" stop-opacity="0.92" />
          <stop offset="100%" stop-color="#fff" stop-opacity="0" />
        </linearGradient>
        <mask id="mx-mask">
          <rect width="360" height="206" fill="url(#mx-fade)" />
        </mask>
      </defs>

      <g filter="url(#mx-wave)" mask="url(#mx-mask)">
        <!-- Franjas -->
        <rect x="0" y="0" width="120" height="206" fill="#006847" />
        <rect x="120" y="0" width="120" height="206" fill="#ffffff" />
        <rect x="240" y="0" width="120" height="206" fill="#ce1126" />

        <!-- Pliegues de tela sobre las franjas -->
        <rect x="0" y="0" width="360" height="206" fill="url(#mx-fold)" />

        <!-- Escudo Nacional centrado (ondea con la tela) -->
        <image
          href="/img/logo_mexico.png"
          x="120"
          y="47"
          width="120"
          height="112"
          preserveAspectRatio="xMidYMid meet"
        />
      </g>
    </svg>
  </div>
</template>

<style scoped>
.flag-wrap {
  position: absolute;
  bottom: -10px;
  left: -16px;
  width: clamp(320px, 42vw, 600px);
  z-index: 1;
  pointer-events: none;
  user-select: none;
  transform-origin: bottom left;
  animation: flag-sway 7s ease-in-out infinite;
  will-change: transform;
}

.flag {
  display: block;
  width: 100%;
  height: auto;
}

/* Balanceo suave, como colgada de un asta a la izquierda */
@keyframes flag-sway {
  0%,
  100% {
    transform: rotate(-1.2deg) translateY(0);
  }
  50% {
    transform: rotate(1deg) translateY(-5px);
  }
}

@media (prefers-reduced-motion: reduce) {
  .flag-wrap {
    animation: none;
  }
}
</style>
