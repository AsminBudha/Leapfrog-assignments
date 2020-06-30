function gameOver() {
  _('.game-over-screen').style.display = 'block';
}

function init() {
  drawRoadAndPlayer();

  const obstacle1 = new Obstacle(-50);
  const obstacle2 = new Obstacle(-400);
  const obstacle3 = new Obstacle(-750);

  obstacle1.drawObstacle();
  obstacle2.drawObstacle();
  obstacle3.drawObstacle();
}

_('#start').addEventListener('click', () => {
  gamePaused = false;
  init();
  _('.game-initializatation-screen').style.display = 'none';
});

drawRoadAndPlayer();
