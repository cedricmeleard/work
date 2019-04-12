export default class TicTacToe {
  constructor() {
    this.grid = [
      new Array(0, 0, 0),
      new Array(0, 0, 0),
      new Array(0, 0, 0)
    ];
    this.player = 1;
    this.winner = 0;

  }

  get ended() {
    if (this.winner != 0)
      return true;

    for (let i = 0; i < this.grid.length; i++) {
      for (let j = 0; j < this.grid[i].length; j++) {
        if (this.grid[i][j] === 0) {
          return false;
        }
      }
    }
    return true;
  }

  hello() {
    return "Hello world";
  }

  play(x, y) {

    if (!this.ended && this.grid[y - 1][x - 1] == 0) {

      this.grid[y - 1][x - 1] = this.player;
      if (this.player == 1)
        this.player = 2;
      else this.player = 1;
      this.winner = this.detectWin(x - 1, y - 1);
      return true;
    }
    return false;
  }

  equals(x1, y1, x2, y2, x3, y3) {
    let a = this.grid[y1][x1];
    let b = this.grid[y2][x2];
    let c = this.grid[y3][x3];
    if (a === b && b === c)
      return a;
    return 0;
  }

  detectWin(x, y) {

    let result = this.equals(x, 0, x, 1, x, 2);
    if (result == 0) {
      result = this.equals(0, y, 1, y, 2, y);
      if (result == 0 && (x + y) % 2 == 0) {
        result = this.equals(0, 0, 1, 1, 2, 2);
        if (result == 0) {
          result = this.equals(0, 2, 1, 1, 2, 0);
        }
      }
    }
    return result;
  }

}