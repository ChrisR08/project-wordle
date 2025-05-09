import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ word, answer }) {
    const cells = word ? word.split("") : range(5);
    const result = word ? checkGuess(word, answer) : null;

    return (
        <p className="guess">
            {cells.map((letter, index) => {
                const className = result
                    ? `cell ${result[index].status}`
                    : "cell";
                return (
                    <span key={index} className={className}>
                        {letter === index ? `` : letter}
                    </span>
                );
            })}
        </p>
    );
}

export default Guess;
