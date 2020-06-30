const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.height = window.innerHeight;
canvas.width = 1000;

/**
 * Game Constants
 */

let speed = 10;
let gamePaused = true;

class Car {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

function drawRoadAndPlayer() {
  const road = new Image();
  road.src = 'images/road.png';

  road.onload = () => {
    console.log('hello');
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

  let playerCarPositionX = canvas.width / 2 - playerCar.width / 2;
  let playerCarPositionY = canvas.height - playerCar.height - 30;

  const drawCar = () => {
    ctx.drawImage(playerCar, playerCarPositionX, playerCarPositionY);

    if (gamePaused) return;
    requestAnimationFrame(drawCar);
  };

  playerCar.onload = () => {
    drawCar();
  };
}
