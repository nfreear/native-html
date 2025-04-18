/**
 * @license MIT
 */
export const position = {
  top: 'top',
  bottom: 'bottom',
  left: 'left',
  right: 'right',
  topLeft: 'top-left',
  topRight: 'top-right',
  bottomLeft: 'bottom-left',
  bottomRight: 'bottom-right'
};

export function showModal (dialogId, options) {
  const dialog = document.getElementById(dialogId);
  console.assert(dialog, `<dialog> - Not found, #${dialogId}`);
  console.assert(options && options.position, 'options.position - Not set.');
  console.assert(typeof options.position === 'string', 'options.position - Expecting a string.');
  console.assert(validatePosition(options.position), 'options.position - Unexpected value.');

  dialog.dataset.position = options.position;
  dialog.showModal();
}

export function validatePosition (position) {
  const RE = /^(top|bottom|left|right)$/;
  const RE_2 = /^(top|bottom)-(left|right)$/;
  return RE.test(position) || RE_2.test(position);
}

export default showModal;
