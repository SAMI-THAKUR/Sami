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
        darkBG: "#181C14", // Dark theme background
        BG: "#F5F5F5", // Light theme background - a softer off-white
        darkHEADING: "#77CDFF", // Dark theme heading
        HEADING: "#024CAA", // Light theme heading - keeping it bold
        darkSUBTEXT: "#FFFAFA", // Dark theme subtext
        SUBTEXT: "#333333", // Light theme subtext - darker for contrast
        darkSBG: "#1E201E", // Dark theme sidebar background
        SBG: "#E0E0E0", // Light theme sidebar background - softer gray
        darkBorder: "#2F2F2F", // Dark theme border
        lightBorder: "#BFBFBF", // Light theme border
        accent: "#2F81AE", // Accent color for light theme buttons/links
      },

      fontFamily: {
        sans: ["ui-sans-serif", "system-ui"],
        serif: ["ui-serif", "Georgia"],
        staat: ["Saira Stencil One", "sans-serif"],
        robo: ["Chakra Petch", "sans-serif", "system-ui"],
        tourney: ["Tourney", "sans-serif"],
      },
    },
    screens: {
      xsm: "500px",
      sm: "800px",
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
      heading: "75px",
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
