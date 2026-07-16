import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const rootDir = dirname(fileURLToPath(import.meta.url));
const page = (path: string) => resolve(rootDir, "github-pages", path, "index.html");

export default defineConfig({
  root: resolve(rootDir, "github-pages"),
  publicDir: resolve(rootDir, "public"),
  base: "/",
  plugins: [react()],
  build: {
    outDir: resolve(rootDir, "dist-pages"),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        home: resolve(rootDir, "github-pages", "index.html"),
        assessment: page("assessment"),
        about: page("about"),
        selfScore: page("self-score"),
        book: page("book"),
        privacy: page("privacy"),
      },
    },
  },
});
