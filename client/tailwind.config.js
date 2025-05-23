/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // This enables dark mode
  theme: {
    extend: {
      fontFamily: {
        Lobster: ["Lobster", "cursive"],
        Script: ["Dancing Script", "cursive"], // Extend Tailwind to use Lobster font
      },
      translate: {
        "75p": "-75%",
      },
      animation: {
        scroll: "scroll 25s linear infinite",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
