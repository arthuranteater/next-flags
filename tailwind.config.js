/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["var(--font-nunito-sans)", "sans-serif"],
      },
      colors: {
        "dark-txt": "hsl(0, 0%, 100%)",
        "dark-input": "hsl(0, 0%, 100%)",
        "dark-bg": "hsl(207, 26%, 17%)",
        "dark-el": "hsl(209, 23%, 22%)",
        "color-txt": "hsl(200, 15%, 8%)",
        "color-input": "hsl(0, 0%, 52%)",
        "color-bg": "hsl(0, 0%, 98%)",
        "color-el": "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
};

// - Dark Blue (Elements): `hsl(209, 23%, 22%)`
// - Very Dark Blue (Background): `hsl(207, 26%, 17%)`
// - White (Text): `hsl(0, 0%, 100%)`

// **Light Mode**

// - Very Dark Blue (Text): `hsl(200, 15%, 8%)`
// - Dark Gray (Input): `hsl(0, 0%, 52%)`
// - Very Light Gray (Background): `hsl(0, 0%, 98%)`
// - White (Elements): `hsl(0, 0%, 100%)`
