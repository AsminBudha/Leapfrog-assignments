/**
 * @param {String} selector
 * @returns {HTMLElement}
 */
function _(selector) {
  return document.querySelector(selector);
}

/**
 * @param {String} selector
 * @returns {NodeList}
 */
function __(selector) {
  return document.querySelectorAll(selector);
}
