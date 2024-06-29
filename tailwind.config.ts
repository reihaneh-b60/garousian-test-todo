import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors : {
        garousian : {
          white : '#fff',
          blue : '#5274F9',
          red : '#EA2D2D',
          gray : {
            common : '#444444',
            disabled : '#777777'
          },
        }
      }
    },
  },
  plugins: [],
};
export default config;
