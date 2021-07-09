import adapter from "@sveltejs/adapter-static";
import preprocess from "svelte-preprocess";
import autoprefixer from "autoprefixer";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    target: "#app",
    adapter: adapter(),
    ssr: false,
  },

  preprocess: preprocess({
    scss: { includePaths: ["src"] },
    postcss: { plugins: [autoprefixer] },
  }),
};

export default config;
