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

const selectDate = (day: {
  date: Date;
  isCurrentMonth: boolean;
  isPast: boolean;
}) => {
  if (day.isPast || !day.isCurrentMonth || isWeekend(day.date)) return;
  selectedDate.value = day.date;
  selectedTime.value = null;
};

const selectTime = (time: string) => {
  if (isSlotBusy(time)) return;
  selectedTime.value = time;
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
    class="py-24 lg:py-32 bg-white dark:bg-slate-950 relative overflow-hidden"
  >
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-5 booking-pattern"></div>

    <div class="container max-w-7xl mx-auto px-4 relative z-10">
      <!-- Section Header -->
      <div
        class="text-center max-w-3xl mx-auto mb-16"
        :class="{ 'animate-fade-in-up': isVisible, 'opacity-0': !isVisible }"
      >
        <span
          class="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-4"
        >
          Diagnóstico y Asesoría
        </span>
        <h2
          class="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6"
        >
          Agenda una Sesión de
          <span class="text-primary">Consultoría</span>
        </h2>
        <p class="text-lg text-slate-600 dark:text-slate-400">
          Reserva una sesión técnica de 30 minutos sin costo para analizar los requerimientos de tu proyecto y proponer la estrategia tecnológica ideal.
        </p>

        <!-- Videollamada Badge -->
        <div
          class="inline-flex items-center gap-2 mt-6 px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-full"
        >
          <Video class="w-5 h-5 text-primary" />
          <span class="text-sm text-slate-600 dark:text-slate-400">
            Reunión por
            <strong class="text-slate-900 dark:text-white">videollamada</strong>
            — recibes el enlace por correo
          </span>
        </div>
      </div>

      <!-- Success Message -->
      <div
        v-if="formSubmitted"
        class="max-w-2xl mx-auto text-center py-16"
        :class="{ 'animate-fade-in-up': isVisible }"
      >
        <div
          class="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <Check class="w-10 h-10 text-primary" />
        </div>
        <h3 class="text-2xl font-bold text-slate-900 dark:text-white mb-4">
          ¡Solicitud lista!
        </h3>
        <p class="text-slate-600 dark:text-slate-400 mb-6">
          Te enviamos la invitación con el enlace de la videollamada a
          <strong>{{ form.email }}</strong> y te llegará un recordatorio antes
          de la reunión.
        </p>
        <div
          class="bg-slate-100 dark:bg-slate-800 rounded-xl p-6 inline-block text-left"
        >
          <p class="text-sm text-slate-500 dark:text-slate-400 mb-2">
            Resumen de tu cita:
          </p>
          <p class="font-semibold text-slate-900 dark:text-white">
            {{ formatDisplayDate(selectedDate) }} a las {{ selectedTime }}
          </p>
          <p class="text-sm text-slate-600 dark:text-slate-400 mt-1">
            Tema: {{ form.subject }}
          </p>
        </div>
        <button
          @click="resetForm"
          class="mt-8 px-6 py-3 text-primary hover:bg-primary/10 rounded-xl transition-colors"
        >
          Agendar otra cita
        </button>
      </div>

      <!-- Booking Form -->
      <div
        v-else
        class="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
        :class="{ 'animate-fade-in-up': isVisible, 'opacity-0': !isVisible }"
      >
        <!-- Calendar -->
        <div
          class="bg-slate-50 dark:bg-slate-900 rounded-3xl p-6 lg:p-8 border border-slate-200 dark:border-slate-800"
        >
          <div class="flex items-center justify-between mb-6">
            <h3 class="text-xl font-bold text-slate-900 dark:text-white">
              {{ currentMonth }} {{ currentYear }}
            </h3>
            <div class="flex gap-2">
              <button
                @click="prevMonth"
                aria-label="Mes anterior"
                class="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
              >
                <ChevronLeft
                  class="w-5 h-5 text-slate-600 dark:text-slate-400"
                  aria-hidden="true"
                />
              </button>
              <button
                @click="nextMonth"
                aria-label="Mes siguiente"
                class="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
              >
                <ChevronRight
                  class="w-5 h-5 text-slate-600 dark:text-slate-400"
                  aria-hidden="true"
                />
              </button>
            </div>
          </div>

          <!-- Day Names -->
          <div class="grid grid-cols-7 gap-1 mb-2">
            <div
              v-for="day in dayNames"
              :key="day"
              class="text-center text-xs font-semibold text-slate-500 dark:text-slate-500 py-2"
            >
              {{ day }}
            </div>
          </div>

          <!-- Calendar Grid -->
          <div class="grid grid-cols-7 gap-1">
            <button
              v-for="(day, index) in calendarDays"
              :key="index"
              @click="selectDate(day)"
              :disabled="
                day.isPast || !day.isCurrentMonth || isWeekend(day.date)
              "
              class="aspect-square rounded-lg flex items-center justify-center text-sm font-medium transition-all"
              :class="[
                isDateSelected(day.date)
                  ? 'bg-primary text-white'
                  : day.isPast || !day.isCurrentMonth
                    ? 'text-slate-300 dark:text-slate-700 cursor-not-allowed'
                    : isWeekend(day.date)
                      ? 'text-slate-400 dark:text-slate-600 cursor-not-allowed'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-primary/10 cursor-pointer',
              ]"
            >
              {{ day.date.getDate() }}
            </button>
          </div>

          <!-- Time Slots -->
          <div v-if="selectedDate" class="mt-8">
            <h4
              class="text-sm font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2"
            >
              <Clock class="w-4 h-4 text-primary" />
              Horarios disponibles para {{ formatDisplayDate(selectedDate) }}
            </h4>
            <div class="grid grid-cols-4 gap-2">
              <button
                v-for="time in timeSlots"
                :key="time"
                @click="selectTime(time)"
                :disabled="isSlotBusy(time)"
                class="py-3 px-2 rounded-lg text-sm font-medium transition-all"
                :class="[
                  selectedTime === time
                    ? 'bg-primary text-white'
                    : isSlotBusy(time)
                      ? 'bg-red-100 dark:bg-red-900/20 text-red-400 cursor-not-allowed line-through'
                      : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-primary/10 border border-slate-200 dark:border-slate-700',
                ]"
              >
                {{ time }}
              </button>
            </div>

            <!-- Legend -->
            <div class="flex gap-4 mt-4 text-xs">
              <div class="flex items-center gap-1">
                <div class="w-3 h-3 bg-primary rounded"></div>
                <span class="text-slate-500">Seleccionado</span>
              </div>
              <div class="flex items-center gap-1">
                <div
                  class="w-3 h-3 bg-red-100 dark:bg-red-900/20 rounded border border-red-300"
                ></div>
                <span class="text-slate-500">Ocupado</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Form -->
        <div
          class="bg-slate-50 dark:bg-slate-900 rounded-3xl p-6 lg:p-8 border border-slate-200 dark:border-slate-800"
        >
          <h3
            class="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2"
          >
            <Calendar class="w-5 h-5 text-primary" />
            Tus Datos
          </h3>

          <div class="space-y-5">
            <!-- Name -->
            <div>
              <label
                class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
              >
                <User class="w-4 h-4 inline mr-1" />
                Nombre completo
              </label>
              <input
                v-model="form.name"
                type="text"
                placeholder="Ej: Juan Pérez"
                class="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              />
            </div>

            <!-- Email -->
            <div>
              <label
                class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
              >
                <Mail class="w-4 h-4 inline mr-1" />
                Correo electrónico
              </label>
              <input
                v-model="form.email"
                type="email"
                placeholder="tu@email.com"
                class="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              />
            </div>

            <!-- Subject -->
            <div>
              <label
                class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
              >
                <MessageSquare class="w-4 h-4 inline mr-1" />
                ¿De qué te gustaría hablar?
              </label>
              <textarea
                v-model="form.subject"
                rows="4"
                placeholder="Cuéntanos brevemente sobre tu proyecto..."
                class="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
              ></textarea>
            </div>

            <!-- Selected Date/Time Summary -->
            <div
              v-if="selectedDate && selectedTime"
              class="p-4 bg-primary/10 rounded-xl"
            >
              <p class="text-sm text-slate-600 dark:text-slate-400">
                Tu cita será el:
              </p>
              <p class="font-semibold text-primary">
                {{ formatDisplayDate(selectedDate) }} a las {{ selectedTime }}
              </p>
            </div>

            <!-- Submit -->
            <button
              @click="submitForm"
              :disabled="!canSubmit || sending"
              class="w-full py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2"
              :class="
                canSubmit && !sending
                  ? 'bg-primary text-white hover:bg-primary-dark hover:shadow-lg hover:-translate-y-0.5'
                  : 'bg-slate-200 dark:bg-slate-700 text-slate-400 cursor-not-allowed'
              "
            >
              <Loader2
                v-if="sending"
                class="w-5 h-5 animate-spin"
                aria-hidden="true"
              />
              <Video v-else class="w-5 h-5" aria-hidden="true" />
              {{ sending ? "Agendando…" : "Agendar reunión" }}
            </button>

            <!-- Error + alternativa WhatsApp -->
            <div
              v-if="errorMsg"
              class="text-sm text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-900/40 rounded-xl px-4 py-3"
            >
              <p class="flex items-start gap-2">
                <AlertCircle class="w-5 h-5 shrink-0" aria-hidden="true" />
                {{ errorMsg }}
              </p>
              <button
                type="button"
                @click="submitByWhatsApp"
                class="mt-2 font-semibold underline underline-offset-2 hover:no-underline"
              >
                Solicitar por WhatsApp
              </button>
            </div>

            <p
              v-else
              class="text-xs text-center text-slate-500 dark:text-slate-400"
            >
              Recibes la invitación con el enlace de la videollamada por correo,
              más un recordatorio antes de la reunión.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
}

.booking-pattern {
  background-image:
    radial-gradient(
      circle at 25% 25%,
      rgba(45, 206, 154, 0.1) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 75% 75%,
      rgba(45, 206, 154, 0.08) 0%,
      transparent 50%
    );
  background-size: 100px 100px;
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
</style>
