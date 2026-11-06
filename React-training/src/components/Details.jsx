//import { useEffect, useState } from 'react';
import { Link, useParams } from "react-router";
import { music } from "../data/music";

export default function Details() {

    const {artistId} = useParams();

    // const [artist, setArtist] = useState({});

    // useEffect(() => {
    //     const foundArtist = music.find(item => item.id === artistId);
    //     setArtist(foundArtist);
    // }, [artistId])

    const album = music.find(item => item.id === Number(artistId));

  if (!album) return <p>Album not found</p>;

  
  return (
    <section className="details">
      <article className="details__card">
        <div className="details__cover">
          <span className="details__initial">{album.album}</span>
        </div>

        <div className="details__body">
          <h2 className="details__album">{album.album}</h2>
          <p className="details__artist">{album.artist}</p>

          <ul className="details__info">
            <li className="details__row">
              <span className="details__label">Genre</span>
              <span className="details__genre">{album.genre}</span>
            </li>
            <li className="details__row">
              <span className="details__label">Year</span>
              <span className="details__value">{album.year}</span>
            </li>
            <li className="details__row">
              <span className="details__label">ID</span>
              <span className="details__value">{album.id}</span>
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
