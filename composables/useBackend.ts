/**
 * Cliente del microservicio NestJS (microservicios-web).
 *
 * Endpoints usados (ya listos en el backend):
 *   - POST /email/send   → encola un correo (plantilla `generic`).  Contacto.
 *   - POST /meetings      → crea videollamada + invitación + recordatorios. Agenda.
 *
 * La URL base viene de runtimeConfig.public.apiBase (NUXT_PUBLIC_API_BASE).
 * El backend valida con CORS por lista blanca: incluye el origen del sitio
 * (http://localhost:3000 en dev y https://codegahp.com en prod) en CORS_ORIGINS.
 */

const CONTACT_INBOX = "contacto@codegahp.com";

export interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

export interface MeetingPayload {
  name: string;
  email: string;
  subject: string;
  /** Instante de inicio en ISO-8601 (ej. Date.toISOString()). */
  startsAt: string;
  durationMin?: number;
  timezone?: string;
}

/** Escapa texto de usuario antes de incrustarlo en el HTML del correo. */
function escapeHtml(input: string): string {
  return input.replace(
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
}

export function useBackend() {
  const {
    public: { apiBase },
  } = useRuntimeConfig();
  const base = String(apiBase).replace(/\/$/, "");

  /** Envía el mensaje del formulario de contacto al buzón de CODEGAHP. */
  async function sendContactMessage(
    payload: ContactPayload,
  ): Promise<{ jobId: string; logId: string }> {
    const name = escapeHtml(payload.name);
    const email = escapeHtml(payload.email);
    const message = escapeHtml(payload.message).replace(/\n/g, "<br>");

    const bodyHtml =
      `<p style="margin:0 0 10px;"><strong>Nombre:</strong> ${name}</p>` +
      `<p style="margin:0 0 10px;"><strong>Correo:</strong> ` +
      `<a href="mailto:${email}" style="color:#2f6a1e; text-decoration:none;">${email}</a></p>` +
      `<p style="margin:0 0 6px;"><strong>Mensaje:</strong></p>` +
      `<p style="margin:0 0 18px;">${message}</p>` +
      `<p style="margin:0; padding-top:12px; border-top:1px solid #eaeaea; color:#8a8a8a; font-size:13px;">` +
      `Responde a este correo para contestarle directamente a ${name}.</p>`;

    // 1) Notificación a CODEGAHP (lo importante: el mensaje del visitante).
    const result = await $fetch<{ jobId: string; logId: string }>(
      `${base}/email/send`,
      {
        method: "POST",
        body: {
          to: CONTACT_INBOX,
          // Al responder desde tu buzón, la respuesta llega al visitante.
          replyTo: payload.email,
          subject: `Nuevo mensaje web — ${payload.name || "contacto"}`.slice(
            0,
            200,
          ),
          template: "generic",
          data: {
            heading: "Nuevo mensaje desde codegahp.com",
            bodyHtml,
          },
        },
      },
    );

    // 2) Acuse automático al visitante (desde nuestro servicio, con branding
    //    CODEGAHP). Es secundario: si falla, no rompe el envío principal.
    const ackHtml =
      `<p style="margin:0 0 14px;">Hola ${name || "👋"},</p>` +
      `<p style="margin:0 0 14px;">¡Qué gusto leerte! Ya recibimos tu mensaje y nuestro equipo lo está revisando. En CODEGAHP construimos software, sitios web y automatizaciones para negocios del sureste de México — estás en buenas manos.</p>` +
      `<p style="margin:0 0 14px;"><strong>En menos de 24 horas</strong> te escribimos con los siguientes pasos. ¿Es urgente? Escríbenos por WhatsApp al ` +
      `<a href="https://wa.me/529381065606" style="color:#2f6a1e; text-decoration:none;">+52 938 106 5606</a>.</p>` +
      `<p style="margin:0 0 18px;">Mientras tanto, cuéntanos: ¿qué objetivo quieres lograr con tu proyecto en los próximos 30 días?</p>` +
      `<p style="margin:0 0 18px;">Un saludo,<br /><strong>Equipo CODEGAHP</strong></p>` +
      `<p style="margin:0; padding-top:12px; border-top:1px solid #eaeaea; color:#8a8a8a; font-size:13px;">Copia de tu mensaje: "${message}"</p>`;

    try {
      await $fetch(`${base}/email/send`, {
        method: "POST",
        body: {
          to: payload.email,
          // Sin replyTo: al responder, el visitante te escribe a CODEGAHP.
          subject: "Gracias por escribir a CODEGAHP",
          template: "generic",
          data: {
            heading: "¡Gracias por escribirnos!",
            bodyHtml: ackHtml,
          },
        },
      });
    } catch {
      // El acuse es secundario; no bloquea la confirmación al usuario.
    }

    return result;
  }

  /**
   * Agenda una videollamada: crea la reunión (liga Jitsi), envía la invitación
   * por correo al visitante y a CODEGAHP, y programa el recordatorio.
   */
  async function scheduleMeeting(payload: MeetingPayload) {
    // Asistentes: el visitante y CODEGAHP. Si el correo del visitante es el de
    // CODEGAHP, no lo dupliques (el modelo exige email único por reunión).
    const attendees = [{ email: payload.email, name: payload.name }];
    if (payload.email.trim().toLowerCase() !== CONTACT_INBOX) {
      attendees.push({ email: CONTACT_INBOX, name: "CODEGAHP" });
    }

    return await $fetch(`${base}/meetings`, {
      method: "POST",
      body: {
        title: `Consultoría CODEGAHP — ${payload.name}`.slice(0, 200),
        description: payload.subject,
        startsAt: payload.startsAt,
        durationMin: payload.durationMin ?? 30,
        timezone: payload.timezone ?? "America/Mexico_City",
        organizerName: "CODEGAHP",
        organizerEmail: CONTACT_INBOX,
        attendees,
        reminderMinutesBefore: 30,
      },
    });
  }

  const safeJson = (s: string): Record<string, unknown> | null => {
    try {
      return JSON.parse(s);
    } catch {
      return null;
    }
  };

  /** Chat con Gemini, respuesta completa en un solo JSON. */
  async function sendChat(params: {
    message: string;
    conversationId?: string;
    userRef?: string;
  }): Promise<{ conversationId: string; reply: string }> {
    return await $fetch(`${base}/chat`, { method: "POST", body: params });
  }

  /**
   * Chat con Gemini en streaming (Server-Sent Events sobre POST).
   * Llama `onDelta` con cada fragmento y devuelve el conversationId final.
   */
  async function streamChat(
    params: { message: string; conversationId?: string; userRef?: string },
    onDelta: (delta: string, conversationId: string) => void,
  ): Promise<string> {
    const res = await fetch(`${base}/chat/stream`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(params),
    });
    if (!res.ok || !res.body) throw new Error(`chat stream HTTP ${res.status}`);

    const reader = res.body.getReader();
    const decoder = new TextDecoder();
    let buffer = "";
    let convId = params.conversationId ?? "";

    for (;;) {
      const { done, value } = await reader.read();
      if (done) break;
      buffer += decoder.decode(value, { stream: true });

      // Los eventos SSE se separan por línea en blanco.
      const events = buffer.split("\n\n");
      buffer = events.pop() ?? "";

      for (const evt of events) {
        let type = "message";
        let data = "";
        for (const line of evt.split("\n")) {
          if (line.startsWith("event:")) type = line.slice(6).trim();
          else if (line.startsWith("data:")) data += line.slice(5).trim();
        }
        if (!data) continue;
        if (data === "[DONE]") return convId;
        if (type === "error") {
          const msg = (safeJson(data)?.message as string) ?? "Error de IA";
          throw new Error(msg);
        }
        const parsed = safeJson(data);
        if (parsed?.conversationId) convId = parsed.conversationId as string;
        if (parsed?.delta) onDelta(parsed.delta as string, convId);
      }
    }
    return convId;
  }

  /** Horarios ocupados (solo inicio/fin) para validar la agenda. */
  async function getBusySlots(): Promise<
    { startsAt: string; endsAt: string }[]
  > {
    return await $fetch(`${base}/meetings/busy`);
  }

  return {
    apiBase: base,
    sendContactMessage,
    scheduleMeeting,
    getBusySlots,
    sendChat,
    streamChat,
  };
}
