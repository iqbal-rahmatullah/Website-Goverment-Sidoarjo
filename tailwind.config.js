/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      keyframes: {
        heroLogo: {
          '0%, 100%': { transform: 'translateY(-4px)' },
          '50%': { transform: 'translateY(4px)' },
        },
    },
    animation: {
        mantul: 'heroLogo 1s ease-in-out infinite',
    },
      colors: {
        "bright" : "#EEEEEE",
        "primary" : "#319270",
        "secondary" : "#fbbf24"
      }
    },
  },
  plugins: [
    import('flowbite/plugin'),
    import('tailwindcss-animated')
  ],
}

