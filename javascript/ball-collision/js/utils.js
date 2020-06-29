/**
 * @param {Number} min
 * @param {Number} max
 * @returns {Number}
 *
 * return random number in a range
 */

function randomRange(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

/**
 * @returns {String}
 */
function getRandomColor() {
  let r = randomRange(0, 255);
  let g = randomRange(0, 255);
  let b = randomRange(0, 255);
  let a = Math.random() * (1 - 0.3) + 0.3;

  return `rgb(${r}, ${g}, ${b}, ${a})`;
}

/**
 * @param {Number} x1
 * @param {Number} x2
 * @param {Number} y1
 * @param {Number} y2
 * @returns {Number}
 */

function getDistance(x1, y1, x2, y2) {
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}
