import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3182CE',
        bgblue: "#F7FAFC",
        bgblue200: "#E2EDF5",
        darkblue: "#132537",
        darkblue200: "#00162D",
      },
    },
  },
  plugins: [],
}
export default config
