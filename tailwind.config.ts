import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      screens: {
        '3xl': '1920px',
        '4xl': '2560px',
      },
      fontFamily: {
        handwritten: ['Caveat', 'cursive'],
        sans: ['DM Sans', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        phoenix: {
          black: "hsl(var(--phoenix-black))",
          orange: "hsl(var(--phoenix-orange))",
          "orange-dark": "hsl(var(--phoenix-orange-dark))",
          "orange-light": "hsl(var(--phoenix-orange-light))",
          green: "hsl(var(--phoenix-green))",
          "green-light": "hsl(var(--phoenix-green-light))",
          gray: "hsl(var(--phoenix-gray))",
          "gray-dark": "hsl(var(--phoenix-gray-dark))",
          "gray-light": "hsl(var(--phoenix-gray-light))",
          gold: "hsl(var(--phoenix-gold))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },

      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
       "fade-in": {
  "0%": { opacity: "0", transform: "translateY(40px)" },
  "100%": { opacity: "1", transform: "translateY(0)" }
},


        "slide-in-right": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "dropdown-from-top": {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        // New underline animation
        "slide-underline": {
          "0%": {
            width: "0%",
            left: "0%"
          },
          "50%": {
            width: "100%",
            left: "0%"
          },
          "100%": {
            width: "0%",
            left: "100%"
          }
        },

        // === FADE SCALE (Zoom Out + Fade) - Best for Cards/Boxes ===
        "fade-scale": {
          "0%": { opacity: "0", transform: "scale(2.15)" },
          "100%": { opacity: "1", transform: "scale(1)" }
        },

        // === FADE ROTATE (Rotate + Fade) ===
        "fade-rotate": {
          "0%": { opacity: "0", transform: "rotate(-8deg) scale(1.95)" },
          "100%": { opacity: "1", transform: "rotate(0deg) scale(1)" }
        },

        // === FADE RIGHT (Right se Left aaye) ===
        "fade-right": {
          "0%": { opacity: "0", transform: "translateX(200px)" },
          "100%": { opacity: "1", transform: "translateX(0)" }
        },

        // === FADE LEFT (Left se Right aaye) ===
        "fade-left": {
          "0%": { opacity: "0", transform: "translateX(-180px)" },
          "100%": { opacity: "1", transform: "translateX(0)" }
        },

        // Extra smooth ones (optional but recommended)
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(110px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        // "fade-in": "fade-in 0.5s ease-out forwards",
        "slide-in-right": "slide-in-right 0.3s ease-out",
        "dropdown-from-top": "dropdown-from-top 0.25s ease-out forwards",
        // New underline animation
        "slide-underline": "slide-underline 3s infinite ease-in-out",
        // Main animations with smooth cubic-bezier (privatefinance style feel)
      "fade-in": "fade-in 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards",
        "fade-scale": "fade-scale 0.85s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
        "fade-rotate": "fade-rotate 0.9s cubic-bezier(0.34, 1.56, 0.64, 1) forwards", // bouncy rotate feel
        "fade-right": "fade-right 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
        "fade-left": "fade-left 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
        // Fast version
        "fade-right-fast": "fade-right 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",

        // Thoda slow & premium
        "fade-right-slow": "fade-right 1.1s cubic-bezier(0.25, 0.1, 0.25, 1) forwards",

        // Bahut soft feel
        "fade-right-soft": "fade-right 0.9s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
        "fade-in-up": "fade-in-up 0.75s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
