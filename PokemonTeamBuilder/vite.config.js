import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "src/",
  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        pokemon: resolve(__dirname, "src/pokemon_details/index.html"),
        next: resolve(__dirname, "src/next_page/index.html"),
      },
    },
  },
});
