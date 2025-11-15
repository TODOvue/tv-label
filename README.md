<p align="center"><img width="150" src="https://firebasestorage.googleapis.com/v0/b/todovue-blog.appspot.com/o/logo.png?alt=media&token=d8eb592f-e4a9-4b02-8aff-62d337745f41" alt="TODOvue logo">
</p>

# TODOvue Label (TvLabel)
A lightweight and customizable label (chip) component for Vue 3 designed to highlight statuses,
categories, or tags within your UI.
Perfect for Single Page Apps or Server-Side Rendered (SSR) environments (e.g. Nuxt 3).

[![npm](https://img.shields.io/npm/v/@todovue/tv-label.svg)](https://www.npmjs.com/package/@todovue/tv-label)
[![Netlify Status](https://api.netlify.com/api/v1/badges/8c4e2401-fefe-4f40-ae83-40681ecc36a5/deploy-status)](https://app.netlify.com/projects/tv-label/deploys)
[![npm downloads](https://img.shields.io/npm/dm/@todovue/tv-label.svg)](https://www.npmjs.com/package/@todovue/tv-label)
[![npm total downloads](https://img.shields.io/npm/dt/@todovue/tv-label.svg)](https://www.npmjs.com/package/@todovue/tv-label)
![License](https://img.shields.io/github/license/TODOvue/tv-label)
![Release Date](https://img.shields.io/github/release-date/TODOvue/tv-label)
![Bundle Size](https://img.shields.io/bundlephobia/minzip/@todovue/tv-label)
![Node Version](https://img.shields.io/node/v/@todovue/tv-label)
![Last Commit](https://img.shields.io/github/last-commit/TODOvue/tv-label)
![Stars](https://img.shields.io/github/stars/TODOvue/tv-label?style=social)

> Demo: https://tv-label.netlify.app/

---

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Quick Start (SPA)](#quick-start-spa)
- [Styles usage](#styles-usage)
- [Nuxt 3 / SSR Usage](#nuxt-3--ssr-usage)
- [Component Registration Options](#component-registration-options)
- [Props](#props)
- [Events](#events)
- [Slots](#slots)
- [Customization (Styles / Theming)](#customization-styles--theming)
- [Icon Usage](#icon-usage)
- [Accessibility](#accessibility)
- [SSR Notes](#ssr-notes)
- [Development](#development)
- [Changelog](#changelog)
- [Contributing](#contributing)
- [License](#license)

---

## Features
- Customizable color schemes with automatic opacity handling
- Optional edit and remove icons
- Flexible icon positioning (left or right)
- Custom text color support
- Slot-based or prop-based content
- Click event handling
- SSR compatible (works in Nuxt 3)
- Lightweight and performant
- Tree-shake friendly (Vue marked external in library build)

---

## Installation
Using npm:
```bash
npm install @todovue/tv-label
```
Using yarn:
```bash
yarn add @todovue/tv-label
```
Using pnpm:
```bash
pnpm add @todovue/tv-label
```

---

## Quick Start (SPA)
Global registration (main.js / main.ts):
```js
import { createApp } from 'vue'
import App from './App.vue'
import '@todovue/tv-label/style.css'
import { TvLabel } from '@todovue/tv-label'

createApp(App)
  .component('TvLabel', TvLabel)
  .mount('#app')
```

Local import inside a component:
```vue
<script setup>
import '@todovue/tv-label/style.css'
import { TvLabel } from '@todovue/tv-label'

const clickHandler = () => {
  console.log('Label clicked')
}
</script>

<template>
  <TvLabel @click-label="clickHandler" color="#4FC08D">
    Vue
  </TvLabel>
</template>
```

---

## Styles usage

### Vue 3 / Vite (SPA)

```ts
// main.ts
import { createApp } from 'vue'
import App from './App.vue'

import '@todovue/tv-label/style.css'
import { TvLabel } from '@todovue/tv-label'

const app = createApp(App)
app.component('TvLabel', TvLabel)
app.mount('#app')
```

### Nuxt 3 / 4

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  css: ['@todovue/tv-label/style.css'],
})
```

---

## Nuxt 3 / SSR Usage
Create a plugin file: `plugins/tv-label.client.ts` (client-only is fine, or without suffix for SSR as it is safe):
```ts
import { defineNuxtPlugin } from '#app'
import TvLabel from '@todovue/tv-label'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(TvLabel)
})
```

Use anywhere in your Nuxt app:
```vue
<template>
  <TvLabel color="#42b883" :isEdit="true">
    Editable Label
  </TvLabel>
</template>
```

Optional direct import (no plugin):
```vue
<script setup>
import { TvLabel } from '@todovue/tv-label'
</script>

<template>
  <TvLabel color="#ff6b6b" :isRemove="true">
    Removable Tag
  </TvLabel>
</template>
```

---

## Component Registration Options
| Approach                                                        | When to use                                    |
|-----------------------------------------------------------------|------------------------------------------------|
| Global via `app.use(TvLabel)`                                   | Many usages across app / design system install |
| Global via `app.use(TvLabelPlugin)`                             | Alternative plugin syntax                      |
| Local named import `{ TvLabel }`                                | Isolated / code-split contexts                 |
| Direct default import `import TvLabel from '@todovue/tv-label'` | Single usage or manual registration            |

---

## Props
| Prop         | Type    | Default     | Description                                                                             |
|--------------|---------|-------------|-----------------------------------------------------------------------------------------|
| color        | String  | `''`        | Label background color in hexadecimal (e.g., `#4FC08D`). Automatically applies opacity. |
| textLabel    | String  | `''`        | Text content for the label (alternative to using the default slot).                     |
| textColor    | String  | `'inherit'` | Text color for the label content.                                                       |
| isEdit       | Boolean | `false`     | Show edit icon inside the label.                                                        |
| isRemove     | Boolean | `false`     | Show remove icon inside the label.                                                      |
| iconPosition | String  | `'right'`   | Position of icons relative to text: `'left'` or `'right'`.                              |

---

## Events
| Event name (kebab) | Emits (camel) | Description                                                |
|--------------------|---------------|------------------------------------------------------------|
| `click-label`      | `clickLabel`  | Custom semantic click event emitted when label is clicked. |
| `click`            | `click`       | Native click event (also emitted).                         |

Usage examples:
```vue
<template>
  <!-- Using custom event -->
  <TvLabel @click-label="handleLabelClick" color="#3498db">
    Click me
  </TvLabel>

  <!-- Using native click event -->
  <TvLabel @click="handleClick" color="#e74c3c">
    Native click
  </TvLabel>

  <!-- Both events work simultaneously -->
  <TvLabel 
    @click-label="handleCustom" 
    @click="handleNative" 
    color="#9b59b6"
  >
    Dual events
  </TvLabel>
</template>

<script setup>
const handleLabelClick = () => {
  console.log('Custom click-label event')
}

const handleClick = () => {
  console.log('Native click event')
}

const handleCustom = () => {
  console.log('Custom handler')
}

const handleNative = () => {
  console.log('Native handler')
}
</script>
```

---

## Slots
| Slot name | Description                                                                  |
|-----------|------------------------------------------------------------------------------|
| default   | Main content slot for label text. If not provided, `textLabel` prop is used. |

Example:
```vue
<template>
  <!-- Using slot -->
  <TvLabel color="#4FC08D">
    <strong>Vue 3</strong> Framework
  </TvLabel>

  <!-- Using textLabel prop -->
  <TvLabel color="#4FC08D" textLabel="Vue 3 Framework" />
</template>
```

---

## Customization (Styles / Theming)
The component automatically handles color opacity and border styling based on the `color` prop:

```vue
<template>
  <!-- Green label -->
  <TvLabel color="#4FC08D">Success</TvLabel>

  <!-- Red label with custom text color -->
  <TvLabel color="#f56565" textColor="#ffffff">Error</TvLabel>

  <!-- Blue label with white text -->
  <TvLabel color="#3182ce" textColor="#fff">Info</TvLabel>

  <!-- Custom brand color -->
  <TvLabel color="#6366f1" textColor="#e0e7ff">Brand</TvLabel>
</template>
```

The component applies:
- Background color with automatic opacity (lighter shade)
- 2px solid border using the full color
- Customizable text color via `textColor` prop

---

## Icon Usage
Display edit or remove icons within your labels:

```vue
<template>
  <!-- Edit icon on the right (default) -->
  <TvLabel color="#4FC08D" :isEdit="true">
    Editable
  </TvLabel>

  <!-- Remove icon on the right -->
  <TvLabel color="#f56565" :isRemove="true">
    Removable
  </TvLabel>

  <!-- Edit icon on the left -->
  <TvLabel color="#3182ce" :isEdit="true" iconPosition="left">
    Edit Left
  </TvLabel>

  <!-- Remove icon on the left -->
  <TvLabel color="#9f7aea" :isRemove="true" iconPosition="left">
    Remove Left
  </TvLabel>

  <!-- With click handler -->
  <TvLabel 
    color="#ed8936" 
    :isEdit="true" 
    @click-label="handleEdit"
  >
    Click to Edit
  </TvLabel>
</template>

<script setup>
const handleEdit = () => {
  console.log('Edit action triggered')
}
</script>
```

---

## Accessibility
- **Semantic HTML**: The component uses a `<div>` with click handlers. For better accessibility, consider wrapping in a `<button>` if it represents an interactive action.
- **Color contrast**: Ensure sufficient contrast between `color` and `textColor` for readability.
- **Interactive labels**: When using `isEdit` or `isRemove`, consider adding ARIA attributes or wrapping in semantic elements.

Best practices:
```vue
<template>
  <!-- For non-interactive labels (display only) -->
  <TvLabel color="#4FC08D">Status: Active</TvLabel>

  <!-- For interactive labels, consider adding role or wrapping -->
  <div role="button" tabindex="0" @keydown.enter="handleAction">
    <TvLabel color="#3182ce" :isEdit="true" @click-label="handleAction">
      Edit me
    </TvLabel>
  </div>
</template>
```

---

## SSR Notes
- **SSR Compatible**: No direct DOM (`window` / `document`) access → safe for server-side rendering.
- **Nuxt 3 Ready**: Works seamlessly in Nuxt 3 applications.
- **Styles**: Component styles are scoped and work correctly in SSR environments.
- **Icons**: SVG icons are embedded inline, ensuring they render correctly on the server.

---

## Development
Clone the repository and install dependencies:
```bash
git clone https://github.com/TODOvue/tv-label.git
cd tv-label
yarn install
yarn dev     # run demo playground
yarn build   # build library
```

The demo is served from Vite using `index.html` and includes various usage examples.

---

## Changelog
See [CHANGELOG.md](https://github.com/TODOvue/tv-label/blob/main/CHANGELOG.md) for version history and updates.

---

## Contributing
Contributions are welcome! Please read our [Contributing Guidelines](https://github.com/TODOvue/tv-label/blob/main/CONTRIBUTING.md) and [Code of Conduct](https://github.com/TODOvue/tv-label/blob/main/CODE_OF_CONDUCT.md).

---

## License
[MIT](https://github.com/TODOvue/tv-label/blob/main/LICENSE) © TODOvue

---

### Attributions
Crafted for the TODOvue component ecosystem
