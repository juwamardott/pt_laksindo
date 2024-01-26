/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        economika: ["Economica"],
        poppins: ["Poppins"],
        kulim: ["Kulim Park"],
      },
      Color: {
        background: ["#8f7767"],
      },
    },
  },
  plugins: [],
};
