class Bird {
  constructor(image) {
    this.image = image;
    this.imagePosX = 115;
    this.imagePosY = 329;
    this.height = 12;
    this.width = 17;
    this.birdX = 30 * SCALE;
    this.birdY = 128 * SCALE;
    this.gravity = 0.1;
    this.animationFrame = null;
  }

  draw = () => {
    ctx.drawImage(
      this.image,
      this.imagePosX,
      this.imagePosY,
      this.width,
      this.height,
      this.birdX,
      this.birdY,
      this.width * SCALE,
      this.height * SCALE
    );

    this.birdY += this.gravity;

    this.animationFrame = requestAnimationFrame(this.draw);
  };
}
