import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
				blue: {
					50: "#F3F8FF",
          100: "#E7F2FE",
          200: "#C3DDFE",
          300: "#9FC9FD",
          400: "#56A1FB",
          500: "#0E78F9",
          600: "#0D6CE0",
          700: "#084895",
          800: "#063670",
          900: "#04244B",
        },
        smoke: {
          50: '#F5F5F5',
          100: '#EFEFEF',
          200: '#DCDCDC',
          300: '#BDBDBD',
          400: '#989898',
          500: '#7C7C7C',
          600: '#656565',
          700: '#525252',
          800: '#464646',
          900: '#3D3D3D',
          950: '#292929'
        }
      },
      fontFamily: {
        playwrite: ['"Playwrite CU"', 'sans-serif'],
      }
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
