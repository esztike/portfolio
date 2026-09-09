# `<head>` metadata

This is a record of how the portfolio handles `<head>` metadata, and why the setup is shaped the way it is.

## context

The portfolio is a client-rendered SPA built with React and Vite so it serves a single `index.html`, and paints every route with JavaScript in the browser after that shell loads.

The setup has a noteworthy catch. Anything that reads a page without running JavaScript sees only the shell. Social scrapers, for example. When a link is pasted into LinkedIn, Slack, iMessage, or X, the scraper fetches the raw HTML and reads the `<head>` for information. A title, a description, a preview image. It never runs the app, consequently, every route unfurls with the homepage tags, or with nothing at all.

## the pieces

- The static `<head>` in `index.html`

  **What it is.** The `<head>` block that ships with the build. Alongside the usual charset, viewport and icon links, it carries the site's identity tags, an Open Graph and Twitter Card block for link previews, and a Person structured data block.

  **What it is for.** A baseline, where every route starts from. The homepage uses it as is. For every linked route, the request-time middleware overwrites it tag by tag.

  **When it runs.** Build time. It is written into the file, and Vite carries the file into the build output as the app's entry point.

- The edge middleware

  **What it is.** `middleware.js` is at repo root. Vercel runs it on every request to seven routes in this case. For a matched route it fetches the origin HTML, rewrites the metadata tags, and returns the changed HTML. Unmatched routes pass through.

  **What it is for.** The scraper problem fixer. It runs before the HTML reaches the browser or scraper, so the `<head>` is already route-correct by the time anything reads it.

  **When it runs.** Request time, at the edge.

  **Why this.** It is a targeted patch, not rendering. It changes only the few tags that differ between routes and leaves the rest of the `<head>` as the shared default. Small, but a workaround for not having server-side rendering.

The rest is standard. A permissive `robots.txt` points at an eight-route sitemap. Each page that is worth sharing has its own Open Graph image at 1200 by 630. A Person JSON-LD block in `index.html` states who the site belongs to. All of it is static and set at build time.

## why not react-helmet-async

Before React 19, react-helmet-async was the standard way to manage `<head>` tags from inside a component. React 19 natively hoists `<title>`, `<meta>`, and `<link>` into `<head>`.

## why not SSR

Server-side rendering, usually through a framework like Next, is the standard fix for per-route metadata. At this size, a short middleware file does the job for `<head>`. SSR is the better choice at a larger scale, or when content comes from a CMS.
