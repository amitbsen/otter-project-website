module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      sans: ["AvenirLTPro", "Helvetica", "Arial", "sans-serif"],
    },
    extend: {
      colors: {
        "green-blue": "#364f53",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [`gatsby-plugin-postcss`],
};
