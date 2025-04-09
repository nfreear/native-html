
[![Node.js CI][ci-img]][ci]
[![NPM Version][npm-img]][npm]

# dialog-position #

A stylesheet to easily position a native HTML `<dialog>` element on the page, to use as the basis for any accessible modal overlay.

* Demo: [CodePen - @nfreear/pen/dPyLYyN][pen]

## `data-position` attribute

The following values are supported for the `data-position` attribute:
```yaml
# These result in a full width modal:
top
bottom
# These result in a full height modal:
left
right
# These result in a modal positioned in one corner:
top-left
top-right
bottom-left
bottom-right
```

## Usage

Set the `data-position` attribute on a [`<dialog>` element][dlg], to position it.

Directly link from a CDN:

```html
<link rel="stylesheet" href="https://unpkg.com/dialog-position@^1/index.css">

<dialog data-position="bottom">
  <h2>My overlay</h2>
  …
</dialog>
```

With [Webpack][] and [css-loader][]:
```js
import 'dialog-position/style';

// …

const dialog = document.querySelector('#myDialogId');
dialog.showModal();
```

Position programmatically:
```js
import { showModal, position } from 'dialog-position';

showModal('myDialogId', { position: position.bottomRight });
```

## Why?

Making modal dialogs accessible is not easy — see the [W3C][wai]’s [dialog.js][] file for the [modal APG pattern][apg] for an example of what’s involved.

Using a native `<dialog>` for the modal overlays in your web site or app has a number of benefits:

* A clearly defined [API][dlg],
* Fully stylable with CSS,
* [Well supported][cani] by browsers,
* Built-in [accessibility][], including keyboard and screen reader accessibility.

If you still prefer a non-native dialog, please consider using a library such as [Kitty Giraudel][kitty]’s [a11y-dialog][].

## Acknowledgements

Thanks to contributors on [Stackoverflow][so] for inspiration!

[ci]: https://github.com/nfreear/native-html/actions/workflows/node.js.yml
[ci-img]: https://github.com/nfreear/native-html/actions/workflows/node.js.yml/badge.svg
[npm]: https://www.npmjs.com/package/dialog-position
[npm-img]:https://img.shields.io/npm/v/dialog-position

[pen]: https://codepen.io/nfreear/pen/dPyLYyN
[so]: https://stackoverflow.com/questions/73925255/how-can-the-html-dialog-element-be-positioned-according-to-normal-flow-when-op#77652902
 "Stackoverflow: How can the HTML element be positioned according to normal flow when opened with showModal?"
[dlg]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog
[accessibility]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog#accessibility
[webpack]: https://webpack.js.org/
[css-loader]: https://webpack.js.org/loaders/css-loader/
[cani]: https://caniuse.com/dialog
  "Can I Use: dialog? — 96% support globally"
[wai]: https://www.w3.org/WAI/
[apg]: https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/examples/dialog/
[src:dialog.js]: https://www.w3.org/WAI/content-assets/wai-aria-practices/patterns/dialog-modal/examples/js/dialog.js
[dialog.js]: https://github.com/w3c/aria-practices/blob/main/content/patterns/dialog-modal/examples/js/dialog.js
  "dialog.js (333 lines), on GitHub"
[kitty]: https://github.com/KittyGiraudel
[a11y-dialog]: https://www.npmjs.com/package/a11y-dialog
