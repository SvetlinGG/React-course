

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

        <button
          type="button"
          className={`music-card__like${liked ? ' music-card__like--active' : ''}`}
          aria-pressed={liked}
          aria-label={liked ? 'Unlike' : 'Like'}
        >
          {liked ? '♥' : '♡'} {liked ? 'Liked' : 'Like'}
        </button>
      </div>
    </article>
  );
}
