# Reader Branding Guide

All reader-interface branding is controlled by one file:

`public/branding.json`

Edit that file to change the top-bar publication name, browser title, logo, reader colors, interface fonts, table of contents, thumbnails, search panel, bookmarks menu, music menu, buttons, focus rings, and other reader dropdowns.

## Main fields

- `publicationName`: name displayed in the top bar.
- `browserTitle`: browser-tab title.
- `logoUrl`: top-bar logo. A local path such as `/images/brand/logo.png` is recommended.
- `logoAlt`: accessible logo description.
- `colors.primary`: main dark interface color.
- `colors.secondary`: links and secondary highlights.
- `colors.accent`: primary accent color.
- `colors.accentLight`: lighter controls and focus color.
- `colors.surface`: light menu/card background.
- `colors.ink`: dark text color on light surfaces.
- `colors.border`: menu and card border color.
- `colors.hover`: light hover background.
- `colors.readerBackground`: fallback color behind the magazine.
- `fonts.heading`: heading font family.
- `fonts.body`: editorial/body font family.
- `fonts.interface`: top bar, menus, table of contents, and controls.
- `fonts.googleFontsUrl`: optional Google Fonts stylesheet containing the selected fonts.

## Logo replacement

Place the new logo in `public/images/brand/`, then update `logoUrl` in `public/branding.json`.

Example:

```json
"logoUrl": "/images/brand/my-new-logo.png"
```

## Build

After changing source code, run:

```bash
npm install
npm run build
```

Ordinary future branding changes to `public/branding.json` and logo files do not require editing React components.

For a WordPress embed, the plugin may optionally provide a custom `brandingUrl` through `window.theWordsWeCarryConfig`. Otherwise the built-in `branding.json` is used.
