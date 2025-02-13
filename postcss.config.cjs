module.exports = {
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
  ],
  variants: {
    extend: {
      backgroundColor: ["peer-checked"],
    }
  }
};
