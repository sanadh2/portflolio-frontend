module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto Flex", "Roboto", "sans"],
      },
      fontWeight: {
        100: 100,
        200: 200,
        300: 300,
        400: 400,
        500: 500,
        600: 600,
        700: 700,
        800: 800,
        900: 900,
      },
      colors: {
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        background: "hsl(var(--background))",
        text: "#1E1E1E",
        secondaryText: "#6C757D",
        cardBackground: "#FFFFFF",
        hoverEffect: "#0056b3",
        error: "#FF3B30",
        success: "#28A745",
        border: "hsl(var(--border))",
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        shine: {
          "0%": { backgroundPosition: "200% 0" },
          "25%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        shine: "shine 3s ease-out infinite",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".roboto-flex-100": {
          fontFamily: `"Roboto Flex",Roboto, sans`,
          fontOpticalSizing: "auto",
          fontWeight: "100",
          fontVariationSettings:
            '"slnt" 0, "wdth" 100, "GRAD" 0, "XOPQ" 96, "XTRA" 468, "YOPQ" 79, "YTAS" 750, "YTDE" -203, "YTFI" 738, "YTLC" 514, "YTUC" 712;',
        },
        ".roboto-flex-200": {
          fontFamily: `"Roboto Flex",Roboto, sans`,
          fontOpticalSizing: "auto",
          fontWeight: "200",
          fontVariationSettings:
            '"slnt" 0, "wdth" 100, "GRAD" 0, "XOPQ" 96, "XTRA" 468, "YOPQ" 79, "YTAS" 750, "YTDE" -203, "YTFI" 738, "YTLC" 514, "YTUC" 712;',
        },
        ".roboto-flex-300": {
          fontFamily: `"Roboto Flex",Roboto, sans`,
          fontOpticalSizing: "auto",
          fontWeight: "300",
          fontVariationSettings:
            '"slnt" 0, "wdth" 100, "GRAD" 0, "XOPQ" 96, "XTRA" 468, "YOPQ" 79, "YTAS" 750, "YTDE" -203, "YTFI" 738, "YTLC" 514, "YTUC" 712;',
        },
        ".roboto-flex-400": {
          fontFamily: `"Roboto Flex",Roboto, sans`,
          fontOpticalSizing: "auto",
          fontWeight: "400",
          fontVariationSettings:
            '"slnt" 0, "wdth" 100, "GRAD" 0, "XOPQ" 96, "XTRA" 468, "YOPQ" 79, "YTAS" 750, "YTDE" -203, "YTFI" 738, "YTLC" 514, "YTUC" 712;',
        },
        ".roboto-flex-500": {
          fontFamily: `"Roboto Flex",Roboto, sans`,
          fontOpticalSizing: "auto",
          fontWeight: "500",
          fontVariationSettings:
            '"slnt" 0, "wdth" 100, "GRAD" 0, "XOPQ" 96, "XTRA" 468, "YOPQ" 79, "YTAS" 750, "YTDE" -203, "YTFI" 738, "YTLC" 514, "YTUC" 712;',
        },
        ".roboto-flex-600": {
          fontFamily: `"Roboto Flex",Roboto, sans`,
          fontOpticalSizing: "auto",
          fontWeight: "600",
          fontVariationSettings:
            '"slnt" 0, "wdth" 100, "GRAD" 0, "XOPQ" 96, "XTRA" 468, "YOPQ" 79, "YTAS" 750, "YTDE" -203, "YTFI" 738, "YTLC" 514, "YTUC" 712;',
        },
        ".roboto-flex-700": {
          fontFamily: `"Roboto Flex",Roboto, sans`,
          fontOpticalSizing: "auto",
          fontWeight: "700",
          fontVariationSettings:
            '"slnt" 0, "wdth" 100, "GRAD" 0, "XOPQ" 96, "XTRA" 468, "YOPQ" 79, "YTAS" 750, "YTDE" -203, "YTFI" 738, "YTLC" 514, "YTUC" 712;',
        },
        ".roboto-flex-800": {
          fontFamily: `"Roboto Flex",Roboto, sans`,
          fontOpticalSizing: "auto",
          fontWeight: "800",
          fontVariationSettings:
            '"slnt" 0, "wdth" 100, "GRAD" 0, "XOPQ" 96, "XTRA" 468, "YOPQ" 79, "YTAS" 750, "YTDE" -203, "YTFI" 738, "YTLC" 514, "YTUC" 712;',
        },
        ".roboto-flex-900": {
          fontFamily: `"Roboto Flex",Roboto, sans`,
          fontOpticalSizing: "auto",
          fontWeight: "900",
          fontVariationSettings:
            '"slnt" 0, "wdth" 100, "GRAD" 0, "XOPQ" 96, "XTRA" 468, "YOPQ" 79, "YTAS" 750, "YTDE" -203, "YTFI" 738, "YTLC" 514, "YTUC" 712;',
        },
        ".roboto-flex-1000": {
          fontFamily: `"Roboto Flex",Roboto, sans`,
          fontOpticalSizing: "auto",
          fontWeight: "1000",
          fontVariationSettings:
            '"slnt" 0, "wdth" 100, "GRAD" 0, "XOPQ" 96, "XTRA" 468, "YOPQ" 79, "YTAS" 750, "YTDE" -203, "YTFI" 738, "YTLC" 514, "YTUC" 712;',
        },
      });
    },
    require("tailwindcss-animate"),
  ],
};
