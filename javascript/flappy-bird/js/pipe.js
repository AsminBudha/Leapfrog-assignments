class Pipe {
  constructor(image, x) {
    this.image = image;
    this.pipePosY = 323;
    this.downPipeX = 84;
    this.upPipeX = 56;
    this.gap = 200;
    this.height = 160;
    this.width = 26;
    this.pipeX = x * SCALE;
    this.pipeY = -100 * SCALE;
  }

  checkCollision = (game, bird) => {
    if (
      (bird.birdY <= this.pipeY + this.height * SCALE ||
        bird.birdY >= this.pipeY + this.height * SCALE + this.gap) &&
      (bird.birdX + bird.width * SCALE >= this.pipeX ||
        bird.birdX + bird.width * SCALE >= this.pipeX + this.width * SCALE)
    ) {
      game.gameOver = true;
    }
  };

  draw = (gameOver) => {
    ctx.drawImage(
      this.image,
      this.upPipeX,
      this.pipePosY,
      this.width,
      this.height,
      this.pipeX,
      this.pipeY,
      this.width * SCALE,
      this.height * SCALE
    );

    ctx.drawImage(
      this.image,
      this.downPipeX,
      this.pipePosY,
      this.width,
      this.height,
      this.pipeX,
      this.pipeY + this.gap + this.height * SCALE,
      this.width * SCALE,
      this.height * SCALE
    );

    this.pipeX -= 1.5;
    if (this.pipeX + this.width * SCALE <= 0) {
      this.pipeX = canvas.width + 100;
      SCORE++;
      console.log(SCORE);
    }

    if (gameOver) return;
    requestAnimationFrame(this.draw);
  };
}
