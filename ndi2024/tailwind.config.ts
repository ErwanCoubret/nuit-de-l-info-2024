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
				primary: {
          50: "#EAF6FF",
          100: "#D3EDFF",
          200: "#A6D9FF",
          300: "#78C5F1",
          400: "#78BAF1",
          500: "#4F98D4",
          600: "#3D7AAF",
          700: "#27689D",
          800: "#1B4866",
          900: "#0E2537",
      },      
				background: "var(--background)",
				foreground: "var(--foreground)",
			},
			fontFamily: {
				fugazOne: ["Fugaz One", "sans-serif"],
				rubik: ["Rubik", "sans-serif"],
			},
			animation: {
				fade: "fadeIn 0.8s ease-in-out forwards",
				fadeOut: "fadeOut 0.5s ease-in-out forwards",
				wiggle_fade:
					"fadeIn 2s ease-in-out forwards, wiggle_md 4s ease-in-out infinite",
				navbarTranslateIn: "navbarTranslateIn .5s ease-in-out forwards",
				navbarTranslateOut:
					"navbarTranslateOut .5s ease-in-out forwards",
			},
			keyframes: {
				fadeIn: {
					"0%": { opacity: "0", transform: "translateY(20px)" },
					"100%": { opacity: "1", transform: "translateY(0)" },
				},
				fadeOut: {
					"0%": { opacity: "1", transform: "translateY(0)" },
					"100%": { opacity: "0", transform: "translateY(20px)" },
				},
				navbarTranslateIn: {
					"0%": { transform: "translateX(100vw)" },
					"100%": { transform: "translateX(0)" },
				},
				navbarTranslateOut: {
					"0%": { transform: "translateX(0)" },
					"100%": { transform: "translateX(100vw)" },
				},
				wiggle: {
					"0%, 100%": { transform: "rotate(-1deg)" },
					"50%": { transform: "rotate(1deg)" },
				},
				wiggle_md: {
					"0%, 100%": { transform: "rotate(-5deg)" },
					"50%": { transform: "rotate(5deg)" },
				},
			},
		},
	},
	plugins: [],
} satisfies Config;
