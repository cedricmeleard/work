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
    if (this.winner !== 0)
      return true;

    // //return false if arry contains 0
    // let transformed = this.grid.map(p => p.includes(0));
    // return !transformed.includes(false);

    for (let i = 0; i < this.grid.length; i++) {
      for (let j = 0; j < this.grid[i].length; j++) {
        if (this.grid[i][j] === 0) {
          return false;
        }
      }
    }
    return true;
  }

  changePlayer(currentPlayer) {
    return currentPlayer === 1 ? 2 : 1;
  }

  //add player value on a certain cell of grid
  setPlayerChoice(rowIndex, colIndex) {
    this.grid[rowIndex][colIndex] = this.player;
  }

  //player play, shoudl return true if ok, otherwise false

  play(x, y) {

    let rowIndex = y - 1;
    let colIndex = x - 1;
    //introduce closure
    let isValidMove = () => {
      return !this.ended && this.grid[rowIndex][colIndex] === 0;
    }

    if (isValidMove()) {
      //affects played value to grid
      this.setPlayerChoice(rowIndex, colIndex);

      this.player = this.changePlayer(this.player);
      this.winner = this.detectWin(colIndex, rowIndex);
      return true;
    }
    return false;
  }

  //get winner if a winner exists
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