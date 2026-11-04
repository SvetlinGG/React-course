import { useState } from 'react';
import { music } from '../data/music';


export default function MusicCard({album, artist, genre, year}) {

  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  }
  

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
          onClick={handleLike}
          aria-label={liked ? 'Unlike' : 'Like'}
        >
          {liked ? '♥' : '♡'} {liked ? 'Liked' : 'Like'}
        </button>
      </div>
    </article>
  );
}
