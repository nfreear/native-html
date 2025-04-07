
[![Node.js CI][ci-img]][ci]

# dialog-position #

A stylesheet to easily position a native HTML `<dialog>` element on the page, to use as the basis for any accessible modal overlay.

## `data-position` attribute

The following values are supported:
```yaml
# Full width or height values:
top
bottom
left
right
# Corner position values:
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

const dialog = document.querySelector('#myDialog');
dialog.showModal();
```

Position programmatically:
```js
import showModalPositioned from 'dialog-position';

showModalPositioned('myDialogId', { position: 'bottom' });
```

## Why?

Making modal dialogs accessible is not easy — see the [W3C’s][wai] [dialog.js][] for the [modal APG pattern][apg] for an example of what’s involved.

Using a native `<dialog>` for the modal overlays in your web site or app has a number of benefits:

* A clearly defined [API][dlg],
* [Well supported][cani] by browsers,
* Built-in [accessibility][], including keyboard and screen reader accessibility.

[ci]: https://github.com/nfreear/native-html/actions/workflows/node.js.yml
[ci-img]: https://github.com/nfreear/native-html/actions/workflows/node.js.yml/badge.svg

[dlg]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog
[accessibility]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog#accessibility
[webpack]: https://webpack.js.org/
[css-loader]: https://webpack.js.org/loaders/css-loader/
[cani]: https://caniuse.com/dialog
[wai]: https://www.w3.org/WAI/
[apg]: https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/examples/dialog/
[src:dialog.js]: https://www.w3.org/WAI/content-assets/wai-aria-practices/patterns/dialog-modal/examples/js/dialog.js
[dialog.js]: https://github.com/w3c/aria-practices/blob/main/content/patterns/dialog-modal/examples/js/dialog.js
