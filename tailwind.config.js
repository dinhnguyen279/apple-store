/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "8px 8px 16px 0 rgba(0, 0, 0, 0.08)",
        "3xlHover": "8px 8px 16px 0 rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
