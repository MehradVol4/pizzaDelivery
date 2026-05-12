import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  cacheDir: ".vite-cache",
  plugins: [react()],
  build: {
    // In some Windows environments, deleting files in the output directory can fail with EPERM
    // (locked/ACL-restricted files). Skipping the pre-build empty step avoids hard failure.
    emptyOutDir: false,
  },
});
