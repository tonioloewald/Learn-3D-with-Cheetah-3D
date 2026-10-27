import { defineSiteConfig } from 'tosijs-ui/site'

export default defineSiteConfig({
  name: 'Learn 3D with Cheetah 3D',
  description:
    'The Missing Manual for Cheetah 3D — modeling, materials, lighting, rendering and animation.',
  baseUrl: 'https://learn3d.loewald.com',
  host: 'github-pages',
  // Fixed per project so it can run beside other ecosystem dev servers.
  port: 8830,

  // The book's chapters; nav order and nesting come from each page's
  // <!--{"parent": …, "order": …}--> block.
  docPaths: ['book'],
  home: '2_Introduction.md',
  // static/ (images/, favicon, logo) is copied to the web root; chapters
  // reference figures as /images/<file>.
  staticDirs: ['static'],
  // A prose book: code blocks (e.g. Cheetah 3D scripts) are illustrations, never run.
  liveExamples: 'opt-in',

  // Figures (the cover is 791px wide) scale down to fit the reading column.
  headExtra: '<style>img { max-width: 100%; height: auto; }</style>',

  favicon: '/favicon.png',
  logo: '/logo.png',
  ogImage: '/logo.png',

  epub: {
    author: 'Tonio Loewald',
    cover: 'static/images/cover-4th-edition.jpg',
    // A literal, not a clock, so the committed ePub only changes with the book.
    modified: '2026-10-27T00:00:00Z',
  },

  projectLinks: {
    github: 'https://github.com/tonioloewald/Learn-3D-with-Cheetah-3D',
  },
  navbarLinks: [
    {
      href: 'https://github.com/tonioloewald/Learn-3D-with-Cheetah-3D',
      label: 'github',
      icon: 'github',
    },
  ],
})
