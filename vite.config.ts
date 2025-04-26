import react from "@vitejs/plugin-react";
import browserslistToEsbuild from "browserslist-to-esbuild";
import { defineConfig, loadEnv } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    build: {
      outDir: "build",
      sourcemap: false,
      target: browserslistToEsbuild(),
      rollupOptions: {
        output: {
          compact: true,
        },
      },
    },
    plugins: [react(), tsconfigPaths()],
    server: {
      open: true,
      port: 2022,
      proxy: {
        "/api": {
          target: env.ENDPOINT,
          changeOrigin: true,
        },
        "/auth": env.ENDPOINT,
      },
    },
    define: {
      "process.env": `${JSON.stringify(loadEnv(mode, process.cwd(), "REACT_APP"))}`,
    },
  };
});
