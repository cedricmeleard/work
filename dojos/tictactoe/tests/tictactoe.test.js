import TicTacToe from "../src/tictactoe";

test('create TicTacToe object, should not fail', () => {
  expect(new TicTacToe()).toBeDefined();
});

test('call hello, should return Hello world', () => {
  let tictactoe = new TicTacToe();
  expect(tictactoe.hello()).toEqual("Hello world");
});

test("Quand j'initialise le tictactoe, je dispose d'une grille 3x3, vide", () => {
  let tictactoe = new TicTacToe();
  expect(tictactoe.grid).toBeDefined();
  expect(tictactoe.grid).toEqual([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]);
});

test("Quand j'initialise le tictactoe, le joueur 1 est initialisé", () => {
  let tictactoe = new TicTacToe();
  expect(tictactoe.player).toBeDefined();
  expect(tictactoe.player).toEqual(1);
});

test("Player 1 joue 2,2 affectation dans la grid et changement de joueur", () => {
  let tictactoe = new TicTacToe();
  let result = tictactoe.play(2, 2);
  expect(tictactoe.grid).toEqual([
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ]);
  expect(tictactoe.player).toEqual(2);
  expect(result).toBeTruthy();
});

test("Player 1 et player 2 jouent, le joueur courant est le joueur 1 et la grille est OK", () => {
  let tictactoe = new TicTacToe();
  let result = tictactoe.play(2, 2);
  expect(result).toBeTruthy();
  result = tictactoe.play(3, 2);
  expect(tictactoe.player).toEqual(1);
  expect(result).toBeTruthy();
  expect(tictactoe.grid).toEqual([
    [0, 0, 0],
    [0, 1, 2],
    [0, 0, 0],
  ]);
});

test("Player 1 et player 2 jouent dans la meme case, impossible", () => {
  let tictactoe = new TicTacToe();
  tictactoe.play(2, 2);
  let result = tictactoe.play(2, 2);
  expect(tictactoe.player).toEqual(2);
  expect(tictactoe.grid).toEqual([
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ]);
  expect(result).toBeFalsy();
});

test("On s'arrête quand la grille est remplie", () => {
  let tictactoe = new TicTacToe();
  tictactoe.grid = [
    new Array(2, 2, 1),
    new Array(0, 1, 2),
    new Array(2, 2, 1)
  ];
  let result = tictactoe.play(1, 2);

  expect(result).toBeTruthy();
  expect(tictactoe.ended).toBeTruthy();

});