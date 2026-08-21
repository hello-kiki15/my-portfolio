/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#fafaf8",
        "paper-soft": "#f3f2ed",
        ink: "#17181c",
        "ink-soft": "#5a5e66",
        accent: "#0e9c8c",
        line: "#e4e2da",
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      keyframes: {
        "pulse-dot": {
          "0%, 100%": { opacity: 1, transform: "scale(1)" },
          "50%": { opacity: 0.45, transform: "scale(0.8)" },
        },
        "bounce-y": {
          "0%, 100%": { transform: "translateY(0)", opacity: 0.5 },
          "50%": { transform: "translateY(6px)", opacity: 1 },
        },
      },
      animation: {
        "pulse-dot": "pulse-dot 2.6s ease-in-out infinite",
        "bounce-y": "bounce-y 2.2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
