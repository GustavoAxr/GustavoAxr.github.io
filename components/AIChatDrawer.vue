<script setup lang="ts">
import { ref, computed, nextTick, watch } from "vue";

interface Props {
  isOpen: boolean;
}

const props = defineProps<Props>();
const emit = defineEmits<{
  (e: "close"): void;
}>();

const { t, locale } = useI18n({ useScope: "local" });

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const userInput = ref("");
const messages = ref<Message[]>([
  {
    id: 1,
    text: t("greeting"),
    isBot: true,
    timestamp: new Date(),
  },
]);
const isTyping = ref(false);
const chatContainer = ref<HTMLElement | null>(null);

// FAQ responses based on keywords
// Las claves (palabras clave) son lógica de coincidencia contra la entrada del
// usuario; los valores apuntan a las claves i18n del mensaje mostrado.
const faqResponses: Record<string, string> = {
  precio: "faq.precio",
  costo: "faq.precio",
  tiempo: "faq.tiempo",
  tecnología: "faq.tecnologia",
  tecnologias: "faq.tecnologia",
  mantenimiento: "faq.mantenimiento",
  soporte: "faq.soporte",
  proceso: "faq.proceso",
  empresa: "faq.empresa",
  servicios: "faq.servicios",
  contacto: "faq.contacto",
  ubicación: "faq.ubicacion",
  hola: "faq.hola",
  gracias: "faq.gracias",
};

// Respaldo offline (bot básico por palabras clave) para cuando el backend de
// IA no esté disponible (p. ej. producción antes de desplegar el microservicio).
const getFallbackResponse = (input: string): string => {
  const lowerInput = input.toLowerCase();
  for (const [keyword, key] of Object.entries(faqResponses)) {
    if (lowerInput.includes(keyword)) return t(key);
  }
  return t("faq.default");
};

// Cliente del backend de IA (Gemini) + hilo de conversación persistente.
const { streamChat, scheduleMeeting } = useBackend();
const conversationId = ref<string | undefined>(undefined);
const isSending = ref(false);

// Preguntas precargadas / caminos a seguir. Se muestran al inicio y tras
// cada respuesta del bot, mientras no se esté enviando.
const suggestions = computed(() => [
  t("suggestions.services"),
  t("suggestions.price"),
  t("suggestions.lidia"),
  t("suggestions.schedule"),
]);
const showSuggestions = computed(
  () => !isSending.value && messages.value[messages.value.length - 1]?.isBot,
);

// ── Render mínimo de Markdown → HTML (negritas, listas, código, enlaces) ──
// El texto viene de nuestro backend de IA; aun así se escapa antes de formatear.
const escapeHtml = (s: string): string =>
  s.replace(
    /[&<>"']/g,
    (c) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[c] as string,
  );

const inlineMd = (s: string): string =>
  escapeHtml(s)
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/`([^`]+?)`/g, "<code>$1</code>")
    .replace(
      /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,
      '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>',
    );

const renderMarkdown = (text: string): string => {
  const lines = text.split("\n");
  let html = "";
  let inList = false;
  let para: string[] = [];
  const flushPara = () => {
    if (para.length) {
      html += `<p>${para.join("<br>")}</p>`;
      para = [];
    }
  };
  for (const raw of lines) {
    const line = raw.replace(/\s+$/, "");
    const bullet = line.match(/^\s*[*-]\s+(.*)$/);
    if (bullet) {
      flushPara();
      if (!inList) {
        html += "<ul>";
        inList = true;
      }
      html += `<li>${inlineMd(bullet[1])}</li>`;
    } else if (line.trim() === "") {
      flushPara();
      if (inList) {
        html += "</ul>";
        inList = false;
      }
    } else {
      if (inList) {
        html += "</ul>";
        inList = false;
      }
      para.push(inlineMd(line));
    }
  }
  flushPara();
  if (inList) html += "</ul>";
  return html;
};

const scrollToBottom = async () => {
  await nextTick();
  if (chatContainer.value) {
    chatContainer.value.scrollTop = chatContainer.value.scrollHeight;
  }
};

// ── Agendar reunión desde el chat ──
// La IA cierra su mensaje con [[AGENDAR]]{...}[[/AGENDAR]] cuando el usuario
// confirma. Aquí lo detectamos, ocultamos el token y hacemos la reserva real.
const AGENDAR_RE = /\[\[AGENDAR\]\]([\s\S]*?)\[\[\/AGENDAR\]\]/;
const stripAction = (t: string) =>
  t.split("[[AGENDAR]]")[0].replace(/\s+$/, "");

const pushBot = (text: string) => {
  messages.value.push({
    id: Date.now() + Math.floor(Math.random() * 1000),
    text,
    isBot: true,
    timestamp: new Date(),
  });
  scrollToBottom();
  return messages.value[messages.value.length - 1];
};

const fmtDateTime = (d: Date) =>
  d.toLocaleString(locale.value === "en" ? "en-US" : "es-MX", {
    weekday: "long",
    day: "numeric",
    month: "long",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

const handleSchedule = async (jsonStr: string) => {
  let data: {
    name?: string;
    email?: string;
    subject?: string;
    date?: string;
    time?: string;
  };
  try {
    data = JSON.parse(jsonStr.trim());
  } catch {
    return;
  }
  const { name, email, subject, date, time } = data;
  if (!name || !email || !date || !time) return;

  const [y, mo, da] = String(date).split("-").map(Number);
  const [h, mi] = String(time).split(":").map(Number);
  const dt = new Date(y, (mo || 1) - 1, da, h || 0, mi || 0, 0, 0);

  const status = pushBot(t("schedule.scheduling"));
  try {
    await scheduleMeeting({
      name,
      email,
      subject: subject || "Consultoría",
      startsAt: dt.toISOString(),
      durationMin: 30,
    });
    status.text = t("schedule.success", {
      datetime: fmtDateTime(dt),
      email,
    });
  } catch (e: unknown) {
    const code =
      (e as { statusCode?: number })?.statusCode ??
      (e as { response?: { status?: number } })?.response?.status;
    status.text = code === 409 ? t("schedule.busy") : t("schedule.error");
  }
  scrollToBottom();
};

const sendMessage = async (preset?: string) => {
  const currentInput = (preset ?? userInput.value).trim();
  if (!currentInput || isSending.value) return;

  messages.value.push({
    id: Date.now(),
    text: currentInput,
    isBot: false,
    timestamp: new Date(),
  });
  userInput.value = "";
  await scrollToBottom();

  // Burbuja del bot que se irá llenando con el streaming.
  messages.value.push({
    id: Date.now() + 1,
    text: "",
    isBot: true,
    timestamp: new Date(),
  });
  const botMessage = messages.value[messages.value.length - 1];

  isSending.value = true;
  isTyping.value = true;
  let raw = "";
  try {
    conversationId.value = await streamChat(
      { message: currentInput, conversationId: conversationId.value },
      (delta) => {
        isTyping.value = false;
        raw += delta;
        // Oculta el token de acción [[AGENDAR]]… mientras muestra el texto.
        botMessage.text = stripAction(raw);
        scrollToBottom();
      },
    );
    // Si el stream no entregó nada, usa el respaldo.
    if (!raw) botMessage.text = getFallbackResponse(currentInput);
  } catch {
    // Backend no disponible: cae al bot básico sin romper la experiencia.
    isTyping.value = false;
    if (!botMessage.text) botMessage.text = getFallbackResponse(currentInput);
  } finally {
    isTyping.value = false;
    isSending.value = false;
    await scrollToBottom();
    // ¿La IA pidió agendar? Ejecuta la reserva real.
    const action = raw.match(AGENDAR_RE);
    if (action) {
      if (!botMessage.text) botMessage.text = t("schedule.confirming");
      await handleSchedule(action[1]);
    }
  }
};

const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    sendMessage();
  }
};

// Close on escape key
watch(
  () => props.isOpen,
  (newVal) => {
    if (newVal) {
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          emit("close");
        }
      };
      document.addEventListener("keydown", handleEscape);
    }
  },
);
</script>

<template>
  <!-- Backdrop -->
  <Transition name="fade">
    <div
      v-if="isOpen"
      class="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
      @click="emit('close')"
    />
  </Transition>

  <!-- Drawer -->
  <Transition name="slide">
    <div
      v-if="isOpen"
      class="fixed right-0 top-0 h-full w-full sm:w-[420px] bg-white dark:bg-slate-900 shadow-2xl z-50 flex flex-col"
    >
      <!-- Header -->
      <div
        class="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-700 bg-gradient-to-r from-primary/10 to-transparent"
      >
        <div class="flex items-center gap-3">
          <div
            class="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center"
          >
            <svg
              class="w-6 h-6 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611l-.628.105a9.002 9.002 0 01-14.814 0l-.628-.105c-1.717-.293-2.3-2.38-1.067-3.611L5 14.5"
              />
            </svg>
          </div>
          <div>
            <h3 class="font-semibold text-slate-900 dark:text-white">
              {{ t("header.title") }}
            </h3>
            <p class="text-xs text-slate-500 dark:text-slate-400">
              {{ t("header.subtitle") }}
            </p>
          </div>
        </div>
        <Button
          variant="bare"
          size="free"
          type="button"
          @click="emit('close')"
          class="p-2 rounded-[5px] hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors [&_svg]:size-5"
        >
          <svg
            class="w-5 h-5 text-slate-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </Button>
      </div>

      <!-- Messages -->
      <div ref="chatContainer" class="flex-1 overflow-y-auto p-4 space-y-4">
        <div
          v-for="message in messages"
          :key="message.id"
          :class="['flex', message.isBot ? 'justify-start' : 'justify-end']"
        >
          <div
            :class="[
              'max-w-[85%] rounded-2xl px-4 py-3 text-sm',
              message.isBot
                ? 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white rounded-tl-sm'
                : 'bg-primary text-white rounded-tr-sm',
            ]"
          >
            <div
              v-if="message.isBot && message.text"
              class="prose-chat"
              v-html="renderMarkdown(message.text)"
            ></div>
            <template v-else>{{ message.text }}</template>
          </div>
        </div>

        <!-- Preguntas precargadas / caminos a seguir -->
        <div v-if="showSuggestions" class="flex flex-wrap gap-2 pt-1">
          <Button
            v-for="s in suggestions"
            :key="s"
            variant="bare"
            size="free"
            type="button"
            @click="sendMessage(s)"
            class="text-xs font-medium px-3 py-1.5 rounded-[5px] border border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/60 transition-colors"
          >
            {{ s }}
          </Button>
        </div>

        <!-- Typing indicator -->
        <div v-if="isTyping" class="flex justify-start">
          <div
            class="bg-slate-100 dark:bg-slate-800 rounded-2xl rounded-tl-sm px-4 py-3"
          >
            <div class="flex gap-1">
              <span
                class="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
                style="animation-delay: 0ms"
              ></span>
              <span
                class="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
                style="animation-delay: 150ms"
              ></span>
              <span
                class="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
                style="animation-delay: 300ms"
              ></span>
            </div>
          </div>
        </div>
      </div>

      <!-- Input -->
      <div class="p-4 border-t border-slate-200 dark:border-slate-700">
        <div class="flex gap-2">
          <input
            v-model="userInput"
            @keydown="handleKeydown"
            type="text"
            :placeholder="t('input.placeholder')"
            class="flex-1 px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-transparent focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-slate-900 dark:text-white placeholder-slate-400"
          />
          <Button
            variant="bare"
            size="free"
            type="button"
            @click="sendMessage()"
            :disabled="!userInput.trim() || isSending"
            class="px-4 py-3 bg-primary hover:bg-primary-dark disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-[5px] transition-all flex items-center justify-center [&_svg]:size-5"
          >
            <svg
              class="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
          </Button>
        </div>
        <p class="text-xs text-slate-400 mt-2 text-center">
          {{ t("input.hint") }}
        </p>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}

/* Markdown renderizado dentro de las burbujas del bot (contenido de v-html,
   por eso se usa :deep). */
.prose-chat :deep(p) {
  margin: 0 0 0.5rem;
}
.prose-chat :deep(p:last-child) {
  margin-bottom: 0;
}
.prose-chat :deep(strong) {
  font-weight: 700;
}
.prose-chat :deep(ul) {
  margin: 0.25rem 0 0.5rem;
  padding-left: 1.15rem;
  list-style: disc;
}
.prose-chat :deep(ul:last-child) {
  margin-bottom: 0;
}
.prose-chat :deep(li) {
  margin: 0.15rem 0;
}
.prose-chat :deep(li)::marker {
  color: rgb(var(--color-primary));
}
.prose-chat :deep(code) {
  background: rgba(148, 163, 184, 0.22);
  padding: 0.05rem 0.3rem;
  border-radius: 0.35rem;
  font-size: 0.85em;
}
.prose-chat :deep(a) {
  color: rgb(var(--color-primary));
  text-decoration: underline;
  text-underline-offset: 2px;
}
</style>

<i18n lang="json">
{
  "es": {
    "greeting": "¡Hola! 👋 Soy el asistente virtual de CODEGAHP. ¿En qué puedo ayudarte hoy?",
    "faq": {
      "precio": "Nuestros precios varían según la complejidad del proyecto. Para software a medida, trabajamos con cotizaciones personalizadas. ¿Te gustaría agendar una llamada para discutir tu proyecto específico?",
      "tiempo": "El tiempo de desarrollo depende del alcance. Proyectos pequeños pueden tomar 2-4 semanas, mientras que sistemas empresariales pueden requerir 2-6 meses. Siempre definimos cronogramas claros desde el inicio.",
      "tecnologia": "Trabajamos con tecnologías modernas: Vue.js, Nuxt, React, Node.js, PHP/Laravel, Python, y bases de datos SQL y NoSQL. Elegimos la mejor tecnología según las necesidades de tu proyecto.",
      "mantenimiento": "¡Sí! Ofrecemos planes de mantenimiento post-lanzamiento que incluyen actualizaciones de seguridad, corrección de bugs, y mejoras continuas. Tu software siempre estará en óptimas condiciones.",
      "soporte": "Brindamos soporte técnico continuo. Nuestros planes incluyen atención por correo, WhatsApp y videollamadas según el nivel de servicio contratado.",
      "proceso": "Nuestro proceso incluye: 1) Análisis de requerimientos, 2) Diseño de arquitectura y UI/UX, 3) Desarrollo iterativo con demos frecuentes, 4) Pruebas rigurosas, 5) Lanzamiento y 6) Soporte continuo.",
      "empresa": "CODEGAHP es una empresa mexicana especializada en desarrollo de software a medida. Nos enfocamos en soluciones empresariales con arquitectura limpia y código mantenible.",
      "servicios": "Ofrecemos: Desarrollo de software a medida, Aplicaciones web y móviles, APIs y microservicios, Consultoría tecnológica, y Migración de sistemas legacy.",
      "contacto": "Puedes contactarnos por WhatsApp, correo electrónico, o agendando una cita directamente en nuestra página. También estamos en LinkedIn, Facebook e Instagram.",
      "ubicacion": "Somos una empresa mexicana con capacidad de trabajar de forma remota con clientes de toda Latinoamérica y el mundo.",
      "hola": "¡Hola! 👋 ¿En qué puedo ayudarte hoy? Puedes preguntarme sobre nuestros servicios, precios, tecnologías que usamos, o cualquier duda sobre tu proyecto.",
      "gracias": "¡Con gusto! Si tienes más preguntas, no dudes en escribirme. También puedes contactar directamente a nuestro equipo para una asesoría personalizada. 🚀",
      "default": "Interesante pregunta. Te recomiendo contactar directamente a nuestro equipo para obtener información más detallada. Puedes escribirnos por WhatsApp o agendar una videollamada. ¿Hay algo más en lo que pueda orientarte?"
    },
    "suggestions": {
      "services": "¿Qué servicios ofrecen?",
      "price": "¿Cuánto cuesta un sitio web?",
      "lidia": "¿Qué es LIDIA?",
      "schedule": "¿Cómo agendo una llamada?"
    },
    "schedule": {
      "scheduling": "Agendando tu reunión… ⏳",
      "success": "✅ ¡Listo! Agendé tu videollamada para el **{datetime}**. Te envié la invitación con el enlace a **{email}** (revisa spam). ¡Nos vemos!",
      "busy": "Ese horario ya está ocupado 😕. ¿Probamos con otra hora u otro día?",
      "error": "No pude agendarla en este momento. ¿Lo intentamos de nuevo, o prefieres agendar desde la página de contacto?",
      "confirming": "Perfecto, agendo tu reunión."
    },
    "header": {
      "title": "Agente de IA",
      "subtitle": "CODEGAHP Assistant"
    },
    "input": {
      "placeholder": "Escribe tu pregunta...",
      "hint": "Presiona Enter para enviar"
    }
  },
  "en": {
    "greeting": "Hi! 👋 I'm the CODEGAHP virtual assistant. How can I help you today?",
    "faq": {
      "precio": "Our pricing varies depending on the complexity of the project. For custom software, we work with personalized quotes. Would you like to schedule a call to discuss your specific project?",
      "tiempo": "Development time depends on the scope. Small projects can take 2-4 weeks, while enterprise systems may require 2-6 months. We always define clear timelines from the start.",
      "tecnologia": "We work with modern technologies: Vue.js, Nuxt, React, Node.js, PHP/Laravel, Python, and SQL and NoSQL databases. We choose the best technology based on your project's needs.",
      "mantenimiento": "Yes! We offer post-launch maintenance plans that include security updates, bug fixes, and continuous improvements. Your software will always be in top shape.",
      "soporte": "We provide ongoing technical support. Our plans include assistance via email, WhatsApp, and video calls depending on the service level you choose.",
      "proceso": "Our process includes: 1) Requirements analysis, 2) Architecture and UI/UX design, 3) Iterative development with frequent demos, 4) Rigorous testing, 5) Launch, and 6) Ongoing support.",
      "empresa": "CODEGAHP is a Mexican company specialized in custom software development. We focus on enterprise solutions with clean architecture and maintainable code.",
      "servicios": "We offer: Custom software development, Web and mobile apps, APIs and microservices, Technology consulting, and Legacy system migration.",
      "contacto": "You can reach us via WhatsApp, email, or by scheduling an appointment directly on our website. We're also on LinkedIn, Facebook, and Instagram.",
      "ubicacion": "We're a Mexican company able to work remotely with clients across Latin America and around the world.",
      "hola": "Hi! 👋 How can I help you today? You can ask me about our services, pricing, the technologies we use, or any questions about your project.",
      "gracias": "You're welcome! If you have more questions, don't hesitate to write to me. You can also contact our team directly for personalized advice. 🚀",
      "default": "Great question. I recommend contacting our team directly for more detailed information. You can write to us on WhatsApp or schedule a video call. Is there anything else I can help you with?"
    },
    "suggestions": {
      "services": "What services do you offer?",
      "price": "How much does a website cost?",
      "lidia": "What is LIDIA?",
      "schedule": "How do I schedule a call?"
    },
    "schedule": {
      "scheduling": "Scheduling your meeting… ⏳",
      "success": "✅ All set! I scheduled your video call for **{datetime}**. I sent the invitation with the link to **{email}** (check your spam folder). See you there!",
      "busy": "That time slot is already taken 😕. Shall we try another time or another day?",
      "error": "I couldn't schedule it right now. Should we try again, or would you rather schedule from the contact page?",
      "confirming": "Great, I'll schedule your meeting."
    },
    "header": {
      "title": "AI Agent",
      "subtitle": "CODEGAHP Assistant"
    },
    "input": {
      "placeholder": "Type your question...",
      "hint": "Press Enter to send"
    }
  }
}
</i18n>
