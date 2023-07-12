---
title: "Shortcodes"
layout: "single"
description: "Use Hugo shortcodes within your markdown files to quickly build pages."
group: "customization"
---

## Alerts

The alert shortcode creates an alert block that can be used to display notices or warnings.

{{% alert color="warning" %}}
A simple warning alert—check it out!
{{% /alert %}}

```go-html-template
{{%/* alert color="warning" */%}}
A simple warning alert—check it out!
{{%/* /alert */%}}
```

## Messages

{{% message color="primary" %}}
This is a message.
{{% /message %}}

```go-html-template
{{%/* message color="primary" icon="info" */%}}
This is a message.
{{%/* /message */%}}
```

## Tabbed panes
