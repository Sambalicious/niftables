import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

export const shadcnPlugin = plugin(
  // 1 add base css variable
  // eslint-disable-next-line func-names
  function ({ addBase }) {
    addBase({
      ":root": {
        // shadcn theme
        "--background": "0 0% 100%, 1",
        "--foreground": "0 0% 3.9%, 1",
        "--muted": "0 1% 96.1%, 1",
        "--muted-foreground": "260, 4%, 52%, 1",
        "--popover": "0 0% 100%",
        "--popover-foreground": "0 0% 3.9%",
        "--card": "0 0% 100%",
        "--card-foreground": "0 0% 3.9%",
        "--border": "0 0% 89.8%",
        "--input": "0 0% 89.8%",
        "--primary": "246, 91%, 61%",
        "--primary-foreground": "270, 25%, 98%",
        "--secondary": "0 0% 96.1%",
        "--secondary-foreground": "0 0% 9%",
        "--accent": "0 0% 96.1%",
        "--accent-foreground": " ",
        "--destructive": "0 84.2% 60.2%",
        "--destructive-foreground": "0 0% 98%",
        "--ring": "0 0% 63.9%",
        "--radius": "0.5rem",

        // custom themes
        "--dark-foreground": "255, 8%, 19%, 1",
        "--dark-light-foreground": "270, 25%, 98%, 1",

        "--white": "0, 0%, 100%, 1",
        "--black": "0, 0%, 0%, 1",
        "--gray": "215, 22%, 9%, 1",
        "--blue": "216, 100%, 62%, 1",
        "--purple": "277, 100%, 57%, 1",
      },
      ".dark": {
        "--background": "0 0% 3.9%",
        "--foreground": "0 0% 98%",
        "--muted": "0 1% 14.9%",
        "--muted-foreground": "0 0% 63.9%",
        "--popover": "0 0% 3.9%",
        "--popover-foreground": "0 0% 98%",
        "--card": "0 0% 3.9%",
        "--card-foreground": "0 0% 98%",
        "--border": "0 0.5% 14.8%",
        "--input": "0 0% 14.4%",
        "--primary": "0 0% 98%",
        "--primary-foreground": "0 0% 9%",
        "--secondary": "0 0% 14.9%",
        "--secondary-foreground": "0 0% 98%",
        "--accent": "0 0% 14.6%",
        "--accent-foreground": " ",
        "--destructive": "0 62.8% 30.6%",
        "--destructive-foreground": "0 85.7% 97.3%",
        "--ring": "0 0% 14.9%",
      },
    });
    addBase({
      "*": { "@apply border-border": {} },
      body: { "@apply bg-black-100 text-foreground": {} },
    });
  },
  // 2. Extend the tailwindCSS theme
  {
    theme: {
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1400px",
        },
      },
      extend: {
        fontFamily: {
          satoshi: ["var(--satoshi-font)", ...fontFamily.sans],
          monument: ["var(--monument-font)", ...fontFamily.sans],
        },
        colors: {
          border: "hsla(var(--border))",
          input: "hsla(var(--input))",
          ring: "hsla(var(--ring))",
          background: "hsla(var(--background))",
          foreground: "hsla(var(--foreground))",
          primary: {
            DEFAULT: "hsla(var(--purple))",
            foreground: "hsla(var(--purple-foreground))",
          },
          purple: {
            100: "hsla(var(--purple))",
          },
          blue: {
            DEFAULT: "hsla(var(--blue))",
            foreground: "hsla(var(--blue-foreground))",
          },
          secondary: {
            DEFAULT: "hsla(var(--secondary))",
            foreground: "hsla(var(--secondary-foreground))",
          },
          destructive: {
            DEFAULT: "hsla(var(--destructive))",
            foreground: "hsla(var(--destructive-foreground))",
          },
          muted: {
            DEFAULT: "hsla(var(--muted))",
            foreground: "hsla(var(--muted-foreground))",
          },
          accent: {
            DEFAULT: "hsla(var(--accent))",
            foreground: "hsla(var(--accent-foreground))",
          },
          popover: {
            DEFAULT: "hsla(var(--popover))",
            foreground: "hsla(var(--popover-foreground))",
          },
          card: {
            DEFAULT: "hsla(var(--card))",
            foreground: "hsla(var(--card-foreground))",
          },
          gray: {
            100: "hsla(var(--gray))",
          },
          white: {
            100: "hsla(var(--white))",
          },
          black: {
            100: "hsla(var(--black))",
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
        },
        animation: {
          "accordion-down": "accordion-down 0.2s ease-out",
          "accordion-up": "accordion-up 0.2s ease-out",
        },
      },
    },
  },
);
