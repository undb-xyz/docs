export const SITE = {
  title: 'undb',
  description: 'undb documentation',
  defaultLanguage: 'en-us',
} as const

export const OPEN_GRAPH = {
  image: {
    src: 'https://github.com/withastro/astro/blob/main/.github/assets/banner.png?raw=true',
    alt:
      'astro logo on a starry expanse of space,' + ' with a purple saturn-like planet floating in the right foreground',
  },
  twitter: 'astrodotbuild',
}

export const KNOWN_LANGUAGES = {
  English: 'en',
} as const
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES)

export const GITHUB_EDIT_URL = `https://github.com/undb-xyz/docs/tree/main`

export const COMMUNITY_INVITE_URL = ''

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
  indexName: 'XXXXXXXXXX',
  appId: 'XXXXXXXXXX',
  apiKey: 'XXXXXXXXXX',
}

export type Sidebar = Record<(typeof KNOWN_LANGUAGE_CODES)[number], Record<string, { text: string; link: string }[]>>
export const SIDEBAR: Sidebar = {
  en: {
    'Get Started': [{ text: 'Introduction', link: 'en/introduction' }],
    Installation: [
      { text: 'docker', link: 'en/installation-with-docker' },
      { text: 'docker-compose', link: 'en/installation-with-docker-compose' },
      { text: 'Render.com ', link: 'en/installation-with-render' },
      { text: 'fly.io', link: 'en/installation-with-fly-io' },
    ],
    Database: [{ text: 'litestream', link: 'en/configure-litestream-backup' }],
    Contribution: [{ text: 'development', link: 'en/development' }],
  },
}
