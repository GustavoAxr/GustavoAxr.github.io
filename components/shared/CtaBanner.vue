<script setup lang="ts">
import { ArrowRight, Calendar, Code2, Terminal } from "lucide-vue-next";

interface Props {
  title?: string;
  subtitle?: string;
  description?: string;
  primaryLabel?: string;
  primaryLink?: string;
  secondaryLabel?: string;
  secondaryLink?: string;
}

withDefaults(defineProps<Props>(), {
  title: "Hagamos algo increíble",
  subtitle: "juntos",
  description:
    "Cada línea de código que escribimos está diseñada para llevar tu negocio al siguiente nivel. Platiquemos.",
  primaryLabel: "Iniciar Proyecto",
  primaryLink: "/contacto",
  secondaryLabel: "Agendar Llamada",
  secondaryLink: "/#booking-section",
});

const { currentColorHex } = useServiceTheme();
</script>

<template>
  <section class="py-20 lg:py-28 relative overflow-hidden">
    <div class="container mx-auto px-4">
      <div class="relative max-w-5xl mx-auto">
        <!-- Main Card -->
        <div
          class="cta-card group relative rounded-[2rem] overflow-hidden border border-slate-200/50 dark:border-slate-700/30"
        >
          <!-- Deep background -->
          <div
            class="absolute inset-0 bg-gradient-to-br from-slate-100 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
          ></div>

          <!-- Animated circuit lines -->
          <svg
            class="absolute inset-0 w-full h-full opacity-[0.06] dark:opacity-[0.08]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                id="ctaCircuitGrad"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" :stop-color="currentColorHex" />
                <stop offset="50%" :stop-color="currentColorHex" stop-opacity="0.7" />
                <stop offset="100%" :stop-color="currentColorHex" stop-opacity="0.4" />
              </linearGradient>
            </defs>
            <!-- Horizontal circuit lines -->
            <line
              x1="0"
              y1="25%"
              x2="100%"
              y2="25%"
              stroke="url(#ctaCircuitGrad)"
              stroke-width="1"
              class="circuit-line-1"
            />
            <line
              x1="0"
              y1="50%"
              x2="100%"
              y2="50%"
              stroke="url(#ctaCircuitGrad)"
              stroke-width="1"
              class="circuit-line-2"
            />
            <line
              x1="0"
              y1="75%"
              x2="100%"
              y2="75%"
              stroke="url(#ctaCircuitGrad)"
              stroke-width="1"
              class="circuit-line-3"
            />
            <!-- Vertical lines -->
            <line
              x1="20%"
              y1="0"
              x2="20%"
              y2="100%"
              stroke="url(#ctaCircuitGrad)"
              stroke-width="1"
              class="circuit-line-2"
            />
            <line
              x1="80%"
              y1="0"
              x2="80%"
              y2="100%"
              stroke="url(#ctaCircuitGrad)"
              stroke-width="1"
              class="circuit-line-1"
            />
            <!-- Circuit nodes -->
            <circle
              cx="20%"
              cy="25%"
              r="4"
              :fill="currentColorHex"
              class="circuit-node"
            />
            <circle
              cx="80%"
              cy="75%"
              r="4"
              :fill="currentColorHex"
              fill-opacity="0.7"
              class="circuit-node-delay"
            />
            <circle
              cx="50%"
              cy="50%"
              r="3"
              :fill="currentColorHex"
              fill-opacity="0.5"
              class="circuit-node"
            />
            <circle
              cx="20%"
              cy="75%"
              r="3"
              :fill="currentColorHex"
              class="circuit-node-delay"
            />
            <circle
              cx="80%"
              cy="25%"
              r="3"
              :fill="currentColorHex"
              fill-opacity="0.5"
              class="circuit-node"
            />
          </svg>

          <!-- Glow orbs -->
          <div
            class="absolute -top-20 -right-20 w-80 h-80 bg-primary/10 dark:bg-primary/15 rounded-full blur-[100px] group-hover:bg-primary/20 dark:group-hover:bg-primary/25 transition-all duration-1000"
          ></div>
          <div
            class="absolute -bottom-20 -left-20 w-60 h-60 bg-primary-light/5 dark:bg-primary-light/10 rounded-full blur-[80px] group-hover:bg-primary-light/15 dark:group-hover:bg-primary-light/20 transition-all duration-1000"
          ></div>

          <!-- Floating code snippets -->
          <div
            class="absolute top-6 left-6 hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/[0.04] dark:bg-white/[0.04] border border-slate-900/[0.06] dark:border-white/[0.06] backdrop-blur-sm floating-code"
          >
            <Terminal class="w-3.5 h-3.5 text-primary/60" />
            <code class="text-[11px] text-primary/50 font-mono"
              >npx codegahp init</code
            >
          </div>
          <div
            class="absolute bottom-6 right-6 hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/[0.04] dark:bg-white/[0.04] border border-slate-900/[0.06] dark:border-white/[0.06] backdrop-blur-sm floating-code-delay"
          >
            <Code2 class="w-3.5 h-3.5 text-primary-light/60" />
            <code class="text-[11px] text-primary-light/50 font-mono"
              >build: success ✓</code
            >
          </div>

          <!-- Content -->
          <div class="relative z-10 p-10 lg:p-16 text-center">
            <!-- CODEGAHP Logo Mark -->
            <div
              class="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500"
            >
              <div
                class="w-8 h-8 rounded-lg bg-primary flex items-center justify-center shadow-lg shadow-primary/30"
              >
                <span class="text-white font-black text-sm">C</span>
              </div>
            </div>

            <!-- Title with gradient -->
            <h2
              class="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-slate-900 dark:text-white mb-3 leading-tight"
            >
              {{ title }}
              <br />
              <span
                class="text-primary"
              >
                {{ subtitle }}
              </span>
            </h2>

            <p
              class="text-lg lg:text-xl text-slate-500 dark:text-slate-400 max-w-xl mx-auto mb-10 leading-relaxed"
            >
              {{ description }}
            </p>

            <!-- Buttons -->
            <div class="flex flex-col sm:flex-row justify-center gap-4">
              <!-- Primary Button -->
              <NuxtLink :to="primaryLink" class="group/btn relative">
                <div
                  class="absolute -inset-1 bg-primary/50 rounded-2xl blur-lg group-hover/btn:bg-primary/70 transition-all duration-500"
                ></div>
                <div
                  class="relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary hover:bg-primary-dark text-white font-bold text-lg rounded-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
                >
                  <!-- Shimmer -->
                  <div
                    class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"
                  ></div>
                  <span class="relative">{{ primaryLabel }}</span>
                  <ArrowRight
                    class="w-5 h-5 relative group-hover/btn:translate-x-1 transition-transform"
                  />
                </div>
              </NuxtLink>

              <!-- Secondary Button -->
              <NuxtLink
                :to="secondaryLink"
                class="inline-flex items-center justify-center gap-3 px-8 py-4 bg-slate-900/[0.04] dark:bg-white/[0.06] backdrop-blur-sm text-slate-800 dark:text-white font-bold text-lg rounded-xl border border-slate-200 dark:border-white/10 hover:border-primary/40 hover:bg-primary/5 dark:hover:bg-white/[0.1] transition-all duration-300"
              >
                <Calendar class="w-5 h-5 text-primary" />
                {{ secondaryLabel }}
              </NuxtLink>
            </div>

            <!-- Trust line -->
            <div
              class="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-slate-600 dark:text-slate-400 text-sm"
            >
              <div class="flex items-center gap-2">
                <div
                  class="w-2 h-2 rounded-full bg-primary animate-pulse"
                ></div>
                Sin compromiso
              </div>
              <div class="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600"></div>
              <div class="flex items-center gap-2">
                <div
                  class="w-2 h-2 rounded-full bg-primary-light animate-pulse"
                  style="animation-delay: 0.5s"
                ></div>
                Respuesta en 24h
              </div>
              <div class="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600"></div>
              <div class="flex items-center gap-2">
                <div
                  class="w-2 h-2 rounded-full bg-primary/60 animate-pulse"
                  style="animation-delay: 1s"
                ></div>
                100% profesional
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cta-card {
  transition:
    transform 0.6s cubic-bezier(0.16, 1, 0.3, 1),
    box-shadow 0.6s ease;
}

.cta-card:hover {
  transform: translateY(-4px);
  box-shadow:
    0 40px 100px -20px rgb(var(--color-primary) / 0.1),
    0 0 0 1px rgb(var(--color-primary) / 0.08);
}

:root.dark .cta-card:hover {
  box-shadow:
    0 40px 100px -20px rgb(var(--color-primary) / 0.15),
    0 0 0 1px rgb(var(--color-primary) / 0.1);
}

/* Circuit line animations */
.circuit-line-1 {
  stroke-dasharray: 12 8;
  animation: circuitDash 8s linear infinite;
}

.circuit-line-2 {
  stroke-dasharray: 8 16;
  animation: circuitDash 12s linear infinite reverse;
}

.circuit-line-3 {
  stroke-dasharray: 4 20;
  animation: circuitDash 10s linear infinite;
}

@keyframes circuitDash {
  to {
    stroke-dashoffset: -100;
  }
}

/* Circuit nodes pulse */
.circuit-node {
  animation: nodePulse 3s ease-in-out infinite;
}

.circuit-node-delay {
  animation: nodePulse 3s ease-in-out 1.5s infinite;
}

@keyframes nodePulse {
  0%,
  100% {
    opacity: 0.3;
    r: 3;
  }
  50% {
    opacity: 1;
    r: 5;
  }
}

/* Floating code snippets */
.floating-code {
  animation: floatCode 6s ease-in-out infinite;
}

.floating-code-delay {
  animation: floatCode 7s ease-in-out 2s infinite;
}

@keyframes floatCode {
  0%,
  100% {
    transform: translateY(0) rotate(0deg);
    opacity: 0.7;
  }
  50% {
    transform: translateY(-8px) rotate(0.5deg);
    opacity: 1;
  }
}
</style>
