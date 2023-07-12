# Modus Docs Hugo Theme (Experimental)

A documentation theme for Hugo.

Status: Alpha. This theme is currently under development and is not yet ready for production use.

## Installation

1. Add this repo to your package.json as follows:

```json
{
  "dependencies": {
    "modus-docs-hugo-theme": "git+github.com:trimble-oss/modus-docs-hugo-theme.git"
  }
}
```

2. Add the following mounts to your Hugo config:

```yml
module:
  mounts:
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
