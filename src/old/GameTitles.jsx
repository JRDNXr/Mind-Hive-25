
import './styles/gameTitles.css'

export default function GameTitles({ onBrainClick }) {
    return (
        <div className="titles-container">
            <button className="brain-button">SPEED</button>
            <button className="brain-button">SPEED</button>
            <button className="brain-button">HIDE</button>
        </div>
    );
}