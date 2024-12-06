import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'home': 'rgb(126, 210, 235)',
        'button':'rgb(16, 48, 71)',
        'links':'rgb(26, 50, 59)',
        'navbarbg':'rgb(248, 254, 254)',
        'text':'rgb(0, 26, 48)',
        'appopintment':'rgb(0, 154, 180)',
        'doctor':'rgb(4, 42, 65)',
        'border':'rgb(134, 188, 198)',
        'lear':'rgb(81, 186, 189)',
        'services':'rgb(39, 138, 152)',
        'extensive':'rgb(13, 49, 74)',
        'footertext':'rgb(46, 133, 148)'
      },
      fontFamily: {
        dancing: ["Dancing Script", "cursive",]
      },
      screens: {
        'amd':'990px',
        'bsm':'400px'
      }
    },
  },
  plugins: [],
} satisfies Config;
