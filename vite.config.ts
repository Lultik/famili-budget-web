import react from "@vitejs/plugin-react";
import browserslistToEsbuild from "browserslist-to-esbuild";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(() => {
  return {
    build: {
      outDir: "dist",
      sourcemap: false,
      target: browserslistToEsbuild(),
      rollupOptions: {
        output: {
          compact: true,
        },
      },
    },
    base: "/",
    plugins: [react(), tsconfigPaths()],
    server: {
      open: true,
      port: 2022,
    },
  };
});
