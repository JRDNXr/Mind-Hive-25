export default function NumberGrid() {
    const numbers = Array.from({ length: 25 }, (_, i) => i + 1);

    const shuffledNumbers = numbers
        .map((num) => ({ num, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map((obj) => obj.num);

    return (
        <div className="grid-container">
            <div className="grid">
                {shuffledNumbers.map((num) => (
                    <div key={num} className="grid-item">
                        {num}
                    </div>
                ))}
            </div>
        </div>
    );
}