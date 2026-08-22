<script setup lang="ts">
import { ref, onMounted } from "vue";
import { ArrowUpRight } from "lucide-vue-next";

const { t } = useI18n({ useScope: "local" });

// Usa el layout por defecto (header + footer + chat de CODEGAHP).
useSeoMeta({
  title: () => t("seo.title"),
  description: () => t("seo.description"),
});

// Fuente Inter solo para esta vista.
useHead({
  link: [
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap",
    },
  ],
});

// Datos reales (stack) — se muestran donde iban las estadísticas.
const skills = [
  { area: "Front", tech: "Vue\nNuxt · React" },
  { area: "Back", tech: "Node\nLaravel · Java" },
  { area: "Cloud", tech: "AWS\nFirebase · SQL" },
];
const headingWords = ["Gustavo", "Herrera", "Pérez"];

// Campo de estrellas. Se genera en el cliente (Math.random) para no romper la
// hidratación: en SSR el cielo sale vacío y las estrellas aparecen al montar.
interface Star {
  top: number;
  left: number;
  size: number;
  delay: number;
  dur: number;
  o: number;
}
const stars = ref<Star[]>([]);
onMounted(() => {
  const arr: Star[] = [];
  for (let i = 0; i < 120; i++) {
    arr.push({
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: Math.random() * 2.2 + 0.5,
      delay: Math.random() * 5,
      dur: Math.random() * 2.5 + 2,
      o: Math.random() * 0.6 + 0.35,
    });
  }
  stars.value = arr;
});
</script>

<template>
  <section
    class="hero relative -mt-20 min-h-screen w-full overflow-hidden bg-[#070713] text-white"
  >
    <!-- Cielo estrellado -->
    <div class="pointer-events-none absolute inset-0">
      <!-- Nebulosa / resplandor morado -->
      <div
        class="absolute -top-[15%] left-1/2 h-[70vh] w-[70vh] -translate-x-1/2 rounded-full bg-[#5E0ED7]/25 blur-[130px]"
      ></div>
      <div
        class="absolute bottom-0 right-[5%] h-[45vh] w-[45vh] rounded-full bg-[#7c3aed]/20 blur-[130px]"
      ></div>
      <!-- Estrellas (se generan al montar en cliente) -->
      <div
        v-for="(s, i) in stars"
        :key="i"
        class="star absolute rounded-full bg-white"
        :style="{
          top: s.top + '%',
          left: s.left + '%',
          width: s.size + 'px',
          height: s.size + 'px',
          '--o': s.o,
          animationDelay: s.delay + 's',
          animationDuration: s.dur + 's',
        }"
      ></div>
    </div>

    <div class="relative z-10 flex min-h-screen flex-col pt-20">
      <!-- Kicker -->
      <div class="px-5 pt-6 sm:px-8 md:px-12">
        <span
          class="a-up inline-block text-[10px] font-semibold uppercase tracking-[0.3em] text-white/70"
          :style="{ animationDelay: '0.1s' }"
        >
          {{ t("kicker") }}
        </span>
      </div>

      <!-- Stack (donde iban las stats) -->
      <section
        class="flex flex-1 items-center justify-end px-5 py-8 sm:px-8 md:px-12 md:py-0"
      >
        <div class="flex items-end gap-5 sm:gap-8 md:gap-10">
          <div
            v-for="(s, i) in skills"
            :key="s.area"
            class="a-up text-right"
            :style="{ animationDelay: (i + 2) * 0.12 + 's' }"
          >
            <div
              class="font-semibold leading-none text-white"
              style="font-size: clamp(1.4rem, 4.5vw, 3rem)"
            >
              {{ s.area
              }}<span class="text-[#a78bfa]">.</span>
            </div>
            <div
              class="mt-2 whitespace-pre-line text-[10px] font-semibold uppercase leading-tight tracking-widest text-white sm:text-xs md:text-sm"
            >
              {{ s.tech }}
            </div>
          </div>
        </div>
      </section>

      <!-- Bottom -->
      <section
        class="flex flex-col gap-6 px-5 pb-8 sm:px-8 md:gap-12 md:px-12 md:pb-12"
      >
        <div class="flex items-center justify-between gap-4">
          <p
            class="a-up max-w-[150px] text-[10px] font-semibold uppercase tracking-widest sm:max-w-[190px] sm:text-xs md:max-w-xs md:text-sm"
            :style="{ animationDelay: '0.6s' }"
          >
            {{ t("role") }} <br />
            {{ t("founder") }} <br />
            {{ t("location") }}
          </p>

          <NuxtLinkLocale
            to="/contacto"
            class="a-up flex items-center gap-1 whitespace-nowrap text-base font-semibold text-[#a78bfa] sm:text-xl md:text-2xl"
            :style="{ animationDelay: '0.72s' }"
          >
            {{ t("cta") }}
            <ArrowUpRight class="h-[18px] w-[18px] sm:h-[22px] sm:w-[22px]" />
          </NuxtLinkLocale>
        </div>

        <div class="flex items-end justify-between gap-3 sm:gap-4">
          <p
            class="a-up w-[140px] shrink-0 text-left text-[9px] font-semibold uppercase tracking-widest sm:w-[200px] sm:text-xs md:w-[320px] md:text-right md:text-sm"
            :style="{ animationDelay: '0.84s' }"
          >
            {{ t("bio") }}
          </p>

          <h1 class="text-right">
            <span
              v-for="(word, i) in headingWords"
              :key="word"
              class="block overflow-hidden"
            >
              <span
                class="a-word block font-semibold uppercase text-white"
                style="font-size: clamp(2rem, 9vw, 8rem); line-height: 0.9"
                :style="{ animationDelay: 0.4 + i * 0.14 + 's' }"
                >{{ word }}</span
              >
            </span>
          </h1>
        </div>
      </section>
    </div>
  </section>
</template>

<style scoped>
.hero {
  font-family: "Inter", sans-serif;
}

.a-up {
  animation: heroFadeUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) both;
}
.a-word {
  animation: heroWordUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) both;
}
@keyframes heroFadeUp {
  from {
    opacity: 0;
    transform: translateY(32px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes heroWordUp {
  from {
    transform: translateY(110%);
  }
  to {
    transform: translateY(0);
  }
}

/* Estrellas titilantes */
.star {
  animation-name: twinkle;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  box-shadow: 0 0 4px rgba(255, 255, 255, 0.55);
}
@keyframes twinkle {
  0%,
  100% {
    opacity: calc(var(--o, 0.6) * 0.35);
  }
  50% {
    opacity: var(--o, 0.6);
  }
}
</style>

<i18n lang="json">
{
  "es": {
    "kicker": "Sobre mí",
    "role": "Desarrollador de software",
    "founder": "Fundador de CODEGAHP",
    "location": "Cd. del Carmen, Campeche",
    "cta": "Trabajemos juntos",
    "bio": "Construyo software a la medida —sitios, apps y automatización— que aguanta el trabajo real. Creador de LIDIA, la app de trazabilidad ganadera.",
    "seo": {
      "title": "Sobre mí - CODEGAHP",
      "description": "Gustavo Herrera — desarrollador de software y fundador de CODEGAHP en Ciudad del Carmen, Campeche."
    }
  },
  "en": {
    "kicker": "About me",
    "role": "Software developer",
    "founder": "Founder of CODEGAHP",
    "location": "Cd. del Carmen, Campeche",
    "cta": "Let's work together",
    "bio": "I build custom software —websites, apps and automation— that holds up to real work. Creator of LIDIA, the livestock traceability app.",
    "seo": {
      "title": "About me - CODEGAHP",
      "description": "Gustavo Herrera — software developer and founder of CODEGAHP in Ciudad del Carmen, Campeche."
    }
  }
}
</i18n>
