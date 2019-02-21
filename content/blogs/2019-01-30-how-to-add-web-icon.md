---
title: A method to customise the website icon in Hugo themes
author: Xin 💓 Zhu
date: '2019-01-30'
slug: A method to customise the website icon in Hugo themes
categories:
  - programming
tags:
  - code
  - html
images:
  - https://eldakg.ch.files.1drv.com/y4mPNXOqljKyVvs7f3soInOf_7I3sY-31sRjVo7iETSHsARMzvBAMz8U3iibnHkfSSNVKMztrvdGfDU29RmmV-oyMu4lcbbxibpb_IHQjIfD1YpcLf4ZY1niquLCNQej8Wbx4yvAk7vYD37zE7rI7zq7h-iM8WE5cOUJcckExSZtx68JVRX6cXUlhq75H-jVFQf?width=2810&height=562&cropmode=none
draft: false
toc: true
---

## Implementation

To achieve the goal, we only need to add one line code in the `<head>` part located in `<index.html>`：

```html
<link rel="shortcut icon" href="/img/faviconfile.ico">
```

However, a template is required for general use. See details below:

```html
<!-- Icon -->
<link rel="shortcut icon"
  {{ if .Site.Params.faviconfile }}
     href="/{{ .Site.Params.faviconfile }}"
  {{ else if.Site.Params.avatar}}
     href="/{{ .Site.Params.avatar }}"
  {{ end }}
>
```

`faviconfile` is the image path customised in the `config.toml`. If the `faviconfile` doesn't exist, the `avatar` will be the alternative for the website logo.