# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

The online edition of the book *Learn 3D with Cheetah 3D* ("The Missing Manual for Cheetah 3D", covering Cheetah 3D v7). It's almost entirely content: 125 Markdown pages in `book/` and ~730 figures in `static/images/`. It's built with the tosijs-ui documentation system (`tosijs-ui/site`) into a static site with full-text search, Print (to PDF) and an ePub. The site is published to GitHub Pages at https://learn3d.loewald.com.

The ecosystem's shared practices live in `~/tosijs-coding-practices` (start at its README). Problems in tosijs-ui belong to tosijs-ui: file them on the virta board (`virta brief` in `~/tosijs-ui`), not as fixes made from here.

## Commands

```sh
bun install
bun run tls     # once: mkcert certificate in tls/ for the HTTPS dev server
bun start       # dev server at https://localhost:8830, rebuilds on change
bun run build   # writes the site + ePub to docs/
```

There are no tests. `bun run build` is the check: it reports broken wikilinks, in-page anchors and similar problems.

## Layout

- `site.config.ts` is the whole site configuration (see tosijs-ui's `doc-site-system.md` for every option). `bin/site.ts` just calls `buildSite`/`devServer`.
- `book/` holds the chapters. `static/` is copied to the web root (`images/`, `favicon.png`, `logo.png`).
- `docs/` is **generated output** that GitHub Pages serves. Never edit it by hand; it's wiped on every build. `demo/docs.json` is an intermediate corpus (gitignored).

## Editing content

- **Nav order and nesting come from the metadata block on each page's first line**, not from the filename, but the two must agree: section `9.7` is `"order": 7` under chapter 9. Keep them in step when moving pages: `<!--{"parent": "9_Materials.md", "order": 7}-->`. Top-level chapters have only `order` (their chapter number + 1, so Front Matter is 1). A new page needs this block or it lands at the top level, sorted by title.
- Filenames follow `<chapter>[.<section>]_<Title_With_Underscores>.md`. The filename stem is also the URL slug (`/9.7_UV_Mapping/`), so renaming a file breaks existing links; update every `/<slug>/` link in `book/` and the chapter page's `<!-- toc -->` list when you do.
- Each page is served at `/<slug>/`, so **image references must be root-absolute**: `![](/images/pastedGraphic-396.jpg)`. A bare `![](x.jpg)` resolves under the page's slug and breaks. URL-encode spaces in filenames.
- The page title is the first heading. A page with no heading needs `"title"` in its metadata block (see `0_Front_Matter.md`).
- `liveExamples: 'opt-in'` is set, so code fences (e.g. the Cheetah 3D scripts in `16.8_Scripts.md`) are display-only and never run.
- House style for figure captions: an italic paragraph right after the image(s). Menu paths are bold, e.g. `**Tools \> UV \> Unwrap UV**`.

## Work-in-progress markers

Everything awaiting the author ends in an HTML comment containing `TODO`, so `grep -rn TODO book/` finds it all. The comments are invisible to readers. The blockquotes are deliberately visible.

- `> **AI draft:** … <!-- TODO review AI draft -->` … `> *End of AI draft.* <!-- /AI draft -->`: text drafted from the 8.1.1 manual, the app bundle or the scripting KB, not yet reviewed. Each marker sits on its own line with blank lines around it.
- `<!-- TODO review -->` at the end of a paragraph: prose rewritten for clarity, to be reviewed.
- `> **Note:** … <!-- TODO update -->` (out of date), `TODO missing` (8.x feature not covered), `TODO verify` (check in the app), `TODO screenshot` (shows old UI), `TODO editorial` (structure, stubs, decisions).

Use the same forms for new work. When the author approves a draft, remove both of its markers.

## Known issues

- `reviews/2026-10-27-cheetah3d-8.1.1-review.md` lists what's out of date against Cheetah 3D 8.1.1. Much of the rendering and lighting material still describes v6.
- If you change the book's content, also update the `epub.modified` date in `site.config.ts`. It's a fixed date, not a clock, so the committed ePub changes only when the book does.
