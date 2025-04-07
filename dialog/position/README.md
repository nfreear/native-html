
# dialog-position #

A stylesheet to easily position a native HTML `<dialog>` element on the page, to use as the basis for any modal overlay.

## Usage

Set the `data-position` attribute on a [`<dialog>` element][dlg], to position it.

Directly link from a CDN:

```html
<link rel="stylesheet" href="https://unpkg.com/dialog-position@^1/index.css">

<dialog data-position="bottom">
  <h2>My overlay</h2>
  ...
</dialog>
```

With Webpack and css-loader:
```js
import 'dialog-position/style';
// ...

const dialog = document.querySelector('#myDialog');
dialog.showModal();
```


[dlg]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog
