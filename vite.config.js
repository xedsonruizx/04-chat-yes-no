import path from "node:path";
import vue from "@vitejs/plugin-vue";
import devtools from "vite-plugin-vue-devtools";
import tailwindcss from "@tailwindcss/vite";

export default {
  base: '/04-chat-yes-no/',
  plugins: [
    vue(),
    devtools(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  },
}
