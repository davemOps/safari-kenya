import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { forest: "#183A2A", charcoal: "#171717", cream: "#F4F0E7", sand: "#D8C7A3", terracotta: "#A85D3A" },
      fontFamily: { serif: ['"Times New Roman"', "Times", "serif"], sans: ['"Times New Roman"', "Times", "serif"] },
      keyframes: { cue: { "0%,100%": { transform: "translateY(0)", opacity: ".5" }, "50%": { transform: "translateY(8px)", opacity: "1" } } },
      animation: { cue: "cue 2.4s ease-in-out infinite" },
    },
  },
  plugins: [],
};
export default config;
