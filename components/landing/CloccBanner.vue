<script setup lang="ts">
// Banner de Clocc en el inicio: split editorial (mismo formato que tenía el de
// LIDIA). Panel con la identidad cyan→verde de Clocc, el mensaje y la CTA; al
// lado, el panel real de Clocc (claro u oscuro según el tema) "anotado" con
// eventos reales del producto.
import { ArrowRight, Fingerprint, FileSpreadsheet } from "lucide-vue-next";
const { t } = useI18n({ useScope: "local" });
</script>

<template>
  <section class="py-20 lg:py-24 bg-slate-50 dark:bg-slate-900">
    <div class="container max-w-7xl mx-auto px-4">
      <div
        class="grid lg:grid-cols-2 rounded-3xl overflow-hidden shadow-xl ring-1 ring-black/5 dark:ring-white/10"
      >
        <!-- Panel de mensaje (identidad Clocc, constante en ambos modos) -->
        <div
          class="relative order-2 lg:order-1 bg-gradient-to-br from-sky-600 to-green-600 p-8 sm:p-12 lg:p-14 flex flex-col justify-center overflow-hidden"
        >
          <!-- Logo de Clocc gigante como marca de fondo, detrás del texto -->
          <CloccLogo
            class="pointer-events-none absolute -bottom-16 -left-20 h-[85%] w-auto max-w-none opacity-[0.12] brightness-0 invert"
            aria-hidden="true"
          />

          <div class="relative">
            <div class="mb-5 flex items-center gap-3">
              <span
                class="grid h-11 w-11 place-items-center rounded-xl bg-white p-2 shadow-lg shadow-black/10"
              >
                <CloccLogo class="h-full w-full" />
              </span>
              <span class="text-2xl font-extrabold tracking-tight text-white">
                Clocc
              </span>
            </div>

            <h2
              class="text-3xl md:text-4xl xl:text-5xl font-extrabold text-white leading-[1.1] mb-4"
            >
              {{ t("title") }}
            </h2>
            <p
              class="text-sky-50/90 text-base md:text-lg leading-relaxed mb-8 max-w-md"
            >
              {{ t("desc") }}
            </p>

            <Button as-child variant="bare" size="free" class="[&_svg]:size-5">
              <NuxtLinkLocale
                to="/servicios/clocc"
                class="group inline-flex items-center gap-2 h-12 px-8 rounded-[5px] bg-white text-sky-700 font-bold shadow-lg hover:bg-sky-50 hover:-translate-y-0.5 transition-all self-start"
              >
                {{ t("cta") }}
                <ArrowRight
                  class="w-5 h-5 group-hover:translate-x-1 transition-transform"
                />
              </NuxtLinkLocale>
            </Button>

            <div
              class="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-medium text-white/80"
            >
              <span>{{ t("b1") }}</span>
              <span class="text-white/40" aria-hidden="true">•</span>
              <span>{{ t("b2") }}</span>
              <span class="text-white/40" aria-hidden="true">•</span>
              <span>{{ t("b3") }}</span>
            </div>
          </div>
        </div>

        <!-- Panel real de Clocc "anotado" -->
        <div
          class="relative order-1 lg:order-2 min-h-[320px] overflow-hidden bg-gradient-to-br from-white to-slate-100 dark:from-slate-800 dark:to-slate-950"
        >
          <!-- retícula tenue + resplandor -->
          <div
            class="pointer-events-none absolute inset-0 bg-[radial-gradient(rgb(15_23_42/0.06)_1px,transparent_1px)] [background-size:22px_22px] dark:bg-[radial-gradient(rgb(255_255_255/0.05)_1px,transparent_1px)]"
            aria-hidden="true"
          ></div>
          <div
            class="pointer-events-none absolute -right-10 top-1/4 h-72 w-72 rounded-full bg-gradient-to-br from-sky-500/20 to-green-500/20 blur-3xl"
            aria-hidden="true"
          ></div>

          <!-- Ventana con la captura; se sale por la derecha y abajo -->
          <figure
            class="absolute left-8 top-10 w-[125%] overflow-hidden rounded-xl bg-white shadow-2xl shadow-slate-900/20 ring-1 ring-slate-900/10 sm:left-12 sm:top-12 dark:bg-slate-900 dark:shadow-black/50 dark:ring-white/10"
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
              :alt="t('alt')"
              width="1600"
              height="887"
              loading="lazy"
              decoding="async"
              class="block w-full dark:hidden"
            />
            <img
              src="/img/clocc/panel-oscuro.webp"
              :alt="t('alt')"
              width="1600"
              height="887"
              loading="lazy"
              decoding="async"
              class="hidden w-full dark:block"
            />
          </figure>

          <!-- Chip: entrada registrada -->
          <div
            class="absolute bottom-5 left-5 inline-flex items-center gap-2.5 rounded-xl bg-white/90 dark:bg-slate-900/85 backdrop-blur px-3 py-2 shadow-lg ring-1 ring-black/5 dark:ring-white/10"
          >
            <span
              class="grid h-7 w-7 place-items-center rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
            >
              <Fingerprint class="h-4 w-4" aria-hidden="true" />
            </span>
            <span class="leading-tight">
              <span class="block text-xs font-semibold text-slate-900 dark:text-white">{{
                t("chip1")
              }}</span>
              <span class="block text-[11px] text-slate-500 dark:text-slate-400"
                >{{ t("chip1meta") }}</span
              >
            </span>
          </div>

          <!-- Chip: reporte por Telegram -->
          <div
            class="absolute right-5 top-5 hidden items-center gap-2.5 rounded-xl bg-white/90 px-3 py-2 shadow-lg ring-1 ring-black/5 backdrop-blur sm:inline-flex dark:bg-slate-900/85 dark:ring-white/10"
          >
            <span
              class="grid h-7 w-7 place-items-center rounded-lg bg-sky-500/10 text-sky-600 dark:text-sky-400"
            >
              <FileSpreadsheet class="h-4 w-4" aria-hidden="true" />
            </span>
            <span class="leading-tight">
              <span class="block text-xs font-semibold text-slate-900 dark:text-white">{{
                t("chip2")
              }}</span>
              <span class="block text-[11px] text-slate-500 dark:text-slate-400"
                >{{ t("chip2meta") }}</span
              >
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<i18n lang="json">
{
  "es": {
    "title": "Cada registro, con su evidencia lista",
    "desc": "Clocc conecta los relojes que ya tienes, registra la asistencia en gabinete o home office y te entrega reportes listos para auditar — incluso por Telegram.",
    "cta": "Conoce Clocc",
    "b1": "Usa tus relojes actuales",
    "b2": "Gabinete o home office",
    "b3": "Asistente en Telegram",
    "alt": "Panel de asistencia de Clocc: horas trabajadas, retardos, faltas y tiempo extra",
    "chip1": "Entrada registrada",
    "chip1meta": "Reloj de planta · 08:02",
    "chip2": "Reporte por Telegram",
    "chip2meta": "Semanal · Excel"
  },
  "en": {
    "title": "Every record, with its evidence ready",
    "desc": "Clocc connects the time clocks you already have, records attendance on-site or from home and delivers audit-ready reports — even through Telegram.",
    "cta": "Meet Clocc",
    "b1": "Works with your current clocks",
    "b2": "On-site or home office",
    "b3": "Telegram assistant",
    "alt": "Clocc attendance dashboard: hours worked, late arrivals, absences and overtime",
    "chip1": "Clock-in recorded",
    "chip1meta": "Plant time clock · 08:02",
    "chip2": "Report via Telegram",
    "chip2meta": "Weekly · Excel"
  }
}
</i18n>
