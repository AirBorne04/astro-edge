import { defineConfig } from 'astro/config';

import base from "./astro.config-base.mjs";

// https://astro.build/config
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  ...base,
  adapter: cloudflare({ mode: "directory" })
});