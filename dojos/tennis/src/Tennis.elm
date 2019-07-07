module Tennis exposing (Game, init, player1Scores, player2Scores, scoreToString)

-- Declare score constants 
forty = 3
gamePoint = 4

type GameState
    = Normal
    | Player1Win
    | Player2Win
    | AdvantagePlayer1
    | AdvantagePlayer2
    | Deuce


type alias Game =
    { score1 : Int
    , score2 : Int
    }


init : Game
init =
    { score1 = 0
    , score2 = 0
    }


player1Scores : Game -> Game
player1Scores game =
    if game.score2 == gamePoint then
        { game | score2 = game.score2 - 1 }
    else
        { game | score1 = game.score1 + 1 }


player2Scores : Game -> Game
player2Scores game =
    if game.score1 == gamePoint then
        { game | score1 = game.score1 - 1 }
    else
        { game | score2 = game.score2 + 1 }


scoreToString : Game -> String
scoreToString game =
    let
        gamestate =
            computedGameState game
    in
    case gamestate of
        Normal ->
            scoreToStringWhenNormal game

        Player1Win ->
            "game player 1"

        Player2Win ->
            "game player 2"

        AdvantagePlayer1 ->
            "Advantage player 1"

        AdvantagePlayer2 ->
            "Advantage player 2"

        Deuce ->
            "Deuce"

computedGameState : Game -> GameState
computedGameState game =
    if game.score1 == forty && game.score2 == forty then
        Deuce

    else if game.score1 < gamePoint && game.score2 < gamePoint then
        Normal

    else if game.score1 == gamePoint && game.score2 == forty then
        AdvantagePlayer1

    else if game.score2 == gamePoint && game.score1 == forty then
        AdvantagePlayer2

    else if game.score1 > game.score2 then
        Player1Win

    else
        Player2Win

scoreToStringWhenNormal : Game -> String
scoreToStringWhenNormal game =
    stringFromSingleScore game.score1
        ++ "-"
        ++ stringFromSingleScore game.score2

stringFromSingleScore : Int -> String
stringFromSingleScore score =
    case score of
        0 ->
            "Love"

        1 ->
            "15"

        2 ->
            "30"

        3 ->
            "40"

        _ ->
            "Unhandled score"
