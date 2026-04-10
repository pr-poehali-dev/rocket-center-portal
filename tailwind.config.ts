import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
		"./1775802839150377323.html"
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				rajdhani: ['Rajdhani', 'sans-serif'],
				golos: ['Golos Text', 'sans-serif'],
			},
			colors: {
				neon: {
					green: '#00FF88',
					blue: '#00D4FF',
					purple: '#BF00FF',
				},
				dark: {
					900: '#050508',
					800: '#0A0A10',
					700: '#0F0F1A',
					600: '#141428',
					500: '#1A1A35',
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'glitch': {
					'0%, 100%': { transform: 'translate(0)' },
					'20%': { transform: 'translate(-2px, 2px)' },
					'40%': { transform: 'translate(2px, -2px)' },
					'60%': { transform: 'translate(-1px, 1px)' },
					'80%': { transform: 'translate(1px, -1px)' },
				},
				'scan': {
					'0%': { transform: 'translateY(-100%)' },
					'100%': { transform: 'translateY(100vh)' }
				},
				'pulse-neon': {
					'0%, 100%': { boxShadow: '0 0 5px #00FF88, 0 0 20px #00FF88, 0 0 40px #00FF8840' },
					'50%': { boxShadow: '0 0 10px #00FF88, 0 0 40px #00FF88, 0 0 80px #00FF8880' },
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' },
				},
				'fade-in-up': {
					'0%': { opacity: '0', transform: 'translateY(30px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				'slide-in-left': {
					'0%': { opacity: '0', transform: 'translateX(-40px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' },
				},
				'neon-flicker': {
					'0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%': { opacity: '1' },
					'20%, 24%, 55%': { opacity: '0.4' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'glitch': 'glitch 0.5s infinite',
				'scan': 'scan 4s linear infinite',
				'pulse-neon': 'pulse-neon 2s ease-in-out infinite',
				'float': 'float 3s ease-in-out infinite',
				'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
				'slide-in-left': 'slide-in-left 0.6s ease-out forwards',
				'neon-flicker': 'neon-flicker 3s infinite',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
