const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

class Ant {
  constructor(x, y, dx, dy, ant) {
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

  resolveCollision = (otherAnt) => {
    this.dx = -this.dx;
    this.dy = -this.dy;
    otherAnt.dx = -otherAnt.dx;
    otherAnt.dy = -otherAnt.dy;
  };

  detectCollision = () => {
    for (let i = 0; i < ants.length; i++) {
      if (this === ants[i]) continue;

      if (
        getDistance(this.x, this.y, ants[i].x, ants[i].y) <=
        (this.radius + ants[i].radius) ** 2
      ) {
        this.resolveCollision(ants[i]);
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
