import React from "react";

export default function StartButton({ startGame }) {
    return (
        <button className="start-btn" onClick={startGame}>
            Start Game
        </button>
    );
}