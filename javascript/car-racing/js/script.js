let highScore = +localStorage.getItem('highScore') || 0;
_('.high-score span').innerText = highScore;

function gameOver() {
  _('.game-over-screen').style.display = 'flex';
  __('.game-over-screen strong').forEach((element) => {
    element.innerText = score;
  });

  if (score >= highScore) {
    localStorage.setItem('highScore', score);
    _('.received-highscore').style.display = 'block';
  } else _('.received-score').style.display = 'block';
}

function init() {
  drawRoadAndPlayer();

  const obstacle1 = new Obstacle(-100);
  const obstacle2 = new Obstacle(-550);
  const obstacle3 = new Obstacle(-1000);

  obstacle1.drawObstacle();
  obstacle2.drawObstacle();
  obstacle3.drawObstacle();
}

_('#start').addEventListener('click', () => {
  gamePaused = false;
  init();
  _('.game-initializatation-screen').style.display = 'none';
});

_('#restart').addEventListener('click', () => {
  gamePaused = false;
  speed = 10;
  score = 0;

  init();
  _('.game-over-screen').style.display = 'none';
});

drawRoadAndPlayer();
