import { defineConfig } from 'astro/config'
import preact from '@astrojs/preact'
import react from '@astrojs/react'

import solidJs from '@astrojs/solid-js'

// https://astro.build/config
export default defineConfig({
  integrations: [solidJs()],
  site: `https://demo.undb.xyz`,
})
