import React from "react";

export default function NumberGrid({ numbers, clickedNumber, handleClick }) {
    return (
        <div className="grid-container">
            <div className="grid">
                {numbers.map((num) => (
                    <button
                        key={num}
                        className="grid-item"
                        onClick={() => handleClick(num)}
                    >
                        {num}
                    </button>
                ))}
            </div>
        </div>
    );
}