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
var TOTAL_CAROUSEL_ITEMS = __('.carousel-item').length;
var SPEED = 35;
var selected = 0;
var position = 0;

/**
 * @returns {undefined}
 */

function slide() {
  var startAnimation = window.requestAnimationFrame(slide);
  if (position === -(selected * IMG_WIDTH)) {
    window.cancelAnimationFrame(startAnimation);
  } else if (position < -(selected * IMG_WIDTH)) {
    position += SPEED;
  } else {
    position -= SPEED;
  }

  _('.img-container').style.left = position + 'px';
}

/**
 * Create and insert controls
 */

var controls = document.createElement('div');
var carouselButtons = document.createElement('div');
var leftButton = document.createElement('button');
var rightButton = document.createElement('button');
var carouselDotsContainer = document.createElement('div');

controls.classList.add('controls');
carouselButtons.classList.add('carousel-buttons');
leftButton.classList.add('carousel-left-button');
rightButton.classList.add('carousel-right-button');
carouselDotsContainer.classList.add('carousel-dots-container');

leftButton.innerHTML = '&#9001;';
rightButton.innerHTML = '&#9002;';

_('.carousel-container').appendChild(controls);
controls.appendChild(carouselButtons);
carouselButtons.appendChild(leftButton);
carouselButtons.appendChild(rightButton);
controls.appendChild(carouselDotsContainer);

for (var i = 0; i < TOTAL_CAROUSEL_ITEMS; i++) {
  var carouselDot = document.createElement('div');
  carouselDot.classList.add('carousel-dot');
  carouselDotsContainer.appendChild(carouselDot);
}

/**
 * Event listeners for sliding images
 */
leftButton.addEventListener('click', function () {
  if (selected === 0) selected = TOTAL_CAROUSEL_ITEMS - 1;
  else selected--;

  slide();
});

rightButton.addEventListener('click', function () {
  selected = (selected + 1) % TOTAL_CAROUSEL_ITEMS;
  slide();
});

__('.carousel-dot').forEach(function (dot, index) {
  dot.addEventListener('click', function () {
    selected = index;
    slide();
  });
});
