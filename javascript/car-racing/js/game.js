const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.height = window.innerHeight;
canvas.width = 1000;

/**
 * Game Constants
 */
let score = 0;
let possibleXPositions = [60, 410, 760];
let speed = 10;
let gamePaused = true;
let playerCarPositionX = 410;
let playerCarPositionY = 803;

class Obstacle {
  constructor(y) {
    this.x = getRandomElement(possibleXPositions);
    this.y = y;
    this.prevY = this.y;
    this.speed = 5;
  }

  detectCollision = () => {
    if (this.x === playerCarPositionX && playerCarPositionY - this.y <= 179) {
      gamePaused = true;
      gameOver();
      return;
    }
  };

  drawObstacle = () => {
    const obstacle = new Image();
    obstacle.src = 'images/car.png';
    obstacle.onload = () => {
      const moveObstacle = () => {
        ctx.drawImage(obstacle, this.x, this.y);
        this.y += this.speed;

        if (this.y > canvas.height + 100) {
          this.y = this.prevY;
          this.x = getRandomElement(possibleXPositions);
          score++;
          if (speed < 50) {
            speed += 0.5;
            this.speed = speed / 5;
          }
        }
        this.detectCollision();

        if (gamePaused) return;
        requestAnimationFrame(moveObstacle);
      };

      moveObstacle();
    };
  };
}

function drawRoadAndPlayer() {
  const road = new Image();
  road.src = 'images/road.png';

  road.onload = () => {
    let y = 0;
    const moveRoad = () => {
      ctx.drawImage(
        road,
        0,
        y - canvas.height,
        canvas.width,
        canvas.height * 2
      );
      y += speed;
      if (y >= canvas.height) y = 0;

      if (gamePaused) return;
      requestAnimationFrame(moveRoad);
    };
    moveRoad();
  };

  const playerCar = new Image();
  playerCar.src = 'images/audi.png';

  const drawCar = () => {
    ctx.drawImage(playerCar, playerCarPositionX, playerCarPositionY);

    if (gamePaused) return;
    requestAnimationFrame(drawCar);
  };

  playerCar.onload = () => {
    drawCar();
  };
}

document.addEventListener('keydown', (e) => {
  if (e.code == 'ArrowLeft' && playerCarPositionX > 60)
    playerCarPositionX -= 350;

  if (e.code == 'ArrowRight' && playerCarPositionX < 760)
    playerCarPositionX += 350;
});
