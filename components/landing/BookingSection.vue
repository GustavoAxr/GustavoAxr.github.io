<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import {
  Calendar,
  Clock,
  Mail,
  User,
  MessageSquare,
  Video,
  ChevronLeft,
  ChevronRight,
  Check,
  X,
  Loader2,
  AlertCircle,
} from "lucide-vue-next";

const isVisible = ref(false);

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible.value = true;
          observer.disconnect();
        }
      });
    },
    // threshold 0: en móvil la sección es muy alta y 0.2 no se alcanzaba,
    // dejando el contenido en opacity-0 (invisible).
    { threshold: 0 },
  );

  const section = document.getElementById("booking-section");
  if (section) observer.observe(section);
});

// Calendar state
const currentDate = ref(new Date());
const selectedDate = ref<Date | null>(null);
const selectedTime = ref<string | null>(null);
// Ventanita flotante para elegir la hora (no altera el tamaño de la card).
const timePickerOpen = ref(false);

// Form state
const form = ref({
  name: "",
  email: "",
  subject: "",
});

const formSubmitted = ref(false);

// Horarios ya ocupados (instantes ISO de inicio), traídos del backend.
const busyStarts = ref<Set<string>>(new Set());

const timeSlots = [
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
];

const monthNames = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

const dayNames = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];

const currentMonth = computed(() => monthNames[currentDate.value.getMonth()]);
const currentYear = computed(() => currentDate.value.getFullYear());

const calendarDays = computed(() => {
  const year = currentDate.value.getFullYear();
  const month = currentDate.value.getMonth();

  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);

  const days: Array<{ date: Date; isCurrentMonth: boolean; isPast: boolean }> =
    [];

  // Previous month days
  const startDayOfWeek = firstDay.getDay();
  for (let i = startDayOfWeek - 1; i >= 0; i--) {
    const date = new Date(year, month, -i);
    days.push({ date, isCurrentMonth: false, isPast: true });
  }

  // Current month days
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  for (let i = 1; i <= lastDay.getDate(); i++) {
    const date = new Date(year, month, i);
    days.push({
      date,
      isCurrentMonth: true,
      isPast: date < today,
    });
  }

  // Next month days
  const remainingDays = 42 - days.length;
  for (let i = 1; i <= remainingDays; i++) {
    const date = new Date(year, month + 1, i);
    days.push({ date, isCurrentMonth: false, isPast: false });
  }

  return days;
});

const isWeekend = (date: Date) => {
  const day = date.getDay();
  return day === 0 || day === 6;
};

// Instante ISO de inicio para una fecha + hora ("09:00") en la zona local.
const slotStartsAt = (date: Date, time: string) => {
  const d = new Date(date);
  const [h, m] = time.split(":").map(Number);
  d.setHours(h, m, 0, 0);
  return d.toISOString();
};

const isSlotBusy = (time: string) => {
  if (!selectedDate.value) return false;
  return busyStarts.value.has(slotStartsAt(selectedDate.value, time));
};

// Ocupación por día, para marcar las fechas en el calendario.
const busyCountForDate = (date: Date) =>
  timeSlots.filter((t) => busyStarts.value.has(slotStartsAt(date, t))).length;
const isDateFull = (date: Date) => busyCountForDate(date) >= timeSlots.length;
const hasSomeBusy = (date: Date) => busyCountForDate(date) > 0;
const isSelectable = (day: {
  date: Date;
  isCurrentMonth: boolean;
  isPast: boolean;
}) =>
  !day.isPast &&
  day.isCurrentMonth &&
  !isWeekend(day.date) &&
  !isDateFull(day.date);

const formatDateKey = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const formatDisplayDate = (date: Date | null) => {
  if (!date) return "";
  return `${date.getDate()} de ${monthNames[date.getMonth()]} ${date.getFullYear()}`;
};

// Día de la semana en texto (para el resumen de la cita).
const weekdayNames = [
  "domingo",
  "lunes",
  "martes",
  "miércoles",
  "jueves",
  "viernes",
  "sábado",
];
const formatWeekday = (date: Date | null) =>
  date ? weekdayNames[date.getDay()] : "";

const selectDate = (day: {
  date: Date;
  isCurrentMonth: boolean;
  isPast: boolean;
}) => {
  if (!isSelectable(day)) return;
  selectedDate.value = day.date;
  selectedTime.value = null;
  timePickerOpen.value = true; // abre la ventanita de horas
};

const selectTime = (time: string) => {
  if (isSlotBusy(time)) return;
  selectedTime.value = time;
  timePickerOpen.value = false; // al elegir la hora, se cierra
};

const closeTimePicker = () => {
  timePickerOpen.value = false;
};

const prevMonth = () => {
  currentDate.value = new Date(
    currentDate.value.getFullYear(),
    currentDate.value.getMonth() - 1,
    1,
  );
};

const nextMonth = () => {
  currentDate.value = new Date(
    currentDate.value.getFullYear(),
    currentDate.value.getMonth() + 1,
    1,
  );
};

const isDateSelected = (date: Date) => {
  if (!selectedDate.value) return false;
  return formatDateKey(date) === formatDateKey(selectedDate.value);
};

const canSubmit = computed(() => {
  return (
    selectedDate.value &&
    selectedTime.value &&
    form.value.name &&
    form.value.email &&
    form.value.subject
  );
});

// Envío real al microservicio (POST /meetings).
const { scheduleMeeting, getBusySlots } = useBackend();
const sending = ref(false);
const errorMsg = ref("");

// Carga los horarios ya ocupados para deshabilitarlos en el calendario.
const loadBusy = async () => {
  try {
    const slots = await getBusySlots();
    busyStarts.value = new Set(slots.map((s) => s.startsAt));
  } catch {
    // Si falla, no bloqueamos la UI: el backend valida igual al agendar.
  }
};
onMounted(loadBusy);

// Combina la fecha y la hora elegidas en un instante ISO-8601.
const buildStartsAt = () =>
  slotStartsAt(selectedDate.value as Date, selectedTime.value as string);

const submitForm = async () => {
  if (!canSubmit.value || sending.value) return;
  errorMsg.value = "";
  sending.value = true;
  try {
    await scheduleMeeting({
      name: form.value.name,
      email: form.value.email,
      subject: form.value.subject,
      startsAt: buildStartsAt(),
      durationMin: 30,
    });
    formSubmitted.value = true;
    void loadBusy();
  } catch (e: unknown) {
    const status =
      (e as { statusCode?: number })?.statusCode ??
      (e as { response?: { status?: number } })?.response?.status;
    if (status === 409) {
      // El horario se ocupó (aquí o entre que cargó y envió). Reintenta.
      errorMsg.value = "Ese horario acaba de ocuparse. Elige otro, por favor.";
      selectedTime.value = null;
      await loadBusy();
    } else {
      errorMsg.value =
        "No pudimos agendar tu reunión ahora mismo. Intenta de nuevo o solicítala por WhatsApp.";
    }
  } finally {
    sending.value = false;
  }
};

// Alternativa: solicitar por WhatsApp si algo falla.
const submitByWhatsApp = () => {
  const text = encodeURIComponent(
    `Hola CODEGAHP, soy ${form.value.name}. Quiero agendar una videollamada el ${formatDisplayDate(selectedDate.value)} a las ${selectedTime.value} hrs.\n\nTema: ${form.value.subject}\nMi correo: ${form.value.email}`,
  );
  window.open(`https://wa.me/529381065606?text=${text}`, "_blank", "noopener");
};

const resetForm = () => {
  formSubmitted.value = false;
  errorMsg.value = "";
  selectedDate.value = null;
  selectedTime.value = null;
  form.value = { name: "", email: "", subject: "" };
};
</script>

<template>
  <section
    id="booking-section"
    class="py-20 lg:py-24 bg-white dark:bg-slate-950 relative overflow-hidden"
  >
    <div class="container max-w-7xl mx-auto px-4 relative z-10">
      <!-- Encabezado (compacto) -->
      <div
        class="text-center max-w-2xl mx-auto mb-10 lg:mb-12"
        :class="{ 'animate-fade-in-up': isVisible, 'opacity-0': !isVisible }"
      >
        <span
          class="inline-flex items-center gap-2 text-primary font-semibold text-xs uppercase tracking-[0.2em]"
        >
          <span class="h-px w-6 bg-primary/40"></span>
          Diagnóstico sin costo
          <span class="h-px w-6 bg-primary/40"></span>
        </span>
        <h2
          class="mt-4 text-3xl md:text-4xl font-bold text-slate-900 dark:text-white"
        >
          Agenda tu <span class="text-primary">videollamada</span>
        </h2>
        <p class="mt-3 text-slate-600 dark:text-slate-400">
          30 minutos para revisar tu proyecto y proponerte la mejor ruta
          tecnológica. Tú eliges el día y la hora.
        </p>
      </div>

      <!-- Éxito -->
      <div
        v-if="formSubmitted"
        class="max-w-lg mx-auto"
        :class="{ 'animate-fade-in-up': isVisible }"
      >
        <div
          class="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm p-8 text-center"
        >
          <div
            class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-5"
          >
            <Check class="w-8 h-8 text-primary" />
          </div>
          <h3 class="text-2xl font-bold text-slate-900 dark:text-white mb-3">
            ¡Cita agendada!
          </h3>
          <p class="text-slate-600 dark:text-slate-400 mb-6">
            Te enviamos la invitación con el enlace de la videollamada a
            <strong class="text-slate-900 dark:text-white">{{
              form.email
            }}</strong>, más un recordatorio antes de la reunión.
          </p>
          <div class="rounded-xl bg-[#2f6a1e] text-white px-5 py-4 text-left">
            <p class="text-[11px] uppercase tracking-wider text-emerald-50/70">
              Tu cita
            </p>
            <p class="mt-1 text-lg font-bold">
              <span class="capitalize">{{ formatWeekday(selectedDate) }}</span>
              {{ formatDisplayDate(selectedDate) }} · {{ selectedTime }} h
            </p>
            <p class="text-sm text-emerald-50/85 mt-1">{{ form.subject }}</p>
          </div>
          <Button
            variant="bare"
            size="free"
            type="button"
            @click="resetForm"
            class="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-[5px] text-sm font-semibold text-primary hover:bg-primary/10 transition-colors"
          >
            Agendar otra cita
          </Button>
        </div>
      </div>

      <!-- Tarjeta de agenda -->
      <div
        v-else
        class="grid md:grid-cols-2 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm overflow-hidden"
        :class="{ 'animate-fade-in-up': isVisible, 'opacity-0': !isVisible }"
      >
        <!-- Panel verde: info + formulario (a la derecha en móvil va debajo) -->
        <aside
          class="relative overflow-hidden bg-[#2f6a1e] text-white p-7 lg:p-8 flex flex-col order-2 md:order-1"
        >
          <div
            class="pointer-events-none absolute inset-0 opacity-[0.12]"
            style="
              background-image: radial-gradient(
                circle at 1px 1px,
                #fff 1px,
                transparent 0
              );
              background-size: 16px 16px;
            "
          ></div>
          <div class="relative flex flex-col w-full max-w-md mx-auto">
            <span
              class="inline-flex items-center gap-2 text-emerald-50/90 text-xs font-semibold uppercase tracking-wider"
            >
              <Video class="w-4 h-4" />
              Videollamada · Jitsi
            </span>
            <h3 class="mt-2.5 text-2xl font-bold leading-tight">
              Sesión de diagnóstico
            </h3>

            <!-- Meta compacta -->
            <div
              class="mt-3 flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-emerald-50/85"
            >
              <span class="inline-flex items-center gap-1.5">
                <Clock class="w-3.5 h-3.5" /> 30 min
              </span>
              <span class="inline-flex items-center gap-1.5">
                <Check class="w-3.5 h-3.5" /> Sin costo
              </span>
              <span class="inline-flex items-center gap-1.5">
                <Calendar class="w-3.5 h-3.5" /> Lun–Vie · 9:00–17:00
              </span>
            </div>

            <!-- Formulario -->
            <div class="mt-6 space-y-3">
              <div class="relative">
                <User
                  class="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-white/50"
                  aria-hidden="true"
                />
                <input
                  v-model="form.name"
                  type="text"
                  placeholder="Nombre completo"
                  class="w-full pl-9 pr-3 py-2.5 rounded-lg bg-white/10 border border-white/20 text-sm text-white placeholder-white/50 focus:border-white/70 focus:ring-2 focus:ring-white/25 focus:bg-white/15 outline-none transition-all"
                />
              </div>
              <div class="relative">
                <Mail
                  class="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-white/50"
                  aria-hidden="true"
                />
                <input
                  v-model="form.email"
                  type="email"
                  placeholder="tu@correo.com"
                  class="w-full pl-9 pr-3 py-2.5 rounded-lg bg-white/10 border border-white/20 text-sm text-white placeholder-white/50 focus:border-white/70 focus:ring-2 focus:ring-white/25 focus:bg-white/15 outline-none transition-all"
                />
              </div>
              <div class="relative">
                <MessageSquare
                  class="w-4 h-4 absolute left-3 top-3 text-white/50"
                  aria-hidden="true"
                />
                <textarea
                  v-model="form.subject"
                  rows="2"
                  placeholder="¿De qué te gustaría hablar?"
                  class="w-full pl-9 pr-3 py-2.5 rounded-lg bg-white/10 border border-white/20 text-sm text-white placeholder-white/50 focus:border-white/70 focus:ring-2 focus:ring-white/25 focus:bg-white/15 outline-none transition-all resize-none"
                ></textarea>
              </div>
            </div>

            <!-- Resumen de la selección -->
            <div
              class="mt-4 rounded-lg bg-white/10 ring-1 ring-white/15 px-3.5 py-2.5 text-sm"
            >
              <template v-if="selectedDate && selectedTime">
                <span
                  class="text-[11px] uppercase tracking-wider text-emerald-50/70"
                  >Tu cita ·
                </span>
                <span class="font-semibold">
                  <span class="capitalize">{{
                    formatWeekday(selectedDate)
                  }}</span>
                  {{ selectedDate.getDate() }} de
                  {{ monthNames[selectedDate.getMonth()] }}, {{ selectedTime }} h
                </span>
              </template>
              <span v-else class="text-emerald-50/75">
                Elige un día y una hora en el calendario →
              </span>
            </div>

            <!-- Enviar -->
            <Button
              variant="bare"
              size="free"
              type="button"
              @click="submitForm"
              :disabled="!canSubmit || sending"
              class="mt-3 w-full py-3 rounded-[5px] font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 [&_svg]:size-5"
              :class="
                canSubmit && !sending
                  ? 'bg-white text-[#2f6a1e] hover:bg-emerald-50 hover:shadow-lg'
                  : 'bg-white/15 text-white/50 cursor-not-allowed'
              "
            >
              <Loader2
                v-if="sending"
                class="w-5 h-5 animate-spin"
                aria-hidden="true"
              />
              <Video v-else class="w-5 h-5" aria-hidden="true" />
              {{ sending ? "Agendando…" : "Confirmar videollamada" }}
            </Button>

            <div
              v-if="errorMsg"
              class="mt-3 text-sm text-white bg-red-500/25 border border-red-200/40 rounded-lg px-4 py-3"
            >
              <p class="flex items-start gap-2">
                <AlertCircle class="w-5 h-5 shrink-0" aria-hidden="true" />
                {{ errorMsg }}
              </p>
              <Button
                variant="bare"
                size="free"
                type="button"
                @click="submitByWhatsApp"
                class="mt-2 font-semibold underline underline-offset-2 hover:no-underline"
              >
                Solicitar por WhatsApp
              </Button>
            </div>
            <p v-else class="mt-2.5 text-[11px] text-emerald-50/70">
              Recibes el enlace de la videollamada por correo, más un
              recordatorio antes de la reunión.
            </p>
          </div>
        </aside>

        <!-- Panel blanco: calendario + horarios -->
        <div class="relative p-6 lg:p-8 order-1 md:order-2">
          <div class="mx-auto max-w-md">
          <!-- Paso 1: día -->
          <div class="flex items-center justify-between gap-3">
            <h4
              class="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white"
            >
              <span
                class="grid place-items-center w-5 h-5 rounded-full bg-primary/15 text-primary text-[11px] font-bold"
                >1</span
              >
              Elige el día
            </h4>
            <div class="flex items-center gap-1">
              <span
                class="text-sm font-semibold text-slate-700 dark:text-slate-200 mr-1"
                >{{ currentMonth }} {{ currentYear }}</span
              >
              <Button
                variant="bare"
                size="free"
                type="button"
                @click="prevMonth"
                aria-label="Mes anterior"
                class="p-1.5 rounded-[5px] text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors [&_svg]:size-4"
              >
                <ChevronLeft class="w-4 h-4" aria-hidden="true" />
              </Button>
              <Button
                variant="bare"
                size="free"
                type="button"
                @click="nextMonth"
                aria-label="Mes siguiente"
                class="p-1.5 rounded-[5px] text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors [&_svg]:size-4"
              >
                <ChevronRight class="w-4 h-4" aria-hidden="true" />
              </Button>
            </div>
          </div>

          <!-- Calendario -->
          <div class="mt-4">
            <div class="grid grid-cols-7 gap-1 mb-1">
              <div
                v-for="day in dayNames"
                :key="day"
                class="text-center text-[11px] font-semibold text-slate-400 dark:text-slate-500 py-1"
              >
                {{ day }}
              </div>
            </div>
            <div class="grid grid-cols-7 gap-1">
              <Button
                variant="bare"
                size="free"
                type="button"
                v-for="(day, index) in calendarDays"
                :key="index"
                @click="selectDate(day)"
                :disabled="!isSelectable(day)"
                class="relative aspect-square rounded-[5px] flex items-center justify-center text-sm font-medium transition-all"
                :class="[
                  isDateSelected(day.date)
                    ? 'bg-primary text-white shadow-sm shadow-primary/30'
                    : day.isPast || !day.isCurrentMonth
                      ? 'text-slate-300 dark:text-slate-700 cursor-not-allowed'
                      : isWeekend(day.date)
                        ? 'text-slate-300 dark:text-slate-700 cursor-not-allowed'
                        : isDateFull(day.date)
                          ? 'text-red-300 dark:text-red-500/50 line-through cursor-not-allowed'
                          : 'text-slate-700 dark:text-slate-200 hover:bg-primary/10 cursor-pointer',
                ]"
              >
                {{ day.date.getDate() }}
                <span
                  v-if="
                    isSelectable(day) &&
                    hasSomeBusy(day.date) &&
                    !isDateSelected(day.date)
                  "
                  class="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-amber-400"
                  aria-hidden="true"
                ></span>
              </Button>
            </div>
          </div>

          <!-- Leyenda de ocupación del calendario -->
          <div
            class="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-slate-400"
          >
            <span class="inline-flex items-center gap-1.5">
              <span class="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
              Con horarios ocupados
            </span>
            <span class="inline-flex items-center gap-1.5">
              <span class="line-through">00</span>
              Día completo
            </span>
          </div>
          </div>

          <!-- Ventanita flotante para elegir la hora (no cambia el tamaño de la card) -->
          <Transition name="pop">
            <div
              v-if="timePickerOpen && selectedDate"
              class="absolute inset-0 z-20 flex items-center justify-center p-3"
            >
              <div
                class="absolute inset-0 bg-slate-900/10 dark:bg-slate-950/50 backdrop-blur-[1px]"
                @click="closeTimePicker"
              ></div>
              <div
                class="pop-card relative w-full max-w-[320px] rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-2xl p-4"
              >
                <div class="flex items-start justify-between gap-3">
                  <div>
                    <h4
                      class="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white"
                    >
                      <span
                        class="grid place-items-center w-5 h-5 rounded-full bg-primary/15 text-primary text-[11px] font-bold"
                        >2</span
                      >
                      Elige la hora
                    </h4>
                    <p class="mt-1 text-xs text-slate-500 dark:text-slate-400">
                      <span class="capitalize">{{
                        formatWeekday(selectedDate)
                      }}</span>
                      {{ selectedDate.getDate() }} de
                      {{ monthNames[selectedDate.getMonth()] }} · 30 min
                    </p>
                  </div>
                  <Button
                    variant="bare"
                    size="free"
                    type="button"
                    aria-label="Cerrar"
                    @click="closeTimePicker"
                    class="p-1.5 rounded-[5px] text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors [&_svg]:size-4"
                  >
                    <X class="w-4 h-4" />
                  </Button>
                </div>
                <div class="mt-3 grid grid-cols-4 gap-2">
                  <Button
                    variant="bare"
                    size="free"
                    type="button"
                    v-for="time in timeSlots"
                    :key="time"
                    @click="selectTime(time)"
                    :disabled="isSlotBusy(time)"
                    class="py-2 rounded-[5px] text-sm font-semibold transition-all"
                    :class="[
                      selectedTime === time
                        ? 'bg-primary text-white shadow-sm shadow-primary/30'
                        : isSlotBusy(time)
                          ? 'bg-slate-100 dark:bg-slate-800/60 text-slate-300 dark:text-slate-600 cursor-not-allowed line-through'
                          : 'border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:border-primary hover:text-primary',
                    ]"
                  >
                    {{ time }}
                  </Button>
                </div>
                <p class="mt-2 text-[11px] text-slate-400">
                  Los horarios tachados ya están ocupados.
                </p>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Ventanita flotante de horas */
.pop-enter-active,
.pop-leave-active {
  transition: opacity 0.18s ease;
}
.pop-enter-from,
.pop-leave-to {
  opacity: 0;
}
.pop-enter-active .pop-card,
.pop-leave-active .pop-card {
  transition: transform 0.18s ease;
}
.pop-enter-from .pop-card,
.pop-leave-to .pop-card {
  transform: scale(0.96);
}
</style>
