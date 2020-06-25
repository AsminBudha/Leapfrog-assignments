/**
 * @param {string} selector
 * @returns {HTMLElement}
 */

var _ = function (selector) {
  return document.querySelector(selector);
};

/**
 * @param {string} selector
 * @returns {NodeList}
 */

var __ = function (selector) {
  return document.querySelectorAll(selector);
};

var IMG_WIDTH = 700;
var CAROUSEL_ITEMS = __('.carousel-item').length;
var SPEED = 20;
var selected = 0;
var position = 0;

/**
 * @param {},
 * @returns {undefined}
 */

function slide() {
  var startAnimation = window.requestAnimationFrame(slide);
  if (position === -(selected * IMG_WIDTH)) {
    window.cancelAnimationFrame(startAnimation);
  } else if (position < -(selected * IMG_WIDTH)) {
    position += speed;
  } else {
    position -= speed;
  }

  _('.img-container').style.left = position + 'px';
}
