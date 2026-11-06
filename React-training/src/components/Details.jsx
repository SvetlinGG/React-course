import { useState } from 'react';
import { Link, useParams } from "react-router";
import { music } from "../data/music";

export default function Details() {

    const {artistId} = useParams();

    const [artist, setArtist] = useState({})

  
  return (
    <section className="details">
      <article className="details__card">
        <div className="details__cover">
          <span className="details__initial">{music.album}</span>
        </div>

        <div className="details__body">
          <h2 className="details__album">{music.album}</h2>
          <p className="details__artist">{music.artist}</p>

          <ul className="details__info">
            <li className="details__row">
              <span className="details__label">Genre</span>
              <span className="details__genre">{music.genre}</span>
            </li>
            <li className="details__row">
              <span className="details__label">Year</span>
              <span className="details__value">{music.year}</span>
            </li>
            <li className="details__row">
              <span className="details__label">ID</span>
              <span className="details__value">{music.id}</span>
            </li>
          </ul>

          <div className="details__actions">
            <button type="button" className="details__btn details__btn--like">
              ♡ Like
            </button>
            <Link to="/" className="details__btn">
              ← Back
            </Link>
          </div>
        </div>
      </article>
    </section>
  );
}
