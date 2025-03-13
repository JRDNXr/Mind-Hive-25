import { useState } from "react";

import './styles/gameTitles.css';
import brainImg from './assets/brain.png';

export default function GameMem({ setNumbers }) {
    // Shuffle function to randomize numbers
    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]; // Swap elements
        }
        return array;
    };

    // This function will be called when the "BRAIN" button is clicked
    const startGame = () => {
        const numbersArray = Array.from({ length: 25 }, (_, i) => i + 1);
        const shuffledNumbers = shuffleArray(numbersArray);
        setNumbers(shuffledNumbers);  // Pass the shuffled numbers to App.jsx via setNumbers
    };

    return (
        <div className="titles-container">
            <img src={brainImg} alt="Brain" className="brain-img" onClick={startGame} />
        </div>
    );
}