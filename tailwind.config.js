module.exports = {
  mode: "jit",
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        shopzone_blue: {
          light: "#4c6585",
          DEFAULT: "#083B66",
        },
        light_green: "#74D14C",
        normal_green: "#008000",
        gray_color: "#EAEDED",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
