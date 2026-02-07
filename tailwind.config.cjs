/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Space Grotesk", "system-ui", "sans-serif"],
        serif: ["Source Serif 4", "serif"],
      },
      colors: {
        ink: "#f8f7f2",
        muted: "#b7c2cb",
        accent: "#f2a019",
        accentDark: "#d08814",
        canvas: "#0b1d2a",
      },
      boxShadow: {
        card: "0 30px 80px rgba(3, 12, 20, 0.35)",
      },
    },
  },
  plugins: [],
};
