const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

class Ball {
  constructor(x, y, radius, dx, dy, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.dx = dx;
    this.dy = dy;
    this.color = color;
    this.mass = 1;
  }

  detectEdge = () => {
    if (this.x + this.radius >= canvas.width || this.x - this.radius <= 0)
      this.dx = -this.dx;
    if (this.y + this.radius >= canvas.height || this.y - this.radius <= 0)
      this.dy = -this.dy;
  };

  rotate = (dx, dy, angle) => {
    return {
      dx: dx * Math.cos(angle) - dy * Math.sin(angle),
      dy: dx * Math.sin(angle) + dy * Math.cos(angle),
    };
  };

  collisionEffect = (otherBall) => {
    const angle = -Math.atan2(otherBall.y - this.y, otherBall.x - this.x);
    const u1 = this.rotate(this.dx, this.dy, angle);
    const u2 = this.rotate(otherBall.dx, otherBall.dy, angle);

    const v1 = {
      dx:
        ((this.mass - otherBall.mass) * u1.dx) / (this.mass + otherBall.mass) +
        (2 * otherBall.mass * u2.dx) / (this.mass + otherBall.mass),
      dy: u1.dy,
    };

    const v2 = {
      dx:
        ((this.mass - otherBall.mass) * u2.dx) / (this.mass + otherBall.mass) +
        (2 * otherBall.mass * u1.dx) / (this.mass + otherBall.mass),
      dy: u2.dy,
    };

    const rotatedv1 = this.rotate(v1.dx, v1.dy, -angle);
    const rotatedv2 = this.rotate(v2.dx, v2.dy, -angle);

    this.dx = rotatedv1.dx;
    this.dy = rotatedv1.dy;

    otherBall.dx = rotatedv2.dx;
    otherBall.dy = rotatedv2.dy;
  };

  detectCollision = () => {
    for (let i = 0; i < balls.length; i++) {
      if (this === balls[i]) continue;

      if (
        getDistance(this.x, this.y, balls[i].x, balls[i].y) <=
        (this.radius + balls[i].radius) ** 2
      ) {
        this.collisionEffect(balls[i]);
      }
    }
  };

  draw = () => {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  };

  move = () => {
    this.detectEdge();
    this.detectCollision();
    this.x += this.dx;
    this.y += this.dy;
    this.draw();
  };
}
