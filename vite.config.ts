import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
  base: process.env.VITE_BASE_PATH || "/ai-resume-project",
  build: {
    outDir : "dist",
  }
});
// tailwindcss() => styling
// reactRouter() => routing
// tsconfigPaths() => tsconfigPaths() is a utility function often used in Node.js projects (especially
// with TypeScript) to help Node resolve TypeScript path aliases during runtime.
