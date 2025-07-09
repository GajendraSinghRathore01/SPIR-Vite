import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss()],
  server: {
    allowedHosts : true,
    proxy: {
      "/api": {
        target: "http://192.168.1.13:5000", // Your backend server
        changeOrigin: true,
        secure: false,
        
      },
    },
  },
});
