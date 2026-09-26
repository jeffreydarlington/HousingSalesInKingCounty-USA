import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Convert import.meta.url to __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  base: "/jeffreyDarlington-Portfolio/",
  plugins: [react()],
  publicDir: path.resolve(__dirname, "p/"),
  server: {
    fs: {
      deny: [path.resolve(__dirname, "private.txt")]
    }
  }
});
