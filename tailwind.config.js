/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        linen: "#F4EFE7", // warm paper background
        paper: "#FBF8F2", // lifted surface
        shade: "#EBE3D6", // recessed surface
        ink: "#171310", // warm near-black text
        muted: "#6E6459", // secondary text
        madder: "#8A3B2E", // thread-red accent (used sparingly)
        line: "#DED4C5", // hairline borders
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'Cambria', 'serif'],
        sans: ['"Hanken Grotesk"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        eyebrow: "0.22em",
      },
      maxWidth: {
        prose: "34rem",
      },
      transitionTimingFunction: {
        expo: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        "kenburns": {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.08)" },
        },
      },
      animation: {
        kenburns: "kenburns 18s ease-out forwards",
      },
    },
  },
  plugins: [],
};
