import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

const config = {
  plugins: [
    tailwindcss(), // This will automatically pick up tailwind.config.js
    autoprefixer(), // Adds vendor prefixes
  ],
};

export default config;
