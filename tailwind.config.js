/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FFE4B5", // Deeper cream (closer to a warm beige)
        lavender: "#C4B8E6", // Deeper lavender with muted purple tones
        greenAccent: "#82C685", // Richer green accent
        coralPink: "#E85A5A", // Deeper coral pink for the background
        darkPink: "#B04040",
        primary: "#FFD700",
        secondary: "#87CEFA",
        darkText: "#333333",
      },
      fontFamily: {
        playful: ["Caveat", "cursive"],
        body: ["Open Sans", "sans-serif"],
      },
      backgroundImage: {
        artisticBg: "url('https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTEwL2hpcHBvdW5pY29ybl9hcnRfc3VwcGxpZXNfaXNvbGF0ZWRfb25fd2hpdGVfYmFja2dyb3VuZF9hNjE1MDk5Yy01MTc3LTRhMWItYjRjYy00NTAzZGUxMTY1ODEucG5n.png')",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        float: "float 3s infinite ease-in-out",
      },
    },
  },
  plugins: [],
}

