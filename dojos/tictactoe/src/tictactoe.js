export default class TicTacToe {
  constructor() {
    this.grid = [
      new Array(0, 0, 0),
      new Array(0, 0, 0),
      new Array(0, 0, 0)
    ];
    this.player = 1;

  }

  hello() {
    return "Hello world";
  }

  play(x, y) {

    if (this.grid[y - 1][x - 1] == 0) {

      this.grid[y - 1][x - 1] = this.player;
      if (this.player == 1)
        this.player = 2;
      else this.player = 1;

      return true;
    }
    return false;
  }
}