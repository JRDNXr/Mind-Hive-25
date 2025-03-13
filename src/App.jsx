import { useState, useEffect } from "react";
import './styles/app.css';

import rocketShipImg from './assets/rocketship.png';

export default function App() {
    const [numbers, setNumbers] = useState([]);
    const [clickedNumbers, setClickedNumbers] = useState([]);
    const [timer, setTimer] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [gameStarted, setGameStarted] = useState(false);  // Add state for game start
    const [rocketClicked, setRocketClicked] = useState(false);  // Add state for rocket click

    useEffect(() => {
        const nums = Array.from({ length: 25 }, (_, i) => i + 1);
        setNumbers(shuffle(nums));  // Shuffle numbers for randomness
    }, []);

    useEffect(() => {
        let interval;
        if (gameStarted && !gameOver) {
            interval = setInterval(() => {
                setTimer((prev) => prev + 1);  // Increment timer every second
            }, 1000);
        } else {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [gameStarted, gameOver]);

    const shuffle = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    const handleClick = (number) => {
        if (!gameStarted) {
            setGameStarted(true);  // Start the game when the first number is clicked
        }

        if (clickedNumbers.length === 0 && number === 1) {
            setClickedNumbers([number]);
        } else if (clickedNumbers[clickedNumbers.length - 1] === number - 1) {
            setClickedNumbers([...clickedNumbers, number]);
        }

        if (clickedNumbers.length === 24) {
            setGameOver(true);  // End the game if all numbers are clicked in order
        }
    };

    const handleStartClick = () => {
        setRocketClicked(true);  // Mark the rocket as clicked
        setGameStarted(true);
        setClickedNumbers([]);  // Reset the clicked numbers
        setGameOver(false);  // Reset game over state
        setTimer(0);  // Reset timer
    };

    return (
        <div className="app-container">
            <div className="grid">
                {numbers.map((num) => (
                    <button
                        key={num}
                        className="grid-item"
                        onClick={() => handleClick(num)}
                        disabled={clickedNumbers.includes(num) || gameOver || !rocketClicked}  // Disable until rocket is clicked
                    >
                        {num}
                    </button>
                ))}
            </div>
            <img src={rocketShipImg} alt="Rocket Ship" className="rocket-img" onClick={handleStartClick} />
            <div className="timer">
                <h2>Time: {timer}s</h2>
            </div>
            {gameOver && (
                <div className="game-over">
                    <h2>Game Over!</h2>
                    <p>Time Elapsed: {timer} seconds</p>
                </div>
            )}
        </div>
    );
}