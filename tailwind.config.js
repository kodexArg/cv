/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  "theme": {
    "extend": {
      width: {
        'fib-5': 'calc(100% * 5 / 13)',
        'fib-8': 'calc(100% * 8 / 13)'
      },
      "fontFamily": {
        'lato': ['Lato', 'sans-serif'],
        'oswald': ['Oswald', 'sans-serif'],
      },
      "colors": {
        "mate": {
          "50": "#f0f2f0",
          "100": "#e2e6e1",
          "200": "#c5cdc4",
          "300": "#a7b3a6",
          "400": "#8a9a89",
          "500": "#6d816b",
          "600": "#576756",
          "700": "#414d40",
          "800": "#2c342b",
          "900": "#161a15"
        }
      }
    }
  },
  plugins: [],
}

