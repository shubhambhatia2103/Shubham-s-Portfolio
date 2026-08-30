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
        // 60% — dominant neutral surface
        surface: {
          DEFAULT: "#F6F7F9",
          elevated: "#FFFFFF",
          dark: "#081B2E",
          "dark-elevated": "#0F2A43",
        },
        // 30% — brand navy: headings, primary text, nav, footer, dark sections
        navy: "#0A2540",
        // borders / dividers
        line: {
          DEFAULT: "#E2E8F0",
          dark: "#1E3A56",
        },
        // body copy
        body: {
          DEFAULT: "#475569",
          muted: "#64748B",
          dark: "#F6F7F9",
          "muted-dark": "#94A3B8",
        },
        // 10% — teal accent: CTAs, links, active/highlight states
        accent: {
          DEFAULT: "#14B8A6",
          text: "#0F766E",
          dark: "#2DD4BF",
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