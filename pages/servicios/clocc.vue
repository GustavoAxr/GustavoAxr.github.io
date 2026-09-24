<script setup lang="ts">
import {
  ShieldCheck,
  Layers,
  MonitorSmartphone,
  Clock,
  ArrowRight,
  Check,
  Fingerprint,
  Server,
  Cloud,
  Building2,
  MapPin,
  CalendarCheck,
  UserCog,
  Wifi,
  DoorClosed,
} from "lucide-vue-next";
import CloccShowcase from "@/components/landing/CloccShowcase.vue";

const { t } = useI18n({ useScope: "local" });

useSeoMeta({
  title: () => t("seo.title"),
  description: () => t("seo.description"),
  ogTitle: () => t("seo.ogTitle"),
  ogDescription: () => t("seo.ogDescription"),
});

// Cómo encaja con la infraestructura que ya tienes (relojes → agente → nube)
const steps = computed(() => [
  { icon: Fingerprint, title: t("how.s1.title"), desc: t("how.s1.desc") },
  { icon: Server, title: t("how.s2.title"), desc: t("how.s2.desc") },
  { icon: Cloud, title: t("how.s3.title"), desc: t("how.s3.desc") },
]);

// Capacidades reales del producto
const features = computed(() => [
  { icon: Clock, title: t("feat.f1.title"), desc: t("feat.f1.desc") },
  { icon: Building2, title: t("feat.f2.title"), desc: t("feat.f2.desc") },
  { icon: MapPin, title: t("feat.f3.title"), desc: t("feat.f3.desc") },
  { icon: CalendarCheck, title: t("feat.f4.title"), desc: t("feat.f4.desc") },
  { icon: UserCog, title: t("feat.f5.title"), desc: t("feat.f5.desc") },
  { icon: Wifi, title: t("feat.f6.title"), desc: t("feat.f6.desc") },
]);

// Puntos de cumplimiento / auditoría
const compliance = computed(() => [
  { icon: DoorClosed, text: t("comply.c1") },
  { icon: ShieldCheck, text: t("comply.c2") },
  { icon: Check, text: t("comply.c3") },
]);

// Lo esencial del producto, bajo los botones del hero
const highlights = computed(() => [
  t("hero.points.p1"),
  t("hero.points.p2"),
  t("hero.points.p3"),
]);
</script>

<template>
  <div class="min-h-screen bg-white dark:bg-slate-950">
    <!-- ============ HERO ============ -->
    <section class="relative overflow-hidden">
      <!-- retícula de puntos, desvanecida hacia los bordes -->
      <div
        class="pointer-events-none absolute inset-0 bg-[radial-gradient(rgb(15_23_42/0.07)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,black,transparent)] dark:bg-[radial-gradient(rgb(255_255_255/0.06)_1px,transparent_1px)]"
      ></div>
      <!-- resplandor cyan→verde (identidad Clocc) -->
      <div
        class="pointer-events-none absolute -top-32 right-[-10%] h-[560px] w-[680px] rounded-full bg-gradient-to-br from-sky-500/20 to-green-500/20 blur-[140px]"
      ></div>

      <div
        class="container relative z-10 mx-auto grid max-w-7xl items-center gap-14 px-4 pb-20 pt-24 lg:grid-cols-2 lg:gap-10 lg:pt-28 xl:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:[@media(max-height:800px)]:pt-24"
      >
        <!-- Texto -->
        <div>
          <!-- Logo animado (reloj ⇄ CLOCC) en lugar del nombre; la animación ya
               viene anclada a la izquierda, y el margen negativo deja que se
               monte un poco sobre el titular (z-10: queda por encima del texto) -->
          <div
            class="relative z-10 -mb-8 w-56 sm:-mb-10 sm:w-72 lg:[@media(max-height:800px)]:w-64"
          >
            <CloccMotion />
          </div>

          <h1
            class="mt-6 text-3xl font-extrabold leading-[1.1] tracking-tight text-slate-900 dark:text-white sm:text-4xl xl:text-[2.6rem]"
          >
            <span class="sr-only">Clocc: </span>
            {{ t("hero.tagBefore") }}
            <span
              class="bg-gradient-to-r from-sky-500 to-green-500 bg-clip-text text-transparent"
              >{{ t("hero.tagHighlight") }}</span
            >.
          </h1>
          <p
            class="mt-5 max-w-lg text-lg leading-relaxed text-slate-600 dark:text-slate-300"
          >
            {{ t("hero.subtitle") }}
          </p>

          <div class="mt-8 flex flex-wrap items-center gap-3">
            <NuxtLinkLocale
              to="/contacto"
              class="inline-flex w-full items-center justify-center gap-2 rounded-[5px] bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:shadow-primary/40 hover:-translate-y-0.5 sm:w-auto"
            >
              {{ t("hero.ctaPrimary") }}
              <ArrowRight class="h-4 w-4" />
            </NuxtLinkLocale>
            <a
              href="https://wa.me/529381065606"
              target="_blank"
              rel="noopener"
              class="inline-flex w-full items-center justify-center gap-2 rounded-[5px] border border-slate-300 px-7 py-3.5 text-sm font-semibold text-slate-700 transition-colors hover:border-primary hover:text-primary dark:border-slate-700 dark:text-slate-200 sm:w-auto"
            >
              {{ t("hero.ctaSecondary") }}
            </a>
          </div>

          <!-- Lo esencial, en una línea -->
          <ul
            class="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-600 dark:text-slate-400"
          >
            <li
              v-for="h in highlights"
              :key="h"
              class="inline-flex items-center gap-2"
            >
              <Check class="h-4 w-4 text-primary" /> {{ h }}
            </li>
          </ul>
        </div>

        <!-- Panel real de Clocc, dinámico (inclinación con el cursor, chips vivos) -->
        <CloccShowcase />
      </div>
    </section>

    <!-- ============ CÓMO ENCAJA (relojes → agente → nube) ============ -->
    <section class="border-t border-slate-100 dark:border-slate-900">
      <div class="container mx-auto max-w-7xl px-4 py-16 lg:py-20">
        <div class="mx-auto mb-14 max-w-2xl text-center">
          <span
            class="text-xs font-semibold uppercase tracking-[0.2em] text-primary"
          >
            {{ t("how.eyebrow") }}
          </span>
          <h2
            class="mt-3 text-3xl font-bold text-slate-900 dark:text-white md:text-4xl"
          >
            {{ t("how.title") }}
          </h2>
          <p class="mt-3 text-slate-500 dark:text-slate-400">
            {{ t("how.subtitle") }}
          </p>
        </div>

        <div class="relative grid gap-8 md:grid-cols-3">
          <!-- línea guía entre pasos (solo desktop) -->
          <div
            class="pointer-events-none absolute left-[16%] right-[16%] top-8 hidden border-t-2 border-dashed border-primary/25 md:block"
            aria-hidden="true"
          ></div>

          <div
            v-for="(s, i) in steps"
            :key="s.title"
            class="relative flex flex-col items-center text-center"
          >
            <div
              class="relative z-10 grid h-16 w-16 place-items-center rounded-2xl border border-primary/20 bg-white shadow-sm dark:bg-slate-900"
            >
              <component :is="s.icon" class="h-7 w-7 text-primary" />
              <span
                class="absolute -right-2 -top-2 grid h-6 w-6 place-items-center rounded-full bg-gradient-to-br from-sky-500 to-green-500 text-xs font-bold text-white"
              >
                {{ i + 1 }}
              </span>
            </div>
            <h3 class="mt-5 text-lg font-bold text-slate-900 dark:text-white">
              {{ s.title }}
            </h3>
            <p
              class="mt-2 max-w-xs text-sm leading-relaxed text-slate-500 dark:text-slate-400"
            >
              {{ s.desc }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ CAPACIDADES ============ -->
    <section class="border-t border-slate-100 dark:border-slate-900">
      <div class="container mx-auto max-w-7xl px-4 py-16 lg:py-20">
        <div class="mx-auto mb-14 max-w-2xl text-center">
          <span
            class="text-xs font-semibold uppercase tracking-[0.2em] text-primary"
          >
            {{ t("feat.eyebrow") }}
          </span>
          <h2
            class="mt-3 text-3xl font-bold text-slate-900 dark:text-white md:text-4xl"
          >
            {{ t("feat.title") }}
          </h2>
        </div>

        <!-- Mismo lenguaje que "Cómo encaja": sin tarjetas, ícono en mosaico -->
        <div class="grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="f in features"
            :key="f.title"
            class="group flex flex-col items-center text-center"
          >
            <div
              class="grid h-16 w-16 place-items-center rounded-2xl border border-primary/20 bg-white shadow-sm transition-transform duration-300 group-hover:-translate-y-1 dark:bg-slate-900"
            >
              <component :is="f.icon" class="h-7 w-7 text-primary" />
            </div>
            <h3 class="mt-5 text-lg font-bold text-slate-900 dark:text-white">
              {{ f.title }}
            </h3>
            <p
              class="mt-2 max-w-xs text-sm leading-relaxed text-slate-500 dark:text-slate-400"
            >
              {{ f.desc }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ CUMPLIMIENTO / AUDITORÍAS ============ -->
    <section class="border-t border-slate-100 dark:border-slate-900">
      <div class="container mx-auto max-w-7xl px-4 py-16 lg:py-20">
        <div class="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span
              class="text-xs font-semibold uppercase tracking-[0.2em] text-primary"
            >
              {{ t("comply.eyebrow") }}
            </span>
            <h2
              class="mt-3 text-3xl font-bold text-slate-900 dark:text-white md:text-4xl"
            >
              {{ t("comply.title") }}
            </h2>
            <p
              class="mt-4 max-w-lg text-base leading-relaxed text-slate-600 dark:text-slate-300"
            >
              {{ t("comply.subtitle") }}
            </p>
          </div>

          <!-- Sin tarjetas: mosaicos unidos por una línea guía vertical -->
          <div class="relative">
            <div
              class="pointer-events-none absolute bottom-8 left-[31px] top-8 border-l-2 border-dashed border-primary/25"
              aria-hidden="true"
            ></div>
            <ul class="relative space-y-8">
              <li
                v-for="c in compliance"
                :key="c.text"
                class="flex items-center gap-5"
              >
                <div
                  class="grid h-16 w-16 shrink-0 place-items-center rounded-2xl border border-primary/20 bg-white shadow-sm dark:bg-slate-900"
                >
                  <component :is="c.icon" class="h-7 w-7 text-primary" />
                </div>
                <p
                  class="text-base leading-relaxed text-slate-700 dark:text-slate-300"
                >
                  {{ c.text }}
                </p>
              </li>
            </ul>
          </div>
        </div>

        <!-- Línea de refuerzo -->
        <div
          class="mt-12 flex flex-col items-center justify-center gap-3 text-sm text-slate-500 dark:text-slate-400 sm:flex-row"
        >
          <span class="inline-flex items-center gap-2">
            <MonitorSmartphone class="h-4 w-4 text-primary" />
            {{ t("comply.tagRemote") }}
          </span>
          <span class="hidden text-slate-300 dark:text-slate-700 sm:inline">·</span>
          <span class="inline-flex items-center gap-2">
            <Layers class="h-4 w-4 text-primary" /> {{ t("comply.tagMulti") }}
          </span>
        </div>
      </div>
    </section>

    <!-- ============ CTA ============ -->
    <section class="container mx-auto max-w-7xl px-4 pb-20">
      <div
        class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-sky-600 to-green-600 px-8 py-12 text-center text-white lg:px-16 lg:py-16"
      >
        <h2 class="text-2xl font-bold sm:text-3xl">
          {{ t("cta.title") }}
        </h2>
        <p class="mx-auto mt-3 max-w-xl text-white/90">
          {{ t("cta.desc") }}
        </p>
        <NuxtLinkLocale
          to="/contacto"
          class="mt-7 inline-flex items-center gap-2 rounded-[5px] bg-white px-7 py-3.5 text-sm font-semibold text-slate-900 shadow-lg transition-transform hover:-translate-y-0.5"
        >
          {{ t("cta.button") }}
          <ArrowRight class="h-4 w-4" />
        </NuxtLinkLocale>
      </div>
    </section>
  </div>
</template>

<i18n lang="json">
{
  "es": {
    "seo": {
      "title": "Clocc - CODEGAHP | Control de asistencia y cumplimiento del personal",
      "description": "Clocc conecta tus relojes actuales, registra la asistencia en gabinete o home office y llega a cada auditoría con la evidencia lista. Sin cambiar tu infraestructura.",
      "ogTitle": "Clocc — Asistencia y cumplimiento del personal | CODEGAHP",
      "ogDescription": "Registro de asistencia con tus relojes actuales, home office con geocerca, vacaciones y permisos con autorización de RRHH, y reportes listos para auditar."
    },
    "hero": {
      "tagBefore": "Asistencia y cumplimiento del personal,",
      "tagHighlight": "sin cambiar tu infraestructura",
      "subtitle": "Conecta los relojes que ya tienes, registra la asistencia en gabinete o home office y llega a cada auditoría con la evidencia lista y ordenada.",
      "ctaPrimary": "Solicitar una demo",
      "ctaSecondary": "Hablar con el equipo",
      "points": {
        "p1": "Usa tus relojes actuales",
        "p2": "Gabinete o home office",
        "p3": "Listo para auditorías"
      }
    },
    "how": {
      "eyebrow": "Se conecta a lo que ya tienes",
      "title": "Sin reemplazar tus equipos",
      "subtitle": "Clocc se apoya en tus relojes actuales y en tu propia red; tú solo supervisas.",
      "s1": {
        "title": "Tus relojes de siempre",
        "desc": "Aprovecha los relojes y checadores que ya tienes en planta. No compras equipo nuevo ni migras nada."
      },
      "s2": {
        "title": "Un agente en tu red",
        "desc": "Un agente ligero corre en tu mini PC o servidor local y recoge cada registro dentro de tu propia red."
      },
      "s3": {
        "title": "Consola en la nube",
        "desc": "Supervisas asistencia, expedientes y reportes desde cualquier lugar, con los datos de cada empresa aislados."
      }
    },
    "feat": {
      "eyebrow": "Todo en una sola cuenta",
      "title": "Lo que Clocc controla por ti",
      "f1": {
        "title": "Registro de asistencia",
        "desc": "Entradas y salidas desde tus relojes, con el registro formal de cada persona y su historial."
      },
      "f2": {
        "title": "Varias razones sociales",
        "desc": "Cada empresa con sus datos aislados. Un registro pertenece a quien emplea a la persona, no a quien compró el reloj."
      },
      "f3": {
        "title": "Home office con geocerca",
        "desc": "Registro remoto para quien trabaja desde casa, delimitado por una geocerca que tú defines en el mapa."
      },
      "f4": {
        "title": "Vacaciones y permisos",
        "desc": "Solicitud, autorización de RRHH con firma y comprobante en PDF que llega por correo a quien corresponde."
      },
      "f5": {
        "title": "Expediente del empleado",
        "desc": "Datos, adscripciones y la forma en que registra cada quien, ordenados en un solo lugar."
      },
      "f6": {
        "title": "Relojes y agentes al día",
        "desc": "El estado en línea o desconectado de cada reloj y agente, siempre visible para actuar a tiempo."
      }
    },
    "comply": {
      "eyebrow": "Pensado para cumplir",
      "title": "Llega tranquilo a cada auditoría",
      "subtitle": "El registro remoto no abre puertas fuera de la geocerca, y cada movimiento queda como evidencia lista para revisar.",
      "c1": "El acceso a puertas solo se abre dentro de la geocerca: el registro de home office no la desbloquea.",
      "c2": "Registros formales por persona y por empresa, con reportes y correos automáticos.",
      "c3": "Comprobantes y evidencia ordenada, listos para presentar en una auditoría.",
      "tagRemote": "Gabinete o home office",
      "tagMulti": "Datos aislados por empresa"
    },
    "cta": {
      "title": "Ordena la asistencia de tu equipo con Clocc",
      "desc": "Cuéntanos cómo trabaja tu equipo y te mostramos cómo Clocc te ayuda a cumplir sin complicarte.",
      "button": "Solicitar una demo"
    }
  },
  "en": {
    "seo": {
      "title": "Clocc - CODEGAHP | Staff attendance and compliance control",
      "description": "Clocc connects to your current time clocks, records attendance on-site or from home, and gets you to every audit with the evidence ready. Without changing your infrastructure.",
      "ogTitle": "Clocc — Staff attendance and compliance | CODEGAHP",
      "ogDescription": "Attendance tracking with your current time clocks, home office with geofencing, vacations and permits with HR approval, and audit-ready reports."
    },
    "hero": {
      "tagBefore": "Staff attendance and compliance,",
      "tagHighlight": "without changing your infrastructure",
      "subtitle": "Connect the time clocks you already have, record attendance on-site or from home, and reach every audit with the evidence ready and organized.",
      "ctaPrimary": "Request a demo",
      "ctaSecondary": "Talk to the team",
      "points": {
        "p1": "Works with your current clocks",
        "p2": "On-site or home office",
        "p3": "Audit-ready"
      }
    },
    "how": {
      "eyebrow": "It connects to what you already have",
      "title": "Without replacing your equipment",
      "subtitle": "Clocc relies on your current time clocks and your own network; you just supervise.",
      "s1": {
        "title": "Your existing time clocks",
        "desc": "Use the time clocks and readers you already have on-site. No new hardware, no migration."
      },
      "s2": {
        "title": "An agent on your network",
        "desc": "A lightweight agent runs on your mini PC or local server and collects every record inside your own network."
      },
      "s3": {
        "title": "Cloud console",
        "desc": "Supervise attendance, employee files and reports from anywhere, with each company's data isolated."
      }
    },
    "feat": {
      "eyebrow": "Everything in a single account",
      "title": "What Clocc controls for you",
      "f1": {
        "title": "Attendance tracking",
        "desc": "Clock-ins and clock-outs from your time clocks, with a formal record and history for each person."
      },
      "f2": {
        "title": "Multiple legal entities",
        "desc": "Each company with its data isolated. A record belongs to whoever employs the person, not whoever bought the clock."
      },
      "f3": {
        "title": "Home office with geofencing",
        "desc": "Remote check-in for people working from home, bounded by a geofence you define on the map."
      },
      "f4": {
        "title": "Vacations and permits",
        "desc": "Request, HR approval with a signature, and a PDF receipt emailed to the right people."
      },
      "f5": {
        "title": "Employee file",
        "desc": "Data, assignments and how each person checks in, organized in a single place."
      },
      "f6": {
        "title": "Clocks and agents in sync",
        "desc": "The online or offline status of every clock and agent, always visible so you can act in time."
      }
    },
    "comply": {
      "eyebrow": "Built to stay compliant",
      "title": "Reach every audit with peace of mind",
      "subtitle": "Remote check-in doesn't open doors outside the geofence, and every action is kept as evidence ready to review.",
      "c1": "Door access only opens inside the geofence: a home-office check-in never unlocks it.",
      "c2": "Formal records per person and per company, with automatic reports and emails.",
      "c3": "Receipts and organized evidence, ready to present in an audit.",
      "tagRemote": "On-site or home office",
      "tagMulti": "Data isolated per company"
    },
    "cta": {
      "title": "Get your team's attendance in order with Clocc",
      "desc": "Tell us how your team works and we'll show you how Clocc helps you stay compliant without the hassle.",
      "button": "Request a demo"
    }
  }
}
</i18n>
