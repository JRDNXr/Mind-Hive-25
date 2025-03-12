import React from "react";

export default function Timer({ timer, clickedNumber }) {
    const formatTime = (timeInMs) => {
        const seconds = Math.floor(timeInMs / 1000);
        const milliseconds = timeInMs % 1000;
        return `${seconds}.${milliseconds.toString().padStart(3, "0")}`;
    };

    return (
        <div className="timer">
            <p>Time: {formatTime(timer)} seconds</p>
            <p>Click Number: {clickedNumber}</p>
        </div>
    );
}