
//import { music } from '../data/music';
import { Link } from 'react-router';


export default function MusicCard({album, artist, genre, year, liked, onToggle}) {

  

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

        <button
          type="button"
          className={`music-card__like${liked ? ' music-card__like--active' : ''}`}
          aria-pressed={liked}
          onClick={onToggle}
          aria-label={liked ? 'Unlike' : 'Like'}
        >
          {liked ? '♥' : '♡'} {liked ? 'Liked' : 'Like'}
        </button>

        <Link to="/details" className="music-card__details">
          Details
        </Link>
      </div>
    </article>
  );
}
