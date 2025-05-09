import React from "react";
import ResetButton from "../ResetButton";

function Banner({ isCorrect, numOfGuesses, answer, handleReset }) {
    if (isCorrect) {
        const numOfGuessesMsg =
            numOfGuesses > 1
                ? `${numOfGuesses} guesses!`
                : `${numOfGuesses} guess!`;
        return (
            <div className="happy banner">
                <p>
                    <strong>Congratulations!</strong> Got it in{" "}
                    <strong>{numOfGuessesMsg}</strong>
                    {` `}
                    <ResetButton handleReset={handleReset} />
                </p>
            </div>
        );
    } else if (!isCorrect && numOfGuesses >= 6) {
        return (
            <div className="sad banner">
                <p>
                    Sorry, the correct answer is <strong>{answer}</strong>.{" "}
                    <ResetButton handleReset={handleReset} />
                </p>
            </div>
        );
    }
}

export default Banner;
