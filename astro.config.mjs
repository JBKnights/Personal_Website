// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // TODO: set this to your published site URL (needed for correct sitemap/canonical/OG tags)
  site: "https://example.com",
  vite: {
    plugins: [tailwindcss()],
  },
});
