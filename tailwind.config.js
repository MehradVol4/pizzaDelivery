/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#fff8eb",
          100: "#ffefc7",
          200: "#ffdd8a",
          300: "#ffc24a",
          400: "#ffad1f",
          500: "#f28c00",
          600: "#c96400",
          700: "#9b4700",
          800: "#763700",
          900: "#5f2f00",
        },
        surface: {
          1: "rgb(255 255 255)",
          2: "rgb(250 250 249)",
          3: "rgb(245 245 244)",
          dark1: "rgb(13 13 15)",
          dark2: "rgb(19 19 22)",
          dark3: "rgb(26 26 30)",
        },
      },
      fontFamily: {
        mono: ["Roboto Mono", "monospace"],
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.10)",
        ring: "0 0 0 6px rgba(242, 140, 0, 0.18)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        shimmer: "shimmer 1.6s linear infinite",
      },
    },
  },
  plugins: [],
};
