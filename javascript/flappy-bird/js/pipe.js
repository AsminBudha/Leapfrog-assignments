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
    this.pipeY = getRandomElement([-70, -100, -130]) * SCALE;
  }

  checkCollision = (game, bird) => {
    if (
      (bird.birdY <= this.pipeY + this.height * SCALE ||
        bird.birdY + bird.height >=
          this.pipeY + this.height * SCALE + this.gap) &&
      (bird.birdX + bird.width >= this.pipeX ||
        bird.birdX - bird.width >= this.pipeX + this.width)
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

    this.pipeX -= 1;
    if (this.pipeX + this.width * SCALE <= 0) {
      this.pipeX = canvas.width + 100;
      this.pipeY = getRandomElement([-70, -100, -130]) * SCALE;
      SCORE++;
    }

    if (gameOver) return;
    requestAnimationFrame(this.draw);
  };
}
