module Main exposing (main)

import Browser
import Html exposing (Html, button, div, p, text)
import Html.Attributes exposing (class)
import Html.Events exposing (onClick)
import Tennis


type Msg
    = NoOp


type alias Model =
    Tennis.Game


init : Model
init =
    Tennis.init


update : Msg -> Model -> Model
update msg model =
    case msg of
        NoOp ->
            model


view : Model -> Html Msg
view model =
    div [ class "container" ]
        [ div [ class "tile is-vertical" ]
            [ div [ class "tile is-vertical is-6 notification" ]
                [ div [ class "level" ]
                    [ div [ class "level-left" ]
                        [ div [ class "level-item" ]
                            [ button [ class "button is-primary is-large" ] [ text "Player 1 Scored" ]
                            ]
                        ]
                    , div [ class "level-right" ]
                        [ div [ class "level-item" ]
                            [ button [ class "button is-primary is-large" ] [ text "Player 2 Scored" ]
                            ]
                        ]
                    ]
                ]
            , div [ class "tile is-vertical is-6 notification is-info" ]
                [ p [ class "title" ] [ text "Score" ]
                , p [ class "subtitle" ] [ text (Tennis.scoreToString model) ]
                ]
            ]
        ]


main : Program () Model Msg
main =
    Browser.sandbox
        { init = init
        , update = update
        , view = view
        }
