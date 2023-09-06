---
title: "Analytics"
layout: "single"
description: "Easily setup Google Analytics or Plausible Analytics for your site."
group: "customization"
---

## Google Analytics

Specify your Google tracking ID in the param by replacing `G-MEASUREMENT_ID` your tracking ID:

```yaml
googleAnalytics: "G-MEASUREMENT_ID"
```

## Plausible Analytics

Specify your site's domain name in the `hugo.yml` config file:

```yaml
params:
  PlausibleAnalyticsDomain: example.com
```

Plausible Analytics will automatically track outbound links.
