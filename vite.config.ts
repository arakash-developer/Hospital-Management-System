import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@public": path.resolve(__dirname, "./public"),
      "@context": path.resolve(__dirname, "./src/context"),
      "@component": path.resolve(__dirname, "./src/component"),
      "@layout": path.resolve(__dirname, "./src/layout"),
      "@router": path.resolve(__dirname, "./src/router"),
      "@lib": path.resolve(__dirname, "./src/lib"),
      "@util": path.resolve(__dirname, "./src/util"),
    },
  },
});
