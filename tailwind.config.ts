import type { Config } from "tailwindcss";
import bg from "./public/bg.jpg"

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg': "url('/public/bg.jpg')",
        
      },
    },
  },
  plugins: [],
} satisfies Config;
