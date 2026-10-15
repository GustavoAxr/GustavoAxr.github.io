<script setup lang="ts">
// Sobre mí: quién está detrás de CODEGAHP, con la identidad del sitio (verde
// de marca, retícula de circuito y el corte diagonal de Proyectos). Solo datos
// reales: rol, ubicación, productos (Clocc y LIDIA) y stack. Secciones
// abiertas, sin cards, separadas con border-t.
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Building2,
  MapPin,
  Monitor,
  Smartphone,
  Server,
  Cloud,
  WifiOff,
  Plug,
  FlaskConical,
} from "lucide-vue-next";
import AboutTerminal from "@/components/about/AboutTerminal.vue";

const { t } = useI18n({ useScope: "local" });

useSeoMeta({
  title: () => t("seo.title"),
  description: () => t("seo.description"),
  ogTitle: () => t("seo.title"),
  ogDescription: () => t("seo.description"),
  ogImage: "https://codegahp.com/img/sobre-mi/gustavo.jpg",
});

// Los dos productos, cada uno abre su lado en /proyectos
const products = computed(() => [
  {
    key: "clocc" as const,
    world: t("products.clocc.world"),
    desc: t("products.clocc.desc"),
  },
  {
    key: "lidia" as const,
    world: t("products.lidia.world"),
    desc: t("products.lidia.desc"),
  },
]);

// Stack, de la pantalla a la nube (web, móvil, servidor y nube)
const stack = computed(() => [
  { icon: Monitor, area: "Front", tech: "Vue · Nuxt · React", desc: t("stack.front") },
  { icon: Smartphone, area: t("stack.mobileArea"), tech: "Flutter · Android · iOS", desc: t("stack.mobile") },
  { icon: Server, area: "Back", tech: "Node · Laravel · Java · Go", desc: t("stack.back") },
  { icon: Cloud, area: "Cloud", tech: "AWS · Firebase · SQL", desc: t("stack.cloud") },
]);

// Principios, cada uno con el producto donde ya se cumple
const principles = computed(() => [
  { icon: WifiOff, title: t("principles.p1.title"), desc: t("principles.p1.desc"), proof: "LIDIA" },
  { icon: Plug, title: t("principles.p2.title"), desc: t("principles.p2.desc"), proof: "Clocc" },
  { icon: FlaskConical, title: t("principles.p3.title"), desc: t("principles.p3.desc"), proof: "LIDIA" },
]);

// En escritorio la terminal tapa el logo que sale en la pantalla holográfica
// de la foto. Como la foto se recorta con object-cover (posición 30% / centro),
// se calcula dónde cae ese punto en la foto ya recortada y la terminal se pone
// encima, sin salirse de la pantalla. Se recalcula al cambiar el tamaño. Sin
// JS (o en móvil, donde va debajo del texto) queda en su lugar de siempre.
const PHOTO = { w: 1700, h: 1024, posX: 0.3 };
const MARK = { x: 825, y: 545 }; // esquina superior izquierda del logo
const photo = ref<HTMLElement | null>(null);
const term = ref<HTMLElement | null>(null);
const termPos = ref<{ left: string; top: string } | null>(null);
let photoObserver: ResizeObserver | null = null;

function placeTerminal() {
  const box = photo.value;
  const el = term.value;
  const section = box?.offsetParent as HTMLElement | null;
  if (!box || !el || !section || !window.matchMedia("(min-width: 1024px)").matches) {
    termPos.value = null;
    return;
  }
  const W = box.offsetWidth;
  const H = box.offsetHeight;
  const s = Math.max(W / PHOTO.w, H / PHOTO.h);
  const markX = box.offsetLeft + (W - PHOTO.w * s) * PHOTO.posX + MARK.x * s;
  const markY = box.offsetTop + (H - PHOTO.h * s) / 2 + MARK.y * s;
  const left = Math.min(markX - 56, section.clientWidth - el.offsetWidth - 24);
  const top = Math.max(24, Math.min(markY - 48, H - el.offsetHeight - 24));
  termPos.value = { left: `${left}px`, top: `${top}px` };
}

onMounted(() => {
  placeTerminal();
  photoObserver = new ResizeObserver(placeTerminal);
  if (photo.value) photoObserver.observe(photo.value);
  if (term.value) photoObserver.observe(term.value);
});
onBeforeUnmount(() => photoObserver?.disconnect());
</script>

<template>
  <div class="bg-white dark:bg-slate-950">
    <!-- ============ HERO ============ -->
    <section
      class="relative overflow-clip bg-slate-50 dark:bg-slate-950 lg:min-h-[max(640px,calc(100svh-5rem))]"
    >
      <!-- retícula tenue + resplandor de marca -->
      <div
        class="pointer-events-none absolute inset-0 bg-[radial-gradient(rgb(15_23_42/0.07)_1px,transparent_1px)] [background-size:22px_22px] dark:bg-[radial-gradient(rgb(255_255_255/0.06)_1px,transparent_1px)]"
      ></div>
      <div
        class="pointer-events-none absolute -left-40 top-1/3 h-[30rem] w-[30rem] rounded-full bg-primary/15 blur-[120px]"
      ></div>

      <!-- Foto: a la derecha con el corte diagonal de Proyectos; en móvil va
           arriba y el corte queda abajo -->
      <div
        ref="photo"
        class="relative h-[52svh] min-h-[320px] [clip-path:polygon(0_0,100%_0,100%_calc(100%-10vw),0_100%)] lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-[54%] lg:[clip-path:polygon(14%_0,100%_0,100%_100%,0_100%)]"
      >
        <picture>
          <source srcset="/img/sobre-mi/gustavo.webp" type="image/webp" />
          <img
            src="/img/sobre-mi/gustavo.jpg"
            :alt="t('photoAlt')"
            width="1700"
            height="1024"
            fetchpriority="high"
            class="absolute inset-0 h-full w-full object-cover object-[30%_center]"
          />
        </picture>
      </div>

      <!-- Texto -->
      <div
        class="relative z-10 px-6 pb-10 pt-8 sm:px-10 lg:flex lg:min-h-[max(640px,calc(100svh-5rem))] lg:w-1/2 lg:flex-col lg:justify-center lg:py-20 lg:pl-20 lg:pr-16"
      >
        <p
          class="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-primary-dark dark:text-primary"
        >
          {{ t("kicker") }}
        </p>
        <h1
          class="text-5xl font-black leading-[0.95] tracking-tight text-slate-900 dark:text-white sm:text-6xl xl:text-7xl"
        >
          Gustavo<br />Herrera Pérez
        </h1>
        <p
          class="mt-6 text-2xl font-bold leading-snug text-slate-800 dark:text-slate-100 sm:text-3xl"
        >
          {{ t("tagBefore") }}
          <span
            class="bg-gradient-to-r from-primary to-cyan-500 bg-clip-text text-transparent"
            >{{ t("tagHighlight") }}</span
          >.
        </p>
        <p
          class="mt-5 max-w-xl text-lg leading-relaxed text-slate-600 dark:text-slate-400"
        >
          {{ t("bio") }}
        </p>
        <ul
          class="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-600 dark:text-slate-400"
        >
          <li class="inline-flex items-center gap-2">
            <Code2 class="h-4 w-4 text-primary" /> {{ t("role") }}
          </li>
          <li class="inline-flex items-center gap-2">
            <Building2 class="h-4 w-4 text-primary" /> {{ t("founder") }}
          </li>
          <li class="inline-flex items-center gap-2">
            <MapPin class="h-4 w-4 text-primary" /> Ciudad del Carmen, Campeche
          </li>
        </ul>
        <div
          class="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4"
        >
          <Button as-child variant="bare" size="free" class="[&_svg]:size-5">
            <NuxtLinkLocale
              to="/contacto"
              class="group/cta inline-flex h-12 items-center gap-2 rounded-[5px] bg-primary px-8 font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5 hover:shadow-primary/40"
            >
              {{ t("cta") }}
              <ArrowRight
                class="h-5 w-5 transition-transform group-hover/cta:translate-x-1"
              />
            </NuxtLinkLocale>
          </Button>
          <NuxtLinkLocale
            to="/proyectos"
            class="inline-flex items-center gap-2 font-medium text-slate-700 transition-colors hover:text-slate-900 dark:text-white/80 dark:hover:text-white"
          >
            {{ t("ctaSecondary") }}
            <ArrowUpRight class="h-4 w-4" />
          </NuxtLinkLocale>
        </div>
      </div>

      <!-- Terminal: sobre la foto en escritorio (encima del logo de la
           pantalla, ver placeTerminal), bajo el texto en móvil -->
      <div
        ref="term"
        class="a-up relative z-20 px-6 pb-14 sm:px-10 lg:absolute lg:bottom-14 lg:right-[5%] lg:p-0"
        :style="[
          { animationDelay: '0.55s' },
          termPos && { ...termPos, right: 'auto', bottom: 'auto' },
        ]"
      >
        <AboutTerminal />
      </div>
    </section>

    <!-- ============ LO QUE CONSTRUYO ============ -->
    <section
      class="border-t border-slate-100 py-20 dark:border-slate-900 lg:py-28"
    >
      <div class="px-6 sm:px-10 lg:px-20">
        <p
          class="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary-dark dark:text-primary"
        >
          {{ t("products.eyebrow") }}
        </p>
        <h2
          class="max-w-3xl text-3xl font-black leading-[1.05] tracking-tight text-slate-900 dark:text-white sm:text-4xl xl:text-5xl"
        >
          {{ t("products.title") }}
        </h2>

        <div class="mt-14 grid gap-12 md:grid-cols-2 md:gap-0">
          <NuxtLinkLocale
            v-for="(pr, i) in products"
            :key="pr.key"
            :to="{ path: '/proyectos', query: { p: pr.key } }"
            class="group block"
            :class="
              i === 0
                ? 'md:pr-12'
                : 'md:border-l-2 md:border-dashed md:border-slate-200 md:pl-12 dark:md:border-slate-800'
            "
          >
            <span
              class="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500"
              >{{ pr.world }}</span
            >
            <span class="mt-4 flex items-center gap-3 text-4xl">
              <template v-if="pr.key === 'clocc'">
                <CloccLogo class="h-11 w-11 shrink-0" />
                <CloccWordmark class="h-[0.74em] w-auto" />
              </template>
              <template v-else>
                <LidiaLogo class="h-11 w-11 shrink-0" />
                <span
                  class="font-black leading-none tracking-tight text-slate-900 dark:text-white"
                  >LIDIA</span
                >
              </template>
            </span>
            <p
              class="mt-4 max-w-md text-lg leading-relaxed text-slate-600 dark:text-slate-400"
            >
              {{ pr.desc }}
            </p>
            <span
              class="mt-5 inline-flex items-center gap-2 font-semibold"
              :class="
                pr.key === 'clocc'
                  ? 'text-sky-600 dark:text-sky-400'
                  : 'text-emerald-700 dark:text-emerald-400'
              "
            >
              {{ t("products.see") }}
              <ArrowRight
                class="h-4 w-4 transition-transform group-hover:translate-x-1"
              />
            </span>
          </NuxtLinkLocale>
        </div>
      </div>
    </section>

    <!-- ============ STACK: DEL NAVEGADOR A LA NUBE ============ -->
    <section
      class="border-t border-slate-100 py-20 dark:border-slate-900 lg:py-28"
    >
      <div class="px-6 text-center sm:px-10 lg:px-20">
        <p
          class="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary-dark dark:text-primary"
        >
          {{ t("stack.eyebrow") }}
        </p>
        <h2
          class="text-3xl font-black leading-[1.05] tracking-tight text-slate-900 dark:text-white sm:text-4xl xl:text-5xl"
        >
          {{ t("stack.title") }}
        </h2>
        <p
          class="mx-auto mt-4 max-w-xl text-lg text-slate-600 dark:text-slate-400"
        >
          {{ t("stack.subtitle") }}
        </p>

        <ol class="relative mx-auto mt-16 grid max-w-6xl gap-12 md:grid-cols-2 lg:grid-cols-4">
          <span
            class="absolute left-[12.5%] right-[12.5%] top-8 hidden border-t-2 border-dashed border-primary/25 lg:block"
            aria-hidden="true"
          ></span>
          <li
            v-for="(s, i) in stack"
            :key="s.area"
            class="relative flex flex-col items-center"
          >
            <span
              class="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-primary/20 bg-white shadow-sm dark:bg-slate-900"
            >
              <component :is="s.icon" class="h-7 w-7 text-primary" />
              <span
                class="absolute -right-2 -top-2 grid h-6 w-6 place-items-center rounded-full bg-gradient-to-br from-primary to-cyan-500 text-[11px] font-bold text-white"
                >{{ i + 1 }}</span
              >
            </span>
            <h3
              class="mt-5 text-lg font-bold text-slate-900 dark:text-white"
            >
              {{ s.area }}
            </h3>
            <p
              class="mt-1 font-mono text-sm text-primary-dark dark:text-primary"
            >
              {{ s.tech }}
            </p>
            <p
              class="mt-2 max-w-xs text-sm leading-relaxed text-slate-500 dark:text-slate-400"
            >
              {{ s.desc }}
            </p>
          </li>
        </ol>
      </div>
    </section>

    <!-- ============ PRINCIPIOS ============ -->
    <section
      class="border-t border-slate-100 py-20 dark:border-slate-900 lg:py-28"
    >
      <div class="px-6 sm:px-10 lg:px-20">
        <p
          class="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary-dark dark:text-primary"
        >
          {{ t("principles.eyebrow") }}
        </p>
        <h2
          class="max-w-3xl text-3xl font-black leading-[1.05] tracking-tight text-slate-900 dark:text-white sm:text-4xl xl:text-5xl"
        >
          {{ t("principles.title") }}
        </h2>

        <div class="mt-14 grid gap-x-12 gap-y-10 md:grid-cols-3">
          <div v-for="pr in principles" :key="pr.title" class="flex gap-5">
            <span
              class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-primary/20 bg-white shadow-sm dark:bg-slate-900"
            >
              <component :is="pr.icon" class="h-6 w-6 text-primary" />
            </span>
            <div>
              <h3
                class="text-lg font-bold leading-snug text-slate-900 dark:text-white"
              >
                {{ pr.title }}
              </h3>
              <p
                class="mt-2 leading-relaxed text-slate-500 dark:text-slate-400"
              >
                {{ pr.desc }}
              </p>
              <p
                class="mt-3 text-xs font-semibold uppercase tracking-widest"
                :class="
                  pr.proof === 'Clocc'
                    ? 'text-sky-600 dark:text-sky-400'
                    : 'text-emerald-700 dark:text-emerald-400'
                "
              >
                {{ t("principles.proof", { name: pr.proof }) }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ CIERRE ============ -->
    <section
      class="relative overflow-hidden border-t border-slate-100 py-24 text-center dark:border-slate-900 lg:py-32"
    >
      <div
        class="pointer-events-none absolute left-1/2 top-1/2 h-[26rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]"
      ></div>
      <div class="relative px-6">
        <h2
          class="text-4xl font-black leading-[1.05] tracking-tight text-slate-900 dark:text-white sm:text-5xl xl:text-6xl"
        >
          {{ t("closing.title") }}
          <span
            class="bg-gradient-to-r from-primary to-cyan-500 bg-clip-text text-transparent"
            >{{ t("closing.highlight") }}</span
          >
        </h2>
        <p
          class="mx-auto mt-5 max-w-xl text-lg text-slate-600 dark:text-slate-400"
        >
          {{ t("closing.desc") }}
        </p>
        <div
          class="mt-9 flex flex-wrap items-center justify-center gap-x-8 gap-y-4"
        >
          <Button as-child variant="bare" size="free" class="[&_svg]:size-5">
            <NuxtLinkLocale
              to="/contacto"
              class="group/cta inline-flex h-12 items-center gap-2 rounded-[5px] bg-primary px-8 font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5 hover:shadow-primary/40"
            >
              {{ t("cta") }}
              <ArrowRight
                class="h-5 w-5 transition-transform group-hover/cta:translate-x-1"
              />
            </NuxtLinkLocale>
          </Button>
          <a
            href="https://wa.me/529381065606"
            target="_blank"
            rel="noopener"
            class="inline-flex items-center gap-2 font-medium text-slate-700 transition-colors hover:text-slate-900 dark:text-white/80 dark:hover:text-white"
          >
            {{ t("closing.whatsapp") }}
            <ArrowUpRight class="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* La terminal entra al final; el resto del hero aparece completo (el cambio
   de página ya lo funde, ver main.css) */
.a-up {
  animation: about-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both;
}
@keyframes about-up {
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
</style>

<i18n lang="json">
{
  "es": {
    "seo": {
      "title": "Sobre mí - CODEGAHP | Gustavo Herrera Pérez",
      "description": "Gustavo Herrera Pérez, desarrollador de software y fundador de CODEGAHP en Ciudad del Carmen, Campeche. Creador de Clocc y LIDIA."
    },
    "photoAlt": "Gustavo Herrera Pérez programando en su laptop, con el logo de CODEGAHP al fondo",
    "kicker": "Sobre mí",
    "tagBefore": "Escribo software que aguanta",
    "tagHighlight": "el trabajo real",
    "bio": "Construyo software a la medida —sitios, apps y automatización— para el campo, los municipios y los negocios de México. Mis productos, Clocc y LIDIA, nacieron de problemas reales: controlar la asistencia sin cambiar los relojes y llevar el rancho en el celular aunque no haya señal.",
    "role": "Desarrollador de software",
    "founder": "Fundador de CODEGAHP",
    "cta": "Trabajemos juntos",
    "ctaSecondary": "Ver mis proyectos",
    "products": {
      "eyebrow": "Lo que construyo",
      "title": "Dos mundos, un mismo oficio",
      "see": "Verlo en Proyectos",
      "clocc": {
        "world": "La empresa",
        "desc": "Asistencia y cumplimiento del personal: se conecta a los relojes que la empresa ya tiene y deja la evidencia lista para cada auditoría."
      },
      "lidia": {
        "world": "El campo",
        "desc": "Trazabilidad ganadera en el celular: padrón, sanidad, reproducción y compra-venta con QR, haya o no señal en el rancho."
      }
    },
    "stack": {
      "eyebrow": "Con qué lo construyo",
      "title": "Del navegador a la nube",
      "subtitle": "Todo el recorrido de una aplicación: de la pantalla que usa tu equipo al servidor que la sostiene.",
      "front": "Interfaces web que tu equipo entiende a la primera.",
      "mobileArea": "Móvil",
      "mobile": "Apps para Android y iOS que van en el bolsillo, como LIDIA.",
      "back": "La lógica y las APIs que conectan todo y guardan cada registro.",
      "cloud": "La infraestructura en la nube que mantiene todo en línea."
    },
    "principles": {
      "eyebrow": "Cómo trabajo",
      "title": "Lo que llevo a cada proyecto",
      "proof": "Así funciona {name}",
      "p1": {
        "title": "Que funcione aunque no haya señal",
        "desc": "Se captura sin internet y se sincroniza al reconectar: el trabajo no espera a la cobertura."
      },
      "p2": {
        "title": "Que aproveche lo que ya tienes",
        "desc": "Me conecto a los equipos que ya usas en lugar de pedirte que compres todo nuevo."
      },
      "p3": {
        "title": "Que llegue probado",
        "desc": "Cada versión pasa por más de 200 pruebas automatizadas antes de llegar a tu equipo."
      }
    },
    "closing": {
      "title": "¿Tienes un proyecto?",
      "highlight": "Hablemos.",
      "desc": "Cuéntame qué necesitas resolver y te digo cómo lo construiría.",
      "whatsapp": "Escríbeme por WhatsApp"
    }
  },
  "en": {
    "seo": {
      "title": "About me - CODEGAHP | Gustavo Herrera Pérez",
      "description": "Gustavo Herrera Pérez, software developer and founder of CODEGAHP in Ciudad del Carmen, Campeche. Creator of Clocc and LIDIA."
    },
    "photoAlt": "Gustavo Herrera Pérez coding on his laptop, with the CODEGAHP logo in the background",
    "kicker": "About me",
    "tagBefore": "I write software that holds up to",
    "tagHighlight": "real work",
    "bio": "I build custom software —websites, apps and automation— for the countryside, local governments and businesses across Mexico. My products, Clocc and LIDIA, were born from real problems: tracking attendance without replacing the time clocks, and running the ranch from a phone even without signal.",
    "role": "Software developer",
    "founder": "Founder of CODEGAHP",
    "cta": "Let's work together",
    "ctaSecondary": "See my projects",
    "products": {
      "eyebrow": "What I build",
      "title": "Two worlds, one craft",
      "see": "See it in Projects",
      "clocc": {
        "world": "The company",
        "desc": "Staff attendance and compliance: it connects to the time clocks the company already has and keeps the evidence ready for every audit."
      },
      "lidia": {
        "world": "The field",
        "desc": "Livestock traceability on your phone: registry, health, breeding and QR buy-sell, with or without signal on the ranch."
      }
    },
    "stack": {
      "eyebrow": "What I build it with",
      "title": "From the browser to the cloud",
      "subtitle": "The whole journey of an application: from the screen your team uses to the server that runs it.",
      "front": "Web interfaces your team gets right away.",
      "mobileArea": "Mobile",
      "mobile": "Android and iOS apps that fit in your pocket, like LIDIA.",
      "back": "The logic and APIs that connect everything and store every record.",
      "cloud": "The cloud infrastructure that keeps everything online."
    },
    "principles": {
      "eyebrow": "How I work",
      "title": "What I bring to every project",
      "proof": "That's how {name} works",
      "p1": {
        "title": "It works even without signal",
        "desc": "Data is captured offline and syncs on reconnect: the work doesn't wait for coverage."
      },
      "p2": {
        "title": "It uses what you already have",
        "desc": "I connect to the equipment you already use instead of asking you to buy everything new."
      },
      "p3": {
        "title": "It arrives tested",
        "desc": "Every release goes through more than 200 automated tests before it reaches your team."
      }
    },
    "closing": {
      "title": "Have a project?",
      "highlight": "Let's talk.",
      "desc": "Tell me what you need to solve and I'll tell you how I'd build it.",
      "whatsapp": "Message me on WhatsApp"
    }
  }
}
</i18n>
