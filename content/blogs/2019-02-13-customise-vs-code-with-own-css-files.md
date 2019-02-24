---
title: "Customise Visual Studio Code"
author: Xin 💓 Zhu
date: '2019-02-13'
slug: css customising visual studio code
categories:
  - programming
tags:
  - css
  - code
draft: false
toc: true
---

For users who have already memorized the keyboard shortcuts for these commands (and considering the existence of Ctrl-p and Ctrl-Shift-p), the buttons are kind of redundant. It would be nice to have an option to hide them as almost everything in the UI already can be hidden.

![Editor actions][editor-actions]

## Locate the targets

To find out the specific label, we have to access the Chrome DevTools window (the same as in Google Chrome browser) as VS Code is build using Electron. Use Help > Toggle Developer Tools to toggle it on and off. According to its aria-label it's called `Editor actions`, and each child has a class of `action-item`.

![Targets][target-locations]

## Create the customised css file

Using [Custom CSS and JS Loader](https://marketplace.visualstudio.com/items?itemName=be5invis.vscode-custom-css)

### Hide the whole thing

```css
[aria-label="Editor actions"] {
  display: none !important;
}
```

### Hide `action-items` by `Title`

**_Possible Titles_**

* `Open Changes`
* `Open Preview to the Side (⌘K V)`
* `Compare File with Previous Revision (⌥⌘G ,)`
* `Toggle File Blame Annotations (⌥⌘G B)`
* `Split Editor Right (⌘\)`
* `More Actions...`

```css
[title="Open Changes"] {
  display: none !important;
}
```

### Hide `action-items` by `#`

_Left-most item usually starts at 1, but it's not always in order_

```css
.menu-item-action-item-icon-1,
.menu-item-action-item-icon-2 {
  display: none !important;
}
```

[editor-actions]:https://uec3nq.ch.files.1drv.com/y4mpPB2U5nOSax7Fx1PhfacWLDi5jDktdBRzEFkw85NElTa8N8LWW3mPLL-J9qUMGHXmVLXB4RiYTqdeB9dJo8YaRL87xI4JF-Iv53865Rrpf7g5IINZ8RR5bbZbVMtz9nv3jqOHABxJVw1G3fYtpspGs-8StvS8SXPcWvAACbVajNnDDVwFiUqaYLf__h7o-lI?width=724&height=352&cropmode=none "Editor actions to be hidden"

[target-locations]:https://vfza1w.ch.files.1drv.com/y4mB7u820IA29m7tEj_f5QYt4xlAg6oFNoVEIsQG9zi94hUoXwnM85DkjPn9UCrJF8LRO_ZlHZPkpIYXc4BZiRj2ffFrCXlLvW5t0D4fPi1GRLYRjbGo0eSnq9BxMvwAKZO-26zOCYd04exfGjFEPKpqpg4ya975uvtSyYyUnQ81AhRIbcB1xtGJo43FSoSI9by?width=1492&height=256&cropmode=none "Targets to edit the actions"