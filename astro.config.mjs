import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), partytown()],
});