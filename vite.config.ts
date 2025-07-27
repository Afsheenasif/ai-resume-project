import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
});
// tailwindcss() => styling
// reactRouter() => routing
// tsconfigPaths() => tsconfigPaths() is a utility function often used in Node.js projects (especially
// with TypeScript) to help Node resolve TypeScript path aliases during runtime.
