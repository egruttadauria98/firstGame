export default class InputHandler {
  constructor(paddle, game) {
    document.addEventListener("keydown", event => {
      switch (event.keyCode) {
        case 37:
          paddle.moveLeft();
          break;

        case 38:
          paddle.moveUp()
          break  

        case 39:
          paddle.moveRight();
          break;

        case 40:
          paddle.moveDown()
          break

        case 27:
          game.togglePause();
          break;

        case 32:
          game.start();
          break;
      }
    });

    document.addEventListener("keyup", event => {
      switch (event.keyCode) {
        case 37:
          if (paddle.speedX < 0) paddle.stop();
          break;

        case 38:
          if (paddle.speedY < 0) paddle.stop();
          break;

        case 39:
          if (paddle.speedX > 0) paddle.stop();
          break;

        case 40:
          if (paddle.speedY < 0) paddle.stop();
          break;
      }
    });
  }
}
