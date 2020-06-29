const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

class Ant {
  constructor(x, y, radius, dx, dy, ant) {
    this.x = x;
    this.y = y;
    this.radius = 16;
    this.dx = dx;
    this.dy = dy;
    this.ant = ant;
  }

  detectEdge = () => {
    if (this.x + this.radius >= canvas.width || this.x - this.radius <= 0)
      this.dx = -this.dx;
    if (this.y + this.radius >= canvas.height || this.y - this.radius <= 0)
      this.dy = -this.dy;
  };

  resolveCollision = (otherBall) => {
    this.dx = -this.dx;
    this.dy = -this.dy;
    otherBall.dx = -otherBall.dx;
    otherBall.dy = -otherBall.dy;
  };

  detectCollision = () => {
    for (let i = 0; i < balls.length; i++) {
      if (this === balls[i]) continue;

      if (
        getDistance(this.x, this.y, balls[i].x, balls[i].y) <=
        (this.radius + balls[i].radius) ** 2
      ) {
        this.resolveCollision(balls[i]);
      }
    }
  };

  draw = () => {
    ctx.drawImage(this.ant, this.x - this.radius, this.y - this.radius);
  };

  move = () => {
    this.detectEdge();
    this.detectCollision();
    this.x += this.dx;
    this.y += this.dy;
    this.draw();
  };
}
