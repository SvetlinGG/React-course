import './MusicCard.css';

export default function MusicCard({ artist, album, genre, year }) {
  return (
    <article className="music-card">
      <div className="music-card__cover">
        <span className="music-card__initial">{album.charAt(0)}</span>
      </div>

      <div className="music-card__body">
        <h3 className="music-card__album">{album}</h3>
        <p className="music-card__artist">{artist}</p>

        <div className="music-card__meta">
          <span className="music-card__genre">{genre}</span>
          <span className="music-card__year">{year}</span>
        </div>
      </div>
    </article>
  );
}