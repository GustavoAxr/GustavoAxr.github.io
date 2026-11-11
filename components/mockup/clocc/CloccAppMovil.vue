<script setup lang="ts">
// La app móvil de Clocc en la página del servicio: tres teléfonos con lo
// principal y, abajo, una selección de pantallas de los dos roles (es
// presentación: no se enseña la app completa). Las pantallas de la galería se
// piden hasta que la galería se acerca.
import { computed, shallowRef } from "vue";
import { Fingerprint, WifiOff, CalendarCheck, BellRing } from "lucide-vue-next";
import CloccPantalla from "@/components/mockup/clocc/CloccPantalla.vue";
import CarrilDePantallas from "@/components/mockup/CarrilDePantallas.vue";
import { galeriaClocc, portadaClocc, type PantallaClocc } from "@/lib/maquetas/clocc-portada";

const { t } = useI18n({ useScope: "local" });

const puntos = computed(() => [
  { icon: Fingerprint, title: t("points.p1.title"), desc: t("points.p1.desc") },
  { icon: WifiOff, title: t("points.p2.title"), desc: t("points.p2.desc") },
  { icon: CalendarCheck, title: t("points.p3.title"), desc: t("points.p3.desc") },
  { icon: BellRing, title: t("points.p4.title"), desc: t("points.p4.desc") },
]);

const portada = (id: string) => portadaClocc.find((p) => p.id === id)!;

// Las de la galería, en su propio trozo de JS: se piden una vez, cuando el
// carril está por verse.
const galeria = shallowRef<Map<string, PantallaClocc> | null>(null);
async function cargarGaleria() {
  if (galeria.value) return;
  const { pantallasGaleria } = await import("@/lib/maquetas/clocc-galeria");
  galeria.value = new Map(pantallasGaleria.map((p) => [p.id, p]));
}

const etiqueta = (id: string) => t("screenLabel", { title: t(`s.${id}.t`) });
</script>

<template>
  <section
    id="app-movil"
    class="relative overflow-hidden border-t border-slate-100 dark:border-slate-900"
  >
    <div
      class="pointer-events-none absolute -right-40 top-24 h-[520px] w-[620px] rounded-full bg-gradient-to-br from-sky-500/15 to-green-500/15 blur-[130px]"
      aria-hidden="true"
    ></div>

    <div class="container relative mx-auto max-w-7xl px-4 py-16 lg:py-24">
      <div class="grid items-center gap-14 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-10">
        <div>
          <p class="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            {{ t("eyebrow") }}
          </p>
          <h2 class="mt-3 text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">
            {{ t("title1") }}
            <span class="bg-gradient-to-r from-sky-500 to-green-500 bg-clip-text text-transparent">{{
              t("title2")
            }}</span>
          </h2>
          <p class="mt-4 max-w-lg text-base leading-relaxed text-slate-600 dark:text-slate-300">
            {{ t("subtitle") }}
          </p>
          <ul class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            <li v-for="p in puntos" :key="p.title" class="flex items-start gap-4">
              <span
                class="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-primary/20 bg-white shadow-sm dark:bg-slate-900"
              >
                <component :is="p.icon" class="h-5 w-5 text-primary" />
              </span>
              <div>
                <h3 class="font-semibold text-slate-900 dark:text-white">{{ p.title }}</h3>
                <p class="mt-1 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                  {{ p.desc }}
                </p>
              </div>
            </li>
          </ul>
        </div>

        <!-- Inicio al centro; a los lados, checar con huella y escanear -->
        <div class="relative flex items-center justify-center">
          <div
            class="pointer-events-none absolute inset-x-10 inset-y-16 rounded-full bg-gradient-to-tr from-sky-500/20 to-green-500/20 blur-3xl"
            aria-hidden="true"
          ></div>
          <CloccPantalla
            :pantalla="portada('t3')"
            size="sm"
            :label="etiqueta('t3')"
            class="relative -mr-16 hidden translate-y-8 -rotate-6 opacity-95 md:block"
          />
          <CloccPantalla :pantalla="portada('t2')" size="lg" :label="etiqueta('t2')" class="relative z-10" />
          <CloccPantalla
            :pantalla="portada('t4')"
            size="sm"
            :label="etiqueta('t4')"
            class="relative -ml-16 hidden translate-y-8 rotate-6 opacity-95 md:block"
          />
        </div>
      </div>

      <!-- Una selección de pantallas, de quien trabaja y de Recursos Humanos -->
      <div class="mt-20 lg:mt-28">
        <div class="max-w-xl">
          <h3 class="text-2xl font-bold text-slate-900 dark:text-white md:text-3xl">
            {{ t("gallery.title") }}
          </h3>
          <p class="mt-2 text-slate-600 dark:text-slate-300">
            {{ t("gallery.subtitle") }}
          </p>
        </div>

        <CarrilDePantallas
          v-slot="{ visible }"
          class="mt-10"
          :label="t('gallery.region')"
          :prev-label="t('gallery.prev')"
          :next-label="t('gallery.next')"
          @visible="cargarGaleria"
        >
          <figure
            v-for="g in galeriaClocc"
            :key="g.id"
            class="m-0 w-[223px] shrink-0 snap-start sm:w-[238px]"
          >
            <CloccPantalla
              v-if="visible && galeria?.get(g.id)"
              :pantalla="galeria.get(g.id)!"
              size="sm"
              :label="etiqueta(g.id)"
            />
            <span v-else class="pm pm-sm block rounded-[2.4rem] bg-slate-100 dark:bg-slate-900" />
            <figcaption class="mt-5 px-1">
              <span
                class="inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold"
                :class="
                  g.rol === 't'
                    ? 'bg-sky-500/10 text-sky-700 dark:text-sky-300'
                    : 'bg-green-500/10 text-green-700 dark:text-green-300'
                "
                >{{ t(`roles.${g.rol}`) }}</span
              >
              <p class="mt-2 font-semibold text-slate-900 dark:text-white">{{ t(`s.${g.id}.t`) }}</p>
              <p class="mt-1 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                {{ t(`s.${g.id}.d`) }}
              </p>
            </figcaption>
          </figure>
        </CarrilDePantallas>
      </div>
    </div>
  </section>
</template>

<i18n lang="json">
{
  "es": {
    "eyebrow": "App móvil",
    "title1": "Clocc en el bolsillo",
    "title2": "de cada persona",
    "subtitle": "Una sola app para todo el personal: el menú crece según los permisos de cada cuenta. Quien trabaja checa con su huella y pide lo que necesita; Recursos Humanos firma y atiende desde donde esté.",
    "points": {
      "p1": { "title": "Checa con la huella", "desc": "O con Face ID o su código, desde Inicio o escaneando el cartel de su base." },
      "p2": { "title": "Sin conexión, si se autoriza", "desc": "Para quien Recursos Humanos lo permite, firmado con la huella o el rostro del teléfono." },
      "p3": { "title": "Vacaciones, permisos y cambios", "desc": "Se piden y se firman desde el teléfono, con el mismo comprobante en PDF del panel." },
      "p4": { "title": "Avisos y calendario", "desc": "Lo que publica Recursos Humanos llega como notificación y, si trae fecha, al calendario." }
    },
    "roles": {
      "t": "Trabajador",
      "r": "Recursos Humanos"
    },
    "gallery": {
      "title": "Un vistazo a la app",
      "region": "Pantallas de la app de Clocc",
      "prev": "Pantallas anteriores",
      "next": "Pantallas siguientes",
      "subtitle": "Algunas pantallas de quien trabaja y de Recursos Humanos."
    },
    "screenLabel": "Pantalla de la app de Clocc: {title}",
    "s": {
      "t2": { "t": "Inicio", "d": "Su turno de hoy, Checar con huella en un toque, lo que tiene pendiente y lo que viene." },
      "t3": { "t": "Checar con huella", "d": "Desde Inicio, al instante: el teléfono pide la huella (Face ID en un iPhone que lo tenga) y queda el registro." },
      "t4": { "t": "Escanear", "d": "El botón del centro abre la cámara. Al leer el cartel de su base pide la huella o el código, y la ubicación." },
      "t7": { "t": "Sin conexión", "d": "Solo para quien Recursos Humanos se lo dio. Se firma con la huella o el rostro del teléfono." },
      "t8": { "t": "Mi asistencia · Por día", "d": "Cada día con su color, como en el panel. Se toca un día para ver sus registros." },
      "t12": { "t": "Pedir vacaciones o un permiso", "d": "Los cinco tipos de siempre. Antes de enviar dice cuántos días descuenta y quién firma." },
      "t15": { "t": "Comprobante", "d": "El mismo PDF que sale en el panel: autorizada, pendiente o rechazada, con cada firma." },
      "r1": { "t": "Inicio", "d": "Su propio turno y Checar con huella arriba; abajo, cómo va su personal y lo que espera su firma." },
      "r2": { "t": "Por firmar · Ausencias", "d": "Solo lo que le toca firmar ahora, con el saldo y la evidencia. Rechazar pide motivo." }
    }
  },
  "en": {
    "eyebrow": "Mobile app",
    "title1": "Clocc in every",
    "title2": "employee's pocket",
    "subtitle": "One app for the whole staff: the menu grows with each account's permissions. Employees check in with a fingerprint and request what they need; HR signs off and follows up from wherever they are.",
    "points": {
      "p1": { "title": "Fingerprint check-in", "desc": "Or Face ID or a personal code, from Home or by scanning the poster at their site." },
      "p2": { "title": "Offline, when allowed", "desc": "For the people HR enables it for, signed with the phone's fingerprint or face." },
      "p3": { "title": "Vacation, leave and changes", "desc": "Requested and signed from the phone, with the same PDF receipt as the dashboard." },
      "p4": { "title": "Announcements and calendar", "desc": "What HR publishes arrives as a notification and, if it has a date, on the calendar." }
    },
    "roles": {
      "t": "Employee",
      "r": "Human Resources"
    },
    "gallery": {
      "title": "A look inside the app",
      "region": "Clocc app screens",
      "prev": "Previous screens",
      "next": "Next screens",
      "subtitle": "A few screens for employees and for Human Resources."
    },
    "screenLabel": "Clocc app screen: {title}",
    "s": {
      "t2": { "t": "Home", "d": "Today's shift, one-tap fingerprint check-in, what's pending and what's coming up." },
      "t3": { "t": "Fingerprint check-in", "d": "Right from Home: the phone asks for a fingerprint (Face ID on an iPhone that has it) and the record is saved." },
      "t4": { "t": "Scan", "d": "The center button opens the camera. After reading the poster at their site it asks for a fingerprint or code, and the location." },
      "t7": { "t": "Offline", "d": "Only for the people HR enabled it for. Signed with the phone's fingerprint or face." },
      "t8": { "t": "My attendance · By day", "d": "Each day in its color, just like the dashboard. Tap a day to see its records." },
      "t12": { "t": "Request vacation or leave", "d": "The usual five types. Before sending, it shows how many days it uses and who signs." },
      "t15": { "t": "Receipt", "d": "The same PDF as the dashboard: approved, pending or rejected, with every signature." },
      "r1": { "t": "Home", "d": "Their own shift and fingerprint check-in up top; below, how their staff is doing and what awaits their signature." },
      "r2": { "t": "To sign · Absences", "d": "Only what they need to sign now, with the balance and the evidence. Rejecting asks for a reason." }
    }
  }
}
</i18n>
