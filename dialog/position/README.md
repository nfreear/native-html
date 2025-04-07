
# dialog-position #

A stylesheet to easily position a native HTML `<dialog>` element on the page, to use as the basis for any modal overlay.

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

Using a native `<dialog>` for the modal overlays in your web site or app has a number of benefits:

* A clearly defined API,
* [Well supported][cani] by browsers,
* Built-in accessibility, including keyboard and screen reader accessibility.

Making modal dialogs accessible is not easy - see the W3C's [dialog.js][] for their [modal APG pattern][apg].

[dlg]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog
[webpack]: https://webpack.js.org/
[css-loader]: https://webpack.js.org/loaders/css-loader/
[cani]: https://caniuse.com/dialog
[apg]: https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/examples/dialog/
[src:dialog.js]: https://www.w3.org/WAI/content-assets/wai-aria-practices/patterns/dialog-modal/examples/js/dialog.js
[dialog.js]: https://github.com/w3c/aria-practices/blob/main/content/patterns/dialog-modal/examples/js/dialog.js
