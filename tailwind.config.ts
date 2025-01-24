import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#61278B",
        btntext: "rgba(55, 126, 54, 1)",
        "custom-gray": "rgba(102, 102, 102, 1)",
      },
      backgroundColor: {
        'custom-green': 'rgba(224, 240, 228, 1)',
        'input-bg': 'rgba(236, 209, 255, 1)',
        lightpurple:' rgba(252, 248, 255, 1)',
        'dark-blue': '#3642CA',
        'border-line':'#F7ECFF',

      },
      boxShadow: {
        'custom-purple': '0 0 2px #E7C5FF',
      },
    },
  },
  plugins: [],
};
export default config;
