import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const rootDir = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  root: resolve(rootDir, "github-pages"),
  publicDir: resolve(rootDir, "public"),
  base: "/",
  plugins: [react()],
  build: {
    outDir: resolve(rootDir, "dist-pages"),
    emptyOutDir: true,
    rollupOptions: {
      input: resolve(rootDir, "github-pages", "index.html"),
    },
  },
});
