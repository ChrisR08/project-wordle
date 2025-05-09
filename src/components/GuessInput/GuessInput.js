import React from "react";

const title = `Enter a 5 letter word`;

function GuessInput({ handleSubmitGuess, disabled }) {
    const [input, setInput] = React.useState(``);

    return (
        <form
            className="guess-input-wrapper"
            onSubmit={(e) => {
                e.preventDefault();
                handleSubmitGuess(input);
                setInput(``);
            }}
        >
            <label htmlFor="guess-input">Enter guess:</label>
            <input
                id="guess-input"
                type="text"
                placeholder={title}
                required
                pattern="[a-zA-Z]{5}"
                title={title}
                minLength={5}
                maxLength={5}
                value={input}
                onChange={(e) => setInput(e.target.value.toUpperCase())}
                disabled={disabled}
            />
        </form>
    );
}

export default GuessInput;
