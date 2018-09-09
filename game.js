class Board {
  draw() {
    ctx.fillStyle = "#b0bb00";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }
}

class Snake {
  draw() {
    ctx.fillStyle = "#5f4f00";
    ctx.fillRect(50, 50, 25, 25);
  }
}

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var board = new Board();
var snake = new Snake();

function update() {
  board.draw();
  snake.draw();
}
setInterval(update, 350);
