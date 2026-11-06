
//import { music } from '../data/music';
import { Link } from 'react-router';


export default function MusicCard({id, album, artist, genre, year, cover, liked, onToggle}) {



  return (
    <article className="music-card">
      <div className="music-card__cover">
        <span className="music-card__initial">{album.charAt(0)}</span>

        {/* album picture from Cover Art Archive; if it doesn't exist (404) we hide it and the letter stays */}
        {cover && (
          <img
            className="music-card__image"
            src={cover}
            srcSet={`${cover.replace('front-250', 'front-500')} 2x`}
            alt={`${album} cover`}
            loading="lazy"
            onError={(e) => (e.currentTarget.style.display = 'none')}
          />
        )}
      </div>

      <div className="music-card__body">
        <h3 className="music-card__album">{album}</h3>
        <p className="music-card__artist">{artist}</p>

        <div className="music-card__meta">
          {genre && <span className="music-card__genre">{genre}</span>}
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

        <Link to={`/details/${id}`} className="music-card__details">
          Details
        </Link>
      </div>
    </article>
  );
}
