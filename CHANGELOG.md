# Changelog

All notable changes to `@todovue/tv-label` will be documented in this file.

This project adheres to [Semantic Versioning](https://semver.org/).

---
# Changelog

## [1.0.1] - 2025-10-17
### 🛠️ Changed
- Changed node-version to workflows release.yml to 20.
- The library build now uses `src/entry.ts` (exports both the component and the plugin) instead of directly exporting the `.vue` file.
- Updated import demo examples.
- Updated documentation for usage in SSR and Nuxt applications.

### 📦 Dependencies
- Updated Vite to `^7.0.0` to ensure compatibility with Node.js 20.19+.
- Updated @vitejs/plugin-vue to `^6.0.0`

## [1.0.0] - 2025-05-05
### ✨ Added
- Initial release of `TvLabel` component.
- Support for `color` and `textColor` props for full color customization.
- Support for optional `isEdit` and `isRemove` icons with configurable `iconPosition`.
- `textLabel` prop as an alternative to using slot content.
- Full slot support for flexible usage.
- Emits `click-label` and native `click` events.
- Integrated styles for seamless appearance in any layout.
- Ready-to-use demo and documentation site.

[1.0.1]: https://github.com/TODOvue/todovue-label/pull/6/files
[1.0.0]: https://github.com/TODOvue/todovue-label/pull/5/files
