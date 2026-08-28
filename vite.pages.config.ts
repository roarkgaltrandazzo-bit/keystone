import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const rootDir = dirname(fileURLToPath(import.meta.url));
const pagesRoot = resolve(rootDir, "github-pages");

export default defineConfig({
  root: pagesRoot,
  publicDir: resolve(rootDir, "public"),
  base: "/",
  plugins: [react()],
  build: {
    outDir: resolve(rootDir, "dist-pages"),
    emptyOutDir: true,
    rollupOptions: {
      input: [
        resolve(pagesRoot, "index.html"),
        resolve(pagesRoot, "privacy/index.html"),
        resolve(pagesRoot, "404.html"),
      ],
    },
  },
});
