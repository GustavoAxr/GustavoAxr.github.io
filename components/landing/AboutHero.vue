<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { Lightbulb, Star, Handshake, Search } from "lucide-vue-next";

const parallaxOffset = ref(0);
const sectionRef = ref<HTMLElement | null>(null);
const isVisible = ref(false);

// El lector de layout (getBoundingClientRect) se agrupa dentro de un
// requestAnimationFrame para evitar "reflow forzado" en cada evento de scroll.
let ticking = false;
const measure = () => {
  ticking = false;
  if (!sectionRef.value) return;
  const rect = sectionRef.value.getBoundingClientRect();
  parallaxOffset.value = (-rect.top / window.innerHeight) * 100;
  if (rect.top < window.innerHeight * 0.8) isVisible.value = true;
};
const handleScroll = () => {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(measure);
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll, { passive: true });
  measure();
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

const values = [
  {
    title: "Enfoque en Resultados",
    desc: "Desarrollos diseñados para generar retorno de inversión inmediato.",
    icon: Lightbulb,
  },
  {
    title: "Garantía de Operación",
    desc: "Sistemas estables y robustos que protegen tu operación diaria.",
    icon: Star,
  },
  {
    title: "Simplicidad Absoluta",
    desc: "Diseños intuitivos que eliminan la fricción para todo tu equipo.",
    icon: Handshake,
  },
  {
    title: "Acompañamiento Estratégico",
    desc: "Soporte cercano y continuo para asegurar tu crecimiento digital.",
    icon: Search,
  },
];
</script>

<template>
  <section
    ref="sectionRef"
    class="relative min-h-screen overflow-hidden"
    id="about"
  >
    <!-- Parallax Background Image -->
    <div
      class="absolute inset-0 w-full h-[120%] -top-[10%]"
      :style="{ transform: `translateY(${parallaxOffset * 0.3}px)` }"
    >
      <picture class="block w-full h-full">
        <source srcset="/img/presentacion.webp" type="image/webp" />
        <img
          src="/img/presentacion.jpg"
          alt="Alexander - Fundador de CODEGAHP"
          width="1920"
          height="1025"
          loading="lazy"
          decoding="async"
          class="w-full h-full object-cover object-center"
        />
      </picture>
    </div>

    <!-- Single clean overlay -->
    <div
      class="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/50 to-slate-950/85"
    ></div>

    <!-- Content -->
    <div
      class="relative z-10 container max-w-7xl mx-auto px-4 py-24 lg:py-32 min-h-screen flex items-center"
    >
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
        <!-- Left Column: Misión y Visión -->
        <div
          class="space-y-8"
          :class="{
            'animate-fade-in-left': isVisible,
            'opacity-0': !isVisible,
          }"
        >
          <span
            class="inline-block text-primary font-semibold text-sm uppercase tracking-widest"
          >
            Nuestra Esencia
          </span>

          <!-- Misión -->
          <div>
            <h3 class="text-3xl lg:text-4xl font-bold text-white mb-3">Misión</h3>
            <p class="text-lg text-slate-300/90 leading-relaxed">
              Diseñar tecnología que resuelva
              <span class="text-primary/90 font-medium">desafíos reales de negocio</span>,
              optimizando los tiempos de trabajo y potenciando la rentabilidad de cada organización.
            </p>
          </div>

          <!-- Visión -->
          <div>
            <h3 class="text-3xl lg:text-4xl font-bold text-white mb-3">Visión</h3>
            <p class="text-lg text-slate-300/90 leading-relaxed">
              Ser el aliado tecnológico que impulsa la
              <span class="text-primary/90 font-medium">transformación digital</span>
              de empresas y organismos de México y Latinoamérica, con soluciones estables, escalables y a la medida.
            </p>
          </div>
        </div>

        <!-- Right Column: Valores -->
        <div
          class="space-y-5"
          :class="{
            'animate-fade-in-right': isVisible,
            'opacity-0': !isVisible,
          }"
        >
          <h3 class="text-2xl font-bold text-white">Valores</h3>

          <div class="grid gap-3">
            <div
              v-for="(value, index) in values"
              :key="value.title"
              class="group flex items-center gap-4 p-5 rounded-xl bg-white/[0.04] backdrop-blur-sm border border-white/[0.06] hover:border-primary/30 hover:bg-white/[0.07] transition-all duration-300"
              :style="{ transitionDelay: `${index * 50}ms` }"
            >
              <div
                class="w-11 h-11 rounded-lg bg-primary/15 flex items-center justify-center shrink-0 group-hover:bg-primary/25 transition-colors"
              >
                <component :is="value.icon" class="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4
                  class="font-semibold text-white text-base group-hover:text-primary transition-colors"
                >
                  {{ value.title }}
                </h4>
                <p class="text-slate-400 text-sm mt-0.5">{{ value.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-fade-in-left {
  animation: fadeInLeft 0.8s ease-out forwards;
}

.animate-fade-in-right {
  animation: fadeInRight 0.8s ease-out 0.2s forwards;
}
</style>
