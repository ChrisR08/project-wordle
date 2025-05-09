import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

import GuessInput from "../GuessInput";
import GuessGrid from "../GuessGrid/";
import Banner from "../Banner/";

function Game() {
    const [guesses, setGuesses] = React.useState([]);
    const [isCorrect, setIsCorrect] = React.useState(false);
    // Pick a random word on every pageload.
    const [answer, setAnswer] = React.useState(sample(WORDS));
    console.log(answer);

    function handleSubmitGuess(newGuess) {
        const nextGuesses = [...guesses, newGuess];
        setGuesses(nextGuesses);

        if (newGuess === answer) {
            setIsCorrect(true);
        }
    }

    function handleReset() {
        setGuesses([]);
        setIsCorrect(false);
        setAnswer(sample(WORDS));
    }

    const disabled = isCorrect || guesses.length >= 6 ? true : null;

    return (
        <>
            <GuessGrid guesses={guesses} answer={answer} />
            <GuessInput
                handleSubmitGuess={handleSubmitGuess}
                disabled={disabled}
            />
            {
                <Banner
                    isCorrect={isCorrect}
                    numOfGuesses={guesses.length}
                    answer={answer}
                    handleReset={handleReset}
                />
            }
        </>
    );
}

export default Game;
