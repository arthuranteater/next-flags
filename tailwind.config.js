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
        "d-txt": "hsl(0, 0%, 100%)",
        "d-input": "hsl(209, 23%, 22%)",
        "d-bg": "hsl(207, 26%, 17%)",
        "d-el": "hsl(209, 23%, 22%)",
        txt: "hsl(200, 15%, 8%)",
        input: "hsl(0, 0%, 52%)",
        bg: "hsl(0, 0%, 98%)",
        el: "hsl(0, 0%, 100%)",
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
