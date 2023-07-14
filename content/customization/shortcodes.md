---
title: "Shortcodes"
layout: "single"
description: "Use Hugo shortcodes within your markdown files to quickly build pages."
group: "customization"
---

## Alerts

The alert shortcode creates an alert block that can be used to display notices or warnings.

{{% alert color="warning" icon="warning" %}}
A simple warning alert—check it out!
{{% /alert %}}

```go-html-template
{{%/* alert color="warning" icon="warning" */%}}
A simple warning alert—check it out!
{{%/* /alert */%}}
```

## Messages

{{% message color="primary" icon="info" %}}
This is a message.
{{% /message %}}

```go-html-template
{{%/* message color="primary" icon="info" */%}}
This is a message.
{{%/* /message */%}}
```

## Tabbed panes

{{< tabpane text=true >}}
{{< tab header="TypeScript" >}}
TypeScript is great!
{{< /tab >}}
{{< tab header="Swift" >}}
Swift is awesome!
{{< /tab >}}
{{< tab header="React" >}}
React is wonderful!
{{< /tab >}}
{{< /tabpane >}}

<br><br>

```go-html-template
{{</* tabpane text=true */>}}
{{</* tab header="TypeScript" */>}}
TypeScript is great!
{{</* /tab */>}}
{{</* tab header="Swift" */>}}
Swift is awesome!
{{</* /tab */>}}
{{</* tab header="React" */>}}
React is wonderful!
{{</* /tab */>}}
{{</* /tabpane */>}}
```

## Code Examples

{{< example lang="go-html-template" show_preview="false" >}}

{{</* tabpane text=true */>}}
{{</* tab header="TypeScript" */>}}
TypeScript is great!
{{</* /tab */>}}
{{</* tab header="Swift" */>}}
Swift is awesome!
{{</* /tab */>}}
{{</* tab header="React" */>}}
React is wonderful!
{{</* /tab */>}}
{{</* /tabpane */>}}

{{< /example >}}
