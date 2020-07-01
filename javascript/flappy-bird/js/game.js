class Game {
  constructor() {
    this.spriteImg = new Image();
    this.spriteImg.src = 'images/sprites.png';
    this.gameOver = false;
    this.bird = new Bird(this.spriteImg);
    this.platform = new Platform(this.spriteImg);
    this.tick = 0;
  }

  checkGameOver = () => {
    if (this.platform.positionY - this.bird.birdY <= this.bird.height * SCALE) {
      this.bird.gravity = 0;
      this.gameOver = true;
    }
  };

  animateObjects = () => {
    ctx.drawImage(
      this.spriteImg,
      0,
      0,
      144,
      256,
      0,
      0,
      144 * SCALE,
      256 * SCALE
    );

    this.bird.draw();
    this.platform.draw();

    this.checkGameOver();
    if (this.gameOver) {
      return;
    }

    console.log(this.tick++);
    window.requestAnimationFrame(this.animateObjects);
  };

  drawGameObjects = () => {
    this.spriteImg.onload = () => {
      this.animateObjects();
    };
  };
}
