<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { Lightbulb, Star, Handshake, Search } from "lucide-vue-next";

const parallaxOffset = ref(0);
const sectionRef = ref<HTMLElement | null>(null);
const isVisible = ref(false);

const handleScroll = () => {
  if (sectionRef.value) {
    const rect = sectionRef.value.getBoundingClientRect();
    const scrollProgress = -rect.top / window.innerHeight;
    parallaxOffset.value = scrollProgress * 100;

    if (rect.top < window.innerHeight * 0.8) {
      isVisible.value = true;
    }
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  handleScroll();
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

const stats = [
  { value: "5+", label: "Años de experiencia" },
  { value: "20+", label: "Proyectos entregados" },
  { value: "100%", label: "Clientes satisfechos" },
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
        <!-- Left Column: Story -->
        <div
          class="space-y-8"
          :class="{
            'animate-fade-in-left': isVisible,
            'opacity-0': !isVisible,
          }"
        >
          <div>
            <span
              class="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-4"
            >
              Nuestra Filosofía
            </span>
            <h2
              class="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight"
            >
              Optimizamos tu operación con
              <span class="text-primary">soluciones</span>
              que impulsan tus resultados
            </h2>
          </div>

          <div class="space-y-5 text-lg text-slate-300/90 leading-relaxed">
            <p>
              <strong class="text-white">CODEGAHP</strong> se fundó con un propósito claro: diseñar tecnología que responda a desafíos de negocio reales, incrementando la eficiencia operativa y eliminando la complejidad. Construimos sistemas orientados a
              <span class="text-primary/90 font-medium">optimizar tiempos de trabajo</span>
              y
              <span class="text-primary/90 font-medium">potenciar la rentabilidad</span>
              de tu organización.
            </p>
            <p>
              Ayudamos a empresas y organismos públicos de México y Latinoamérica a liderar su transformación digital con soluciones estables, escalables y diseñadas para resolver ineficiencias estructurales.
            </p>
          </div>

          <!-- Stats -->
          <div class="grid grid-cols-3 gap-6 pt-4">
            <div
              v-for="stat in stats"
              :key="stat.label"
              class="text-center"
            >
              <div class="text-3xl lg:text-4xl font-bold text-primary">
                {{ stat.value }}
              </div>
              <div class="text-sm text-slate-400 mt-1">{{ stat.label }}</div>
            </div>
          </div>
        </div>

        <!-- Right Column: Values -->
        <div
          class="space-y-5"
          :class="{
            'animate-fade-in-right': isVisible,
            'opacity-0': !isVisible,
          }"
        >
          <h3 class="text-2xl font-bold text-white">Nuestros Valores</h3>

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

          <!-- Quote -->
          <div class="p-5 rounded-xl bg-white/[0.03] border-l-2 border-primary/60 mt-6">
            <p class="text-white/80 italic">
              "No desarrollamos software con fines puramente teóricos; construimos herramientas estratégicas que automatizan operaciones y respaldan el crecimiento continuo de cada organización."
            </p>
            <p class="text-primary/70 text-sm font-medium mt-2">
              — Filosofía CODEGAHP
            </p>
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
