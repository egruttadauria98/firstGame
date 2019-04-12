export default class Paddle {
  constructor(game) {
    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;

    this.width = 150;
    this.height = 20;

    this.maxSpeed = 7;
    this.speedX = 0;
    this.speedY = 0;

    this.position = {
      x: game.gameWidth / 2 - this.width / 2,
      y: game.gameHeight - this.height - 10
    };
  }

  moveLeft() {
    if (
      this.position.y == game.gameHeight - this.height - 10 ||
      this.position.y == 10
    )
      this.speedX = -this.maxSpeed;
  }

  moveRight() {
    if (
      this.position.y == game.gameHeight - this.height - 10 ||
      this.position.y == 10
    )
      this.speedX = this.maxSpeed;
  }

  moveUp() {
    if (
      this.position.x == game.gameWidth - this.height - 10 ||
      this.position.x == 10
    )
      this.speedY = -this.maxSpeed;
  }

  moveDown() {
    if (
      this.position.x == game.gameWidth - this.height - 10 ||
      this.position.x == 10
    )
      this.speedY = this.maxSpeed;
  }

  stop() {
    this.speedX = 0;
    this.speedY = 0;
  }

  draw(ctx) {
    ctx.fillStyle = "#0ff";
    if (
      this.position.y == game.gameHeight - this.height - 10 ||
      this.position.y == 10
    )
      ctx.fillRect(this.position.x, this.position.y, this.width, this.height);

    if (
      this.position.x == game.gameWidth - this.height - 10 ||
      this.position.x == 10
    )
      ctx.fillRect(this.position.x, this.position.y, this.height, this.width);
  }

  update(deltaTime) {
    this.position.x += this.speedX;
    this.position.y += this.speedY;

    if (this.position.x < 10) this.position.x = 10;
    if (this.position.y < 10) this.position.y = 10;

    if (this.position.x + this.width > this.gameWidth - 10)
      this.position.x = this.gameWidth - this.width - 10;

    if (this.position.y + this.height > this.gameHeight - 10)
      this.position.y = this.gameHeight - this.height - 10;
  }
}
