# Elm tennis Katas

source orign from https://github.com/dillonkearns/elm-katas

You can use integrated CSS based on bulma
https://bulma.io/documentation/

## Tennis Kata

Goal: use TDD to create a tennis scoreboard page. Clicking on the
`Player 1 Scored` and `Player 2 Scored` buttons will update the scoreboard.

## Scoring process

The scoring system is rather simple:

1. Each player can have either of these points in one game 0, 15, 30, 40

2. If you have 40 and you win the ball you win the game, however there are special rules.

3. If both have 40 the players are deuce.

   > And if...
   >
   > - the game is in deuce, the winner of a ball will have advantage and game ball.
   > - the player with advantage wins the ball he wins the game
   > - the player without advantage wins they are back at deuce.

4. A game is won by the first player to have won at least four points in total and at least two points more than the opponent.

5. The running score of each game is described in a manner peculiar to tennis: scores from zero to three points are described as “love”, “fifteen”, “thirty”, and “forty” respectively.

6. If at least three points have been scored by each player, and the scores are equal, the score is “deuce”.

7. If at least three points have been scored by each side and a player has one more point than his opponent, the score of the game is “advantage” for the player in the lead.

## Setup

1. Install dependencies with `npm install -g elm elm-test elm-live elm-format`.
2. Run tests with `npm run test-watch` (or run them just once with `npm test`).
3. Start the app with `npm start` (this will automatically open the browser for you, and the page will auto-reload whenever you save your code).

---

## About Elm

https://elm-lang.org/

---

Alternate description of the rules per Wikipedia ( http://en.wikipedia.org/wiki/Tennis#Scoring ):
