import React from "react";

export default function GameOver({ timer }) {
    const formatTime = (timeInMs) => {
        const seconds = Math.floor(timeInMs / 1000);
        const milliseconds = timeInMs % 1000;
        return `${seconds}.${milliseconds.toString().padStart(3, "0")}`;
    };

    return (
        <div className="game-over">
            <h2>Game Over!</h2>
            <p>Time taken: {formatTime(timer)} seconds</p>
        </div>
    );
}