import React from "react";

function ResetButton({ handleReset }) {
    return (
        <button
            style={{
                background: "#fff",
                color: "#000",
                padding: "8px 16px",
                borderRadius: "4px",
                margin: "0 1rem",
            }}
            className="incorrect"
            onClick={handleReset}
        >
            <strong>Play again?</strong>
        </button>
    );
}

export default ResetButton;
