import {defineConfig} from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "0.0.0.0",
    hmr: {
      clientPort: 8080,
    },
    port: 5173,
    watch: {
      usePolling: true,
    },
  },
  plugins: [react()],
});
