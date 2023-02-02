import solidJs from "@astrojs/solid-js";

export default {
  output: "server",
  integrations: [solidJs()],
  vite: {
    build: { minify: false }
  },
}