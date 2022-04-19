module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      gridTemplateColumns: {
        test: "1fr 1fr 2fr",
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
    require("autoprefixer"),
    require("flowbite/plugin"),
  ],
};
