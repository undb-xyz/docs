import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'

// https://astro.build/config
export default defineConfig({
  server: {
    port: 3001,
  },
  integrations: [
    starlight({
      title: 'undb Docs',
      logo: {
        src: '/src/assets/logo.svg',
      },
      editLink: {
        baseUrl: 'https://github.com/undb-xyz/docs/edit/main',
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
          label: 'Open API',
          autogenerate: { directory: 'openapi' },
        },
        {
          label: 'Webhook',
          autogenerate: { directory: 'webhook' },
        },
        {
          label: 'Integration',
          autogenerate: { directory: 'integration' },
        },
        {
          label: 'Subscribe',
          autogenerate: { directory: 'subscribe' },
        },
        {
          label: 'Authorization',
          autogenerate: { directory: 'authorization' },
        },
        {
          label: 'Member',
          autogenerate: { directory: 'member' },
        },
        {
          label: 'Contribution',
          autogenerate: { directory: 'contribution' },
        },
      ],
    }),
  ],
})
