/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{ts,tsx,vue}',
    './components/**/*.{ts,tsx,vue}',
    './app/**/*.{ts,tsx,vue}',
    './src/**/*.{ts,tsx,vue}',
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        // Ancho máximo unificado en todo el sitio (= max-w-7xl / 1280px)
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        // Colores principales usando nomenclatura estándar de Tailwind
        primary: {
          DEFAULT: "rgb(var(--color-primary) / <alpha-value>)",
          dark: "rgb(var(--color-primary-dark) / <alpha-value>)",
          light: "rgb(var(--color-primary-light) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "#1A1A2E",      // Azul oscuro profundo
        },
        // Colores para las líneas de circuito (mantener como están)
        circuit: {
          cyan: "#00CED1",
          teal: "#40E0D0",
          mint: "#48D1CC",
          turquoise: "#2DCE9A",
          light: "#7FFFD4",
        },
      },
      animation: {
        "circuit-pulse": "circuitPulse 3s ease-in-out infinite",
        "circuit-flow": "circuitFlow 4s linear infinite",
        "circuit-glow": "circuitGlow 2s ease-in-out infinite alternate",
        "fade-in-up": "fadeInUp 0.6s ease-out",
      },
      keyframes: {
        circuitPulse: {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "1" },
        },
        circuitFlow: {
          "0%": { strokeDashoffset: "100" },
          "100%": { strokeDashoffset: "0" },
        },
        circuitGlow: {
          "0%": { filter: "drop-shadow(0 0 2px rgba(45, 206, 154, 0.3))" },
          "100%": { filter: "drop-shadow(0 0 8px rgba(45, 206, 154, 0.8))" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}