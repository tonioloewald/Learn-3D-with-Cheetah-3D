import { readFileSync } from 'fs'
import { defineSiteConfig, DEFAULT_BOOK_CSS } from 'tosijs-ui/site'

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

  // The darker of the favicon's two oranges (#ffbc00 / #5c4400); the doc system
  // derives most of the palette from it.
  theme: { accent: '#5c4400' },

  // Tweaks the theme can't express yet (dark-mode gold, the blockquote icon,
  // figure sizing) live in static/book.css; heading styles shared with the ePub
  // live in static/headings.css.
  headExtra:
    '<link rel="stylesheet" href="/book.css">' +
    '<link rel="stylesheet" href="/headings.css">',

  favicon: '/favicon.png',
  logo: '/logo.png',
  ogImage: '/logo.png',

  epub: {
    author: 'Tonio Loewald',
    cover: 'static/images/cover-4th-edition.jpg',
    // `css` replaces the book stylesheet, so extend the default rather than lose it.
    css: DEFAULT_BOOK_CSS + '\n' + readFileSync('static/headings.css', 'utf8'),
    // A literal, not a clock, so the committed ePub only changes with the book.
    modified: '2026-10-30T00:00:00Z',
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
