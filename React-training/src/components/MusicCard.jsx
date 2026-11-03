import './music-card.css';

export default function MusicCard() {
  return (
    <article className="music-card">
      <div className="music-card__cover">
        <span className="music-card__initial">Album</span>
      </div>

      <div className="music-card__body">
        <h3 className="music-card__album">Album</h3>
        <p className="music-card__artist">Artist</p>

        <div className="music-card__meta">
          <span className="music-card__genre">Genre</span>
          <span className="music-card__year">Year</span>
        </div>
      </div>
    </article>
  );
}