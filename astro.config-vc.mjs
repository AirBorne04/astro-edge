import { defineConfig } from 'astro/config';
import base from "./astro.config-base.mjs";

// https://astro.build/config
import vercel from "@astrojs/vercel/edge";

// https://astro.build/config
export default defineConfig({
  ...base,
  adapter: vercel()
});