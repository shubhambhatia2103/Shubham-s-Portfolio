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