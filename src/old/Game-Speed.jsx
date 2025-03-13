import { useState } from "react";
import "./styles/gameTitles.css";
import rocketshipImg from "./assets/rocketship.png";

export default function GameSpeed({ setNumbers }) {
    const [currentNumber, setCurrentNumber] = useState(1);
    const [startTime, setStartTime] = useState(null);
    const [isGameActive, setIsGameActive] = useState(false);

    // Shuffle function to randomize numbers
    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]; // Swap elements
        }
        return array;
    };

    // Start game when the rocket ship is clicked
    const startGame = () => {
        const numbersArray = Array.from({ length: 25 }, (_, i) => i + 1);
        const shuffledNumbers = shuffleArray(numbersArray);
        setNumbers(shuffledNumbers);

        setCurrentNumber(1);
        setStartTime(Date.now());
        setIsGameActive(true);
    };

    // Handle number click
    const handleNumberClick = (num) => {
        if (!isGameActive) return;

        if (num === currentNumber) {
            if (num === 25) {
                const timeTaken = (Date.now() - startTime) / 1000;
                alert(`You finished in ${timeTaken} seconds!`);
                setIsGameActive(false);
            } else {
                setCurrentNumber((prev) => prev + 1);
            }
        }
    };

    return (
        <>
            <img src={rocketshipImg} alt="Rocket-Ship" className="rocket-img" onClick={startGame} />
        </>
    );
}