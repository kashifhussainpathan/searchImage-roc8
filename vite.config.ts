import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      "@hooks": "/src/hooks",
      "@context": "/src/context",
      "@auth": "/src/components/auth",
      "@components": "/src/components",
      "@components/loaders": "/src/components/loaders",
    },
  },
});
