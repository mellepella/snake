class Controller {
  static readInput(event) {
    if (event.key == "ArrowDown") {
      snake.direction = Vector.down;
    } else if (event.key == "ArrowUp") {
      snake.direction = Vector.up;
    } else if (event.key == "ArrowRight") {
      snake.direction = Vector.right;
    } else if (event.key == "ArrowLeft") {
      snake.direction = Vector.left;
    }
  }
}
document.addEventListener("keydown", Controller.readInput);

class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  add(vector) {
    this.x = this.x + vector.x;
    this.y = this.y + vector.y;
  }

  static get down() {
    return new Vector(0, 25);
  }
  static get right() {
    return new Vector(25, 0);
  }
  static get up() {
    return new Vector(0, -25);
  }
  static get left() {
    return new Vector(-25, 0);
  }
}

class Board {
  draw() {
    ctx.fillStyle = "#b0bb00";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }
}

class Snake {
  constructor() {
    this.position = new Vector(100, 100);
    this.direction = Vector.right;
    this.tail = new Tail(new Vector(75, 100));
  }

  update() {
    this.tail.update();
    this.move();
    this.draw();
  }

  move() {
    this.position.add(this.direction);
  }

  draw() {
    ctx.fillStyle = "#5f4f00";
    ctx.fillRect(this.position.x, this.position.y, 25, 25);
  }
}

class Tail {
  constructor(position) {
    this.position = position;
  }

  draw() {
    ctx.fillStyle = "#5f4f00";
    ctx.fillRect(this.position.x, this.position.y, 25, 25);
  }

  move() {
    this.position = new Vector(
      snake.position.x,
      snake.position.y
    );
  }

  update() {
    this.move();
    this.draw();
  }
}

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var board = new Board();
var snake = new Snake();

function update() {
  board.draw();
  snake.update();
}
setInterval(update, 250);
