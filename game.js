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

  static add(first, second) {
    return new Vector(
      first.x + second.x,
      first.y + second.y
    );
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
    this.tail = new Tail(new Vector(75, 100), this, 0);
  }

  update() {
    this.tail.update();
    this.move();
    this.draw();
  }

  move() {
    this.position = Vector.add(this.position, this.direction);
  }

  draw() {
    ctx.fillStyle = "#5f4f00";
    ctx.fillRect(this.position.x, this.position.y, 25, 25);
  }
}

class Tail {
  constructor(position, parent, currentSize) {
    this.position = position;
    this.parent = parent;
    if (currentSize < startSize) {
      this.tail = new Tail(this.position, this, currentSize + 1);
    }
  }

  draw() {
    ctx.fillStyle = "#5f4f00";
    ctx.fillRect(this.position.x, this.position.y, 25, 25);
  }

  move() {
    this.position = new Vector(
      this.parent.position.x,
      this.parent.position.y
    );
  }

  update() {
    if (this.tail) { this.tail.update(); }
    this.move();
    this.draw();
  }
}
var startSize = 5;
var score = 0;
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var board = new Board();
var snake = new Snake();

function update() {
  board.draw();
  snake.update();
}
setInterval(update, 250);
