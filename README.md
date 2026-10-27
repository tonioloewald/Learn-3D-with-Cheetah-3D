# Learn 3D with Cheetah 3D
 The Missing Manual for Cheetah 3D

## To propose changes

1. Go to the page you want to change (in /book)
2. Click the pencil icon to make the changes
3. When you're done, go to the bottom of the page and add some comments explaining what you're doing
4. Create a **Pull Request**

## To request changes or log bugs

Go to Issues!

## To run the site locally

You need [Bun](https://bun.sh) and [mkcert](https://github.com/FiloSottile/mkcert).

1. Clone the repository
2. `cd` into the root directory
3. `bun install`
4. `bun run tls` (once, to create a locally-trusted HTTPS certificate)
5. `bun start`

Then visit `https://localhost:8830`. The site rebuilds as you edit.

`bun run build` writes the finished site, including the ePub, to `docs/`.

The site is built with the [tosijs-ui documentation system](https://ui.tosijs.net).
