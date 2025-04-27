import react from "@vitejs/plugin-react";
import browserslistToEsbuild from "browserslist-to-esbuild";
import { defineConfig, loadEnv } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  const PROXY = {
    target: env.VITE_API_URL,
    changeOrigin: true,
  };

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
      proxy: {
        "/api": PROXY,
      },
    },
  };
});
