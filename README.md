# Portfolio

Portfolio site for a UX Designer / Design Engineer (me), hand-coded in React to demonstrate both design thinking and frontend craft.

Live site: esztihollenback.com

## Stack

- Vite
- React
- Tailwind CSS
- React Router v6
- MDX (`@mdx-js/rollup`)
- Framer Motion
- Lucide React
- Deployed on Vercel, auto-deploy from GitHub

## About this project

When I started my UX career, Webflow seemed like the right choice to showcase my work. Years later, after picking up full-stack development, building my own portfolio from scratch felt like the natural next step, and a real test of those skills. No CMS, real components, each case study built with the flexibility it needed. This is my first hand-coded site, and it's still an active, evolving project.

## Notable decisions

- Case study content lives in MDX. A templated CMS layout would force every case study into one shape. Chunking components let each case study's layout follow its own story, living on its own route. As for what components could be shared, that was a decision before writing any code.
- Design tokens (`tokens.css`) centralize the site's color, spacing and type values in one location, the same way a design system does in Figma. Translating that logic into code was one of the most exciting parts of building this project. 

## Status

Done. Though like every design, it is always a little in progress.
