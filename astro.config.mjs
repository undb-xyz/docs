import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'undb Docs',
      logo: {
        src: '/src/assets/logo.svg',
      },
      social: {
        github: 'https://github.com/undb-xyz/undb',
        discord: 'https://discord.gg/3rcNdU3y3U',
        twitter: 'https://twitter.com/unified_undb',
      },
      sidebar: [
        {
          label: 'Installation',
          autogenerate: { directory: 'installation' },
        },
        {
          label: 'Database',
          autogenerate: { directory: 'database' },
        },
        {
          label: 'Cache',
          autogenerate: { directory: 'cache' },
        },
        {
          label: 'Feature',
          autogenerate: { directory: 'feature' },
        },
        {
          label: 'Contribution',
          autogenerate: { directory: 'contribution' },
        },
      ],
    }),
  ],
})
