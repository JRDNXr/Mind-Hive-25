import './styles/grid.css'

export default function GridLayout() {
    return (
        <div className="grid">
            {[...Array(25)].map((_, i) => (
                <div key={i} className="cell"></div>
            ))}
        </div>
    );
}