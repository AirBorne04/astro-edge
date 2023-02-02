import { defineConfig } from 'astro/config';
import base from './astro.config-base.mjs';


// https://astro.build/config
export default defineConfig({
  ...base,
  output: "static",
});