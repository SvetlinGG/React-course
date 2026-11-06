export default function Details({album, artist, genre, year}) {
  return (
    <section className="details">
      <article className="details__card">
        <div className="details__cover">
          <span className="details__initial">{album.charAt(0)}</span>
        </div>

        <div className="details__body">
          <h2 className="details__album">{album}</h2>
          <p className="details__artist">{artist}</p>

          <ul className="details__info">
            <li className="details__row">
              <span className="details__label">Genre</span>
              <span className="details__genre">{genre}</span>
            </li>
            <li className="details__row">
              <span className="details__label">Year</span>
              <span className="details__value">{year}</span>
            </li>
            <li className="details__row">
              <span className="details__label">ID</span>
              <span className="details__value">#1</span>
            </li>
          </ul>

          <div className="details__actions">
            <button type="button" className="details__btn details__btn--like">
              ♡ Like
            </button>
            <button type="button" className="details__btn">
              ← Back
            </button>
          </div>
        </div>
      </article>
    </section>
  );
}
