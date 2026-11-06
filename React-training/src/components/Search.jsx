import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import { search } from "../api/musicbrainz";
import MusicCard from "./MusicCard";

const LABELS = { artist: "artists", album: "albums", song: "songs" };

export default function Search({ collection, onToggle }) {
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type") || "artist";
  const q = searchParams.get("q") || "";
  const key = `${type}:${q}`;

  // result remembers for which search it is -> "loading" = result is for an old search
  const [result, setResult] = useState({ key: null, items: [], error: null });
  const loading = q !== "" && result.key !== key;

  useEffect(() => {
    if (!q) return;
    let ignore = false; // if the user searches again before this finishes

    search(type, q)
      .then((items) => {
        if (!ignore) setResult({ key, items, error: null });
      })
      .catch((err) => {
        if (!ignore) setResult({ key, items: [], error: err.message });
      });

    return () => {
      ignore = true;
    };
  }, [type, q, key]);

  if (!q) return <p className="search__message">Type something in the search box.</p>;
  if (loading) return <p className="search__message">Searching {LABELS[type]}...</p>;
  if (result.error) return <p className="search__message search__message--error">Error: {result.error}</p>;

  const { items } = result;

  return (
    <section className="search">
      <h2 className="search__title">
        {items.length} {LABELS[type]} for &quot;{q}&quot;
      </h2>

      {type === "artist" && (
        <ul className="search__list">
          {items.map((artist) => (
            <li key={artist.id} className="search__row">
              <span className="search__initial">{artist.name.charAt(0)}</span>
              <div>
                <p className="search__name">{artist.name}</p>
                <p className="search__sub">
                  {[artist.type, artist.country, artist.disambiguation].filter(Boolean).join(" · ")}
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}

      {type === "album" && (
        <div className="music-list">
          {items.map((album) => (
            <MusicCard
              key={album.id}
              {...album}
              liked={collection.some((a) => a.id === album.id)}
              onToggle={() => onToggle(album)}
            />
          ))}
        </div>
      )}

      {type === "song" && (
        <ul className="search__list">
          {items.map((song) => (
            <li key={song.id} className="search__row">
              {song.cover ? (
                <img
                  className="search__cover"
                  src={song.cover}
                  alt={song.album}
                  loading="lazy"
                  onError={(e) => (e.currentTarget.style.visibility = "hidden")}
                />
              ) : (
                <span className="search__initial">{song.title.charAt(0)}</span>
              )}
              <div>
                <p className="search__name">{song.title}</p>
                <p className="search__sub">
                  {[song.artist, song.album, song.year].filter(Boolean).join(" · ")}
                </p>
              </div>
              <span className="search__duration">{song.duration}</span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
