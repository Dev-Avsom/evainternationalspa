import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
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
			colors: {
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
				'maroon': 'hsl(var(--maroon))',
				'maroon-dark': 'hsl(var(--maroon-dark))',
				'maroon-light': 'hsl(var(--maroon-light))',
				'maroon-silky': 'hsl(var(--maroon-silky))',
				'gold': 'hsl(var(--gold))',
				'gold-light': 'hsl(var(--gold-light))',
				'gold-dark': 'hsl(var(--gold-dark))',
				'gold-shine': 'hsl(var(--gold-shine))',
				'white-pure': 'hsl(var(--white-pure))',
				'cream': 'hsl(var(--cream))',
				'spa-gold': 'hsl(var(--spa-gold))',
				'spa-gold-light': 'hsl(var(--spa-gold-light))',
				'spa-dark': 'hsl(var(--spa-dark))',
				'spa-warm': 'hsl(var(--spa-warm))',
				'spa-cream': 'hsl(var(--spa-cream))',
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
			backgroundImage: {
				'gradient-hero': 'var(--gradient-hero)',
				'gradient-gold': 'var(--gradient-gold)',
				'gradient-card': 'var(--gradient-card)',
				'gradient-maroon': 'var(--gradient-maroon)',
				'gradient-maroon-hero': 'var(--gradient-maroon-hero)',
				'gradient-maroon-card': 'var(--gradient-maroon-card)',
			},
			boxShadow: {
				'luxury': 'var(--shadow-luxury)',
				'card': 'var(--shadow-card)',
				'glow': 'var(--shadow-glow)',
				'maroon': 'var(--shadow-maroon)',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
