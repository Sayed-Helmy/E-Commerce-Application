module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        test: "1fr 1fr 2fr",
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require('@tailwindcss/forms'),
  ],
};
