import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import { injectSpeedInsights } from "@vercel/speed-insights";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon()],

});