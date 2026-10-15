<script setup lang="ts">
// Proyectos: Clocc y LIDIA, "dos mundos" lado a lado. La vista inicial parte
// la pantalla en dos (Clocc | LIDIA); al tocar uno, su mitad se abre hasta
// abarcar todo y la página cambia a ese programa. El programa activo vive en
// la URL (?p=clocc | ?p=lidia) para poder compartirlo y volver con "atrás".
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
} from "lucide-vue-next";
import ProjectInside from "@/components/projects/ProjectInside.vue";

type ProjectKey = "clocc" | "lidia";
const PROJECTS: ProjectKey[] = ["clocc", "lidia"];

const { t } = useI18n({ useScope: "local" });
const route = useRoute();
const router = useRouter();

useSeoMeta({
  title: () => t("seo.title"),
  description: () => t("seo.description"),
  ogTitle: () => t("seo.ogTitle"),
  ogDescription: () => t("seo.ogDescription"),
  ogImage: "https://codegahp.com/img/lidia/pantalla-dashboard.jpg",
});

const projects = computed(() => ({
  clocc: {
    name: "Clocc",
    to: "/servicios/clocc",
    stats: [
      { value: "0", label: t("clocc.stats.equipos") },
      { value: t("clocc.stats.variasValue"), label: t("clocc.stats.empresas") },
      { value: "Home office", label: t("clocc.stats.geocerca") },
      { value: "PDF · Excel", label: t("clocc.stats.reportes") },
    ],
  },
  lidia: {
    name: "LIDIA",
    to: "/servicios/lidia",
    stats: [
      { value: "100%", label: t("lidia.stats.offline") },
      { value: "2,463", label: t("lidia.stats.municipios") },
      { value: "+200", label: t("lidia.stats.pruebas") },
      { value: "iOS + Android", label: t("lidia.stats.app") },
    ],
  },
}));

// Logo de cada programa, sin recuadro: Clocc con su SVG original (trazo en
// degradado) y LIDIA con su toro. Sobre la foto (y en Clocc oscuro) llevan una
// sombra suave para despegarse del fondo.
const logoClass: Record<ProjectKey, string> = {
  clocc: "dark:drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]",
  lidia: "drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)]",
};

// null = vista dividida. Al cargar la página se lee de la URL ya montado (el
// HTML pre-generado siempre es la vista dividida y así no hay desajuste al
// hidratar); al llegar navegando (p. ej. al cambiar de idioma) se lee desde
// el inicio para que se pinte ya abierta, con su altura final y sin animar.
const active = ref<ProjectKey | null>(
  useNuxtApp().isHydrating ? null : fromQuery(),
);
const hovered = ref<ProjectKey | null>(null);

function fromQuery(): ProjectKey | null {
  const p = route.query.p;
  return p === "clocc" || p === "lidia" ? p : null;
}
watch(() => route.query.p, () => (active.value = fromQuery()));

function open(p: ProjectKey | null) {
  if (p === active.value) return;
  const { p: _old, ...rest } = route.query;
  router.push({ query: p ? { ...rest, p } : rest });
}

// Reparto del ancho: mitad y mitad (la que tiene el cursor se asoma un poco
// más); al elegir una, ella se queda con todo y la otra se cierra.
function grow(p: ProjectKey) {
  if (active.value) return active.value === p ? 1 : 0;
  return hovered.value === p ? 1.3 : 1;
}

// Colores según el fondo de cada mitad. LIDIA siempre va sobre la foto
// (texto claro). Clocc sigue el tema: en modo claro, fondo claro con su panel
// claro y texto oscuro, como en la página principal; en oscuro, al revés.
// (Clases escritas completas para que Tailwind las encuentre.)
const tone: Record<ProjectKey, Record<string, string>> = {
  clocc: {
    title: "text-slate-900 dark:text-white dark:[text-shadow:0_2px_20px_rgba(0,0,0,0.5)]",
    hint: "text-slate-500 dark:text-white/70 dark:[text-shadow:0_2px_20px_rgba(0,0,0,0.5)]",
    muted: "text-slate-500 dark:text-white/60",
    kicker: "text-sky-600 dark:text-sky-300 dark:[text-shadow:0_2px_20px_rgba(0,0,0,0.5)]",
    body: "text-slate-600 dark:text-slate-100 dark:[text-shadow:0_2px_20px_rgba(0,0,0,0.5)]",
    label: "text-slate-500 dark:text-slate-300",
    rule: "border-slate-900/10 dark:border-white/20",
    cta: "bg-slate-900 text-white dark:bg-white dark:text-slate-900",
    link: "text-slate-700 hover:text-slate-900 dark:text-white/90 dark:hover:text-white",
    focus: "focus-visible:ring-sky-500/60 dark:focus-visible:ring-white/70",
    chip: "bg-white/80 text-slate-700 ring-slate-900/10 hover:bg-white dark:bg-white/10 dark:text-white dark:ring-white/20 dark:hover:bg-white/20",
    tabs: "bg-white/70 ring-slate-900/10 dark:bg-slate-950/40 dark:ring-white/15",
    tabOn: "bg-slate-900 text-white dark:bg-white dark:text-slate-900",
    tabOff: "text-slate-500 hover:text-slate-900 dark:text-white/75 dark:hover:text-white",
  },
  lidia: {
    title: "text-white [text-shadow:0_2px_20px_rgba(0,0,0,0.5)]",
    hint: "text-white/70 [text-shadow:0_2px_20px_rgba(0,0,0,0.5)]",
    muted: "text-white/60",
    kicker: "text-emerald-300 [text-shadow:0_2px_20px_rgba(0,0,0,0.5)]",
    body: "text-slate-100 [text-shadow:0_2px_20px_rgba(0,0,0,0.5)]",
    label: "text-slate-300",
    rule: "border-white/20",
    cta: "bg-white text-slate-900",
    link: "text-white/90 hover:text-white",
    focus: "focus-visible:ring-white/70",
    chip: "bg-white/10 text-white ring-white/20 hover:bg-white/20",
    tabs: "bg-slate-950/40 ring-white/15",
    tabOn: "bg-white text-slate-900",
    tabOff: "text-white/75 hover:text-white",
  },
};

// Diagonal del titular: --seam es el ancho de la mitad de Clocc, donde la
// diagonal toca el borde de arriba (abajo queda 7vw más a la izquierda, el
// -ml-[7vw] de LIDIA). Se mide en cada cuadro en que cambia, también mientras
// la mitad crece al pasar el cursor, así el corte del texto nunca se desfasa.
const hero = ref<HTMLElement | null>(null);
let seamObserver: ResizeObserver | null = null;

function onKey(e: KeyboardEvent) {
  if (e.key === "Escape" && active.value) open(null);
}

onMounted(() => {
  active.value = fromQuery();
  const clocc = hero.value?.querySelector<HTMLElement>('[data-panel="clocc"]');
  if (hero.value && clocc) {
    seamObserver = new ResizeObserver(() =>
      hero.value?.style.setProperty(
        "--seam",
        `${clocc.getBoundingClientRect().width}px`,
      ),
    );
    seamObserver.observe(clocc);
  }
  window.addEventListener("keydown", onKey);
});
onBeforeUnmount(() => {
  seamObserver?.disconnect();
  window.removeEventListener("keydown", onKey);
});
</script>

<template>
  <div class="bg-slate-950">
    <!-- El hero es contenedor CSS: 100cqw es su ancho exacto, desde el primer
         pintado (sin medir con JS) -->
    <section
      ref="hero"
      class="relative flex flex-col overflow-clip [container-type:inline-size] lg:min-h-[max(640px,calc(100svh-5rem))] lg:flex-row"
    >
      <!-- Titular de la vista dividida (móvil: va encima de las mitades) -->
      <Transition name="duo-fade">
        <div
          v-show="!active"
          class="relative z-20 bg-slate-50 px-6 pb-8 pt-12 text-center dark:bg-slate-950 lg:hidden"
        >
          <h1
            class="text-3xl font-black leading-[1.05] tracking-tight text-slate-900 dark:text-white sm:text-5xl"
          >
            {{ t("duo.title") }}
          </h1>
          <p class="mt-4 text-sm text-slate-500 dark:text-white/70 sm:text-base">
            {{ t("duo.hint") }}
          </p>
        </div>
      </Transition>

      <!-- Titular (escritorio): una copia por mitad, del tamaño del hero, cada
           una recortada por sí misma con la diagonal (.seam-*), para que
           cambie de color justo en el corte: oscuro sobre Clocc claro, blanco
           sobre la foto. El recorte va en la propia copia y no en su mitad
           porque Safari no aplica el clip-path de un contenedor a los hijos
           que anima, y la copia blanca se salía de la diagonal -->
      <Transition v-for="p in PROJECTS" :key="`title-${p}`" name="duo-fade">
        <div
          v-if="!active"
          class="pointer-events-none absolute inset-0 z-20 hidden px-6 pt-16 text-center lg:block"
          :class="p === 'clocc' ? 'seam-clocc' : 'seam-lidia'"
          :aria-hidden="p === 'lidia' ? 'true' : undefined"
        >
          <component
            :is="p === 'clocc' ? 'h1' : 'p'"
            class="mx-auto max-w-4xl text-5xl font-black leading-[1.05] tracking-tight xl:text-6xl"
            :class="tone[p].title"
          >
            {{ t("duo.title") }}
          </component>
          <p class="mt-4 text-base" :class="tone[p].hint">
            {{ t("duo.hint") }}
          </p>
        </div>
      </Transition>

      <!-- Con un programa abierto: volver a los dos o cambiar al otro -->
      <Transition name="duo-fade">
        <div
          v-if="active"
          class="absolute inset-x-0 top-0 z-30 flex flex-wrap items-center justify-between gap-3 px-6 pt-6 sm:px-10 lg:px-20 lg:pt-10"
        >
          <button
            type="button"
            class="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium ring-1 backdrop-blur transition-colors"
            :class="tone[active].chip"
            @click="open(null)"
          >
            <ArrowLeft class="h-4 w-4" />
            {{ t("duo.back") }}
          </button>
          <div
            class="inline-flex rounded-full p-1 ring-1 backdrop-blur"
            :class="tone[active].tabs"
          >
            <button
              v-for="p in PROJECTS"
              :key="p"
              type="button"
              :aria-pressed="active === p"
              class="rounded-full px-4 py-1.5 text-sm font-semibold transition-colors"
              :class="active === p ? tone[active].tabOn : tone[active].tabOff"
              @click="open(p)"
            >
              {{ projects[p].name }}
            </button>
          </div>
        </div>
      </Transition>

      <!-- Las dos mitades. `isolate`: lo de cada mitad se queda en su capa y
           LIDIA, que va encima, la tapa limpia en la diagonal -->
      <div
        v-for="p in PROJECTS"
        :key="p"
        :data-panel="p"
        class="group relative isolate flex min-h-[48svh] min-w-0 flex-col justify-end overflow-clip transition-[flex-grow,margin,clip-path] duration-700 ease-[cubic-bezier(.7,0,.2,1)] motion-reduce:transition-none lg:min-h-0 lg:basis-0"
        :class="[
          p === 'clocc' ? 'bg-slate-50 dark:bg-slate-950' : 'items-end',
          // Corte en diagonal: LIDIA se monta sobre Clocc y recorta su borde
          // (inclinado en escritorio, en pendiente al apilarse en móvil). Al
          // abrir un programa el corte se endereza.
          p === 'lidia' &&
            (active
              ? '[clip-path:polygon(0_0,100%_0,100%_100%,0_100%)]'
              : 'max-lg:-mt-[10vw] max-lg:[clip-path:polygon(0_10vw,100%_0,100%_100%,0_100%)] lg:-ml-[7vw] lg:[clip-path:polygon(7vw_0,100%_0,100%_100%,0_100%)]'),
          active && active !== p && 'max-lg:hidden',
          active === p && 'max-lg:min-h-[calc(100svh-5rem)]',
        ]"
        :style="{ flexGrow: grow(p) }"
        @pointerenter="hovered = p"
        @pointerleave="hovered = null"
      >
        <!-- Imagen: LIDIA, el campo -->
        <template v-if="p === 'lidia'">
          <picture>
            <source srcset="/img/vaca2.webp" type="image/webp" />
            <img
              src="/img/vaca2.jpg"
              :alt="t('lidia.imgAlt')"
              class="absolute inset-0 h-full w-full object-cover object-[30%_center] transition-transform duration-[1200ms] group-hover:scale-[1.03] motion-reduce:transition-none"
            />
          </picture>
          <div class="absolute inset-0 bg-slate-950/45"></div>
        </template>

        <!-- Imagen: Clocc, la empresa (su panel real, claro u oscuro según el tema) -->
        <template v-else>
          <div
            class="pointer-events-none absolute inset-0 bg-[radial-gradient(rgb(15_23_42/0.07)_1px,transparent_1px)] [background-size:22px_22px] dark:bg-[radial-gradient(rgb(255_255_255/0.06)_1px,transparent_1px)]"
          ></div>
          <div
            class="pointer-events-none absolute -right-20 top-1/4 h-[28rem] w-[36rem] rounded-full bg-gradient-to-br from-sky-500/20 to-green-500/20 blur-[120px] dark:from-sky-500/25 dark:to-green-500/25"
          ></div>
          <figure
            class="absolute overflow-hidden rounded-xl bg-white shadow-2xl shadow-slate-900/20 ring-1 ring-slate-900/10 transition-[top,right,width,transform] duration-700 ease-[cubic-bezier(.7,0,.2,1)] [transform:perspective(2000px)_rotateY(-12deg)_rotateX(4deg)] group-hover:[transform:perspective(2000px)_rotateY(-8deg)_rotateX(3deg)] motion-reduce:transition-none dark:bg-slate-900 dark:shadow-black/60 dark:ring-white/10"
            :class="
              active === 'clocc'
                ? 'right-[-35%] top-[5.5rem] w-[105%] lg:right-[-4%] lg:top-[16%] lg:w-[52%]'
                : 'right-[-30%] top-[14%] w-[95%] [mask-image:linear-gradient(to_bottom,black_45%,transparent_92%)] lg:right-[-14%] lg:top-[34%] lg:w-[70%]'
            "
          >
            <div
              class="flex h-7 items-center gap-1.5 border-b border-slate-200/80 bg-slate-50 px-3 dark:border-white/5 dark:bg-slate-800/80"
              aria-hidden="true"
            >
              <span class="h-2.5 w-2.5 rounded-full bg-[#ff5f57]"></span>
              <span class="h-2.5 w-2.5 rounded-full bg-[#febc2e]"></span>
              <span class="h-2.5 w-2.5 rounded-full bg-[#28c840]"></span>
            </div>
            <img
              src="/img/clocc/panel-claro.webp"
              :alt="t('clocc.imgAlt')"
              width="1600"
              height="751"
              decoding="async"
              class="block w-full dark:hidden"
            />
            <img
              src="/img/clocc/panel-oscuro.webp"
              :alt="t('clocc.imgAlt')"
              width="1600"
              height="751"
              decoding="async"
              class="hidden w-full dark:block"
            />
          </figure>
          <!-- Velo sólido del color del fondo: más denso con las dos mitades -->
          <div
            class="absolute inset-0 bg-slate-50 transition-opacity duration-700 dark:bg-slate-950"
            :class="
              active === 'clocc'
                ? 'opacity-0 dark:opacity-20'
                : 'opacity-20 dark:opacity-50'
            "
          ></div>
        </template>

        <!-- Vista dividida: la mitad entera es el botón -->
        <Transition name="duo-fade">
          <button
            v-if="!active"
            type="button"
            class="absolute inset-0 z-10 flex flex-col items-start justify-end px-6 pb-10 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset sm:px-10 lg:px-14 lg:pb-16 xl:px-20"
            :class="tone[p].focus"
            :aria-label="t('duo.open', { name: projects[p].name })"
            @click="open(p)"
          >
            <span
              class="mb-4 text-xs font-semibold uppercase tracking-[0.2em]"
              :class="tone[p].muted"
              >{{ t(`${p}.world`) }}</span
            >
            <span class="mb-3 flex items-center gap-3 text-4xl sm:text-5xl">
              <span
                class="flex h-10 w-10 shrink-0 items-center justify-center sm:h-12 sm:w-12"
                :class="logoClass[p]"
              >
                <CloccLogo v-if="p === 'clocc'" class="h-full w-full" />
                <LidiaLogo v-else class="h-full w-full" />
              </span>
              <template v-if="p === 'clocc'">
                <CloccWordmark class="h-[0.74em] w-auto dark:hidden" />
                <CloccWordmark
                  mono
                  class="hidden h-[0.74em] w-auto text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)] dark:block"
                />
              </template>
              <span
                v-else
                class="font-black leading-none tracking-tight"
                :class="tone.lidia.title"
                >LIDIA</span
              >
            </span>
            <span
              class="mb-3 text-xs font-semibold uppercase tracking-widest sm:text-sm"
              :class="tone[p].kicker"
              >{{ t(`${p}.kicker`) }}</span
            >
            <span
              class="max-w-md text-base leading-relaxed sm:text-lg"
              :class="tone[p].body"
              >{{ t(`${p}.teaser`) }}</span
            >
            <span
              class="mt-6 inline-flex items-center gap-2 font-semibold"
              :class="tone[p].link"
            >
              {{ t("duo.explore") }}
              <ArrowRight
                class="h-5 w-5 transition-transform group-hover:translate-x-1"
              />
            </span>
          </button>
        </Transition>

        <!-- Programa abierto: a todo lo ancho del hero desde el primer cuadro,
             así no se reacomoda mientras su mitad se abre -->
        <Transition name="duo-rise">
          <div
            v-if="active === p"
            class="relative z-10 w-[100cqw] shrink-0 px-6 pb-14 sm:px-10 lg:px-20 lg:pb-20"
            :class="p === 'clocc' ? 'pt-[21rem] sm:pt-[26rem] lg:pt-44' : 'pt-32 lg:pt-44'"
          >
            <div class="mb-4 flex items-center gap-4">
              <span
                class="flex h-12 w-12 shrink-0 items-center justify-center sm:h-[4.5rem] sm:w-[4.5rem]"
                :class="logoClass[p]"
              >
                <CloccLogo v-if="p === 'clocc'" class="h-full w-full" />
                <LidiaLogo v-else class="h-full w-full" />
              </span>
              <h2
                class="text-5xl font-black leading-none tracking-tight sm:text-7xl"
                :class="tone[p].title"
              >
                <template v-if="p === 'clocc'">
                  <span class="sr-only">Clocc</span>
                  <CloccWordmark
                    class="h-[0.74em] w-auto dark:hidden"
                    aria-hidden="true"
                  />
                  <CloccWordmark
                    mono
                    class="hidden h-[0.74em] w-auto drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)] dark:block"
                    aria-hidden="true"
                  />
                </template>
                <template v-else>LIDIA</template>
              </h2>
            </div>

            <p
              class="mb-5 text-sm font-semibold uppercase tracking-widest"
              :class="tone[p].kicker"
            >
              {{ t(`${p}.kicker`) }}
            </p>

            <p
              class="mb-9 max-w-3xl text-lg leading-relaxed sm:text-2xl"
              :class="[tone[p].body, p === 'clocc' && 'lg:max-w-[46%]']"
            >
              {{ t(`${p}.heroDesc`) }}
            </p>

            <!-- Datos, a lo ancho -->
            <div
              class="mb-9 grid max-w-4xl grid-cols-2 gap-6 border-t pt-6 sm:gap-10"
              :class="[
                tone[p].rule,
                p === 'clocc'
                  ? 'max-w-2xl lg:max-w-[46%] lg:gap-y-6'
                  : 'sm:grid-cols-4',
              ]"
            >
              <div v-for="st in projects[p].stats" :key="st.label">
                <div
                  class="text-2xl font-extrabold sm:text-4xl"
                  :class="[tone[p].title, p === 'clocc' && 'lg:text-3xl']"
                >
                  {{ st.value }}
                </div>
                <p
                  class="mt-1 text-xs leading-snug sm:text-sm"
                  :class="tone[p].label"
                >
                  {{ st.label }}
                </p>
              </div>
            </div>

            <div
              class="flex flex-col gap-x-8 gap-y-4 sm:flex-row sm:items-center"
            >
              <Button as-child variant="bare" size="free" class="[&_svg]:size-5">
                <NuxtLinkLocale
                  :to="projects[p].to"
                  class="group/cta inline-flex h-12 items-center justify-center gap-2 self-start rounded-[5px] px-8 font-bold shadow-lg transition-transform hover:-translate-y-0.5"
                  :class="tone[p].cta"
                >
                  {{ t("ctaPrimary", { name: projects[p].name }) }}
                  <ArrowRight
                    class="h-5 w-5 transition-transform group-hover/cta:translate-x-1"
                  />
                </NuxtLinkLocale>
              </Button>
              <NuxtLinkLocale
                to="/contacto"
                class="inline-flex items-center gap-2 font-medium transition-colors"
                :class="tone[p].link"
              >
                {{ t("ctaSecondary") }}
                <ArrowUpRight class="h-4 w-4" />
              </NuxtLinkLocale>
            </div>
          </div>
        </Transition>
      </div>
    </section>

    <!-- Lo que hace por dentro el programa abierto -->
    <Transition name="duo-fade" mode="out-in">
      <ProjectInside v-if="active" :key="active" :project="active" />
    </Transition>
  </div>
</template>

<style scoped>
/* Recorte del titular en la diagonal. Antes de medir (HTML estático) se usa
   la posición de la vista mitad y mitad: 50% + 3.5vw */
.seam-clocc {
  clip-path: polygon(
    0 0,
    var(--seam, calc(50% + 3.5vw)) 0,
    calc(var(--seam, calc(50% + 3.5vw)) - 7vw) 100%,
    0 100%
  );
}
.seam-lidia {
  clip-path: polygon(
    var(--seam, calc(50% + 3.5vw)) 0,
    100% 0,
    100% 100%,
    calc(var(--seam, calc(50% + 3.5vw)) - 7vw) 100%
  );
}

.duo-fade-enter-active,
.duo-fade-leave-active {
  transition: opacity 0.25s ease;
}
.duo-fade-enter-from,
.duo-fade-leave-to {
  opacity: 0;
}

/* El contenido del programa entra cuando su mitad ya va abriendo */
.duo-rise-enter-active {
  transition:
    opacity 0.5s ease 0.35s,
    transform 0.6s cubic-bezier(0.2, 0.7, 0.2, 1) 0.35s;
}
.duo-rise-leave-active {
  transition: opacity 0.15s ease;
}
.duo-rise-enter-from {
  opacity: 0;
  transform: translateY(24px);
}
.duo-rise-leave-to {
  opacity: 0;
}

@media (prefers-reduced-motion: reduce) {
  .duo-rise-enter-active {
    transition: opacity 0.2s ease;
  }
  .duo-rise-enter-from {
    transform: none;
  }
}
</style>

<i18n lang="json">
{
  "es": {
    "seo": {
      "title": "Proyectos - CODEGAHP | Clocc y LIDIA, nuestros productos",
      "description": "Dos mundos totalmente diferentes en un solo lugar: Clocc, asistencia y cumplimiento del personal con tus relojes actuales, y LIDIA, trazabilidad ganadera que funciona sin señal.",
      "ogTitle": "Proyectos | CODEGAHP — Clocc y LIDIA",
      "ogDescription": "Clocc para la empresa y LIDIA para el campo: dos productos hechos por CODEGAHP."
    },
    "duo": {
      "title": "Dos mundos totalmente diferentes, en un solo lugar",
      "hint": "Elige uno para conocerlo.",
      "explore": "Explorar",
      "open": "Abrir {name}",
      "back": "Ver los dos"
    },
    "ctaPrimary": "Conoce {name} a fondo",
    "ctaSecondary": "¿Tienes un proyecto? Hablemos",
    "clocc": {
      "world": "La empresa",
      "imgAlt": "Panel de asistencia de Clocc: horas trabajadas, retardos, faltas y tiempo extra",
      "kicker": "Asistencia y cumplimiento del personal",
      "teaser": "La asistencia de tu personal, con los relojes que ya tienes.",
      "heroDesc": "Conecta los relojes que ya tienes, registra la asistencia en gabinete o home office y llega a cada auditoría con la evidencia lista. Con asistente en Telegram.",
      "stats": {
        "equipos": "equipos nuevos: usa tus relojes de siempre",
        "variasValue": "Multiempresa",
        "empresas": "varias razones sociales, con datos aislados",
        "geocerca": "con geocerca, además del registro en gabinete",
        "reportes": "reportes que el bot te manda a Telegram"
      }
    },
    "lidia": {
      "world": "El campo",
      "imgAlt": "Ganado en el potrero con arete de identificación SINIIGA",
      "kicker": "Trazabilidad ganadera offline-first",
      "teaser": "El rancho completo en el celular, haya o no señal.",
      "heroDesc": "La app que administra el rancho desde el celular, haya o no señal: padrón, sanidad, reproducción, movilizaciones REEMO, compra-venta con QR y alertas de robo.",
      "stats": {
        "offline": "de la captura funciona sin internet",
        "municipios": "municipios en las alertas de robo",
        "pruebas": "pruebas automatizadas por versión",
        "app": "una sola app"
      }
    }
  },
  "en": {
    "seo": {
      "title": "Projects - CODEGAHP | Clocc and LIDIA, our products",
      "description": "Two completely different worlds in one place: Clocc, staff attendance and compliance with your current time clocks, and LIDIA, livestock traceability that works without signal.",
      "ogTitle": "Projects | CODEGAHP — Clocc and LIDIA",
      "ogDescription": "Clocc for the company and LIDIA for the field: two products built by CODEGAHP."
    },
    "duo": {
      "title": "Two completely different worlds, in one place",
      "hint": "Pick one to explore it.",
      "explore": "Explore",
      "open": "Open {name}",
      "back": "See both"
    },
    "ctaPrimary": "Get to know {name} in depth",
    "ctaSecondary": "Have a project? Let's talk",
    "clocc": {
      "world": "The company",
      "imgAlt": "Clocc attendance dashboard: hours worked, late arrivals, absences and overtime",
      "kicker": "Staff attendance and compliance",
      "teaser": "Your staff's attendance, with the time clocks you already have.",
      "heroDesc": "Connect the time clocks you already have, record attendance on-site or from home and get to every audit with the evidence ready. With a Telegram assistant.",
      "stats": {
        "equipos": "new devices: use the clocks you already have",
        "variasValue": "Multi-company",
        "empresas": "several legal entities, with isolated data",
        "geocerca": "with a geofence, besides on-site records",
        "reportes": "reports the bot sends you on Telegram"
      }
    },
    "lidia": {
      "world": "The field",
      "imgAlt": "Cattle in the pasture with a SINIIGA identification ear tag",
      "kicker": "Offline-first livestock traceability",
      "teaser": "The whole ranch on your phone, with or without signal.",
      "heroDesc": "The app that runs the ranch from your phone, with or without signal: registry, health, breeding, REEMO movements, QR buy-sell and theft alerts.",
      "stats": {
        "offline": "of data capture works without internet",
        "municipios": "municipalities covered by theft alerts",
        "pruebas": "automated tests per release",
        "app": "a single app"
      }
    }
  }
}
</i18n>
