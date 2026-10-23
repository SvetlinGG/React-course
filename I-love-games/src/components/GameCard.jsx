export default function GameCard() {
    return (
        <div className="game">
            <img src="/images/witcher.png" alt="The Witcher 3" />
            <div className="details-overlay">
                <p className="name">The Witcher 3</p>
                <p className="genre">Open World</p>
            <Link to="/details" className="details-button">
                Details
            </Link>
      </div>
    </div>
    );
}