import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { FileSystemIconLoader } from "unplugin-icons/loaders";
import Icons from "unplugin-icons/vite";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    cssCodeSplit: false,
  },
  plugins: [
    react(),
    tailwindcss(),
    // Icons resolve at build time into inlined SVG, so the technology strip
    // never flickers the way a runtime icon API does on a first visit.
    Icons({
      compiler: "jsx",
      // Project logos that no public icon set carries, kept beside the source
      // that references them rather than in /public.
      customCollections: {
        custom: FileSystemIconLoader("src/assets/icons"),
      },
      jsx: "react",
    }),
  ],
});
