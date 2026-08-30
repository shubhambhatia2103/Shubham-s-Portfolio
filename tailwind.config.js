/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "sm": "560px",
      },
      colors: {
        // 60% — dominant neutral surface (Marshmallow)
        surface: {
          DEFAULT: "#f0eee4",
          elevated: "#ffffff",
          dark: "#2b241f",
          "dark-elevated": "#3f352f",
        },
        // 30% — brand espresso (Delicioso): headings, primary text, nav, footer, dark sections
        ink: "#3f352f",
        // borders / dividers
        line: {
          DEFAULT: "#e0dccd",
          dark: "#5a4d43",
        },
        // body copy
        body: {
          DEFAULT: "#5a4d43",
          muted: "#746657",
          dark: "#f0eee4",
        },
        "muted-dark": "#cabfb0",
        // 10% — Doe/caramel accent family
        caramel: {
          DEFAULT: "#b98e68", // Doe — LARGE fills only: decorative shapes, stat numbers, hover fills. Never text/borders/rings.
          text: "#7c5a3a", // roasted caramel — text/links/accent CTA fill
          dark: "#d4ad86", // light caramel — text/accent on espresso (dark-mode or feature-section) surfaces
        },
        // semantic states, retinted warm, centralized as tokens
        success: {
          DEFAULT: "#4d6b3f",
          dark: "#9bbf8a",
        },
        danger: {
          DEFAULT: "#9a3b2e",
          dark: "#f2a488",
        },
      },
      fontFamily: {
        cursive: [' "Dancing Script" ',' "Caveat" ','cursive'],
        playFair: ['"Playfair Display"', 'serif'],
        lato: ['"Lato"', 'sans-serif'],
      },
      animation: {
        blob: "blob 7s infinite",
        fadeIn: "fadeIn 0.6s ease-out forwards",
      },
      keyframes: {
        blob: {
          "0%, 100%": { borderRadius: "50% 50% 50% 50%" },
          "25%": { borderRadius: "60% 40% 60% 40%" },
          "50%": { borderRadius: "50% 60% 40% 60%" },
          "75%": { borderRadius: "40% 60% 60% 40%" },
        },
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(12px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
}