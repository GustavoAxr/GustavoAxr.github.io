<script setup lang="ts">
import { ref, nextTick, watch } from "vue";

interface Props {
  isOpen: boolean;
}

const props = defineProps<Props>();
const emit = defineEmits<{
  (e: "close"): void;
}>();

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
    text: "¡Hola! 👋 Soy el asistente virtual de CODEGAHP. ¿En qué puedo ayudarte hoy?",
    isBot: true,
    timestamp: new Date(),
  },
]);
const isTyping = ref(false);
const chatContainer = ref<HTMLElement | null>(null);

// FAQ responses based on keywords
const faqResponses: Record<string, string> = {
  precio:
    "Nuestros precios varían según la complejidad del proyecto. Para software a medida, trabajamos con cotizaciones personalizadas. ¿Te gustaría agendar una llamada para discutir tu proyecto específico?",
  costo:
    "Nuestros precios varían según la complejidad del proyecto. Para software a medida, trabajamos con cotizaciones personalizadas. ¿Te gustaría agendar una llamada para discutir tu proyecto específico?",
  tiempo:
    "El tiempo de desarrollo depende del alcance. Proyectos pequeños pueden tomar 2-4 semanas, mientras que sistemas empresariales pueden requerir 2-6 meses. Siempre definimos cronogramas claros desde el inicio.",
  tecnología:
    "Trabajamos con tecnologías modernas: Vue.js, Nuxt, React, Node.js, PHP/Laravel, Python, y bases de datos SQL y NoSQL. Elegimos la mejor tecnología según las necesidades de tu proyecto.",
  tecnologias:
    "Trabajamos con tecnologías modernas: Vue.js, Nuxt, React, Node.js, PHP/Laravel, Python, y bases de datos SQL y NoSQL. Elegimos la mejor tecnología según las necesidades de tu proyecto.",
  mantenimiento:
    "¡Sí! Ofrecemos planes de mantenimiento post-lanzamiento que incluyen actualizaciones de seguridad, corrección de bugs, y mejoras continuas. Tu software siempre estará en óptimas condiciones.",
  soporte:
    "Brindamos soporte técnico continuo. Nuestros planes incluyen atención por correo, WhatsApp y videollamadas según el nivel de servicio contratado.",
  proceso:
    "Nuestro proceso incluye: 1) Análisis de requerimientos, 2) Diseño de arquitectura y UI/UX, 3) Desarrollo iterativo con demos frecuentes, 4) Pruebas rigurosas, 5) Lanzamiento y 6) Soporte continuo.",
  empresa:
    "CODEGAHP es una empresa mexicana especializada en desarrollo de software a medida. Nos enfocamos en soluciones empresariales con arquitectura limpia y código mantenible.",
  servicios:
    "Ofrecemos: Desarrollo de software a medida, Aplicaciones web y móviles, APIs y microservicios, Consultoría tecnológica, y Migración de sistemas legacy.",
  contacto:
    "Puedes contactarnos por WhatsApp, correo electrónico, o agendando una cita directamente en nuestra página. También estamos en LinkedIn, Facebook e Instagram.",
  ubicación:
    "Somos una empresa mexicana con capacidad de trabajar de forma remota con clientes de toda Latinoamérica y el mundo.",
  hola: "¡Hola! 👋 ¿En qué puedo ayudarte hoy? Puedes preguntarme sobre nuestros servicios, precios, tecnologías que usamos, o cualquier duda sobre tu proyecto.",
  gracias:
    "¡Con gusto! Si tienes más preguntas, no dudes en escribirme. También puedes contactar directamente a nuestro equipo para una asesoría personalizada. 🚀",
};

const defaultResponse =
  "Interesante pregunta. Te recomiendo contactar directamente a nuestro equipo para obtener información más detallada. Puedes escribirnos por WhatsApp o agendar una videollamada. ¿Hay algo más en lo que pueda orientarte?";

const getBotResponse = (input: string): string => {
  const lowerInput = input.toLowerCase();

  for (const [keyword, response] of Object.entries(faqResponses)) {
    if (lowerInput.includes(keyword)) {
      return response;
    }
  }

  return defaultResponse;
};

const scrollToBottom = async () => {
  await nextTick();
  if (chatContainer.value) {
    chatContainer.value.scrollTop = chatContainer.value.scrollHeight;
  }
};

const sendMessage = async () => {
  if (!userInput.value.trim()) return;

  const userMessage: Message = {
    id: Date.now(),
    text: userInput.value,
    isBot: false,
    timestamp: new Date(),
  };

  messages.value.push(userMessage);
  const currentInput = userInput.value;
  userInput.value = "";

  await scrollToBottom();

  // Simulate typing delay
  isTyping.value = true;
  await new Promise((resolve) =>
    setTimeout(resolve, 1000 + Math.random() * 1000),
  );
  isTyping.value = false;

  const botMessage: Message = {
    id: Date.now() + 1,
    text: getBotResponse(currentInput),
    isBot: true,
    timestamp: new Date(),
  };

  messages.value.push(botMessage);
  await scrollToBottom();
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
              Agente de IA
            </h3>
            <p class="text-xs text-slate-500 dark:text-slate-400">
              CODEGAHP Assistant
            </p>
          </div>
        </div>
        <button
          @click="emit('close')"
          class="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
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
        </button>
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
            {{ message.text }}
          </div>
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
            placeholder="Escribe tu pregunta..."
            class="flex-1 px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-transparent focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-slate-900 dark:text-white placeholder-slate-400"
          />
          <button
            @click="sendMessage"
            :disabled="!userInput.trim()"
            class="px-4 py-3 bg-primary hover:bg-primary-dark disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-xl transition-all flex items-center justify-center"
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
          </button>
        </div>
        <p class="text-xs text-slate-400 mt-2 text-center">
          Presiona Enter para enviar
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
</style>
