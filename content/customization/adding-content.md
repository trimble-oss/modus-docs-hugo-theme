---
title: "Adding Content"
group: "customization"
description: ""
---

## Front Matter

Each page should have the minimum front matter:

```yml
---
title: "Page Title"
group: "" # The group the page belongs to in the menu
description: "A brief description of the page"
---
```

You can also specify additional front matter variables:

- `draft` - Set to `true` to hide the page from the site
- `aliases` - A list of aliases for the page
- `toc` - Set to `false` to hide the table of contents

## Images

Images can be added to your content using Markdown syntax. The images should be stored in the `/static/img/` directory.

```markdown
![alt text](/img/favicon.svg)
```

Images by default have a max-width of 100% so larger images scale down on smaller screens. Images are also native lazy loaded.

For more control over images you can use a shortcode as follows:

```markdown
{{/ < img src="/img/image.svg" dark="/img/image-dark.png" class=" " width="128" height="128" alt=" " >\}}
```

This allows you to specify a dark mode image, height, width a class and an alt tag.

## iframe

You can embed an iframe using the following shortcode:

```markdown
{{ < iframe src="" height="200" class="w-100" >}}
```
