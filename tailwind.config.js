/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        'jetbrains': ['JetBrains Mono', 'monospace']
      },
    },
  },
  plugins: [],
}
