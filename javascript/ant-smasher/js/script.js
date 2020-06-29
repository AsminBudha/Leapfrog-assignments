let balls = [];

/**
 * @param {Number} totalBalls
 * @returns {undefined}
 *
 * A function to initialize the canvas draw
 * totalBalls number of balls
 */
function init(totalBalls) {
  const img = new Image();
  img.src =
    'https://prashantacharya.github.io/Leapfrog-assignments/javascript/ant-smasher/images/ant.png';
  img.onload = () => {
    for (let i = 0; i < totalBalls; i++) {
      let radius = 10;
      let x = randomRange(radius, canvas.width - radius);
      let y = randomRange(radius, canvas.height - radius);
      let dx = randomRange(-3, 3);
      let dy = randomRange(-3, 3);

      // Detect collision and modify center
      if (i !== 0) {
        for (let j = 0; j < i; j++) {
          let d = getDistance(x, y, balls[j].x, balls[j].y);
          if (d <= (radius + balls[j].radius) ** 2) {
            x = randomRange(radius, canvas.width - radius);
            y = randomRange(radius, canvas.height - radius);
            j = -1;
          }
        }
      }

      let ball = new Ant(x, y, radius, dx, dy, img);

      balls.push(ball);
    }
  };
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

init(30);
animate();

const destruct = (ant) => {
  const updatedAnts = balls.filter((items, index) => ant !== index);
  balls = updatedAnts;
};

canvas.addEventListener('mousedown', (event) => {
  let x = event.x;
  let y = event.y;

  x -= canvas.offsetLeft;
  y -= canvas.offsetTop;

  for (let i = 0; i < balls.length; i++) {
    if (getDistance(x, y, balls[i].x, balls[i].y) <= balls[i].radius ** 2) {
      destruct(i);
    }
  }
});
