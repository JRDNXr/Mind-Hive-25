
import './styles/grid.css';

export default function GridLayout({ numbers, onNumberClick }) {
    return (
        <div className="grid">
            {numbers.map((num, index) => (
                <button key={index} className="grid-title-btns" onClick={() => onNumberClick(num)}>
                    {num}
                </button>
            ))}
        </div>
    );
}