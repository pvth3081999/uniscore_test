import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'blue-win': "var(--Button-Primary-TextBrand, #2187E5)",
        'green-custom': "var(--Colors-Semantic-Success-green-600, #2EA76F)",
        'yellow-custom': "var(--Colors-Semantic-Alert-orange-500, #DA6900)"
      },
      backgroundImage: {
        'blue-custom': 'linear-gradient(124.54deg, rgba(10, 31, 85, 0.4) 0%, rgba(16, 44, 115, 0.4) 27.66%, rgba(12, 26, 76, 0.4) 70.02%)',
        'blue-lose':  'linear-gradient(186.86deg, #00289F 10%, #001F7B 28.46%, #091557 50.54%)',
      },
    },
  },
  plugins: [],
} satisfies Config;
