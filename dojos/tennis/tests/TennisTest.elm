module TennisTest exposing (suite)

import Expect
import Tennis
import Test exposing (..)


suite : Test
suite =
    describe "Tennis"
        [ test "new game" <|
            \_ ->
                Tennis.init
                    |> Tennis.scoreToString
                    |> Expect.equal "Love-Love"
        , test "player 1 scores should get 15-Love" <|
            \_ ->
                Tennis.init
                    |> Tennis.player1Scores
                    |> Tennis.scoreToString
                    |> Expect.equal "15-Love"
        , test "player 2 scores should get Love-15" <|
            \_ ->
                Tennis.init
                    |> Tennis.player2Scores
                    |> Tennis.scoreToString
                    |> Expect.equal "Love-15"
        , test "player 1 and player 2 scores should get 15-15" <|
            \_ ->
                Tennis.init
                    |> Tennis.player1Scores
                    |> Tennis.player2Scores
                    |> Tennis.scoreToString
                    |> Expect.equal "15-15"
        , test "player 1 has 40 and scores should win the game" <|
            \_ ->
                { score1 = 3
                , score2 = 0
                }
                    |> Tennis.player1Scores
                    |> Tennis.scoreToString
                    |> Expect.equal "game player 1"
        , test "player 2 has 40 and scores should win the game" <|
            \_ ->
                { score1 = 0
                , score2 = 3
                }
                    |> Tennis.player2Scores
                    |> Tennis.scoreToString
                    |> Expect.equal "game player 2"
        , test "player 1 & player 2 have 40 and player 1 scores should go to advantage player 1" <|
            \_ ->
                { score1 = 3
                , score2 = 3
                }
                    |> Tennis.player1Scores
                    |> Tennis.scoreToString
                    |> Expect.equal "Advantage player 1"
        , test "player 1 & player 2 have 40 and player 2 scores should go to advantage player 2" <|
            \_ ->
                { score1 = 3
                , score2 = 3
                }
                    |> Tennis.player2Scores
                    |> Tennis.scoreToString
                    |> Expect.equal "Advantage player 2"
        , test "player 1 has forty and  player 2 scores should go to deuce (40-40)" <|
            \_ ->
                { score1 = 3
                , score2 = 2
                }
                    |> Tennis.player2Scores
                    |> Tennis.scoreToString
                    |> Expect.equal "Deuce"
        , test "player 1 has advantage & player 2 score should go to deuce" <|
            \_ ->
                { score1 = 4
                , score2 = 3
                }
                    |> Tennis.player2Scores
                    |> Tennis.scoreToString
                    |> Expect.equal "Deuce"
        , test "simulate a game when only player 1 scores" <|
            \_ ->
                Tennis.init
                    |> Tennis.player1Scores
                    |> Tennis.player1Scores
                    |> Tennis.player1Scores
                    |> Tennis.player1Scores
                    |> Tennis.scoreToString
                    |> Expect.equal "game player 1"
        , test "simulate a tied game when player 1 win" <|
            \_ ->
                Tennis.init
                    |> Tennis.player1Scores
                    -- 15 - 0
                    |> Tennis.player2Scores
                    -- 15 - 15
                    |> Tennis.player1Scores
                    -- 30 - 15
                    |> Tennis.player2Scores
                    -- 30 - 30
                    |> Tennis.player1Scores
                    -- 40 - 30
                    |> Tennis.player2Scores
                    -- Deuce
                    |> Tennis.player1Scores
                    -- Adv p 1
                    |> Tennis.player1Scores
                    -- game player 1
                    |> Tennis.scoreToString
                    |> Expect.equal "game player 1"
        ]
