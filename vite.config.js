import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  // Served from https://chibuzor9.github.io/portfolio/
  base: "/portfolio/",
  plugins: [react(), tailwindcss()],
});
