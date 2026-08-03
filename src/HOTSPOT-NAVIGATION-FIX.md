# Inside-cover hotspot navigation fix

Internal table-of-contents and featured-article hotspots now dispatch the
`rrm:navigate` application event with the destination page number. `App.tsx`
handles that event directly, so navigation no longer depends on the toolbar's
page-jump input being visible.

`front-spread-hotspots.js` also retains a delayed form-submit fallback for
older cached production bundles.
