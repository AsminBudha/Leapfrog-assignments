let balls = [];

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
    let color = getRandomColor();

    // Detect collision and modify x and y
    if (i !== 0) {
      for (let j = 0; j < i; j++) {
        let d = getDistance(x, y, balls[j].x, balls[j].y);
        if (d <= radius + balls[j].radius) {
          x = randomRange(radius, canvas.width - radius);
          y = randomRange(radius, canvas.height - radius);
          j = -1;
        }
      }
    }

    let ball = new Ball(x, y, radius, dx, dy, color);

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

init(20);
animate();
