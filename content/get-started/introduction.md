---
title: Getting Started
description: "Quickly get your site up and running with Modus Docs for Hugo"
group: get-started
---

To get started with Modus Docs for Hugo you'll first need to add modus-icons and modus-docs-hugo-theme as dependencies to your package.json file:

```bash
npm i modus-icons modus-docs-hugo-theme
```

Then add a few dev dependencies you'll need to build your site:

```bash
npm i -D autoprefixer hugo-bin postcss postcss-cli
```

<br>

## Setup Menu

The left-side menu is generated from a `menu.yml` file in the data directory. The menu is a list of sections, each with a title and a list of pages. Each page has a title. The URL matches the title. For example, a page with the title "Introduction" within the components section will have the URL `/components/introduction/`.

```yml
- title: Getting Started
  pages:
    - title: Introduction
    - title: Device Support

- title: Components
  pages:
    - title: Introduction
```
