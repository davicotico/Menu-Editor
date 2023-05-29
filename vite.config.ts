import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    outDir: 'lib',
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "MenuEditor",
      fileName(format, entryName) {
        let strFormat = '';
        if (format != 'es' ) {
          strFormat = `.${format}`;
        }
        return `${entryName}${strFormat}.js`;
      },
    },
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name == 'style.css') {
            return 'css/styles.css';
          }
          return `[name][hash][extname]`;
        }
      }
    }
  },
  plugins: [dts()],
});
