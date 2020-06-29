const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.height = 900;
canvas.width = 1000;

class Ball {
  constructor(x, y, radius, dx = 5, dy = 5) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = 'green';
    this.dx = dx;
    this.dy = dy;
  }

  detectEdge = () => {
    if (this.x + this.radius >= canvas.width || this.x - this.radius <= 0)
      this.dx = -this.dx;
    if (this.y + this.radius >= canvas.height || this.y - this.radius <= 0)
      this.dy = -this.dy;
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

    this.x += this.dx;
    this.y += this.dy;
    this.draw();
  };
}
