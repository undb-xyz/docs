import { defineConfig } from 'astro/config'
import solidJs from '@astrojs/solid-js'

// https://astro.build/config
export default defineConfig({
  integrations: [solidJs()],
  site: `https://demo.undb.xyz`,
  server: { port: 8080 },
})
