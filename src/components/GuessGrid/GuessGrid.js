import React from "react";
import Guess from "../Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants.js";
import { range } from "../../utils";

function GuessGrid({ guesses, answer, result }) {
    const rows = range(NUM_OF_GUESSES_ALLOWED);
    return (
        <div className="guess-results">
            {rows.map((num) => {
                return (
                    <Guess
                        key={num}
                        word={guesses[num] || ""}
                        answer={answer}
                        result={result}
                    />
                );
            })}
        </div>
    );
}

export default GuessGrid;
