// tailwind.config.js
// Create this file at your project root to define Tailwind settings
module.exports = {
  theme: {
    screens: {
      320: "320px",
      360: "360px",
      375: "375px",
      400: "400px",
      414: "414px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      1366: "1366px",
      1440: "1440px",
      1536: "1536px",
      1600: "1600px",
      1920: "1920px",
    },
    extend: {
      colors: {
        "dark-0d": "#0D0D0D", // Usage: bg-dark-0d or text-dark-0d
        "light-e5": "#E5E4E2", // Usage: bg-light-e5 or text-light-e5
      },
      backgroundImage: {
        "gradient-bpg":
          "linear-gradient(90deg, #4facfe 0%, #a750ca 50%, #3bcb9b 100%)",
      },
      fontWeight: {
        400: "400", // Usage: font-400
        500: "500", // Usage: font-500
        600: "600", // Usage: font-600
        700: "700", // Usage: font-700
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          ".text-sm-responsive": { fontSize: "clamp(0.875rem, 1.5vw, 1rem)" }, // small fluid text
          ".text-md-responsive": { fontSize: "clamp(1rem, 2vw, 1.25rem)" }, // medium fluid text
          ".text-lg-responsive": { fontSize: "clamp(1.25rem, 2.5vw, 1.5rem)" }, // large fluid text
          ".text-xl-responsive": { fontSize: "clamp(1.5rem, 3vw, 1.75rem)" }, // x-large fluid text
          ".fix-1440": {
            maxWidth: "1440px", // caps width at 1440px up to 1536px
            marginLeft: "auto",
            marginRight: "auto",
            paddingLeft: "5%", // side padding below 1440px
            paddingRight: "5%",
          },
        },
        { variants: ["responsive"] }
      );
    },
  ],
};

// postcss.config.mjs
// Ensure TailwindCSS and Autoprefixer are registered in PostCSS
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

export default {
  plugins: {
    tailwindcss: {}, // Uses the default tailwind.config.js
    autoprefixer: {},
  },
};

/*
Usage Examples:

// Colors
<div class="bg-dark-0d text-light-e5 p-4">Dark bg with light text</div>

// Gradient
<section class="bg-gradient-bpg text-white p-6">Gradient bg</section>

// Font weights
<p class="font-700">Extra-bold</p>
<p class="font-400">Regular</p>

// Responsive text
<h1 class="text-xl-responsive">Fluid heading</h1>
<p class="text-md-responsive">Fluid paragraph</p>

// Fixed container
<div class="fix-1440">Your content</div>

// Custom breakpoints
<div class="1440:bg-red-500 360:bg-blue-200">Breakpoint-specific styling</div>
*/
