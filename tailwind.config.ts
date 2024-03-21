import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main_pink: "#FFD4E5",
        main_purple: "#E0CDFF",
        main_blue: "#EAF5FF",
        dark_blue: "#0B2F73",
        main_yellow: "#FEFFC5",
        main_green: "#B7D784",
      },
      fontFamily: {
        poppins: ["Poppins"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
