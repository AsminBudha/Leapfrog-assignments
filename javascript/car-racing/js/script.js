function init() {
  drawRoadAndPlayer();
}

_('#start').addEventListener('click', () => {
  gamePaused = false;
  init();
  _('.game-initializatation-screen').style.display = 'none';
});

drawRoadAndPlayer();
