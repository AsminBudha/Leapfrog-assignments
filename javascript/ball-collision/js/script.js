let balls = [];

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
 * @param {Number} totalBalls
 * @returns {undefined}
 *
 * A function to initialize the canvas draw
 * totalBalls number of balls
 */
function init(totalBalls) {
  for (let i = 0; i < totalBalls; i++) {
    let radius = randomRange(10, 20);
    let x = randomRange(radius, canvas.width - radius);
    let y = randomRange(radius, canvas.height - radius);
    let dx = randomRange(-10, 10);
    let dy = randomRange(-10, 10);

    let ball = new Ball(x, y, radius, dx, dy);

    balls.push(ball);
  }
}

/**
 * @returns {undefined}
 * A function that animates the balls in the canvas
 */
function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  balls.forEach((ball) => ball.move());
}

init(10);
animate();
