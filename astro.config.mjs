import { defineConfig } from 'astro/config';
import { injectSpeedInsights } from "@vercel/speed-insights"

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()]
});