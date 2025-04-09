/**
 * Does the browser support native HTML <dialog>?
 * @see https://modernizr.com/
 * @license MIT
 */
export function supportsDialog (addClass = true) {
  const DLG = document.createElement('dialog');
  const supports = DLG && typeof DLG.showModal === 'function';
  if (addClass) {
    document.documentElement.classList.add(supports ? 'native-dialog' : 'no-native-dialog');
  }
  console.assert(supports, 'Native <dialog> - not supported');
  return supports;
}
