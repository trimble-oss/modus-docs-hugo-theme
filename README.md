# Modus Docs Hugo Theme (Experimental)

[![LICENSE](https://img.shields.io/badge/license-MIT-lightgrey.svg)](https://raw.githubusercontent.com/trimble-oss/modus-docs-hugo-theme/main/LICENSE)
[![GitHub Super-Linter](https://github.com/trimble-oss/modus-docs-hugo-theme/workflows/Lint%20Code%20Base/badge.svg)](https://github.com/marketplace/actions/super-linter)
[![npm Version](https://img.shields.io/npm/v/@trimble-oss/modus-docs-hugo-theme)](https://www.npmjs.com/package/@trimble-oss/modus-docs-hugo-theme)

A documentation theme for Hugo.

**Status: Alpha. This theme is currently under development.**

## Installation

1. Add this repo to your package.json as follows:

```bash
npm i @trimble-oss/modus-docs-hugo-theme --save-dev
```

2. Add the following mounts to your Hugo config:

```yml
module:
  mounts:
    - source: node_modules/@trimble-oss/modus-docs-hugo-theme/assets/
      target: assets
      # The main theme CSS and JavaScript

    - source: node_modules/@trimble-oss/modus-docs-hugo-theme/layouts/
      target: layouts
      # The main theme templates

    - source: node_modules/@trimble-oss/modus-docs-hugo-theme/static/
      target: static
      # Includes Trimble favicon and JS for theme toggle and search

    - source: node_modules/@trimble-oss/modus-icons/dist/modus-solid/sprites/modus-icons.svg
      target: static/modus-solid-icons.svg
      # Modus Icons Solid will be available as an SVG sprite

    - source: node_modules/@trimble-oss/modus-icons/dist/modus-outlined/fonts/
      target: static/fonts/
      # Modus Icons Outlined will be available as webfont
```
