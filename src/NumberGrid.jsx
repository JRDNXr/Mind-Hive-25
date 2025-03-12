import { useState, useEffect } from "react";

export default function NumberGrid() {
    const [numbers, setNumbers] = useState([]); // Holds the shuffled numbers
    const [clickedNumber, setClickedNumber] = useState(1); // Start from number 1
    const [gameStarted, setGameStarted] = useState(false); // To track if game started
    const [timer, setTimer] = useState(0); // Timer to track how long it takes
    const [gameOver, setGameOver] = useState(false); // Game over flag
    const [startTime, setStartTime] = useState(null); // To track start time of the game

    useEffect(() => {
        // Shuffle the numbers once the component mounts
        const shuffledNumbers = Array.from({ length: 25 }, (_, i) => i + 1).sort(() => Math.random() - 0.5);
        setNumbers(shuffledNumbers);
    }, []);

    useEffect(() => {
        // Start the timer once the game starts
        let interval;
        if (gameStarted && !gameOver) {
            interval = setInterval(() => {
                setTimer((prevTime) => prevTime + 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [gameStarted, gameOver]);

    // Handle number click event
    const handleClick = (num) => {
        if (num === clickedNumber) {
            // Update the number that the player should click next
            setClickedNumber(clickedNumber + 1);

            if (clickedNumber === 25) {
                // End the game when all numbers are clicked in order
                setGameOver(true);
            }
        }
    };

    // Start game function
    const startGame = () => {
        setGameStarted(true);
        setClickedNumber(1); // Start with 1
        setStartTime(Date.now());
        setGameOver(false);
        setTimer(0); // Reset timer
    };

    return (
        <div className="game-container">
            <h1>Click the Numbers in Ascending Order!</h1>

            {!gameStarted && !gameOver && (
                <button className="start-btn" onClick={startGame}>
                    Start Game
                </button>
            )}

            {gameOver && (
                <div className="game-over">
                    <h2>Game Over!</h2>
                    <p>Time taken: {timer} seconds</p>
                </div>
            )}

            <div className="grid-container">
                <div className="grid">
                    {numbers.map((num) => (
                        <button
                            key={num}
                            className="grid-item"
                            onClick={() => handleClick(num)} // All buttons are clickable
                        >
                            {num}
                        </button>
                    ))}
                </div>
            </div>

            {gameStarted && !gameOver && (
                <div className="timer">
                    <p>Time: {timer} seconds</p>
                    <p>Click Number: {clickedNumber}</p> {/* Display the number the user needs to find */}
                </div>
            )}
        </div>
    );
}