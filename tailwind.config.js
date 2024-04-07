/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gap: {
        l: "200px",
        s: "100px",
        m: "50px",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#c5c5c5",
        background: "#f4f4f4",
        darkbg: "#21262d",
        secondary: "#B4B4B8",
        dsecondary: "#212A3E",
        htext: "#272829",
        dhtext: "#d5d5d5",
        text: "#333333",
        dtext: "#d6d6d6",
      },
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui"],
        serif: ["ui-serif", "Georgia"],
        staat: ["Author", "sans-serif"],
        robo: ["Roboto Mono", "ui-monospace", "system-ui"],
      },
    },
    screens: {
      xsm: "500px",
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "800px",
      // => @media (min-width: 768px) { ... }
      lg: "1200px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
      heading: "70px",
      mheading: "65px",
      subheading: "43px",
      msubheading: "37px",
      icon: "28px",
      para: "22px",
      mpara: "23px",
      small: "15px",
    },
  },
  plugins: [],
};
