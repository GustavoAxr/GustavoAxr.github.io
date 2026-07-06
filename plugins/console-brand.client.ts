// Saludo de marca en la consola del navegador — para devs curiosos.
export default defineNuxtPlugin(() => {
  if (import.meta.dev) return;
  // eslint-disable-next-line no-console
  console.log(
    "%cCODE%cGAHP %c— software que aguanta el trabajo real\n" +
      "%c¿Curioseando el código? Eso nos gusta. Escríbenos: contacto@codegahp.com",
    "color:#64748b;font-size:16px;font-weight:800",
    "color:#2DCE9A;font-size:16px;font-weight:800",
    "color:#94a3b8;font-size:12px",
    "color:#2DCE9A;font-size:12px",
  );
});
