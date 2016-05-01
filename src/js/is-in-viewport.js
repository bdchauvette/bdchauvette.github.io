/**
 * Determines if the given element is visible in the viewport
 *
 * @see http://stackoverflow.com/a/16270434
 * @param {DOMElement} targetEl - The element to scroll to
 * @return {boolean}
 */
export default function isInViewport(targetEl) {
  const targetRect = targetEl.getBoundingClientRect();

  return (
    targetRect.top < (window.innerHeight || document.documentElement.clientHeight)
    && targetRect.right > 0
    && targetRect.bottom > 0
    && targetRect.left < (window.innerWidth || document.documentElement.clientWidth)
  );
};
