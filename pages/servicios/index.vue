<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-vue-next";

const { servicesMenu } = useServices();

useSeoMeta({
  title: "Catálogo de Soluciones - CODEGAHP | Consultoría y Desarrollo Tecnológico",
  description:
    "Catálogo de soluciones para desafíos empresariales: automatización de procesos, presencia digital, modernización de gobierno y optimización de infraestructura cloud.",
  ogTitle: "Soluciones Tecnológicas Corporativas | CODEGAHP",
  ogDescription:
    "Optimice la operación de su empresa con nuestras soluciones tecnológicas a la medida: automatización de procesos, desarrollo web, AWS y soporte especializado.",
});

const sectionRefs = ref<HTMLElement[]>([]);
const visibleSections = ref<Set<number>>(new Set());

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const index = Number(entry.target.getAttribute("data-index"));
        if (entry.isIntersecting) {
          visibleSections.value.add(index);
        }
      });
    },
    { threshold: 0.1 }
  );

  sectionRefs.value.forEach((el) => {
    if (el) observer.observe(el);
  });

  onUnmounted(() => observer.disconnect());
});
</script>

<template>
  <div class="min-h-screen">
    <!-- Hero -->
    <section class="py-20 lg:py-28 relative overflow-hidden">
      <div
        class="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent dark:from-primary/10"
      ></div>
      <div class="container mx-auto px-4 relative z-10 animate-fade-in-up">
        <div class="max-w-3xl mx-auto text-center">
          <h1
            class="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6"
          >
            Catálogo de
            <span class="text-primary">Soluciones</span>
          </h1>
          <p class="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
            Un catálogo de soluciones de software e infraestructura para optimizar procesos.
            Identifica el desafío de tu empresa y aplica la solución adecuada.
          </p>
        </div>
      </div>
    </section>

    <!-- Categorías -->
    <section class="pb-24">
      <div class="container mx-auto px-4">
        <div class="space-y-20">
          <div
            v-for="(category, catIndex) in servicesMenu"
            :key="category.category"
            :ref="(el) => { if (el) sectionRefs[catIndex] = el as HTMLElement }"
            :data-index="catIndex"
            class="transition-all duration-700"
            :class="
              visibleSections.has(catIndex)
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            "
          >
            <div class="flex items-center gap-4 mb-8">
              <div class="h-px flex-1 bg-gradient-to-r from-primary/40 to-transparent"></div>
              <h2
                class="text-sm font-bold uppercase tracking-widest text-primary"
              >
                {{ category.category }}
              </h2>
              <div class="h-px flex-1 bg-gradient-to-l from-primary/40 to-transparent"></div>
            </div>

            <div
              class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              <NuxtLink
                v-for="(item, itemIndex) in category.items"
                :key="item.slug"
                :to="item.to"
                class="group relative p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
                :style="{ transitionDelay: `${itemIndex * 100}ms` }"
              >
                <div class="flex items-start gap-4">
                  <div
                    class="w-12 h-12 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 dark:group-hover:bg-primary/30 transition-colors"
                  >
                    <component
                      :is="item.icon"
                      class="w-6 h-6 text-primary"
                    />
                  </div>
                  <div class="flex-1 min-w-0">
                    <div class="flex items-center gap-2 mb-2">
                      <h3
                        class="text-lg font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors"
                      >
                        {{ item.title }}
                      </h3>
                      <span
                        v-if="item.badge"
                        :class="item.badgeColor"
                        class="text-xs font-semibold px-2 py-0.5 rounded-full"
                      >
                        {{ item.badge }}
                      </span>
                    </div>
                    <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {{ item.desc }}
                    </p>
                  </div>
                </div>
                <div
                  class="mt-4 flex items-center gap-1 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <span>Ver Solución</span>
                  <ArrowRight class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 border-t border-slate-200 dark:border-slate-800">
      <div class="container mx-auto px-4 text-center">
        <h2
          class="text-3xl font-bold text-slate-900 dark:text-white mb-4"
        >
          ¿Tu requerimiento no está en esta lista?
        </h2>
        <p class="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
          Cada organización tiene retos particulares. Presenta tu caso operativo y diseñaremos un proyecto tecnológico a la medida de tu empresa.
        </p>
        <NuxtLink to="/contacto">
          <Button
            size="lg"
            class="bg-primary hover:bg-primary-dark text-white text-lg h-12 px-8 shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all transform hover:-translate-y-0.5 rounded-xl"
          >
            Solicitar Diagnóstico Sin Costo
            <ArrowRight class="w-5 h-5 ml-2" />
          </Button>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
