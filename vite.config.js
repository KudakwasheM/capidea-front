import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // port: 3000,
    proxy: {
      "/api": {
        // target: "http://localhost:8000",
        target: "https://capedia.onrender.com",
        changeOrigin: true,
      },
    },
  },
  optimizeDeps: {
    exclude: ["js-big-decimal"],
  },
});
